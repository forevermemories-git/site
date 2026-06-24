'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const capabilities = [
  {
    title: 'Bras robotisé 5 axes',
    description: 'Un mouvement de caméra fluide et cinématographique, la technologie des tapis rouges.',
  },
  {
    title: 'Slow-motion et accéléré',
    description: 'Chaque geste dramatisé, du ralenti spectaculaire à l’accéléré dynamique.',
  },
  {
    title: 'Qualité Full HD',
    description: 'Caméra 1080p à 120 images par seconde, éclairage studio intégré.',
  },
  {
    title: 'Livraison immédiate',
    description: 'Vidéo sur le téléphone de vos invités sur place, galerie en ligne sous 48h.',
  },
]

export default function AboutStarcamEnhanced() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section className="relative bg-dark-lighter py-28 md:py-40 overflow-hidden">
      {/* Halo magenta discret */}
      <div className="absolute top-0 -left-40 w-[36rem] h-[36rem] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Colonne texte */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease }}
              className="font-display font-bold text-[clamp(2.25rem,5vw,3.75rem)] leading-[1] tracking-[-0.035em] text-cream"
            >
              La <span className="gradient-text-full">Starcam</span>,
              <br />
              l&apos;animation qui se filme.
            </motion.h2>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="mt-6 max-w-lg text-lg text-cream/60 leading-relaxed"
            >
              C&apos;est un glambot : un bras robotisé 5 axes équipé d&apos;une caméra
              haute définition. Vos invités prennent la pose, le bras s&apos;élance
              dans un mouvement de cinéma, et la magie opère.
            </motion.p>

            {/* Capacités — liste éditoriale, hairlines, pas de cartes */}
            <div className="mt-12 border-t border-white/10">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease }}
                  className="group flex items-baseline gap-5 md:gap-8 py-5 border-b border-white/10"
                >
                  <span className="font-display text-sm text-primary-light/70 tabular-nums shrink-0 w-7">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-cream">{cap.title}</h3>
                    <p className="mt-1 text-sm md:text-base text-cream/50 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: 0.1, ease }}
            >
              <Link
                href="/la-starcam"
                className="mt-10 inline-flex items-center gap-2 text-primary-light font-medium hover:gap-3 transition-all group/link"
              >
                Découvrir la technologie
                <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          {/* Colonne vidéo vedette — format vertical */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-sm lg:max-w-none aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 shadow-card">
              <video
                src="/videos/reels/al-wedding.webm"
                autoPlay
                muted
                playsInline
                loop
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
