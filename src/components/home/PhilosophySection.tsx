import type { Homepage } from '@/payload-types'

type PhilosophySectionProps = NonNullable<Homepage['philosophy']>

export function PhilosophySection({ heading, paragraph1, paragraph2 }: PhilosophySectionProps) {
  return (
    <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-14 px-6 py-6 pb-16 md:grid-cols-[1fr_1.2fr] md:gap-20 md:px-20 md:pb-[88px]">
      <div>
        {heading && (
          <h2 className="font-display text-[38px] leading-[1.05] text-white uppercase md:text-[56px]">
            {heading}
          </h2>
        )}
        <svg className="mt-2 h-5 w-40" viewBox="0 0 160 20" preserveAspectRatio="none">
          <path
            d="M 0 10 Q 20 8 40 12 T 80 10 T 120 12 T 160 10"
            stroke="#c8a464"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="pt-2">
        {paragraph1 && (
          <p className="mb-8 text-[15px] leading-relaxed text-muted">{paragraph1}</p>
        )}
        {paragraph2 && (
          <div className="border-gold border-t-2 pt-6">
            <p className="text-[15px] leading-relaxed font-semibold text-white">{paragraph2}</p>
          </div>
        )}
      </div>
    </div>
  )
}
