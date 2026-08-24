import type { Metadata } from 'next'

import { getPayloadClient } from '@/lib/payload'
import { getCta } from '@/lib/getCta'
import { TeamView } from '@/components/TeamView'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Team | Sam van Os Coaching',
  description:
    'Maak kennis met de coaches achter The Rebuild Program: één vaste coach die zes maanden naast je loopt.',
}

export default async function TeamPage() {
  const payload = await getPayloadClient()
  const [team, cta] = await Promise.all([payload.findGlobal({ slug: 'team' }), getCta()])

  return <TeamView team={team} cta={cta} />
}
