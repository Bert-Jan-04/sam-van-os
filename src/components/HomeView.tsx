'use client'

import React from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'

import { SERVER_URL } from '@/lib/env'
import type { Homepage, Cta } from '@/payload-types'
import { Hero } from '@/components/home/Hero'
import { StatsBar } from '@/components/shared/StatsBar'
import { ProblemSection } from '@/components/home/ProblemSection'
import { PhilosophySection } from '@/components/home/PhilosophySection'
import { PillarsSection } from '@/components/home/PillarsSection'
import { JourneySection } from '@/components/home/JourneySection'
import { ResultsStrip } from '@/components/home/ResultsStrip'
import { StoriesSection } from '@/components/home/StoriesSection'
import { TestimonialsStrip } from '@/components/home/TestimonialsStrip'
import { CommunitySection } from '@/components/home/CommunitySection'
import { AboutSamSection } from '@/components/home/AboutSamSection'
import { TeamSection } from '@/components/home/TeamSection'
import { ContentSection } from '@/components/home/ContentSection'
import { FaqSection } from '@/components/shared/FaqSection'

type HomeViewProps = {
  homepage: Homepage
  cta: Cta
}

export const HomeView: React.FC<HomeViewProps> = ({ homepage: initialHomepage, cta }) => {
  const { data: homepage } = useLivePreview<Homepage>({
    initialData: initialHomepage,
    serverURL: SERVER_URL,
  })

  return (
    <div className="bg-navy">
      <Hero
        {...homepage.hero}
        ctaLabel={cta?.buttonLabel}
        ctaUrl={cta?.buttonUrl}
        ctaHelperText={cta?.text}
      />
      <StatsBar stats={homepage.stats ?? []} />
      <ProblemSection {...homepage.problem} />
      <PhilosophySection {...homepage.philosophy} />
      <PillarsSection {...homepage.pillars} />
      <JourneySection
        {...homepage.journey}
        ctaLabel={cta?.buttonLabel}
        ctaUrl={cta?.buttonUrl}
        ctaHelperText={cta?.text}
      />
      <ResultsStrip {...homepage.results} />
      <StoriesSection {...homepage.stories} />
      <TestimonialsStrip {...homepage.testimonials} />
      <CommunitySection {...homepage.community} />
      <AboutSamSection {...homepage.aboutSam} />
      <TeamSection {...homepage.team} />
      <ContentSection {...homepage.content} />
      <FaqSection {...homepage.faq} />
    </div>
  )
}
