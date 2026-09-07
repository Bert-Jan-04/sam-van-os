import Link from 'next/link'

import type { Programma } from '@/payload-types'

type ReviewsTeaserSectionProps = NonNullable<Programma['reviews']>

export function ReviewsTeaserSection({ heading, text, ctaLabel, ctaUrl }: ReviewsTeaserSectionProps) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      <div className="border-navy-border rounded-[20px] border px-8 py-14 text-center md:px-12 md:py-16">
        {heading && (
          <h2 className="font-display mb-4 text-[26px] text-white uppercase md:text-[32px]">
            {heading}
          </h2>
        )}
        {text && (
          <p className="mx-auto mb-7 max-w-[620px] text-base leading-relaxed text-muted">{text}</p>
        )}
        {ctaLabel && ctaUrl && (
          <Link
            href={ctaUrl}
            className="bg-gold inline-flex items-center gap-2.5 rounded-[9px] px-[26px] py-[15px] text-[15px] font-bold text-navy-text hover:bg-gold-hover"
          >
            {ctaLabel} <span>→</span>
          </Link>
        )}
      </div>
    </div>
  )
}
