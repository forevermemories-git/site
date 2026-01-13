'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles, Share2, Users, Gift, Camera, CheckCircle, Phone, Instagram, Zap, Music, Star, PartyPopper } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import { useRef } from 'react'
import { trackConversion } from '@/app/lib/gtag'

const anniversairesFAQs = [
  {
    question: 'Est-ce adapté pour un anniversaire surprise ?',
    answer: 'C\'est PARFAIT pour un anniversaire surprise ! On installe discrètement pendant que les invités arrivent. L\'effet de surprise quand la personne fêtée découvre le robot est incroyable. On peut même filmer sa réaction en slow-motion !'
  },
  {
    question: 'Mes invités vont-ils vraiment utiliser la Starcam ?',
    answer: 'À 100% ! C\'est addictif. Les invités font la queue pour repasser. En moyenne, chaque personne fait 3-4 passages dans la soirée. L\'aspect "défi entre amis" crée une vraie émulation.'
  },
  {
    question: 'Les vidéos sont-elles vraiment partageables sur Instagram/TikTok ?',
    answer: 'Oui ! Les vidéos sont au format vertical 9:16, optimisées pour les Stories et Reels. Chaque invité reçoit sa vidéo instantanément par SMS et peut la poster en 2 clics.'
  },
  {
    question: 'Peut-on personnaliser avec le thème de la fête ?',
    answer: 'Absolument ! On adapte les couleurs, on peut ajouter un message personnalisé ("Joyeux 30 ans Marie !"), et même intégrer le thème de votre soirée (années 80, disco, tropical...).'
  },
  {
    question: 'C\'est adapté pour quel nombre d\'invités ?',
    answer: 'De 20 à 150 invités, la Starcam s\'adapte. Pour les petits groupes, on propose des formules ajustées. Pour les grandes fêtes, on peut ajouter un second opérateur pour zéro temps d\'attente.'
  }
]

