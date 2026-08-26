import { getMediaPath } from '@/lib/getMediaUrl'
import type { Home } from '@/payload-types'

import { ImageSlot } from '@/components/shared/ImageSlot'
import { StoryCarousel } from './StoryCarousel'

type StoriesSectionProps = NonNullable<Home['stories']>

export function StoriesSection({ heading, subtext, items = [] }: StoriesSectionProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="mx-auto max-w-[1200px] px-6 pt-[72px] pb-0 md:px-20">
      {heading && (
        <h2 className="font-display mb-3 text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      {subtext && <p className="mb-11 text-center text-[15px] text-caption">{subtext}</p>}
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {items.map((story, index) => {
          const photos = story.photos ?? []
          return (
            <div
              key={story.id ?? index}
              className="border-navy-border flex flex-col overflow-hidden rounded-[20px] border"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                {photos.length > 1 ? (
                  <StoryCarousel
                    images={photos.map((photo, photoIndex) => ({
                      alt: `${story.title}, foto ${photoIndex + 1}`,
                      placeholder: `foto ${photoIndex + 1} van ${photos.length}`,
                      src: getMediaPath(photo.image),
                    }))}
                  />
                ) : (
                  <ImageSlot
                    alt={story.title}
                    placeholder="foto"
                    src={getMediaPath(photos[0]?.image)}
                  />
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2.5 px-[26px] py-7">
                <span className="text-[12px] font-bold tracking-wide text-gold-light uppercase">
                  {story.eyebrowLabel}
                </span>
                <h3 className="text-[19px] font-bold text-white">{story.title}</h3>
                <p className="text-[14.5px] leading-relaxed text-muted">{story.text}</p>
                <span className="mt-auto text-[13px] font-semibold text-caption">
                  {story.name}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
