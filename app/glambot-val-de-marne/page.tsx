'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, Star, Phone, Clock, CheckCircle } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import MediaController from '@/app/components/home/MediaController'
import Reveal from '@/app/components/home/Reveal'
import Showreel from '@/app/components/home/Showreel'
import { trackConversion } from '@/app/lib/gtag'

const ICO = ['w1', 'w2', 'w3', 'w4', 'w5', 'w6']

const valDeMarneFAQs = [
  {
    question: 'Dans quelles villes du Val-de-Marne intervenez-vous ?',
    answer: 'Nous couvrons tout le Val-de-Marne : Créteil, Vincennes, Saint-Maur-des-Fossés, Champigny-sur-Marne, Vitry-sur-Seine, Ivry-sur-Seine, Maisons-Alfort, Nogent-sur-Marne, et toutes les autres communes du 94.'
  },
  {
    question: 'Y a-t-il des frais de déplacement pour le Val-de-Marne ?',
    answer: 'Non, le Val-de-Marne fait partie de la petite couronne parisienne, notre zone d\'intervention principale. Aucun frais de déplacement supplémentaire ne s\'applique pour le 94.'
  },
  {
    question: 'Quels lieux de réception du 94 connaissez-vous ?',
    answer: 'Nous avons déjà travaillé dans de nombreux lieux du Val-de-Marne : bords de Marne, espaces événementiels de Créteil, salles de Vincennes, restaurants avec vue, péniches... Nous connaissons bien le département.'
  },
  {
    question: 'Le Glambot peut-il être installé en bord de Marne ?',
    answer: 'Oui, nous adorons les installations en bord de Marne ! Le cadre naturel et verdoyant offre un décor magnifique pour nos vidéos slow-motion. Nous prévoyons un abri en cas de météo incertaine.'
  },
  {
    question: 'Proposez-vous des formules adaptées aux événements du 94 ?',
    answer: 'Nos formules sont les mêmes pour toute l\'Île-de-France, avec des tarifs adaptés à la durée et au type d\'événement. Contactez-nous pour un devis personnalisé selon vos besoins.'
  }
]

