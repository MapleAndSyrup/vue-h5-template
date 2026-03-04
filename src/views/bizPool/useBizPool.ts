import type { Router } from 'vue-router'

import type { _InputComponent as VarInputInstance } from '@varlet/ui'

import { queryChatBusinessSearch } from '@/api'
import type { ChatBusinessSearchParams, ChatBusinessSearchData } from '@/api/types'
import { useRequest } from '@/utils/tools'

export default function useBizPool() {
  const tags = ref([
    { label: '全部行业', value: '' },
    { label: '科技互联网', value: '互联网' },
    { label: '制造业', value: '制造业' },
    { label: '金融投资', value: '金融投资' },
    { label: '新能源', value: '新能源' }
  ])

  const listLoading = ref(true)
  const chatBusinessSearchParams = ref<ChatBusinessSearchParams>({ index: '1', name: '', tag: '' })
  const chatBusinessSearchData = ref<ChatBusinessSearchData>()
  const getChatBusinessSearch = async () => {
    const { data } = await queryChatBusinessSearch(chatBusinessSearchParams.value)
    chatBusinessSearchData.value = data
  }

  const getRequest = () => {
    useRequest(listLoading, getChatBusinessSearch)
  }

  onMounted(async () => {
    getRequest()

    try {
      const res = await fetch('/app-config.json')
      const config = await res.json()
      if (Array.isArray(config?.bizPool?.tags)) {
        tags.value = config.bizPool.tags
      }
    } catch {
      // 配置加载失败，使用默认 tags
    }
  })

  const tagsRef = ref<HTMLElement | null>(null)

  const handleChangeTag = (tag: string, event: Event) => {
    chatBusinessSearchParams.value.tag = tag
    getRequest()

    const el = event.currentTarget as HTMLElement
    const container = tagsRef.value
    if (!el || !container) return
    container.scrollTo({
      left: el.offsetLeft - container.offsetWidth / 2 + el.offsetWidth / 2,
      behavior: 'smooth'
    })
  }

  const handleToDetail = (router: Router, companyId: string) => {
    router.push({ path: '/sub/detail-page', query: { companyId, isHidden: 1 } })
  }

  // 展示搜索图标
  const showSearchIcon = ref(false)
  // 输入框盒子ref
  const inputRef = ref<HTMLElement | null>(null)
  const bizPoolRef = ref<HTMLElement | null>(null)
  // 组件输入框ref
  const varInputRef = ref<VarInputInstance | null>(null)

  // 检测 var-input 是否被 tags 遮挡
  const handleScroll = (e: Event) => {
    if (!inputRef.value) return
    const scrollTop = (e.target as HTMLElement).scrollTop
    const offsetTop = inputRef.value.offsetTop
    showSearchIcon.value = scrollTop >= offsetTop + inputRef.value.offsetHeight
  }

  // 点击搜索图标回到顶部并 focus 输入框
  const handleSearchIconClick = async () => {
    await nextTick()
    if (!bizPoolRef.value || !varInputRef.value) return
    // 滚动到顶部
    bizPoolRef.value.scrollTo({ top: 0, behavior: 'smooth' })
    // focus 输入框
    varInputRef.value?.focus()
  }

  const handleSearch = () => {
    if (!chatBusinessSearchParams.value.name) return
    getChatBusinessSearch()
  }

  return {
    tags,
    listLoading,
    chatBusinessSearchParams,
    chatBusinessSearchData,
    varInputRef,
    bizPoolRef,
    inputRef,
    tagsRef,
    showSearchIcon,
    getChatBusinessSearch,
    handleChangeTag,
    handleToDetail,
    handleScroll,
    handleSearchIconClick,
    handleSearch
  }
}
