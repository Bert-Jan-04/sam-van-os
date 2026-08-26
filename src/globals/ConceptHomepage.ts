import type { GlobalConfig } from 'payload'

import { privateRead } from '@/access/privateRead'
import { privateField } from '@/fields/private'
import { homepageFields } from '@/globals/homepageFields'

export const ConceptHomepage: GlobalConfig = {
  slug: 'home',
  label: 'Home',
  access: {
    read: privateRead,
  },
  fields: [privateField(true), ...homepageFields],
}
