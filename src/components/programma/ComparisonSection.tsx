import type { Programma } from '@/payload-types'

type ComparisonSectionProps = NonNullable<Programma['comparison']>

export function ComparisonSection({ heading, items = [] }: ComparisonSectionProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      {heading && (
        <h2 className="font-display mb-11 text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {items.map((item, index) => (
          <div
            key={item.id ?? index}
            className="border-navy-border rounded-[20px] border p-[34px]"
          >
            <h3 className="mb-3 text-[19px] font-bold text-white">{item.title}</h3>
            <p className="text-[15.5px] leading-relaxed text-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
