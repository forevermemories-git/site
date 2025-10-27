'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah & Thomas',
      event: 'Mariage - Juin 2024',
      rating: 5,
      text: 'Le Starcam a été la star de notre mariage ! Tous nos invités ont adoré et les vidéos sont absolument magnifiques. Un souvenir que nous garderons toute notre vie.',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=100'
    },
    {
      name: 'Marie Dubois',
      event: 'Anniversaire 30 ans',
      rating: 5,
      text: 'Une expérience incroyable ! L\'équipe était super professionnelle et les vidéos sont dignes d\'Hollywood. Mes amis en parlent encore !',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100'
    },
    {
      name: 'Pierre Martin',
      event: 'Événement Corporate',
      rating: 5,
      text: 'Nous avons organisé un événement pour 300 personnes et le Starcam a été un énorme succès. Les vidéos ont créé un buzz énorme sur les réseaux sociaux !',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100'
    }
  ]

  return (
    <section id="testimonials" className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
            Ce que disent nos <span className="gradient-text">clients</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des centaines de clients satisfaits nous font confiance pour immortaliser leurs moments les plus précieux
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-50 border border-gray-100 p-8 rounded-2xl hover:shadow-lg transition-all duration-300"
            >
              <Quote size={40} className="text-primary mb-4" />

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-primary fill-primary" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.event}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
