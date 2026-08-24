import React from 'react'

import type { CardsBlock as CardsBlockProps } from '@/payload-types'

export const CardsBlockComponent: React.FC<CardsBlockProps> = ({ heading, columns, items = [] }) => {
  if (!items || items.length === 0) return null

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-20 md:py-16">
      {heading && (
        <h2 className="font-display mb-11 text-center text-[26px] text-white uppercase md:text-[32px]">
          {heading}
        </h2>
      )}
      <div
        className={`grid grid-cols-1 gap-[18px] sm:grid-cols-2 ${
          columns === '2' ? '' : 'md:grid-cols-3'
        }`}
      >
        {items.map((item, index) => (
          <div key={item.id ?? index} className="border-navy-border rounded-2xl border px-[26px] py-7">
            <h3 className="mb-2.5 text-[17px] font-bold text-white">{item.title}</h3>
            <p className="text-[14.5px] leading-relaxed text-caption">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
