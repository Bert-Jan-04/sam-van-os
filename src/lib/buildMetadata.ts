import type { Metadata } from 'next'

import { getSeoDefaults } from '@/lib/getSeoDefaults'
import { getMediaUrl } from '@/lib/getMediaUrl'
import { SERVER_URL } from '@/lib/env'
import type { Media } from '@/payload-types'

export type SeoOverride = {
  metaTitle?: string | null
  metaDescription?: string | null
  ogImage?: Media | number | null
  canonicalURL?: string | null
  noIndex?: boolean | null
} | null

type BuildMetadataArgs = {
  /** URL path this page is served at, e.g. "/" or "/programma". Used for the default canonical URL. */
  path: string
  fallbackTitle: string
  fallbackDescription?: string
  seo?: SeoOverride
}

export async function buildMetadata({
  path,
  fallbackTitle,
  fallbackDescription,
  seo,
}: BuildMetadataArgs): Promise<Metadata> {
  const defaultSeo = await getSeoDefaults()

  const title = seo?.metaTitle || fallbackTitle
  const description = seo?.metaDescription || fallbackDescription || defaultSeo?.metaDescription || undefined
  const ogImage = getMediaUrl(seo?.ogImage) || getMediaUrl(defaultSeo?.ogImage)
  const canonicalURL = seo?.canonicalURL || `${SERVER_URL}${path}`
  const noIndex = seo?.noIndex ?? false

  return {
    title,
    description,
    metadataBase: new URL(SERVER_URL),
    alternates: { canonical: canonicalURL },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: title || undefined,
      description,
      url: canonicalURL,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: ogImage ? 'summary_large_image' : 'summary',
      title: title || undefined,
      description,
      images: ogImage ? [ogImage] : undefined,
    },
  }
}
