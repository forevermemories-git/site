'use client'

import { motion } from 'framer-motion'
import { Video, Sparkles, Award, Zap, Instagram } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

export default function AboutStarcamEnhanced() {
  const [currentReel, setCurrentReel] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const videoRefsMobile = useRef<(HTMLVideoElement | null)[]>([])
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const reels = [
    '/videos/reels/al-wedding.webm',
    '/videos/reels/chezrose.webm',
    '/videos/reels/corcorans.webm',
    '/videos/reels/ma-wedding.webm',
  ]

  const features = [
    {
      icon: <Video size={24} />,
      title: 'Qualité Full HD',
      description: 'Vidéos haute définition pour un rendu cinématographique'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Slow-motion et accélérées',
      description: 'Capture parfaite de chaque mouvement en ralenti ou accéléré'
    },
    {
      icon: <Award size={24} />,
      title: 'Robot pro',
      description: 'Équipement utilisé par les plus grands événements mondiaux'
    },
    {
      icon: <Zap size={24} />,
      title: 'Livraison instantanée',
      description: 'Repartez immédiatement avec vos vidéos + accès en ligne sous 48h'
    }
  ]

  // Détecter le scroll mobile pour mettre à jour l'indicateur
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      const scrollLeftValue = container.scrollLeft
      const containerWidth = container.offsetWidth
      const scrollWidth = container.scrollWidth

      // Si on est à la fin du scroll, c'est la dernière vidéo
      if (scrollLeftValue + containerWidth >= scrollWidth - 10) {
        setCurrentReel(reels.length - 1)
        return
      }

      // Sinon, calculer l'index basé sur la position
      const cardWidth = 280 + 16 // largeur carte + gap
      const newIndex = Math.round(scrollLeftValue / cardWidth)
      setCurrentReel(Math.min(newIndex, reels.length - 1))
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [reels.length])

  // Drag to scroll à la souris pour mobile carousel
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

  // Observer pour jouer les vidéos mobile quand elles sont visibles
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    videoRefsMobile.current.forEach((video) => {
      if (!video) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.currentTime = 0
              video.play().catch(() => {})
            } else {
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

  // Quand une vidéo mobile se termine, passer à la suivante
  const handleVideoEnded = (index: number) => {
    const nextIndex = (index + 1) % reels.length
    scrollToReel(nextIndex)
  }

  const scrollToReel = (index: number) => {
    const container = scrollContainerRef.current
    if (!container) return

    const cardWidth = 280 + 16 // largeur carte + gap
    container.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth'
    })
  }

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Titre section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4 text-dark"
          >
            La Starcam
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Un robot vidéo de précision qui capture des moments spectaculaires en slow-motion et en accéléré,
            exactement comme lors des cérémonies des Oscars
          </motion.p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 max-w-4xl md:max-w-full mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 md:p-6 rounded-2xl hover:shadow-xl transition-all group text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3 md:mb-4 group-hover:bg-primary group-hover:text-white transition-all group-hover:scale-110 mx-auto">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-base md:text-lg mb-2 text-dark">{feature.title}</h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Reels grid - 4 vidéos côte à côte EN LOOP */}
        <div className="hidden md:block mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-center mb-8 text-dark"
          >
            La Starcam en action
          </motion.h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {reels.map((reel, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[9/16] rounded-2xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                {/* Vidéo EN BOUCLE pour desktop */}
                <video
                  src={reel}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Gradient overlay au hover uniquement */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                </div>

                {/* Effet de bordure au hover */}
                <div className="absolute inset-0 border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none">
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Carousel scrollable avec cartes - Vidéo joue 1 fois puis passe à la suivante */}
        <div className="md:hidden">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-bold text-center mb-6 text-dark"
          >
            La Starcam en action
          </motion.h3>

          {/* Carousel scrollable horizontal */}
          <div className="relative -mx-4 px-4">
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {reels.map((reel, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[280px] snap-center"
                >
                  <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl bg-gray-900">
                    <video
                      ref={(el) => { videoRefsMobile.current[index] = el }}
                      src={reel}
                      muted
                      playsInline
                      onEnded={() => handleVideoEnded(index)}
                      className="w-full h-full object-cover"
                    />

                  </div>
                </div>
              ))}
            </div>

            {/* Indicateurs de pagination - Barres modernes */}
            <div className="flex gap-2 justify-center mt-6" role="tablist" aria-label="Sélecteur de vidéo">
              {reels.map((_, index) => (
                <div
                  key={index}
                  onClick={() => scrollToReel(index)}
                  className={`cursor-pointer rounded-full transition-all duration-500 ease-out ${
                    currentReel === index
                      ? 'w-12 h-1.5 bg-primary'
                      : 'w-8 h-1.5 bg-gray-400 opacity-30 hover:opacity-60'
                  }`}
                  role="tab"
                  aria-label={`Aller à la vidéo ${index + 1} sur ${reels.length}`}
                  aria-selected={currentReel === index}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      scrollToReel(index)
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Instagram */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://www.instagram.com/forevermemories.off/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all"
          >
            <Instagram size={20} />
            Voir plus sur Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
