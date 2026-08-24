import React from 'react'

import type { ResultsBlock as ResultsBlockProps } from '@/payload-types'
import { StatsBar } from '@/components/shared/StatsBar'

export const ResultsBlockComponent: React.FC<ResultsBlockProps> = ({
  heading,
  columns,
  stats = [],
}) => {
  if (!stats || stats.length === 0) return null

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-20 md:py-16">
      {heading && (
        <h2 className="font-display mb-10 text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      <StatsBar stats={stats} columns={columns === '4' ? 4 : 3} />
    </div>
  )
}
