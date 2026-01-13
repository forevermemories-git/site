'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Crown, Award, Sparkles, Star, CheckCircle, Phone, Shield, Users, Camera, Gem, Trophy } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import { useRef } from 'react'
import { trackConversion } from '@/app/lib/gtag'

const galasFAQs = [
  {
    question: 'Quelle est la différence avec une prestation standard ?',
    answer: 'Notre offre Gala inclut des éléments premium : tapis rouge de 6m, barrières VIP chromées, équipe en tenue de soirée (smoking/robe), branding complet de vos vidéos, et un chef de projet dédié pour coordonner avec votre équipe événementielle.'
  },
  {
    question: 'Pouvez-vous vous intégrer à une scénographie existante ?',
    answer: 'Absolument. Nous travaillons régulièrement avec des agences événementielles et scénographes. Notre équipe technique peut s\'adapter à vos contraintes (couleurs, positionnement, timing) et se coordonner avec vos autres prestataires.'
  },
  {
    question: 'Quel délai pour la personnalisation des vidéos avec notre branding ?',
    answer: 'Nous recommandons de nous transmettre vos éléments graphiques (logo HD, charte couleurs) au moins 2 semaines avant l\'événement. Pour des demandes complexes (animation logo, intro personnalisée), prévoir 3 semaines.'
  },
  {
    question: 'Proposez-vous un service pour les invités VIP ?',
    answer: 'Oui, nous pouvons mettre en place un "fast pass" pour vos invités d\'honneur : accès prioritaire, opérateur dédié, et même des vidéos avec un traitement spécial (ralenti plus prononcé, montage différent).'
  },
  {
    question: 'Les vidéos peuvent-elles être diffusées en direct ?',
    answer: 'Oui ! Nous pouvons projeter les vidéos en temps réel sur un écran dans la salle. Effet garanti quand les invités se voient apparaître en slow-motion quelques secondes après leur passage.'
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
      className="text-center p-8"
    >
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center mx-auto mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-cream">{title}</h3>
      <p className="text-cream/50 leading-relaxed">{description}</p>
    </motion.div>
  )
}

function GalaTypeCard({ icon, iconColor, bgColor, title, description, tags, index }: {
  icon: React.ReactNode
  iconColor: string
  bgColor: string
  title: string
  description: string
  tags: { label: string; color: string }[]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-amber-500/30 transition-all"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-14 h-14 rounded-xl ${bgColor} flex items-center justify-center flex-shrink-0`}>
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-cream">{title}</h3>
          <p className="text-cream/50">{description}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
        {tags.map((tag, i) => (
          <span key={i} className={`px-3 py-1 ${tag.color} text-xs rounded-full font-medium`}>
            {tag.label}
          </span>
        ))}
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
      className="bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-amber-500/20 transition-all"
    >
      <h3 className="text-lg font-semibold mb-3 text-cream">{question}</h3>
      <p className="text-cream/50 leading-relaxed">{answer}</p>
    </motion.div>
  )
}

