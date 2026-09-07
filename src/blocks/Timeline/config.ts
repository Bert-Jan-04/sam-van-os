import type { Block } from 'payload'

export const TimelineBlock: Block = {
  slug: 'timeline',
  labels: {
    singular: 'Tijdlijn',
    plural: "Tijdlijnen",
  },
  interfaceName: 'TimelineBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'phases',
      type: 'array',
      label: 'Fases',
      labels: { singular: 'Fase', plural: 'Fases' },
      minRows: 1,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          admin: { description: 'Bijv. "01 - Start"' },
        },
        { name: 'text', type: 'textarea', required: true },
      ],
    },
    {
      name: 'closingStatement',
      type: 'textarea',
      label: 'Afsluitende zin',
    },
  ],
}
