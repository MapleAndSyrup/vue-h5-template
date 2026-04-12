import service from '.'
import { HTTP_STATUS } from '@/constant'
import { useUserStore } from '@/store/modules/user'
import router from '@/router'

export function setupRequestMiddleware() {
  service.interceptors.response.use(
    (response) => response,
    (error) => {
      console.log('error', error)

      if (error?.code === HTTP_STATUS.UNAUTHORIZED) {
        useUserStore().logout()
        router.push('/login')
      }
      return Promise.reject(error)
    }
  )
}
