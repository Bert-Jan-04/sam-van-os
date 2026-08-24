import type { Metadata } from 'next'

import { getSettings } from '@/lib/getSettings'
import { getSeoDefaults } from '@/lib/getSeoDefaults'
import { getMediaUrl } from '@/lib/getMediaUrl'
import { SERVER_URL } from '@/lib/env'
import type { Page } from '@/payload-types'

export async function generatePageMetadata(page?: Page | null): Promise<Metadata> {
  const [settings, defaultSeo] = await Promise.all([getSettings(), getSeoDefaults()])

  const pageSeo = page?.seo

  const title = pageSeo?.metaTitle || page?.title || settings.companyName
  const description = pageSeo?.metaDescription || defaultSeo?.metaDescription || undefined
  const ogImage = getMediaUrl(pageSeo?.ogImage || defaultSeo?.ogImage)
  const canonicalURL = pageSeo?.canonicalURL || undefined
  const noIndex = pageSeo?.noIndex ?? false

  return {
    title,
    description,
    metadataBase: new URL(SERVER_URL),
    alternates: canonicalURL ? { canonical: canonicalURL } : undefined,
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: title || undefined,
      description,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
  }
}
