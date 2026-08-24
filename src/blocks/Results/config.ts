import type { Block } from 'payload'

export const ResultsBlock: Block = {
  slug: 'results',
  labels: {
    singular: 'Resultaten',
    plural: 'Resultaten',
  },
  interfaceName: 'ResultsBlock',
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
        { label: '3 kolommen', value: '3' },
        { label: '4 kolommen', value: '4' },
      ],
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Cijfers',
      labels: { singular: 'Cijfer', plural: 'Cijfers' },
      minRows: 1,
      fields: [
        {
          name: 'value',
          type: 'text',
          label: 'Waarde',
          required: true,
          admin: {
            description: 'Bijv. "500" of "-12"',
          },
        },
        {
          name: 'suffix',
          type: 'text',
          label: 'Achtervoegsel',
          admin: {
            description: 'Bijv. "+" of "kg"',
          },
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
