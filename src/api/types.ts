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

/** 跟进线索 - 单条线索 */
export interface FollowUpLeadItem {
  /** 线索名称 */
  lead_name: string
  /** 公司名称 */
  company_name: string
  /** 线索简介 */
  lead_intro: string
  /** 当前跟进状态 */
  current_follow_up_status: string
  /** 下次跟进节点 */
  next_follow_up_node: string
  /** 注意事项 */
  precautions: string
  /** 创建日期 */
  create_date: string
}

/** 跟进线索 - 响应数据 */
export type FollowUpLeadsData = { follow_up_leads: FollowUpLeadItem[] }
