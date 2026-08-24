import type { Field } from 'payload'

import { formatSlugHook } from '@/utilities/formatSlug'

export const slugField = (fieldToUse = 'title'): Field => ({
  name: 'slug',
  type: 'text',
  index: true,
  unique: true,
  admin: {
    position: 'sidebar',
    description: `Wordt automatisch gegenereerd op basis van "${fieldToUse}" als dit leeg blijft.`,
  },
  hooks: {
    beforeValidate: [formatSlugHook(fieldToUse)],
  },
})
