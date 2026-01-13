'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MapPin, Phone, Clock, CheckCircle } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import { useRef } from 'react'
import { trackConversion } from '@/app/lib/gtag'

const valDeMarneFAQs = [
  {
    question: 'Dans quelles villes du Val-de-Marne intervenez-vous ?',
    answer: 'Nous couvrons tout le Val-de-Marne : Créteil, Vincennes, Saint-Maur-des-Fossés, Champigny-sur-Marne, Vitry-sur-Seine, Ivry-sur-Seine, Maisons-Alfort, Nogent-sur-Marne, et toutes les autres communes du 94.'
  },
  {
    question: 'Y a-t-il des frais de déplacement pour le Val-de-Marne ?',
    answer: 'Non, le Val-de-Marne fait partie de la petite couronne parisienne, notre zone d\'intervention principale. Aucun frais de déplacement supplémentaire ne s\'applique pour le 94.'
  },
  {
    question: 'Quels lieux de réception du 94 connaissez-vous ?',
    answer: 'Nous avons déjà travaillé dans de nombreux lieux du Val-de-Marne : bords de Marne, espaces événementiels de Créteil, salles de Vincennes, restaurants avec vue, péniches... Nous connaissons bien le département.'
  },
  {
    question: 'Le Glambot peut-il être installé en bord de Marne ?',
    answer: 'Oui, nous adorons les installations en bord de Marne ! Le cadre naturel et verdoyant offre un décor magnifique pour nos vidéos slow-motion. Nous prévoyons un abri en cas de météo incertaine.'
  },
  {
    question: 'Proposez-vous des formules adaptées aux événements du 94 ?',
    answer: 'Nos formules sont les mêmes pour toute l\'Île-de-France, avec des tarifs adaptés à la durée et au type d\'événement. Contactez-nous pour un devis personnalisé selon vos besoins.'
  }
]

