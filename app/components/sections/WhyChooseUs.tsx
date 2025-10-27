'use client'

import { motion, useInView } from 'framer-motion'
import { TrendingUp, Shield, Heart, Zap } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}</span>
}

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <TrendingUp size={40} />,
      title: '500+ vidéos produites',
      description: 'Plus de 500 vidéos créées avec des clients satisfaits à travers toute la France.'
    },
    {
      icon: <Shield size={40} />,
      title: 'Équipement pro',
      description: 'Robot de dernière génération utilisé lors des plus grandes cérémonies mondiales.'
    },
    {
      icon: <Heart size={40} />,
      title: 'Service premium',
      description: 'Une équipe dédiée et passionnée pour faire de votre événement un moment inoubliable.'
    },
    {
      icon: <Zap size={40} />,
      title: 'Livraison instantanée',
      description: 'Repartez immédiatement avec vos vidéos + accès à toutes vos vidéos en ligne sous 48h.'
    }
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Card avec délimitation épurée */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold mb-4 text-dark"
            >
              Pourquoi <span className="gradient-text">Forever Memories</span> ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Une expertise reconnue et une passion pour créer des souvenirs mémorables
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto group-hover:bg-primary group-hover:text-white transition-all">
                {reason.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-dark">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-gray-100"
        >
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
              <AnimatedCounter end={500} />+
            </div>
            <div className="text-gray-600 text-sm">Vidéos produites</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
            <div className="text-gray-600 text-sm">Effet wow</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2 text-2xl md:text-3xl">Instantané</div>
            <div className="text-gray-600 text-sm">Livraison immédiate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">Full HD</div>
            <div className="text-gray-600 text-sm">Qualité cinéma</div>
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  )
}
