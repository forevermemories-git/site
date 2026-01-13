'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Camera, Zap, Video, Share2, Download, Star, CheckCircle, Play, Phone, Sparkles } from 'lucide-react'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import { useRef } from 'react'
import { trackConversion } from '@/app/lib/gtag'

// Composant pour les caractéristiques techniques avec animation
function TechSpec({ icon, title, description, index }: {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-start gap-4 group"
    >
      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <div className="font-semibold text-cream mb-1">{title}</div>
        <div className="text-cream/50 text-sm">{description}</div>
      </div>
    </motion.div>
  )
}

// Composant pour les étapes avec compteur animé
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
      whileHover={{ y: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

      <div className="relative bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 group-hover:border-primary/20 transition-all h-full">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center font-bold text-2xl mb-4 mx-auto group-hover:scale-110 transition-transform">
          {number}
        </div>
        <h3 className="text-lg font-semibold mb-2 text-cream text-center">{title}</h3>
        <p className="text-cream/50 text-center text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

// Composant pour les avantages
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
      whileHover={{ y: -5 }}
      className="text-center group"
    >
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-cream">{title}</h3>
      <p className="text-cream/50 text-sm leading-relaxed">{description}</p>
    </motion.div>
  )
}

// Composant pour les événements
function EventCard({ href, title, description, hasLink = true, index }: {
  href?: string
  title: string
  description: string
  hasLink?: boolean
  index: number
}) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -3 }}
      className={`bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 h-full transition-all ${hasLink ? 'hover:border-primary/30 cursor-pointer group' : ''}`}
    >
      <h3 className={`text-lg font-semibold mb-2 text-cream ${hasLink ? 'group-hover:text-primary transition-colors' : ''}`}>
        {title}
      </h3>
      <p className="text-cream/50 text-sm mb-3">{description}</p>
      {hasLink && (
        <div className="text-primary text-sm font-medium flex items-center gap-1">
          En savoir plus
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      )}
    </motion.div>
  )

  if (hasLink && href) {
    return <Link href={href}>{content}</Link>
  }
  return content
}

