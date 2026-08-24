'use client'

import React from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'

import { SERVER_URL } from '@/lib/env'
import type { Programma, Cta } from '@/payload-types'
import { StatsBar } from '@/components/shared/StatsBar'
import { FaqSection } from '@/components/shared/FaqSection'
import { ProgrammaHero } from '@/components/programma/ProgrammaHero'
import { WhatIsItSection } from '@/components/programma/WhatIsItSection'
import { WhyNotWorkingSection } from '@/components/programma/WhyNotWorkingSection'
import { MethodSection } from '@/components/programma/MethodSection'
import { ForYouSection } from '@/components/programma/ForYouSection'
import { WhatYouGetSection } from '@/components/programma/WhatYouGetSection'
import { TimelineSection } from '@/components/programma/TimelineSection'
import { CommunitySection } from '@/components/programma/CommunitySection'
import { ResultsSection } from '@/components/programma/ResultsSection'
import { ClosingCta } from '@/components/programma/ClosingCta'

type ProgrammaViewProps = {
  programma: Programma
  cta: Cta
}

export const ProgrammaView: React.FC<ProgrammaViewProps> = ({
  programma: initialProgramma,
  cta,
}) => {
  const { data: programma } = useLivePreview<Programma>({
    initialData: initialProgramma,
    serverURL: SERVER_URL,
  })

  return (
    <div className="bg-navy">
      <ProgrammaHero
        {...programma.hero}
        ctaLabel={cta?.buttonLabel}
        ctaUrl={cta?.buttonUrl}
        ctaHelperText={cta?.text}
      />
      <StatsBar stats={programma.stats ?? []} columns={4} />
      <WhatIsItSection {...programma.whatIsIt} />
      <WhyNotWorkingSection {...programma.whyNotWorking} />
      <MethodSection {...programma.method} />
      <ForYouSection {...programma.forYou} />
      <WhatYouGetSection {...programma.whatYouGet} />
      <TimelineSection {...programma.timeline} />
      <CommunitySection {...programma.community} />
      <ResultsSection {...programma.results} />
      <FaqSection {...programma.faq} />
      <ClosingCta
        {...programma.closing}
        ctaLabel={cta?.buttonLabel}
        ctaUrl={cta?.buttonUrl}
        ctaHelperText={cta?.text}
      />
    </div>
  )
}
