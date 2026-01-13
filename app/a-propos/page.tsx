'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Heart, Users, Award, Sparkles, CheckCircle, Star, Phone, MapPin, Clock, Video, MessageCircle } from 'lucide-react'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import { useRef } from 'react'
import { trackConversion } from '@/app/lib/gtag'

// Metadata doit être exportée depuis un fichier séparé pour les composants client
// Pour l'instant, nous la gardons ici car Next.js gère ce cas

// Composant carte de valeur
function ValueCard({ icon, title, description, index }: {
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
      whileHover={{ y: -8 }}
      className="relative group h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

      <div className="relative h-full bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 group-hover:border-primary/20 transition-all duration-300 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-cream">{title}</h3>
        <p className="text-cream/60 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

// Composant engagement item
function EngagementItem({ icon, title, description, index }: {
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
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-2 text-cream group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-cream/50 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

// Composant stat animé
function AnimatedStat({ value, suffix, label, index }: {
  value: string
  suffix?: string
  label: string
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold mb-2">
        <span className="bg-gradient-to-r from-primary-light via-primary to-rose bg-clip-text text-transparent">
          {value}
        </span>
        {suffix && <span className="text-primary">{suffix}</span>}
      </div>
      <div className="text-cream/50">{label}</div>
    </motion.div>
  )
}

// Badge département
function DepartmentBadge({ name, code, index }: { name: string; code: string; index: number }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05, y: -2 }}
      className="px-4 py-2 bg-dark-card/50 backdrop-blur-sm border border-white/10 text-cream/80 rounded-full font-medium hover:border-primary/30 hover:text-primary transition-all cursor-default"
    >
      {name} ({code})
    </motion.span>
  )
}

export default function AProposPage() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const values = [
    {
      icon: <Heart size={28} />,
      title: 'Passion',
      description: 'Nous aimons ce que nous faisons et cela se ressent dans chaque prestation. Votre bonheur est notre récompense.'
    },
    {
      icon: <Award size={28} />,
      title: 'Excellence',
      description: 'Équipement de dernière génération, opérateurs formés et service premium. Nous visons l\'excellence à chaque instant.'
    },
    {
      icon: <Users size={28} />,
      title: 'Proximité',
      description: 'Nous sommes à votre écoute du premier contact au jour J. Un accompagnement personnalisé et réactif.'
    }
  ]

  const engagements = [
    {
      icon: <Video size={20} />,
      title: 'Matériel de dernière génération',
      description: 'Nous investissons continuellement dans notre équipement pour vous garantir la meilleure qualité possible. Notre Starcam est un robot professionnel de qualité cinématographique.'
    },
    {
      icon: <Users size={20} />,
      title: 'Opérateurs professionnels',
      description: 'Notre équipe est formée aux dernières techniques et reste en veille constante sur les tendances. Expérience, professionnalisme et bonne humeur garantis.'
    },
    {
      icon: <Sparkles size={20} />,
      title: 'Service sur-mesure',
      description: 'Chaque événement est unique. Nous personnalisons notre prestation selon vos besoins, votre budget et votre vision.'
    },
    {
      icon: <MessageCircle size={20} />,
      title: 'Réactivité et disponibilité',
      description: 'Nous répondons rapidement à vos demandes et restons disponibles avant, pendant et après votre événement.'
    }
  ]

  const promises = [
    'Une expérience inoubliable pour vos invités',
    'Des vidéos de qualité professionnelle',
    'Un service clé en main sans stress',
    'Des souvenirs à conserver toute une vie'
  ]

  const departments = [
    { name: 'Paris', code: '75' },
    { name: 'Seine-et-Marne', code: '77' },
    { name: 'Yvelines', code: '78' },
    { name: 'Essonne', code: '91' },
    { name: 'Hauts-de-Seine', code: '92' },
    { name: 'Seine-Saint-Denis', code: '93' },
    { name: 'Val-de-Marne', code: '94' },
    { name: 'Val-d\'Oise', code: '95' }
  ]

  const stats = [
    { value: '1000', suffix: '+', label: 'Vidéos produites' },
    { value: '5/5', suffix: '', label: 'Note Google' },
    { value: '8', suffix: '', label: 'Départements couverts' },
    { value: '24h', suffix: '', label: 'Délai de réponse' }
  ]

  return (
    <div ref={sectionRef} className="min-h-screen bg-dark">
      <Breadcrumbs items={[{ name: 'À Propos', href: '/a-propos' }]} />

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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Notre histoire</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
            >
              <span className="bg-gradient-to-r from-primary-light via-primary to-rose bg-clip-text text-transparent">Forever Memories</span>
              <br />
              <span className="text-cream">Des souvenirs qui durent</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-cream/50 max-w-2xl mx-auto leading-relaxed"
            >
              Nous mettons notre passion et notre expertise au service de vos événements d'exception
            </motion.p>
          </div>
        </div>
      </section>

      {/* Notre histoire - texte */}
      <section className="py-20 md:py-32">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Quote decoration */}
              <div className="absolute -top-8 -left-4 text-8xl text-primary/10 font-serif">"</div>

              <div className="relative space-y-6 text-lg md:text-xl text-cream/70 leading-relaxed">
                <p>
                  Forever Memories est née d'une passion : celle de capturer et d'immortaliser les moments d'exception
                  de la vie. Fascinés par la technologie Starcam utilisée lors des plus grandes cérémonies mondiales,
                  nous avons décidé de la rendre accessible à tous les événements, des mariages intimistes aux galas
                  les plus prestigieux.
                </p>

                <p>
                  Basés en Île-de-France, nous intervenons dans toute la région parisienne avec une mission claire :
                  offrir à chaque client une expérience premium et des souvenirs cinématographiques inoubliables.
                </p>

                <p>
                  Aujourd'hui, avec plus de <span className="text-primary font-semibold">1000 vidéos</span> produites et des dizaines d'événements réussis, nous continuons
                  d'innover et de perfectionner notre service pour rester le partenaire privilégié de vos moments d'exception.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-20 md:py-32 bg-dark-lighter relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

        <div className="container-wide relative z-10">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Ce qui nous définit</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold mb-4 text-cream"
            >
              Nos <span className="gradient-text">valeurs</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-cream/50"
            >
              Les principes qui guident notre travail au quotidien
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => (
              <ValueCard key={index} {...value} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose/10 rounded-full blur-[150px]" />

        <div className="container-wide relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold mb-4 text-cream"
            >
              Notre engagement <span className="gradient-text">qualité</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Engagements list */}
            <div className="space-y-8">
              {engagements.map((engagement, index) => (
                <EngagementItem key={index} {...engagement} index={index} />
              ))}
            </div>

            {/* Promise card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-rose/10 rounded-3xl blur-xl" />

              <div className="relative bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/30 to-rose/20 flex items-center justify-center mx-auto mb-4">
                    <Sparkles size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-cream">Notre promesse</h3>
                </div>

                <div className="space-y-4">
                  {promises.map((promise, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <Star size={18} className="text-primary flex-shrink-0 fill-primary" />
                      <span className="text-cream/70">{promise}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-20 md:py-32 bg-dark-lighter relative overflow-hidden">
        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <MapPin size={20} className="text-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Île-de-France</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-cream"
            >
              Notre zone d'<span className="gradient-text">intervention</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-cream/50 mb-10"
            >
              Basés en Île-de-France, nous intervenons dans toute la région parisienne
            </motion.p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {departments.map((dept, index) => (
                <DepartmentBadge key={index} {...dept} index={index} />
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-cream/40 text-sm"
            >
              Nous pouvons également intervenir en dehors de l'Île-de-France pour vos événements exceptionnels.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-dark to-rose/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[200px]" />

        <div className="container-wide relative z-10">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-cream"
            >
              Forever Memories en <span className="gradient-text">chiffres</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <AnimatedStat key={index} {...stat} index={index} />
            ))}
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
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-rose" />
            <div className="absolute inset-0 bg-dark/20" />

            <div className="relative p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Envie de nous confier votre événement ?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+33676815953"
                  onClick={() => trackConversion.phoneClick()}
                  className="group px-8 py-4 bg-white text-dark rounded-full font-semibold hover:bg-cream transition-all flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  06 76 81 59 53
                </Link>
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white hover:text-dark transition-all flex items-center justify-center gap-2"
                >
                  Demander un devis
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