export default function GalasPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const features = [
    { icon: <Crown size={36} className="text-amber-500" />, title: 'Service White Glove', description: 'Chef de projet dédié, coordination avec vos équipes, répétition technique possible la veille. Rien n\'est laissé au hasard.' },
    { icon: <Award size={36} className="text-amber-500" />, title: 'Branding sur-mesure', description: 'Vos couleurs, votre logo, votre univers graphique intégrés aux vidéos. Un prolongement parfait de votre identité visuelle.' },
    { icon: <Shield size={36} className="text-amber-500" />, title: 'Discrétion absolue', description: 'Équipe formée aux codes des événements privés. Confidentialité garantie, matériel et véhicules neutres.' }
  ]

  const galaTypes = [
    {
      icon: <Trophy size={28} className="text-purple-400" />,
      iconColor: 'text-purple-400',
      bgColor: 'bg-gradient-to-br from-purple-500/20 to-purple-600/10',
      title: 'Cérémonies de remise de prix',
      description: 'Trophées sportifs, prix professionnels, awards d\'entreprise... Les lauréats repartent avec une vidéo mémorable.',
      tags: [
        { label: 'Trophées du Sport', color: 'bg-purple-500/20 text-purple-300' },
        { label: 'Awards Corporate', color: 'bg-purple-500/20 text-purple-300' },
        { label: 'Prix Associatifs', color: 'bg-purple-500/20 text-purple-300' }
      ]
    },
    {
      icon: <Sparkles size={28} className="text-red-400" />,
      iconColor: 'text-red-400',
      bgColor: 'bg-gradient-to-br from-red-500/20 to-red-600/10',
      title: 'Galas de charité',
      description: 'Une animation qui valorise vos donateurs et génère du contenu partageable pour amplifier votre cause.',
      tags: [
        { label: 'Fondations', color: 'bg-red-500/20 text-red-300' },
        { label: 'ONG', color: 'bg-red-500/20 text-red-300' },
        { label: 'Associations', color: 'bg-red-500/20 text-red-300' }
      ]
    },
    {
      icon: <Users size={28} className="text-blue-400" />,
      iconColor: 'text-blue-400',
      bgColor: 'bg-gradient-to-br from-blue-500/20 to-blue-600/10',
      title: 'Soirées annuelles & conventions',
      description: 'Le point d\'orgue de votre année. Une animation premium qui récompense vos équipes.',
      tags: [
        { label: 'Kick-off', color: 'bg-blue-500/20 text-blue-300' },
        { label: 'Conventions', color: 'bg-blue-500/20 text-blue-300' },
        { label: 'Anniversaires d\'entreprise', color: 'bg-blue-500/20 text-blue-300' }
      ]
    },
    {
      icon: <Gem size={28} className="text-amber-400" />,
      iconColor: 'text-amber-400',
      bgColor: 'bg-gradient-to-br from-amber-500/20 to-amber-600/10',
      title: 'Événements privés haut de gamme',
      description: 'Mariages de luxe, anniversaires prestigieux, fêtes privées... Pour ceux qui veulent le meilleur.',
      tags: [
        { label: 'Mariages Prestige', color: 'bg-amber-500/20 text-amber-300' },
        { label: 'Anniversaires VIP', color: 'bg-amber-500/20 text-amber-300' },
        { label: 'Réceptions Privées', color: 'bg-amber-500/20 text-amber-300' }
      ]
    }
  ]

  const prestigeInclusions = [
    'Installation tapis rouge complète',
    'Backdrop personnalisé',
    '2 opérateurs en tenue de soirée',
    'Branding vidéo complet',
    'Galerie privée brandée',
    'Montage récapitulatif offert'
  ]

  return (
    <>
      <FAQStructuredData faqs={galasFAQs} />

      <div className="min-h-screen bg-dark">
        <Breadcrumbs items={[{ name: 'Galas & Prestige', href: '/galas' }]} />

        {/* Hero Section - Luxe */}
        <section ref={heroRef} className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ y: backgroundY }}
          >
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-amber-600/10 rounded-full blur-[120px]" />
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
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-300 text-sm font-medium mb-8"
              >
                <Crown size={16} className="text-amber-400" />
                Prestations de prestige
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
              >
                <span className="text-cream">L'expérience</span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-300 bg-clip-text text-transparent">tapis rouge</span>
                <br />
                <span className="text-cream">pour vos galas</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-cream/50 mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                Une technologie robotique de pointe pour des vidéos slow-motion spectaculaires. Désormais disponible pour vos événements de prestige.
              </motion.p>

              {/* Références */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-cream/40"
              >
                <span className="flex items-center gap-2">
                  <Trophy size={16} className="text-amber-400" /> Technologie premium
                </span>
                <span className="flex items-center gap-2">
                  <Star size={16} className="text-amber-400" /> Qualité cinématographique
                </span>
                <span className="flex items-center gap-2">
                  <Gem size={16} className="text-amber-400" /> Galas Fortune 500
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('galas_hero')}
                  className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-dark rounded-full font-semibold hover:from-amber-400 hover:to-amber-500 transition-all flex items-center justify-center gap-2"
                >
                  Demander une proposition
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+33676815953"
                  onClick={() => trackConversion.phoneClick()}
                  className="px-8 py-4 border border-cream/20 text-cream font-medium hover:border-amber-500/50 hover:text-amber-300 rounded-full transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={18} />
                  Appeler directement
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Ce qui nous différencie */}
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
                Une prestation à la hauteur de <span className="text-amber-400">vos exigences</span>
              </h2>
              <p className="text-lg text-cream/50 max-w-2xl mx-auto">
                Pour les événements où chaque détail compte
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Types de galas */}
        <section className="py-20 md:py-28 bg-dark-lighter relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[200px] pointer-events-none" />

          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cream">
                Expertise dans tous types de <span className="text-amber-400">galas</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {galaTypes.map((gala, index) => (
                <GalaTypeCard key={index} {...gala} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* L'expérience tapis rouge */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium mb-6"
                >
                  <Star size={16} />
                  L'expérience complète
                </motion.div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cream">
                  Recréez l'atmosphère des <span className="text-amber-400">plus grandes cérémonies</span>
                </h2>

                <p className="text-lg text-cream/50 mb-8">
                  Vos invités foulent un véritable tapis rouge, passent devant un mur de marque personnalisé, et repartent avec une vidéo digne des plus grands red carpets.
                </p>

                <div className="space-y-6">
                  {[
                    { title: 'Tapis rouge premium 6 mètres', desc: 'Avec barrières chromées et poteaux à cordes dorées' },
                    { title: 'Backdrop personnalisé grand format', desc: 'Imprimé avec votre logo et identité visuelle' },
                    { title: 'Équipe en tenue de soirée', desc: 'Smoking et robes de soirée pour s\'intégrer parfaitement' },
                    { title: 'Éclairage professionnel', desc: 'Projecteurs cinéma pour un rendu optimal' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <CheckCircle size={24} className="text-amber-400 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-cream">{item.title}</h4>
                        <p className="text-cream/40 text-sm">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-3xl blur-2xl opacity-50" />

                <div className="relative bg-dark-card/80 backdrop-blur-sm border border-amber-500/20 rounded-3xl p-8 text-center">
                  <div className="text-6xl mb-6">🏆</div>
                  <h3 className="text-2xl font-bold mb-4 text-cream">Formule Prestige</h3>
                  <p className="text-cream/40 mb-6">Tout inclus pour une expérience irréprochable</p>

                  <ul className="text-left space-y-3 mb-8">
                    {prestigeInclusions.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-center gap-2 text-cream/70"
                      >
                        <CheckCircle size={18} className="text-amber-400" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    onClick={() => trackConversion.devisClick('galas_prestige')}
                    className="block w-full px-6 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-dark rounded-full font-semibold hover:from-amber-400 hover:to-amber-500 transition-all text-center"
                  >
                    Demander un devis Prestige
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Diffusion en direct */}
        <section className="py-20 md:py-28 bg-dark-lighter relative overflow-hidden">
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-cream">
                Option : diffusion en direct sur <span className="text-amber-400">grand écran</span>
              </h2>
              <p className="text-lg text-cream/50 max-w-3xl mx-auto">
                Imaginez : vos invités passent devant la Starcam, et quelques secondes plus tard, leur vidéo slow-motion apparaît sur l'écran géant de la salle.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { emoji: '📺', title: 'Projection instantanée', description: 'Les vidéos s\'affichent en temps réel sur vos écrans. Créez un moment de partage collectif.' },
                { emoji: '🎬', title: 'Mosaïque des meilleurs moments', description: 'En fin de soirée, compilation automatique des meilleures vidéos diffusée sur écran.' },
                { emoji: '🔗', title: 'Compatible tous systèmes', description: 'HDMI, réseau, streaming... On s\'adapte à votre infrastructure technique.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl hover:border-amber-500/20 transition-all"
                >
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="font-bold text-lg mb-2 text-cream">{item.title}</h3>
                  <p className="text-cream/50 text-sm">{item.description}</p>
                </motion.div>
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
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cream">
                Questions <span className="text-amber-400">fréquentes</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {galasFAQs.map((faq, index) => (
                <FAQItem key={index} {...faq} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-900/30 via-dark to-amber-800/20" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/15 rounded-full blur-[200px] pointer-events-none" />

          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <Crown size={48} className="text-amber-400 mx-auto mb-6" />

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cream">
                Votre gala mérite <span className="text-amber-400">l'excellence</span>
              </h2>

              <p className="text-lg md:text-xl text-cream/60 mb-10">
                Discutons de votre projet. Nous vous proposerons une solution sur-mesure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+33676815953"
                  onClick={() => trackConversion.phoneClick()}
                  className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-dark rounded-full font-semibold hover:from-amber-400 hover:to-amber-500 transition-all flex items-center justify-center gap-3"
                >
                  <Phone size={20} />
                  06 76 81 59 53
                </a>
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('galas_cta')}
                  className="px-8 py-4 border border-cream/20 text-cream rounded-full font-semibold hover:border-amber-500/50 hover:text-amber-300 transition-all"
                >
                  Demander une proposition
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
