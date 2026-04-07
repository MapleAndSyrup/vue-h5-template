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
  OtherAttentionData,
  LandingRequirementDetailData,
  ContactPersonData,
  AiExpressParams,
  AiExpressData,
  ChatStreamParams,
  ChatStreamChunk,
  CurrentFollowUpNodeData,
  AiFollowUpSuggestionData,
  HistoricalFollowUpNodesData,
  IndustryNewsParams,
  IndustryNewsData,
  LoginParams,
  LoginData,
  RegisterParams,
  UpdateCompanyStatusParams,
  HistoricalFollowUpChangeParams,
  ChatResponseData
} from './types'

// ==================== 认证接口 ====================

export function queryLogin(data: LoginParams): Promise<ApiResponse<LoginData>> {
  return http.post(`/auth/login`, data)
}

export function queryRegister(data: RegisterParams): Promise<ApiResponse<LoginData>> {
  return http.post(`/auth/register`, data)
}

export function queryLogout(data: LoginParams): Promise<ApiResponse<null>> {
  return http.post(`/auth/logout`, data)
}

// ==================== 线索接口 ====================

/**
 * 招商线索搜索
 */
export function queryChatBusinessSearch(
  data: ChatBusinessSearchParams
): Promise<ApiResponse<ChatBusinessSearchData>> {
  return http.post(`/company/search`, data)
}

/**
 * 公司详情
 */
export function queryCompanyInfo(data: CompanyInfoParams): Promise<ApiResponse<CompanyInfoData>> {
  return http.post(`/company/company_info`, data)
}

/**
 * 股权信息
 */
export function queryEquityInfo(data: CompanyInfoParams): Promise<ApiResponse<EquityInfoData>> {
  return http.post(`/company/equity_info`, data)
}

/**
 * 落地需求详情
 */
export function queryLandingRequirementDetail(
  data: CompanyInfoParams
): Promise<ApiResponse<LandingRequirementDetailData>> {
  return http.post(`/company/landing_requirement_detail`, data)
}

/**
 * 对接联系人
 */
export function queryContactPerson(
  data: CompanyInfoParams
): Promise<ApiResponse<ContactPersonData>> {
  return http.post(`/company/contact_person`, data)
}

/**
 * 修改公司收藏和手工录入状态
 */
export function updateCompanyStatus(
  data: UpdateCompanyStatusParams
): Promise<ApiResponse<null>> {
  return http.post(`/company/update_company_status`, data)
}

/**
 * 修改公司收藏和手工录入状态接口
 * @param data
 * @returns
 */
export function updateCompanyFollow(data: UpdateCompanyStatusParams) {
  return http.post(`/company/update_company_follow`, data)
}

// ==================== 跟进接口 ====================

/**
 * AI 周计划分析
 */
export function queryAiWeeklyPlanAnalysis(
  data: AiWeeklyPlanAnalysisParams
): Promise<ApiResponse<AiWeeklyPlanAnalysisData>> {
  return http.post(`/follow_up/ai_weekly_plan_analysis`, data)
}

/**
 * 跟进中的线索
 */
export function queryFollowUpLeads(
  data: AiWeeklyPlanAnalysisParams
): Promise<ApiResponse<FollowUpLeadsData>> {
  return http.post(`/follow_up/follow_up_leads`, data)
}

/**
 * 当前跟进节点
 */
export function queryCurrentFollowUpNode(
  data: CompanyInfoParams
): Promise<ApiResponse<CurrentFollowUpNodeData>> {
  return http.post(`/follow_up/current_follow_up`, data)
}

/**
 * AI 跟进建议
 */
export function queryAiFollowUpSuggestion(
  data: CompanyInfoParams
): Promise<ApiResponse<AiFollowUpSuggestionData>> {
  return http.post(`/follow_up/ai_follow_up_suggestion`, data)
}

/**
 * 历史跟进节点
 */
export function queryHistoricalFollowUpNodes(
  data: CompanyInfoParams
): Promise<ApiResponse<HistoricalFollowUpNodesData>> {
  return http.post(`/follow_up/historical_follow_up_nodes`, data)
}

/**
 * 历史跟进节点变更（增删改）
 */
export function queryHistoricalFollowUpChange(
  data: HistoricalFollowUpChangeParams
): Promise<ApiResponse<null>> {
  return http.post(`/follow_up/historical_follow_up_change`, data)
}

// ==================== 其他接口 ====================

/**
 * 投资匹配
 */
export function queryInvestmentMatch(
  data: CompanyInfoParams
): Promise<ApiResponse<InvestmentMatchData>> {
  return http.post(`/other/investment_match`, data)
}

/**
 * 未来发展
 */
export function queryFutureDevelop(
  data: CompanyInfoParams
): Promise<ApiResponse<FutureDevelopData>> {
  return http.post(`/other/future_develop`, data)
}

/**
 * 相关舆情
 */
export function queryRelatedOpinion(
  data: CompanyInfoParams
): Promise<ApiResponse<RelatedOpinionData>> {
  return http.post(`/other/related_opinion`, data)
}

/**
 * 其他关注
 */
export function queryOtherAttention(
  data: CompanyInfoParams
): Promise<ApiResponse<OtherAttentionData>> {
  return http.post(`/other/other_attention`, data)
}

/**
 * 行业动态
 */
export function queryIndustryNews(
  data: IndustryNewsParams
): Promise<ApiResponse<IndustryNewsData>> {
  return http.post(`/other/industry_news`, data)
}

/**
 * AI 快报
 */
export function queryAiExpress(data: AiExpressParams): Promise<ApiResponse<AiExpressData>> {
  return http.post(`/other/ai_express`, data)
}

// ==================== 聊天接口 ====================

/**
 * 非流式聊天
 */
export function queryChatBusiness(data: ChatStreamParams): Promise<ApiResponse<ChatResponseData>> {
  return http.post(`/chat/chat_business`, data)
}

/**
 * 流式聊天 - SSE
 */
export function queryChatStream(
  params: ChatStreamParams,
  callbacks: {
    onMessage: (chunk: ChatStreamChunk) => void
    onError?: (error: Error) => void
    onComplete?: () => void
  }
): AbortController {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => {
    controller.abort()
    callbacks.onError?.(new Error('请求超时，请稍后重试'))
  }, 70000)

  const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://42.121.162.224:8004'
  const url = `${baseURL}/chat/chat_business_stream`

  const token = localStorage.getItem('token')

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify(params),
    signal: controller.signal
  })
    .then(async (response) => {
      clearTimeout(timeoutId)
      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`)
      if (!response.body) throw new Error('Response body is null')

      const reader = response.body.getReader()
      const decoder = new TextDecoder()
      let buffer = ''

      const readStream = async (): Promise<void> => {
        return reader.read().then(({ done, value }) => {
          if (done) return callbacks?.onComplete?.()
          buffer += decoder.decode(value, { stream: true })
          const lines = buffer.split('\n')
          buffer = lines.pop() || ''
          for (const line of lines) {
            if (line.trim()) {
              try {
                callbacks.onMessage?.(JSON.parse(line))
              } catch {
                console.warn('Failed to parse line:', line)
              }
            }
          }
          return readStream()
        })
      }

      return readStream()
    })
    .catch((error) => {
      clearTimeout(timeoutId)
      if (error.name !== 'AbortError') {
        callbacks.onError?.(error instanceof Error ? error : new Error(String(error)))
      }
    })

  return controller
}