function AgeCard({ emoji, title, description, tags, index }: {
  emoji: string
  title: string
  description: string
  tags: string[]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/20 transition-all"
    >
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-xl font-bold mb-2 text-cream">{title}</h3>
      <p className="text-cream/50 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function IdeaCard({ emoji, title, description, index }: {
  emoji: string
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
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="font-bold text-lg mb-2 text-cream">{title}</h3>
      <p className="text-cream/50 text-sm leading-relaxed">{description}</p>
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

export default function AnniversairesPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const ageGroups = [
    { emoji: '🎓', title: '18-25 ans', description: 'Majorité, fin d\'études, entrée dans la vie active... L\'âge où on veut du contenu viral pour les réseaux.', tags: ['TikTok ready', 'Squad goals'] },
    { emoji: '🎉', title: '30-40 ans', description: 'Les caps symboliques ! On veut marquer le coup avec les amis de longue date. Ambiance festive et décomplexée.', tags: ['Entre amis', 'Nostalgie fun'] },
    { emoji: '✨', title: '50-60 ans', description: 'Les anniversaires qu\'on célèbre en grand. Souvent intergénérationnel : les ados adorent autant que les parents.', tags: ['Famille', 'Élégant'] },
    { emoji: '👑', title: '70 ans et +', description: 'Les grandes célébrations familiales. Les petits-enfants initient les grands-parents... moments magiques garantis !', tags: ['Multigénérationnel', 'Souvenirs'] }
  ]

  const ideas = [
    { emoji: '🏆', title: 'Le défi du meilleur ralenti', description: 'Qui fera la vidéo la plus stylée ? Les invités se challengent et votent pour leur préférée. Ambiance garantie !' },
    { emoji: '👯', title: 'Le passage en groupe', description: 'Jusqu\'à 4 personnes en même temps. Les vidéos de groupe (famille, squad, collègues) sont souvent les plus drôles.' },
    { emoji: '🎭', title: 'Les poses signature', description: 'Confettis, champagne, cheveux au vent... Notre opérateur guide les invités pour des résultats dignes d\'un clip.' }
  ]

  const inclusions = [
    'Installation et démontage (on gère tout)',
    'Opérateur pro qui anime la soirée',
    'Vidéos slow-motion Full HD',
    'Livraison instantanée par SMS',
    'Galerie en ligne sous 48h',
    'Passages illimités pour tous',
    'Personnalisation couleurs & message',
    'Musique et ambiance festive'
  ]

  return (
    <>
      <FAQStructuredData faqs={anniversairesFAQs} />

      <div className="min-h-screen bg-dark">
        <Breadcrumbs items={[{ name: 'Anniversaires', href: '/anniversaires' }]} />

        {/* Hero Section */}
        <section ref={heroRef} className="relative pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden">
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{ y: backgroundY }}
          >
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-rose/20 rounded-full blur-[150px]" />
            <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-primary/15 rounded-full blur-[120px]" />
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
                <Sparkles size={16} className="text-rose" />
                L'animation qui fait le buzz
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
              >
                <span className="text-cream">Un anniversaire dont on parlera</span>
                <br />
                <span className="bg-gradient-to-r from-rose via-primary to-primary-light bg-clip-text text-transparent">encore dans 10 ans</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-cream/50 mb-6 max-w-3xl mx-auto leading-relaxed"
              >
                Fini les animations ringardes. La Starcam crée des vidéos slow-motion que vos invités vont s'arracher pour les poster sur Insta.
              </motion.p>

              {/* Social proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-cream/50"
              >
                <span className="flex items-center gap-2">
                  <Star size={16} className="text-primary fill-primary" /> 5/5 sur Google
                </span>
                <span className="flex items-center gap-2">
                  <Users size={16} className="text-primary" /> +200 fêtes animées
                </span>
                <span className="flex items-center gap-2">
                  <Instagram size={16} className="text-rose" /> +5000 vidéos partagées
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
                  onClick={() => trackConversion.devisClick('anniversaires_hero')}
                  className="btn-primary group"
                >
                  Réserver ma date
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/tarifs" className="btn-secondary">
                  Voir les tarifs
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Comparaison Photobooth vs Starcam */}
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
                Pourquoi vos invités vont <span className="gradient-text">adorer</span>
              </h2>
              <p className="text-lg text-cream/50 max-w-2xl mx-auto">
                (et pourquoi c'est 100x mieux qu'un photobooth classique)
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-dark-lighter/50 border border-white/5 p-8 rounded-2xl"
              >
                <div className="text-red-400 font-semibold mb-4 flex items-center gap-2 text-lg">
                  <span className="text-2xl">😴</span> Photobooth classique
                </div>
                <ul className="space-y-3 text-cream/50">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400">✗</span>
                    Photos statiques qu'on ne regarde plus jamais
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400">✗</span>
                    Props ringards (moustaches, lunettes...)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400">✗</span>
                    Format carré pas adapté aux réseaux
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400">✗</span>
                    Vu et revu à chaque soirée
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/30 to-rose/20 rounded-2xl blur-xl opacity-50" />
                <div className="relative bg-dark-card/80 border border-primary/30 p-8 rounded-2xl">
                  <div className="text-primary font-semibold mb-4 flex items-center gap-2 text-lg">
                    <span className="text-2xl">🔥</span> La Starcam
                  </div>
                  <ul className="space-y-3 text-cream/70">
                    <li className="flex items-start gap-3">
                      <span className="text-primary">✓</span>
                      Vidéos slow-motion spectaculaires qu'on re-regarde 100 fois
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">✓</span>
                      Mouvements de caméra robotisés effet Hollywood
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">✓</span>
                      Format 9:16 parfait pour Stories et TikTok
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary">✓</span>
                      Technologie exclusive quasi-introuvable en France
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Par tranche d'âge */}
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
                Adapté à chaque âge, <span className="gradient-text">chaque ambiance</span>
              </h2>
              <p className="text-lg text-cream/50">
                De 18 à 80 ans, on a l'expérience pour créer la bonne vibe
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ageGroups.map((group, index) => (
                <AgeCard key={index} {...group} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Côté viral / réseaux sociaux */}
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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose/10 border border-rose/20 text-rose text-sm font-medium mb-6"
                >
                  <Instagram size={16} />
                  Conçu pour les réseaux
                </motion.div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cream">
                  Des vidéos que vos invités vont <span className="gradient-text">vraiment partager</span>
                </h2>

                <p className="text-lg text-cream/50 mb-8">
                  Soyons honnêtes : les photos de photobooth finissent dans un tiroir. Nos vidéos slow-motion, elles, sont postées dans les 5 minutes sur Instagram, TikTok, WhatsApp...
                </p>

                <div className="space-y-4">
                  {[
                    { icon: <Share2 size={20} />, title: 'Partage en 2 clics', desc: 'Vidéo reçue par SMS → ouvrir → partager. Pas d\'app à télécharger.' },
                    { icon: <Zap size={20} />, title: 'Format vertical natif', desc: '9:16, le format parfait pour Stories, Reels et TikTok. Pas de recadrage.' },
                    { icon: <Music size={20} />, title: 'Musique intégrée', desc: 'Chaque vidéo a déjà une bande son. Prête à être postée telle quelle.' }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-cream">{item.title}</h4>
                        <p className="text-cream/50 text-sm">{item.desc}</p>
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
                <div className="absolute -inset-4 bg-gradient-to-br from-rose/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />
                <div className="relative bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <div className="text-5xl font-bold text-cream mb-2">87%</div>
                  <p className="text-cream/50 mb-8">de nos vidéos sont partagées sur les réseaux dans l'heure</p>

                  <div className="flex justify-center gap-6">
                    <div className="text-center">
                      <div className="text-xl font-bold text-rose">Instagram</div>
                      <div className="text-sm text-cream/40">Stories & Reels</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-cream">TikTok</div>
                      <div className="text-sm text-cream/40">Format natif</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-green-400">WhatsApp</div>
                      <div className="text-sm text-cream/40">Partage direct</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Idées de poses et défis */}
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
                Des idées pour <span className="gradient-text">animer la soirée</span>
              </h2>
              <p className="text-lg text-cream/50 max-w-2xl mx-auto">
                Notre opérateur propose des défis et des poses pour créer une vraie émulation
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {ideas.map((idea, index) => (
                <IdeaCard key={index} {...idea} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Ce qui est inclus */}
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
                Tout est inclus, <span className="gradient-text">zéro surprise</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-rose/20 to-primary/10 rounded-3xl blur-2xl opacity-50" />

              <div className="relative bg-dark-card/80 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-4">
                  {inclusions.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle size={20} className="text-primary flex-shrink-0" />
                      <span className="text-cream/70">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                  <Link href="/tarifs" className="text-primary font-semibold hover:text-primary-light transition-colors">
                    Voir nos formules et tarifs →
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-dark-lighter relative overflow-hidden">
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-cream">
                Vos <span className="gradient-text">questions</span>
              </h2>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-4">
              {anniversairesFAQs.map((faq, index) => (
                <FAQItem key={index} {...faq} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose/20 via-dark to-primary/15" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose/20 rounded-full blur-[200px] pointer-events-none" />

          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <div className="text-5xl mb-6">🎂</div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-cream">
                Prêt à organiser un <span className="gradient-text">anniversaire légendaire</span> ?
              </h2>

              <p className="text-lg md:text-xl text-cream/60 mb-10">
                Les meilleures dates partent vite. Réservez maintenant !
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
                  onClick={() => trackConversion.devisClick('anniversaires_cta')}
                  className="btn-primary"
                >
                  Demander un devis gratuit
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
