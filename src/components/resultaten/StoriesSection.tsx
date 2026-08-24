import type { Resultaten } from '@/payload-types'

import { StoryBlock } from './StoryBlock'

type StoriesSectionProps = NonNullable<Resultaten['stories']>

export function StoriesSection({ heading, items = [] }: StoriesSectionProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      {heading && (
        <h2 className="font-display mb-11 text-[28px] text-white uppercase md:text-[34px]">
          {heading}
        </h2>
      )}
      <div className="flex flex-col gap-16 md:gap-[88px]">
        {items.map((item, index) => (
          <StoryBlock key={item.id ?? index} {...item} />
        ))}
      </div>
    </div>
  )
}
