import { formatIndex } from '@/utilities/formatIndex'

type FaqItem = {
  id?: string | null
  question?: string | null
  answer?: string | null
}

type FaqSectionProps = {
  heading?: string | null
  subtext?: string | null
  items?: FaqItem[] | null
}

export function FaqSection({ heading, subtext, items = [] }: FaqSectionProps) {
  if (!items || items.length === 0) return null

  return (
    <div className="mx-auto max-w-[1000px] px-6 py-4 pb-20 md:px-20 md:pb-24">
      {heading && (
        <h2 className="font-display mb-3 text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      {subtext && <p className="mb-10 text-center text-[15px] text-caption">{subtext}</p>}
      <div className="border-navy-border border-t">
        {items.map((faq, index) => (
          <details key={faq.id ?? index} className="border-navy-border border-b">
            <summary className="flex cursor-pointer list-none items-start gap-4 py-6 text-[17px] font-semibold text-white [&::-webkit-details-marker]:hidden">
              <span className="flex-none pt-0.5 text-[13px] font-bold text-gold-light">
                {formatIndex(index)}
              </span>
              <span className="flex-1">{faq.question}</span>
            </summary>
            <p className="mb-6 max-w-[760px] pl-[37px] text-[15px] leading-relaxed text-muted">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </div>
  )
}
