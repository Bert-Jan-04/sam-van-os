'use client'

import { useRef } from 'react'
import type { PointerEvent } from 'react'

/**
 * Lets a horizontally-scrollable element be dragged with the mouse on desktop.
 * Touch is left entirely to native scrolling (see the `touch-pan-x` class on
 * consumers) — hijacking it with pointer events fights the browser's own
 * gesture handling and is what made swiping feel broken on mobile.
 * Uses pointer capture so the drag keeps tracking even if the pointer leaves the element.
 */
export function useDragScroll<T extends HTMLElement>(onDragEnd?: (el: T) => void) {
  const ref = useRef<T>(null)
  const drag = useRef<{ pointerId: number; startX: number; startScroll: number } | null>(null)

  const onPointerDown = (e: PointerEvent<T>) => {
    if (e.pointerType !== 'mouse') return
    const el = ref.current
    if (!el) return
    el.setPointerCapture(e.pointerId)
    drag.current = { pointerId: e.pointerId, startX: e.clientX, startScroll: el.scrollLeft }
  }

  const onPointerMove = (e: PointerEvent<T>) => {
    const el = ref.current
    if (!el || !drag.current || e.pointerId !== drag.current.pointerId) return
    el.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX)
  }

  const endDrag = (e: PointerEvent<T>) => {
    const el = ref.current
    if (!el || !drag.current || e.pointerId !== drag.current.pointerId) return
    try {
      el.releasePointerCapture(drag.current.pointerId)
    } catch {
      // pointer capture may already be released by the browser
    }
    drag.current = null
    onDragEnd?.(el)
  }

  return {
    ref,
    onPointerDown,
    onPointerMove,
    onPointerUp: endDrag,
    onPointerCancel: endDrag,
  }
}
