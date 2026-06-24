'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Instagram, ArrowRight } from 'lucide-react'

const reels = [
  { src: '/videos/reels/al-wedding.webm', label: 'Mariage' },
  { src: '/videos/reels/chezrose.webm', label: 'Soirée' },
  { src: '/videos/reels/corcorans.webm', label: 'Corporate' },
  { src: '/videos/reels/ma-wedding.webm', label: 'Mariage' },
]

const ease = [0.16, 1, 0.3, 1] as const

type Reel = { src: string; label: string }

function ReelCard({
  reel,
  index,
  reduce,
  className = '',
}: {
  reel: Reel
  index: number
  reduce: boolean | null
  className?: string
}) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease }}
      className={`relative aspect-[9/16] rounded-3xl overflow-hidden border border-white/10 group ${className}`}
    >
      <video
        src={reel.src}
        autoPlay
        muted
        playsInline
        loop
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/70 via-transparent to-transparent pointer-events-none" />
      <span className="absolute bottom-4 left-4 text-sm font-medium text-cream/90">{reel.label}</span>
    </motion.div>
  )
}

export default function Showreel() {
  const reduce = useReducedMotion()

  return (
    <section className="relative bg-dark py-24 md:py-32 overflow-hidden">
      <div className="container-wide flex items-end justify-between gap-6 mb-10 md:mb-14">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
          className="font-display font-bold text-[clamp(2rem,5vw,3.5rem)] leading-[1] tracking-[-0.035em] text-cream"
        >
          En <span className="gradient-text">action</span>
        </motion.h2>

        <a
          href="https://www.instagram.com/forevermemories.off/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/15 bg-white/[0.03] text-cream/80 hover:border-primary/40 hover:text-primary-light transition-colors group shrink-0"
        >
          <Instagram size={17} />
          <span className="text-sm font-medium">@forevermemories.off</span>
          <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <div className="container-wide">
        {/* Desktop : grille 4 colonnes, tout tient, aucune coupe */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {reels.map((reel, index) => (
            <ReelCard key={reel.src} reel={reel} index={index} reduce={reduce} />
          ))}
        </div>

        {/* Mobile & tablette : scroll horizontal naturel */}
        <div className="lg:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-2 -mr-4 md:-mr-8 pr-4 md:pr-8">
          {reels.map((reel, index) => (
            <ReelCard
              key={reel.src}
              reel={reel}
              index={index}
              reduce={reduce}
              className="shrink-0 snap-center w-[72vw] sm:w-[300px]"
            />
          ))}
        </div>
      </div>

      {/* Lien Instagram mobile */}
      <div className="container-wide mt-8 sm:hidden">
        <a
          href="https://www.instagram.com/forevermemories.off/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-cream/55 hover:text-primary-light transition-colors"
        >
          <Instagram size={18} />
          <span className="text-sm font-medium">@forevermemories.off</span>
        </a>
      </div>
    </section>
  )
}
