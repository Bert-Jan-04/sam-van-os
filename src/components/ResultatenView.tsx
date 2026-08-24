'use client'

import React from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'

import { SERVER_URL } from '@/lib/env'
import type { Resultaten, Cta } from '@/payload-types'
import { StatsBar } from '@/components/shared/StatsBar'
import { ResultatenHero } from '@/components/resultaten/ResultatenHero'
import { BeforeAfterSection } from '@/components/resultaten/BeforeAfterSection'
import { BeyondPhotosSection } from '@/components/resultaten/BeyondPhotosSection'
import { StoriesSection } from '@/components/resultaten/StoriesSection'
import { VideoStoriesSection } from '@/components/resultaten/VideoStoriesSection'
import { QuotesSection } from '@/components/resultaten/QuotesSection'
import { MetricsSection } from '@/components/resultaten/MetricsSection'
import { ClosingCta } from '@/components/resultaten/ClosingCta'

type ResultatenViewProps = {
  resultaten: Resultaten
  cta: Cta
}

export const ResultatenView: React.FC<ResultatenViewProps> = ({
  resultaten: initialResultaten,
  cta,
}) => {
  const { data: resultaten } = useLivePreview<Resultaten>({
    initialData: initialResultaten,
    serverURL: SERVER_URL,
  })

  return (
    <div className="bg-navy">
      <ResultatenHero
        {...resultaten.hero}
        ctaLabel={cta?.buttonLabel}
        ctaUrl={cta?.buttonUrl}
        ctaHelperText={cta?.text}
      />
      <StatsBar stats={resultaten.stats ?? []} columns={4} />
      <BeforeAfterSection {...resultaten.beforeAfter} />
      <BeyondPhotosSection {...resultaten.beyondPhotos} />
      <StoriesSection {...resultaten.stories} />
      <VideoStoriesSection {...resultaten.videoStories} />
      <QuotesSection quotes={resultaten.quotes ?? []} />
      <MetricsSection {...resultaten.metrics} />
      <ClosingCta
        {...resultaten.closing}
        ctaLabel={cta?.buttonLabel}
        ctaUrl={cta?.buttonUrl}
        ctaHelperText={cta?.text}
      />
    </div>
  )
}
