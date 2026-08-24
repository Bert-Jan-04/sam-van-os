import type { CSSProperties } from 'react'
import NextImage from 'next/image'

import { getMediaPath } from '@/lib/getMediaUrl'
import type { Resultaten } from '@/payload-types'

type HeroSlideshowProps = {
  slides?: NonNullable<Resultaten['hero']>['slides']
}

const STAGGER_SECONDS = 1.6

export function HeroSlideshow({ slides = [] }: HeroSlideshowProps) {
  const urls = (slides ?? [])
    .map((slide) => getMediaPath(slide.image))
    .filter((src): src is string => Boolean(src))

  if (urls.length === 0) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 p-4 text-center text-xs text-caption">
        resultaatfoto&apos;s
      </div>
    )
  }

  const duration = urls.length * STAGGER_SECONDS

  return (
    <>
      {urls.map((src, index) => (
        <NextImage
          key={index}
          src={src}
          alt="Resultaat van een klant"
          fill
          sizes="100vw"
          priority={index === 0}
          className="rs-slide object-cover"
          style={
            {
              '--rs-delay': `${index * STAGGER_SECONDS}s`,
              '--rs-duration': `${duration}s`,
            } as CSSProperties
          }
        />
      ))}
    </>
  )
}
