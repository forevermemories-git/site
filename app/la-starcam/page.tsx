'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Bot,
  Film,
  Sparkles,
  Smartphone,
  Star,
  Video,
  Zap,
  Share2,
  Download,
  Palette,
  CheckCircle,
  Phone,
} from 'lucide-react'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import MediaController from '@/app/components/home/MediaController'
import Reveal from '@/app/components/home/Reveal'
import Showreel from '@/app/components/home/Showreel'
import EventTypes from '@/app/components/home/EventTypes'
import { trackConversion } from '@/app/lib/gtag'

const specs = [
  {
    cls: 'c1',
    Icon: Bot,
    title: 'Bras robotisé 5 axes',
    text: 'Un mouvement de caméra fluide et cinématographique, impossible à filmer à la main.',
  },
  {
    cls: 'c2',
    Icon: Film,
    title: 'Slow-motion cinématique',
    text: 'Chaque geste ralenti et spectaculaire, transformé en vrai moment de cinéma.',
  },
  {
    cls: 'c3',
    Icon: Sparkles,
    title: 'Full HD 1080p à 120 i/s',
    text: 'Une image nette et premium, avec éclairage studio intégré pour un rendu impeccable.',
  },
  {
    cls: 'c4',
    Icon: Smartphone,
    title: 'Livraison immédiate',
    text: 'La vidéo sur le téléphone des invités sur place, et la galerie en ligne sous 48h.',
  },
]

const steps = [
  {
    title: 'Positionnement',
    text: 'Vous vous placez devant la Starcam. Notre opérateur vous guide pour trouver la meilleure position.',
  },
  {
    title: 'Action !',
    text: 'Le bras robotisé démarre et capture votre mouvement en vidéo haute définition.',
  },
  {
    title: 'Traitement automatique',
    text: 'La vidéo est traitée en slow-motion cinématique avec votre branding personnalisé.',
  },
  {
    title: 'Réception immédiate',
    text: 'Vous recevez votre vidéo instantanément, prête à être partagée.',
  },
]

const advantages = [
  {
    cls: 'w1',
    Icon: Video,
    title: 'Qualité cinématographique',
    text: 'Des vidéos Full HD au rendu professionnel. Éclairage studio intégré pour un résultat impeccable.',
  },
  {
    cls: 'w2',
    Icon: Zap,
    title: 'Effet wow instantané',
    text: 'Vos invités sont immédiatement bluffés. Une animation qui crée de l’émulation et des souvenirs marquants.',
  },
  {
    cls: 'w3',
    Icon: Share2,
    title: 'Viralité et partage',
    text: 'Vos invités partagent leurs vidéos sur Instagram, TikTok et Facebook. Une visibilité organique pour votre événement.',
  },
  {
    cls: 'w4',
    Icon: Download,
    title: 'Livraison immédiate',
    text: 'Chaque invité repart avec sa vidéo sur place, et la galerie en ligne arrive sous 48h.',
  },
  {
    cls: 'w5',
    Icon: Palette,
    title: 'Personnalisation complète',
    text: 'Logo, couleurs, musique. Tout s’adapte à l’identité de votre événement.',
  },
  {
    cls: 'w6',
    Icon: CheckCircle,
    title: 'Service clé en main',
    text: 'Installation, animation, démontage. Notre équipe gère tout de A à Z.',
  },
]

