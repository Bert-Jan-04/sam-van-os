import type { Metadata } from 'next'

import { getSettings } from '@/lib/getSettings'
import { buildMetadata } from '@/lib/buildMetadata'
import type { Page } from '@/payload-types'

export async function generatePageMetadata(page?: Page | null): Promise<Metadata> {
  const settings = await getSettings()

  return buildMetadata({
    path: page?.slug ? `/${page.slug}` : '/',
    fallbackTitle: page?.title || settings.companyName,
    seo: page?.seo,
  })
}
