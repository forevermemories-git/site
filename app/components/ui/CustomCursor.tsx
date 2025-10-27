'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState('')

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
    }

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true)
        const text = target.getAttribute('data-cursor-text')
        if (text) setCursorText(text)
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setCursorText('')
    }

    window.addEventListener('mousemove', moveCursor)

    // Add hover listeners to all interactive elements
    const interactiveElements = document.querySelectorAll('button, a')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnter as EventListener)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter as EventListener)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-primary-gold"
          animate={{
            scale: isHovering ? 1.5 : 1,
            opacity: isHovering ? 0.8 : 1,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Cursor text */}
      {cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
        >
          <div className="bg-primary-gold text-white px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transform translate-y-12">
            {cursorText}
          </div>
        </motion.div>
      )}

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9998] mix-blend-screen hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-full h-full rounded-full bg-gradient-to-r from-primary-gold to-primary-rose-gold opacity-20 blur-xl"
          animate={{
            scale: isHovering ? 2 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </>
  )
}
