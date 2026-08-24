'use client'

import { useRef } from 'react'
import type { PointerEvent } from 'react'

/**
 * Lets a horizontally-scrollable element be dragged with mouse/pointer, not just touch.
 * Uses pointer capture so the drag keeps tracking even if the pointer leaves the element.
 */
export function useDragScroll<T extends HTMLElement>(onDragEnd?: (el: T) => void) {
  const ref = useRef<T>(null)
  const drag = useRef<{ pointerId: number; startX: number; startScroll: number } | null>(null)

  const onPointerDown = (e: PointerEvent<T>) => {
    const el = ref.current
    if (!el) return
    el.setPointerCapture(e.pointerId)
    drag.current = { pointerId: e.pointerId, startX: e.clientX, startScroll: el.scrollLeft }
  }

  const onPointerMove = (e: PointerEvent<T>) => {
    const el = ref.current
    if (!el || !drag.current) return
    el.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX)
  }

  const endDrag = () => {
    const el = ref.current
    if (!el || !drag.current) return
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
