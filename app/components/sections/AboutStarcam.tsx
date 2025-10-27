'use client'

import { motion } from 'framer-motion'
import { Video, Sparkles, Award, Zap } from 'lucide-react'

export default function AboutStarcam() {
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

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
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
            className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Un robot vidéo de précision qui capture des moments spectaculaires en slow-motion et accéléré, exactement comme lors des cérémonies des Oscars
          </motion.p>
        </div>

        {/* Features grid - SIMPLE */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2 text-dark">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Video placeholder - CLEAN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video bg-gray-200 rounded-2xl overflow-hidden group cursor-pointer"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-primary">
            <div className="text-center text-white">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Video size={32} />
              </div>
              <p className="text-lg font-medium">Voir la Starcam en action</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
