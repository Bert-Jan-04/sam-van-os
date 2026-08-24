import React from 'react'

import type { FaqBlock as FaqBlockProps } from '@/payload-types'
import { FaqSection } from '@/components/shared/FaqSection'

export const FaqBlockComponent: React.FC<FaqBlockProps> = ({ heading, subtext, items }) => {
  return <FaqSection heading={heading} subtext={subtext} items={items} />
}
