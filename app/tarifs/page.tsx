'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Check, Star, Heart, Building2, PartyPopper, Crown, Phone, Sparkles, MapPin } from 'lucide-react'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import { useRef } from 'react'
import { trackConversion } from '@/app/lib/gtag'

// Composant pour les cartes de formule
function PricingCard({ icon, title, duration, features, description, isPopular = false, isPremium = false, index }: {
  icon: React.ReactNode
  title: string
  duration: string
  features: string[]
  description: string
  isPopular?: boolean
  isPremium?: boolean
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={`relative group h-full ${isPopular || isPremium ? 'z-10' : ''}`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1.5 bg-primary text-white text-sm font-semibold rounded-full z-20">
          Populaire
        </div>
      )}

      <div className={`absolute inset-0 rounded-3xl transition-opacity duration-300 blur-xl ${
        isPopular || isPremium ? 'bg-gradient-to-br from-primary/30 to-rose/20 opacity-50 group-hover:opacity-70' : 'bg-primary/20 opacity-0 group-hover:opacity-100'
      }`} />

      <div className={`relative h-full bg-dark-card/50 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 flex flex-col ${
        isPopular || isPremium ? 'border-primary/30' : 'border-white/5 group-hover:border-primary/20'
      }`}>
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 ${
          isPremium ? 'bg-primary text-white' : 'bg-primary/20 text-primary'
        }`}>
          {icon}
        </div>

        <h3 className="text-2xl font-bold mb-2 text-cream">{title}</h3>

        <div className="mb-6">
          <div className="text-cream/50 text-sm">{duration}</div>
        </div>

        <ul className="space-y-3 mb-8 flex-grow">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check size={18} className="text-primary flex-shrink-0 mt-0.5" />
              <span className="text-cream/70 text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="text-sm text-cream/40 italic">{description}</div>
      </div>
    </motion.div>
  )
}

// Composant pour les options
function OptionCard({ title, description, index }: {
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
      whileHover={{ y: -3 }}
      className="bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all"
    >
      <h3 className="text-lg font-semibold mb-2 text-cream">{title}</h3>
      <p className="text-cream/50 text-sm">{description}</p>
    </motion.div>
  )
}

// Composant pour les liens d'événements
function EventLink({ href, emoji, label, index }: {
  href: string
  emoji: string
  label: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={href}
        className="group block p-5 bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-xl hover:border-primary/30 transition-all text-center"
      >
        <div className="text-3xl mb-2">{emoji}</div>
        <div className="font-semibold text-cream group-hover:text-primary transition-colors">{label}</div>
      </Link>
    </motion.div>
  )
}

export default function TarifsPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const formules = [
    {
      icon: <PartyPopper size={24} />,
      title: 'Essentielle',
      duration: '3 heures de prestation',
      features: [
        'Installation et démontage',
        'Opérateur professionnel 3h',
        'Vidéos slow-motion Full HD',
        'Livraison instantanée',
        'Galerie en ligne 48h',
        'Passages illimités'
      ],
      description: 'Idéal pour petits événements et anniversaires'
    },
    {
      icon: <Heart size={24} />,
      title: 'Mariage',
      duration: '4-6 heures de prestation',
      features: [
        'Tout de la formule Essentielle',
        'Opérateur toute la soirée',
        'Personnalisation couleurs mariage',
        'Backdrop personnalisé',
        'Animation et ambiance',
        'Galerie premium mariés'
      ],
      description: 'La formule préférée des mariés',
      isPopular: true
    },
    {
      icon: <Building2 size={24} />,
      title: 'Corporate',
      duration: '4 heures minimum',
      features: [
        'Tout de la formule Essentielle',
        'Branding vidéo avec logo',
        'Backdrop aux couleurs entreprise',
        'Galerie privée brandée',
        'Rapport de statistiques',
        'Support dédié'
      ],
      description: 'Activation de marque et engagement'
    },
    {
      icon: <Crown size={24} />,
      title: 'Premium Gala',
      duration: 'Prestation sur-mesure',
      features: [
        'Tout de la formule Corporate',
        'Tapis rouge personnalisé',
        'Barrières VIP',
        'Équipe en tenue de soirée',
        'Montage vidéo récapitulatif',
        'Service concierge dédié'
      ],
      description: "L'excellence pour vos événements de prestige",
      isPremium: true
    }
  ]

  const options = [
    { title: 'Heure supplémentaire', description: 'Prolongez la magie avec des heures additionnelles' },
    { title: 'Tapis rouge premium', description: 'Installation complète avec barrières VIP et signalétique' },
    { title: 'Montage vidéo événement', description: 'Compilation professionnelle des meilleurs moments' },
    { title: 'Backdrop personnalisé XXL', description: 'Décor sur-mesure aux dimensions et couleurs de votre choix' },
    { title: 'Second opérateur', description: 'Pour les événements avec fort affluence' },
    { title: 'Accessoires & props', description: 'Lunettes, chapeaux, accessoires glamour personnalisés' }
  ]

  const inclus = [
    'Transport et installation sur site en Île-de-France',
    'Opérateur professionnel formé et expérimenté',
    'Matériel de dernière génération (robot, éclairage, son)',
    'Vidéos en qualité Full HD professionnelle',
    'Livraison instantanée pour chaque participant',
    'Galerie en ligne privée accessible sous 48h',
    'Passages illimités pour tous vos invités'
  ]

  const departements = [
    'Paris (75)',
    'Seine-et-Marne (77)',
    'Yvelines (78)',
    'Essonne (91)',
    'Hauts-de-Seine (92)',
    'Seine-Saint-Denis (93)',
    'Val-de-Marne (94)',
    "Val-d'Oise (95)"
  ]

  const eventLinks = [
    { href: '/mariages', emoji: '💒', label: 'Mariages' },
    { href: '/evenements-corporate', emoji: '🏢', label: 'Corporate' },
    { href: '/anniversaires', emoji: '🎂', label: 'Anniversaires' },
    { href: '/galas', emoji: '👑', label: 'Galas' }
  ]

  return (
    <div className="min-h-screen bg-dark">
      <Breadcrumbs items={[{ name: 'Tarifs', href: '/tarifs' }]} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
        {/* Background elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: backgroundY }}
        >
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-rose/10 rounded-full blur-[120px]" />
        </motion.div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
            >
              <span className="text-cream">Nos </span>
              <span className="gradient-text-full">tarifs</span>
              <span className="text-cream"> et formules</span>
              <br />
              <span className="text-cream/80 text-3xl md:text-4xl">Une offre adaptée à chaque événement</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-cream/50 mb-10 leading-relaxed"
            >
              Des forfaits flexibles pour tous types d'événements, du plus intime au plus prestigieux
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="badge mx-auto"
            >
              <Star size={16} className="fill-primary" />
              Devis gratuit et personnalisé sous 24h
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Formules principales */}
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
              Nos formules <span className="gradient-text">principales</span>
            </h2>
            <p className="text-lg text-cream/50">
              Choisissez la formule adaptée à votre type d'événement
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formules.map((formule, index) => (
              <PricingCard key={index} {...formule} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-cream/60">
              <span className="text-primary font-semibold">Tarifs sur devis</span> — Chaque événement est unique, nos tarifs s'adaptent à vos besoins
            </p>
          </motion.div>
        </div>
      </section>

      {/* Options additionnelles */}
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
              Options et <span className="gradient-text">personnalisations</span>
            </h2>
            <p className="text-lg text-cream/50">
              Ajoutez des extras pour une expérience encore plus unique <span className="text-primary">(sur devis)</span>
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {options.map((option, index) => (
              <OptionCard key={index} {...option} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Ce qui est inclus */}
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
              Ce qui est <span className="gradient-text">inclus</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-bold mb-6 text-cream">Toujours inclus</h3>
              <div className="space-y-4">
                {inclus.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-cream/70">{item}</span>
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
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-rose/10 rounded-3xl blur-2xl opacity-50" />

              <div className="relative bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-6 text-cream">Facilités de paiement</h3>

                <div className="space-y-4">
                  <div className="bg-dark/50 p-4 rounded-xl border border-white/5">
                    <div className="font-semibold text-cream mb-1">Acompte à la réservation</div>
                    <div className="text-cream/50 text-sm">30% pour confirmer votre date</div>
                  </div>
                  <div className="bg-dark/50 p-4 rounded-xl border border-white/5">
                    <div className="font-semibold text-cream mb-1">Solde le jour J</div>
                    <div className="text-cream/50 text-sm">70% le jour de l'événement avant installation</div>
                  </div>
                  <div className="bg-dark/50 p-4 rounded-xl border border-white/5">
                    <div className="font-semibold text-cream mb-1">Paiements acceptés</div>
                    <div className="text-cream/50 text-sm">Virement bancaire, chèque, espèces</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Liens vers pages événements */}
      <section className="py-16 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-cream">
              Découvrez nos prestations par type d'événement
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {eventLinks.map((event, index) => (
              <EventLink key={index} {...event} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 md:py-28 bg-dark-lighter relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <MapPin size={24} className="text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-cream">
                Zone d'intervention
              </h2>
            </div>

            <p className="text-lg text-cream/60 mb-10">
              Nous intervenons dans toute l'Île-de-France sans frais de déplacement supplémentaires
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {departements.map((dept, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="px-4 py-2 bg-dark-card/50 border border-white/10 rounded-full text-cream/70 text-sm"
                >
                  {dept}
                </motion.span>
              ))}
            </div>

            <p className="text-cream/40 text-sm">
              Interventions possibles en dehors de l'Île-de-France sur devis (frais de déplacement supplémentaires)
            </p>
          </motion.div>
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
              <Sparkles size={14} />
              Devis gratuit
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cream">
              Demandez votre <span className="gradient-text">devis personnalisé</span>
            </h2>

            <p className="text-lg md:text-xl text-cream/60 mb-10 leading-relaxed">
              Recevez une proposition sur-mesure en moins de 24h, sans engagement
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
                onClick={() => trackConversion.devisClick('tarifs_page_cta')}
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
  )
}
