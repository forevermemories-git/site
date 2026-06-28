'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle, ArrowRight, Star } from 'lucide-react'
import ContactForm from '../components/forms/ContactForm'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import Reveal from '@/app/components/home/Reveal'
import { trackConversion } from '@/app/lib/gtag'

const contactFAQs = [
  {
    question: 'Sous quel délai puis-je obtenir un devis ?',
    answer: 'Nous nous engageons à vous répondre sous 24h ouvrées avec une proposition personnalisée. Pour les demandes urgentes, n\'hésitez pas à nous appeler directement.'
  },
  {
    question: 'Le devis est-il gratuit et sans engagement ?',
    answer: 'Oui, absolument ! Tous nos devis sont gratuits et sans aucun engagement. Vous êtes libre de comparer et de choisir la prestation qui vous convient le mieux.'
  },
  {
    question: 'Combien de temps à l\'avance dois-je réserver ?',
    answer: 'Nous recommandons de réserver au moins 1 à 2 mois à l\'avance, surtout pour les week-ends et la haute saison (mai à septembre). Cependant, contactez-nous même pour une date proche, nous ferons notre maximum pour vous satisfaire.'
  }
]

const contactCards = [
  {
    href: 'tel:+33676815953',
    cls: 'w1',
    Icon: Phone,
    title: 'Téléphone',
    value: '06 76 81 59 53',
    subtitle: 'Du lundi au samedi',
    onClick: () => trackConversion.phoneClick(),
  },
  {
    href: 'mailto:hello@forevermemories.fr',
    cls: 'w2',
    Icon: Mail,
    title: 'Email',
    value: 'hello@forevermemories.fr',
    subtitle: 'Réponse sous 24h',
    onClick: () => trackConversion.emailClick(),
  },
  {
    cls: 'w4',
    Icon: MapPin,
    title: 'Zone d\'intervention',
    value: 'Île-de-France',
    subtitle: 'Paris et région parisienne',
  },
]

const departments = [
  'Paris 75', 'Seine-et-Marne 77', 'Yvelines 78', 'Essonne 91',
  'Hauts-de-Seine 92', 'Seine-Saint-Denis 93', 'Val-de-Marne 94', 'Val-d\'Oise 95',
]

const badgeStyle: React.CSSProperties = { boxShadow: 'var(--shadow-sm)' }
const cardShadow: React.CSSProperties = { boxShadow: 'var(--shadow-sm)' }

