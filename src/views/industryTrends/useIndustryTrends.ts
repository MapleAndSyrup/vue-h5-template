import { queryAiExpress, queryIndustryNews } from '@/api'
import type {
  AiExpressParams,
  AiExpressData,
  IndustryNewsParams,
  IndustryNewsData
} from '@/api/types'
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
  // 今日日期字符串
  const todayDate = ref('')

  // ai快报请求参数
  const aiExpressParams = ref<AiExpressParams>({ index: '0', tag: '' })
  // ai快报数据
  const aiExpressData = ref<AiExpressData>()

  // 获取ai快报
  const getAiExpress = async () => {
    const { data } = await queryAiExpress(aiExpressParams.value)
    aiExpressData.value = data
  }

  const tags = ref([
    { label: '全部行业', value: '' },
    { label: '制造业', value: '制造业' },
    { label: '科技互联网', value: '互联网' },
    { label: '金融投资', value: '金融投资' },
    { label: '新能源', value: '新能源' }
  ])

  const industryNewsLoading = ref(false)
  const industryNewsParams = ref<IndustryNewsParams>({ tag: '', index: '' })
  const industryNewsData = ref<IndustryNewsData>()
  const getIndustryNews = async () => {
    const { data } = await queryIndustryNews(industryNewsParams.value)
    industryNewsData.value = data
  }

  const tagsRef = ref<HTMLElement | null>(null)

  const handleChangeTag = (tag: string, event: Event) => {
    industryNewsParams.value.tag = tag
    aiExpressParams.value.tag = tag
    getAiExpress()
    getIndustryNews()

    const el = event.currentTarget as HTMLElement
    const container = tagsRef.value
    if (!el || !container) return
    container.scrollTo({
      left: el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2,
      behavior: 'smooth'
    })
  }

  onMounted(async () => {
    todayDate.value = formatDate(new Date())

    useRequest(aiExpressLoading, getAiExpress)
    useRequest(industryNewsLoading, getIndustryNews)

    try {
      const res = await fetch('/app-config.json')
      const config = await res.json()
      if (Array.isArray(config?.bizPool?.tags)) {
        tags.value = config.bizPool.tags
      }
    } catch {
      // 配置加载失败，使用默认 tags
    }
  })

  return {
    tagsRef,
    tags,
    aiExpressLoading,
    aiExpressData,
    todayDate,
    industryNewsLoading,
    industryNewsParams,
    industryNewsData,
    handleChangeTag
  }
}
