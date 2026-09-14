import type { Sam } from '@/payload-types'

type StoryQuoteProps = NonNullable<Sam['quote']>

export function StoryQuote({ text, attribution }: StoryQuoteProps) {
  if (!text) return null

  return (
    <div className="mx-auto max-w-[720px] px-6 pb-16 md:px-0">
      <blockquote className="border-gold border-l-2 pl-6">
        <p className="font-display text-[22px] leading-[1.3] text-white md:text-[26px]">{text}</p>
        {attribution && <cite className="mt-4 block text-sm text-caption not-italic">{attribution}</cite>}
      </blockquote>
    </div>
  )
}
