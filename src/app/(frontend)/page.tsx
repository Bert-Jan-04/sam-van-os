import type { Metadata } from 'next'
import { cache } from 'react'
import { notFound } from 'next/navigation'

import { getCurrentUser } from '@/lib/getCurrentUser'
import { getPayloadClient } from '@/lib/payload'
import { getCta } from '@/lib/getCta'
import { buildMetadata } from '@/lib/buildMetadata'
import { HomeView } from '@/components/HomeView'

export const dynamic = 'force-dynamic'

const getHomepage = cache(async () => {
  const payload = await getPayloadClient()
  const user = await getCurrentUser(payload)
  return payload.findGlobal({ slug: 'homepage', overrideAccess: false, user, disableErrors: true })
})

export async function generateMetadata(): Promise<Metadata> {
  const homepage = await getHomepage()

  return buildMetadata({
    path: '/',
    fallbackTitle: 'The Rebuild Program | Sam van Os Coaching',
    fallbackDescription:
      'Zes maanden persoonlijke coaching voor vrouwen die willen afvallen. Voeding, training en de patronen eronder, samen met een vaste coach.',
    seo: homepage?.seo,
  })
}

export default async function HomePage() {
  const [homepage, cta] = await Promise.all([getHomepage(), getCta()])

  if (!homepage) {
    notFound()
  }

  return <HomeView homepage={homepage} cta={cta} />
}
