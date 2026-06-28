'use client'

import { useEffect } from 'react'

/**
 * SINGLE IntersectionObserver that drives every home video.
 * Plays a clip while it is in view, pauses it otherwise.
 * Under prefers-reduced-motion no clip ever autoplays (posters stay visible).
 * Renders nothing.
 */
export default function MediaController() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || !('IntersectionObserver' in window)) return

    const vids = Array.from(
      document.querySelectorAll<HTMLVideoElement>('.fm-home video[data-fm-vid]')
    )
    if (vids.length === 0) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target as HTMLVideoElement
          if (entry.isIntersecting) {
            const p = v.play()
            if (p && typeof p.catch === 'function') p.catch(() => {})
          } else if (!v.paused) {
            v.pause()
          }
        })
      },
      { threshold: 0.25 }
    )

    vids.forEach((v) => io.observe(v))
    return () => io.disconnect()
  }, [])

  return null
}
