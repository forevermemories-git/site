'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Building2, Camera, Users, TrendingUp, Star, CheckCircle, Sparkles, Share2, Phone } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import { useRef } from 'react'
import { trackConversion } from '@/app/lib/gtag'

const corporateFAQs = [
  {
    question: 'Quel est le délai pour personnaliser les vidéos avec notre logo ?',
    answer: 'Nous recommandons de nous transmettre vos éléments graphiques (logo, charte couleurs) au moins 7 jours avant l\'événement. Cela nous permet de créer et valider avec vous le rendu des vidéos personnalisées.'
  },
  {
    question: 'Combien de personnes peuvent utiliser la Starcam lors d\'un événement ?',
    answer: 'Il n\'y a pas de limite ! Que vous ayez 50 ou 500 participants, chacun peut profiter de l\'expérience. En moyenne, nous réalisons 100 à 200 vidéos lors d\'un événement de 4 heures.'
  },
  {
    question: 'Peut-on récupérer toutes les vidéos pour notre communication ?',
    answer: 'Absolument ! Vous recevez un accès administrateur à la galerie en ligne vous permettant de télécharger toutes les vidéos. Vous pouvez ensuite les utiliser pour votre communication corporate (avec accord des participants).'
  },
  {
    question: 'Quelles sont les contraintes techniques sur site ?',
    answer: 'Nous avons besoin d\'un espace d\'environ 4m x 3m et d\'une prise électrique standard. Notre équipe s\'adapte à la configuration de votre lieu (intérieur, extérieur sous chapiteau, stand de salon, etc.).'
  },
  {
    question: 'Proposez-vous des forfaits pour plusieurs événements ?',
    answer: 'Oui ! Pour les entreprises organisant plusieurs événements dans l\'année, nous proposons des formules avantageuses. Contactez-nous pour un devis personnalisé adapté à vos besoins.'
  },
  {
    question: 'Peut-on avoir une démo avant de réserver ?',
    answer: 'Nous pouvons organiser une démo sur mesure dans vos locaux ou vous présenter des exemples concrets de nos réalisations corporate. N\'hésitez pas à nous contacter pour planifier une rencontre.'
  }
]

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