// Advantage Card Component
function AdvantageCard({ icon, title, description, index }: {
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

// Zone Card Component
function ZoneCard({ title, cities, index }: {
  title: string
  cities: string[]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-dark-card/30 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all"
    >
      <h3 className="text-xl font-bold mb-4 text-cream">{title}</h3>
      <ul className="space-y-2">
        {cities.map((city, i) => (
          <li key={i} className="flex items-center gap-2 text-cream/60">
            <MapPin size={16} className="text-primary flex-shrink-0" />
            {city}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

// Venue Card Component
function VenueCard({ title, description, features, index }: {
  title: string
  description: string
  features: string[]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all"
    >
      <h3 className="text-xl font-bold mb-4 text-cream">{title}</h3>
      <p className="text-cream/50 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-cream/60">
            <CheckCircle size={16} className="text-primary flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
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

export default function GlambotValDeMarnePage() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const advantages = [
    { icon: <MapPin size={32} />, title: 'Petite couronne', description: 'Le Val-de-Marne fait partie de notre zone d\'intervention prioritaire, sans frais supplémentaires.' },
    { icon: <Clock size={32} />, title: 'Réactivité', description: 'Proximité immédiate avec Paris et notre base. Installation rapide et flexible selon vos contraintes.' },
    { icon: <CheckCircle size={32} />, title: 'Connaissance locale', description: 'Nous connaissons les lieux emblématiques du 94 et savons nous adapter à chaque configuration.' }
  ]

  const zones = [
    { title: 'Ouest du 94', cities: ['Vincennes', 'Saint-Mandé', 'Charenton-le-Pont', 'Ivry-sur-Seine', 'Vitry-sur-Seine'] },
    { title: 'Centre du 94', cities: ['Créteil', 'Maisons-Alfort', 'Alfortville', 'Saint-Maurice', 'Joinville-le-Pont'] },
    { title: 'Est du 94', cities: ['Saint-Maur-des-Fossés', 'Champigny-sur-Marne', 'Nogent-sur-Marne', 'Le Perreux-sur-Marne', 'Fontenay-sous-Bois'] }
  ]

  const venues = [
    {
      title: 'Bords de Marne',
      description: 'Les guinguettes et espaces en bord de Marne offrent un cadre bucolique et festif. Notre Starcam capture parfaitement l\'atmosphère champêtre et conviviale de ces lieux uniques.',
      features: ['Ambiance guinguette', 'Décor naturel verdoyant']
    },
    {
      title: 'Bois de Vincennes',
      description: 'Le Bois de Vincennes et ses alentours proposent des espaces événementiels uniques. Parc Floral, Château de Vincennes, restaurants avec jardin...',
      features: ['Cadre prestigieux', 'Espaces verts exceptionnels']
    }
  ]

  const events = [
    { href: '/mariages', title: 'Mariages', description: 'Guinguettes, espaces bord de Marne, salles de réception' },
    { href: '/evenements-corporate', title: 'Corporate', description: 'Séminaires, team building, soirées d\'entreprise' },
    { href: '/galas', title: 'Galas', description: 'Soirées associatives, événements caritatifs' },
    { href: '/anniversaires', title: 'Anniversaires', description: 'Fêtes privées, anniversaires en famille' }
  ]

  return (
    <>
      <FAQStructuredData faqs={valDeMarneFAQs} />

      <div ref={sectionRef} className="min-h-screen bg-dark">
        <Breadcrumbs items={[{ name: 'Glambot Val-de-Marne', href: '/glambot-val-de-marne' }]} />

        {/* Hero Section */}
        <section className="relative pt-28 md:pt-32 pb-20 md:pb-32 overflow-hidden">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ y: backgroundY }}
          >
            <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[150px]" />
            <div className="absolute top-40 -right-32 w-80 h-80 bg-rose/10 rounded-full blur-[120px]" />
          </motion.div>

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
                Val-de-Marne (94)
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
              >
                <span className="text-cream">Location </span>
                <span className="bg-gradient-to-r from-primary-light via-primary to-rose bg-clip-text text-transparent">Glambot</span>
                <span className="text-cream"> dans le Val-de-Marne</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-cream/50 mb-10 max-w-3xl mx-auto"
              >
                Des vidéos slow-motion spectaculaires pour vos événements dans le 94 : bords de Marne, espaces verts, et lieux de réception modernes
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

        {/* Avantage petite couronne */}
        <section className="py-20 md:py-32 bg-dark-lighter relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className="grid md:grid-cols-3 gap-8">
              {advantages.map((adv, index) => (
                <AdvantageCard key={index} {...adv} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose/10 rounded-full blur-[150px]" />

          <div className="container-wide relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-cream"
            >
              Nous intervenons dans tout le <span className="gradient-text">Val-de-Marne</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {zones.map((zone, index) => (
                <ZoneCard key={index} {...zone} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Lieux spécifiques */}
        <section className="py-20 md:py-32 bg-dark-lighter relative overflow-hidden">
          <div className="container-wide relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-4 text-cream"
            >
              Les plus beaux cadres du <span className="gradient-text">Val-de-Marne</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center text-cream/50 mb-12 max-w-2xl mx-auto"
            >
              Le 94 offre des lieux variés et charmants pour vos événements. Notre Glambot s'adapte à chaque ambiance.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8">
              {venues.map((venue, index) => (
                <VenueCard key={index} {...venue} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Types d'événements */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-cream"
            >
              Tous vos événements dans le <span className="gradient-text">94</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {events.map((event, index) => (
                <EventLink key={index} {...event} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-dark-lighter relative overflow-hidden">
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
                {valDeMarneFAQs.map((faq, index) => (
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
                  Votre événement dans le Val-de-Marne vous attend
                </h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                  Devis gratuit et personnalisé sous 24h. Aucun frais de déplacement.
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
                    onClick={() => trackConversion('phone_click', 'glambot-94')}
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
