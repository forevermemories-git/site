'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const videos = [
    '/videos/video-al-groupe.webm',
    '/videos/video-chezrose-girls.webm',
    '/videos/video-corcorans-groupe.webm',
    '/videos/video-mamakutty-groupe.webm',
    '/videos/video-mp-groupe.webm',
    '/videos/video-sambavam-groupe.webm',
  ]

  // Détecter le scroll pour mettre à jour l'indicateur actif
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeftValue = container.scrollLeft
      const cardWidth = container.offsetWidth
      const newIndex = Math.round(scrollLeftValue / cardWidth)
      setCurrentVideo(newIndex)
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  // Drag to scroll à la souris
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      startX.current = e.pageX - container.offsetLeft
      scrollLeft.current = container.scrollLeft
      container.style.cursor = 'grabbing'
      container.style.userSelect = 'none'
    }

    const handleMouseLeave = () => {
      isDragging.current = false
      container.style.cursor = 'grab'
    }

    const handleMouseUp = () => {
      isDragging.current = false
      container.style.cursor = 'grab'
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const walk = (x - startX.current) * 2 // Vitesse de scroll
      container.scrollLeft = scrollLeft.current - walk
    }

    container.style.cursor = 'grab'
    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Jouer la vidéo visible et passer à la suivante quand elle se termine
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    videoRefs.current.forEach((video, index) => {
      if (!video) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Vidéo visible, la jouer depuis le début
              video.currentTime = 0
              video.play().catch(() => {})
            } else {
              // Vidéo non visible, l'arrêter
              video.pause()
            }
          })
        },
        { threshold: 0.5 }
      )

      observer.observe(video)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  // Quand une vidéo se termine, passer à la suivante automatiquement
  const handleVideoEnded = (index: number) => {
    const nextIndex = (index + 1) % videos.length
    scrollToVideo(nextIndex)
  }

  const scrollToVideo = (index: number) => {
    const container = scrollContainerRef.current
    if (!container) return

    const cardWidth = container.offsetWidth
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    })
  }

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-8 bg-white pt-24 md:pt-28">
      <div className="max-w-6xl mx-auto text-center pb-16 md:pb-24 w-full">
        {/* Badge subtle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-light text-sm font-medium text-secondary mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Vidéos slow-motion et accélérées
        </motion.div>

        {/* Titre principal - ÉPURÉ */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-dark"
        >
          L'expérience{' '}
          <span className="relative inline-block">
            <span className="relative z-10 gradient-text">Glambot</span>
            <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary/20 -z-0" />
          </span>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          pour vos événements
        </motion.h1>

        {/* Description - SIMPLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
        >
          Des vidéos slow-motion et accélérées cinématographiques qui immortalisent vos moments les plus précieux
        </motion.p>

        {/* Carousel vidéo scrollable */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 relative max-w-4xl mx-auto"
        >
          {/* Container avec bordure gradient */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary p-[3px] shadow-2xl">
            <div className="relative rounded-3xl overflow-hidden bg-black">
              {/* Carousel scrollable */}
              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {videos.map((video, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full snap-center"
                  >
                    <div className="relative aspect-square md:aspect-video bg-gray-900">
                      <video
                        ref={(el) => { videoRefs.current[index] = el }}
                        muted
                        playsInline
                        preload="none"
                        poster={`/images/posters/video-${index + 1}-poster.jpg`}
                        onEnded={() => handleVideoEnded(index)}
                        width="1920"
                        height="1080"
                        className="w-full h-full object-cover"
                      >
                        <source src={video} type="video/webm" />
                      </video>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Indicateurs de vidéo - Barres de progression modernes */}
          <div className="flex gap-2 justify-center mt-8" role="tablist" aria-label="Sélecteur de vidéo">
            {videos.map((_, index) => (
              <div
                key={index}
                onClick={() => scrollToVideo(index)}
                className={`cursor-pointer rounded-full transition-all duration-500 ease-out ${
                  currentVideo === index
                    ? 'w-12 h-1.5 bg-primary'
                    : 'w-8 h-1.5 bg-gray-400 opacity-30 hover:opacity-60'
                }`}
                role="tab"
                aria-label={`Aller à la vidéo ${index + 1} sur ${videos.length}`}
                aria-selected={currentVideo === index}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    scrollToVideo(index)
                  }
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <Link href="/contact" className="group px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 no-underline">
            Réserver mon événement
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Stats simples */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-12 border-t border-gray-200 grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
        >
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">500+</div>
            <div className="text-xs sm:text-sm text-gray-500">Vidéos produites</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-xs sm:text-sm text-gray-500">Mémorables</div>
          </div>
          <div>
            <div className="text-xl sm:text-3xl font-bold text-primary mb-1">Instantané</div>
            <div className="text-xs sm:text-sm text-gray-500">Repartez avec vos vidéos</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
