import type { Team } from '@/payload-types'

import { ProfileBlock } from './ProfileBlock'

type FounderSectionProps = NonNullable<Team['founder']>

export function FounderSection(founder: FounderSectionProps) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      <ProfileBlock {...founder} />
    </div>
  )
}
