'use client'

import { motion, useReducedMotion } from 'framer-motion'

const testimonials = [
  {
    initials: 'S&T',
    name: 'Sarah & Thomas',
    event: 'Mariage, juin 2024',
    text: 'La Starcam a été la star de notre mariage. Tous nos invités ont adoré, et les vidéos sont magnifiques.',
  },
  {
    initials: 'MD',
    name: 'Marie Dubois',
    event: 'Anniversaire 30 ans',
    text: 'Une expérience incroyable. L’équipe était très professionnelle et le rendu est digne d’un film. Mes amis en parlent encore.',
  },
  {
    initials: 'PM',
    name: 'Pierre Martin',
    event: 'Événement corporate',
    text: 'Soirée de 300 personnes, la Starcam a fait un carton. Les vidéos ont créé un vrai buzz sur nos réseaux.',
  },
]

export default function Testimonials() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section id="testimonials" className="relative bg-dark py-28 md:py-40 overflow-hidden">
      <div className="container-wide">
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl font-display font-bold text-[clamp(2.25rem,5vw,3.75rem)] leading-[1] tracking-[-0.035em] text-cream mb-16 md:mb-20"
        >
          Ils ont confié leur
          <br />
          soirée à la <span className="gradient-text">Starcam</span>.
        </motion.h2>

        <div className="grid md:grid-cols-3 md:divide-x divide-white/10 -mx-4 md:mx-0">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease }}
              className="px-4 md:px-8 py-6 md:py-0 flex flex-col"
            >
              <blockquote className="text-lg md:text-xl text-cream/85 leading-relaxed font-display tracking-[-0.01em]">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-4">
                <span className="w-12 h-12 rounded-full bg-primary/12 border border-primary/20 flex items-center justify-center text-primary-light font-semibold text-sm tracking-tight shrink-0">
                  {t.initials}
                </span>
                <span>
                  <span className="block font-semibold text-cream">{t.name}</span>
                  <span className="block text-sm text-cream/45">{t.event}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
