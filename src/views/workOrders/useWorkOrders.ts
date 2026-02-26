import { queryAiWeeklyPlanAnalysis } from '@/api'
import { type AiWeeklyPlanAnalysisData } from '@/api/types'

import { useRequest } from '@/utils/tools'

export default function useWorkOrders() {
  const analysisLoading = ref(false)
  // AI周计划分析
  const analysisList = ref<AiWeeklyPlanAnalysisData>()
  // 获取AI周计划分析
  const getAiWeeklyPlanAnalysis = async () => {
    const { data } = await queryAiWeeklyPlanAnalysis({
      company_id: 'company1',
      index: '001'
    })
    analysisList.value = data
  }
  // 页面初始化
  const pageInit = async () => {
    // 获取AI周计划分析
    await useRequest(analysisLoading, getAiWeeklyPlanAnalysis)
  }
  onMounted(async () => {
    await pageInit()
  })

  return {
    /** 周计划分析loading */
    analysisLoading,
    /** 周计划分析列表 */
    analysisList
  }
}
