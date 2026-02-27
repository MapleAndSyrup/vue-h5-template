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

/** 投资匹配 - 响应数据 */
export interface InvestmentMatchData {
  /** 行业匹配度 */
  industry_match: number
  /** 政策匹配度 */
  policy_match: number
  /** 资源匹配度 */
  resource_match: number
  /** 匹配分析 */
  match_analysis: string
  /** 标签列表 */
  tag: string[]
}

/** 未来发展 - 响应数据 */
export interface FutureDevelopData {
  /** 市场前景 */
  market_outlook: string
  /** 技术优势 */
  technical_advantage: string
  /** 优势列表 */
  advantages: string[]
  /** 扩张计划 */
  expansion_plan: string
  /** 预期产值 */
  expected_output_value: string
}

/** 股权信息 - 股权结构单条 */
export interface EquityStructureItem {
  /** 股东名称 */
  shareholder_name: string
  /** 持股比例 */
  share_ratio: number
  /** 股东类型 */
  shareholder_type: string
}

/** 股权信息 - 融资历史单条 */
export interface FundingHistoryItem {
  /** 融资轮次 */
  round: string
  /** 融资时间 */
  time: string
  /** 投资方 */
  investors: string[]
  /** 融资金额 */
  amount: string
}

/** 股权信息 - 响应数据 */
export interface EquityInfoData {
  /** 融资阶段 */
  funding_stage: string
  /** 主要投资方 */
  main_investors: string[]
  /** 估值范围 */
  valuation_range: string
  /** 股权结构 */
  equity_structure: EquityStructureItem[]
  /** IPO计划 */
  ipo_plan: string
  /** 实际控制人 */
  actual_controller: string
  /** 融资历史 */
  funding_history: FundingHistoryItem[]
}

/** 相关舆情 - 新闻单条 */
export interface NewsItem {
  /** 新闻标题 */
  news_title: string
  /** 内容 */
  content: string
  /** 时间 */
  time: string
  /** 类型 */
  type: string
}

/** 相关舆情 - 响应数据 */
export type RelatedOpinionData = { news_list: NewsItem[] }

/** 其他关注 - 单条 */
export interface AttentionItem {
  /** 序号 */
  serial_number: number
  /** 关注维度 */
  attention_dimension: string
  /** 具体事项 */
  specific_matter: string
}

/** 其他关注 - 响应数据 */
export type OtherAttentionData = { attention_list: AttentionItem[] }
