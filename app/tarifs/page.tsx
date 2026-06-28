'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Check,
  Star,
  Heart,
  Building2,
  PartyPopper,
  Crown,
  Phone,
  Sparkles,
  MapPin,
} from 'lucide-react'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import Reveal from '@/app/components/home/Reveal'
import { trackConversion } from '@/app/lib/gtag'

const starcamPoints = [
  'Bras robotisé 5 axes, slow-motion cinématique Full HD',
  'Opérateur professionnel et éclairage studio inclus',
  'Vidéo livrée sur place, galerie en ligne sous 48h',
  'Passages illimités pour tous vos invités',
]

const memoryBookPoints = [
  'Un QR code, sans application ni inscription',
  "Messages vidéo et audio dans le livre d'or",
  'Album photo et vidéo chronologique partagé',
  'Téléchargement complet de tous les souvenirs',
]

const inclus = [
  'Transport et installation sur site en Île-de-France',
  'Opérateur professionnel formé et expérimenté',
  'Bras robotisé de dernière génération, éclairage et son',
  'Vidéos en qualité Full HD professionnelle',
  'Livraison immédiate pour chaque participant',
  'Galerie en ligne privée accessible sous 48h',
  'Passages illimités pour tous vos invités',
]

const paiement = [
  { title: 'Acompte à la réservation', detail: '30% pour confirmer votre date' },
  { title: 'Solde le jour J', detail: '70% le jour de l\'événement, avant installation' },
  { title: 'Paiements acceptés', detail: 'Virement bancaire, PayPal, espèces' },
]

const eventLinks = [
  { href: '/mariages', Icon: Heart, label: 'Mariages' },
  { href: '/evenements-corporate', Icon: Building2, label: 'Corporate' },
  { href: '/anniversaires', Icon: PartyPopper, label: 'Anniversaires' },
  { href: '/galas', Icon: Crown, label: 'Galas' },
]

const departements = [
  'Paris 75', 'Seine-et-Marne 77', 'Yvelines 78', 'Essonne 91',
  'Hauts-de-Seine 92', 'Seine-Saint-Denis 93', 'Val-de-Marne 94', 'Val-d\'Oise 95',
]

const cardShadow: React.CSSProperties = { boxShadow: 'var(--shadow-sm)' }

