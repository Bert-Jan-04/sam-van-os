import Link from 'next/link'

import { getMediaPath } from '@/lib/getMediaUrl'
import type { Team } from '@/payload-types'
import { ImageSlot } from '@/components/shared/ImageSlot'
import type { CtaProps } from '@/components/home/types'

type TeamHeroProps = NonNullable<Team['hero']> & CtaProps

export function TeamHero({
  eyebrow,
  heading,
  intro,
  image,
  ctaLabel,
  ctaUrl,
  ctaHelperText,
}: TeamHeroProps) {
  return (
    <div className="relative overflow-hidden px-6 pt-10 pb-14 md:grid md:grid-cols-2 md:items-center md:gap-16 md:overflow-visible md:px-20 md:py-6 md:pb-16">
      <div className="absolute inset-0 md:hidden">
        <ImageSlot
          alt="Het hele Rebuild team"
          placeholder="groepsfoto: het hele Rebuild team"
          src={getMediaPath(image)}
          priority
        />
        <div className="bg-navy/75 absolute inset-0" />
      </div>

      <div className="relative z-10">
        {eyebrow && (
          <div className="mb-[22px] flex items-center gap-3">
            <span className="bg-gold block h-0.5 w-7" />
            <span className="text-[12px] font-bold tracking-[0.16em] text-gold-light uppercase">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="font-display mb-[22px] text-[32px] leading-[1.05] tracking-wide text-white uppercase md:text-[44px] md:leading-[1.05]">
          {heading}
        </h1>
        <p className="mb-8 max-w-[440px] text-base leading-relaxed text-muted">
          {intro}
        </p>
        {ctaLabel && ctaUrl && (
          <Link
            href={ctaUrl}
            className="bg-gold inline-flex items-center gap-2.5 rounded-[9px] px-[26px] py-[15px] text-[15px] font-bold text-navy-text hover:bg-gold-hover"
          >
            {ctaLabel} <span>→</span>
          </Link>
        )}
        {ctaHelperText && (
          <p className="mt-3 text-[13px] text-muted md:text-caption">{ctaHelperText}</p>
        )}
      </div>

      <div className="relative hidden aspect-[4/5] overflow-hidden rounded-2xl md:block">
        <ImageSlot
          alt="Het hele Rebuild team"
          placeholder="groepsfoto: het hele Rebuild team"
          src={getMediaPath(image)}
          priority
        />
      </div>
    </div>
  )
}
