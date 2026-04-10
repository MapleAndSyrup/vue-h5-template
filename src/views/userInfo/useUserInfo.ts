import { useUserStore } from '@/store/modules/user'
import { queryUser, queryUpdateUser } from '@/api'
import { useRequest } from '@/utils/tools'

export default function useUserInfo() {
  const router = useRouter()
  const userStore = useUserStore()

  /** 是否处于编辑模式 */
  const isEditing = ref(false)

  /** 页面数据加载状态 */
  const pageLoading = ref(true)

  /** 提交保存加载状态 */
  const saveLoading = ref(false)

  /** 编辑表单 */
  const form = reactive({
    name: '',
    password: '',
    confirmPassword: ''
  })

  /** 进入编辑模式，预填姓名 */
  function startEdit() {
    form.name = userStore.userInfo.name ?? ''
    form.password = ''
    form.confirmPassword = ''
    isEditing.value = true
  }

  /** 取消编辑 */
  function cancelEdit() {
    isEditing.value = false
  }

  /** 拉取最新用户信息并同步到 store */
  async function fetchUserInfo() {
    const user_id = userStore.userInfo.user_id
    if (!user_id) return
    const { data } = await queryUser({ index: 0, user_id })
    const found = data?.users?.[0]
    if (found) userStore.setUserInfo({ ...userStore.userInfo, ...found })
  }

  /** 保存修改：仅改名则原地更新；改了密码则退出重新登录 */
  async function handleSave() {
    const user_id = userStore.userInfo.user_id
    if (!user_id) return
    await useRequest(saveLoading, async () => {
      const payload: { index: number; user_id: string; name?: string; password?: string } = {
        index: 0,
        user_id
      }
      if (form.name.trim()) payload.name = form.name.trim()
      if (form.password) payload.password = form.password
      await queryUpdateUser(payload)
      if (payload.name) userStore.setUserInfo({ ...userStore.userInfo, name: payload.name })

      if (payload.password) {
        Snackbar.success('密码已修改，请重新登录')
        await new Promise((resolve) => setTimeout(resolve, 1500))
        userStore.logout()
        router.replace('/login')
      } else {
        Snackbar.success('保存成功')
        isEditing.value = false
      }
    })
  }

  onMounted(() => {
    useRequest(pageLoading, fetchUserInfo)
  })

  return {
    userStore,
    isEditing,
    pageLoading,
    saveLoading,
    form,
    startEdit,
    cancelEdit,
    handleSave
  }
}
