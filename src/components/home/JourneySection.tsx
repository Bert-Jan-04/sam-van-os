import Link from 'next/link'

import { getMediaPath } from '@/lib/getMediaUrl'
import type { Homepage } from '@/payload-types'

import { ImageSlot } from '@/components/shared/ImageSlot'
import type { CtaProps } from './types'

type JourneySectionProps = NonNullable<Homepage['journey']> & CtaProps

export function JourneySection({
  eyebrow,
  heading,
  intro,
  image,
  steps = [],
  ctaLabel,
  ctaUrl,
  ctaHelperText,
}: JourneySectionProps) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-6 pb-20 md:px-20 md:pb-24">
      <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-[0.85fr_1.15fr] md:gap-14">
        <div>
          {eyebrow && (
            <div className="mb-6 flex items-center gap-3">
              <span className="bg-gold block h-0.5 w-7" />
              <span className="text-[12px] font-bold tracking-[0.16em] text-gold-light uppercase">
                {eyebrow}
              </span>
            </div>
          )}
          {heading && (
            <h2 className="font-display mb-[22px] text-[32px] leading-[1.05] text-white uppercase md:text-[46px]">
              {heading}
            </h2>
          )}
          {intro && (
            <p className="mb-8 max-w-[380px] text-[15.5px] leading-relaxed text-muted">
              {intro}
            </p>
          )}
          <div className="relative aspect-[3/4] overflow-hidden rounded-[14px]">
            <ImageSlot
              alt="Coaching moment"
              placeholder="foto: coaching moment"
              src={getMediaPath(image)}
            />
          </div>
        </div>

        <div>
          {steps && steps.length > 0 && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {steps.map((step, index) => (
                <div
                  key={step.id ?? index}
                  className="border-navy-border flex flex-col rounded-[14px] border bg-navy-card px-7 py-[30px]"
                >
                  <div className="mb-[22px] flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-gold/50 bg-gold/16 text-sm font-bold text-gold-light">
                    {index + 1}
                  </div>
                  <span className="mb-2.5 block text-[11px] font-bold tracking-[0.12em] text-caption uppercase">
                    {step.phase}
                  </span>
                  <h3 className="mb-3 text-[17px] font-bold tracking-wide text-white uppercase">
                    {step.title}
                  </h3>
                  <p className="text-[14.5px] leading-relaxed text-caption">{step.text}</p>
                  {step.highlight && (
                    <p className="mt-3.5 text-[14.5px] leading-relaxed font-semibold text-white">
                      {step.highlight}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
          {ctaLabel && ctaUrl && (
            <div className="mt-8">
              <Link
                href={ctaUrl}
                className="bg-gold inline-flex items-center gap-2.5 rounded-[9px] px-[26px] py-[15px] text-[15px] font-bold text-navy-text hover:bg-gold-hover"
              >
                {ctaLabel} <span>→</span>
              </Link>
              {ctaHelperText && (
                <p className="mt-3 text-[13px] text-caption">{ctaHelperText}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
