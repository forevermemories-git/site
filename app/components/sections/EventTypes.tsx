'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { Heart, Building2, Cake, Crown, ArrowUpRight, ArrowRight } from 'lucide-react'

const eventTypes = [
  {
    icon: Heart,
    title: 'Mariages',
    description: 'Une animation glamour inoubliable pour le plus beau jour de votre vie.',
    href: '/mariages',
  },
  {
    icon: Building2,
    title: 'Corporate',
    description: 'Valorisez votre marque avec des vidéos professionnelles spectaculaires.',
    href: '/evenements-corporate',
  },
  {
    icon: Cake,
    title: 'Anniversaires',
    description: 'Transformez votre fête en une célébration digne d’Hollywood.',
    href: '/anniversaires',
  },
  {
    icon: Crown,
    title: 'Galas & Prestige',
    description: 'Une expérience digne des plus grands tapis rouges.',
    href: '/galas',
  },
]

export default function EventTypes() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section className="relative bg-dark-lighter py-28 md:py-40 overflow-hidden">
      <div className="container-wide">
        <div className="max-w-3xl mb-14 md:mb-20">
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease }}
            className="font-display font-bold text-[clamp(2.25rem,5vw,3.75rem)] leading-[1] tracking-[-0.035em] text-cream"
          >
            Pour chacun de
            <br />
            vos <span className="gradient-text">événements</span>.
          </motion.h2>
        </div>

        {/* Index éditorial — rangées, accent magenta unique */}
        <div className="border-t border-white/10">
          {eventTypes.map((event, i) => {
            const Icon = event.icon
            return (
              <motion.div
                key={event.title}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.06, ease }}
              >
                <Link
                  href={event.href}
                  className="no-underline group relative grid grid-cols-[auto_1fr_auto] items-center gap-5 md:gap-10 py-7 md:py-9 border-b border-white/10 transition-colors"
                >
                  {/* Fill magenta au survol */}
                  <span className="absolute inset-x-[-1rem] inset-y-0 rounded-2xl bg-primary/[0.07] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <span className="relative flex items-center gap-4 md:gap-6">
                    <span className="font-display text-sm text-cream/35 tabular-nums w-7">
                      0{i + 1}
                    </span>
                    <span className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-primary-light group-hover:bg-primary/20 transition-colors">
                      <Icon size={20} />
                    </span>
                  </span>

                  <span className="relative min-w-0">
                    <h3 className="font-display text-2xl md:text-4xl font-bold text-cream tracking-[-0.02em] transition-transform duration-300 group-hover:translate-x-1">
                      {event.title}
                    </h3>
                    <p className="mt-1.5 text-sm md:text-base text-cream/50 leading-relaxed max-w-xl">
                      {event.description}
                    </p>
                  </span>

                  <ArrowUpRight
                    size={28}
                    className="relative text-cream/30 group-hover:text-primary-light transition-all duration-300 group-hover:rotate-12 shrink-0"
                  />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTAs */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease }}
          className="mt-14 flex flex-col sm:flex-row gap-4"
        >
          <Link href="/tarifs" className="btn-primary">
            Voir nos formules
            <ArrowRight size={18} />
          </Link>
          <Link href="/contact" className="btn-secondary">
            Demander un devis
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
