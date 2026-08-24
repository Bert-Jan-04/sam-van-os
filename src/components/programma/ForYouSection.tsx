import type { Programma } from '@/payload-types'

type ForYouSectionProps = NonNullable<Programma['forYou']>

export function ForYouSection({
  heading,
  subtext,
  doHeading,
  doItems = [],
  dontHeading,
  dontItems = [],
}: ForYouSectionProps) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      {heading && (
        <h2 className="font-display mx-auto mb-3.5 max-w-[820px] text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      {subtext && (
        <p className="mx-auto mb-11 max-w-[620px] text-center text-base leading-relaxed text-muted">
          {subtext}
        </p>
      )}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="border-navy-border rounded-[20px] border p-[34px]">
          {doHeading && (
            <span className="mb-5 block text-[12px] font-bold tracking-[0.16em] text-gold-light uppercase">
              {doHeading}
            </span>
          )}
          <div className="flex flex-col gap-3.5">
            {doItems?.map((item, index) => (
              <p key={item.id ?? index} className="text-[15.5px] leading-relaxed text-muted">
                <span className="mr-2.5 text-gold-light">✓</span>
                {item.text}
              </p>
            ))}
          </div>
        </div>
        <div className="border-navy-border rounded-[20px] border bg-navy-card p-[34px]">
          {dontHeading && (
            <span className="mb-5 block text-[12px] font-bold tracking-[0.16em] text-caption uppercase">
              {dontHeading}
            </span>
          )}
          <div className="flex flex-col gap-3.5">
            {dontItems?.map((item, index) => (
              <p key={item.id ?? index} className="text-[15.5px] leading-relaxed text-caption">
                <span className="mr-2.5 text-caption">×</span>
                {item.text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
