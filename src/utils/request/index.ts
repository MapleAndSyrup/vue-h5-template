import axios from 'axios'
import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'

// 统一 API 响应类型
export interface ApiResponse<T = any> {
  data: T
  code: number
  msg: string
}

const service: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://42.121.162.224:8004',
  withCredentials: false,
  timeout: 10000
})

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data as ApiResponse
    if (res.code !== 200) {
      Snackbar.error(res.msg)
      return Promise.reject(res)
    } else {
      return response
    }
  },
  (error: AxiosError) => {
    console.log('err' + error)
    Snackbar.error(error.message)
    return Promise.reject(error.message)
  }
)

export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return service.get(url, config).then((res) => res.data)
  },

  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return service.post(url, data, config).then((res) => res.data)
  },

  put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return service.put(url, data, config).then((res) => res.data)
  },

  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    return service.delete(url, config).then((res) => res.data)
  }
}

export default service
