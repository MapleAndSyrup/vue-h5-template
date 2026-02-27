import { http } from '@/utils/request'
import type { ApiResponse } from '@/utils/request'
import type {
  AiWeeklyPlanAnalysisParams,
  AiWeeklyPlanAnalysisData,
  FollowUpLeadsData,
  ChatBusinessSearchParams,
  ChatBusinessSearchData,
  CompanyInfoParams,
  CompanyInfoData,
  InvestmentMatchData,
  FutureDevelopData,
  EquityInfoData,
  RelatedOpinionData,
  OtherAttentionData
} from './types'

/**
 * AI 周报计划分析
 * @param { AiWeeklyPlanAnalysisParams } data 请求参数
 * @returns { Promise<ApiResponse<AiWeeklyPlanAnalysisData>> }
 */
export function queryAiWeeklyPlanAnalysis(
  data: AiWeeklyPlanAnalysisParams
): Promise<ApiResponse<AiWeeklyPlanAnalysisData>> {
  return http.post(`/api/chat_business/ai_weekly_plan_analysis_mock`, data)
}

/**
 * 跟进线索
 * @param { AiWeeklyPlanAnalysisParams } data 请求参数
 * @returns { Promise<ApiResponse<FollowUpLeadsData>> }
 */
export function queryFollowUpLeads(
  data: AiWeeklyPlanAnalysisParams
): Promise<ApiResponse<FollowUpLeadsData>> {
  return http.post(`/api/chat_business/follow_up_leads_mock`, data)
}

/**
 * 招商线索搜索
 * @param { ChatBusinessSearchParams } data 请求参数
 * @returns { Promise<ApiResponse<ChatBusinessSearchData>> }
 */
export function queryChatBusinessSearch(
  data: ChatBusinessSearchParams
): Promise<ApiResponse<ChatBusinessSearchData>> {
  return http.post(`/api/chat_business/search_mock`, data)
}

/**
 * 公司详情
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<CompanyInfoData>> }
 */
export function queryCompanyInfo(data: CompanyInfoParams): Promise<ApiResponse<CompanyInfoData>> {
  return http.post(`/api/chat_business/company_info_mock`, data)
}

/**
 * 投资匹配
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<InvestmentMatchData>> }
 */
export function queryInvestmentMatch(
  data: CompanyInfoParams
): Promise<ApiResponse<InvestmentMatchData>> {
  return http.post(`/api/chat_business/investment_match_mock`, data)
}

/**
 * 未来发展
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<FutureDevelopData>> }
 */
export function queryFutureDevelop(
  data: CompanyInfoParams
): Promise<ApiResponse<FutureDevelopData>> {
  return http.post(`/api/chat_business/future_develop_mock`, data)
}

/**
 * 股权信息
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<EquityInfoData>> }
 */
export function queryEquityInfo(data: CompanyInfoParams): Promise<ApiResponse<EquityInfoData>> {
  return http.post(`/api/chat_business/equity_info_mock`, data)
}

/**
 * 相关舆情
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<RelatedOpinionData>> }
 */
export function queryRelatedOpinion(
  data: CompanyInfoParams
): Promise<ApiResponse<RelatedOpinionData>> {
  return http.post(`/api/chat_business/related_opinion_mock`, data)
}

/**
 * 其他关注
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<OtherAttentionData>> }
 */
export function queryOtherAttention(
  data: CompanyInfoParams
): Promise<ApiResponse<OtherAttentionData>> {
  return http.post(`/api/chat_business/other_attention_mock`, data)
}
