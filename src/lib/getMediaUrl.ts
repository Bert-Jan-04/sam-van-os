import { SERVER_URL } from '@/lib/env'
import type { Media } from '@/payload-types'

export function getMediaUrl(media?: Media | number | null): string | undefined {
  if (!media || typeof media === 'number') return undefined
  if (!media.url) return undefined

  return media.url.startsWith('http') ? media.url : `${SERVER_URL}${media.url}`
}

/**
 * Media URL as stored on the doc, for on-page `next/image`/`<video>` src. Locally this is a
 * relative path served by Payload (`/api/media/file/x.jpg`); in production it's an absolute
 * Vercel Blob URL. Both work with `next/image` because the Blob CDN host is allow-listed via
 * `images.remotePatterns` in next.config.ts.
 */
export function getMediaPath(media?: Media | number | null): string | undefined {
  if (!media || typeof media === 'number') return undefined
  return media.url ?? undefined
}
