'use client'

import type { Homepage } from '@/payload-types'
import { useDragScroll } from '@/lib/useDragScroll'

type TestimonialsStripProps = NonNullable<Homepage['testimonials']>

export function TestimonialsStrip({ heading, items = [] }: TestimonialsStripProps) {
  const { ref, onPointerDown, onPointerMove, onPointerUp, onPointerCancel } =
    useDragScroll<HTMLDivElement>()

  if (!items || items.length === 0) return null

  return (
    <div className="py-14 md:py-[56px] md:pb-[88px]">
      {heading && (
        <h2 className="font-display mb-10 text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      <div
        ref={ref}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        className="w-full cursor-grab overflow-x-auto touch-pan-y select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex w-max gap-5 px-6 md:px-20">
          {items.map((testimonial, index) => (
            <div
              key={testimonial.id ?? index}
              className="flex w-[340px] flex-none flex-col rounded-2xl bg-ivory p-8"
            >
              <h3 className="font-display mb-3.5 text-[22px] leading-[1.15] text-ivory-text uppercase">
                {testimonial.title}
              </h3>
              <span className="text-star mb-3.5 text-[15px] tracking-widest">★★★★★</span>
              <p className="mb-6 text-sm leading-relaxed text-ivory-text/70">{testimonial.quote}</p>
              <span className="mt-auto text-[13px] font-semibold text-ivory-text/60">
                {testimonial.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
