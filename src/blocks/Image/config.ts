import type { Block } from 'payload'

import { alignmentField } from '@/fields/alignment'

export const ImageBlock: Block = {
  slug: 'image',
  labels: {
    singular: 'Afbeeldingsblok',
    plural: 'Afbeeldingsblokken',
  },
  interfaceName: 'ImageBlock',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'altText',
      type: 'text',
      admin: {
        description: 'Overschrijft de alt-tekst van de media als dit is ingevuld.',
      },
    },
    {
      name: 'caption',
      type: 'text',
    },
    alignmentField('center'),
  ],
}
