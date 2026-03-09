import type { Router } from 'vue-router'
import { useRequest } from '@/utils/tools'
import {
  queryCompanyInfo,
  queryCurrentFollowUpNode,
  queryAiFollowUpSuggestion,
  queryHistoricalFollowUpNodes,
  queryContactPerson
} from '@/api'
import type {
  CompanyInfoData,
  CurrentFollowUpNodeData,
  AiFollowUpSuggestionData,
  HistoricalFollowUpNodesData,
  ContactPersonData
} from '@/api/types'

export default function useFollowUp() {
  // 页面通用参数
  const params = ref({ index: '1', company_id: '' })

  // 公司详情 loading
  const companyInfoLoading = ref(true)
  // 公司详情
  const companyInfoData = ref<CompanyInfoData>()
  // 请求公司详情
  const getCompanyInfo = async () => {
    const { data } = await queryCompanyInfo(params.value)
    companyInfoData.value = data
  }

  // 对接联系人
  const contactPersonData = ref<ContactPersonData>()
  // 请求对接联系人
  const getContactPerson = async () => {
    const { data } = await queryContactPerson(params.value)
    contactPersonData.value = data
  }

  // 当前跟进节点 loading
  const currentFollowUpNodeLoading = ref(true)
  // 当前跟进节点
  const currentFollowUpNodeData = ref<CurrentFollowUpNodeData>()
  // 请求当前跟进节点
  const getCurrentFollowUpNode = async () => {
    const { data } = await queryCurrentFollowUpNode(params.value)
    currentFollowUpNodeData.value = data
  }

  // AI跟进建议 loading
  const aiFollowUpSuggestionLoading = ref(true)
  // AI跟进建议
  const aiFollowUpSuggestionData = ref<AiFollowUpSuggestionData>()
  // 请求AI跟进建议
  const getAiFollowUpSuggestion = async () => {
    const { data } = await queryAiFollowUpSuggestion(params.value)
    aiFollowUpSuggestionData.value = data
  }

  // 历史跟进节点 loading
  const historicalFollowUpNodesLoading = ref(true)
  // 历史跟进节点
  const historicalFollowUpNodesData = ref<HistoricalFollowUpNodesData>()
  // 请求历史跟进节点
  const getHistoricalFollowUpNodes = async () => {
    const { data } = await queryHistoricalFollowUpNodes(params.value)
    historicalFollowUpNodesData.value = data
  }

  const route = useRoute()
  onMounted(() => {
    params.value.company_id = route.query?.companyId as string
    useRequest(companyInfoLoading, async () => {
      getCompanyInfo()
      getContactPerson()
    })
    useRequest(currentFollowUpNodeLoading, getCurrentFollowUpNode)
    useRequest(aiFollowUpSuggestionLoading, getAiFollowUpSuggestion)
    useRequest(historicalFollowUpNodesLoading, getHistoricalFollowUpNodes)
  })

  const checkDetail = (router: Router) => {
    router.push({
      path: '/sub/detail-page',
      query: { companyId: params.value.company_id, isHidden: 0 }
    })
  }

  return {
    companyInfoLoading,
    companyInfoData,
    contactPersonData,
    currentFollowUpNodeLoading,
    currentFollowUpNodeData,
    aiFollowUpSuggestionLoading,
    aiFollowUpSuggestionData,
    historicalFollowUpNodesLoading,
    historicalFollowUpNodesData,
    checkDetail
  }
}
