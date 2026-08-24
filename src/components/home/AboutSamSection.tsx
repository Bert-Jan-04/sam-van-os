import { getMediaPath } from '@/lib/getMediaUrl'
import type { Homepage } from '@/payload-types'

import { ImageSlot } from '@/components/shared/ImageSlot'
import { PlayableVideo } from '@/components/shared/PlayableVideo'

type AboutSamSectionProps = NonNullable<Homepage['aboutSam']>

export function AboutSamSection({
  heading,
  paragraph1,
  paragraph2,
  closingLine,
  horizontalImage,
  image1,
  image2,
  bottomImage,
}: AboutSamSectionProps) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      {heading && (
        <h2 className="font-display mb-10 text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:items-stretch md:gap-14">
        <div>
          <div className="relative mb-6 aspect-[3/2] w-full overflow-hidden rounded-2xl">
            <ImageSlot
              alt="Sam, horizontaal"
              placeholder="foto: Sam, horizontaal"
              src={getMediaPath(horizontalImage)}
            />
          </div>
          {paragraph1 && (
            <p className="mb-5 text-base leading-relaxed text-muted">{paragraph1}</p>
          )}
          {paragraph2 && (
            <p className="mb-5 text-base leading-relaxed text-muted">{paragraph2}</p>
          )}
          {closingLine && (
            <p className="text-base leading-relaxed font-semibold text-white">{closingLine}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-3.5 md:h-full md:grid-rows-[1fr_1.3fr]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl md:aspect-auto">
            <ImageSlot alt="Sam" placeholder="foto: Sam" src={getMediaPath(image1)} />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl md:aspect-auto">
            <ImageSlot alt="Sam" placeholder="foto: Sam" src={getMediaPath(image2)} />
          </div>
          <div className="relative col-span-2 aspect-video overflow-hidden rounded-2xl md:aspect-auto">
            <PlayableVideo placeholder="video: Sam" src={getMediaPath(bottomImage)} />
          </div>
        </div>
      </div>
    </div>
  )
}
