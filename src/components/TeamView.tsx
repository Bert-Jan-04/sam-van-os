'use client'

import React from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'

import { SERVER_URL } from '@/lib/env'
import type { Team, Cta } from '@/payload-types'
import { StatsBar } from '@/components/shared/StatsBar'
import { TeamHero } from '@/components/team/TeamHero'
import { FounderSection } from '@/components/team/FounderSection'
import { CoachesSection } from '@/components/team/CoachesSection'
import { ValuesSection } from '@/components/team/ValuesSection'
import { ClosingCta } from '@/components/team/ClosingCta'

type TeamViewProps = {
  team: Team
  cta: Cta
}

export const TeamView: React.FC<TeamViewProps> = ({ team: initialTeam, cta }) => {
  const { data: team } = useLivePreview<Team>({
    initialData: initialTeam,
    serverURL: SERVER_URL,
  })

  return (
    <div className="bg-navy">
      <TeamHero
        {...team.hero}
        ctaLabel={cta?.buttonLabel}
        ctaUrl={cta?.buttonUrl}
        ctaHelperText={cta?.text}
      />
      <StatsBar stats={team.stats ?? []} />
      <FounderSection {...team.founder} />
      <CoachesSection {...team.coaches} />
      <ValuesSection {...team.values} />
      <ClosingCta
        {...team.closing}
        ctaLabel={cta?.buttonLabel}
        ctaUrl={cta?.buttonUrl}
        ctaHelperText={cta?.text}
      />
    </div>
  )
}
