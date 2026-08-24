import { getMediaPath } from '@/lib/getMediaUrl'
import type { Resultaten } from '@/payload-types'
import { ImageSlot } from '@/components/shared/ImageSlot'

type BeforeAfterSectionProps = NonNullable<Resultaten['beforeAfter']>

export function BeforeAfterSection({ heading, subtext, items = [] }: BeforeAfterSectionProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
        {heading && (
          <h2 className="font-display max-w-[520px] text-[28px] leading-[1.08] text-white uppercase md:text-[34px]">
            {heading}
          </h2>
        )}
        {subtext && (
          <p className="max-w-[340px] text-[14.5px] leading-relaxed text-caption">{subtext}</p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
        {items.map((item, index) => (
          <div key={item.id ?? index} className="border-navy-border overflow-hidden rounded-2xl border">
            <div className="bg-navy-border grid grid-cols-2 gap-0.5">
              <div className="relative aspect-[3/4]">
                <ImageSlot alt="Voor" placeholder="voor" src={getMediaPath(item.beforeImage)} />
                <span className="absolute top-2.5 left-2.5 rounded-[5px] bg-black/60 px-[9px] py-[5px] text-[11px] font-bold tracking-wide text-white uppercase">
                  Voor
                </span>
              </div>
              <div className="relative aspect-[3/4]">
                <ImageSlot alt="Na" placeholder="na" src={getMediaPath(item.afterImage)} />
                <span className="bg-gold absolute top-2.5 left-2.5 rounded-[5px] px-[9px] py-[5px] text-[11px] font-bold tracking-wide text-navy-text uppercase">
                  Na
                </span>
              </div>
            </div>
            <div className="px-[22px] pt-6 pb-[26px]">
              <span className="font-display mb-2.5 block text-2xl leading-tight text-white">
                {item.name}
              </span>
              <p className="mb-4 text-[14.5px] leading-relaxed text-muted">&quot;{item.quote}&quot;</p>
              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tag.id ?? tagIndex}
                      className="border-navy-border rounded-full border bg-navy-card px-[13px] py-[7px] text-[12.5px] font-semibold text-white"
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
