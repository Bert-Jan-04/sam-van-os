import type { Metadata } from 'next'
import { cache } from 'react'
import { notFound } from 'next/navigation'

import { getCurrentUser } from '@/lib/getCurrentUser'
import { getPayloadClient } from '@/lib/payload'
import { getCta } from '@/lib/getCta'
import { buildMetadata } from '@/lib/buildMetadata'
import { ProgrammaView } from '@/components/ProgrammaView'

export const dynamic = 'force-dynamic'

const getProgramma = cache(async () => {
  const payload = await getPayloadClient()
  const user = await getCurrentUser(payload)
  return payload.findGlobal({ slug: 'programma', overrideAccess: false, user, disableErrors: true })
})

export async function generateMetadata(): Promise<Metadata> {
  const programma = await getProgramma()

  return buildMetadata({
    path: '/programma',
    fallbackTitle: 'The Rebuild Program | Sam van Os Coaching',
    fallbackDescription:
      'Een 26-weeks coachingtraject voor vrouwen die willen afvallen en willen begrijpen waarom het steeds niet lukt om hun resultaat vast te houden.',
    seo: programma?.seo,
  })
}

export default async function ProgrammaPage() {
  const [programma, cta] = await Promise.all([getProgramma(), getCta()])

  if (!programma) {
    notFound()
  }

  return <ProgrammaView programma={programma} cta={cta} />
}
