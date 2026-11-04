import type { Field, UploadField } from 'payload'

import { swapPosterForVideo } from './hooks/swapPosterForVideo'

export const imageField = (name: string, label?: string): Field => ({
  name,
  type: 'upload',
  relationTo: 'media',
  label,
})

// Only lists videos in the picker, so the auto-generated "-poster.jpg" next to each video
// can't be selected by mistake. If one is saved anyway, the hook swaps it for its video.
export const videoField = (
  name: string,
  label?: string,
  overrides: Partial<Pick<UploadField, 'required' | 'admin'>> = {},
): Field =>
  ({
    name,
    type: 'upload',
    relationTo: 'media',
    label,
    filterOptions: { mimeType: { contains: 'video/' } },
    hooks: { beforeValidate: [swapPosterForVideo] },
    ...overrides,
  }) as Field
