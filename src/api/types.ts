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

/** 招商线索搜索 - 请求参数 */
export interface ChatBusinessSearchParams {
  /** 搜索关键词 */
  name: string
  /** 索引 */
  index: string
}

/** 招商线索搜索 - 单条结果 */
export interface ChatBusinessSearchItem {
  /** 线索名称 */
  lead_name: string
  /** 公司名称 */
  company_name: string
  /** 线索简介 */
  lead_intro: string
  /** 所属行业 */
  industry: string
  /** 所属地区 */
  region: string
  /** 标签列表 */
  tag: string[]
}

/** 招商线索搜索 - 响应数据 */
export type ChatBusinessSearchData = { search_results: ChatBusinessSearchItem[] }

/** 公司详情 - 请求参数 */
export interface CompanyInfoParams {
  /** 索引 */
  index: string
  /** 公司ID */
  company_id: string
}

/** 公司详情 - 响应数据 */
export interface CompanyInfoData {
  /** 公司名称 */
  name: string
  /** 所属行业 */
  industry: string
  /** 公司规模 */
  company_scale: string
  /** 注册地址 */
  registered_address: string
  /** 落地需求 */
  landing_requirement: string
  /** 投资金额 */
  investment_amount: string
  /** 股票代码 */
  stock_code: string
  /** 成立日期 */
  establishment_date: string
  /** 员工规模 */
  employee_scale: string
  /** 实际经营地址 */
  actual_operating_address: string
  /** 公司简介 */
  company_intro: string
  /** 标签列表 */
  tag: string[]
  /** 更新时间 */
  update_time: string
  /** 来源渠道 */
  source_channel: string
  /** 负责人 */
  responsible_representative: string
}
