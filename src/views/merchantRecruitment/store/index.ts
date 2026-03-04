import type { ChatStreamChunk } from '@/api/types'

export type MessageStatus = 'sending' | 'streaming' | 'completed' | 'error'

export interface ChatMessage {
  id: string
  role: 'user' | 'ai'
  content: string
  timestamp: number
  status: MessageStatus
}

const useMerchantRecruitmentStore = defineStore('merchantRecruitment', () => {
  const messages = ref<ChatMessage[]>([])
  const isStreaming = ref(false)
  const abortController = ref<AbortController | null>(null)

  /** 添加消息 */
  const addMessage = (msg: Omit<ChatMessage, 'id' | 'timestamp'>) => {
    const id = Date.now().toString(36) + Math.random().toString(36).substring(2, 8)
    messages.value.push({ ...msg, id, timestamp: Date.now() })
    return id
  }

  /** 更新指定消息内容（流式追加） */
  const appendAiContent = (id: string, chunk: ChatStreamChunk) => {
    const msg = messages.value.find((m) => m.id === id)
    if (!msg) return
    msg.content += chunk.content
    if (chunk.finished) {
      msg.status = 'completed'
      isStreaming.value = false
      abortController.value = null
    }
  }

  /** 标记指定消息为完成 */
  const completeMessage = (id: string) => {
    const msg = messages.value.find((m) => m.id === id)
    if (msg) msg.status = 'completed'
    isStreaming.value = false
    abortController.value = null
  }

  /** 标记指定消息为错误 */
  const errorMessage = (id: string) => {
    const msg = messages.value.find((m) => m.id === id)
    if (msg && msg.status !== 'completed') msg.status = 'error'
    isStreaming.value = false
    abortController.value = null
  }

  /** 取消当前请求，保留已输出内容；内容为空则删除该条消息 */
  const cancelRequest = () => {
    if (abortController.value) {
      abortController.value.abort()
      abortController.value = null
    }
    // 内容非空：标记为 completed；内容为空：直接删除
    messages.value = messages.value.filter((m) => {
      if (m.status !== 'streaming') return true
      if (m.content.trim() !== '') {
        m.status = 'completed'
        return true
      }
      return false
    })
    isStreaming.value = false
  }

  /** 清空消息列表（新建会话） */
  const clearMessages = () => {
    cancelRequest()
    messages.value = []
  }

  return {
    messages,
    isStreaming,
    abortController,
    addMessage,
    appendAiContent,
    completeMessage,
    errorMessage,
    cancelRequest,
    clearMessages
  }
})

export default useMerchantRecruitmentStore
