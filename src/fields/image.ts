import type { Field } from 'payload'

export const imageField = (name: string, label?: string): Field => ({
  name,
  type: 'upload',
  relationTo: 'media',
  label,
})
