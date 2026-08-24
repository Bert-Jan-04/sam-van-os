import type { Block } from 'payload'

export const ReviewsBlock: Block = {
  slug: 'reviews',
  labels: {
    singular: 'Reviews',
    plural: 'Reviews',
  },
  interfaceName: 'ReviewsBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'items',
      type: 'array',
      label: 'Reviews',
      labels: { singular: 'Review', plural: 'Reviews' },
      minRows: 1,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'quote',
          type: 'textarea',
          required: true,
        },
        {
          name: 'name',
          type: 'text',
          label: 'Naam',
          required: true,
        },
      ],
    },
  ],
}
