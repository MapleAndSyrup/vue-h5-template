import { type Ref } from 'vue'

/**
 * 格式化时间字符串为 'YYYY-MM-DD HH:mm'
 * @param dateStr ISO 8601 格式时间字符串，如 "2026-01-15T10:30:00+08:00"
 * @returns 格式化后的字符串，如 "2026-01-15 10:30"；传入无效值时返回 '-'
 */
export function formatDate(dateStr: string | undefined | null): string {
  if (!dateStr) return '-'
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return '-'
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`
}

/**
 * 自带loading的请求
 * @param loading loading状态
 * @param cb 回调函数
 * @param minDuration 最小loading持续时间(毫秒)，默认1000ms，避免闪屏
 * @returns 回调函数的返回值
 */
export async function useRequest<T>(
  loading: Ref<boolean>,
  cb: () => Promise<T> | T,
  minDuration: number = 300
): Promise<T> {
  const startTime = Date.now()
  try {
    loading.value = true
    const result = await cb()
    // 计算已经过去的时间
    const elapsed = Date.now() - startTime
    // 如果实际请求时间小于最小持续时间，则延迟关闭loading
    if (elapsed < minDuration) {
      await new Promise((resolve) => setTimeout(resolve, minDuration - elapsed))
    }
    return result
  } catch (error) {
    throw error
  } finally {
    loading.value = false
  }
}
