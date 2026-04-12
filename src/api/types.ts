/** AI 周报计划分析 - 请求参数 */
export interface AiWeeklyPlanAnalysisParams {
  /** 调用序号索引 */
  index: string
  /** 公司ID */
  company_id: string
}

/** AI 周报计划分析 - 单条分析结果 */
export interface AiWeeklyPlanAnalysisItem {
  /** 周计划概述 */
  overview: string
  /** 周计划详情 */
  details: string
  /** 时间周期 */
  time_period: string
}

/** AI 周报计划分析 - 响应数据 */
export interface AiWeeklyPlanAnalysisData {
  /** ULID格式的唯一标识符 */
  id: string
  /** 公司ID */
  company_id: string
  /** AI周计划分析列表 */
  weekly_plan_analysis: AiWeeklyPlanAnalysisItem[]
}

/** 跟进线索 - 单条线索 */
export interface FollowUpLeadItem {
  /** 线索ID */
  id: string
  /** 公司ID */
  company_id: string
  /** 线索名 */
  lead_name: string
  /** 公司名 */
  company_name: string
  /** 线索简介 */
  lead_intro: string
  /** 当前跟进情况 */
  current_follow_up_status: string
  /** 下一跟进节点 */
  next_follow_up_node: string
  /** 注意事项 */
  precautions: string
  /** 创建日期 */
  create_date: string
}

/** 跟进线索 - 响应数据 */
export interface FollowUpLeadsData {
  /** 跟进中的线索列表 */
  follow_up_leads: FollowUpLeadItem[]
}

/** 招商线索搜索 - 请求参数 */
export interface ChatBusinessSearchParams {
  /** 搜索关键词（公司/线索名） */
  name: string
  /** 调用序号索引 */
  index: string
  /** 标签 */
  tag: string
}

/** 招商线索搜索 - 单条结果 */
export interface ChatBusinessSearchItem {
  /** 公司ID */
  company_id: string
  /** 公司信用代码 */
  company_code: string
  /** 线索名 */
  lead_name: string
  /** 公司名 */
  company_name: string
  /** 线索简介 */
  lead_intro: string
  /** 行业 */
  industry: string
  /** 所在地区 */
  region: string
  /** 图片URL */
  pic_url: string
  /** 标签列表 */
  tag: string[]
}

/** 招商线索搜索 - 响应数据 */
export type ChatBusinessSearchData = { search_results: ChatBusinessSearchItem[] }

/** 公司详情 - 请求参数 */
export interface CompanyInfoParams {
  /** 调用序号索引 */
  index: string
  /** 公司ID */
  company_id: string
}

/** 公司详情 - 响应数据 */
export interface CompanyInfoData {
  /** 公司ID */
  company_id: string
  /** 公司信用代码 */
  company_code: string
  /** 企业名称 */
  name: string
  /** 行业领域 */
  industry: string
  /** 企业规模 */
  company_scale: string
  /** 注册地 */
  registered_address: string
  /** 落地需求 */
  landing_requirement: string
  /** 投资额度 */
  investment_amount: string
  /** 股票代码 */
  stock_code: string
  /** 成立时间 */
  establishment_date: string
  /** 员工规模 */
  employee_scale: string
  /** 实际经营地 */
  actual_operating_address: string
  /** 企业简介 */
  company_intro: string
  /** 标签列表 */
  tag: string[]
  /** 更新时间 */
  update_time: string
  /** 来源渠道 */
  source_channel: string
  /** 负责代表 */
  responsible_representative: string
  /** 是否收藏 */
  is_favorite: 0 | 1
  /** 是否关注 */
  is_follow: 0 | 1
}

/** 投资匹配 - 响应数据 */
export interface InvestmentMatchData {
  /** ULID格式的唯一标识符 */
  id: string
  /** 公司ID */
  company_id: string
  /** 产业匹配度（百分比） */
  industry_match: number
  /** 政策匹配度（百分比） */
  policy_match: number
  /** 资源匹配度（百分比） */
  resource_match: number
  /** 匹配分析详情 */
  match_analysis: string
  /** 标签列表 */
  tag: string[]
}

