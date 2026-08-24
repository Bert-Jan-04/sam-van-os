import { formatIndex } from '@/utilities/formatIndex'
import type { Team } from '@/payload-types'

type ValuesSectionProps = NonNullable<Team['values']>

export function ValuesSection({ heading, subtext, items = [] }: ValuesSectionProps) {
  if (!items || items.length === 0) return null

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
            <p className="max-w-[360px] text-[15.5px] leading-relaxed text-muted">
              {subtext}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={item.id ?? index}
              className={`rounded-[14px] border p-[26px] ${
                item.highlight ? 'bg-accent-panel border-bronze' : 'border-navy-border bg-navy-card'
              }`}
            >
              <span className="mb-3 block text-[11px] font-bold tracking-[0.12em] text-caption uppercase">
                {formatIndex(index)}
              </span>
              <h3 className="mb-2.5 text-[17px] font-bold text-white">{item.title}</h3>
              <p
                className={`text-[14.5px] leading-relaxed ${
                  item.highlight ? 'text-white/90' : 'text-caption'
                }`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
