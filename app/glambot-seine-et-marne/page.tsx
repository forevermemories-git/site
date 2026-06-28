'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, MapPin, Star, CheckCircle, Phone, Home } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import MediaController from '@/app/components/home/MediaController'
import Reveal from '@/app/components/home/Reveal'
import Showreel from '@/app/components/home/Showreel'
import { trackConversion } from '@/app/lib/gtag'

const seineMarneFAQs = [
  {
    question: 'Intervenez-vous dans toute la Seine-et-Marne ?',
    answer: 'Oui, nous couvrons l\'ensemble du département 77 : Meaux, Melun, Fontainebleau, Provins, Chelles, Pontault-Combault, Torcy, et toutes les autres communes. Notre équipe est basée en Seine-et-Marne, c\'est notre territoire principal.'
  },
  {
    question: 'Le Glambot est-il adapté aux mariages dans les châteaux du 77 ?',
    answer: 'Absolument ! Nous avons l\'habitude des châteaux et domaines de Seine-et-Marne : Château de Fontainebleau, Vaux-le-Vicomte, et de nombreux domaines privés. Notre équipement s\'adapte aux contraintes patrimoniales.'
  },
  {
    question: 'Y a-t-il des frais de déplacement en Seine-et-Marne ?',
    answer: 'Non, aucun frais de déplacement pour la Seine-et-Marne. C\'est notre département d\'implantation, nous nous déplaçons gratuitement dans tout le 77.'
  },
  {
    question: 'Peut-on installer le Glambot en extérieur dans un domaine ?',
    answer: 'Oui, notre Starcam s\'installe aussi bien en intérieur qu\'en extérieur. Pour les installations en plein air, nous recommandons un espace abrité (chapiteau, grange, terrasse couverte) en cas d\'intempéries.'
  },
  {
    question: 'Combien de temps à l\'avance réserver pour un mariage en Seine-et-Marne ?',
    answer: 'La Seine-et-Marne étant très prisée pour les mariages (nombreux châteaux et domaines), nous recommandons de réserver 3-6 mois à l\'avance, surtout pour la saison mai-septembre.'
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

export default function GlambotSeineMarnePage() {
  const zones = [
    { title: 'Nord Seine-et-Marne', cities: ['Meaux', 'Chelles', 'Torcy / Marne-la-Vallée', 'Lagny-sur-Marne', 'Pontault-Combault'] },
    { title: 'Centre Seine-et-Marne', cities: ['Melun', 'Fontainebleau', 'Nemours', 'Brie-Comte-Robert', 'Savigny-le-Temple'] },
    { title: 'Est Seine-et-Marne', cities: ['Provins', 'Coulommiers', 'La Ferté-sous-Jouarre', 'Montereau', 'Nangis'] }
  ]

  const venues = [
    {
      title: 'Châteaux & Domaines',
      description: 'Le 77 est réputé pour ses châteaux majestueux : Fontainebleau, Vaux-le-Vicomte, et de nombreux domaines privés. Notre Glambot apporte une touche Hollywood à ces lieux chargés d\'histoire.',
      features: ['Adaptation aux contraintes patrimoniales', 'Installation discrète et respectueuse']
    },
    {
      title: 'Granges & Corps de ferme',
      description: 'Les granges rénovées et corps de ferme du 77 offrent un cadre champêtre et authentique. Notre Starcam s\'intègre parfaitement à ces ambiances rustiques chic.',
      features: ['Installation intérieure ou extérieure', 'Éclairage adapté aux lieux atypiques']
    }
  ]

  const advantages = [
    { label: 'Aucun frais de déplacement' },
    { label: 'Visite technique gratuite' },
    { label: 'Connaissance des lieux' }
  ]

  return (
    <>
      <FAQStructuredData faqs={seineMarneFAQs} />

      <div className="fm-home overflow-hidden">
        <Breadcrumbs items={[{ name: 'Glambot Seine-et-Marne', href: '/glambot-seine-et-marne' }]} />
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
                  Seine-et-Marne (77)
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1>
                  Location <span className="fm-grad-text">Glambot</span> en Seine-et-Marne
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="lead mx-auto">
                  Notre territoire d&apos;implantation. Profitez de notre expertise
                  locale pour des vidéos slow-motion exceptionnelles dans les plus
                  beaux lieux du 77, en Île-de-France.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="hero-cta" style={{ justifyContent: 'center' }}>
                  <Link
                    href="/contact"
                    onClick={() => trackConversion.devisClick('glambot_seine_et_marne_hero')}
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
                  Robot caméra slow-motion, basé en Seine-et-Marne
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Notre avantage local */}
        <section className="pad band-sun" id="territoire">
          <div className="wrap">
            <Reveal>
              <div
                className="bg-[#fff] rounded-[32px]"
                style={{ boxShadow: 'var(--shadow-md)', padding: '40px clamp(24px, 4vw, 48px)' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 22, flexWrap: 'wrap' }}>
                  <span className="why-ico w1" aria-hidden="true">
                    <Home size={26} />
                  </span>
                  <div>
                    <h2 style={{ marginBottom: 4 }}>Notre territoire, notre expertise</h2>
                    <p className="text-[#B65EAB]" style={{ fontWeight: 600, margin: 0 }}>
                      Basés en Seine-et-Marne depuis nos débuts
                    </p>
                  </div>
                </div>

                <p className="text-[#6C6172]" style={{ fontSize: 18, marginBottom: 22 }}>
                  Forever Memories est implanté en Seine-et-Marne. Nous connaissons
                  parfaitement les lieux de réception du département : châteaux,
                  domaines, salles des fêtes, hôtels. Cette connaissance locale nous
                  permet de vous conseiller et de nous adapter aux spécificités de
                  chaque lieu. Découvrez{' '}
                  <Link href="/la-starcam" className="text-[#B65EAB] underline" style={{ fontWeight: 600 }}>la Starcam</Link>,
                  notre{' '}
                  <Link href="/memory-book" className="text-[#B65EAB] underline" style={{ fontWeight: 600 }}>memory book</Link>{' '}
                  et nos{' '}
                  <Link href="/tarifs" className="text-[#B65EAB] underline" style={{ fontWeight: 600 }}>tarifs</Link>.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
                  {advantages.map((adv) => (
                    <span
                      key={adv.label}
                      className="text-[#5B2A55]"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                        padding: '8px 16px',
                        borderRadius: 999,
                        fontWeight: 600,
                        fontSize: 14,
                        background: 'var(--tint-rose)',
                      }}
                    >
                      <CheckCircle size={16} stroke="#B65EAB" aria-hidden="true" />
                      {adv.label}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Villes principales */}
        <section className="pad band-mint" id="villes">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Zones d&apos;intervention</span>
              <h2>
                Nous intervenons dans <span className="em">tout le 77</span>
              </h2>
              <p>
                Location vidéo événement dans toute la Seine-et-Marne, sans frais de
                déplacement.
              </p>
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

        {/* Lieux emblématiques */}
        <section className="pad band-peach" id="lieux">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Lieux emblématiques</span>
              <h2>
                Les plus beaux lieux du <span className="em">77</span>
              </h2>
              <p>
                La Seine-et-Marne regorge de lieux d&apos;exception pour vos
                événements. Notre Starcam sublime chacun d&apos;entre eux.
              </p>
            </Reveal>

            <div className="spec-grid">
              {venues.map((venue, index) => (
                <VenueCard key={venue.title} {...venue} index={index} />
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
              <p>
                Tout ce qu&apos;il faut savoir sur la location Glambot en
                Seine-et-Marne.
              </p>
            </Reveal>

            <div className="mx-auto space-y-4" style={{ maxWidth: 820 }}>
              {seineMarneFAQs.map((faq, index) => (
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
                Votre événement en Seine-et-Marne
                <br />
                mérite le meilleur
              </h2>
              <p>Profitez de notre expertise locale. Devis gratuit et personnalisé sous 24h.</p>
              <div className="btn-row">
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('glambot_seine_et_marne_cta')}
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
