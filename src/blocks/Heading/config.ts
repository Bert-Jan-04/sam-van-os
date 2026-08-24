import type { Block } from 'payload'

import { alignmentField } from '@/fields/alignment'

export const HeadingBlock: Block = {
  slug: 'heading',
  labels: {
    singular: 'Titelblok',
    plural: 'Titelblokken',
  },
  interfaceName: 'HeadingBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'level',
      type: 'select',
      required: true,
      defaultValue: 'h2',
      options: [
        { label: 'H1', value: 'h1' },
        { label: 'H2', value: 'h2' },
        { label: 'H3', value: 'h3' },
        { label: 'H4', value: 'h4' },
        { label: 'H5', value: 'h5' },
        { label: 'H6', value: 'h6' },
      ],
    },
    alignmentField('left'),
  ],
}
