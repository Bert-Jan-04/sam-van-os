import type { Team } from '@/payload-types'

import { ProfileBlock } from './ProfileBlock'

type CoachesSectionProps = NonNullable<Team['coaches']>

export function CoachesSection({ heading, subtext, items = [] }: CoachesSectionProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      {heading && (
        <h2 className="font-display mb-3 text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      {subtext && (
        <p className="mx-auto mb-11 max-w-[520px] text-center text-[15px] text-caption">
          {subtext}
        </p>
      )}
      <div className="flex flex-col gap-16 md:gap-[88px]">
        {items.map((coach, index) => (
          <ProfileBlock key={coach.id ?? index} {...coach} />
        ))}
      </div>
    </div>
  )
}
