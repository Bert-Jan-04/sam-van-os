import { getMediaPath } from '@/lib/getMediaUrl'
import { ImageSlot } from '@/components/shared/ImageSlot'
import { PlayableVideo } from '@/components/shared/PlayableVideo'
import type { Media } from '@/payload-types'

type ProfileBlockProps = {
  eyebrow?: string | null
  name?: string | null
  paragraph1?: string | null
  paragraph2?: string | null
  specialisme?: string | null
  ervaring?: string | null
  instagramHandle?: string | null
  mainImage?: Media | number | null
  secondaryImage?: Media | number | null
  video?: Media | number | null
  reversed?: boolean | null
}

export function ProfileBlock({
  eyebrow,
  name,
  paragraph1,
  paragraph2,
  specialisme,
  ervaring,
  instagramHandle,
  mainImage,
  secondaryImage,
  video,
  reversed,
}: ProfileBlockProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-2 md:gap-14">
      <div
        className={`relative order-2 aspect-[3/4] overflow-hidden rounded-2xl ${reversed ? 'md:order-2' : 'md:order-1'}`}
      >
        <ImageSlot alt={name ?? ''} placeholder={`foto: ${name ?? ''}`} src={getMediaPath(mainImage)} />
      </div>

      <div className={`order-1 pt-2 ${reversed ? 'md:order-1' : 'md:order-2'}`}>
        {eyebrow && (
          <span className="mb-3.5 block text-[12px] font-bold tracking-[0.16em] text-gold-light uppercase">
            {eyebrow}
          </span>
        )}
        <h3 className="font-display mb-5 text-[36px] leading-[1.05] text-white uppercase md:text-[40px]">
          {name}
        </h3>
        {paragraph1 && (
          <p className="mb-[18px] text-base leading-relaxed text-muted">{paragraph1}</p>
        )}
        {paragraph2 && (
          <p className="mb-6 text-base leading-relaxed text-muted">{paragraph2}</p>
        )}
        {(specialisme || ervaring || instagramHandle) && (
          <div className="border-navy-border flex flex-col gap-2.5 border-t pt-5">
            {specialisme && (
              <div className="flex gap-3">
                <span className="w-[110px] shrink-0 text-[13px] text-caption">Specialisme</span>
                <span className="text-sm text-white">{specialisme}</span>
              </div>
            )}
            {ervaring && (
              <div className="flex gap-3">
                <span className="w-[110px] shrink-0 text-[13px] text-caption">Ervaring</span>
                <span className="text-sm text-white">{ervaring}</span>
              </div>
            )}
            {instagramHandle && (
              <div className="flex gap-3">
                <span className="w-[110px] shrink-0 text-[13px] text-caption">Instagram</span>
                <span className="text-sm">{instagramHandle}</span>
              </div>
            )}
          </div>
        )}
        <div className="mt-6 grid grid-cols-2 gap-3.5">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <ImageSlot
              alt={name ?? ''}
              placeholder={`foto: ${name ?? ''}, aan het werk`}
              src={getMediaPath(secondaryImage)}
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <PlayableVideo src={getMediaPath(video)} placeholder={`video: ${name ?? ''}`} buttonSize={44} />
          </div>
        </div>
      </div>
    </div>
  )
}