/** 未来发展 - 响应数据 */
export interface FutureDevelopData {
  /** ULID格式的唯一标识符 */
  id: string
  /** 公司ID */
  company_id: string
  /** 市场前景 */
  market_outlook: string
  /** 技术优势 */
  technical_advantage: string
  /** 优势点 */
  advantages: string[]
  /** 扩张计划 */
  expansion_plan: string
  /** 预期产值 */
  expected_output_value: string
}

/** 股权信息 - 股东信息 */
export interface EquityStructureItem {
  /** 股东名称 */
  shareholder_name: string
  /** 持股比例（百分比） */
  share_ratio: number
  /** 股东类型（如：自然人、企业法人、机构投资者） */
  shareholder_type: string
}

/** 股权信息 - 融资历史单条 */
export interface FundingHistoryItem {
  /** 轮次 */
  round: string
  /** 时间 */
  time: string
  /** 投资方 */
  investors: string[]
  /** 金额 */
  amount: string
}

/** 股权信息 - 响应数据 */
export interface EquityInfoData {
  /** ULID格式的唯一标识符 */
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
  /** ULID格式的唯一标识符 */
  id: string
  /** 公司ID */
  company_id: string
  /** 舆情新闻列表 */
  news_list: NewsItem[]
}

/** 其他关注 - 单条 */
export interface AttentionItem {
  /** 序号 */
  serial_number: number
  /** 注意点维度 */
  attention_dimension: string
  /** 具体事项 */
  specific_matter: string
}

/** 其他关注 - 响应数据 */
export interface OtherAttentionData {
  /** ULID格式的唯一标识符 */
  id: string
  /** 公司ID */
  company_id: string
  /** 注意事项列表 */
  attention_list: AttentionItem[]
}

/** 落地需求详情 - 响应数据 */
export interface LandingRequirementDetailData {
  /** ULID格式的唯一标识符 */
  id: string
  /** 公司ID */
  company_id: string
  /** 需求类型 */
  requirement_type: string
  /** 拟投资金额 */
  planned_investment: string
  /** 用地需求 */
  land_demand: string
  /** 人员规模 */
  personnel_scale: string
  /** 具体需求 */
  specific_requirements: string[]
  /** 选址偏好 */
  location_preference: string
}

/** 对接联系人 - 联系人单条 */
export interface ContactPersonItem {
  /** 联系人姓名 */
  name: string
  /** 职务 */
  position: string
  /** 联系方式 */
  contact_info: string
}

/** 对接联系人 - 响应数据 */
export interface ContactPersonData {
  /** ULID格式的唯一标识符 */
  id: string
  /** 公司ID */
  company_id: string
  /** 联系人列表 */
  contacts: ContactPersonItem[]
  /** 来源渠道 */
  source_channel: string
  /** 负责代表（招商人员） */
  responsible_representative: string
}

/** AI 快报 - 请求参数 */
export interface AiExpressParams {
  /** 调用序号索引 */
  index: string
  /** 标签，如：科技互联网、制造业、金融投资、新能源 */
  tag: string
}

/** AI 快报 - 响应数据 */
export interface AiExpressData {
  /** ULID格式的唯一标识符 */
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
  /** ULID格式的唯一标识符 */
  id: string
  /** 公司ID */
  company_id: string
  /** 当前节点概述 */
  overview: string
  /** 当前节点详情 */
  details: string
  /** 当前节点注意事项 */
  precautions: string
  /** 跟进时间 */
  follow_up_time: string
}

/** AI跟进建议 - 响应数据 */
export interface AiFollowUpSuggestionData {
  /** ULID格式的唯一标识符 */
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
  /** 跟进时间（ISO格式） */
  time: string
  /** 节点概述 */
  node_overview: string
  /** 节点详情 */
  node_details: string
  /** 对接人员 */
  contact_person: string
}

/** 历史跟进节点 - 响应数据 */
export interface HistoricalFollowUpNodesData {
  /** ULID格式的唯一标识符 */
  id: string
  /** 公司ID */
  company_id: string
  /** 历史跟进节点列表 */
  historical_nodes: HistoricalNodeItem[]
}

