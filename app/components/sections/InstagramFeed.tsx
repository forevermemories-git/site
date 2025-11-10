'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, ExternalLink, Play, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface InstagramPost {
  id: string
  caption?: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  media_url: string
  thumbnail_url?: string
  permalink: string
  timestamp: string
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/instagram')
        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts')
        }
        const data = await response.json()
        setPosts(data.posts || [])
      } catch (err) {
        console.error('Error fetching Instagram feed:', err)
        setError('Impossible de charger le feed Instagram')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Nos réalisations
            </h2>
            <p className="text-lg text-gray-600">Découvrez nos plus belles créations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 rounded-xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
            Nos réalisations
          </h2>
          <p className="text-gray-600 mb-8">{error}</p>
          <a
            href="https://www.instagram.com/forevermemories.off/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-all"
          >
            <Instagram size={20} />
            Voir sur Instagram
          </a>
        </div>
      </section>
    )
  }

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
            Découvrez nos plus belles créations sur Instagram
          </motion.p>
        </div>

        {/* Grid Instagram */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {posts.slice(0, 8).map((post, index) => (
            <motion.button
              key={post.id}
              onClick={() => setSelectedPost(post)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative aspect-square rounded-xl overflow-hidden bg-gray-200 cursor-pointer"
            >
              {/* Image/Video */}
              <div className="relative w-full h-full">
                {post.media_type === 'VIDEO' ? (
                  <video
                    src={post.media_url}
                    poster={post.thumbnail_url}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    preload="none"
                    onMouseEnter={(e) => e.currentTarget.play().catch(() => {})}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause()
                      e.currentTarget.currentTime = 0
                    }}
                  />
                ) : (
                  <Image
                    src={post.media_url}
                    alt={post.caption?.substring(0, 100) || 'Instagram post'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Overlay avec effet hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="absolute inset-0 flex items-center justify-center">
                  {post.media_type === 'VIDEO' ? (
                    <div className="text-white">
                      <Play size={48} strokeWidth={1.5} />
                    </div>
                  ) : (
                    <div className="text-white">
                      <ExternalLink size={32} strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                {/* Caption si disponible */}
                {post.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm line-clamp-2">
                      {post.caption}
                    </p>
                  </div>
                )}
              </div>

              {/* Badge pour vidéos */}
              {post.media_type === 'VIDEO' && (
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
                  <Play size={16} className="text-primary fill-primary" />
                </div>
              )}

              {/* Badge pour carrousels */}
              {post.media_type === 'CAROUSEL_ALBUM' && (
                <div className="absolute top-3 right-3 px-2 py-1 bg-white/90 rounded-full text-xs font-medium text-primary">
                  1+
                </div>
              )}
            </motion.button>
          ))}
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

        {/* Modal pour voir le post */}
        <AnimatePresence>
          {selectedPost && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedPost(null)}
                className="fixed inset-0 bg-black/90 z-[9999] cursor-pointer"
              />

              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-4 md:inset-10 lg:inset-20 z-[9999] flex items-center justify-center pointer-events-none"
              >
                <div className="relative w-full h-full max-w-6xl mx-auto flex items-center justify-center pointer-events-auto">
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-all"
                  >
                    <X size={24} className="text-white" />
                  </button>

                  {/* Content Container */}
                  <div className="relative w-full h-full bg-black rounded-2xl overflow-hidden flex flex-col md:flex-row">
                    {/* Media Side */}
                    <div className="flex-1 relative bg-black flex items-center justify-center">
                      {selectedPost.media_type === 'VIDEO' ? (
                        <video
                          src={selectedPost.media_url}
                          controls
                          autoPlay
                          loop
                          preload="auto"
                          className="max-w-full max-h-full object-contain"
                        />
                      ) : (
                        <div className="relative w-full h-full flex items-center justify-center">
                          <Image
                            src={selectedPost.media_url}
                            alt={selectedPost.caption?.substring(0, 100) || 'Instagram post'}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 60vw"
                            priority
                          />
                        </div>
                      )}
                    </div>

                    {/* Info Side */}
                    <div className="md:w-96 bg-white flex flex-col max-h-[40%] md:max-h-full">
                      {/* Header */}
                      <div className="p-4 border-b border-gray-200 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                          <Instagram size={20} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-dark">forevermemories.off</p>
                        </div>
                      </div>

                      {/* Caption */}
                      <div className="flex-1 p-4 overflow-y-auto">
                        {selectedPost.caption ? (
                          <p className="text-dark whitespace-pre-wrap">{selectedPost.caption}</p>
                        ) : (
                          <p className="text-gray-400 italic">Pas de description</p>
                        )}
                      </div>

                      {/* Footer with Instagram Link */}
                      <div className="p-4 border-t border-gray-200">
                        <a
                          href={selectedPost.permalink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium hover:shadow-xl hover:scale-105 transition-all"
                        >
                          <Instagram size={18} />
                          Voir sur Instagram
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
