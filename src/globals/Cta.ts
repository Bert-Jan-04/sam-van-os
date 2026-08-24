import type { GlobalConfig } from 'payload'

export const Cta: GlobalConfig = {
  slug: 'cta',
  label: 'CTA',
  access: {
    read: () => true,
  },
  admin: {
    description: 'Standaard call-to-action, herbruikbaar op meerdere plekken in de site.',
  },
  fields: [
    { name: 'heading', type: 'text' },
    {
      name: 'text',
      type: 'textarea',
      label: 'Helptekst onder de knop',
      defaultValue: '45 minuten, samen kijken of Rebuild bij je past.',
    },
    {
      name: 'buttonLabel',
      type: 'text',
      label: 'Knoptekst',
      defaultValue: 'Plan een kennismaking',
    },
    { name: 'buttonUrl', type: 'text', label: 'Knop URL', defaultValue: '#kennismaking' },
  ],
}