// Advantage Card (light)
function AdvantageCard({ icon, title, description, index }: {
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

// Venue Card (light)
function VenueCard({ title, description, features, index }: {
  title: string
  description: string
  features: string[]
  index: number
}) {
  return (
    <Reveal delay={0.08 * index}>
      <div className="bg-[#fff] rounded-[26px] p-8" style={{ boxShadow: 'var(--shadow-sm)' }}>
        <h3 className="text-[#2A2230]" style={{ fontSize: 22, marginBottom: 12 }}>{title}</h3>
        <p className="text-[#6C6172]" style={{ marginBottom: 16 }}>{description}</p>
        <ul style={{ display: 'grid', gap: 8 }}>
          {features.map((feature) => (
            <li key={feature} className="text-[#6C6172]" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CheckCircle size={16} stroke="#B65EAB" aria-hidden="true" style={{ flex: 'none' }} />
              {feature}
            </li>
          ))}
        </ul>
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

export default function GlambotValDeMarnePage() {
  const advantages = [
    { icon: <MapPin size={26} />, title: 'Petite couronne', description: 'Le Val-de-Marne fait partie de notre zone d\'intervention prioritaire, sans frais supplémentaires.' },
    { icon: <Clock size={26} />, title: 'Réactivité', description: 'Proximité immédiate avec Paris et notre base. Installation rapide et flexible selon vos contraintes.' },
    { icon: <CheckCircle size={26} />, title: 'Connaissance locale', description: 'Nous connaissons les lieux emblématiques du 94 et savons nous adapter à chaque configuration.' }
  ]

  const zones = [
    { title: 'Ouest du 94', cities: ['Vincennes', 'Saint-Mandé', 'Charenton-le-Pont', 'Ivry-sur-Seine', 'Vitry-sur-Seine'] },
    { title: 'Centre du 94', cities: ['Créteil', 'Maisons-Alfort', 'Alfortville', 'Saint-Maurice', 'Joinville-le-Pont'] },
    { title: 'Est du 94', cities: ['Saint-Maur-des-Fossés', 'Champigny-sur-Marne', 'Nogent-sur-Marne', 'Le Perreux-sur-Marne', 'Fontenay-sous-Bois'] }
  ]

  const venues = [
    {
      title: 'Bords de Marne',
      description: 'Les guinguettes et espaces en bord de Marne offrent un cadre bucolique et festif. Notre Starcam capture parfaitement l\'atmosphère champêtre et conviviale de ces lieux uniques.',
      features: ['Ambiance guinguette', 'Décor naturel verdoyant']
    },
    {
      title: 'Bois de Vincennes',
      description: 'Le Bois de Vincennes et ses alentours proposent des espaces événementiels uniques. Parc Floral, Château de Vincennes, restaurants avec jardin...',
      features: ['Cadre prestigieux', 'Espaces verts exceptionnels']
    }
  ]

  const events = [
    { href: '/mariages', title: 'Mariages', description: 'Guinguettes, espaces bord de Marne, salles de réception' },
    { href: '/evenements-corporate', title: 'Corporate', description: 'Séminaires, team building, soirées d\'entreprise' },
    { href: '/galas', title: 'Galas', description: 'Soirées associatives, événements caritatifs' },
    { href: '/anniversaires', title: 'Anniversaires', description: 'Fêtes privées, anniversaires en famille' }
  ]

  return (
    <>
      <FAQStructuredData faqs={valDeMarneFAQs} />

      <div className="fm-home overflow-hidden">
        <Breadcrumbs items={[{ name: 'Glambot Val-de-Marne', href: '/glambot-val-de-marne' }]} />
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
                  Val-de-Marne (94)
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1>
                  Location <span className="fm-grad-text">Glambot</span> dans le Val-de-Marne
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="lead mx-auto">
                  Des vidéos slow-motion spectaculaires pour vos événements dans le
                  94 : bords de Marne, espaces verts et lieux de réception modernes.
                  Robot caméra slow-motion en Île-de-France.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="hero-cta" style={{ justifyContent: 'center' }}>
                  <Link
                    href="/contact"
                    onClick={() => trackConversion.devisClick('glambot_val_de_marne_hero')}
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
                  Petite couronne, sans frais de déplacement
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Avantage petite couronne */}
        <section className="pad band-sun" id="avantages">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Petite couronne</span>
              <h2>
                Votre événement dans le <span className="em">94</span>
              </h2>
              <p>
                Le Val-de-Marne fait partie de notre zone prioritaire. Découvrez{' '}
                <Link href="/la-starcam" className="text-[#B65EAB] underline" style={{ fontWeight: 600 }}>la Starcam</Link>,
                notre{' '}
                <Link href="/memory-book" className="text-[#B65EAB] underline" style={{ fontWeight: 600 }}>memory book</Link>{' '}
                et nos{' '}
                <Link href="/tarifs" className="text-[#B65EAB] underline" style={{ fontWeight: 600 }}>tarifs</Link>.
              </p>
            </Reveal>

            <div className="why-grid">
              {advantages.map((adv, index) => (
                <AdvantageCard key={adv.title} {...adv} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="pad band-mint" id="zones">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Zones d&apos;intervention</span>
              <h2>
                Nous intervenons dans tout le <span className="em">Val-de-Marne</span>
              </h2>
              <p>Location vidéo événement dans toutes les communes du 94.</p>
            </Reveal>

            <div className="why-grid">
              {zones.map((zone, index) => (
                <ZoneCard key={zone.title} {...zone} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Showreel (réutilise le composant de la home) */}
        <Showreel />

        {/* Lieux spécifiques */}
        <section className="pad band-peach" id="lieux">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Lieux du 94</span>
              <h2>
                Les plus beaux cadres du <span className="em">Val-de-Marne</span>
              </h2>
              <p>
                Le 94 offre des lieux variés et charmants pour vos événements. Notre
                Glambot s&apos;adapte à chaque ambiance.
              </p>
            </Reveal>

            <div className="spec-grid">
              {venues.map((venue, index) => (
                <VenueCard key={venue.title} {...venue} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Types d'événements */}
        <section className="pad band-rose" id="evenements">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Vos événements</span>
              <h2>
                Tous vos événements dans le <span className="em">94</span>
              </h2>
              <p>Mariage, corporate ou gala dans le Val-de-Marne, la Starcam fait briller chaque invité.</p>
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
              <p>Tout ce qu&apos;il faut savoir sur la location Glambot dans le Val-de-Marne.</p>
            </Reveal>

            <div className="mx-auto space-y-4" style={{ maxWidth: 820 }}>
              {valDeMarneFAQs.map((faq, index) => (
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
                Votre événement dans le
                <br />
                Val-de-Marne vous attend
              </h2>
              <p>Devis gratuit et personnalisé sous 24h. Aucun frais de déplacement.</p>
              <div className="btn-row">
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('glambot_val_de_marne_cta')}
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
