import type { GlobalConfig } from 'payload'

import { imageField } from '@/fields/image'

export const Seo: GlobalConfig = {
  slug: 'seo',
  label: 'SEO',
  access: {
    read: () => true,
  },
  admin: {
    description:
      'Standaardwaarden die worden gebruikt wanneer een pagina geen eigen SEO-data heeft.',
  },
  fields: [
    { name: 'metaTitle', type: 'text', label: 'Meta titel' },
    { name: 'metaDescription', type: 'textarea', label: 'Meta omschrijving' },
    imageField('ogImage', 'Open Graph afbeelding'),
    {
      name: 'canonicalURL',
      type: 'text',
      label: 'Canonical URL',
      admin: {
        description: 'Alleen invullen om de standaard canonical URL te overschrijven.',
      },
    },
    {
      name: 'noIndex',
      type: 'checkbox',
      label: 'Uitsluiten van zoekmachines (noindex)',
      defaultValue: false,
    },
  ],
}
