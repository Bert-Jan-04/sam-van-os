'use client'

import React from 'react'
import { useLivePreview } from '@payloadcms/live-preview-react'

import { SERVER_URL } from '@/lib/env'
import type { Sam, Cta } from '@/payload-types'
import { SamHero } from '@/components/sam/SamHero'
import { StoryChapters } from '@/components/sam/StoryChapters'
import { StoryQuote } from '@/components/sam/StoryQuote'
import { SamClosingCta } from '@/components/sam/SamClosingCta'

type SamViewProps = {
  sam: Sam
  cta: Cta
}

export const SamView: React.FC<SamViewProps> = ({ sam: initialSam, cta }) => {
  const { data: sam } = useLivePreview<Sam>({
    initialData: initialSam,
    serverURL: SERVER_URL,
  })

  const chapters = sam.chapters ?? []
  const midpoint = Math.ceil(chapters.length / 2)

  return (
    <div className="bg-navy">
      <SamHero {...sam.hero} ctaLabel={cta?.buttonLabel} ctaUrl={cta?.buttonUrl} ctaHelperText={cta?.text} />
      <StoryChapters chapters={chapters.slice(0, midpoint)} />
      {sam.quote && <StoryQuote {...sam.quote} />}
      <StoryChapters chapters={chapters.slice(midpoint)} />
      <SamClosingCta
        {...sam.closing}
        ctaLabel={cta?.buttonLabel}
        ctaUrl={cta?.buttonUrl}
        ctaHelperText={cta?.text}
      />
    </div>
  )
}
