import { getMediaPath } from '@/lib/getMediaUrl'
import type { Resultaten } from '@/payload-types'
import { PlayableVideo } from '@/components/shared/PlayableVideo'

type VideoStoriesSectionProps = NonNullable<Resultaten['videoStories']>

export function VideoStoriesSection({ heading, subtext, items = [] }: VideoStoriesSectionProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
        {heading && (
          <h2 className="font-display text-[28px] text-white uppercase md:text-[34px]">
            {heading}
          </h2>
        )}
        {subtext && (
          <p className="max-w-[320px] text-[14.5px] leading-relaxed text-caption">{subtext}</p>
        )}
      </div>
      <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 md:grid-cols-3">
        {items.map((item, index) => (
          <div key={item.id ?? index} className="border-navy-border overflow-hidden rounded-2xl border">
            <div className="relative aspect-[9/16] bg-navy-card">
              <PlayableVideo
                src={getMediaPath(item.video)}
                placeholder={`video: ${item.name ?? 'klant'}`}
                buttonSize={56}
              />
            </div>
            <div className="p-[22px]">
              <span className="mb-1.5 block text-base font-bold text-white">{item.name}</span>
              {item.description && (
                <p className="text-sm leading-relaxed text-caption">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
