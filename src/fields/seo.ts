import type { Field } from 'payload'

import { imageField } from '@/fields/image'

export const seoField = (): Field => ({
  name: 'seo',
  type: 'group',
  label: 'SEO',
  admin: {
    description: 'Overschrijft de standaard SEO-instellingen uit de SEO-global voor deze pagina.',
  },
  fields: [
    {
      name: 'metaTitle',
      type: 'text',
      label: 'Meta titel',
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      label: 'Meta omschrijving',
    },
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
})
