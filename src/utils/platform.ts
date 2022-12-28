export function isIPhone() {
  return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent);
}

export function isAndroid() {
  return /(Android)/i.test(navigator.userAgent);
}

export function isMobile() {
  return isIPhone() || isAndroid();
}

export function isWindows() {
  return /(Win)/i.test(navigator.userAgent) || /(Win)/i.test(navigator.platform);
}

export const Platform = { isIPhone, isAndroid, isMobile, isWindows };
