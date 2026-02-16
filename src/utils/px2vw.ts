/**
 * px 转 vw 工具函数
 * 设计稿宽度：750px
 * 公式：vw = px / 750 * 100
 *
 * 使用示例：
 * px2vw(20)              // '2.6667vw'
 * px2vw(30)              // '4vw'
 * px2vw([0, 30, 10, 30]) // '0 4vw 1.3333vw 4vw' (padding/margin 简写)
 */

const DESIGN_WIDTH = 750

/**
 * 单个 px 值转 vw
 * @param px px 数值
 * @returns vw 字符串
 */
export function px2vw(px: number): string {
  const vw = (px / DESIGN_WIDTH) * 100
  return `${vw.toFixed(4)}vw`.replace(/\.?0+vw$/, 'vw') // 去掉末尾的0
}

/**
 * 多个 px 值转 vw（用于 padding/margin 简写）
 * @param pxArray px 数值数组
 * @returns vw 字符串
 */
export function px2vwArray(pxArray: number[]): string {
  return pxArray.map((px) => px2vw(px)).join(' ')
}

/**
 * 简写形式：支持单个数值或数组
 * px(20)       → '2.6667vw'
 * px([0, 30])  → '0 4vw'
 */
export function px(value: number | number[]): string {
  return Array.isArray(value) ? px2vwArray(value) : px2vw(value)
}
