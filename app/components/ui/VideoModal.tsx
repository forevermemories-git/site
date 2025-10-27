'use client'

import { useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoSrc: string
  title?: string
  type?: string
}

export default function VideoModal({ isOpen, onClose, videoSrc, title, type }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Fermer avec Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Bloquer le scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Auto-play quand le modal s'ouvre
  useEffect(() => {
    const playVideo = async () => {
      if (isOpen && videoRef.current) {
        try {
          await videoRef.current.play()
        } catch (error) {
          // Ignorer les erreurs de lecture automatique
          if (error instanceof Error && error.name !== 'AbortError' && error.name !== 'NotAllowedError') {
            console.warn('Erreur de lecture vidéo:', error)
          }
        }
      }
    }

    playVideo()
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-full max-w-6xl mx-4 md:mx-8"
          >
            {/* Header avec titre et bouton fermer */}
            <div className="flex items-center justify-between mb-4">
              <div>
                {title && (
                  <h3 className="text-white text-lg md:text-xl font-semibold">{title}</h3>
                )}
                {type && (
                  <p className="text-white/70 text-sm mt-1">{type}</p>
                )}
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all group"
                aria-label="Fermer"
              >
                <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Vidéo */}
            <div className="relative rounded-2xl overflow-hidden bg-black shadow-2xl">
              <div className="aspect-square md:aspect-video">
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  loop
                  className="w-full h-full object-cover"
                  onClick={(e) => e.stopPropagation()}
                >
                  <source src={videoSrc} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
            </div>

            {/* Instructions */}
            <p className="text-center text-white/50 text-sm mt-4">
              Appuyez sur <kbd className="px-2 py-1 bg-white/10 rounded text-white/70">Esc</kbd> ou cliquez en dehors pour fermer
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
