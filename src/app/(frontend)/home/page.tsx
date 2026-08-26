import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getCurrentUser } from '@/lib/getCurrentUser'
import { getPayloadClient } from '@/lib/payload'
import { getCta } from '@/lib/getCta'
import { HomeView } from '@/components/HomeView'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Home | Sam van Os Coaching',
  robots: { index: false, follow: false },
}

export default async function ConceptHomePage() {
  const payload = await getPayloadClient()
  const user = await getCurrentUser(payload)
  const [homepage, cta] = await Promise.all([
    payload.findGlobal({
      slug: 'home',
      overrideAccess: false,
      user,
      disableErrors: true,
    }),
    getCta(),
  ])

  if (!homepage) {
    notFound()
  }

  return <HomeView homepage={homepage} cta={cta} />
}
