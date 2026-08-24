import type { FieldHook } from 'payload'

const formatSlug = (value: string): string =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')

export const formatSlugHook =
  (fallbackField: string): FieldHook =>
  ({ value, originalDoc, data }) => {
    if (typeof value === 'string' && value.length > 0) {
      return formatSlug(value)
    }

    const fallbackData = data?.[fallbackField] || originalDoc?.[fallbackField]

    if (fallbackData && typeof fallbackData === 'string') {
      return formatSlug(fallbackData)
    }

    return value
  }
