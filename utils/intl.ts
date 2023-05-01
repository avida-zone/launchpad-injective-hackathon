export function formatNumber(number: number) {
  return new Intl.NumberFormat(navigator.language).format(number);
}
