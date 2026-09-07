import Link from 'next/link'
import NextImage from 'next/image'

import { getMediaPath } from '@/lib/getMediaUrl'
import type { Homepage } from '@/payload-types'

import { ImageSlot } from '@/components/shared/ImageSlot'
import type { CtaProps } from './types'

type HeroProps = NonNullable<Homepage['hero']> & CtaProps

const avatarColors = ['bg-neutral-700', 'bg-neutral-600', 'bg-neutral-500']

export function Hero({
  ratingValue,
  ratingLabel,
  heading,
  intro,
  image,
  memberBadgeText,
  memberAvatars = [],
  ctaLabel,
  ctaUrl,
  ctaHelperText,
}: HeroProps) {
  return (
    <div className="relative overflow-hidden px-6 pt-10 pb-14 md:grid md:grid-cols-2 md:items-center md:gap-16 md:overflow-visible md:px-20 md:py-6 md:pb-16">
      <div className="absolute inset-0 md:hidden">
        <ImageSlot alt="Sam, actie shot" placeholder="foto: Sam, actie shot" src={getMediaPath(image)} priority />
        <div className="bg-navy/75 absolute inset-0" />
      </div>

      <div className="relative z-10 md:pl-14">
        <div className="mb-5 flex items-center gap-2">
          <span className="text-sm font-bold text-white">{ratingValue}</span>
          <span className="text-star text-sm">★★★★★</span>
          <span className="text-[13px] text-muted md:text-caption">{ratingLabel}</span>
        </div>
        <h1 className="font-display mb-[22px] text-[32px] leading-[1.05] tracking-wide text-white uppercase md:text-[44px] md:leading-[1.05]">
          {heading}
        </h1>
        <p className="mb-8 max-w-[420px] text-base leading-relaxed text-muted">
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

      <div className="relative hidden overflow-hidden rounded-2xl md:block md:h-[460px]">
        <ImageSlot alt="Sam, actie shot" placeholder="foto: Sam, actie shot" src={getMediaPath(image)} priority />
        <div className="absolute right-5 bottom-5 z-10 hidden items-center gap-2 rounded-full bg-black/55 py-2 pr-3.5 pl-2 backdrop-blur-sm md:flex">
          <div className="flex">
            {[0, 1, 2].map((i) => {
              const url = getMediaPath(memberAvatars?.[i]?.image)
              return (
                <div
                  key={i}
                  className={`border-navy relative h-6 w-6 overflow-hidden rounded-full border-2 ${i > 0 ? '-ml-2' : ''} ${url ? '' : avatarColors[i]}`}
                >
                  {url && (
                    <NextImage src={url} alt="" fill sizes="24px" className="object-cover" />
                  )}
                </div>
              )
            })}
          </div>
          <span className="text-xs font-semibold text-white">{memberBadgeText}</span>
        </div>
      </div>
    </div>
  )
}
