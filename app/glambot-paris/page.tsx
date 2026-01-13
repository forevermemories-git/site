'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MapPin, Star, CheckCircle, Phone, Camera, Users, Clock } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import { useRef } from 'react'
import { trackConversion } from '@/app/lib/gtag'

const parisFAQs = [
  {
    question: 'Où intervenez-vous exactement à Paris ?',
    answer: 'Nous intervenons dans tout Paris intra-muros (75) ainsi que dans la petite couronne : Hauts-de-Seine (92), Seine-Saint-Denis (93) et Val-de-Marne (94). Aucun frais de déplacement supplémentaire pour ces zones.'
  },
  {
    question: 'Quels types de lieux à Paris sont adaptés pour le Glambot ?',
    answer: 'Notre Starcam s\'adapte à tous les lieux parisiens : hôtels particuliers, rooftops, salles de réception, restaurants, espaces Haussmanniens, lofts industriels. Nous avons l\'habitude des contraintes des lieux prestigieux parisiens.'
  },
  {
    question: 'Peut-on installer le Glambot dans un appartement parisien ?',
    answer: 'Oui, notre équipement compact (3m x 3m) s\'adapte aux espaces parisiens. Nous vérifions toujours la faisabilité en amont et proposons des solutions adaptées même pour les espaces plus restreints.'
  },
  {
    question: 'Combien coûte une prestation Glambot à Paris ?',
    answer: 'Nos prestations à Paris démarrent à partir de 1500€ pour 3h. Le tarif exact dépend de la durée, du jour (semaine/week-end) et des options choisies. Demandez un devis gratuit pour votre événement.'
  },
  {
    question: 'Quel délai pour réserver à Paris ?',
    answer: 'Paris étant notre zone principale d\'intervention, nous avons une forte demande. Nous recommandons de réserver 2-3 mois à l\'avance, surtout pour les week-ends. Contactez-nous même en dernière minute, nous ferons notre maximum.'
  }
]

// Zone Card Component
function ZoneCard({ title, subtitle, description, index }: {
  title: string
  subtitle: string
  description: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative group h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

      <div className="relative h-full bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 group-hover:border-primary/20 transition-all duration-300">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
          <MapPin size={24} />
        </div>
        <h3 className="text-xl font-bold mb-1 text-cream">{title}</h3>
        <p className="text-primary text-sm font-medium mb-2">{subtitle}</p>
        <p className="text-cream/50 text-sm">{description}</p>
      </div>
    </motion.div>
  )
}

// Feature Card Component
function FeatureCard({ icon, title, description, index }: {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-cream">{title}</h3>
      <p className="text-cream/50">{description}</p>
    </motion.div>
  )
}

// Event Link Component
function EventLink({ href, title, description, index }: {
  href: string
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={href}
        className="group block h-full bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all"
      >
        <h3 className="text-lg font-bold mb-2 text-cream group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-cream/50 text-sm mb-4">{description}</p>
        <span className="text-primary font-medium inline-flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
          En savoir plus <ArrowRight size={16} />
        </span>
      </Link>
    </motion.div>
  )
}

// FAQ Item Component
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

