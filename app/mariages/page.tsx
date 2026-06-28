'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Heart,
  Camera,
  Users,
  Star,
  CheckCircle,
  Phone,
} from 'lucide-react'
import Image from 'next/image'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import MediaController from '@/app/components/home/MediaController'
import Reveal from '@/app/components/home/Reveal'
import Showreel from '@/app/components/home/Showreel'
import { trackConversion } from '@/app/lib/gtag'

const mariagesFAQs = [
  {
    question: 'Combien de temps dure la location ?',
    answer: 'Nos formules mariage incluent la présence de la Starcam pendant toute votre réception (généralement 4-6h). Vos invités peuvent passer autant de fois qu\'ils le souhaitent, sans limitation.'
  },
  {
    question: 'Quel espace faut-il prévoir ?',
    answer: 'Un espace d\'environ 4m x 3m est idéal. Notre équipe s\'adapte à la configuration de votre salle pour trouver le meilleur emplacement, en intérieur ou extérieur (sous chapiteau).'
  },
  {
    question: 'Les invités repartent-ils vraiment avec leurs vidéos ?',
    answer: 'Oui ! Chaque participant reçoit sa vidéo immédiatement sur son téléphone. De plus, toutes les vidéos sont rassemblées dans une galerie en ligne privée accessible sous 48h.'
  },
  {
    question: 'Combien d\'invités peuvent participer ?',
    answer: 'Il n\'y a pas de limite ! Que vous ayez 50 ou 200 invités, chacun pourra profiter de l\'expérience. En moyenne, un passage dure 1-2 minutes, permettant à tout le monde de passer plusieurs fois dans la soirée.'
  },
  {
    question: 'Intervenez-vous partout en Île-de-France ?',
    answer: 'Oui, nous nous déplaçons dans toute l\'Île-de-France : Paris, Seine-et-Marne (77), Yvelines (78), Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d\'Oise (95).'
  }
]

const features = [
  {
    cls: 'w1',
    Icon: Star,
    title: 'Effet wow garanti',
    description: 'Vos invités se sentiront comme des stars avec des vidéos slow-motion dignes du tapis rouge.',
  },
  {
    cls: 'w2',
    Icon: Camera,
    title: 'Souvenirs cinématographiques',
    description: 'Chaque invité repart avec ses vidéos immédiatement. Qualité Full HD pour un rendu professionnel.',
  },
  {
    cls: 'w3',
    Icon: Users,
    title: 'Animation pour tous',
    description: "Petits et grands adorent ! Une activité conviviale qui crée de l'émulation et des moments de rire.",
  },
]

const steps = [
  {
    title: 'Installation discrète',
    description: 'Notre équipe arrive 1h avant pour installer et tester le matériel. Tout est prêt pour le début de la réception.',
  },
  {
    title: 'Opérateur dédié',
    description: 'Un professionnel reste sur place pour guider vos invités et garantir des vidéos parfaites.',
  },
  {
    title: 'Livraison instantanée',
    description: 'Chaque invité reçoit sa vidéo immédiatement après le passage. Partage instantané sur les réseaux sociaux.',
  },
  {
    title: 'Galerie en ligne',
    description: 'Toutes les vidéos accessibles via un lien privé sous 48h. Conservez ces souvenirs à vie.',
  },
]

const inclusions = [
  'Installation et démontage du matériel',
  'Opérateur professionnel présent toute la soirée',
  'Vidéos slow-motion en Full HD',
  'Livraison instantanée pour chaque invité',
  'Galerie en ligne privée sous 48h',
  'Durée illimitée de passage',
  'Personnalisation possible avec vos couleurs',
  "Aide à l'animation et ambiance festive",
]

