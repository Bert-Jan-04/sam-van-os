import NextImage from 'next/image'

type ImageSlotProps = {
  src?: string
  alt: string
  placeholder: string
  priority?: boolean
}

export function ImageSlot({ src, alt, placeholder, priority }: ImageSlotProps) {
  if (!src) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 p-4 text-center text-xs text-caption">
        {placeholder}
      </div>
    )
  }

  return (
    <NextImage
      src={src}
      alt={alt}
      fill
      sizes="100vw"
      priority={priority}
      draggable={false}
      className="object-cover select-none"
    />
  )
}
