import type { MetadataRoute } from 'next'

import { SERVER_URL } from '@/lib/env'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/api'],
    },
    sitemap: `${SERVER_URL}/sitemap.xml`,
  }
}
