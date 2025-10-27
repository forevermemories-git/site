'use client'

import { motion } from 'framer-motion'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  fullScreen?: boolean
}

export default function Loading({ size = 'md', text, fullScreen = false }: LoadingProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const dotSizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  }

  const LoadingSpinner = () => (
    <div className="flex items-center justify-center gap-2">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className={`${dotSizes[size]} rounded-full bg-primary`}
          animate={{
            y: [0, -10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.15,
            ease: 'easeInOut'
          }}
        />
      ))}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-[500] bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center">
        <LoadingSpinner />
        {text && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-gray-600 font-medium"
          >
            {text}
          </motion.p>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <LoadingSpinner />
      {text && (
        <p className="mt-4 text-gray-600 font-medium text-sm">{text}</p>
      )}
    </div>
  )
}

// Skeleton loading pour cards
export function SkeletonCard() {
  return (
    <div className="bg-gray-100 rounded-2xl p-6 animate-pulse">
      <div className="w-12 h-12 bg-gray-200 rounded-full mb-4" />
      <div className="h-6 bg-gray-200 rounded mb-3 w-3/4" />
      <div className="h-4 bg-gray-200 rounded mb-2" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
    </div>
  )
}

// Skeleton loading pour texte
export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gray-200 rounded"
          style={{ width: i === lines - 1 ? '70%' : '100%' }}
        />
      ))}
    </div>
  )
}
