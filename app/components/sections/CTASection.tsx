'use client'

import { motion, useInView } from 'framer-motion'
import { Calendar, Phone, Mail, Sparkles } from 'lucide-react'
import { trackConversion } from '@/app/lib/gtag'
import Link from 'next/link'
import { useRef } from 'react'

export default function CTASection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section ref={sectionRef} id="contact" className="relative py-24 md:py-32 bg-dark overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/20 rounded-full blur-[200px] pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Card with gradient border */}
          <div className="relative rounded-4xl overflow-hidden">
            {/* Gradient border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-rose/30 p-[1px] rounded-4xl">
              <div className="absolute inset-[1px] bg-dark-card rounded-4xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-16 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="badge mb-8 mx-auto"
              >
                <Sparkles size={14} />
                Réservation rapide
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-display-md font-display font-bold mb-6"
              >
                <span className="text-cream">Prêt à vivre votre</span>
                <br />
                <span className="gradient-text">moment de gloire ?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-cream-muted mb-10 max-w-2xl mx-auto"
              >
                Réservez dès maintenant votre Starcam et offrez à vos invités une expérience inoubliable
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              >
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('cta_section_hero')}
                  className="btn-primary group"
                >
                  <Calendar size={20} />
                  Réserver maintenant
                </Link>

                <a
                  href="tel:+33676815953"
                  onClick={() => trackConversion.phoneClick()}
                  className="btn-secondary"
                >
                  <Phone size={20} />
                  06 76 81 59 53
                </a>
              </motion.div>

              {/* Contact Info Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/5"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary-muted flex items-center justify-center text-primary mb-4">
                    <Phone size={22} />
                  </div>
                  <h3 className="font-semibold text-cream mb-1">Téléphone</h3>
                  <a
                    href="tel:+33676815953"
                    onClick={() => trackConversion.phoneClick()}
                    className="text-cream-muted hover:text-primary-light transition-colors"
                  >
                    06 76 81 59 53
                  </a>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary-muted flex items-center justify-center text-primary mb-4">
                    <Mail size={22} />
                  </div>
                  <h3 className="font-semibold text-cream mb-1">Email</h3>
                  <a
                    href="mailto:hello@forevermemories.fr"
                    onClick={() => trackConversion.emailClick()}
                    className="text-cream-muted hover:text-primary-light transition-colors text-sm"
                  >
                    hello@forevermemories.fr
                  </a>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary-muted flex items-center justify-center text-primary mb-4">
                    <Calendar size={22} />
                  </div>
                  <h3 className="font-semibold text-cream mb-1">Disponibilité</h3>
                  <p className="text-cream-muted">7j/7 pour vos événements</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
