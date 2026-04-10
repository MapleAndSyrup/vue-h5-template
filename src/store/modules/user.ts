import { defineStore } from 'pinia'
import type { LoginData } from '@/api/types'

const TOKEN_KEY = 'token'

export const useUserStore = defineStore('user', () => {
  /** 登录 token，初始从 localStorage 读取 */
  const token = ref(localStorage.getItem(TOKEN_KEY) || '')
  /** 当前登录用户信息 */
  const userInfo = ref<Partial<LoginData>>({})

  /** 是否已登录 */
  const isLoggedIn = computed(() => !!token.value)

  /** 设置 token，同步写入 localStorage */
  function setToken(val: string) {
    token.value = val
    localStorage.setItem(TOKEN_KEY, val)
  }

  /** 设置用户信息 */
  function setUserInfo(info: Partial<LoginData>) {
    userInfo.value = info
  }

  /** 退出登录：清空状态并移除 localStorage 中的 token */
  function logout() {
    token.value = ''
    userInfo.value = {}
    localStorage.removeItem(TOKEN_KEY)
  }

  return { token, userInfo, isLoggedIn, setToken, setUserInfo, logout }
})
