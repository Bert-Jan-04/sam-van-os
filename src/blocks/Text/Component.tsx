import React from 'react'
import { RichText } from '@payloadcms/richtext-lexical/react'

import type { TextBlock as TextBlockProps } from '@/payload-types'

export const TextBlockComponent: React.FC<TextBlockProps> = ({ content }) => {
  if (!content) return null

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <RichText
        data={content}
        className="text-[15.5px] leading-relaxed text-muted [&_a]:text-gold-light [&_a]:underline [&_strong]:font-semibold [&_strong]:text-white [&_p+p]:mt-4"
      />
    </div>
  )
}