function UseCaseCard({ icon, title, description, index }: {
  icon: React.ReactNode
  title: string
  description: string
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
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2 text-cream">{title}</h3>
          <p className="text-cream/50 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

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

function StepCard({ number, title, description, index }: {
  number: number
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
      className="bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all"
    >
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center font-bold text-xl mb-4">
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-cream">{title}</h3>
      <p className="text-cream/50 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

export default function EvenementsCorporatePage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const features = [
    { icon: <Share2 size={28} />, title: 'Prestation exclusive', description: 'Quasi aucun autre prestataire en France ne propose cette technologie. Démarquez-vous avec une animation que vos concurrents n\'ont pas' },
    { icon: <Sparkles size={28} />, title: 'Branding puissant', description: 'Créez une association forte entre votre marque et l\'innovation. Vos vidéos personnalisées deviennent un outil de branding mémorable' },
    { icon: <TrendingUp size={28} />, title: 'Impact professionnel', description: 'Donnez un côté ultra-professionnel et prestigieux à vos événements. Engagez vos collaborateurs avec une expérience qu\'ils ne verront nulle part ailleurs' }
  ]

  const useCases = [
    { icon: <Star size={24} />, title: 'Lancements de produits', description: 'Créez le buzz autour de votre nouveau produit. Vos invités deviennent des ambassadeurs en partageant leurs vidéos' },
    { icon: <Users size={24} />, title: 'Team building & séminaires', description: 'Renforcez la cohésion d\'équipe avec une activité ludique et fédératrice. Des souvenirs partagés qui durent' },
    { icon: <Building2 size={24} />, title: 'Soirées d\'entreprise', description: 'Anniversaires d\'entreprise, vœux, cérémonies de récompenses. Une animation premium pour vos collaborateurs' },
    { icon: <Camera size={24} />, title: 'Salons & conférences', description: 'Attirez les visiteurs sur votre stand et créez de l\'engagement. Un contenu unique pour vos réseaux sociaux' }
  ]

  const steps = [
    { number: 1, title: 'Briefing détaillé', description: 'Nous comprenons vos objectifs, votre audience et vos besoins en branding' },
    { number: 2, title: 'Préparation personnalisée', description: 'Création des éléments brandés, préparation technique et logistique' },
    { number: 3, title: 'Prestation sur site', description: 'Installation, animation et gestion complète par notre équipe professionnelle' },
    { number: 4, title: 'Suivi post-événement', description: 'Livraison de la galerie et rapport de statistiques sous 48h' }
  ]

  const inclusions = [
    'Installation et démontage complets',
    'Opérateur professionnel dédié',
    'Vidéos slow-motion et accélérées Full HD',
    'Livraison instantanée pour chaque participant',
    'Galerie en ligne privée sous 48h',
    'Personnalisation logo et couleurs',
    'Rapport de statistiques post-événement',
    'Support technique sur site'
  ]

  return (
    <>
      <FAQStructuredData faqs={corporateFAQs} />

      <div className="min-h-screen bg-dark">
        <Breadcrumbs items={[{ name: 'Événements Corporate', href: '/evenements-corporate' }]} />

        {/* Hero Section */}
        <section ref={heroRef} className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ y: backgroundY }}
          >
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-rose/10 rounded-full blur-[120px]" />
          </motion.div>

          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />

          <div className="container-wide relative z-10">
            <motion.div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-cream/80 text-sm font-medium mb-8"
              >
                <Building2 size={16} className="text-primary" />
                Événements Corporate
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
              >
                <span className="text-cream">La </span>
                <span className="gradient-text-full">Starcam</span>
                <span className="text-cream"> pour vos événements pro</span>
                <br />
                <span className="text-cream/80 text-3xl md:text-4xl">Une animation qui marque les esprits</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-cream/50 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                Une prestation unique en France : valorisez votre marque, engagez vos collaborateurs et donnez un côté ultra-professionnel à vos événements
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('corporate_hero')}
                  className="btn-primary group"
                >
                  Demander un devis entreprise
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#usages" className="btn-secondary">
                  Voir les cas d'usage
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pourquoi la Starcam */}
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
                Pourquoi intégrer la <span className="gradient-text">Starcam</span> ?
              </h2>
              <p className="text-lg text-cream/50 max-w-2xl mx-auto">
                Une technologie rare et exclusive pour marquer les esprits
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Cas d'usage */}
        <section id="usages" className="py-20 md:py-28 bg-dark-lighter relative overflow-hidden">
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
                Cas d'usage <span className="gradient-text">corporate</span>
              </h2>
              <p className="text-lg text-cream/50">
                Une solution adaptée à tous vos événements professionnels
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {useCases.map((useCase, index) => (
                <UseCaseCard key={index} {...useCase} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Personnalisation */}
        <section className="py-20 md:py-28 relative overflow-hidden">
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
                Personnalisation <span className="gradient-text">sur-mesure</span>
              </h2>
              <p className="text-lg text-cream/50">
                Une expérience qui renforce votre identité de marque
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {[
                  { title: 'Branding vidéo', description: 'Intégrez votre logo, vos couleurs et votre baseline directement dans les vidéos' },
                  { title: 'Décor personnalisé', description: 'Backdrop aux couleurs de votre entreprise, signalétique sur-mesure' },
                  { title: 'Galerie privée brandée', description: 'Plateforme en ligne personnalisée pour accéder à toutes les vidéos de l\'événement' },
                  { title: 'Statistiques détaillées', description: 'Rapport post-événement avec métriques d\'engagement et de viralité' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1 text-cream">{item.title}</h3>
                      <p className="text-cream/50">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-rose/10 rounded-3xl blur-2xl opacity-50" />

                <div className="relative bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-cream text-center">Inclus dans nos prestations</h3>
                  <div className="space-y-3">
                    {inclusions.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle size={18} className="text-primary flex-shrink-0" />
                        <span className="text-cream/70">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 md:py-28 bg-dark-lighter relative overflow-hidden">
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cream">
                Notre <span className="gradient-text">process</span>
              </h2>
              <p className="text-lg text-cream/50">
                Un accompagnement de bout en bout
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <StepCard key={index} {...step} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
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
                Questions <span className="gradient-text">fréquentes</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {corporateFAQs.map((faq, index) => (
                <FAQItem key={index} {...faq} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-dark to-rose/10" />
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
                <Building2 size={14} />
                Événements pro
              </motion.div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cream">
                Prêts à marquer votre <span className="gradient-text">prochain événement</span> ?
              </h2>

              <p className="text-lg md:text-xl text-cream/60 mb-10 leading-relaxed">
                Discutons de votre projet et recevez un devis personnalisé sous 24h
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
                  onClick={() => trackConversion.devisClick('corporate_cta')}
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
