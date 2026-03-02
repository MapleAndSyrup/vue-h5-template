import { queryAiExpress } from '@/api'
import type { AiExpressData } from '@/api/types'
import { useRequest } from '@/utils/tools'

// 格式化日期：'2023年10月15日 星期日'
const formatDate = (date: Date): string => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
  const weekDay = weekDays[date.getDay()]
  return `${year}年${month}月${day}日 ${weekDay}`
}

export default function useIndustryTrends() {
  // ai快报loading
  const aiExpressLoading = ref(false)
  // ai快报数据
  const aiExpressData = ref<AiExpressData>()
  // 今日日期字符串
  const todayDate = ref('')

  // 获取ai快报
  const getAiExpress = async () => {
    const { data } = await queryAiExpress({ index: '0', company_id: '' })
    aiExpressData.value = data
  }

  onMounted(() => {
    useRequest(aiExpressLoading, getAiExpress)
    todayDate.value = formatDate(new Date())
  })

  return { aiExpressLoading, aiExpressData, todayDate }
}
