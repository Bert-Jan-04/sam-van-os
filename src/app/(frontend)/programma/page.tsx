import type { Metadata } from 'next'

import { getPayloadClient } from '@/lib/payload'
import { getCta } from '@/lib/getCta'
import { ProgrammaView } from '@/components/ProgrammaView'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'The Rebuild Program | Sam van Os Coaching',
  description:
    'Een 26-weeks coachingtraject voor vrouwen die willen afvallen en willen begrijpen waarom het steeds niet lukt om hun resultaat vast te houden.',
}

export default async function ProgrammaPage() {
  const payload = await getPayloadClient()
  const [programma, cta] = await Promise.all([
    payload.findGlobal({ slug: 'programma' }),
    getCta(),
  ])

  return <ProgrammaView programma={programma} cta={cta} />
}
