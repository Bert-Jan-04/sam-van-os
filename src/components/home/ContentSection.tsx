import { getMediaPath } from '@/lib/getMediaUrl'
import type { Homepage } from '@/payload-types'

import { PlayableVideo } from '@/components/shared/PlayableVideo'

type ContentSectionProps = NonNullable<Homepage['content']>

export function ContentSection({ heading, videos = [] }: ContentSectionProps) {
  const videoUrls = (videos ?? []).map((item) => getMediaPath(item.video))

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-14 pb-20 md:px-20 md:pb-[72px]">
      {heading && (
        <h2 className="font-display mb-8 text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      <div className="mx-auto grid max-w-[900px] grid-cols-3 gap-5">
        {videoUrls.map((url, index) => (
          <div
            key={index}
            className="relative aspect-[9/16] overflow-hidden rounded-[14px] bg-black"
          >
            <PlayableVideo src={url} placeholder="video: content" buttonSize={68} />
          </div>
        ))}
      </div>
    </div>
  )
}
