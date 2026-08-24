import type { Block } from 'payload'

import { TextBlock } from './Text/config'
import { HeadingBlock } from './Heading/config'
import { ImageBlock } from './Image/config'
import { HeaderBlock } from './Header/config'
import { TextImageBlock } from './TextImage/config'
import { ReviewsBlock } from './Reviews/config'
import { ResultsBlock } from './Results/config'
import { VideoBlock } from './Video/config'
import { FaqBlock } from './Faq/config'
import { CardsBlock } from './Cards/config'

/**
 * Every Payload block used by the Pages `layout` field.
 * Add a new block here (and to `blockComponents` in `./components.ts`) to make it
 * available in the page builder.
 */
export const blocks: Block[] = [
  HeaderBlock,
  TextBlock,
  HeadingBlock,
  ImageBlock,
  TextImageBlock,
  ReviewsBlock,
  ResultsBlock,
  VideoBlock,
  FaqBlock,
  CardsBlock,
]