export default function LaStarcamPage() {
  return (
    <div className="fm-home overflow-hidden">
      <Breadcrumbs items={[{ name: 'La Starcam', href: '/la-starcam' }]} />
      <MediaController />

      {/* Hero */}
      <section className="fm-hero" id="top">
        <div className="hero-blob blob1" aria-hidden="true" />
        <div className="hero-blob blob2" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Reveal>
              <span className="kicker">
                <Star size={16} fill="#B65EAB" stroke="#B65EAB" aria-hidden="true" />
                ForeverMemories · la Starcam
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1>
                La Starcam, le robot vidéo qui{' '}
                <span className="fm-grad-text">sublime vos événements</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead">
                Un bras robotisé 5 axes équipé d&apos;une caméra cinéma. Il filme
                vos invités en slow-motion, comme sur un tapis rouge. Vidéo sur
                place, galerie en ligne sous 48h.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="hero-cta">
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('starcam_hero')}
                  className="btn btn-primary btn-lg"
                >
                  Réserver mon événement
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a href="#fonctionnement" className="btn btn-ghost btn-lg">
                  Comment ça fonctionne
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="hero-trust">
                <span className="stars" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </span>
                Plus de 1000 vidéos produites
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="hero-media">
            <svg
              className="star-accent spin"
              width="42"
              height="42"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path d="M12 1l2 7 7 2-7 2-2 7-2-7-7-2 7-2z" fill="#FFC93C" />
            </svg>
            <div className="sticker floaty">Full HD · 120 i/s</div>
            <div className="hm-grid">
              <div className="hm-frame">
                <Image
                  src="/images/products/starcam-glambot.jpg"
                  alt="La Starcam, bras robotisé vidéo de ForeverMemories"
                  fill
                  priority
                  sizes="(max-width: 880px) 45vw, 280px"
                  className="object-cover"
                />
              </div>
              <div className="hm-frame">
                <video
                  data-fm-vid
                  src="/videos/clips/clip-1.mp4"
                  poster="/images/posters/clip-1-poster.jpg"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Invité filmé en slow-motion par la Starcam"
                />
              </div>
              <div className="hm-frame">
                <video
                  data-fm-vid
                  src="/videos/clips/clip-2.mp4"
                  poster="/images/posters/clip-2-poster.jpg"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Invité filmé en slow-motion par la Starcam"
                />
              </div>
              <div className="hm-frame">
                <video
                  data-fm-vid
                  src="/videos/video-al-groupe.webm"
                  poster="/images/posters/video-al-groupe-poster.jpg"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Groupe d'invités filmé par la Starcam"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Réalisations en vidéo (réutilise le showreel de la home) */}
      <Showreel />

      {/* C'est quoi la Starcam */}
      <section className="pad band-sun" id="technologie">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">La technologie des tapis rouges</span>
            <h2>
              C&apos;est quoi <span className="em">la Starcam</span> ?
            </h2>
            <p>
              Un bras robotisé sur 5 axes équipé d&apos;une caméra haute
              définition. En quelques secondes, il capture des vidéos
              spectaculaires en slow-motion, avec des mouvements fluides et
              cinématographiques.
            </p>
          </Reveal>

          <div className="spec-grid">
            {specs.map(({ cls, Icon, title, text }, i) => (
              <Reveal key={title} delay={0.06 * i}>
                <div className="cap">
                  <span className={`cap-ico ${cls}`} aria-hidden="true">
                    <Icon size={26} />
                  </span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça fonctionne */}
      <section className="pad band-mint" id="fonctionnement">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Le déroulé</span>
            <h2>
              Comment fonctionne <span className="em">la Starcam</span> ?
            </h2>
            <p>
              Une expérience simple et rapide, pour un résultat spectaculaire en
              une à deux minutes seulement.
            </p>
          </Reveal>

          <div className="steps-grid">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={0.08 * i}>
                <div className="step">
                  <span className="step-num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir la Starcam */}
      <section className="pad band-rose" id="avantages">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Les avantages</span>
            <h2>
              Pourquoi choisir <span className="em">la Starcam</span> ?
            </h2>
            <p>
              Une animation premium qui fait briller vos invités et marque les
              esprits longtemps après la soirée.
            </p>
          </Reveal>

          <div className="why-grid">
            {advantages.map(({ cls, Icon, title, text }, i) => (
              <Reveal key={title} delay={0.06 * i}>
                <div className="why-card">
                  <span className={`why-ico ${cls}`} aria-hidden="true">
                    <Icon size={26} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pour quels événements (composant partagé avec la home: cartes animées identiques) */}
      <EventTypes />

      {/* CTA Final */}
      <section className="cta-band band-sky" id="cta">
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
              Prêt à faire briller
              <br />
              vos invités ?
            </h2>
            <p>
              Réservez votre date et offrez à vos invités leur moment de star.
            </p>
            <div className="btn-row">
              <Link
                href="/contact"
                onClick={() => trackConversion.devisClick('starcam_page_cta')}
                className="btn btn-white btn-lg"
              >
                Réserver mon événement
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
