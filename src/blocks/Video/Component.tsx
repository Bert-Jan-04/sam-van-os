import React from 'react'

import { getMediaPath } from '@/lib/getMediaUrl'
import type { VideoBlock as VideoBlockProps } from '@/payload-types'
import { PlayableVideo } from '@/components/shared/PlayableVideo'

export const VideoBlockComponent: React.FC<VideoBlockProps> = ({
  heading,
  video,
  caption,
  aspectRatio,
}) => {
  return (
    <div className="mx-auto max-w-[800px] px-6 py-14 md:px-20 md:py-16">
      {heading && (
        <h2 className="font-display mb-8 text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      <div
        className="relative mx-auto overflow-hidden rounded-2xl bg-black"
        style={{ aspectRatio: aspectRatio || '16/9' }}
      >
        <PlayableVideo src={getMediaPath(video)} placeholder="video" buttonSize={68} />
      </div>
      {caption && <p className="mt-3 text-center text-sm text-caption">{caption}</p>}
    </div>
  )
}