export default function LaStarcamPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const steps = [
    {
      number: 1,
      title: 'Positionnement',
      description: 'Vous vous placez devant la Starcam. Notre opérateur vous guide pour la meilleure position'
    },
    {
      number: 2,
      title: 'Action !',
      description: 'Le bras robotisé démarre et effectue un mouvement fluide en capturant votre mouvement en vidéo haute définition'
    },
    {
      number: 3,
      title: 'Traitement automatique',
      description: 'La vidéo est automatiquement traitée en slow-motion et accélérée avec votre branding personnalisé'
    },
    {
      number: 4,
      title: 'Réception immédiate',
      description: 'Vous recevez votre vidéo instantanément sur votre téléphone, prête à être partagée'
    }
  ]

  const advantages = [
    { icon: <Video size={28} />, title: 'Qualité cinématographique', description: 'Des vidéos Full HD avec un rendu professionnel digne d\'Hollywood. Éclairage studio intégré pour un résultat parfait' },
    { icon: <Zap size={28} />, title: 'Effet wow instantané', description: 'Vos invités sont immédiatement impressionnés par le résultat. Une animation qui crée de l\'émulation et des souvenirs mémorables' },
    { icon: <Share2 size={28} />, title: 'Viralité garantie', description: 'Vos invités partagent leurs vidéos sur Instagram, TikTok, Facebook. Une visibilité organique pour votre événement' },
    { icon: <Download size={28} />, title: 'Livraison immédiate', description: 'Plus besoin d\'attendre des semaines. Chaque participant repart avec sa vidéo immédiatement après son passage' },
    { icon: <Star size={28} />, title: 'Personnalisation complète', description: 'Logo, couleurs, musique. Tout peut être personnalisé pour refléter l\'identité de votre événement' },
    { icon: <CheckCircle size={28} />, title: 'Service clé en main', description: 'Installation, animation, démontage. Notre équipe professionnelle gère tout de A à Z pour que vous profitiez pleinement' }
  ]

  const events = [
    { href: '/mariages', title: 'Mariages', description: 'Une animation glamour qui rendra votre mariage inoubliable', hasLink: true },
    { href: '/evenements-corporate', title: 'Événements Corporate', description: 'Activez votre marque et engagez vos collaborateurs', hasLink: true },
    { href: '/anniversaires', title: 'Anniversaires', description: 'Transformez votre fête en un événement digne d\'Hollywood', hasLink: true },
    { href: '/galas', title: 'Soirées de Gala', description: 'Une expérience VIP digne des plus grands tapis rouges', hasLink: true },
    { title: 'Lancements de produits', description: 'Créez le buzz autour de votre nouveau produit', hasLink: false },
    { title: 'Et bien plus...', description: 'Festivals, salons, inaugurations, soirées privées', hasLink: false }
  ]

  return (
    <div className="min-h-screen bg-dark">
      <Breadcrumbs items={[{ name: 'La Starcam', href: '/la-starcam' }]} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-28 md:pt-32 pb-20 md:pb-32 overflow-hidden">
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
            className="text-center max-w-4xl mx-auto"
            style={{ opacity }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-cream/80 text-sm font-medium mb-8"
            >
              <Camera size={16} className="text-primary" />
              Technologie Starcam
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
            >
              <span className="text-cream">Qu'est-ce que </span>
              <span className="gradient-text-full">la Starcam</span>
              <span className="text-cream"> ?</span>
              <br />
              <span className="text-cream/80 text-3xl md:text-4xl lg:text-5xl">Le robot vidéo qui sublime vos événements</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-cream/50 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              Un robot motorisé qui capture des vidéos slow-motion cinématographiques
              pour offrir à vos invités une expérience unique et mémorable
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="#fonctionnement"
                className="btn-primary group"
              >
                Découvrir le fonctionnement
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#evenements"
                className="btn-secondary"
              >
                Voir les événements
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Qu'est-ce que la Starcam */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-primary to-transparent" />
                <span className="text-primary text-sm font-medium uppercase tracking-wider">Technologie</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cream leading-tight">
                La technologie des tapis rouges
              </h2>

              <p className="text-lg text-cream/60 mb-6 leading-relaxed">
                La Starcam est un bras robotisé sur 5 axes équipé d'une caméra haute définition.
                En quelques secondes, elle capture des vidéos époustouflantes en slow-motion et en accéléré avec des mouvements fluides et cinématographiques.
              </p>

              <p className="text-lg text-cream/60 mb-8 leading-relaxed">
                Cette technologie robotique de pointe
                est désormais accessible pour vos événements privés et professionnels.
              </p>

              <div className="flex flex-wrap gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="badge"
                >
                  <Star size={14} />
                  Qualité professionnelle
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="badge"
                >
                  <Camera size={14} />
                  Qualité Full HD
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="badge"
                >
                  <Zap size={14} />
                  Effet wow garanti
                </motion.div>
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
                <h3 className="text-2xl font-bold mb-8 text-cream">Caractéristiques techniques</h3>

                <div className="space-y-6">
                  <TechSpec
                    icon={<CheckCircle size={18} />}
                    title="Caméra professionnelle"
                    description="Full HD 1080p, 120 fps"
                    index={0}
                  />
                  <TechSpec
                    icon={<CheckCircle size={18} />}
                    title="Bras robotisé 5 axes"
                    description="Mouvements complexes et cinématographiques"
                    index={1}
                  />
                  <TechSpec
                    icon={<CheckCircle size={18} />}
                    title="Double effet"
                    description="Slow-motion et accéléré"
                    index={2}
                  />
                  <TechSpec
                    icon={<CheckCircle size={18} />}
                    title="Éclairage professionnel"
                    description="Studio mobile intégré"
                    index={3}
                  />
                  <TechSpec
                    icon={<CheckCircle size={18} />}
                    title="Livraison instantanée"
                    description="Vidéo envoyée immédiatement"
                    index={4}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comment ça fonctionne */}
      <section id="fonctionnement" className="py-20 md:py-28 bg-dark-lighter relative overflow-hidden">
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
              Comment fonctionne <span className="gradient-text">la Starcam</span> ?
            </h2>
            <p className="text-lg text-cream/50 max-w-2xl mx-auto">
              Une expérience simple et rapide pour un résultat spectaculaire
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {steps.map((step, index) => (
              <StepCard key={index} {...step} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-dark-card to-rose/10 rounded-3xl" />
            <div className="absolute inset-0 backdrop-blur-xl rounded-3xl" />

            <div className="relative p-8 md:p-12 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mx-auto mb-6">
                <Play size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-cream">Durée totale : 1 à 2 minutes</h3>
              <p className="text-cream/60 max-w-2xl mx-auto leading-relaxed">
                De votre passage devant la caméra à la réception de votre vidéo, tout le processus ne prend que quelques instants.
                Vous pouvez passer plusieurs fois pour réaliser différentes poses !
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Avantages */}
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
              Pourquoi choisir <span className="gradient-text">la Starcam</span> ?
            </h2>
            <p className="text-lg text-cream/50">
              Les avantages d'une animation premium
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {advantages.map((advantage, index) => (
              <AdvantageCard key={index} {...advantage} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pour quels événements */}
      <section id="evenements" className="py-20 md:py-28 bg-dark-lighter relative overflow-hidden">
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
              Pour quels <span className="gradient-text">événements</span> ?
            </h2>
            <p className="text-lg text-cream/50">
              La Starcam s'adapte à tous vos moments d'exception
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <EventCard key={index} {...event} index={index} />
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
              <Sparkles size={14} />
              Réservation rapide
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cream">
              Prêt à essayer <span className="gradient-text">la Starcam</span> ?
            </h2>

            <p className="text-lg md:text-xl text-cream/60 mb-10 leading-relaxed">
              Demandez votre devis gratuit et découvrez comment la Starcam peut transformer votre événement
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
                onClick={() => trackConversion.devisClick('starcam_page_cta')}
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
