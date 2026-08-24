import React from 'react'

import type { Page } from '@/payload-types'
import { blockComponents } from '@/blocks/components'

type PageLayout = NonNullable<Page['layout']>

type BlockRendererProps = {
  blocks: PageLayout
}

export const BlockRenderer: React.FC<BlockRendererProps> = ({ blocks }) => {
  if (!blocks || blocks.length === 0) return null

  return (
    <>
      {blocks.map((block, index) => {
        const Component = blockComponents[block.blockType]

        if (!Component) {
          if (process.env.NODE_ENV === 'development') {
            console.warn(
              `BlockRenderer: no component registered for block type "${block.blockType}"`,
            )
          }
          return null
        }

        return <Component key={block.id ?? index} {...block} />
      })}
    </>
  )
}
