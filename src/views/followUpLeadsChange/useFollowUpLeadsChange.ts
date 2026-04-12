import { queryFollowUpLeadsChange, queryChatBusinessSearch } from '@/api'
import type { FollowUpLeadsChangeParams, ChatBusinessSearchItem } from '@/api/types'
import { useRequest } from '@/utils/tools'

export default function useFollowUpLeadsChange() {
  const router = useRouter()

  const submitLoading = ref(false)

  const form = reactive<FollowUpLeadsChangeParams>({
    index: '1',
    company_id: '',
    operation: 'add',
    lead_id: '',
    lead_name: '',
    company_name: '',
    lead_intro: '',
    current_follow_up_status: '',
    next_follow_up_node: '',
    precautions: '',
    create_date: new Date().toISOString().slice(0, 10),
    userid_follow: ''
  })

  // 公司列表
  const companyLoading = ref(true)
  const companyList = ref<ChatBusinessSearchItem[]>([])

  const getCompanyList = async () => {
    const { data } = await queryChatBusinessSearch({ index: '1', name: '', tag: '' })
    companyList.value = data?.search_results ?? []
  }

  // 选择公司后自动填入 search 数据
  const handleCompanyChange = (companyId: string) => {
    const company = companyList.value.find((item) => item.company_id === companyId)
    if (!company) return
    form.company_name = company.company_name
    form.lead_name = company.lead_name
    form.lead_intro = company.lead_intro
  }

  onMounted(() => {
    useRequest(companyLoading, getCompanyList)
  })

  const handleSubmit = async () => {
    if (!form.company_id) {
      Snackbar.warning('请选择公司')
      return
    }
    if (!form.lead_name) {
      Snackbar.warning('请填写线索名称')
      return
    }
    if (!form.company_name) {
      Snackbar.warning('请填写公司名称')
      return
    }
    if (!form.lead_intro) {
      Snackbar.warning('请填写线索介绍')
      return
    }
    if (!form.create_date) {
      Snackbar.warning('请填写创建日期')
      return
    }
    submitLoading.value = true
    try {
      await queryFollowUpLeadsChange(form)
      Snackbar.success('提交成功')
      router.back()
    } finally {
      submitLoading.value = false
    }
  }

  return {
    form,
    companyLoading,
    companyList,
    handleCompanyChange,
    submitLoading,
    handleSubmit
  }
}
