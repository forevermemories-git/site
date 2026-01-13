'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, Clock, ArrowRight } from 'lucide-react'
import ContactForm from '../components/forms/ContactForm'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import { useRef } from 'react'
import { trackConversion } from '@/app/lib/gtag'

const contactFAQs = [
  {
    question: 'Sous quel délai puis-je obtenir un devis ?',
    answer: 'Nous nous engageons à vous répondre sous 24h ouvrées avec une proposition personnalisée. Pour les demandes urgentes, n\'hésitez pas à nous appeler directement.'
  },
  {
    question: 'Le devis est-il gratuit et sans engagement ?',
    answer: 'Oui, absolument ! Tous nos devis sont gratuits et sans aucun engagement. Vous êtes libre de comparer et de choisir la prestation qui vous convient le mieux.'
  },
  {
    question: 'Combien de temps à l\'avance dois-je réserver ?',
    answer: 'Nous recommandons de réserver au moins 1 à 2 mois à l\'avance, surtout pour les week-ends et la haute saison (mai à septembre). Cependant, contactez-nous même pour une date proche, nous ferons notre maximum pour vous satisfaire.'
  }
]

// Contact card component
function ContactCard({ href, icon, title, value, subtitle, index, onClick }: {
  href?: string
  icon: React.ReactNode
  title: string
  value: string
  subtitle?: string
  index: number
  onClick?: () => void
}) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative group h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

      <div className="relative h-full bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 group-hover:border-primary/20 transition-all duration-300 text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-lg font-medium mb-2 text-cream/70">{title}</h3>
        <p className="text-xl md:text-2xl font-bold text-primary mb-1">{value}</p>
        {subtitle && <p className="text-cream/40 text-sm">{subtitle}</p>}
      </div>
    </motion.div>
  )

  if (href) {
    return (
      <a href={href} onClick={onClick} className="block h-full">
        {content}
      </a>
    )
  }

  return content
}

// Social link component
function SocialLink({ href, icon, name, handle, index }: {
  href: string
  icon: React.ReactNode
  name: string
  handle: string
  index: number
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ x: 5 }}
      className="flex items-center gap-4 p-4 bg-dark-card/30 rounded-xl border border-white/5 hover:border-primary/20 transition-all group"
    >
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-cream group-hover:text-primary transition-colors">{name}</div>
        <div className="text-cream/40 text-sm">{handle}</div>
      </div>
      <ArrowRight size={18} className="ml-auto text-cream/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
    </motion.a>
  )
}

// FAQ Item component
function FAQItem({ question, answer, index }: {
  question: string
  answer: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-dark-card/30 backdrop-blur-sm border border-white/5 p-6 rounded-2xl hover:border-primary/20 transition-all"
    >
      <h3 className="text-lg font-semibold mb-3 text-cream">{question}</h3>
      <p className="text-cream/50 leading-relaxed">{answer}</p>
    </motion.div>
  )
}

export default function ContactPage() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const departments = [
    'Paris 75', 'Seine-et-Marne 77', 'Yvelines 78', 'Essonne 91',
    'Hauts-de-Seine 92', 'Seine-Saint-Denis 93', 'Val-de-Marne 94', 'Val-d\'Oise 95'
  ]

  return (
    <>
      <FAQStructuredData faqs={contactFAQs} />

      <div ref={sectionRef} className="min-h-screen bg-dark">
        <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />

        {/* Hero Section */}
        <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
          {/* Background elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ y: backgroundY }}
          >
            <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[150px]" />
            <div className="absolute top-40 -right-32 w-80 h-80 bg-rose/10 rounded-full blur-[120px]" />
          </motion.div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          <div className="container-wide relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center justify-center gap-3 mb-6"
              >
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Contactez-nous</span>
                <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
              >
                <span className="text-cream">Contactez </span>
                <span className="bg-gradient-to-r from-primary-light via-primary to-rose bg-clip-text text-transparent">Forever Memories</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-cream/50 max-w-2xl mx-auto leading-relaxed"
              >
                Une question ? Un projet ? Nous vous répondons sous 24h pour concrétiser votre événement d'exception
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12 md:py-16">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-6">
              <ContactCard
                href="tel:+33676815953"
                icon={<Phone size={28} />}
                title="Téléphone"
                value="06 76 81 59 53"
                index={0}
                onClick={() => trackConversion('phone_click', 'contact')}
              />
              <ContactCard
                href="mailto:hello@forevermemories.fr"
                icon={<Mail size={28} />}
                title="Email"
                value="hello@forevermemories.fr"
                subtitle="Réponse sous 24h"
                index={1}
              />
              <ContactCard
                icon={<MapPin size={28} />}
                title="Localisation"
                value="Île-de-France"
                subtitle="Paris et région parisienne"
                index={2}
              />
            </div>
          </div>
        </section>

        {/* Form & Sidebar */}
        <section className="py-12 md:py-20 bg-dark-lighter relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Form */}
              <ContactForm />

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-dark-card/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5"
                >
                  <h3 className="text-2xl font-bold mb-6 text-cream">Suivez-nous</h3>
                  <div className="space-y-4">
                    <SocialLink
                      href="https://www.instagram.com/forevermemories.off/"
                      icon={<Instagram size={24} />}
                      name="Instagram"
                      handle="@forevermemories.off"
                      index={0}
                    />
                    <SocialLink
                      href="https://www.facebook.com/profile.php?id=61583156844468"
                      icon={<Facebook size={24} />}
                      name="Facebook"
                      handle="Forever Memories"
                      index={1}
                    />
                  </div>
                </motion.div>

                {/* Quick Contact Card */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-rose/10 rounded-3xl blur-xl" />

                  <div className="relative bg-dark-card/80 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-rose/20 flex items-center justify-center mb-4">
                      <MessageCircle size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-cream">Besoin d'une réponse rapide ?</h3>
                    <p className="text-cream/50 mb-6">
                      Appelez-nous directement pour une réponse immédiate à vos questions.
                    </p>
                    <a
                      href="tel:+33676815953"
                      onClick={() => trackConversion('phone_click', 'contact-sidebar')}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-primary/20 transition-all"
                    >
                      <Phone size={20} />
                      06 76 81 59 53
                    </a>
                  </div>
                </motion.div>

                {/* Zone d'intervention */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-dark-card/50 backdrop-blur-sm p-8 rounded-3xl border border-white/5"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin size={20} className="text-primary" />
                    <h3 className="text-xl font-bold text-cream">Zone d'intervention</h3>
                  </div>
                  <p className="text-cream/50 mb-6">
                    Nous intervenons dans toute l'Île-de-France sans frais de déplacement supplémentaires :
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {departments.map((dept, index) => (
                      <motion.span
                        key={dept}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.2, delay: index * 0.03 }}
                        className="px-3 py-1.5 bg-dark-card/50 border border-white/10 text-cream/60 rounded-full text-sm hover:border-primary/30 hover:text-primary transition-all"
                      >
                        {dept}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Background */}
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose/10 rounded-full blur-[150px]" />

          <div className="container-wide relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-5xl font-bold text-cream"
                >
                  Questions <span className="gradient-text">fréquentes</span>
                </motion.h2>
              </div>

              <div className="space-y-4">
                {contactFAQs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
