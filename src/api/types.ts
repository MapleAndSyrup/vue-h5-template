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
export interface AiWeeklyPlanAnalysisData {
  /** ID */
  id: string
  /** 公司ID */
  company_id: string
  weekly_plan_analysis: AiWeeklyPlanAnalysisItem[]
}

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
export type FollowUpLeadsData = {
  /** id */
  id: string
  /** 公司id */
  company_id: string
  follow_up_leads: FollowUpLeadItem[]
}

/** 招商线索搜索 - 请求参数 */
export interface ChatBusinessSearchParams {
  /** 搜索关键词 */
  name: string
  /** 索引 */
  index: string
  /** 类型 */
  tag: string
}

/** 招商线索搜索 - 单条结果 */
export interface ChatBusinessSearchItem {
  /** 公司id */
  company_id: string
  /** id */
  id: string
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
  /** 图片地址 */
  pic_url: string
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
  /** ID */
  id: string
  /** 公司ID */
  company_id: string
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
  /** 是否收藏 */
  is_favorite: number
  /** 是否手工录入 */
  is_manual: number
}

/** 投资匹配 - 响应数据 */
export interface InvestmentMatchData {
  /** ID */
  id: string
  /** 公司ID */
  company_id: string
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
  /** ID */
  id: string
  /** 公司ID */
  company_id: string
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
  /** ID */
  id: string
  /** 公司ID */
  company_id: string
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
export interface RelatedOpinionData {
  /** ID */
  id: string
  /** 公司ID */
  company_id: string
  news_list: NewsItem[]
}

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
export interface OtherAttentionData {
  /** ID */
  id: string
  /** 公司ID */
  company_id: string
  attention_list: AttentionItem[]
}

/** 落地需求详情 - 响应数据 */
export interface LandingRequirementDetailData {
  /** ID */
  id: string
  /** 公司ID */
  company_id: string
  /** 需求类型 */
  requirement_type: string
  /** 计划投资金额 */
  planned_investment: string
  /** 土地需求 */
  land_demand: string
  /** 人员规模 */
  personnel_scale: string
  /** 具体需求列表 */
  specific_requirements: string[]
  /** 位置偏好 */
  location_preference: string
}

/** 联系人 */
export interface ContactPersonItem {
  /** 姓名 */
  name: string
  /** 职位 */
  position: string
  /** 联系方式 */
  contact_info: string
}

/** 对接联系人 - 响应数据 */
export interface ContactPersonData {
  /** ID */
  id: string
  /** 公司id */
  company_id: string
  /** 联系人列表 */
  contacts: ContactPersonItem[]
  /** 提供方式 */
  source_channel: string
  /** 联系人 */
  responsible_representative: string
}

/** AI 快递 - 请求参数 */
export interface AiExpressParams {
  /** 索引 */
  index: string
  /** 公司ID */
  tag: string
}

/** AI 快递 - 响应数据 */
export interface AiExpressData {
  /** ID */
  id: string
  express_list: {
    id: string
    tag: string
    /** 摘要 */
    summary: string
    /** 投资视角分析 */
    investment_perspective_analysis: string
  }[]
}

/** 当前跟进节点 - 响应数据 */
export interface CurrentFollowUpNodeData {
  /** ID */
  id: string
  /** 公司ID */
  company_id: string
  /** 概览 */
  overview: string
  /** 详情 */
  details: string
  /** 注意事项 */
  precautions: string
  /** 跟进时间 */
  follow_up_time: string
}

/** AI跟进建议 - 响应数据 */
export interface AiFollowUpSuggestionData {
  /** ID */
  id: string
  /** 公司ID */
  company_id: string
  /** 地方招商情况分析 */
  local_investment_analysis: string
  /** 企业情况分析 */
  enterprise_analysis: string
  /** 行业适配度分析 */
  industry_adaptability_analysis: string
  /** 建议招商策略 */
  suggested_investment_strategy: string
  /** 核心谈判策略 */
  core_negotiation_strategy: string
  /** 下一步跟进重点 */
  next_follow_up_focus: string
  /** 潜在风险提示 */
  potential_risk_tips: string
  /** 风险应对建议 */
  risk_response_suggestions: string
}

/** 历史跟进节点 - 单条 */
export interface HistoricalNodeItem {
  /** 时间 */
  time: string
  /** 节点概览 */
  node_overview: string
  /** 节点详情 */
  node_details: string
  /** 联系人 */
  contact_person: string
}

/** 历史跟进节点 - 响应数据 */
export interface HistoricalFollowUpNodesData {
  /** ID */
  id: string
  /** 公司ID */
  company_id: string
  /** 历史节点列表 */
  historical_nodes: HistoricalNodeItem[]
}

/** 行业动态 - 请求参数 */
export interface IndustryNewsParams {
  /** 索引 */
  index: string
  /** 标签 */
  tag: string
}

/** 行业动态 - 单条新闻 */
export interface IndustryNewsItem {
  /** 新闻ID */
  id: string
  /** 标题 */
  title: string
  /** 分类 */
  category: string
  /** 发布日期 */
  publish_date: string
  /** 内容 */
  content: string
  /** 标签列表 */
  tags: string[]
  /** 相关实体 */
  related_entities: string[]
  /** 概念 */
  concepts: string[]
  /** 来源 */
  source: string
  /** 相关度 */
  relevance: string
  /** 来源信息 */
  source_info: string
}

/** 行业动态 - 响应数据 */
export interface IndustryNewsData {
  /** ID */
  id: string
  /** 新闻列表 */
  news_list: IndustryNewsItem[]
}

/** 登录 - 请求参数 */
export interface LoginParams {
  /** 用户手机号/邮箱 */
  phone: string
  /** 用户密码 */
  password: string
  /** 请求索引 */
  index: number
}

/** 注册 - 请求参数 */
export interface RegisterParams {
  /** 手机号 */
  phone: string
  /** 密码 */
  password: string
  /** 请求索引 */
  index: number
}

/** 登录 - 响应数据 */
export interface LoginData {
  /** 用户ID */
  user_id: string
  /** 手机号 */
  phone: string
  /** 姓名 */
  name: string
  /** 角色 */
  role: string
  /** token */
  token: string
  /** 过期时间 */
  expire_time: string
}

/** 修改公司状态 - 请求参数 */
export interface UpdateCompanyStatusParams {
  /** 索引 */
  index: string
  /** 公司ID */
  company_id: string
  /** 是否收藏 */
  is_favorite: number
  /** 是否手工录入 */
  is_manual: number
}

/** 历史跟进节点变更 - 请求参数 */
export interface HistoricalFollowUpChangeParams {
  /** 索引 */
  index: string
  /** 公司ID */
  company_id: string
  /** 操作类型：add, update, delete */
  operation: string
  /** 节点ID，用于 update 和 delete 操作 */
  node_id?: string | null
  /** 节点概述 */
  node_overview?: string | null
  /** 节点详情 */
  node_details?: string | null
  /** 联系人 */
  contact_person?: string | null
  /** 创建日期，格式：YYYY-MM-DD */
  create_date?: string | null
}

/** 非流式聊天 - 响应数据 */
export interface ChatResponseData {
  /** ID */
  id: string
  /** 助手回复 */
  message: string
  /** 会话ID（兼容字段） */
  conversation_id: string
  /** 会话ID */
  session_id?: string | null
  /** 时间戳 */
  timestamp: string
  /** 响应上下文 */
  context?: Record<string, any> | null
}

/** 流式聊天 - 上下文 */
export interface ChatStreamContext {
  [key: string]: any
}

/** 流式聊天 - 请求参数 */
export interface ChatStreamParams {
  /** 消息内容 */
  message: string
  /** 会话ID */
  session_id: string
  /** 是否流式返回 */
  stream: true
  /** 上下文信息 */
  context: ChatStreamContext
}

/** 流式聊天 - 单个数据块 */
export interface ChatStreamChunk {
  /** 数据内容 */
  content: string
  context: unknown
  /** 是否结束 */
  finished: boolean
  /** 内容id */
  session_id: string
  /** 时间戳 */
  timestamp: string
}
