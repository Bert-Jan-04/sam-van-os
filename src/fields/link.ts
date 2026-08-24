import type { Field } from 'payload'

export const linkField = (): Field => ({
  name: 'link',
  type: 'group',
  label: 'Link',
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: true,
      admin: {
        description: 'Intern pad (bijv. /over-mij) of volledige URL (bijv. https://...)',
      },
    },
    {
      name: 'newTab',
      type: 'checkbox',
      label: 'Openen in nieuw tabblad',
      defaultValue: false,
    },
  ],
})
