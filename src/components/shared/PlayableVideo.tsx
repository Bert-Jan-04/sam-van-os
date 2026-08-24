'use client'

import { useRef, useState } from 'react'

type PlayableVideoProps = {
  src?: string
  placeholder: string
  buttonSize?: number
}

export function PlayableVideo({ src, placeholder, buttonSize = 68 }: PlayableVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  if (!src) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 p-4 text-center text-xs text-caption">
        {placeholder}
      </div>
    )
  }

  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        src={src}
        preload="metadata"
        playsInline
        loop
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onClick={toggle}
        className="absolute inset-0 h-full w-full cursor-pointer object-cover"
      />
      {!playing && (
        <div
          onClick={toggle}
          className="absolute inset-0 flex cursor-pointer items-center justify-center"
        >
          <div
            className="flex items-center justify-center rounded-full bg-white/90"
            style={{ width: buttonSize, height: buttonSize }}
          >
            <div className="ml-1 border-y-[13px] border-l-[20px] border-y-transparent border-l-neutral-950" />
          </div>
        </div>
      )}
    </>
  )
}
