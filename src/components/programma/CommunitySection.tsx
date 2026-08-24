import { getMediaPath } from '@/lib/getMediaUrl'
import type { Programma } from '@/payload-types'
import { ImageSlot } from '@/components/shared/ImageSlot'

type CommunitySectionProps = NonNullable<Programma['community']>

export function CommunitySection({ heading, text, photos = [], tags = [] }: CommunitySectionProps) {
  return (
    <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-20 md:pb-24">
      {heading && (
        <h2 className="font-display mb-4 text-[28px] leading-[1.05] text-white uppercase md:text-[34px]">
          {heading}
        </h2>
      )}
      {text && (
        <p className="mb-9 max-w-[620px] text-base leading-relaxed text-muted">{text}</p>
      )}

      {photos && photos.length > 0 && (
        <div className="mb-8 grid auto-rows-[160px] grid-cols-2 gap-3.5 md:auto-rows-[220px] md:grid-cols-[2fr_1fr_1fr]">
          {photos.map((photo, index) => (
            <div
              key={photo.id ?? index}
              className={`relative overflow-hidden rounded-2xl ${index === 0 ? 'row-span-2' : ''}`}
            >
              <ImageSlot alt="Foto: community" placeholder="foto: community" src={getMediaPath(photo.image)} />
            </div>
          ))}
        </div>
      )}

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2.5">
          {tags.map((tag, index) => (
            <span
              key={tag.id ?? index}
              className="border-navy-border rounded-full border bg-navy-card px-[18px] py-2.5 text-[14.5px] font-semibold text-white"
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
