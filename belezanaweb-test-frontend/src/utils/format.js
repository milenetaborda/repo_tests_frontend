export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

export function formatDate(date) {
  date = date.replace(/\D/g, '')
  date = date.replace(/^(\d{2})(\d)/g, '$1/$2')
  return date.substring(0, 7)
}
