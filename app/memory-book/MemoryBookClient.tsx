'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  QrCode,
  BookOpen,
  Images,
  Archive,
  Info,
  Camera,
  Upload,
  PenLine,
  Clock,
  LayoutGrid,
  Smartphone,
  ShieldCheck,
  Download,
  BarChart3,
  Sparkles,
  Star,
  Phone,
  Check,
} from 'lucide-react'
import MediaController from '@/app/components/home/MediaController'
import Reveal from '@/app/components/home/Reveal'
import EventTypes from '@/app/components/home/EventTypes'
import { trackConversion } from '@/app/lib/gtag'

// Même instant, plusieurs angles (illustration de l'album chronologique)
const sameMoment = [
  '/images/posters/video-2-poster.jpg',
  '/images/posters/video-4-poster.jpg',
  '/images/posters/video-6-poster.jpg',
]

const tabs = [
  {
    cls: 'w1',
    Icon: Info,
    title: 'Infos',
    text: "L'essentiel de l'événement : programme, lieu, mot des organisateurs et tout ce que les invités doivent savoir.",
  },
  {
    cls: 'w2',
    Icon: BookOpen,
    title: "Livre d'or vidéo",
    text: "Un message vidéo ou audio laissé pour les hôtes. Un mot tendre, un fou rire, une dédicace : un vrai livre d'or, version vidéo.",
  },
  {
    cls: 'w3',
    Icon: Images,
    title: 'Album chronologique',
    text: "Le pot commun des photos et vidéos de tout le monde, rangé automatiquement par ordre chronologique. Un même instant, sous tous les angles.",
  },
]

const steps = [
  {
    title: 'Un QR code unique',
    text: "Affiché sur vos tables ou votre faire-part. Les invités le scannent, sans aucune inscription ni application à installer.",
  },
  {
    title: 'La page événement',
    text: "Elle s'ouvre directement dans le navigateur, avec trois onglets clairs : Infos, Livre d'or et Album.",
  },
  {
    title: 'Le souvenir collectif',
    text: "Chacun laisse son message vidéo et dépose ses photos. L'album se range tout seul par heure de capture.",
  },
]

const guestFeatures = [
  {
    Icon: Camera,
    title: 'Message vidéo, audio ou écrit',
    text: "Caméra intégrée pour filmer sur place, micro pour un message audio, ou quelques mots écrits. Au choix de l'invité.",
  },
  {
    Icon: Upload,
    title: 'Dépose photos et vidéos',
    text: "Chaque invité ajoute ses propres clichés et séquences. Tous les angles d'un même moment se retrouvent réunis.",
  },
  {
    Icon: Clock,
    title: 'Album photo chronologique',
    text: "L'heure de capture réelle (EXIF) range chaque souvenir au bon endroit. Le même instant apparaît depuis plusieurs angles.",
  },
  {
    Icon: LayoutGrid,
    title: 'Galerie organique et lightbox',
    text: "Une mosaïque vivante, une lecture façon Reels en plein écran, et un espace Vos envois propre à chaque appareil.",
  },
]

const adminFeatures = [
  {
    cls: 'w1',
    Icon: Sparkles,
    title: 'Création de l’événement',
    text: "On configure votre page, votre QR code et vos onglets aux couleurs et au nom de votre événement.",
  },
  {
    cls: 'w2',
    Icon: PenLine,
    title: 'Éditeur & thèmes',
    text: "Un éditeur visuel avec aperçu en direct multi-appareils et des thèmes curatés (dont l'Argentique) pour habiller votre page avant le jour J.",
  },
  {
    cls: 'w3',
    Icon: ShieldCheck,
    title: 'Modération',
    text: "Vous gardez la main : chaque contribution peut être validée, masquée ou retirée en quelques secondes.",
  },
  {
    cls: 'w4',
    Icon: Download,
    title: 'Téléchargement complet',
    text: "Récupérez l'intégralité des vidéos et photos en un seul fichier ZIP, en pleine qualité.",
  },
  {
    cls: 'w5',
    Icon: BarChart3,
    title: 'Statistiques',
    text: "Suivez le nombre de messages, de contributeurs et de médias déposés tout au long de votre événement.",
  },
  {
    cls: 'w6',
    Icon: QrCode,
    title: 'Un seul QR code',
    text: "Une porte d'entrée unique pour tous vos invités, à imprimer où vous le souhaitez. Simple et sans friction.",
  },
]

