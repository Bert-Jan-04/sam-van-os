import type { Resultaten } from '@/payload-types'

type QuotesSectionProps = {
  quotes: NonNullable<Resultaten['quotes']>
}

const variantClass: Record<string, string> = {
  outline: 'border-navy-border border',
  highlight: 'bg-accent-panel border-bronze border',
  muted: 'border-navy-border border bg-navy-card',
}

const attributionClass: Record<string, string> = {
  outline: 'text-caption',
  highlight: 'text-white/90',
  muted: 'text-caption',
}

export function QuotesSection({ quotes }: QuotesSectionProps) {
  if (!quotes || quotes.length === 0) return null

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2">
        {quotes.map((item, index) => {
          const variant = item.variant ?? 'outline'
          return (
            <div key={item.id ?? index} className={`rounded-2xl p-[34px] ${variantClass[variant]}`}>
              <p className="mb-[22px] text-xl leading-snug font-medium text-white">
                &quot;{item.quote}&quot;
              </p>
              <span className={`text-sm ${attributionClass[variant]}`}>{item.attribution}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
