import type { MetadataRoute } from 'next'

import { getPayloadClient } from '@/lib/payload'
import { SERVER_URL } from '@/lib/env'

export const dynamic = 'force-dynamic'

const staticRoutes: Array<{ path: string; priority: number }> = [
  { path: '', priority: 1 },
  { path: '/programma', priority: 0.9 },
  { path: '/resultaten', priority: 0.8 },
  { path: '/team', priority: 0.7 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayloadClient()

  const { docs: pages } = await payload.find({
    collection: 'pages',
    where: { 'seo.noIndex': { not_equals: true } },
    limit: 0,
    depth: 0,
    overrideAccess: false,
  })

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(({ path, priority }) => ({
    url: `${SERVER_URL}${path}`,
    changeFrequency: 'monthly',
    priority,
  }))

  const pageEntries: MetadataRoute.Sitemap = pages
    .filter((page) => page.slug)
    .map((page) => ({
      url: `${SERVER_URL}/${page.slug}`,
      lastModified: page.updatedAt,
      changeFrequency: 'monthly',
      priority: 0.6,
    }))

  return [...staticEntries, ...pageEntries]
}
