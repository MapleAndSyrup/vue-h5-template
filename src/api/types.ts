/** AI 周报计划分析 - 请求参数 */
export interface AiWeeklyPlanAnalysisParams {
  /** 索引 */
  index: string
  /** 公司ID */
  company_id: string
}

/** AI 周报计划分析 - 单条分析结果 */
export interface AiWeeklyPlanAnalysisItem {
  /** 概览 */
  overview: string
  /** 详情 */
  details: string
  /** 时间段 */
  time_period: string
}

/** AI 周报计划分析 - 响应数据 */
export type AiWeeklyPlanAnalysisData = { weekly_plan_analysis: AiWeeklyPlanAnalysisItem[] }
