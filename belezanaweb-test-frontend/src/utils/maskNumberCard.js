export function maskCardNumber(value) {
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{4})(\d)/g, '$1.$2')
  value = value.replace(/^(\d{4})\.(\d{4})(\d)/, '$1.$2.$3')
  value = value.replace(/^(\d{4})\.(\d{4})\.(\d{4})(\d)/, '$1.$2.$3.$4')
  value = value.replace(/^(\d{4})\.(\d{3})\.(\d{4})\/(\d{2})(\d)/, '$1.$2.$3.$4')
  return value.substring(0, 19)
}
