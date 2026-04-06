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
  UpdateCompanyStatusParams,
  HistoricalFollowUpChangeParams,
  ChatResponseData
} from './types'

/**
 * AI 周报计划分析
 * @param { AiWeeklyPlanAnalysisParams } data 请求参数
 * @returns { Promise<ApiResponse<AiWeeklyPlanAnalysisData>> }
 */
export function queryAiWeeklyPlanAnalysis(
  data: AiWeeklyPlanAnalysisParams
): Promise<ApiResponse<AiWeeklyPlanAnalysisData>> {
  return http.post(`/chat/ai_weekly_plan_analysis_mock`, data)
}

/**
 * 跟进线索
 * @param { AiWeeklyPlanAnalysisParams } data 请求参数
 * @returns { Promise<ApiResponse<FollowUpLeadsData>> }
 */
export function queryFollowUpLeads(
  data: AiWeeklyPlanAnalysisParams
): Promise<ApiResponse<FollowUpLeadsData>> {
  return http.post(`/chat/follow_up_leads_mock`, data)
}

/**
 * 招商线索搜索
 * @param { ChatBusinessSearchParams } data 请求参数
 * @returns { Promise<ApiResponse<ChatBusinessSearchData>> }
 */
export function queryChatBusinessSearch(
  data: ChatBusinessSearchParams
): Promise<ApiResponse<ChatBusinessSearchData>> {
  return http.post(`/chat/search_mock`, data)
}

/**
 * 公司详情
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<CompanyInfoData>> }
 */
export function queryCompanyInfo(data: CompanyInfoParams): Promise<ApiResponse<CompanyInfoData>> {
  return http.post(`/chat/company_info_mock`, data)
}

/**
 * 投资匹配
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<InvestmentMatchData>> }
 */
export function queryInvestmentMatch(
  data: CompanyInfoParams
): Promise<ApiResponse<InvestmentMatchData>> {
  return http.post(`/chat/investment_match_mock`, data)
}

/**
 * 未来发展
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<FutureDevelopData>> }
 */
export function queryFutureDevelop(
  data: CompanyInfoParams
): Promise<ApiResponse<FutureDevelopData>> {
  return http.post(`/chat/future_develop_mock`, data)
}

/**
 * 股权信息
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<EquityInfoData>> }
 */
export function queryEquityInfo(data: CompanyInfoParams): Promise<ApiResponse<EquityInfoData>> {
  return http.post(`/chat/equity_info_mock`, data)
}

/**
 * 相关舆情
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<RelatedOpinionData>> }
 */
export function queryRelatedOpinion(
  data: CompanyInfoParams
): Promise<ApiResponse<RelatedOpinionData>> {
  return http.post(`/chat/related_opinion_mock`, data)
}

/**
 * 其他关注
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<OtherAttentionData>> }
 */
export function queryOtherAttention(
  data: CompanyInfoParams
): Promise<ApiResponse<OtherAttentionData>> {
  return http.post(`/chat/other_attention_mock`, data)
}

/**
 * 落地需求详情
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<LandingRequirementDetailData>> }
 */
export function queryLandingRequirementDetail(
  data: CompanyInfoParams
): Promise<ApiResponse<LandingRequirementDetailData>> {
  return http.post(`/chat/landing_requirement_detail_mock`, data)
}

/**
 * 对接联系人
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<ContactPersonData>> }
 */
export function queryContactPerson(
  data: CompanyInfoParams
): Promise<ApiResponse<ContactPersonData>> {
  return http.post(`/chat/contact_person_mock`, data)
}

/**
 * 当前跟进节点
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<CurrentFollowUpNodeData>> }
 */
export function queryCurrentFollowUpNode(
  data: CompanyInfoParams
): Promise<ApiResponse<CurrentFollowUpNodeData>> {
  return http.post(`/chat/current_follow_up_node_mock`, data)
}

/**
 * AI跟进建议
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<AiFollowUpSuggestionData>> }
 */
export function queryAiFollowUpSuggestion(
  data: CompanyInfoParams
): Promise<ApiResponse<AiFollowUpSuggestionData>> {
  return http.post(`/chat/ai_follow_up_suggestion_mock`, data)
}

/**
 * 历史跟进节点
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<HistoricalFollowUpNodesData>> }
 */
export function queryHistoricalFollowUpNodes(
  data: CompanyInfoParams
): Promise<ApiResponse<HistoricalFollowUpNodesData>> {
  return http.post(`/chat/historical_follow_up_nodes_mock`, data)
}

/**
 * 行业动态
 * @param { IndustryNewsParams } data 请求参数
 * @returns { Promise<ApiResponse<IndustryNewsData>> }
 */
export function queryIndustryNews(
  data: IndustryNewsParams
): Promise<ApiResponse<IndustryNewsData>> {
  return http.post(`/chat/industry_news_mock`, data)
}

