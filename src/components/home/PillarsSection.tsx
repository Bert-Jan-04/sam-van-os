import { getMediaPath } from '@/lib/getMediaUrl'
import { formatIndex } from '@/utilities/formatIndex'
import type { Homepage } from '@/payload-types'

import { ImageSlot } from '@/components/shared/ImageSlot'

type PillarsSectionProps = NonNullable<Homepage['pillars']>

export function PillarsSection({ heading, subtext, items = [] }: PillarsSectionProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="mx-auto max-w-[1000px] px-6 py-6 pb-20 md:px-20 md:pb-24">
      {heading && (
        <h2 className="font-display mb-4 text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      {subtext && (
        <p className="mx-auto mb-11 max-w-[560px] text-center text-base text-caption">{subtext}</p>
      )}
      <div className="flex flex-col gap-5">
        {items.map((pillar, index) => (
          <div
            key={pillar.id ?? index}
            className={`border-navy-border flex flex-col overflow-hidden rounded-[20px] border md:flex-row ${
              pillar.reversed ? 'md:flex-row-reverse' : ''
            }`}
          >
            <div className="relative aspect-[3/2] md:aspect-auto md:w-[43%]">
              <ImageSlot
                alt={pillar.title}
                placeholder={pillar.title}
                src={getMediaPath(pillar.image)}
              />
            </div>
            <div className="flex flex-col justify-center px-8 py-8 md:w-[57%]">
              <span className="mb-2.5 text-[13px] font-bold text-caption">
                {formatIndex(index)}
              </span>
              <h3 className="mb-2.5 text-xl font-bold text-white">{pillar.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted">{pillar.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
