import type { CollectionConfig } from 'payload'

import { imageField } from '@/fields/image'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  labels: {
    singular: 'Testimonial',
    plural: 'Testimonials',
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'result', 'featured', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'quote',
      type: 'textarea',
      required: true,
    },
    imageField('image'),
    {
      name: 'result',
      type: 'text',
      label: 'Resultaat / status',
      admin: {
        description: 'Bijv. "-12 kg in 16 weken" of "Klant sinds 2023".',
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Uitgelicht',
      defaultValue: false,
      admin: {
        position: 'sidebar',
        description: 'Uitgelichte testimonials kunnen prominent getoond worden op de site.',
      },
    },
  ],
}
