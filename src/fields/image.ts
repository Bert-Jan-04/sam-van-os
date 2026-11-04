import type { Field } from 'payload'

export const imageField = (name: string, label?: string): Field => ({
  name,
  type: 'upload',
  relationTo: 'media',
  label,
})

// Only lists videos in the picker, so the auto-generated "-poster.jpg" next to each video
// can't be selected by mistake.
export const videoField = (name: string, label?: string): Field => ({
  name,
  type: 'upload',
  relationTo: 'media',
  label,
  filterOptions: { mimeType: { contains: 'video/' } },
})
