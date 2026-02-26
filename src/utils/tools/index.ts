import { type Ref } from 'vue'

/**
 * 自带loading的请求
 * @param loading loading状态
 * @param cb 回调函数
 * @returns 回调函数的返回值
 */
export async function useRequest<T>(loading: Ref<boolean>, cb: () => Promise<T> | T): Promise<T> {
  try {
    loading.value = true
    return await cb()
  } catch (error) {
    throw error
  } finally {
    loading.value = false
  }
}
