import { getMediaPath } from '@/lib/getMediaUrl'
import type { Programma } from '@/payload-types'
import { ImageSlot } from '@/components/shared/ImageSlot'

type ResultsSectionProps = NonNullable<Programma['results']>

export function ResultsSection({ heading, items = [] }: ResultsSectionProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      {heading && (
        <h2 className="font-display mb-10 max-w-[820px] text-[30px] leading-[1.06] text-white uppercase md:text-[44px]">
          {heading}
        </h2>
      )}
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, index) => (
          <div key={item.id ?? index} className="border-navy-border overflow-hidden rounded-2xl border">
            <div className="relative aspect-[4/5]">
              <ImageSlot
                alt="Voor/na of klantvideo"
                placeholder="voor/na of klantvideo"
                src={getMediaPath(item.image)}
              />
            </div>
            <div className="px-[22px] pt-[22px] pb-[26px]">
              <span className="font-display mb-2 block text-2xl leading-tight text-white">
                {item.resultText}
              </span>
              <p className="text-sm leading-relaxed text-caption">{item.quoteText}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
