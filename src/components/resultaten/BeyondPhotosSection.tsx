import type { Resultaten } from '@/payload-types'

type BeyondPhotosSectionProps = NonNullable<Resultaten['beyondPhotos']>

export function BeyondPhotosSection({ heading, subtext, items = [] }: BeyondPhotosSectionProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      {heading && (
        <h2 className="font-display mb-3 text-[28px] leading-[1.05] text-white uppercase md:text-[34px]">
          {heading}
        </h2>
      )}
      {subtext && (
        <p className="mb-11 max-w-[560px] text-[15.5px] leading-relaxed text-caption">
          {subtext}
        </p>
      )}
      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={item.id ?? index}
            className="border-navy-border rounded-2xl border bg-navy-card px-7 py-[30px]"
          >
            {item.label && (
              <span className="mb-3.5 block text-[11px] font-bold tracking-[0.12em] text-caption uppercase">
                {item.label}
              </span>
            )}
            <h3 className="mb-3.5 text-[19px] leading-tight font-bold text-white">{item.title}</h3>
            <div className="border-navy-border flex flex-col gap-3 border-t pt-4">
              <div className="grid grid-cols-1 items-baseline gap-1.5 sm:grid-cols-[52px_1fr] sm:gap-3">
                <span className="text-[11px] font-bold tracking-wide text-caption uppercase">
                  Voor
                </span>
                <span className="text-[14.5px] leading-relaxed text-caption">{item.before}</span>
              </div>
              <div className="grid grid-cols-1 items-baseline gap-1.5 sm:grid-cols-[52px_1fr] sm:gap-3">
                <span className="text-[11px] font-bold tracking-wide text-gold-light uppercase">
                  Na
                </span>
                <span className="text-[14.5px] leading-relaxed text-white">{item.after}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
