import { getMediaPath } from '@/lib/getMediaUrl'
import type { Homepage } from '@/payload-types'

import { ImageSlot } from '@/components/shared/ImageSlot'
import { PlayableVideo } from '@/components/shared/PlayableVideo'

type CommunitySectionProps = NonNullable<Homepage['community']>

export function CommunitySection({
  heading,
  subtext,
  memberCountText,
  memberCountLabel,
  photos = [],
  starsHeading,
  starsSubtext,
  starsVideos = [],
}: CommunitySectionProps) {
  const photoUrls = (photos ?? []).map((photo) => getMediaPath(photo.image)).slice(0, 4)
  const videoUrls = (starsVideos ?? []).map((item) => getMediaPath(item.video))
  const videoStyleBig =
    'relative aspect-video overflow-hidden rounded-2xl bg-navy-card md:col-span-1 md:row-span-2 md:aspect-auto md:h-[616px]'
  const videoStyleSmall =
    'relative aspect-video overflow-hidden rounded-2xl bg-navy-card md:aspect-auto md:h-[300px]'

  const photoStyleBig =
    'relative col-span-2 row-span-1 overflow-hidden rounded-[18px] md:col-span-1 md:row-span-2 md:h-[314px]'
  const photoStyleSmall = 'relative h-[150px] overflow-hidden rounded-[18px]'
  const photosBeforeCounter = photoUrls.slice(0, 3)
  const photosAfterCounter = photoUrls.slice(3)

  return (
    <>
      {photoUrls.length > 0 && (
        <div className="mx-auto max-w-[1200px] px-6 py-6 pb-20 md:px-20 md:pb-24">
          {(heading || subtext) && (
            <div className="mb-11 text-center">
              {heading && (
                <h2 className="font-display text-[30px] leading-[1.1] text-white uppercase md:text-[38px]">
                  {heading}
                </h2>
              )}
              {subtext && (
                <p className="mx-auto mt-4 max-w-[460px] text-[15px] leading-relaxed text-muted">
                  {subtext}
                </p>
              )}
            </div>
          )}
          <div className="grid grid-cols-2 grid-rows-3 gap-3.5 md:grid-cols-[1.3fr_1fr_1fr] md:grid-rows-2">
            {photosBeforeCounter.map((url, i) => (
              <div key={i} className={i === 0 ? photoStyleBig : photoStyleSmall}>
                <ImageSlot alt="Community event" placeholder="community event" src={url} />
              </div>
            ))}
            <div className="bg-accent-panel border-bronze relative flex h-[150px] items-center justify-center overflow-hidden rounded-[18px] border">
              <div className="px-4 text-center">
                <div className="flex justify-center">
                  <div className="border-navy h-[26px] w-[26px] rounded-full border-2 bg-neutral-700" />
                  <div className="border-navy -ml-2.5 h-[26px] w-[26px] rounded-full border-2 bg-neutral-600" />
                  <div className="border-navy -ml-2.5 h-[26px] w-[26px] rounded-full border-2 bg-neutral-500" />
                </div>
                <span className="font-display mt-2 block text-2xl text-white">
                  {memberCountText}
                </span>
                <span className="block text-xs font-semibold tracking-wide text-gold-light">
                  {memberCountLabel}
                </span>
              </div>
            </div>
            {photosAfterCounter.map((url, i) => (
              <div key={i} className={photoStyleSmall}>
                <ImageSlot alt="Community event" placeholder="community event" src={url} />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
        {starsHeading && (
          <h2 className="font-display mb-3 text-center text-[26px] text-white uppercase md:text-[32px]">
            {starsHeading}
          </h2>
        )}
        {starsSubtext && (
          <p className="mx-auto mb-10 max-w-[560px] text-center text-[15px] text-caption">
            {starsSubtext}
          </p>
        )}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1.2fr_1fr]">
          {videoUrls.map((url, i) => (
            <div key={i} className={i % 2 === 0 ? videoStyleBig : videoStyleSmall}>
              <PlayableVideo src={url} placeholder="video: community moment" buttonSize={56} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
