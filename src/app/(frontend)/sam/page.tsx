import type { Metadata } from 'next'
import { cache } from 'react'
import { notFound } from 'next/navigation'

import { getCurrentUser } from '@/lib/getCurrentUser'
import { getPayloadClient } from '@/lib/payload'
import { getCta } from '@/lib/getCta'
import { buildMetadata } from '@/lib/buildMetadata'
import { SamView } from '@/components/SamView'

export const dynamic = 'force-dynamic'

const getSam = cache(async () => {
  const payload = await getPayloadClient()
  const user = await getCurrentUser(payload)
  return payload.findGlobal({ slug: 'sam', overrideAccess: false, user, disableErrors: true })
})

export async function generateMetadata(): Promise<Metadata> {
  const sam = await getSam()

  return buildMetadata({
    path: '/sam',
    fallbackTitle: 'Het verhaal van Sam | Sam van Os Coaching',
    fallbackDescription:
      'Van een ongeluk op mijn zeventiende tot de oprichter van The Rebuild Program. Dit is het verhaal achter Van Os Coaching.',
    seo: sam?.seo,
  })
}

export default async function SamPage() {
  const [sam, cta] = await Promise.all([getSam(), getCta()])

  if (!sam) {
    notFound()
  }

  return <SamView sam={sam} cta={cta} />
}
