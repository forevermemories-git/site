'use client'

import { motion, useInView } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useRef } from 'react'
import Image from 'next/image'

export default function Testimonials() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const testimonials = [
    {
      name: 'Sarah & Thomas',
      event: 'Mariage - Juin 2024',
      rating: 5,
      text: 'Le Starcam a été la star de notre mariage ! Tous nos invités ont adoré et les vidéos sont absolument magnifiques. Un souvenir que nous garderons toute notre vie.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=100&h=100&fit=crop'
    },
    {
      name: 'Marie Dubois',
      event: 'Anniversaire 30 ans',
      rating: 5,
      text: 'Une expérience incroyable ! L\'équipe était super professionnelle et les vidéos sont dignes d\'Hollywood. Mes amis en parlent encore !',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
    },
    {
      name: 'Pierre Martin',
      event: 'Événement Corporate',
      rating: 5,
      text: 'Nous avons organisé un événement pour 300 personnes et le Starcam a été un énorme succès. Les vidéos ont créé un buzz énorme sur les réseaux sociaux !',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop'
    }
  ]

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-24 md:py-32 bg-dark-lighter overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

      <div className="container-wide relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-display-md font-display font-bold mb-6">
            <span className="text-cream">Ce que disent nos </span>
            <span className="gradient-text">clients</span>
          </h2>
          <p className="text-lg md:text-xl text-cream-muted max-w-2xl mx-auto">
            Des centaines de clients satisfaits nous font confiance pour immortaliser leurs moments les plus précieux
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="relative"
            >
              <div className="card p-8 h-full flex flex-col">
                {/* Quote icon */}
                <div className="w-12 h-12 rounded-2xl bg-primary-muted flex items-center justify-center mb-6">
                  <Quote size={24} className="text-primary" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-primary-light fill-primary-light" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-cream/90 mb-8 flex-grow leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/30">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-cream">{testimonial.name}</div>
                    <div className="text-sm text-cream-muted">{testimonial.event}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-light mb-1">5/5</div>
            <div className="text-sm text-cream-muted">Note moyenne</div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-light mb-1">1000+</div>
            <div className="text-sm text-cream-muted">Vidéos produites</div>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-light mb-1">100%</div>
            <div className="text-sm text-cream-muted">Clients satisfaits</div>
          </div>
        </motion.div>
      </div>

      {/* Ligne décorative */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </section>
  )
}
