'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, MapPin, CheckCircle, Phone, Home } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import { useRef } from 'react'
import { trackConversion } from '@/app/lib/gtag'

const seineMarneFAQs = [
  {
    question: 'Intervenez-vous dans toute la Seine-et-Marne ?',
    answer: 'Oui, nous couvrons l\'ensemble du département 77 : Meaux, Melun, Fontainebleau, Provins, Chelles, Pontault-Combault, Torcy, et toutes les autres communes. Notre équipe est basée en Seine-et-Marne, c\'est notre territoire principal.'
  },
  {
    question: 'Le Glambot est-il adapté aux mariages dans les châteaux du 77 ?',
    answer: 'Absolument ! Nous avons l\'habitude des châteaux et domaines de Seine-et-Marne : Château de Fontainebleau, Vaux-le-Vicomte, et de nombreux domaines privés. Notre équipement s\'adapte aux contraintes patrimoniales.'
  },
  {
    question: 'Y a-t-il des frais de déplacement en Seine-et-Marne ?',
    answer: 'Non, aucun frais de déplacement pour la Seine-et-Marne. C\'est notre département d\'implantation, nous nous déplaçons gratuitement dans tout le 77.'
  },
  {
    question: 'Peut-on installer le Glambot en extérieur dans un domaine ?',
    answer: 'Oui, notre Starcam s\'installe aussi bien en intérieur qu\'en extérieur. Pour les installations en plein air, nous recommandons un espace abrité (chapiteau, grange, terrasse couverte) en cas d\'intempéries.'
  },
  {
    question: 'Combien de temps à l\'avance réserver pour un mariage en Seine-et-Marne ?',
    answer: 'La Seine-et-Marne étant très prisée pour les mariages (nombreux châteaux et domaines), nous recommandons de réserver 3-6 mois à l\'avance, surtout pour la saison mai-septembre.'
  }
]

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

export default function GlambotSeineMarnePage() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const zones = [
    { title: 'Nord Seine-et-Marne', cities: ['Meaux', 'Chelles', 'Torcy / Marne-la-Vallée', 'Lagny-sur-Marne', 'Pontault-Combault'] },
    { title: 'Centre Seine-et-Marne', cities: ['Melun', 'Fontainebleau', 'Nemours', 'Brie-Comte-Robert', 'Savigny-le-Temple'] },
    { title: 'Est Seine-et-Marne', cities: ['Provins', 'Coulommiers', 'La Ferté-sous-Jouarre', 'Montereau', 'Nangis'] }
  ]

  const venues = [
    {
      title: 'Châteaux & Domaines',
      description: 'Le 77 est réputé pour ses châteaux majestueux : Fontainebleau, Vaux-le-Vicomte, et de nombreux domaines privés. Notre Glambot apporte une touche Hollywood à ces lieux chargés d\'histoire.',
      features: ['Adaptation aux contraintes patrimoniales', 'Installation discrète et respectueuse']
    },
    {
      title: 'Granges & Corps de ferme',
      description: 'Les granges rénovées et corps de ferme du 77 offrent un cadre champêtre et authentique. Notre Starcam s\'intègre parfaitement à ces ambiances rustiques chic.',
      features: ['Installation intérieure ou extérieure', 'Éclairage adapté aux lieux atypiques']
    }
  ]

  const advantages = [
    { label: 'Aucun frais de déplacement' },
    { label: 'Visite technique gratuite' },
    { label: 'Connaissance des lieux' }
  ]

  return (
    <>
      <FAQStructuredData faqs={seineMarneFAQs} />

      <div ref={sectionRef} className="min-h-screen bg-dark">
        <Breadcrumbs items={[{ name: 'Glambot Seine-et-Marne', href: '/glambot-seine-et-marne' }]} />

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
                Seine-et-Marne (77)
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
              >
                <span className="text-cream">Location </span>
                <span className="bg-gradient-to-r from-primary-light via-primary to-rose bg-clip-text text-transparent">Glambot</span>
                <span className="text-cream"> en Seine-et-Marne</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-cream/50 mb-10 max-w-3xl mx-auto"
              >
                Notre territoire d'implantation ! Profitez de notre expertise locale pour des vidéos slow-motion exceptionnelles dans les plus beaux lieux du 77
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

        {/* Notre avantage local */}
        <section className="py-20 md:py-32 bg-dark-lighter relative overflow-hidden">
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-rose/5 rounded-3xl blur-xl" />

              <div className="relative bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-rose/20 flex items-center justify-center flex-shrink-0">
                    <Home size={32} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-cream">Notre territoire, notre expertise</h2>
                    <p className="text-primary font-medium">Basés en Seine-et-Marne depuis nos débuts</p>
                  </div>
                </div>

                <p className="text-lg text-cream/60 mb-8 leading-relaxed">
                  Forever Memories est implanté en Seine-et-Marne. Nous connaissons parfaitement les lieux de réception du département : châteaux, domaines, salles des fêtes, hôtels. Cette connaissance locale nous permet de vous conseiller et de nous adapter aux spécificités de chaque lieu.
                </p>

                <div className="flex flex-wrap gap-3">
                  {advantages.map((adv, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium text-sm"
                    >
                      <CheckCircle size={16} />
                      {adv.label}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Villes principales */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose/10 rounded-full blur-[150px]" />

          <div className="container-wide relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-cream"
            >
              Nous intervenons dans <span className="gradient-text">tout le 77</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-6">
              {zones.map((zone, index) => (
                <ZoneCard key={index} {...zone} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Lieux emblématiques */}
        <section className="py-20 md:py-32 bg-dark-lighter relative overflow-hidden">
          <div className="container-wide relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-center mb-4 text-cream"
            >
              Les plus beaux lieux du <span className="gradient-text">77</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center text-cream/50 mb-12 max-w-2xl mx-auto"
            >
              La Seine-et-Marne regorge de lieux d'exception pour vos événements. Notre Starcam sublime chacun d'entre eux.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8">
              {venues.map((venue, index) => (
                <VenueCard key={index} {...venue} index={index} />
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
                {seineMarneFAQs.map((faq, index) => (
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
                  Votre événement en Seine-et-Marne mérite le meilleur
                </h2>
                <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                  Profitez de notre expertise locale. Devis gratuit et personnalisé sous 24h.
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
                    onClick={() => trackConversion('phone_click', 'glambot-77')}
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
