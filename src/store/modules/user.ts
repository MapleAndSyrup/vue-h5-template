import { defineStore } from 'pinia'
import type { LoginData } from '@/api/types'

const TOKEN_KEY = 'token'

interface StoreUser {
  token: string
  userInfo: Partial<LoginData>
}

export const useUserStore = defineStore('user', {
  state: (): StoreUser => ({
    token: localStorage.getItem(TOKEN_KEY) || '',
    userInfo: {}
  }),
  getters: {
    isLoggedIn(): boolean {
      return !!this.token
    }
  },
  actions: {
    setToken(token: string) {
      this.token = token
      localStorage.setItem(TOKEN_KEY, token)
    },
    setUserInfo(info: Partial<LoginData>) {
      this.userInfo = info
    },
    logout() {
      this.token = ''
      this.userInfo = {}
      localStorage.removeItem(TOKEN_KEY)
    }
  }
})
