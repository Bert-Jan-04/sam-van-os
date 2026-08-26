'use client'

import { getMediaPath } from '@/lib/getMediaUrl'
import { useDragScroll } from '@/lib/useDragScroll'
import type { Homepage } from '@/payload-types'

import { ImageSlot } from '@/components/shared/ImageSlot'

type ResultsStripProps = NonNullable<Homepage['results']>

export function ResultsStrip({ heading, images = [] }: ResultsStripProps) {
  const { ref, onPointerDown, onPointerMove, onPointerUp, onPointerCancel } =
    useDragScroll<HTMLDivElement>()

  if (!images || images.length === 0) return null

  return (
    <div className="relative pt-[72px]">
      {heading && (
        <h2 className="font-display mb-8 text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      <div
        ref={ref}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        className="w-full cursor-grab snap-x overflow-x-auto touch-pan-x select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex w-max gap-1 px-6 md:px-20">
          {images.map((item, index) => (
            <div
              key={item.id ?? index}
              className="relative h-[280px] w-[300px] flex-none snap-start overflow-hidden rounded-[14px]"
            >
              <ImageSlot
                alt={`Resultaat ${index + 1}`}
                placeholder={`resultaat ${index + 1}`}
                src={getMediaPath(item.image)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
