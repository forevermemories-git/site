'use client'

import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { Heart, Building2, Cake, Crown, ArrowRight } from 'lucide-react'
import { useRef } from 'react'

export default function EventTypes() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const eventTypes = [
    {
      icon: <Heart size={28} />,
      title: 'Mariages',
      description: 'Une animation glamour inoubliable pour le plus beau jour de votre vie',
      features: ['Vidéos slow-motion', 'Livraison instantanée', 'Souvenirs à vie'],
      href: '/mariages',
      gradient: 'from-pink-500/20 to-rose-600/20',
      iconBg: 'bg-pink-500/20',
      iconColor: 'text-pink-400'
    },
    {
      icon: <Building2 size={28} />,
      title: 'Corporate',
      description: 'Valorisez votre marque avec des vidéos professionnelles spectaculaires',
      features: ['Branding personnalisé', 'Visibilité accrue', 'Viralité garantie'],
      href: '/evenements-corporate',
      gradient: 'from-blue-500/20 to-indigo-600/20',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400'
    },
    {
      icon: <Cake size={28} />,
      title: 'Anniversaires',
      description: 'Transformez votre fête en une célébration digne d\'Hollywood',
      features: ['Effet wow', 'Ambiance festive', 'Souvenirs uniques'],
      href: '/anniversaires',
      gradient: 'from-orange-500/20 to-amber-600/20',
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-400'
    },
    {
      icon: <Crown size={28} />,
      title: 'Galas & Prestige',
      description: 'Une expérience digne des plus grands tapis rouges',
      features: ['Prestige VIP', 'Tapis rouge', 'Service premium'],
      href: '/galas',
      gradient: 'from-primary/20 to-primary-dark/20',
      iconBg: 'bg-primary/20',
      iconColor: 'text-primary-light'
    }
  ]

  return (
    <section ref={sectionRef} className="relative pt-12 md:pt-16 pb-24 md:pb-32 bg-dark overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial-glow opacity-50" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-display-md font-display font-bold mb-6"
          >
            <span className="text-cream">Pour tous vos </span>
            <span className="gradient-text">événements</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-cream-muted max-w-2xl mx-auto"
          >
            Une expérience glamour adaptée à chaque type d'événement
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Link href={event.href} className="block group h-full">
                <div className={`relative h-full card p-6 md:p-8 overflow-hidden`}>
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-2xl ${event.iconBg} flex items-center justify-center ${event.iconColor} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                      {event.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold mb-3 text-cream group-hover:text-white transition-colors">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-cream-muted text-sm mb-5 leading-relaxed group-hover:text-cream/80 transition-colors">
                      {event.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {event.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-cream-muted group-hover:text-cream/70 transition-colors">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary-light font-medium text-sm group-hover:text-primary group-hover:gap-3 transition-all">
                      En savoir plus
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/tarifs" className="btn-primary">
            Voir nos formules et tarifs
            <ArrowRight size={18} />
          </Link>

          <Link href="/contact" className="btn-secondary">
            Demander un devis personnalisé
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>

      {/* Ligne décorative */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  )
}
