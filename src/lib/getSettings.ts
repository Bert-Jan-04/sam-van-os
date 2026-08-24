import { cache } from 'react'

import { getPayloadClient } from '@/lib/payload'

export const getSettings = cache(async () => {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'settings' })
})
