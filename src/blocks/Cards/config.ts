import type { Block } from 'payload'

export const CardsBlock: Block = {
  slug: 'cards',
  labels: {
    singular: 'Blokjes',
    plural: 'Blokjes',
  },
  interfaceName: 'CardsBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'columns',
      type: 'select',
      required: true,
      defaultValue: '3',
      options: [
        { label: '2 kolommen', value: '2' },
        { label: '3 kolommen', value: '3' },
      ],
    },
    {
      name: 'items',
      type: 'array',
      label: 'Blokjes',
      labels: { singular: 'Blokje', plural: 'Blokjes' },
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'text',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