export default function GlambotParisPage() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const zones = [
    { title: 'Paris', subtitle: '75', description: 'Tous les arrondissements, des lieux prestigieux du 8ème aux espaces branchés du 11ème' },
    { title: 'Hauts-de-Seine', subtitle: '92', description: 'Neuilly, Boulogne, La Défense, Issy-les-Moulineaux et toutes les communes' },
    { title: 'Seine-Saint-Denis', subtitle: '93', description: 'Saint-Denis, Montreuil, Saint-Ouen, Pantin et l\'ensemble du département' },
    { title: 'Val-de-Marne', subtitle: '94', description: 'Vincennes, Saint-Mandé, Créteil, Nogent-sur-Marne et alentours' }
  ]

  const features = [
    { icon: <Camera size={32} />, title: 'Technologie exclusive', description: 'Notre Starcam est l\'un des rares Glambots disponibles en région parisienne. Une technologie quasi introuvable ailleurs.' },
    { icon: <Users size={32} />, title: '1000+ vidéos', description: 'Plus de 1000 vidéos produites en Île-de-France. Nous connaissons parfaitement les lieux et contraintes parisiennes.' },
    { icon: <Clock size={32} />, title: 'Réactivité locale', description: 'Basés en Île-de-France, nous sommes réactifs et flexibles. Visite technique gratuite sur Paris si nécessaire.' }
  ]

  const events = [
    { href: '/mariages', title: 'Mariages', description: 'Hôtels particuliers, châteaux, rooftops parisiens' },
    { href: '/evenements-corporate', title: 'Corporate', description: 'Séminaires, lancements, soirées d\'entreprise' },
    { href: '/galas', title: 'Galas', description: 'Soirées de prestige, cérémonies, tapis rouge' },
    { href: '/anniversaires', title: 'Anniversaires', description: 'Fêtes privées, anniversaires marquants' }
  ]

  return (
    <>
      <FAQStructuredData faqs={parisFAQs} />

      <div ref={sectionRef} className="min-h-screen bg-dark">
        <Breadcrumbs items={[{ name: 'Glambot Paris', href: '/glambot-paris' }]} />

        {/* Hero Section */}
        <section className="relative pt-28 md:pt-32 pb-20 md:pb-32 overflow-hidden">
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary mb-6"
              >
                <MapPin size={16} />
                Paris & Petite Couronne
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
              >
                <span className="text-cream">Location </span>
                <span className="bg-gradient-to-r from-primary-light via-primary to-rose bg-clip-text text-transparent">Glambot</span>
                <span className="text-cream"> à Paris</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-cream/50 mb-10 max-w-3xl mx-auto"
              >
                Transformez votre événement parisien en moment d'exception avec notre robot Starcam et ses vidéos slow-motion cinématographiques
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary/80 text-white rounded-full font-medium hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  Demander un devis gratuit
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/tarifs"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-cream rounded-full font-medium hover:bg-white/10 transition-all"
                >
                  Voir nos tarifs
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="py-20 md:py-32 bg-dark-lighter relative overflow-hidden">
          <div className="container-wide relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-4 text-cream"
            >
              Nos zones d'<span className="gradient-text">intervention</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center text-cream/50 mb-12"
            >
              <strong className="text-primary">Aucun frais de déplacement</strong> pour Paris et la petite couronne
            </motion.p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {zones.map((zone, index) => (
                <ZoneCard key={index} {...zone} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose/10 rounded-full blur-[150px]" />

          <div className="container-wide relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-cream"
            >
              Pourquoi choisir <span className="gradient-text">Forever Memories</span> à Paris ?
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Types d'événements */}
        <section className="py-20 md:py-32 bg-dark-lighter relative overflow-hidden">
          <div className="container-wide relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-cream"
            >
              Tous vos événements <span className="gradient-text">parisiens</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {events.map((event, index) => (
                <EventLink key={index} {...event} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-center mb-12 text-cream"
              >
                Questions <span className="gradient-text">fréquentes</span>
              </motion.h2>

              <div className="space-y-4">
                {parisFAQs.map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-rose" />
              <div className="absolute inset-0 bg-dark/20" />

              <div className="relative p-10 md:p-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  Prêt à transformer votre événement parisien ?
                </h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                  Contactez-nous pour un devis gratuit et personnalisé sous 24h
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-dark rounded-full font-semibold hover:bg-cream transition-all"
                  >
                    <Phone size={20} />
                    Demander un devis
                  </Link>
                  <a
                    href="tel:+33676815953"
                    onClick={() => trackConversion.phoneClick()}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white hover:text-dark transition-all"
                  >
                    06 76 81 59 53
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