/** 行业动态 - 请求参数 */
export interface IndustryNewsParams {
  /** 调用序号索引 */
  index: string
  /** 标签，如：新能源、智能制造等 */
  tag: string
}

/** 行业动态 - 单条新闻 */
export interface IndustryNewsItem {
  /** ULID格式的唯一标识符 */
  id: string
  /** 新闻标题 */
  title: string
  /** 新闻分类 */
  category: string
  /** 发布日期 */
  publish_date: string
  /** 新闻内容 */
  content: string
  /** 标签列表 */
  tags: string[]
  /** 影响主体 */
  related_entities: string[]
  /** 涉及概念 */
  concepts: string[]
  /** 来源 */
  source: string
  /** 招商相关性 */
  relevance: string
  /** 来源信息 */
  source_info: string
}

/** 行业动态 - 响应数据 */
export interface IndustryNewsData {
  /** ULID格式的唯一标识符 */
  id: string
  /** 行业新闻动态列表 */
  news_list: IndustryNewsItem[]
}

/** 登录 - 请求参数 */
export interface LoginParams {
  /** 用户手机号 */
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

/** 用户信息 */
export interface UserInfo {
  /** 用户ID */
  user_id: string
  /** 手机号 */
  phone: string
  /** 姓名 */
  name: string
  /** 角色 */
  role: string
}

/** 查询用户 - 请求参数 */
export interface QueryUserParams {
  /** 请求索引 */
  index: number
  /** 用户ID（可选） */
  user_id?: string | null
  /** 用户手机号（可选） */
  phone?: string | null
}

/** 查询用户 - 响应数据 */
export interface UserListData {
  /** 用户列表 */
  users: UserInfo[]
}

/** 修改用户信息 - 请求参数 */
export interface UpdateUserParams {
  /** 请求索引 */
  index: number
  /** 用户ID */
  user_id: string
  /** 用户名（可选） */
  name?: string | null
  /** 用户密码，长度至少6位（可选） */
  password?: string | null
}

/** 修改公司状态 - 请求参数 */
export interface UpdateCompanyStatusParams {
  /** 调用序号索引 */
  index: string
  /** 公司ID */
  company_id: string
  /** 是否收藏 */
  is_favorite: number
  /** 是否关注 */
  is_follow: number
}

/** 跟进中线索变更 - 请求参数 */
export interface FollowUpLeadsChangeParams {
  /** 调用序号索引 */
  index: string
  /** 公司ID */
  company_id: string
  /** 操作类型：add, update, delete */
  operation: string
  /** 线索ID，用于 update 和 delete 操作 */
  lead_id: string
  /** 线索名称 */
  lead_name: string
  /** 公司名称 */
  company_name: string
  /** 线索介绍 */
  lead_intro: string
  /** 当前跟进状态 */
  current_follow_up_status: string
  /** 下一步跟进节点 */
  next_follow_up_node: string
  /** 注意事项 */
  precautions: string
  /** 创建日期，格式：YYYY-MM-DD */
  create_date: string
  /** 关注用户ID，逗号分隔 */
  userid_follow: string
}

/** 定时新闻拉取任务 - 请求参数 */
export interface ScheduleNewsParams {
  /** 调用序号索引 */
  index: string
  /** 行业名称 */
  industry: string
  /** 新闻数量 */
  count: number
  /** 执行小时 */
  hour: number
  /** 执行分钟 */
  minute: number
}

/** 非流式聊天 - 响应数据 */
export interface ChatResponseData {
  /** ULID格式的唯一标识符 */
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
  /** 用户消息 */
  message: string
  /** 会话ID */
  session_id: string
  /** 是否启用流式响应 */
  stream: true
  /** 额外上下文信息 */
  context: ChatStreamContext
}

/** 流式聊天 - 单个数据块 */
export interface ChatStreamChunk {
  /** 数据内容 */
  content: string
  context: unknown
  /** 是否结束 */
  finished: boolean
  /** 会话ID */
  session_id: string
  /** 时间戳 */
  timestamp: string
}
