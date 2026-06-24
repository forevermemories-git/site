'use client'

import { motion, useReducedMotion } from 'framer-motion'

const stats = [
  { value: '1000+', label: 'Vidéos produites' },
  { value: '48h', label: 'Galerie en ligne' },
  { value: '120 fps', label: 'Slow-motion' },
]

export default function Manifesto() {
  const reduce = useReducedMotion()
  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section className="relative bg-dark py-28 md:py-40 overflow-hidden">
      <div className="container-wide">
        {/* Déclaration éditoriale */}
        <motion.h2
          initial={reduce ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease }}
          className="max-w-5xl font-display font-bold text-[clamp(2rem,5.5vw,4.25rem)] leading-[1.02] tracking-[-0.035em] text-cream"
        >
          L&apos;animation que vos invités
          <br className="hidden sm:block" />{' '}
          vont s&apos;arracher.
        </motion.h2>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-8 max-w-xl text-lg text-cream/60 leading-relaxed"
        >
          Un bras robotisé, une caméra haute vitesse, un mouvement de cinéma.
          Vos invités prennent la pose, la Starcam fige l&apos;instant au ralenti.
          Le genre de vidéo qu&apos;on regarde, qu&apos;on partage, et qu&apos;on garde.
        </motion.p>

        {/* Bande de preuves — vrais chiffres, pas de cartes */}
        <div className="mt-16 md:mt-20 grid grid-cols-3 gap-6 border-t border-white/10 pt-10 max-w-3xl">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
            >
              <div className="font-display font-bold text-3xl md:text-5xl tracking-[-0.03em] text-cream tabular-nums">
                {s.value}
              </div>
              <div className="mt-2 text-xs md:text-sm text-cream/45">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
