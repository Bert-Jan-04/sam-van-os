import type { GlobalConfig } from 'payload'

import { privateRead } from '@/access/privateRead'
import { privateField } from '@/fields/private'
import { homepageFields } from '@/globals/homepageFields'

const excludedFieldNames = ['results', 'stories']

export const ConceptHomepage: GlobalConfig = {
  slug: 'home',
  label: 'Home',
  access: {
    read: privateRead,
  },
  fields: [
    privateField(true),
    ...homepageFields.filter((field) => !('name' in field) || !excludedFieldNames.includes(field.name)),
  ],
}
