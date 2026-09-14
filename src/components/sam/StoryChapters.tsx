import type { Sam } from '@/payload-types'

type StoryChaptersProps = {
  chapters: NonNullable<Sam['chapters']>
}

export function StoryChapters({ chapters }: StoryChaptersProps) {
  return (
    <div className="mx-auto max-w-[720px] px-6 pt-4 pb-16 md:px-0">
      <div className="flex flex-col gap-11">
        {chapters.map((chapter, index) => (
          <div key={chapter.id ?? index}>
            <h2 className="font-display mb-3.5 text-[24px] leading-[1.1] text-white uppercase md:text-[28px]">
              {chapter.heading}
            </h2>
            <p className="text-base leading-relaxed whitespace-pre-line text-muted">{chapter.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
