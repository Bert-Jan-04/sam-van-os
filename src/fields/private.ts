import type { Field } from 'payload'

export const privateField = (defaultValue = false): Field => ({
  name: 'private',
  type: 'checkbox',
  label: 'Privé',
  defaultValue,
  admin: {
    position: 'sidebar',
    description: 'Verberg dit voor bezoekers. Alleen ingelogde beheerders kunnen het dan nog bekijken.',
  },
})
