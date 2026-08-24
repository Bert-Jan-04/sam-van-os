import type { GlobalConfig } from 'payload'

import { linkField } from '@/fields/link'

export const Header: GlobalConfig = {
  slug: 'header',
  label: 'Header',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      label: 'Navigatie-items',
      fields: [linkField()],
    },
    {
      name: 'showCta',
      type: 'checkbox',
      label: 'Toon CTA-knop in header',
      defaultValue: true,
    },
  ],
}
