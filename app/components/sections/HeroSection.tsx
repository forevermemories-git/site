'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export default function HeroSection() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const videos = [
    '/videos/video-al-groupe.mp4',
    '/videos/video-chezrose-girls.mp4',
    '/videos/video-corcorans-groupe.mp4',
    '/videos/video-mamakutty-groupe.mp4',
    '/videos/video-mp-groupe.mp4',
    '/videos/video-sambavam-groupe.mp4',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length)
    }, 8000) // Change toutes les 8 secondes

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Recharger la vidéo quand elle change
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          // Arrêter la vidéo actuelle
          videoRef.current.pause()
          // Charger la nouvelle
          videoRef.current.load()
          // Attendre un peu que le chargement commence
          await new Promise(resolve => setTimeout(resolve, 100))
          // Jouer avec gestion d'erreur
          await videoRef.current.play()
        } catch (error) {
          // Ignorer les erreurs AbortError qui sont normales lors du changement rapide
          if (error instanceof Error && error.name !== 'AbortError') {
            console.warn('Erreur de lecture vidéo:', error)
          }
        }
      }
    }

    playVideo()
  }, [currentVideo])

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
          Vidéo slow-motion et accéléré
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
          className="text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto font-light leading-relaxed"
        >
          Des vidéos slow-motion et accéléré cinématographiques qui immortalisent vos moments les plus précieux
        </motion.p>

        {/* Lecteur vidéo moderne */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-10 relative max-w-4xl mx-auto"
        >
          {/* Container avec bordure gradient */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary p-[3px] shadow-2xl">
            <div className="relative rounded-3xl overflow-hidden bg-black">
              {/* Vidéo avec transition */}
              <motion.div
                key={currentVideo}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative aspect-square md:aspect-video"
              >
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  width="1920"
                  height="1080"
                  className="w-full h-full object-cover"
                >
                  <source src={videos[currentVideo]} type="video/mp4" />
                </video>
              </motion.div>

              {/* Indicateurs de vidéo */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentVideo(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      currentVideo === index
                        ? 'w-8 bg-white'
                        : 'w-1.5 bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Vidéo ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Badge "Nos réalisations" */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-white border-2 border-primary/20 rounded-full shadow-lg">
            <span className="text-sm font-semibold text-primary">✨ Nos réalisations</span>
          </div>
        </motion.div>

        {/* CTAs - ÉPURÉS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="group px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
            Réserver mon événement
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 text-dark font-medium hover:text-primary transition-colors">
            Voir nos réalisations
          </button>
        </motion.div>

        {/* Stats simples */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-12 border-t border-gray-200 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
        >
          <div>
            <div className="text-3xl font-bold text-primary mb-1">500+</div>
            <div className="text-sm text-gray-500">Vidéos produites</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-gray-500">Mémorables</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-1">Instantané</div>
            <div className="text-sm text-gray-500">Repartez avec vos vidéos</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