export default function MariagesPage() {
  return (
    <>
      <FAQStructuredData faqs={mariagesFAQs} />

      <div className="fm-home overflow-hidden">
        <Breadcrumbs items={[{ name: 'Mariages', href: '/mariages' }]} />
        <MediaController />

        {/* Hero */}
        <section className="fm-hero" id="top">
          <div className="hero-blob blob1" aria-hidden="true" />
          <div className="hero-blob blob2" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <Reveal>
                <span className="kicker">
                  <Heart size={16} fill="#B65EAB" stroke="#B65EAB" aria-hidden="true" />
                  Special mariages
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1>
                  La <span className="fm-grad-text">Starcam</span> pour votre mariage,
                  une animation glamour inoubliable
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="lead">
                  Offrez à vos invités une experience digne des plus grandes
                  ceremonies, avec des vidéos slow-motion spectaculaires sur un
                  vrai tapis rouge.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="hero-cta">
                  <Link
                    href="/contact"
                    onClick={() => trackConversion.devisClick('mariages_hero')}
                    className="btn btn-primary btn-lg"
                  >
                    Demander un devis gratuit
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <a href="#tarifs" className="btn btn-ghost btn-lg">
                    Voir nos formules mariage
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
                  Glambot mariage disponible dans toute l&apos;Île-de-France
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.16} className="hero-media">
              <div className="sticker floaty">Full HD · 120 i/s</div>
              <div className="hm-grid">
                <div className="hm-frame">
                  <video
                    data-fm-vid
                    src="/videos/video-chezrose-girls.webm"
                    poster="/images/posters/video-chezrose-girls-poster.jpg"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Mariage filmé en slow-motion par la Starcam"
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
                    aria-label="Invitée filmée en slow-motion sur le tapis rouge"
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
                    aria-label="Groupe d'invités d'un mariage filmé par la Starcam"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Pourquoi la Starcam pour votre mariage */}
        <section className="pad band-rose">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Les avantages</span>
              <h2>
                Pourquoi choisir la <span className="em">Starcam</span> ?
              </h2>
              <p>
                Une animation qui marquera les esprits et créera des souvenirs
                inoubliables.
              </p>
            </Reveal>

            <div className="why-grid">
              {features.map(({ cls, Icon, title, description }, i) => (
                <Reveal key={title} delay={0.08 * i}>
                  <div className="why-card">
                    <span className={`why-ico ${cls}`} aria-hidden="true">
                      <Icon size={26} />
                    </span>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Showreel partage avec la home */}
        <Showreel />

        {/* Déroulement le jour J */}
        <section className="pad band-sun">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Le déroulé</span>
              <h2>
                Comment ca se passe <span className="em">le jour J</span> ?
              </h2>
              <p>Un service clé en main pour un mariage sans stress.</p>
            </Reveal>

            <div className="steps-grid">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={0.08 * i}>
                  <div className="step">
                    <span className="step-num" aria-hidden="true">
                      {i + 1}
                    </span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Inclus dans nos formules mariage */}
        <section id="tarifs" className="pad band-mint">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Tout compris</span>
              <h2>
                Inclus dans nos <span className="em">formules mariage</span>
              </h2>
              <p>
                Une prestation clé en main, du tapis rouge au{' '}
                <Link href="/memory-book" className="em">livre d&apos;or vidéo</Link>.
              </p>
            </Reveal>

            <Reveal>
              <div
                className="bg-[#FFFBF5] rounded-[32px] p-8 md:p-12 max-w-4xl mx-auto"
                style={{ boxShadow: 'var(--shadow-md)' }}
              >
                <div className="spec-grid">
                  {inclusions.map((item) => (
                    <div
                      key={item}
                      style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}
                    >
                      <CheckCircle size={22} color="#B65EAB" style={{ flex: 'none', marginTop: '2px' }} aria-hidden="true" />
                      <span className="text-[#2A2230] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Link
                    href="/tarifs"
                    className="btn btn-coral btn-lg"
                  >
                    Voir nos formules et tarifs
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ Mariage */}
        <section className="pad band-rose">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Vous vous demandez</span>
              <h2>
                Questions <span className="em">fréquentes</span>
              </h2>
            </Reveal>

            <div className="max-w-4xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {mariagesFAQs.map((faq, i) => (
                <Reveal key={faq.question} delay={0.05 * i}>
                  <div
                    className="bg-[#FFFBF5] rounded-[26px] p-6"
                    style={{ boxShadow: 'var(--shadow-sm)' }}
                  >
                    <h3 className="text-[#2A2230] text-lg mb-2">{faq.question}</h3>
                    <p className="text-[#6C6172]">{faq.answer}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="cta-band band-sky">
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
                Prêts à offrir un
                <br />
                mariage inoubliable ?
              </h2>
              <p>Demandez votre devis gratuit et personnalisé en 2 minutes.</p>
              <div className="btn-row">
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('mariages_cta')}
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
