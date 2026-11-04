import type { FieldHook } from 'payload'

import { posterFilenameFor } from '@/lib/videoPoster'

const POSTER_SUFFIX = '-poster.jpg'

/**
 * If an auto-generated poster image was picked in a video field, swap it for the video it was
 * made from, so the `<video>` never ends up with a JPG src (which renders an empty frame).
 */
export const swapPosterForVideo: FieldHook = async ({ value, req }) => {
  const id = value && typeof value === 'object' ? (value as { id?: number | string }).id : value
  if (id === null || id === undefined || id === '') return value

  const picked = await req.payload
    .findByID({ collection: 'media', id, depth: 0, overrideAccess: true, req })
    .catch(() => null)
  if (!picked?.filename || picked.mimeType?.startsWith('video/')) return value
  if (!picked.filename.endsWith(POSTER_SUFFIX)) return value

  const base = picked.filename.slice(0, -POSTER_SUFFIX.length)
  const candidates = await req.payload.find({
    collection: 'media',
    where: {
      and: [{ mimeType: { contains: 'video/' } }, { filename: { contains: base } }],
    },
    depth: 0,
    limit: 50,
    overrideAccess: true,
    req,
  })
  const video = candidates.docs.find(
    (doc) => doc.filename && posterFilenameFor(doc.filename) === picked.filename,
  )

  return video ? video.id : value
}
