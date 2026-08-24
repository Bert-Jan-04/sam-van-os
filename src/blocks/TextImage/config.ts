import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { imageField } from '@/fields/image'

export const TextImageBlock: Block = {
  slug: 'textImage',
  labels: {
    singular: 'Tekst met afbeelding',
    plural: 'Tekst met afbeelding',
  },
  interfaceName: 'TextImageBlock',
  fields: [
    {
      name: 'eyebrow',
      type: 'text',
      label: 'Label boven titel',
    },
    {
      name: 'heading',
      type: 'text',
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor(),
      required: true,
    },
    imageField('image', 'Afbeelding'),
    {
      name: 'imagePosition',
      type: 'select',
      required: true,
      defaultValue: 'right',
      label: 'Afbeelding',
      options: [
        { label: 'Rechts', value: 'right' },
        { label: 'Links', value: 'left' },
      ],
    },
  ],
}
