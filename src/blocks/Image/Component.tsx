import React from 'react'
import NextImage from 'next/image'

import type { ImageBlock as ImageBlockProps } from '@/payload-types'

const alignmentClasses: Record<string, string> = {
  left: 'items-start',
  center: 'items-center',
  right: 'items-end',
}

export const ImageBlockComponent: React.FC<ImageBlockProps> = ({
  image,
  altText,
  caption,
  alignment,
}) => {
  if (!image || typeof image === 'number') return null

  const width = image.width ?? 1200
  const height = image.height ?? 800

  return (
    <figure
      className={`mx-auto flex max-w-3xl flex-col px-4 py-8 ${alignmentClasses[alignment || 'center']}`}
    >
      <NextImage
        src={image.url || ''}
        alt={altText || image.alt || ''}
        width={width}
        height={height}
        className="h-auto w-full rounded-md"
      />
      {caption && <figcaption className="mt-2 text-sm text-caption">{caption}</figcaption>}
    </figure>
  )
}
