'use client'

import { useState } from 'react'

import { useDragScroll } from '@/lib/useDragScroll'

import { ImageSlot } from '@/components/shared/ImageSlot'

type StoryCarouselProps = {
  images: { src?: string; alt: string; placeholder: string }[]
}

export function StoryCarousel({ images }: StoryCarouselProps) {
  const [index, setIndex] = useState(0)

  const snapTo = (el: HTMLDivElement, i: number) => {
    const clamped = Math.max(0, Math.min(images.length - 1, i))
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' })
    setIndex(clamped)
  }

  const {
    ref: trackRef,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
  } = useDragScroll<HTMLDivElement>((el) => snapTo(el, Math.round(el.scrollLeft / el.clientWidth)))

  const goTo = (i: number) => {
    const el = trackRef.current
    if (el) snapTo(el, i)
  }

  const handleScroll = () => {
    const el = trackRef.current
    if (!el) return
    const i = Math.round(el.scrollLeft / el.clientWidth)
    if (i !== index) setIndex(i)
  }

  return (
    <div className="absolute inset-0">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
        className="flex h-full w-full touch-pan-x snap-x snap-mandatory overflow-x-auto overflow-y-hidden select-none [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ cursor: 'grab' }}
      >
        {images.map((image, i) => (
          <div key={i} className="relative h-full w-full flex-none snap-center">
            <ImageSlot src={image.src} alt={image.alt} placeholder={image.placeholder} />
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute top-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white">
        {index + 1}/{images.length}
      </div>
      <div className="pointer-events-none absolute right-0 bottom-3 left-0 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <div
            key={i}
            className="h-[5px] rounded-full transition-all"
            style={{
              width: i === index ? 14 : 5,
              background: i === index ? '#fff' : 'rgba(255,255,255,0.45)',
            }}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={() => goTo(index - 1)}
        aria-label="Vorige foto"
        className="absolute top-1/2 left-2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-base text-white hover:bg-black/75"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => goTo(index + 1)}
        aria-label="Volgende foto"
        className="absolute top-1/2 right-2 flex h-[34px] w-[34px] -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-base text-white hover:bg-black/75"
      >
        ›
      </button>
    </div>
  )
}
