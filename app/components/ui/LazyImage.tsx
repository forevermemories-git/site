'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface LazyImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

export default function LazyImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  objectFit = 'cover'
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!imgRef.current || priority) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '50px'
      }
    )

    observer.observe(imgRef.current)

    return () => observer.disconnect()
  }, [priority])

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}

      {/* Image */}
      {(isInView || priority) && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="relative w-full h-full"
        >
          <Image
            src={src}
            alt={alt}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            fill={fill}
            className={fill ? `object-${objectFit}` : ''}
            onLoad={() => setIsLoaded(true)}
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
          />
        </motion.div>
      )}
    </div>
  )
}

// Lazy video component
interface LazyVideoProps {
  src: string
  poster?: string
  className?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  playsInline?: boolean
}

export function LazyVideo({
  src,
  poster,
  className = '',
  autoPlay = false,
  loop = false,
  muted = true,
  controls = false,
  playsInline = true
}: LazyVideoProps) {
  const [isInView, setIsInView] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!videoRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (autoPlay && videoRef.current) {
            videoRef.current.play().catch(error => {
              // Ignorer les erreurs de lecture automatique
              if (error.name !== 'AbortError' && error.name !== 'NotAllowedError') {
                console.warn('Erreur de lecture vidéo:', error)
              }
            })
          }
        } else {
          if (videoRef.current) {
            videoRef.current.pause()
          }
        }
      },
      {
        rootMargin: '50px'
      }
    )

    observer.observe(videoRef.current)

    return () => observer.disconnect()
  }, [autoPlay])

  return (
    <video
      ref={videoRef}
      className={className}
      poster={poster}
      loop={loop}
      muted={muted}
      controls={controls}
      playsInline={playsInline}
      preload={isInView ? 'auto' : 'none'}
    >
      {isInView && <source src={src} type="video/mp4" />}
    </video>
  )
}
