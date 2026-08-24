import { formatIndex } from '@/utilities/formatIndex'
import type { Homepage } from '@/payload-types'

type ProblemSectionProps = NonNullable<Homepage['problem']>

export function ProblemSection({ heading, intro1, intro2, cards = [] }: ProblemSectionProps) {
  if (!cards || cards.length === 0) return null

  return (
    <div className="mx-auto max-w-[1200px] px-6 pt-4 pb-16 md:px-20 md:pb-[72px]">
      {heading && (
        <h2 className="font-display mb-8 text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      {(intro1 || intro2) && (
        <div className="mx-auto mb-14 flex max-w-[620px] flex-col gap-[22px] text-center">
          {intro1 && <p className="text-base leading-relaxed text-muted">{intro1}</p>}
          {intro2 && <p className="text-base leading-relaxed text-muted">{intro2}</p>}
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
        {cards.map((card, index) => {
          const span = index < 2 ? 'md:col-span-3' : 'md:col-span-2'
          return (
            <div
              key={card.id ?? index}
              className={`relative overflow-hidden rounded-[20px] border p-9 ${span} ${
                card.highlight
                  ? 'bg-accent-panel border-bronze'
                  : 'border-navy-border bg-navy-card'
              }`}
            >
              <span
                className={`font-display absolute -top-[18px] right-2 text-[100px] leading-none ${
                  card.highlight ? 'text-gold/16' : 'text-white/10'
                }`}
              >
                {formatIndex(index)}
              </span>
              <h3 className="relative mb-3 text-xl font-bold text-white">{card.title}</h3>
              <p
                className={`relative text-[14.5px] leading-relaxed ${
                  card.highlight ? 'text-white/90' : 'text-muted'
                }`}
              >
                {card.text}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
