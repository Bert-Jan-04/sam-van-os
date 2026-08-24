import { getMediaPath } from '@/lib/getMediaUrl'
import { ImageSlot } from '@/components/shared/ImageSlot'
import type { Media } from '@/payload-types'

type StoryBlockProps = {
  eyebrowLabel?: string | null
  name?: string | null
  whereStarted?: string | null
  whatChanged?: string | null
  whereNow?: string | null
  resultText?: string | null
  duration?: string | null
  coachName?: string | null
  mainImage?: Media | number | null
  secondaryImage?: Media | number | null
  tertiaryImage?: Media | number | null
  reversed?: boolean | null
}

export function StoryBlock({
  eyebrowLabel,
  name,
  whereStarted,
  whatChanged,
  whereNow,
  resultText,
  duration,
  coachName,
  mainImage,
  secondaryImage,
  tertiaryImage,
  reversed,
}: StoryBlockProps) {
  return (
    <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-2 md:gap-14">
      <div className={`order-2 grid grid-cols-2 gap-3.5 ${reversed ? 'md:order-2' : 'md:order-1'}`}>
        <div className="relative col-span-2 aspect-[3/4] overflow-hidden rounded-2xl">
          <ImageSlot alt={name ?? ''} placeholder={`foto: ${name ?? ''}`} src={getMediaPath(mainImage)} />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <ImageSlot
            alt={name ?? ''}
            placeholder={`foto: ${name ?? ''}, training`}
            src={getMediaPath(secondaryImage)}
          />
        </div>
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <ImageSlot
            alt={name ?? ''}
            placeholder={`foto: ${name ?? ''}, dagelijks leven`}
            src={getMediaPath(tertiaryImage)}
          />
        </div>
      </div>

      <div className={`order-1 pt-2 ${reversed ? 'md:order-1' : 'md:order-2'}`}>
        {eyebrowLabel && (
          <span className="mb-3.5 block text-[12px] font-bold tracking-[0.16em] text-gold-light uppercase">
            {eyebrowLabel}
          </span>
        )}
        <h3 className="font-display mb-5 text-[32px] leading-[1.05] text-white uppercase md:text-[38px]">
          {name}
        </h3>
        <div className="mb-[26px] flex flex-col gap-5">
          {whereStarted && (
            <div>
              <span className="mb-2 block text-[11px] font-bold tracking-[0.12em] text-caption uppercase">
                Waar ze begon
              </span>
              <p className="text-[15.5px] leading-relaxed text-muted">{whereStarted}</p>
            </div>
          )}
          {whatChanged && (
            <div>
              <span className="mb-2 block text-[11px] font-bold tracking-[0.12em] text-caption uppercase">
                Wat er veranderde
              </span>
              <p className="text-[15.5px] leading-relaxed text-muted">{whatChanged}</p>
            </div>
          )}
          {whereNow && (
            <div>
              <span className="mb-2 block text-[11px] font-bold tracking-[0.12em] text-caption uppercase">
                Waar ze nu staat
              </span>
              <p className="text-[15.5px] leading-relaxed text-muted">{whereNow}</p>
            </div>
          )}
        </div>
        {(resultText || duration || coachName) && (
          <div className="border-navy-border flex flex-col gap-2.5 border-t pt-5">
            {resultText && (
              <div className="flex gap-3">
                <span className="w-[120px] shrink-0 text-[13px] text-caption">Resultaat</span>
                <span className="text-sm text-white">{resultText}</span>
              </div>
            )}
            {duration && (
              <div className="flex gap-3">
                <span className="w-[120px] shrink-0 text-[13px] text-caption">Duur</span>
                <span className="text-sm text-white">{duration}</span>
              </div>
            )}
            {coachName && (
              <div className="flex gap-3">
                <span className="w-[120px] shrink-0 text-[13px] text-caption">Coach</span>
                <span className="text-sm text-white">{coachName}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
