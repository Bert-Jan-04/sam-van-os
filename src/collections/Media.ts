import type { CollectionConfig } from 'payload'

import { generateVideoPoster } from './hooks/generateVideoPoster'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['filename', 'alt', 'caption', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [generateVideoPoster],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Alt-tekst',
      admin: {
        description: 'Beschrijving van de afbeelding of video voor toegankelijkheid en SEO.',
      },
    },
    {
      name: 'caption',
      type: 'text',
    },
    {
      name: 'cover',
      type: 'upload',
      relationTo: 'media',
      label: 'Cover-afbeelding',
      filterOptions: { mimeType: { contains: 'image/' } },
      admin: {
        description:
          'Optioneel. Deze afbeelding wordt overal getoond voordat de video speelt. Leeg laten = automatische screenshot uit de video.',
        condition: (data) => Boolean(data?.mimeType?.startsWith('video/')),
      },
    },
  ],
  upload: {
    mimeTypes: ['image/*', 'video/*'],
    focalPoint: true,
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: undefined,
      },
      {
        name: 'card',
        width: 900,
        height: undefined,
      },
      {
        name: 'og',
        width: 1200,
        height: 630,
        crop: 'center',
      },
    ],
  },
}
