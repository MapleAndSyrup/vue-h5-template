import { queryLogin, queryRegister } from '@/api'
import { useUserStore } from '@/store/modules/user'
import { useRequest } from '@/utils/tools'

export default function useLogin() {
  const router = useRouter()
  const userStore = useUserStore()

  const loginForm = reactive({ account: '', password: '' })
  const rememberMe = ref(false)
  const loginLoading = ref(false)

  const showRegister = ref(false)
  const registerForm = reactive({ phone: '', password: '', confirmPassword: '' })
  const registerLoading = ref(false)

  onMounted(() => {
    const saved = localStorage.getItem('remembered_account')
    if (saved) {
      loginForm.account = saved
      rememberMe.value = true
    }
  })

  async function handleLogin() {
    try {
      await useRequest(loginLoading, async () => {
        const res = await queryLogin({ phone: loginForm.account, password: loginForm.password, index: 0 })
        userStore.setToken(res.data.token)
        userStore.setUserInfo(res.data)
        if (rememberMe.value) {
          localStorage.setItem('remembered_account', loginForm.account)
        } else {
          localStorage.removeItem('remembered_account')
        }
        Snackbar.success('登录成功')
        router.replace('/biz-pool')
      })
    } catch {}
  }

  async function handleRegister() {
    try {
      await useRequest(registerLoading, async () => {
        await queryRegister({ phone: registerForm.phone, password: registerForm.password, index: 0 })
        Snackbar.success('注册成功，请登录')
        loginForm.account = registerForm.phone
        showRegister.value = false
      })
    } catch {}
  }

  function openRegister() {
    Object.assign(registerForm, { phone: '', password: '', confirmPassword: '' })
    showRegister.value = true
  }

  function closeRegister() {
    showRegister.value = false
  }

  function handleForgotPwd() {
    Snackbar({ content: '请联系招商管理员重置密码', type: 'warning', duration: 3000 })
  }

  return {
    loginForm,
    rememberMe,
    loginLoading,
    showRegister,
    registerForm,
    registerLoading,
    handleLogin,
    handleRegister,
    openRegister,
    closeRegister,
    handleForgotPwd
  }
}
