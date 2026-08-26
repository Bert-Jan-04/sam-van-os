import type { CollectionConfig } from 'payload'

import { privateRead } from '@/access/privateRead'
import { blocks } from '@/blocks'
import { privateField } from '@/fields/private'
import { seoField } from '@/fields/seo'
import { slugField } from '@/fields/slug'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'private', 'updatedAt'],
  },
  access: {
    read: privateRead,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField('title'),
    privateField(),
    {
      name: 'layout',
      type: 'blocks',
      label: 'Pagina-opbouw',
      blocks,
    },
    seoField(),
  ],
}
