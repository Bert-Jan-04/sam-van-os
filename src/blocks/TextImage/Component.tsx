import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

import { getMediaPath } from '@/lib/getMediaUrl'
import type { TextImageBlock as TextImageBlockProps } from '@/payload-types'
import { ImageSlot } from '@/components/shared/ImageSlot'

export const TextImageBlockComponent: React.FC<TextImageBlockProps> = ({
  eyebrow,
  heading,
  content,
  image,
  imagePosition,
}) => {
  const reversed = imagePosition === 'left'

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-20 md:py-16">
      <div className="grid grid-cols-1 items-center gap-9 md:grid-cols-2 md:gap-16">
        <div
          className={`relative order-2 aspect-[4/5] overflow-hidden rounded-2xl ${
            reversed ? 'md:order-1' : 'md:order-2'
          }`}
        >
          <ImageSlot alt={heading ?? ''} placeholder="foto" src={getMediaPath(image)} />
        </div>

        <div className={`order-1 ${reversed ? 'md:order-2' : 'md:order-1'}`}>
          {eyebrow && (
            <div className="mb-3.5 flex items-center gap-3">
              <span className="bg-gold block h-0.5 w-7" />
              <span className="text-[12px] font-bold tracking-[0.16em] text-gold-light uppercase">
                {eyebrow}
              </span>
            </div>
          )}
          {heading && (
            <h2 className="font-display mb-5 text-[28px] leading-[1.05] text-white uppercase md:text-[34px]">
              {heading}
            </h2>
          )}
          {content && (
            <RichText
              data={content}
              className="text-[15.5px] leading-relaxed text-muted [&_a]:text-gold-light [&_a]:underline [&_strong]:font-semibold [&_strong]:text-white [&_p+p]:mt-4"
            />
          )}
        </div>
      </div>
    </div>
  )
}
