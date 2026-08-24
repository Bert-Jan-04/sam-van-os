import type { Resultaten } from '@/payload-types'

type MetricsSectionProps = NonNullable<Resultaten['metrics']>

export function MetricsSection({ heading, subtext, items = [] }: MetricsSectionProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="mx-auto max-w-[1000px] px-6 pb-20 md:px-20 md:pb-24">
      {heading && (
        <h2 className="font-display mb-3 text-[28px] text-white uppercase md:text-[34px]">
          {heading}
        </h2>
      )}
      {subtext && (
        <p className="mb-10 max-w-[560px] text-[15.5px] leading-relaxed text-caption">
          {subtext}
        </p>
      )}
      <div className="border-navy-border border-t">
        {items.map((item, index) => (
          <div
            key={item.id ?? index}
            className="border-navy-border grid grid-cols-1 items-baseline gap-1.5 border-b py-[22px] md:grid-cols-[220px_1fr] md:gap-6"
          >
            <span className="text-base font-semibold text-white">{item.label}</span>
            <span className="text-[15px] leading-relaxed text-muted">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
