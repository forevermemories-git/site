'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, Star, Phone, Camera, Users, Clock } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import MediaController from '@/app/components/home/MediaController'
import Reveal from '@/app/components/home/Reveal'
import Showreel from '@/app/components/home/Showreel'
import { trackConversion } from '@/app/lib/gtag'

const ICO = ['w1', 'w2', 'w3', 'w4', 'w5', 'w6']

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

// Zone Card (light)
function ZoneCard({ title, subtitle, description, index }: {
  title: string
  subtitle: string
  description: string
  index: number
}) {
  return (
    <Reveal delay={0.06 * index}>
      <div className="why-card">
        <span className={`why-ico ${ICO[index % ICO.length]}`} aria-hidden="true">
          <MapPin size={24} />
        </span>
        <h3>{title}</h3>
        <p className="text-[#B65EAB]" style={{ fontWeight: 700, marginBottom: 4 }}>{subtitle}</p>
        <p>{description}</p>
      </div>
    </Reveal>
  )
}

// Feature Card (light)
function FeatureCard({ icon, title, description, index }: {
  icon: React.ReactNode
  title: string
  description: string
  index: number
}) {
  return (
    <Reveal delay={0.06 * index}>
      <div className="why-card">
        <span className={`why-ico ${ICO[index % ICO.length]}`} aria-hidden="true">
          {icon}
        </span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Reveal>
  )
}

// Event Link (light)
function EventLink({ href, title, description, index }: {
  href: string
  title: string
  description: string
  index: number
}) {
  return (
    <Reveal delay={0.06 * index}>
      <Link href={href} className="why-card" style={{ display: 'block' }}>
        <h3>{title}</h3>
        <p style={{ marginBottom: 14 }}>{description}</p>
        <span className="text-[#B65EAB]" style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontWeight: 600, fontSize: 14 }}>
          En savoir plus <ArrowRight size={16} aria-hidden="true" />
        </span>
      </Link>
    </Reveal>
  )
}

// FAQ Item (light)
function FAQItem({ question, answer, index }: {
  question: string
  answer: string
  index: number
}) {
  return (
    <Reveal delay={0.05 * index}>
      <div className="bg-[#fff] rounded-[26px] p-7" style={{ boxShadow: 'var(--shadow-sm)' }}>
        <h3 className="text-[#2A2230]" style={{ fontSize: 19, marginBottom: 8 }}>{question}</h3>
        <p className="text-[#6C6172]">{answer}</p>
      </div>
    </Reveal>
  )
}

