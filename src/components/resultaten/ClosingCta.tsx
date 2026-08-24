import Link from 'next/link'

import type { Resultaten } from '@/payload-types'
import type { CtaProps } from '@/components/home/types'

type ClosingCtaProps = NonNullable<Resultaten['closing']> & CtaProps

export function ClosingCta({ heading, text, ctaLabel, ctaUrl, ctaHelperText }: ClosingCtaProps) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-24 md:px-20">
      <div className="border-navy-border rounded-[20px] border px-8 py-14 text-center md:px-12 md:py-16">
        {heading && (
          <h2 className="font-display mb-4 text-[28px] leading-[1.08] text-white uppercase md:text-[40px]">
            {heading}
          </h2>
        )}
        {text && (
          <p className="mx-auto mb-7 max-w-[520px] text-base leading-relaxed text-muted">
            {text}
          </p>
        )}
        {ctaLabel && ctaUrl && (
          <Link
            href={ctaUrl}
            className="bg-gold inline-flex items-center gap-2.5 rounded-[9px] px-[26px] py-[15px] text-[15px] font-bold text-navy-text hover:bg-gold-hover"
          >
            {ctaLabel} <span>→</span>
          </Link>
        )}
        {ctaHelperText && <p className="mt-3 text-[13px] text-caption">{ctaHelperText}</p>}
      </div>
    </div>
  )
}
