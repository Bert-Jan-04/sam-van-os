import type { Metadata } from 'next'
import { cache } from 'react'
import { notFound } from 'next/navigation'

import { getCurrentUser } from '@/lib/getCurrentUser'
import { getPayloadClient } from '@/lib/payload'
import { getCta } from '@/lib/getCta'
import { buildMetadata } from '@/lib/buildMetadata'
import { TeamView } from '@/components/TeamView'

export const dynamic = 'force-dynamic'

const getTeam = cache(async () => {
  const payload = await getPayloadClient()
  const user = await getCurrentUser(payload)
  return payload.findGlobal({ slug: 'team', overrideAccess: false, user, disableErrors: true })
})

export async function generateMetadata(): Promise<Metadata> {
  const team = await getTeam()

  return buildMetadata({
    path: '/team',
    fallbackTitle: 'Team | Sam van Os Coaching',
    fallbackDescription:
      'Maak kennis met de coaches achter The Rebuild Program: één vaste coach die zes maanden naast je loopt.',
    seo: team?.seo,
  })
}

export default async function TeamPage() {
  const [team, cta] = await Promise.all([getTeam(), getCta()])

  if (!team) {
    notFound()
  }

  return <TeamView team={team} cta={cta} />
}