export default function TarifsPage() {
  return (
    <div className="fm-home overflow-hidden">
      <Breadcrumbs items={[{ name: 'Tarifs', href: '/tarifs' }]} />

      {/* Hero */}
      <section className="fm-hero">
        <div className="hero-blob blob1" aria-hidden="true" />
        <div className="hero-blob blob2" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="kicker">
                <Star size={16} fill="#B65EAB" stroke="#B65EAB" aria-hidden="true" />
                Tarifs &amp; devis
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1>
                Nos prestations, <span className="fm-grad-text">sur devis</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                La Starcam et le Memory Book, pour vos événements en Île-de-France. Chaque
                événement est unique : on vous fait une proposition personnalisée et gratuite
                sous 24h.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="hero-cta" style={{ justifyContent: 'center' }}>
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('tarifs_hero')}
                  className="btn btn-primary btn-lg"
                >
                  Demander mon devis
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a href="#produits" className="btn btn-ghost btn-lg">
                  Voir nos produits
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Deux produits, sur devis */}
      <section className="pad band-rose" id="produits">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Sur devis</span>
            <h2>
              Deux produits, une <span className="em">prestation sur-mesure</span>
            </h2>
            <p>
              Choisissez votre produit, on vous fait une proposition adaptée à votre
              événement. Vous voulez les deux ? On combine, évidemment.
            </p>
          </Reveal>

          <div className="products-grid">
            <Reveal>
              <article className="pillar">
                <div className="pillar-head">
                  <span className="ptag live">Produit</span>
                  <span className="pnum">01</span>
                </div>
                <h3>La Starcam</h3>
                <p className="pdesc">
                  Le robot vidéo slow-motion qui filme vos invités comme sur un tapis
                  rouge. L&apos;effet wow sur place, des souvenirs cinématiques.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '16px 0 22px' }}>
                  {starcamPoints.map((line) => (
                    <li key={line} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <Check size={18} color="#B65EAB" aria-hidden="true" style={{ flex: 'none', marginTop: '2px' }} />
                      <span style={{ fontSize: '14.5px', color: 'var(--ink-soft)' }}>{line}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?produit=starcam"
                  onClick={() => trackConversion.devisClick('tarifs_starcam')}
                  className="btn btn-primary"
                  style={{ justifyContent: 'center', width: '100%' }}
                >
                  Demander un devis Starcam
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="pillar">
                <div className="pillar-head">
                  <span className="ptag live">Produit</span>
                  <span className="pnum">02</span>
                </div>
                <h3>Le Memory Book</h3>
                <p className="pdesc">
                  Le livre d&apos;or vidéo et l&apos;album collaboratif de votre événement.
                  Les souvenirs de tous vos invités, réunis et rangés tout seuls.
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: '16px 0 22px' }}>
                  {memoryBookPoints.map((line) => (
                    <li key={line} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <Check size={18} color="#B65EAB" aria-hidden="true" style={{ flex: 'none', marginTop: '2px' }} />
                      <span style={{ fontSize: '14.5px', color: 'var(--ink-soft)' }}>{line}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?produit=memory-book"
                  onClick={() => trackConversion.devisClick('tarifs_memorybook')}
                  className="btn btn-coral"
                  style={{ justifyContent: 'center', width: '100%' }}
                >
                  Demander un devis Memory Book
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <p className="text-center" style={{ marginTop: '34px', fontSize: '16px' }}>
              Vous voulez les deux ?{' '}
              <Link href="/contact?produit=les-deux" className="em" style={{ fontWeight: 600 }}>
                Demandez un devis combiné
              </Link>{' '}
              : la Starcam pour le spectacle, le Memory Book pour la mémoire. Des heures
              supplémentaires sont possibles sur devis.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ce qui est inclus + paiement */}
      <section className="pad band-sun">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Toujours compris</span>
            <h2>
              Ce qui est <span className="em">inclus</span>
            </h2>
          </Reveal>

          <div className="proof-grid" style={{ alignItems: 'start' }}>
            <Reveal>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {inclus.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span
                      className="rounded-full"
                      style={{ flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28, background: '#FBEFF6', color: '#B65EAB', marginTop: '1px' }}
                      aria-hidden="true"
                    >
                      <Check size={16} />
                    </span>
                    <span style={{ color: 'var(--ink)', fontSize: '16px' }}>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[32px] bg-white p-8" style={{ boxShadow: 'var(--shadow-md)' }}>
                <h3 style={{ fontSize: '21px', marginBottom: '18px' }}>Facilités de paiement</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {paiement.map(({ title, detail }) => (
                    <div key={title} className="rounded-2xl p-4" style={{ background: 'var(--tint-cream)' }}>
                      <div style={{ fontWeight: 700, color: 'var(--ink)', marginBottom: '2px' }}>{title}</div>
                      <div style={{ fontSize: '14px', color: 'var(--ink-soft)' }}>{detail}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Liens événements */}
      <section className="pad band-sky">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Par type d&apos;événement</span>
            <h2>
              Découvrez nos <span className="em">prestations</span>
            </h2>
          </Reveal>
          <div className="events-grid">
            {eventLinks.map(({ href, Icon, label }, i) => (
              <Reveal key={label} delay={0.06 * i}>
                <Link
                  href={href}
                  className="rounded-[22px] bg-white p-7 text-center transition-transform hover:-translate-y-1"
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', ...cardShadow }}
                >
                  <span className="cap-ico c1" aria-hidden="true" style={{ marginBottom: '12px' }}>
                    <Icon size={24} />
                  </span>
                  <span style={{ fontWeight: 700, color: 'var(--ink)', fontSize: '17px' }}>{label}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="pad band-peach">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Île-de-France</span>
            <h2>
              <MapPin size={26} color="#B65EAB" aria-hidden="true" style={{ display: 'inline', verticalAlign: '-4px', marginRight: '6px' }} />
              Zone d&apos;<span className="em">intervention</span>
            </h2>
            <p>Nous intervenons dans toute l&apos;Île-de-France, sans frais de déplacement supplémentaires.</p>
          </Reveal>
          <Reveal>
            <div
              className="mx-auto"
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', maxWidth: '720px' }}
            >
              {departements.map((dept) => (
                <span
                  key={dept}
                  className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#5B2A55]"
                  style={cardShadow}
                >
                  {dept}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-center" style={{ marginTop: '24px', fontSize: '15px' }}>
              Interventions possibles en dehors de l&apos;Île-de-France sur devis (frais de
              déplacement supplémentaires).
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="cta-band" style={{ background: 'var(--tint-cream)' }}>
        <div className="wrap">
          <Reveal className="cta-inner">
            <span className="dotblob cta-d1" aria-hidden="true" />
            <span className="dotblob cta-d2" aria-hidden="true" />
            <span
              className="relative z-10 mx-auto mb-5 inline-flex items-center justify-center rounded-full px-4 py-1.5 text-sm font-semibold"
              style={{ background: 'rgba(255,255,255,0.18)', color: '#fff' }}
            >
              <Sparkles size={15} aria-hidden="true" style={{ marginRight: '7px' }} />
              Devis gratuit
            </span>
            <h2>
              Demandez votre
              <br />
              devis personnalisé
            </h2>
            <p>Une proposition sur-mesure en moins de 24h, sans engagement.</p>
            <div className="btn-row">
              <Link
                href="/contact"
                onClick={() => trackConversion.devisClick('tarifs_page_cta')}
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
  )
}
