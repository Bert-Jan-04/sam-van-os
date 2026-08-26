import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getCurrentUser } from '@/lib/getCurrentUser'
import { getPayloadClient } from '@/lib/payload'
import { getCta } from '@/lib/getCta'
import { ResultatenView } from '@/components/ResultatenView'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Resultaten | Sam van Os Coaching',
  description:
    "Voor- en na-resultaten, klantverhalen en video's van vrouwen die The Rebuild Program hebben doorlopen.",
}

export default async function ResultatenPage() {
  const payload = await getPayloadClient()
  const user = await getCurrentUser(payload)
  const [resultaten, cta] = await Promise.all([
    payload.findGlobal({ slug: 'resultaten', overrideAccess: false, user, disableErrors: true }),
    getCta(),
  ])

  if (!resultaten) {
    notFound()
  }

  return <ResultatenView resultaten={resultaten} cta={cta} />
}