/**
 * AI 快递
 * @param { AiExpressParams } data 请求参数
 * @returns { Promise<ApiResponse<AiExpressData>> }
 */
export function queryAiExpress(data: AiExpressParams): Promise<ApiResponse<AiExpressData>> {
  return http.post(`/chat/ai_express_mock`, data)
}

// ==================== 认证接口 ====================

/**
 * 用户登录
 * @param { LoginParams } data 请求参数
 * @returns { Promise<ApiResponse<LoginData>> }
 */
export function queryLogin(data: LoginParams): Promise<ApiResponse<LoginData>> {
  return http.post(`/auth/login`, data)
}

/**
 * 用户注册
 * @param { LoginParams } data 请求参数
 * @returns { Promise<ApiResponse<LoginData>> }
 */
export function queryRegister(data: LoginParams): Promise<ApiResponse<LoginData>> {
  return http.post(`/auth/register`, data)
}

/**
 * 用户登出
 * @param { LoginParams } data 请求参数
 * @returns { Promise<ApiResponse<null>> }
 */
export function queryLogout(data: LoginParams): Promise<ApiResponse<null>> {
  return http.post(`/auth/logout`, data)
}

// ==================== 线索接口 ====================

/**
 * 搜索线索（正式）
 * @param { ChatBusinessSearchParams } data 请求参数
 * @returns { Promise<ApiResponse<ChatBusinessSearchData>> }
 */
export function queryCompanySearch(
  data: ChatBusinessSearchParams
): Promise<ApiResponse<ChatBusinessSearchData>> {
  return http.post(`/company/search`, data)
}

/**
 * 公司信息（正式）
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<CompanyInfoData>> }
 */
export function queryCompanyInfoReal(
  data: CompanyInfoParams
): Promise<ApiResponse<CompanyInfoData>> {
  return http.post(`/company/company_info`, data)
}

/**
 * 股权情况（正式）
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<EquityInfoData>> }
 */
export function queryEquityInfoReal(data: CompanyInfoParams): Promise<ApiResponse<EquityInfoData>> {
  return http.post(`/company/equity_info`, data)
}

/**
 * 落地需求详情（正式）
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<LandingRequirementDetailData>> }
 */
export function queryLandingRequirementDetailReal(
  data: CompanyInfoParams
): Promise<ApiResponse<LandingRequirementDetailData>> {
  return http.post(`/company/landing_requirement_detail`, data)
}

/**
 * 修改公司收藏和手工录入状态
 * @param { UpdateCompanyStatusParams } data 请求参数
 * @returns { Promise<ApiResponse<null>> }
 */
export function queryUpdateCompanyStatus(
  data: UpdateCompanyStatusParams
): Promise<ApiResponse<null>> {
  return http.post(`/company/update_company_status`, data)
}

/**
 * 对接联系人（正式）
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<ContactPersonData>> }
 */
export function queryContactPersonReal(
  data: CompanyInfoParams
): Promise<ApiResponse<ContactPersonData>> {
  return http.post(`/company/contact_person`, data)
}

// ==================== 跟进接口 ====================

/**
 * AI 周计划分析（正式）
 * @param { AiWeeklyPlanAnalysisParams } data 请求参数
 * @returns { Promise<ApiResponse<AiWeeklyPlanAnalysisData>> }
 */
export function queryAiWeeklyPlanAnalysisReal(
  data: AiWeeklyPlanAnalysisParams
): Promise<ApiResponse<AiWeeklyPlanAnalysisData>> {
  return http.post(`/follow_up/ai_weekly_plan_analysis`, data)
}

/**
 * 跟进中的线索（正式）
 * @param { AiWeeklyPlanAnalysisParams } data 请求参数
 * @returns { Promise<ApiResponse<FollowUpLeadsData>> }
 */
export function queryFollowUpLeadsReal(
  data: AiWeeklyPlanAnalysisParams
): Promise<ApiResponse<FollowUpLeadsData>> {
  return http.post(`/follow_up/follow_up_leads`, data)
}

/**
 * 当前跟进节点（正式）
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<CurrentFollowUpNodeData>> }
 */
export function queryCurrentFollowUpReal(
  data: CompanyInfoParams
): Promise<ApiResponse<CurrentFollowUpNodeData>> {
  return http.post(`/follow_up/current_follow_up`, data)
}

/**
 * AI 跟进建议（正式）
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<AiFollowUpSuggestionData>> }
 */
export function queryAiFollowUpSuggestionReal(
  data: CompanyInfoParams
): Promise<ApiResponse<AiFollowUpSuggestionData>> {
  return http.post(`/follow_up/ai_follow_up_suggestion`, data)
}

/**
 * 历史跟进节点（正式）
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<HistoricalFollowUpNodesData>> }
 */
export function queryHistoricalFollowUpNodesReal(
  data: CompanyInfoParams
): Promise<ApiResponse<HistoricalFollowUpNodesData>> {
  return http.post(`/follow_up/historical_follow_up_nodes`, data)
}

