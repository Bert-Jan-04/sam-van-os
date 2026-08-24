import type { Programma } from '@/payload-types'

type WhatIsItSectionProps = NonNullable<Programma['whatIsIt']>

export function WhatIsItSection({
  heading,
  paragraph1,
  paragraph2,
  coreLabel,
  coreTags = [],
}: WhatIsItSectionProps) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-2 md:gap-14">
        <div>
          {heading && (
            <h2 className="font-display mb-[18px] text-[28px] leading-[1.05] text-white uppercase md:text-[34px]">
              {heading}
            </h2>
          )}
          {paragraph1 && (
            <p className="mb-4 text-base leading-relaxed text-muted">{paragraph1}</p>
          )}
          {paragraph2 && <p className="text-base leading-relaxed text-muted">{paragraph2}</p>}
        </div>
        <div className="border-navy-border rounded-[20px] border p-[34px]">
          {coreLabel && (
            <span className="mb-[22px] block text-[12px] font-bold tracking-[0.16em] text-gold-light uppercase">
              {coreLabel}
            </span>
          )}
          {coreTags && coreTags.length > 0 && (
            <div className="flex flex-wrap gap-2.5">
              {coreTags.map((tag, index) => (
                <span
                  key={tag.id ?? index}
                  className={`rounded-full px-5 py-[11px] text-base font-bold ${
                    tag.highlight
                      ? 'bg-gold border-gold border text-navy-text'
                      : 'border-navy-border border bg-navy-card text-white'
                  }`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
