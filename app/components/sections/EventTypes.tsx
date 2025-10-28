'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Building2, Cake, Crown, ArrowRight } from 'lucide-react'

export default function EventTypes() {
  const eventTypes = [
    {
      icon: <Heart size={32} />,
      title: 'Mariages',
      description: 'Une animation glamour inoubliable pour le plus beau jour de votre vie',
      features: ['Vidéos slow-motion', 'Livraison instantanée', 'Souvenirs à vie'],
      href: '/mariages',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: <Building2 size={32} />,
      title: 'Événements Corporate',
      description: 'Valorisez votre marque avec des vidéos professionnelles spectaculaires',
      features: ['Branding personnalisé', 'Visibilité accrue', 'Viralité garantie'],
      href: '/evenements-corporate',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <Cake size={32} />,
      title: 'Anniversaires',
      description: 'Transformez votre fête en une célébration digne d\'Hollywood',
      features: ['Effet wow', 'Ambiance festive', 'Souvenirs uniques'],
      href: '/anniversaires',
      color: 'from-orange-500 to-amber-600'
    },
    {
      icon: <Crown size={32} />,
      title: 'Galas & Soirées de Prestige',
      description: 'Une expérience digne des plus grands tapis rouges',
      features: ['Prestige', 'Tapis rouge VIP', 'Service premium'],
      href: '/galas',
      color: 'from-purple-500 to-violet-600'
    }
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 text-dark"
          >
            Pour tous vos <span className="gradient-text">événements</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Une expérience glamour adaptée à chaque type d'événement
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={event.href}>
                <div className="group h-full bg-white border-2 border-gray-100 rounded-2xl p-6 hover:border-primary hover:shadow-xl transition-all duration-300 cursor-pointer">
                  {/* Icon avec gradient */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${event.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {event.icon}
                  </div>

                  {/* Titre */}
                  <h3 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-4">
                    {event.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    En savoir plus
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Vous ne trouvez pas le type d'événement que vous cherchez ?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all"
          >
            Contactez-nous pour un projet sur-mesure
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