// Grain argentique (même SVG fractalNoise que le thème réel du Memory Book)
const MB_GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

// Mockup de la page invité, rendu fidèle au thème « Argentique » (un de nos thèmes curatés) :
// fond crème #fbf8f3, accent terracotta #b0481f, titres serif Newsreader, grain, tirages photo.
const ARG = { bg: '#fbf8f3', ink: '#211b17', soft: '#6b5d4f', line: '#e7ddd0', accent: '#b0481f' }
const serif = { fontFamily: 'var(--font-newsreader), Georgia, serif' }
const sepia = { filter: 'sepia(0.12) saturate(1.05)' as const }

function PhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[280px]">
      <div
        className="relative rounded-[46px] bg-[#211b17] p-3"
        style={{ boxShadow: '0 34px 80px rgba(33, 27, 23, 0.34)' }}
      >
        {/* Écran — page Infos, thème Argentique */}
        <div
          className="relative overflow-hidden rounded-[34px]"
          style={{ background: ARG.bg, color: ARG.ink }}
        >
          {/* Grain */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10"
            style={{ backgroundImage: MB_GRAIN, opacity: 0.05, mixBlendMode: 'multiply' }}
          />

          <div className="relative z-20 px-4 pb-4 pt-5">
            {/* Couverture (tirage photo) */}
            <div
              className="relative overflow-hidden"
              style={{ aspectRatio: '3 / 2', borderRadius: 12, boxShadow: '0 16px 34px -18px rgba(33,27,23,0.7)' }}
            >
              <Image
                src="/images/products/mb-cover-wedding.jpg"
                alt="Photo de couverture de la page invité : des mariés dans un parc"
                fill
                sizes="280px"
                className="object-cover"
                style={sepia}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{ boxShadow: 'inset 0 0 46px rgba(33,27,23,0.30)' }}
              />
            </div>

            {/* Titre */}
            <p className="mt-4 text-[9px] uppercase tracking-[0.28em]" style={{ color: ARG.soft }}>
              Samedi 14 juin · Paris
            </p>
            <h3 style={serif} className="mt-1.5 text-[27px] leading-[1.0]">
              Léa &amp; Tom
            </h3>
            <p style={{ ...serif, color: ARG.soft }} className="mt-2 text-[12.5px] leading-relaxed">
              Bienvenue ! Laissez-nous un petit mot et vos plus belles photos de la journée.
            </p>

            {/* Cartes d'action (Livre d'or / Album / Vos envois) */}
            <div className="mt-4" style={{ display: 'grid', gap: 8 }}>
              <span
                className="items-center gap-3 rounded-2xl px-3.5 py-3 text-white"
                style={{ display: 'flex', background: ARG.accent }}
              >
                <Camera size={20} aria-hidden="true" />
                <span>
                  <span style={serif} className="block text-[14px] font-semibold leading-tight">
                    Livre d&apos;or
                  </span>
                  <span className="block text-[11px] opacity-85">Un message pour les hôtes</span>
                </span>
              </span>

              <span
                className="items-center gap-3 rounded-2xl px-3.5 py-3"
                style={{ display: 'flex', background: '#fff', boxShadow: `inset 0 0 0 1px ${ARG.line}` }}
              >
                <span style={{ display: 'grid', placeItems: 'center', width: 34, height: 34, borderRadius: 11, background: `${ARG.accent}1f`, color: ARG.accent }}>
                  <Images size={18} aria-hidden="true" />
                </span>
                <span>
                  <span style={serif} className="block text-[14px] font-semibold leading-tight">
                    Album
                  </span>
                  <span className="block text-[11px]" style={{ color: ARG.soft }}>Photos et vidéos, par moment</span>
                </span>
              </span>

              <span
                className="items-center gap-3 rounded-2xl px-3.5 py-3"
                style={{ display: 'flex', background: '#fff', boxShadow: `inset 0 0 0 1px ${ARG.line}` }}
              >
                <span style={{ display: 'grid', placeItems: 'center', width: 34, height: 34, borderRadius: 11, background: `${ARG.accent}1f`, color: ARG.accent }}>
                  <Archive size={18} aria-hidden="true" />
                </span>
                <span>
                  <span style={serif} className="block text-[14px] font-semibold leading-tight">
                    Vos envois
                  </span>
                  <span className="block text-[11px]" style={{ color: ARG.soft }}>Gérer mes contributions</span>
                </span>
              </span>
            </div>

            {/* Signature */}
            <div className="mt-4" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <span className="text-[10px]" style={{ color: ARG.soft, opacity: 0.75 }}>Memory Book by</span>
              <Image
                src="/images/fm-logo-black.png"
                alt="ForeverMemories"
                width={40}
                height={40}
                className="h-[15px] w-auto"
                style={{ opacity: 0.85 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Légende : c'est un de nos thèmes curatés */}
      <p className="mt-4 text-center text-[13px] text-[#6C6172]">
        Aperçu de la page invité · thème <span style={{ color: ARG.accent, fontWeight: 600 }}>Argentique</span>
      </p>
    </div>
  )
}

