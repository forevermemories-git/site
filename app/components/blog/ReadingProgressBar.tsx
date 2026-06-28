'use client'

import { useEffect, useState } from 'react'

export default function ReadingProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (scrollPx / winHeightPx) * 100

      setScrollProgress(scrolled)
    }

    window.addEventListener('scroll', updateScrollProgress)
    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div className="fixed left-0 right-0 top-0 z-[101] h-1 bg-[#F1E5EE]">
      <div
        className="h-full transition-all duration-150"
        style={{ width: `${scrollProgress}%`, background: 'var(--fm-grad)' }}
      />
    </div>
  )
}
