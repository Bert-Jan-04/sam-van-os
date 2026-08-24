import type { GlobalConfig } from 'payload'

import { linkField } from '@/fields/link'
import { imageField } from '@/fields/image'

export const Settings: GlobalConfig = {
  slug: 'settings',
  label: 'Footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'companyName',
      type: 'text',
      label: 'Bedrijfsnaam',
      required: true,
      defaultValue: 'Sam van Os Coaching',
    },
    imageField('logo', 'Logo'),
    {
      name: 'contact',
      type: 'group',
      label: 'Contactgegevens',
      fields: [
        { name: 'email', type: 'email' },
        { name: 'phone', type: 'text', label: 'Telefoonnummer' },
        {
          name: 'address',
          type: 'group',
          label: 'Adres',
          fields: [
            { name: 'street', type: 'text', label: 'Straat + huisnummer' },
            { name: 'postalCode', type: 'text', label: 'Postcode' },
            { name: 'city', type: 'text', label: 'Plaats' },
            { name: 'country', type: 'text', label: 'Land' },
          ],
        },
        { name: 'legalName', type: 'text', label: 'Statutaire naam (bijv. Van Os Coaching B.V.)' },
        { name: 'kvkNumber', type: 'text', label: 'KvK-nummer' },
        { name: 'vatNumber', type: 'text', label: 'BTW-nummer' },
      ],
    },
    {
      name: 'socialMedia',
      type: 'array',
      label: 'Social media',
      labels: { singular: 'Social media link', plural: 'Social media links' },
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          options: [
            { label: 'Instagram', value: 'instagram' },
            { label: 'Facebook', value: 'facebook' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'TikTok', value: 'tiktok' },
            { label: 'YouTube', value: 'youtube' },
            { label: 'Overig', value: 'other' },
          ],
        },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      label: 'Footer',
      fields: [
        {
          name: 'tagline',
          type: 'text',
          label: 'Tagline onder logo',
          admin: {
            description:
              'Korte zin onder het logo in de footer, bijv. "Bouw een leefstijl die niet instort zodra het leven druk wordt."',
          },
        },
        {
          name: 'columns',
          type: 'array',
          label: 'Footer-kolommen',
          fields: [
            { name: 'title', type: 'text', required: true },
            {
              name: 'links',
              type: 'array',
              fields: [linkField()],
            },
          ],
        },
        {
          name: 'legalLinks',
          type: 'array',
          label: 'Juridische links',
          labels: { singular: 'Link', plural: 'Links' },
          admin: {
            description: 'Bijv. Privacyverklaring, Algemene voorwaarden, Cookiebeleid.',
          },
          fields: [linkField()],
        },
        {
          name: 'copyrightText',
          type: 'text',
          label: 'Copyright tekst',
          defaultValue: `© ${new Date().getFullYear()} Sam van Os Coaching. Alle rechten voorbehouden.`,
        },
      ],
    },
  ],
}
