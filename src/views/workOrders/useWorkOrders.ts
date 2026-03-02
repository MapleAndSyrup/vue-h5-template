import { queryAiWeeklyPlanAnalysis, queryFollowUpLeads } from '@/api'
import type { AiWeeklyPlanAnalysisData, FollowUpLeadsData } from '@/api/types'

import { useRequest } from '@/utils/tools'

export default function useWorkOrders() {
  const router = useRouter()

  // AI周计划分析loading
  const analysisLoading = ref(true)
  // AI周计划分析
  const analysisList = ref<AiWeeklyPlanAnalysisData>()
  // 获取AI周计划分析
  const getAiWeeklyPlanAnalysis = async () => {
    const { data } = await queryAiWeeklyPlanAnalysis({
      company_id: '',
      index: '001'
    })
    analysisList.value = data
  }

  // 跟进线索loading
  const followUpLeadsLoading = ref(true)
  // 跟进线索
  const followUpLeadsData = ref<FollowUpLeadsData>()
  // 获取跟进线索列表
  const getFollowUpLeads = async () => {
    const { data } = await queryFollowUpLeads({
      company_id: 'company1',
      index: '001'
    })
    followUpLeadsData.value = data
  }

  onMounted(() => {
    // 获取AI周计划分析
    useRequest(analysisLoading, getAiWeeklyPlanAnalysis)
    // 获取跟进线索
    useRequest(followUpLeadsLoading, getFollowUpLeads)
  })

  const handleToDetail = (companyId: string) => {
    router.push({ path: '/sub/detail-page', query: { companyId, isHidden: 0 } })
  }

  return {
    /** 周计划分析loading */
    analysisLoading,
    /** 周计划分析列表 */
    analysisList,
    /** 跟进线索loading */
    followUpLeadsLoading,
    /** 跟进线索 */
    followUpLeadsData,
    /** 去详情页面 */
    handleToDetail
  }
}
