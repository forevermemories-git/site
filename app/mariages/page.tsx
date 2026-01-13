'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Heart, Camera, Users, Clock, Star, CheckCircle, Phone, Sparkles } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import { useRef } from 'react'
import { trackConversion } from '@/app/lib/gtag'

const mariagesFAQs = [
  {
    question: 'Combien de temps dure la location ?',
    answer: 'Nos formules mariage incluent la présence de la Starcam pendant toute votre réception (généralement 4-6h). Vos invités peuvent passer autant de fois qu\'ils le souhaitent, sans limitation.'
  },
  {
    question: 'Quel espace faut-il prévoir ?',
    answer: 'Un espace d\'environ 4m x 3m est idéal. Notre équipe s\'adapte à la configuration de votre salle pour trouver le meilleur emplacement, en intérieur ou extérieur (sous chapiteau).'
  },
  {
    question: 'Les invités repartent-ils vraiment avec leurs vidéos ?',
    answer: 'Oui ! Chaque participant reçoit sa vidéo immédiatement sur son téléphone. De plus, toutes les vidéos sont rassemblées dans une galerie en ligne privée accessible sous 48h.'
  },
  {
    question: 'Combien d\'invités peuvent participer ?',
    answer: 'Il n\'y a pas de limite ! Que vous ayez 50 ou 200 invités, chacun pourra profiter de l\'expérience. En moyenne, un passage dure 1-2 minutes, permettant à tout le monde de passer plusieurs fois dans la soirée.'
  },
  {
    question: 'Intervenez-vous partout en Île-de-France ?',
    answer: 'Oui, nous nous déplaçons dans toute l\'Île-de-France : Paris, Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d\'Oise (95).'
  }
]

// Composant pour les avantages
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
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

      <div className="relative bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 group-hover:border-primary/20 transition-all h-full text-center">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-6 mx-auto group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-cream">{title}</h3>
        <p className="text-cream/50 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

// Composant pour les étapes
function StepCard({ number, title, description, index }: {
  number: number
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex gap-4 group"
    >
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
          {number}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-cream">{title}</h3>
        <p className="text-cream/50 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

// Composant pour les FAQ
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
      className="bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all"
    >
      <h3 className="text-lg font-semibold mb-3 text-cream">{question}</h3>
      <p className="text-cream/50 leading-relaxed">{answer}</p>
    </motion.div>
  )
}

export default function MariagesPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const features = [
    {
      icon: <Star size={28} />,
      title: 'Effet wow garanti',
      description: 'Vos invités se sentiront comme des stars avec des vidéos slow-motion dignes du tapis rouge'
    },
    {
      icon: <Camera size={28} />,
      title: 'Souvenirs cinématographiques',
      description: 'Chaque invité repart avec ses vidéos immédiatement. Qualité Full HD pour un rendu professionnel'
    },
    {
      icon: <Users size={28} />,
      title: 'Animation pour tous',
      description: "Petits et grands adorent ! Une activité conviviale qui crée de l'émulation et des moments de rire"
    }
  ]

  const steps = [
    {
      number: 1,
      title: 'Installation discrète',
      description: 'Notre équipe arrive 1h avant pour installer et tester le matériel. Tout est prêt pour le début de la réception'
    },
    {
      number: 2,
      title: 'Opérateur dédié',
      description: 'Un professionnel reste sur place pour guider vos invités et garantir des vidéos parfaites'
    },
    {
      number: 3,
      title: 'Livraison instantanée',
      description: 'Chaque invité reçoit sa vidéo immédiatement après le passage. Partage instantané sur les réseaux sociaux'
    },
    {
      number: 4,
      title: 'Galerie en ligne',
      description: 'Toutes les vidéos accessibles via un lien privé sous 48h. Conservez ces souvenirs à vie'
    }
  ]

  const inclusions = [
    'Installation et démontage du matériel',
    'Opérateur professionnel présent toute la soirée',
    'Vidéos slow-motion et accélérées en Full HD',
    'Livraison instantanée pour chaque invité',
    'Galerie en ligne privée sous 48h',
    'Durée illimitée de passage',
    'Personnalisation possible avec vos couleurs',
    "Aide à l'animation et ambiance festive"
  ]

  return (
    <>
      <FAQStructuredData faqs={mariagesFAQs} />

      <div className="min-h-screen bg-dark">
        <Breadcrumbs items={[{ name: 'Mariages', href: '/mariages' }]} />

        {/* Hero Section */}
        <section ref={heroRef} className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
          {/* Background elements */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ y: backgroundY }}
          >
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-rose/15 rounded-full blur-[120px]" />
          </motion.div>

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          <div className="container-wide relative z-10">
            <motion.div
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-cream/80 text-sm font-medium mb-8"
              >
                <Heart size={16} className="text-rose fill-rose" />
                Spécial Mariages
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
              >
                <span className="text-cream">La </span>
                <span className="bg-gradient-to-r from-primary-light via-primary to-rose bg-clip-text text-transparent">Starcam</span>
                <span className="text-cream"> pour votre mariage</span>
                <br />
                <span className="text-cream/80 text-3xl md:text-4xl">Une animation glamour inoubliable</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-cream/50 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                Offrez à vos invités une expérience digne des plus grandes cérémonies avec des vidéos slow-motion spectaculaires
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('mariages_hero')}
                  className="btn-primary group"
                >
                  Demander un devis gratuit
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#tarifs" className="btn-secondary">
                  Voir nos formules mariage
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pourquoi la Starcam pour votre mariage */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cream">
                Pourquoi choisir la <span className="gradient-text">Starcam</span> ?
              </h2>
              <p className="text-lg text-cream/50 max-w-2xl mx-auto">
                Une animation qui marquera les esprits et créera des souvenirs inoubliables
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Déroulement */}
        <section className="py-20 md:py-28 bg-dark-lighter relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />

          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cream">
                Comment ça se passe <span className="gradient-text">le jour J</span> ?
              </h2>
              <p className="text-lg text-cream/50">
                Un service clé en main pour un mariage sans stress
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <StepCard key={index} {...step} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Inclus dans nos formules mariage */}
        <section id="tarifs" className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cream">
                Inclus dans nos <span className="gradient-text">formules mariage</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-rose/10 rounded-3xl blur-2xl opacity-50" />

              <div className="relative bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6">
                  {inclusions.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle size={22} className="text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-cream/70 font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Mariage */}
        <section className="py-20 md:py-28 bg-dark-lighter relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cream">
                Questions <span className="gradient-text">fréquentes</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {mariagesFAQs.map((faq, index) => (
                <FAQItem key={index} {...faq} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-dark to-rose/15" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[200px] pointer-events-none" />

          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="badge mb-8 mx-auto"
              >
                <Heart size={14} className="fill-primary" />
                Mariage de rêve
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cream">
                Prêts à offrir un <span className="gradient-text">mariage inoubliable</span> ?
              </h2>

              <p className="text-lg md:text-xl text-cream/60 mb-10 leading-relaxed">
                Demandez votre devis gratuit et personnalisé en 2 minutes
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+33676815953"
                  onClick={() => trackConversion.phoneClick()}
                  className="group px-8 py-4 bg-white text-dark rounded-full font-semibold hover:bg-cream transition-all flex items-center justify-center gap-3"
                >
                  <Phone size={20} />
                  06 76 81 59 53
                </a>
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('mariages_cta')}
                  className="btn-primary"
                >
                  Demander un devis
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
