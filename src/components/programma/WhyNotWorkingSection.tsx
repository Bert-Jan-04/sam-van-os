import type { Programma } from '@/payload-types'

type WhyNotWorkingSectionProps = NonNullable<Programma['whyNotWorking']>

export function WhyNotWorkingSection({
  heading,
  items = [],
  closingStatement,
}: WhyNotWorkingSectionProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      {heading && (
        <h2 className="font-display mb-9 text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      <div className="mb-9 grid grid-cols-1 gap-[18px] md:grid-cols-3">
        {items.map((item, index) => (
          <div
            key={item.id ?? index}
            className="border-navy-border rounded-2xl border px-6 py-[26px] text-[15.5px] leading-relaxed text-muted"
          >
            {item.text}
          </div>
        ))}
      </div>
      {closingStatement && (
        <p className="max-w-[720px] text-xl leading-relaxed font-semibold text-white">
          {closingStatement}
        </p>
      )}
    </div>
  )
}
