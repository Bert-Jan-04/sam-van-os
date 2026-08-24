import type React from 'react'

import { TextBlockComponent } from './Text/Component'
import { HeadingBlockComponent } from './Heading/Component'
import { ImageBlockComponent } from './Image/Component'
import { HeaderBlockComponent } from './Header/Component'
import { TextImageBlockComponent } from './TextImage/Component'
import { ReviewsBlockComponent } from './Reviews/Component'
import { ResultsBlockComponent } from './Results/Component'
import { VideoBlockComponent } from './Video/Component'
import { FaqBlockComponent } from './Faq/Component'
import { CardsBlockComponent } from './Cards/Component'

/**
 * Maps a block's `slug` to the React component that renders it on the frontend.
 * Keeps BlockRenderer generic — it never needs to change when a new block is added.
 *
 * Kept separate from `./index.ts` (which also pulls in the block *configs*) so that
 * client components like `BlockRenderer` don't drag Payload's server-only code into
 * the client bundle.
 */
export const blockComponents: Record<string, React.ComponentType<any>> = {
  header: HeaderBlockComponent,
  text: TextBlockComponent,
  heading: HeadingBlockComponent,
  image: ImageBlockComponent,
  textImage: TextImageBlockComponent,
  reviews: ReviewsBlockComponent,
  results: ResultsBlockComponent,
  video: VideoBlockComponent,
  faq: FaqBlockComponent,
  cards: CardsBlockComponent,
}
