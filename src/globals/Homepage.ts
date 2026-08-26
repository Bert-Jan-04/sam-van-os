import type { GlobalConfig } from 'payload'

import { privateRead } from '@/access/privateRead'
import { privateField } from '@/fields/private'
import { homepageFields } from '@/globals/homepageFields'

const excludedFieldNames = ['results', 'stories']

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  label: 'Homepage',
  access: {
    read: privateRead,
  },
  fields: [
    privateField(),
    ...homepageFields.filter((field) => !('name' in field) || !excludedFieldNames.includes(field.name)),
  ],
}
