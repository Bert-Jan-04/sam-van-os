type WordmarkProps = {
  className?: string
}

export function Wordmark({ className = 'text-[20px]' }: WordmarkProps) {
  return (
    <span className={`inline-flex flex-col items-center font-sans ${className}`}>
      <span
        aria-label="Rebuild"
        className="inline-flex items-center leading-none font-semibold tracking-[var(--wordmark-letter-spacing)]"
      >
        <span className="text-ivory">RE</span>
        <span aria-hidden className="bg-gold mx-[0.45em] h-[1.35em] w-px" />
        <span className="from-gold-light to-gold bg-linear-to-b bg-clip-text text-transparent">
          BUILD
        </span>
      </span>
      <span className="mt-[0.55em] text-[0.4em] leading-none font-medium tracking-[0.3em] whitespace-nowrap text-muted uppercase">
        Stronger. From the inside out.
      </span>
    </span>
  )
}
