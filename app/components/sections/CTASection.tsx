'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Phone, Mail, MapPin, CalendarCheck, ArrowRight } from 'lucide-react'
import { trackConversion } from '@/app/lib/gtag'
import Link from 'next/link'

const contacts = [
  {
    icon: Phone,
    label: 'Téléphone',
    value: '06 76 81 59 53',
    href: 'tel:+33676815953',
    onClick: () => trackConversion.phoneClick(),
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@forevermemories.fr',
    href: 'mailto:hello@forevermemories.fr',
    onClick: () => trackConversion.emailClick(),
  },
  {
    icon: MapPin,
    label: 'Zone',
    value: 'Île-de-France',
    href: null,
  },
  {
    icon: CalendarCheck,
    label: 'Disponibilité',
    value: '7j/7 pour vos événements',
    href: null,
  },
]

export default function CTASection() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section id="contact" className="relative bg-dark py-28 md:py-40 overflow-hidden">
      {/* Halo magenta de clôture */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[60rem] h-[40rem] bg-primary/15 rounded-full blur-[180px] pointer-events-none" />

      <div className="container-wide relative z-10">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease }}
          className="max-w-4xl font-display font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] tracking-[-0.04em] text-cream"
        >
          Réservez votre
          <br />
          <span className="gradient-text-full">date</span>.
        </motion.h2>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-6 max-w-xl text-lg text-cream/60 leading-relaxed"
        >
          Les meilleures dates partent vite. Parlons de votre événement et
          offrez à vos invités une expérience qu&apos;ils n&apos;oublieront pas.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            href="/contact"
            onClick={() => trackConversion.devisClick('cta_section_hero')}
            className="btn-primary"
          >
            Réserver mon événement
            <ArrowRight size={18} />
          </Link>
          <a
            href="tel:+33676815953"
            onClick={() => trackConversion.phoneClick()}
            className="btn-secondary"
          >
            <Phone size={18} />
            06 76 81 59 53
          </a>
        </motion.div>

        {/* Contacts — grille hairline, pas de cartes */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
          {contacts.map((c) => {
            const Icon = c.icon
            const inner = (
              <>
                <span className="flex items-center gap-2 text-cream/45 text-xs">
                  <Icon size={15} className="text-primary-light" />
                  {c.label}
                </span>
                <span className="mt-2 block text-sm md:text-base text-cream font-medium">
                  {c.value}
                </span>
              </>
            )
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                onClick={c.onClick}
                className="no-underline bg-dark p-6 hover:bg-dark-card transition-colors"
              >
                {inner}
              </a>
            ) : (
              <div key={c.label} className="bg-dark p-6">
                {inner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
