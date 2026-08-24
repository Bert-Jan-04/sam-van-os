import type { Block } from 'payload'

import { imageField } from '@/fields/image'

export const HeaderBlock: Block = {
  slug: 'header',
  labels: {
    singular: 'Header',
    plural: 'Headers',
  },
  interfaceName: 'HeaderBlock',
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Label boven titel',
    },
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'intro',
      type: 'textarea',
    },
    imageField('image', 'Afbeelding'),
    {
      name: 'ctaLabel',
      type: 'text',
      label: 'Knoptekst',
    },
    {
      name: 'ctaUrl',
      type: 'text',
      label: 'Knoplink',
      admin: {
        description: 'Intern pad (bijv. /programma) of volledige URL.',
      },
    },
    {
      name: 'ctaHelperText',
      type: 'text',
      label: 'Tekst onder de knop',
    },
  ],
}
