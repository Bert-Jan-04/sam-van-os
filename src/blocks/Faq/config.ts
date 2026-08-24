import type { Block } from 'payload'

export const FaqBlock: Block = {
  slug: 'faq',
  labels: {
    singular: 'FAQ',
    plural: "FAQ's",
  },
  interfaceName: 'FaqBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'subtext',
      type: 'text',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Vragen',
      labels: { singular: 'Vraag', plural: 'Vragen' },
      minRows: 1,
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Vraag',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Antwoord',
          required: true,
        },
      ],
    },
  ],
}