/**
 * 历史跟进节点变更（增删改）
 * @param { HistoricalFollowUpChangeParams } data 请求参数
 * @returns { Promise<ApiResponse<null>> }
 */
export function queryHistoricalFollowUpChange(
  data: HistoricalFollowUpChangeParams
): Promise<ApiResponse<null>> {
  return http.post(`/follow_up/historical_follow_up_change`, data)
}

// ==================== 其他接口 ====================

/**
 * 招商匹配度（正式）
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<InvestmentMatchData>> }
 */
export function queryInvestmentMatchReal(
  data: CompanyInfoParams
): Promise<ApiResponse<InvestmentMatchData>> {
  return http.post(`/other/investment_match`, data)
}

/**
 * 未来发展（正式）
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<FutureDevelopData>> }
 */
export function queryFutureDevelopReal(
  data: CompanyInfoParams
): Promise<ApiResponse<FutureDevelopData>> {
  return http.post(`/other/future_develop`, data)
}

/**
 * 行业新闻动态（正式）
 * @param { IndustryNewsParams } data 请求参数
 * @returns { Promise<ApiResponse<IndustryNewsData>> }
 */
export function queryIndustryNewsReal(
  data: IndustryNewsParams
): Promise<ApiResponse<IndustryNewsData>> {
  return http.post(`/other/industry_news`, data)
}

/**
 * 其他注意事项（正式）
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<OtherAttentionData>> }
 */
export function queryOtherAttentionReal(
  data: CompanyInfoParams
): Promise<ApiResponse<OtherAttentionData>> {
  return http.post(`/other/other_attention`, data)
}

/**
 * 相关舆情（正式）
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<RelatedOpinionData>> }
 */
export function queryRelatedOpinionReal(
  data: CompanyInfoParams
): Promise<ApiResponse<RelatedOpinionData>> {
  return http.post(`/other/related_opinion`, data)
}

/**
 * AI 快报（正式）
 * @param { AiExpressParams } data 请求参数
 * @returns { Promise<ApiResponse<AiExpressData>> }
 */
export function queryAiExpressReal(data: AiExpressParams): Promise<ApiResponse<AiExpressData>> {
  return http.post(`/other/ai_express`, data)
}

// ==================== 聊天接口 ====================

/**
 * 非流式聊天
 * @param { ChatStreamParams } data 请求参数
 * @returns { Promise<ApiResponse<ChatResponseData>> }
 */
export function queryChatBusiness(data: ChatStreamParams): Promise<ApiResponse<ChatResponseData>> {
  return http.post(`/chat/chat_business`, data)
}

/**
 * 流式聊天 - 使用 EventSource 实现 SSE 流式响应
 * @param params
 * @param callbacks
 * @returns
 */
export function queryChatStream(
  params: ChatStreamParams,
  callbacks: {
    onMessage: (chunk: ChatStreamChunk) => void
    onError?: (error: Error) => void
    onComplete?: () => void
  }
): AbortController {
  // 创建取消控制器，用于手动取消请求
  const controller = new AbortController()
  // 70秒超时保护，超时后自动取消请求
  const timeoutId = setTimeout(() => {
    controller.abort()
    callbacks.onError?.(new Error('请求超时，请稍后重试'))
  }, 70000)

  const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://42.121.162.224:8004'
  const url = `${baseURL}/chat/chat_business_stream`

  fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
    signal: controller.signal
  })
    .then(async (response) => {
      // 请求成功，清除超时计时器
      clearTimeout(timeoutId)

      if (!response.ok) throw new Error(`HTTP Error: ${response.status}`)

      if (!response.body) throw new Error('Response body is null')

      // 获取响应体的流读取器
      const reader = response.body?.getReader()
      if (!reader) throw new Error('Response body is null')

      // 创建文本解码器，将二进制数据转字符串
      const decoder = new TextDecoder()
      let buffer = ''

      // 递归读取流数据
      const readStream = async (): Promise<void> => {
        return reader.read().then(({ done, value }) => {
          if (done) return callbacks?.onComplete?.()

          // 解码二进制数据
          buffer += decoder.decode(value, { stream: true })

          // 按行分割
          const lines = buffer.split('\n')
          buffer = lines.pop() || ''

          // 逐行解析JSON，触发消息回调
          for (const line of lines) {
            if (line.trim()) {
              try {
                callbacks.onMessage?.(JSON.parse(line))
              } catch {
                console.warn('Failed to parse line:', line)
              }
            }
          }

          // 继续读取下一批数据
          return readStream()
        })
      }

      return readStream()
    })
    .catch((error) => {
      // 清除超时计时器
      clearTimeout(timeoutId)
      // 非取消操作的错误才触发回调
      if (error.name !== 'AbortError') {
        callbacks.onError?.(error instanceof Error ? error : new Error(String(error)))
      }
    })

  // 返回控制器，供外部取消请求
  return controller
}
