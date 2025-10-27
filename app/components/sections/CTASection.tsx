'use client'

import { motion } from 'framer-motion'
import { Calendar, Phone, Mail } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center bg-gradient-primary rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Prêt à vivre votre moment de gloire ?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Réservez dès maintenant votre Starcam et offrez à vos invités une expérience inoubliable
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="group px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-white/90 transition-all flex items-center justify-center gap-2 shadow-2xl">
              <Calendar size={24} />
              Réserver maintenant
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2">
              <Phone size={24} />
              Nous appeler
            </button>
          </div>

        </motion.div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Phone size={24} />
            </div>
            <h3 className="font-semibold text-base mb-1 text-dark">Téléphone</h3>
            <a href="tel:+33676815953" className="text-gray-600 hover:text-primary transition-colors">06 76 81 59 53</a>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Mail size={24} />
            </div>
            <h3 className="font-semibold text-base mb-1 text-dark">Email</h3>
            <a href="mailto:hello@forevermemories.fr" className="text-gray-600 hover:text-primary transition-colors text-sm">hello@forevermemories.fr</a>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
              <Calendar size={24} />
            </div>
            <h3 className="font-semibold text-base mb-1 text-dark">Disponibilité</h3>
            <p className="text-gray-600">7j/7 pour vos événements</p>
          </div>
        </div>
      </div>
    </section>
  )
}
