import type { Metadata } from 'next'

import { getPayloadClient } from '@/lib/payload'
import { getCta } from '@/lib/getCta'
import { HomeView } from '@/components/HomeView'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'The Rebuild Program | Sam van Os Coaching',
  description:
    'Zes maanden persoonlijke coaching voor vrouwen die willen afvallen. Voeding, training en de patronen eronder — samen met een vaste coach.',
}

export default async function HomePage() {
  const payload = await getPayloadClient()
  const [homepage, cta] = await Promise.all([payload.findGlobal({ slug: 'homepage' }), getCta()])

  return <HomeView homepage={homepage} cta={cta} />
}
