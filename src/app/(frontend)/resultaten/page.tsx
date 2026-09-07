import type { Metadata } from 'next'
import { cache } from 'react'
import { notFound } from 'next/navigation'

import { getCurrentUser } from '@/lib/getCurrentUser'
import { getPayloadClient } from '@/lib/payload'
import { getCta } from '@/lib/getCta'
import { buildMetadata } from '@/lib/buildMetadata'
import { ResultatenView } from '@/components/ResultatenView'

export const dynamic = 'force-dynamic'

const getResultaten = cache(async () => {
  const payload = await getPayloadClient()
  const user = await getCurrentUser(payload)
  return payload.findGlobal({ slug: 'resultaten', overrideAccess: false, user, disableErrors: true })
})

export async function generateMetadata(): Promise<Metadata> {
  const resultaten = await getResultaten()

  return buildMetadata({
    path: '/resultaten',
    fallbackTitle: 'Resultaten | Sam van Os Coaching',
    fallbackDescription:
      "Voor- en na-resultaten, klantverhalen en video's van vrouwen die The Rebuild Program hebben doorlopen.",
    seo: resultaten?.seo,
  })
}

export default async function ResultatenPage() {
  const [resultaten, cta] = await Promise.all([getResultaten(), getCta()])

  if (!resultaten) {
    notFound()
  }

  return <ResultatenView resultaten={resultaten} cta={cta} />
}
