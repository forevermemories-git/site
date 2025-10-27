'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function GlassCard({ children, className, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className={cn(
        'relative group',
        'bg-white/10 backdrop-blur-xl',
        'border border-white/20',
        'rounded-2xl p-8',
        'shadow-[0_8px_32px_rgba(212,175,55,0.1)]',
        'hover:shadow-[0_16px_48px_rgba(212,175,55,0.2)]',
        'hover:border-primary-gold/30',
        'transition-all duration-500',
        'overflow-hidden',
        className
      )}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-gold to-primary-rose-gold opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10" />

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
