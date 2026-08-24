import React from 'react'

import type { HeadingBlock as HeadingBlockProps } from '@/payload-types'

const alignmentClasses: Record<string, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
}

export const HeadingBlockComponent: React.FC<HeadingBlockProps> = ({
  heading,
  level,
  alignment,
}) => {
  const Tag = (level || 'h2') as keyof React.JSX.IntrinsicElements

  return (
    <div className="mx-auto max-w-3xl px-4 py-6">
      <Tag className={`font-semibold text-white ${alignmentClasses[alignment || 'left']}`}>
        {heading}
      </Tag>
    </div>
  )
}
