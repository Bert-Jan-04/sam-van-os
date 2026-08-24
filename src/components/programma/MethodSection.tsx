import { getMediaPath } from '@/lib/getMediaUrl'
import { formatIndex } from '@/utilities/formatIndex'
import type { Programma } from '@/payload-types'
import { ImageSlot } from '@/components/shared/ImageSlot'

type MethodSectionProps = NonNullable<Programma['method']>

export function MethodSection({
  heading,
  subtext,
  image,
  items = [],
  closingStatement,
}: MethodSectionProps) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
        <div>
          {heading && (
            <h2 className="font-display mb-4 text-[32px] leading-[1.05] text-white uppercase md:text-[40px]">
              {heading}
            </h2>
          )}
          {subtext && (
            <p className="mb-6 max-w-[360px] text-[15.5px] leading-relaxed text-muted">
              {subtext}
            </p>
          )}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
            <ImageSlot
              alt="Foto: training of coaching"
              placeholder="foto: training of coaching"
              src={getMediaPath(image)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-[18px]">
          {items?.map((item, index) => (
            <div
              key={item.id ?? index}
              className={`rounded-[14px] border px-[26px] py-7 ${
                item.highlight ? 'bg-accent-panel border-bronze' : 'border-navy-border bg-navy-card'
              }`}
            >
              <span className="mb-3 block text-[11px] font-bold tracking-[0.12em] text-caption uppercase">
                {formatIndex(index)}
              </span>
              <h3 className="mb-2.5 text-lg font-bold text-white">{item.title}</h3>
              <p
                className={`text-[14.5px] leading-relaxed ${
                  item.highlight ? 'text-white/90' : 'text-caption'
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
          {closingStatement && (
            <p className="mt-1 text-[17px] leading-relaxed font-semibold text-white">
              {closingStatement}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
