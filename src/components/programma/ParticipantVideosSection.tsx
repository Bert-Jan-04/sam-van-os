import { getMediaPath } from '@/lib/getMediaUrl'
import type { Programma } from '@/payload-types'

import { PlayableVideo } from '@/components/shared/PlayableVideo'

type ParticipantVideosSectionProps = NonNullable<Programma['participantVideos']>

export function ParticipantVideosSection({ heading, videos = [] }: ParticipantVideosSectionProps) {
  const videoUrls = (videos ?? []).map((item) => getMediaPath(item.video))

  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      {heading && (
        <h2 className="font-display mb-8 text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-5 sm:grid-cols-3">
        {videoUrls.map((url, index) => (
          <div
            key={index}
            className="relative aspect-[9/16] overflow-hidden rounded-[14px] bg-black"
          >
            <PlayableVideo src={url} placeholder="video: deelnemer" buttonSize={68} />
          </div>
        ))}
      </div>
    </div>
  )
}
