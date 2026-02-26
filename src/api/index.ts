import { http } from '@/utils/request'
import type { ApiResponse } from '@/utils/request'
import type { AiWeeklyPlanAnalysisParams, AiWeeklyPlanAnalysisData } from './types'

/**
 * AI 周报计划分析
 * @param data 请求参数
 * @returns Promise<ApiResponse<AiWeeklyPlanAnalysisData>>
 */
export function queryAiWeeklyPlanAnalysis(
  data: AiWeeklyPlanAnalysisParams
): Promise<ApiResponse<AiWeeklyPlanAnalysisData>> {
  return http.post(`/api/chat_business/ai_weekly_plan_analysis_mock`, data)
}
