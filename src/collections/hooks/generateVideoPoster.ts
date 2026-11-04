import type { CollectionAfterChangeHook } from 'payload'

import { ensurePosterForVideo } from '@/lib/videoPoster'

export const generateVideoPoster: CollectionAfterChangeHook = async ({ doc, req }) => {
  try {
    await ensurePosterForVideo(req.payload, doc)
  } catch (err) {
    req.payload.logger.error({ err, msg: `Failed to generate video poster for media ${doc.id}` })
  }

  return doc
}
