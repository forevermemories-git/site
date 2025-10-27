'use client'

import { motion } from 'framer-motion'
import { Video, Sparkles, Award, Zap } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function AboutStarcamEnhanced() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: <Video size={24} />,
      title: 'Qualité Full HD',
      description: 'Vidéos haute définition pour un rendu cinématographique'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Slow-motion et accéléré',
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

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current || !videoRef.current) return

    const ctx = gsap.context(() => {
      // Animation des cards avec stagger
      gsap.from('.feature-card', {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })

      // Animation du bloc vidéo avec scale
      gsap.from(videoRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: videoRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      })

      // Parallax léger sur les icônes
      gsap.to('.feature-icon', {
        y: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Titre section */}
        <div className="text-center mb-12">
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
            Un robot vidéo de précision qui capture des moments spectaculaires en slow-motion et accéléré,
            exactement comme lors des cérémonies des Oscars
          </motion.p>
        </div>

        {/* Features grid avec GSAP animations */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card bg-white p-6 rounded-2xl hover:shadow-xl transition-all group"
            >
              <div className="feature-icon w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-dark">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Video placeholder avec animation */}
        <div
          ref={videoRef}
          className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-shadow"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-primary">
            <div className="text-center text-white">
              <motion.div
                className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Video size={32} />
              </motion.div>
              <p className="text-lg font-medium">Voir la Starcam en action</p>
            </div>
          </div>

          {/* Effet de glow animé */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
          </div>
        </div>
      </div>
    </section>
  )
}
