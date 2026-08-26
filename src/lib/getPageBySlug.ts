import { cache } from 'react'

import { getCurrentUser } from '@/lib/getCurrentUser'
import { getPayloadClient } from '@/lib/payload'
import type { Page } from '@/payload-types'

export const getPageBySlug = cache(async (slug: string): Promise<Page | null> => {
  const payload = await getPayloadClient()
  const user = await getCurrentUser(payload)

  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slug } },
    limit: 1,
    draft: false,
    overrideAccess: false,
    user,
  })

  return result.docs[0] ?? null
})
