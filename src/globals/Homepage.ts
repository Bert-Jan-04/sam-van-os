import type { GlobalConfig } from 'payload'

import { privateRead } from '@/access/privateRead'
import { privateField } from '@/fields/private'
import { seoField } from '@/fields/seo'
import { homepageFields } from '@/globals/homepageFields'

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  access: {
    read: privateRead,
  },
  fields: [privateField(), ...homepageFields, seoField()],
}
