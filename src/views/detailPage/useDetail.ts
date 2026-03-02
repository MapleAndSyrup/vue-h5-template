import { useRequest } from '@/utils/tools'
import {
  queryCompanyInfo,
  queryInvestmentMatch,
  queryFutureDevelop,
  queryEquityInfo,
  queryRelatedOpinion,
  queryOtherAttention,
  queryLandingRequirementDetail,
  queryContactPerson
} from '@/api'
import type {
  CompanyInfoData,
  InvestmentMatchData,
  FutureDevelopData,
  EquityInfoData,
  RelatedOpinionData,
  OtherAttentionData,
  LandingRequirementDetailData,
  ContactPersonData
} from '@/api/types'

import hiddenPage from './hiddenPage.vue'
import completePage from './completePage.vue'

export default function useDetail() {
  // 是否隐藏
  const isHidden = ref(true)

  // 当前组件
  const currentComponent = computed(() => {
    return isHidden.value ? hiddenPage : completePage
  })

  // 页面通用参数
  const params = ref({ index: '1', company_id: '' })

  // 公司详情loading
  const companyInfoLoading = ref(true)
  // 公司详情
  const companyInfoData = ref<CompanyInfoData>()
  // 请求公司详情
  const getCompanyInfo = async () => {
    const { data } = await queryCompanyInfo(params.value)
    companyInfoData.value = data
  }

  // 投资匹配loading
  const investmentMatchLoading = ref(true)
  // 投资匹配
  const investmentMatchData = ref<InvestmentMatchData>()
  // 请求投资匹配
  const getInvestmentMatch = async () => {
    const { data } = await queryInvestmentMatch(params.value)
    investmentMatchData.value = data
  }

  // 未来发展loading
  const futureDevelopLoading = ref(true)
  // 未来发展
  const futureDevelopData = ref<FutureDevelopData>()
  // 请求未来发展
  const getFutureDevelop = async () => {
    const { data } = await queryFutureDevelop(params.value)
    futureDevelopData.value = data
  }

  // 股权信息loading
  const equityInfoLoading = ref(true)
  // 股权信息
  const equityInfoData = ref<EquityInfoData>()
  // 请求股权信息
  const getEquityInfo = async () => {
    const { data } = await queryEquityInfo(params.value)
    equityInfoData.value = data
  }

  // 相关舆情loading
  const relatedOpinionLoading = ref(true)
  // 相关舆情
  const relatedOpinionData = ref<RelatedOpinionData>()
  // 请求相关舆情
  const getRelatedOpinion = async () => {
    const { data } = await queryRelatedOpinion(params.value)
    relatedOpinionData.value = data
  }

  // 其他关注loading
  const otherAttentionLoading = ref(true)
  // 其他关注
  const otherAttentionData = ref<OtherAttentionData>()
  // 请求其他关注
  const getOtherAttention = async () => {
    const { data } = await queryOtherAttention(params.value)
    otherAttentionData.value = data
  }

  // 落地需求详情loading
  const landingRequirementLoading = ref(true)
  // 落地需求详情
  const landingRequirementData = ref<LandingRequirementDetailData>()
  // 请求落地需求详情
  const getLandingRequirementDetail = async () => {
    const { data } = await queryLandingRequirementDetail(params.value)
    landingRequirementData.value = data
  }

  // 对接联系人loading
  const contactPersonLoading = ref(true)
  // 对接联系人
  const contactPersonData = ref<ContactPersonData>()
  // 请求对接联系人
  const getContactPerson = async () => {
    const { data } = await queryContactPerson(params.value)
    contactPersonData.value = data
  }

  const route = useRoute()
  onMounted(() => {
    isHidden.value = Number(route.query?.isHidden) ? true : false
    params.value.company_id = route.query?.companyId as string
    useRequest(companyInfoLoading, getCompanyInfo)
    useRequest(investmentMatchLoading, getInvestmentMatch)
    useRequest(futureDevelopLoading, getFutureDevelop)
    useRequest(equityInfoLoading, getEquityInfo)
    useRequest(landingRequirementLoading, getLandingRequirementDetail)
    useRequest(contactPersonLoading, getContactPerson)
    useRequest(relatedOpinionLoading, getRelatedOpinion)
    useRequest(otherAttentionLoading, getOtherAttention)
  })

  provide('companyInfoLoading', companyInfoLoading)
  provide('companyInfoData', companyInfoData)

  provide('investmentMatchLoading', investmentMatchLoading)
  provide('investmentMatchData', investmentMatchData)

  provide('futureDevelopLoading', futureDevelopLoading)
  provide('futureDevelopData', futureDevelopData)

  provide('equityInfoLoading', equityInfoLoading)
  provide('equityInfoData', equityInfoData)

  provide('relatedOpinionLoading', relatedOpinionLoading)
  provide('relatedOpinionData', relatedOpinionData)

  provide('otherAttentionLoading', otherAttentionLoading)
  provide('otherAttentionData', otherAttentionData)

  provide('landingRequirementLoading', landingRequirementLoading)
  provide('landingRequirementData', landingRequirementData)

  provide('contactPersonLoading', contactPersonLoading)
  provide('contactPersonData', contactPersonData)

  return {
    isHidden,
    currentComponent,
    companyInfoLoading,
    companyInfoData,
    investmentMatchLoading,
    investmentMatchData,
    futureDevelopLoading,
    futureDevelopData,
    equityInfoLoading,
    equityInfoData,
    relatedOpinionLoading,
    relatedOpinionData,
    otherAttentionLoading,
    otherAttentionData,
    landingRequirementLoading,
    landingRequirementData,
    contactPersonLoading,
    contactPersonData
  }
}
