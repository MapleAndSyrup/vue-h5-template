import { queryChatStream } from '@/api'
import type { ChatStreamParams } from '@/api/types'
import useMerchantRecruitmentStore from './store'

// 生成唯一ID：时间戳 + 随机数
const generateUniqueId = (): string => {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substring(2, 8)
  return `${timestamp}${random}`
}

export default function useMerchantRecruitment() {
  const store = useMerchantRecruitmentStore()

  // 是否在当前页面（用于控制错误提示）
  const isActive = ref(false)

  // 展示历史消息
  const showHistory = ref(false)

  // 新建会话
  const addConversation = () => {
    store.clearMessages()
    chatStreamParams.value.session_id = ''
    chatStreamParams.value.message = ''
  }

  // 输入框ref
  const inputRef = ref()
  // 自动调整高度
  const adjustHeight = () => {
    // 获取 var-input 内部的 textarea 元素
    const el = inputRef.value?.$el?.querySelector('textarea') as HTMLTextAreaElement | undefined
    if (!el) return

    // 临时设置以获取真实 scrollHeight
    el.style.height = 'auto'
    el.style.overflowY = 'hidden'

    // 计算高度：在 100px ~ 200px 之间
    let height = el.scrollHeight
    height = Math.max(height, 32) // 最小 32px
    height = Math.min(height, 350) // 最大 350px

    el.style.height = height + 'px'
    // 如果内容超过 200px，显示滚动条
    el.style.overflowY = el.scrollHeight > 200 ? 'auto' : 'hidden'
  }

  // 流式接口参数
  const chatStreamParams = ref<ChatStreamParams>({
    message: '',
    session_id: '',
    stream: true,
    context: { additionalProp1: {} }
  })

  // 发送消息
  const sendMessage = () => {
    const { session_id, message } = chatStreamParams.value

    if (message.trim() === '') return Snackbar.warning('不能发送空白文本')

    // 如果正在流式输出，先取消
    if (store.isStreaming) {
      store.cancelRequest()
    }

    // 确保有 session_id
    if (session_id.trim() === '') {
      chatStreamParams.value.session_id = generateUniqueId()
    }

    // 添加用户消息
    store.addMessage({ role: 'user', content: message, status: 'completed' })

    // 清空输入框并重置高度

    nextTick(() => {
      chatStreamParams.value.message = ''

      nextTick(() => adjustHeight())
    })

    // 添加 AI 消息占位（streaming 状态）
    const aiMsgId = store.addMessage({ role: 'ai', content: '', status: 'streaming' })
    store.isStreaming = true

    // 发起流式请求
    const controller = queryChatStream(chatStreamParams.value, {
      onMessage: (chunk) => {
        // 检测超时消息：content 包含"请求超时"且 finished 为 false
        if (chunk.content.includes('请求超时') && !chunk.finished) {
          // 显示超时错误消息
          store.appendAiContent(aiMsgId, chunk)
          // 标记为错误状态并重置所有状态
          store.errorMessage(aiMsgId)
          if (isActive.value) setTimeout(() => Snackbar.error('请求超时，请稍后重试'), 0)
          return
        }
        store.appendAiContent(aiMsgId, chunk)
      },
      onComplete: () => {
        store.completeMessage(aiMsgId)
      },
      onError: (error) => {
        console.error('stream error:', error)
        store.errorMessage(aiMsgId)
        if (isActive.value) setTimeout(() => Snackbar.error(error.message || '请求失败'), 0)
      }
    })

    store.abortController = controller
  }

  // 停止生成
  const stopGenerate = () => {
    store.cancelRequest()
  }

  // 改变历史记录id
  const handleChangeId = (id: string) => {
    store.clearMessages()
    chatStreamParams.value.session_id = id
  }

  onBeforeUnmount(() => {
    isActive.value = false
  })

  onMounted(async () => {
    isActive.value = true
    // 初始化高度
    adjustHeight()

    // 首次进入（消息列表为空）时，从配置文件加载欢迎语
    if (store.messages.length === 0) {
      try {
        const res = await fetch('/app-config.json')
        const config = await res.json()
        const welcome = config?.merchantRecruitment?.welcomeMessage
        if (welcome) {
          store.addMessage({ role: 'ai', content: welcome, status: 'completed' })
        }
      } catch {
        // 配置加载失败，静默忽略
      }
    }
  })

  return {
    /** 展示历史消息 */
    showHistory,
    /** 输入框ref */
    inputRef,
    /** 流式接口参数 */
    chatStreamParams,
    /** 是否正在流式输出 */
    isStreaming: computed(() => store.isStreaming),
    /** 自动调整高度 */
    adjustHeight,
    /** 新建消息 */
    addConversation,
    /** 发送消息 */
    sendMessage,
    /** 改变历史记录id */
    handleChangeId,
    /** 停止生成 */
    stopGenerate
  }
}
