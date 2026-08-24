import type { Programma } from '@/payload-types'

type TimelineSectionProps = NonNullable<Programma['timeline']>

export function TimelineSection({ heading, phases = [], closingStatement }: TimelineSectionProps) {
  if (!phases || phases.length === 0) return null

  return (
    <div className="mx-auto max-w-[1000px] px-6 pb-20 md:px-20 md:pb-24">
      {heading && (
        <h2 className="font-display mb-11 text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      <div className="border-navy-border flex flex-col border-b md:border-b-0">
        {phases.map((phase, index) => (
          <div
            key={phase.id ?? index}
            className="border-navy-border grid grid-cols-1 gap-2 border-t py-[30px] md:grid-cols-[180px_1fr] md:gap-8"
          >
            <span className="text-[12px] font-bold tracking-[0.12em] text-gold-light uppercase">
              {phase.label}
            </span>
            <p className="text-[17px] leading-relaxed text-muted">{phase.text}</p>
          </div>
        ))}
      </div>
      {closingStatement && (
        <p className="mt-9 text-[19px] leading-relaxed font-semibold text-white">
          {closingStatement}
        </p>
      )}
    </div>
  )
}
