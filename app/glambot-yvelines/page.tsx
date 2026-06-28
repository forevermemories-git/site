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

const yvelinesFAQs = [
  {
    question: 'Intervenez-vous dans toutes les Yvelines ?',
    answer: 'Oui, nous couvrons l\'ensemble du département 78 : Versailles, Saint-Germain-en-Laye, Rambouillet, Mantes-la-Jolie, Poissy, Conflans-Sainte-Honorine, et toutes les autres communes des Yvelines.'
  },
  {
    question: 'Le Glambot peut-il être installé dans les châteaux des Yvelines ?',
    answer: 'Absolument ! Les Yvelines regorgent de lieux prestigieux. Notre Starcam s\'adapte parfaitement aux contraintes des châteaux, orangeries et domaines du 78. Nous avons l\'expérience des lieux d\'exception.'
  },
  {
    question: 'Y a-t-il des frais de déplacement pour les Yvelines ?',
    answer: 'Non, les Yvelines font partie de notre zone d\'intervention principale en Île-de-France. Aucun frais de déplacement supplémentaire ne s\'applique.'
  },
  {
    question: 'Quels types d\'événements organisez-vous dans le 78 ?',
    answer: 'Tous types d\'événements : mariages dans les domaines viticoles, soirées corporate dans les espaces événementiels de Saint-Quentin-en-Yvelines, anniversaires privés, galas associatifs...'
  },
  {
    question: 'Proposez-vous une visite technique gratuite dans les Yvelines ?',
    answer: 'Oui, pour les événements dans les Yvelines, nous proposons une visite technique gratuite du lieu afin de préparer au mieux l\'installation de notre Starcam et vous conseiller sur le meilleur emplacement.'
  }
]

// Zone Card with city list (light)
function ZoneCard({ title, cities, index }: {
  title: string
  cities: string[]
  index: number
}) {
  return (
    <Reveal delay={0.06 * index}>
      <div className="why-card" style={{ textAlign: 'left' }}>
        <h3>{title}</h3>
        <ul style={{ marginTop: 10, display: 'grid', gap: 8 }}>
          {cities.map((city) => (
            <li key={city} className="text-[#6C6172]" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <MapPin size={16} stroke="#B65EAB" aria-hidden="true" style={{ flex: 'none' }} />
              {city}
            </li>
          ))}
        </ul>
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

export default function GlambotYvelinesPage() {
  const zones = [
    { title: 'Est des Yvelines', cities: ['Versailles', 'Saint-Germain-en-Laye', 'Le Chesnay-Rocquencourt', 'Poissy', 'Conflans-Sainte-Honorine'] },
    { title: 'Centre des Yvelines', cities: ['Saint-Quentin-en-Yvelines', 'Plaisir', 'Élancourt', 'Maurepas', 'Trappes'] },
    { title: 'Ouest des Yvelines', cities: ['Rambouillet', 'Mantes-la-Jolie', 'Les Mureaux', 'Houdan', 'Montfort-l\'Amaury'] }
  ]

  const features = [
    { icon: <Camera size={26} />, title: 'Lieux prestigieux', description: 'Notre Starcam sublime les cadres exceptionnels des Yvelines : châteaux, orangeries, domaines viticoles et espaces verts.' },
    { icon: <Users size={26} />, title: 'Expérience locale', description: 'Nous connaissons les spécificités des lieux yvelinois et savons adapter notre installation à chaque configuration.' },
    { icon: <Clock size={26} />, title: 'Service premium', description: 'Visite technique gratuite, installation soignée, équipe professionnelle. Un service à la hauteur des lieux d\'exception.' }
  ]

  const events = [
    { href: '/mariages', title: 'Mariages', description: 'Châteaux, domaines, jardins à la française' },
    { href: '/evenements-corporate', title: 'Corporate', description: 'Événements d\'entreprise, team building' },
    { href: '/galas', title: 'Galas', description: 'Soirées de prestige, associations' },
    { href: '/anniversaires', title: 'Anniversaires', description: 'Fêtes privées, événements familiaux' }
  ]

  return (
    <>
      <FAQStructuredData faqs={yvelinesFAQs} />

      <div className="fm-home overflow-hidden">
        <Breadcrumbs items={[{ name: 'Glambot Yvelines', href: '/glambot-yvelines' }]} />
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
                  Yvelines (78)
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1>
                  Location <span className="fm-grad-text">Glambot</span> dans les Yvelines
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="lead mx-auto">
                  Des vidéos slow-motion dignes des plus beaux lieux des Yvelines :
                  Versailles, Saint-Germain-en-Laye et au-delà. Robot caméra
                  slow-motion en Île-de-France.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="hero-cta" style={{ justifyContent: 'center' }}>
                  <Link
                    href="/contact"
                    onClick={() => trackConversion.devisClick('glambot_yvelines_hero')}
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
                  Visite technique gratuite dans les Yvelines
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
                Nos interventions dans les <span className="em">Yvelines</span>
              </h2>
              <p>
                Location vidéo événement dans tout le 78, sans frais de déplacement.
                Découvrez{' '}
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

        {/* Avantages */}
        <section className="pad band-rose" id="avantages">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Pourquoi nous</span>
              <h2>
                Pourquoi choisir notre <span className="em">Glambot</span> dans les Yvelines ?
              </h2>
              <p>
                Un robot caméra slow-motion à la hauteur des lieux d&apos;exception
                du 78.
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
                Tous vos événements dans le <span className="em">78</span>
              </h2>
              <p>Mariage, corporate ou gala dans les Yvelines, la Starcam fait briller chaque invité.</p>
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
              <p>Tout ce qu&apos;il faut savoir sur la location Glambot dans les Yvelines.</p>
            </Reveal>

            <div className="mx-auto space-y-4" style={{ maxWidth: 820 }}>
              {yvelinesFAQs.map((faq, index) => (
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
                Votre événement dans les
                <br />
                Yvelines mérite l&apos;excellence
              </h2>
              <p>Devis gratuit et personnalisé sous 24h. Visite technique offerte.</p>
              <div className="btn-row">
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('glambot_yvelines_cta')}
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
