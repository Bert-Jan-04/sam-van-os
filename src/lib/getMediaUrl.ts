import { SERVER_URL } from '@/lib/env'
import type { Media } from '@/payload-types'

export function getMediaUrl(media?: Media | number | null): string | undefined {
  if (!media || typeof media === 'number') return undefined
  if (!media.url) return undefined

  return media.url.startsWith('http') ? media.url : `${SERVER_URL}${media.url}`
}

/**
 * Relative media path (e.g. `/api/media/file/x.jpg`), for on-page `next/image`/`<video>` src.
 * Next's image optimizer treats an absolute URL as a remote image and rejects it unless
 * `images.remotePatterns` is configured — this app only allows `images.localPatterns`, so
 * on-page media must stay relative. Use `getMediaUrl` instead for contexts that genuinely need
 * an absolute URL, like Open Graph meta tags.
 */
export function getMediaPath(media?: Media | number | null): string | undefined {
  if (!media || typeof media === 'number') return undefined
  return media.url ?? undefined
}
