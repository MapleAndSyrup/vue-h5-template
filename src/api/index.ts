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
  IndustryNewsData
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

/**
 * 落地需求详情
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<LandingRequirementDetailData>> }
 */
export function queryLandingRequirementDetail(
  data: CompanyInfoParams
): Promise<ApiResponse<LandingRequirementDetailData>> {
  return http.post(`/api/chat_business/landing_requirement_detail_mock`, data)
}

/**
 * 对接联系人
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<ContactPersonData>> }
 */
export function queryContactPerson(
  data: CompanyInfoParams
): Promise<ApiResponse<ContactPersonData>> {
  return http.post(`/api/chat_business/contact_person_mock`, data)
}

/**
 * 当前跟进节点
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<CurrentFollowUpNodeData>> }
 */
export function queryCurrentFollowUpNode(
  data: CompanyInfoParams
): Promise<ApiResponse<CurrentFollowUpNodeData>> {
  return http.post(`/api/chat_business/current_follow_up_node_mock`, data)
}

/**
 * AI跟进建议
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<AiFollowUpSuggestionData>> }
 */
export function queryAiFollowUpSuggestion(
  data: CompanyInfoParams
): Promise<ApiResponse<AiFollowUpSuggestionData>> {
  return http.post(`/api/chat_business/ai_follow_up_suggestion_mock`, data)
}

/**
 * 历史跟进节点
 * @param { CompanyInfoParams } data 请求参数
 * @returns { Promise<ApiResponse<HistoricalFollowUpNodesData>> }
 */
export function queryHistoricalFollowUpNodes(
  data: CompanyInfoParams
): Promise<ApiResponse<HistoricalFollowUpNodesData>> {
  return http.post(`/api/chat_business/historical_follow_up_nodes_mock`, data)
}

/**
 * 行业动态
 * @param { IndustryNewsParams } data 请求参数
 * @returns { Promise<ApiResponse<IndustryNewsData>> }
 */
export function queryIndustryNews(
  data: IndustryNewsParams
): Promise<ApiResponse<IndustryNewsData>> {
  return http.post(`/api/chat_business/industry_news_mock`, data)
}

/**
 * AI 快递
 * @param { AiExpressParams } data 请求参数
 * @returns { Promise<ApiResponse<AiExpressData>> }
 */
export function queryAiExpress(data: AiExpressParams): Promise<ApiResponse<AiExpressData>> {
  return http.post(`/api/chat_business/ai_express_mock`, data)
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
  const url = `${baseURL}/api/chat_business/chat_business_stream`

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
