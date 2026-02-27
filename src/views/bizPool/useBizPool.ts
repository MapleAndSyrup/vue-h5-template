import { queryChatBusinessSearch } from '@/api'
import type { ChatBusinessSearchParams, ChatBusinessSearchData } from '@/api/types'
import { useRequest } from '@/utils/tools'

export default function useBizPool() {
  const listLoading = ref(true)
  const chatBusinessSearchParams = ref<ChatBusinessSearchParams>({ index: '1', name: '' })
  const chatBusinessSearchData = ref<ChatBusinessSearchData>()
  const getChatBusinessSearch = async () => {
    const { data } = await queryChatBusinessSearch(chatBusinessSearchParams.value)
    chatBusinessSearchData.value = data
  }

  onMounted(() => {
    useRequest(listLoading, getChatBusinessSearch)
  })
  return { listLoading, chatBusinessSearchParams, chatBusinessSearchData, getChatBusinessSearch }
}
