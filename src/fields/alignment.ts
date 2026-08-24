import type { Field } from 'payload'

export const alignmentField = (defaultValue: 'left' | 'center' | 'right' = 'left'): Field => ({
  name: 'alignment',
  type: 'select',
  required: true,
  defaultValue,
  options: [
    { label: 'Links', value: 'left' },
    { label: 'Centreren', value: 'center' },
    { label: 'Rechts', value: 'right' },
  ],
})
