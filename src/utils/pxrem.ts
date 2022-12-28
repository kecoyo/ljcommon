declare global {
  interface Window {
    rem: number;
    rem_: number;
  }
}

/**
 * 把px转换为rem
 * @param px px
 * @returns rem
 */
export function px2rem(px: number): number {
  return px / 75;
}

/**
 * 把rem转换为px
 * @param rem rem
 * @returns px
 */
export function rem2px(rem: number): number {
  return Math.round(rem * 75);
}

/**
 * 计算适配后的像素大小
 * @param px
 * @returns
 */
export function px2adjustpx(px: number): number {
  return Math.round(px2rem(px) * window.rem);
}

/**
 * 计算适配后的像素大小，等比适配
 * @param px
 * @returns
 */
export function px2adjustpx_(px: number): number {
  return Math.round(px2rem(px) * window.rem_);
}