export default function MemoryBookClient() {
  return (
    <div className="fm-home overflow-hidden">
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
                ForeverMemories · Memory Book
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1>
                Le livre d&apos;or vidéo et l&apos;album partagé{' '}
                <span className="fm-grad-text">de votre événement</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead">
                Deux choses en une page. Vos invités laissent un message vidéo
                dans le livre d&apos;or, et déposent leurs photos et vidéos dans
                un album qui se range tout seul par ordre chronologique. Un
                simple QR code, sans aucune inscription.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="hero-cta">
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('memorybook_hero')}
                  className="btn btn-primary btn-lg"
                >
                  Contacter l&apos;équipe
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
                <a href="#how" className="btn btn-ghost btn-lg">
                  Comment ça marche
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
                Souvenirs collectifs, prêts à partager
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
            <PhoneMockup />
          </Reveal>
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="pad band-sun" id="how">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Le principe</span>
            <h2>
              Comment marche <span className="em">le Memory Book</span> ?
            </h2>
            <p>
              Un seul QR code ouvre une page événement avec trois onglets. Aucune
              application, aucune inscription : vos invités participent en
              quelques secondes.
            </p>
          </Reveal>

          <div className="steps-grid is-3">
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

      {/* Une page, trois onglets */}
      <section className="pad band-mint" id="onglets">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">La page invité</span>
            <h2>
              Une page, <span className="em">trois onglets</span>
            </h2>
            <p>
              Tout est rassemblé au même endroit : les informations, le livre
              d&apos;or et l&apos;album. Clair pour les invités, complet pour vous.
            </p>
          </Reveal>

          <div className="why-grid">
            {tabs.map(({ cls, Icon, title, text }, i) => (
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

      {/* L'expérience invité */}
      <section className="pad band-rose" id="invites">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Côté invité</span>
            <h2>
              Le <span className="em">livre d&apos;or vidéo</span> et l&apos;album
              chronologique
            </h2>
            <p>
              Chaque invité devient contributeur. Un message à laisser, des photos
              à partager, et un album qui se construit tout seul, dans le bon
              ordre.
            </p>
          </Reveal>

          <div className="spec-grid">
            {guestFeatures.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={0.06 * i}>
                <div className="cap">
                  <span className={`cap-ico c${i + 1}`} aria-hidden="true">
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

          {/* Même instant, plusieurs angles */}
          <Reveal delay={0.1}>
            <div
              className="mx-auto mt-12 max-w-[760px] rounded-[28px] bg-white p-6"
              style={{ boxShadow: '0 18px 44px rgba(91, 42, 85, 0.10)' }}
            >
              <p className="mb-4 text-center text-[14px] font-semibold uppercase tracking-[0.08em] text-[#B65EAB]">
                Le même instant, plusieurs angles
              </p>
              <div className="gap-3" style={{ display: 'flex' }}>
                {sameMoment.map((src, i) => (
                  <div
                    key={src}
                    className="relative overflow-hidden rounded-2xl"
                    style={{ flex: '1 1 0', aspectRatio: '3 / 4' }}
                  >
                    <Image
                      src={src}
                      alt={`Le même moment de l'événement filmé sous un angle différent (${i + 1} sur 3)`}
                      fill
                      sizes="(max-width: 768px) 30vw, 240px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-[14px] text-[#6C6172]">
                Grâce à l&apos;heure de capture réelle, les souvenirs d&apos;un même
                moment se rangent côte à côte. Vous revivez la scène sous tous les
                angles.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Côté organisateur */}
      <section className="pad band-peach" id="organisateur">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Côté organisateur</span>
            <h2>
              Vous gardez <span className="em">la main</span>
            </h2>
            <p>
              De la création de la page à la récupération de tous les souvenirs,
              un espace organisateur complet vous accompagne avant, pendant et
              après l&apos;événement.
            </p>
          </Reveal>

          <div className="why-grid">
            {adminFeatures.map(({ cls, Icon, title, text }, i) => (
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

      {/* Le duo avec la Starcam */}
      <section className="pad band-sky" id="duo">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Le duo gagnant</span>
            <h2>
              Le complément parfait de <span className="em">la Starcam</span>
            </h2>
            <p>
              Deux façons de prolonger l&apos;émotion. La Starcam crée le
              spectacle, le Memory Book rassemble la mémoire collective de vos
              invités.
            </p>
          </Reveal>

          <div className="products-grid">
            <Reveal>
              <article className="pillar">
                <div className="pillar-head">
                  <span className="ptag live">Produit · La Starcam</span>
                  <span className="pnum">01</span>
                </div>
                <h3>La Starcam</h3>
                <p className="pdesc">
                  Le bras robotisé qui filme vos invités en slow-motion, comme sur
                  un tapis rouge. Des vidéos cinématiques poussées par le robot,
                  livrées sur place.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    'Vidéos slow-motion spectaculaires',
                    'Effet wow immédiat sur place',
                    'Galerie en ligne sous 48h',
                  ].map((line) => (
                    <li
                      key={line}
                      className="items-start gap-2 text-[15px] text-[#6C6172]"
                      style={{ display: 'flex' }}
                    >
                      <Check size={18} stroke="#B65EAB" aria-hidden="true" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/la-starcam" className="plink inline-flex">
                  Découvrir la Starcam
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            </Reveal>

            <Reveal delay={0.08}>
              <article className="pillar">
                <div className="pillar-head">
                  <span className="ptag live">Produit · Memory Book</span>
                  <span className="pnum">02</span>
                </div>
                <h3>Le Memory Book</h3>
                <p className="pdesc">
                  Le livre d&apos;or vidéo et l&apos;album collaboratif de votre
                  événement. Les souvenirs de tous vos invités, réunis et rangés
                  tout seuls.
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Messages vidéo, audio et écrits",
                    'Album photo chronologique partagé',
                    'Téléchargement complet en un ZIP',
                  ].map((line) => (
                    <li
                      key={line}
                      className="items-start gap-2 text-[15px] text-[#6C6172]"
                      style={{ display: 'flex' }}
                    >
                      <Check size={18} stroke="#B65EAB" aria-hidden="true" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/tarifs" className="plink inline-flex">
                  Voir nos formules
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pour quels événements (composant partagé avec la home) */}
      <EventTypes />

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
              Offrez un Memory Book
              <br />
              à votre événement
            </h2>
            <p>
              Le Memory Book est un service clé en main. Contactez-nous, on
              configure votre page, votre QR code et votre album.
            </p>
            <div className="btn-row">
              <Link
                href="/contact"
                onClick={() => trackConversion.devisClick('memorybook_page_cta')}
                className="btn btn-white btn-lg"
              >
                <Smartphone size={18} aria-hidden="true" stroke="#8E3F84" />
                Contacter l&apos;équipe
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