export default function GlambotParisPage() {
  const zones = [
    { title: 'Paris', subtitle: '75', description: 'Tous les arrondissements, des lieux prestigieux du 8ème aux espaces branchés du 11ème' },
    { title: 'Hauts-de-Seine', subtitle: '92', description: 'Neuilly, Boulogne, La Défense, Issy-les-Moulineaux et toutes les communes' },
    { title: 'Seine-Saint-Denis', subtitle: '93', description: 'Saint-Denis, Montreuil, Saint-Ouen, Pantin et l\'ensemble du département' },
    { title: 'Val-de-Marne', subtitle: '94', description: 'Vincennes, Saint-Mandé, Créteil, Nogent-sur-Marne et alentours' }
  ]

  const features = [
    { icon: <Camera size={26} />, title: 'Technologie exclusive', description: 'Notre Starcam est l\'un des rares Glambots disponibles en région parisienne. Une technologie quasi introuvable ailleurs.' },
    { icon: <Users size={26} />, title: '1000+ vidéos', description: 'Plus de 1000 vidéos produites en Île-de-France. Nous connaissons parfaitement les lieux et contraintes parisiennes.' },
    { icon: <Clock size={26} />, title: 'Réactivité locale', description: 'Basés en Île-de-France, nous sommes réactifs et flexibles. Visite technique gratuite sur Paris si nécessaire.' }
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

      <div className="fm-home overflow-hidden">
        <Breadcrumbs items={[{ name: 'Glambot Paris', href: '/glambot-paris' }]} />
        <MediaController />

        {/* Hero */}
        <section className="fm-hero" id="top">
          <div className="hero-blob blob1" aria-hidden="true" />
          <div className="hero-blob blob2" aria-hidden="true" />
          <div className="wrap">
            <div className="relative z-[2] max-w-3xl mx-auto text-center">
              <Reveal>
                <span className="kicker">
                  <MapPin size={16} stroke="#B65EAB" aria-hidden="true" />
                  Paris &amp; petite couronne
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1>
                  Location <span className="fm-grad-text">Glambot</span> à Paris
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="lead mx-auto">
                  Transformez votre événement parisien en moment d&apos;exception
                  avec notre robot Starcam et ses vidéos slow-motion
                  cinématographiques. Location vidéo événement à Paris et en
                  Île-de-France.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="hero-cta" style={{ justifyContent: 'center' }}>
                  <Link
                    href="/contact"
                    onClick={() => trackConversion.devisClick('glambot_paris_hero')}
                    className="btn btn-primary btn-lg"
                  >
                    Demander un devis gratuit
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <Link href="/tarifs" className="btn btn-ghost btn-lg">
                    Voir nos tarifs
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.32}>
                <div className="hero-trust" style={{ justifyContent: 'center' }}>
                  <span className="stars" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </span>
                  Plus de 1000 vidéos produites en Île-de-France
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="pad band-sun" id="zones">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Zones d&apos;intervention</span>
              <h2>
                Nos zones d&apos;<span className="em">intervention</span>
              </h2>
              <p>
                <strong className="text-[#B65EAB]">Aucun frais de déplacement</strong>{' '}
                pour Paris et la petite couronne. Pour aller plus loin, découvrez{' '}
                <Link href="/la-starcam" className="text-[#B65EAB] underline" style={{ fontWeight: 600 }}>la Starcam</Link>,
                notre{' '}
                <Link href="/memory-book" className="text-[#B65EAB] underline" style={{ fontWeight: 600 }}>memory book</Link>{' '}
                et nos{' '}
                <Link href="/tarifs" className="text-[#B65EAB] underline" style={{ fontWeight: 600 }}>tarifs</Link>.
              </p>
            </Reveal>

            <div className="why-grid">
              {zones.map((zone, index) => (
                <ZoneCard key={zone.title} {...zone} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="pad band-rose" id="pourquoi">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Pourquoi nous</span>
              <h2>
                Pourquoi choisir <span className="em">Forever Memories</span> à Paris ?
              </h2>
              <p>
                Un robot caméra slow-motion rare en région parisienne, opéré par
                une équipe locale qui connaît vos lieux.
              </p>
            </Reveal>

            <div className="why-grid">
              {features.map((feature, index) => (
                <FeatureCard key={feature.title} {...feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Showreel (réutilise le composant de la home) */}
        <Showreel />

        {/* Types d'événements */}
        <section className="pad band-peach" id="evenements">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Vos événements</span>
              <h2>
                Tous vos événements <span className="em">parisiens</span>
              </h2>
              <p>
                Mariage, corporate ou gala à Paris, la Starcam fait briller chaque
                invité.
              </p>
            </Reveal>

            <div className="why-grid">
              {events.map((event, index) => (
                <EventLink key={event.href} {...event} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="pad band-sky" id="faq">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">FAQ</span>
              <h2>
                Questions <span className="em">fréquentes</span>
              </h2>
              <p>Tout ce qu&apos;il faut savoir sur la location Glambot à Paris.</p>
            </Reveal>

            <div className="mx-auto space-y-4" style={{ maxWidth: 820 }}>
              {parisFAQs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="cta-band band-rose" id="cta">
          <div className="wrap">
            <Reveal className="cta-inner">
              <span className="dotblob cta-d1" aria-hidden="true" />
              <span className="dotblob cta-d2" aria-hidden="true" />
              <Image
                className="cta-logo"
                src="/images/fm-logo-white.png"
                alt="ForeverMemories"
                width={44}
                height={44}
              />
              <h2>
                Prêt à transformer
                <br />
                votre événement parisien ?
              </h2>
              <p>Contactez-nous pour un devis gratuit et personnalisé sous 24h.</p>
              <div className="btn-row">
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('glambot_paris_cta')}
                  className="btn btn-white btn-lg"
                >
                  Demander un devis
                  <ArrowRight size={18} aria-hidden="true" stroke="#8E3F84" />
                </Link>
                <a
                  href="tel:+33676815953"
                  onClick={() => trackConversion.phoneClick()}
                  className="btn btn-outline btn-lg"
                >
                  <Phone size={18} aria-hidden="true" />
                  06 76 81 59 53
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </div>
    </>
  )
}
