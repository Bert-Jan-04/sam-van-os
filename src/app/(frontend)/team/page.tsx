import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import { getCurrentUser } from '@/lib/getCurrentUser'
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
  const user = await getCurrentUser(payload)
  const [team, cta] = await Promise.all([
    payload.findGlobal({ slug: 'team', overrideAccess: false, user, disableErrors: true }),
    getCta(),
  ])

  if (!team) {
    notFound()
  }

  return <TeamView team={team} cta={cta} />
}
