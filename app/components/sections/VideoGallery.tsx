'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { useState } from 'react'
import VideoModal from '../ui/VideoModal'

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<{ src: string; title: string; type: string } | null>(null)
  const [filter, setFilter] = useState<string>('Tous')

  const videos = [
    { id: 1, title: 'AL Groupe', src: '/videos/video-al-groupe.mp4', type: 'Corporate' },
    { id: 2, title: 'Chez Rose Girls', src: '/videos/video-chezrose-girls.mp4', type: 'Soirée' },
    { id: 3, title: 'Corcorans Groupe', src: '/videos/video-corcorans-groupe.mp4', type: 'Corporate' },
    { id: 4, title: 'Mamakutty Groupe', src: '/videos/video-mamakutty-groupe.mp4', type: 'Soirée' },
    { id: 5, title: 'MP Groupe', src: '/videos/video-mp-groupe.mp4', type: 'Corporate' },
    { id: 6, title: 'Sambavam Groupe', src: '/videos/video-sambavam-groupe.mp4', type: 'Soirée' },
  ]

  const categories = ['Tous', 'Corporate', 'Soirée']

  const filteredVideos = filter === 'Tous'
    ? videos
    : videos.filter(v => v.type === filter)

  return (
    <section id="nos-realisations" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-dark"
          >
            Nos réalisations
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Découvrez nos plus belles créations
          </motion.p>
        </div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid simple avec vraies vidéos */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden bg-black cursor-pointer"
              onClick={() => setSelectedVideo({ src: video.src, title: video.title, type: video.type })}
            >
              {/* Vidéo miniature */}
              <video
                muted
                loop
                playsInline
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onMouseEnter={(e) => {
                  const video = e.currentTarget
                  video.play().catch(error => {
                    // Ignorer les erreurs de play si la vidéo n'est pas encore chargée
                    if (error.name !== 'AbortError' && error.name !== 'NotAllowedError') {
                      console.warn('Erreur de lecture vidéo:', error)
                    }
                  })
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget
                  video.pause()
                  video.currentTime = 0
                }}
              >
                <source src={video.src} type="video/mp4" />
              </video>

              {/* Overlay simple */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white">
                  <Play size={48} strokeWidth={1.5} />
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="text-xs font-medium opacity-70 mb-1">{video.type}</div>
                <div className="text-sm font-medium">{video.title}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA simple */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            {filteredVideos.length} vidéo{filteredVideos.length > 1 ? 's' : ''} disponible{filteredVideos.length > 1 ? 's' : ''}
          </p>
        </motion.div>
      </div>

      {/* Modal vidéo plein écran */}
      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={() => setSelectedVideo(null)}
          videoSrc={selectedVideo.src}
          title={selectedVideo.title}
          type={selectedVideo.type}
        />
      )}
    </section>
  )
}