export default function ContactPage() {
  return (
    <div className="fm-home overflow-hidden">
      <FAQStructuredData faqs={contactFAQs} />
      <Breadcrumbs items={[{ name: 'Contact', href: '/contact' }]} />

      {/* Hero */}
      <section className="fm-hero">
        <div className="hero-blob blob1" aria-hidden="true" />
        <div className="hero-blob blob2" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="kicker">
                <Star size={16} fill="#B65EAB" stroke="#B65EAB" aria-hidden="true" />
                Contactez-nous
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1>
                Parlons de votre{' '}
                <span className="fm-grad-text">événement en Île-de-France</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                Une question sur la Starcam, le glambot ou le livre d&apos;or vidéo ?
                Dites-nous tout : on revient vers vous sous 24h avec un devis clair et
                sans engagement.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact cards */}
      <section className="pad band-rose">
        <div className="wrap">
          <div className="why-grid">
            {contactCards.map(({ href, cls, Icon, title, value, subtitle, onClick }, i) => {
              const inner = (
                <div className="why-card" style={{ height: '100%' }}>
                  <span className={`why-ico ${cls}`} aria-hidden="true">
                    <Icon size={26} />
                  </span>
                  <h3>{title}</h3>
                  <p style={{ color: '#B65EAB', fontWeight: 700, fontSize: '18px', marginBottom: '4px' }}>
                    {value}
                  </p>
                  {subtitle && <p>{subtitle}</p>}
                </div>
              )
              return (
                <Reveal key={title} delay={0.06 * i}>
                  {href ? (
                    <a href={href} onClick={onClick} style={{ display: 'block', height: '100%' }}>
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="pad" style={{ background: 'var(--tint-cream)' }}>
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Demande de devis</span>
            <h2>
              Racontez-nous <span className="em">votre projet</span>
            </h2>
            <p>
              Mariage, gala, soirée corporate ou anniversaire : décrivez votre date
              et vos envies, on s&apos;occupe du reste.
            </p>
          </Reveal>

          <div className="proof-grid" style={{ alignItems: 'start' }}>
            {/* Form */}
            <Reveal>
              <div
                className="rounded-[26px] bg-white p-6 md:p-8"
                style={{ boxShadow: 'var(--shadow-md)' }}
              >
                <ContactForm />
              </div>
            </Reveal>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
              {/* Socials */}
              <Reveal delay={0.06}>
                <div className="rounded-[26px] bg-white p-7" style={cardShadow}>
                  <h3 style={{ fontSize: '20px', marginBottom: '18px' }}>Suivez nos coulisses</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <a
                      href="https://www.instagram.com/forevermemories.off/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl bg-[#FBEFF6] p-4 transition-transform hover:-translate-y-0.5"
                      style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
                    >
                      <span className="why-ico w1" aria-hidden="true" style={{ width: 46, height: 46 }}>
                        <Instagram size={22} />
                      </span>
                      <span style={{ display: 'block' }}>
                        <span className="font-semibold text-[#2A2230]" style={{ display: 'block' }}>Instagram</span>
                        <span className="text-sm text-[#6C6172]" style={{ display: 'block' }}>@forevermemories.off</span>
                      </span>
                      <ArrowRight size={18} className="text-[#B65EAB]" aria-hidden="true" style={{ marginLeft: 'auto' }} />
                    </a>
                    <a
                      href="https://www.facebook.com/profile.php?id=61583156844468"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl bg-[#EEF4FB] p-4 transition-transform hover:-translate-y-0.5"
                      style={{ display: 'flex', alignItems: 'center', gap: '16px' }}
                    >
                      <span className="why-ico w4" aria-hidden="true" style={{ width: 46, height: 46 }}>
                        <Facebook size={22} />
                      </span>
                      <span style={{ display: 'block' }}>
                        <span className="font-semibold text-[#2A2230]" style={{ display: 'block' }}>Facebook</span>
                        <span className="text-sm text-[#6C6172]" style={{ display: 'block' }}>Forever Memories</span>
                      </span>
                      <ArrowRight size={18} className="text-[#B65EAB]" aria-hidden="true" style={{ marginLeft: 'auto' }} />
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Quick contact */}
              <Reveal delay={0.12}>
                <div
                  className="cta-inner"
                  style={{ borderRadius: '26px', padding: '34px 30px', textAlign: 'left' }}
                >
                  <span
                    className="relative z-10 mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ background: 'rgba(255,255,255,0.18)', color: '#fff' }}
                    aria-hidden="true"
                  >
                    <MessageCircle size={24} />
                  </span>
                  <h3 className="relative z-10" style={{ color: '#fff', fontSize: '22px', marginBottom: '8px' }}>
                    Besoin d&apos;une réponse rapide ?
                  </h3>
                  <p className="relative z-10" style={{ color: 'rgba(255,255,255,0.92)', marginBottom: '20px' }}>
                    Appelez-nous directement, on adore parler événements.
                  </p>
                  <a
                    href="tel:+33676815953"
                    onClick={() => trackConversion.phoneClick()}
                    className="btn btn-white relative z-10"
                  >
                    <Phone size={18} aria-hidden="true" stroke="#8E3F84" />
                    06 76 81 59 53
                  </a>
                </div>
              </Reveal>

              {/* Zone d'intervention */}
              <Reveal delay={0.18}>
                <div className="rounded-[26px] bg-white p-7" style={cardShadow}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <MapPin size={20} aria-hidden="true" color="#B65EAB" />
                    <h3 style={{ fontSize: '20px' }}>Zone d&apos;intervention</h3>
                  </div>
                  <p style={{ marginBottom: '16px' }}>
                    Nous couvrons toute l&apos;Île-de-France, sans frais de déplacement
                    supplémentaires :
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {departments.map((dept) => (
                      <span
                        key={dept}
                        className="rounded-full bg-[#FFFBF5] px-3 py-1.5 text-sm font-medium text-[#5B2A55]"
                        style={badgeStyle}
                      >
                        {dept}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pad band-mint">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Avant de réserver</span>
            <h2>
              Questions <span className="em">fréquentes</span>
            </h2>
          </Reveal>

          <div className="mx-auto max-w-3xl" style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {contactFAQs.map((faq, i) => (
              <Reveal key={faq.question} delay={0.06 * i}>
                <div className="rounded-[22px] bg-white p-6 md:p-7" style={cardShadow}>
                  <h3 style={{ fontSize: '19px', marginBottom: '8px' }}>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.18}>
            <p className="text-center" style={{ marginTop: '34px', fontSize: '15px' }}>
              Envie d&apos;en voir plus avant de nous écrire ? Découvrez{' '}
              <Link href="/la-starcam" className="em" style={{ fontWeight: 600 }}>
                la Starcam
              </Link>{' '}
              ou le{' '}
              <Link href="/memory-book" className="em" style={{ fontWeight: 600 }}>
                livre d&apos;or vidéo
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
