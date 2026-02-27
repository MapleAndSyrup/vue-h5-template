import { useRequest } from '@/utils/tools'
import { queryCompanyInfo } from '@/api'
import type { CompanyInfoParams, CompanyInfoData } from '@/api/types'

export default function useDetail() {
  const companyInfoLoading = ref(true)

  const companyInfoParams = ref<CompanyInfoParams>({ index: '1', company_id: '' })
  const companyInfoData = ref<CompanyInfoData>()
  const getCompanyInfo = async () => {
    const { data } = await queryCompanyInfo(companyInfoParams.value)
    companyInfoData.value = data
  }

  const route = useRoute()
  onMounted(() => {
    const companyId = route.query?.companyId as string
    companyInfoParams.value.company_id = `company${companyId}`
    useRequest(companyInfoLoading, getCompanyInfo)
  })
  return { companyInfoData }
}
