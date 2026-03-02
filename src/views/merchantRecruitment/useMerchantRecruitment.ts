import { queryChatStream } from '@/api'
import type { ChatStreamParams } from '@/api/types'

// 生成唯一ID：时间戳 + 随机数
const generateUniqueId = (): string => {
  const timestamp = Date.now().toString(36)
  const random = Math.random().toString(36).substring(2, 8)
  return `${timestamp}${random}`
}

export default function useMerchantRecruitment() {
  // 展示历史消息
  const showHistory = ref(false)

  const addConversation = () => {
    console.log('新建消息')
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
    context: {
      additionalProp1: {}
    }
  })

  // 发送消息
  const sendMessage = async () => {
    const { session_id, message } = chatStreamParams.value
    if (session_id.trim() === '') {
      // 设置唯一 session_id
      chatStreamParams.value.session_id = generateUniqueId()
    }

    if (message.trim() === '') return Snackbar.warning('不能发送空白文本')

    queryChatStream(chatStreamParams.value!, {
      onMessage: (chunk) => {
        console.log('chunk', chunk.content)
      }
    })
  }

  onMounted(() => {
    // 初始化高度
    adjustHeight()
  })

  // 改变历史记录id
  // const handleChangeId = (id: string) => {}

  return {
    /** 展示历史消息 */
    showHistory,
    /** 输入框ref */
    inputRef,
    /** 流式接口参数 */
    chatStreamParams,
    /** 自动调整高度 */
    adjustHeight,
    /** 新建消息 */
    addConversation,
    /** 发送消息 */
    sendMessage
    /** 改变历史记录id */
    // handleChangeId
  }
}
