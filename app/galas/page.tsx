'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Crown,
  Award,
  Star,
  CheckCircle,
  Phone,
  Shield,
  Users,
  Gem,
  Trophy,
  Sparkles,
  Tv,
  Clapperboard,
  Link2,
} from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import MediaController from '@/app/components/home/MediaController'
import Reveal from '@/app/components/home/Reveal'
import Showreel from '@/app/components/home/Showreel'
import { trackConversion } from '@/app/lib/gtag'

const galasFAQs = [
  {
    question: 'Quelle est la différence avec une prestation standard ?',
    answer: 'Notre offre Gala inclut des éléments premium : tapis rouge de 6m, barrières VIP chromées, équipe en tenue de soirée (smoking/robe), branding complet de vos vidéos, et un chef de projet dédié pour coordonner avec votre équipe événementielle.'
  },
  {
    question: 'Pouvez-vous vous intégrer à une scénographie existante ?',
    answer: 'Absolument. Nous travaillons régulièrement avec des agences événementielles et scénographes. Notre équipe technique peut s\'adapter à vos contraintes (couleurs, positionnement, timing) et se coordonner avec vos autres prestataires.'
  },
  {
    question: 'Quel délai pour la personnalisation des vidéos avec notre branding ?',
    answer: 'Nous recommandons de nous transmettre vos éléments graphiques (logo HD, charte couleurs) au moins 2 semaines avant l\'événement. Pour des demandes complexes (animation logo, intro personnalisée), prévoir 3 semaines.'
  },
  {
    question: 'Proposez-vous un service pour les invités VIP ?',
    answer: 'Oui, nous pouvons mettre en place un "fast pass" pour vos invités d\'honneur : accès prioritaire, opérateur dédié, et même des vidéos avec un traitement spécial (ralenti plus prononcé, montage différent).'
  },
  {
    question: 'Les vidéos peuvent-elles être diffusées en direct ?',
    answer: 'Oui ! Nous pouvons projeter les vidéos en temps réel sur un écran dans la salle. Effet garanti quand les invités se voient apparaître en slow-motion quelques secondes après leur passage.'
  }
]

const features = [
  { cls: 'w1', Icon: Crown, title: 'Service White Glove', description: 'Chef de projet dédié, coordination avec vos équipes, répétition technique possible la veille. Rien n\'est laissé au hasard.' },
  { cls: 'w5', Icon: Award, title: 'Branding sur-mesure', description: 'Vos couleurs, votre logo, votre univers graphique intégrés aux vidéos. Un prolongement parfait de votre identité visuelle.' },
  { cls: 'w6', Icon: Shield, title: 'Discrétion absolue', description: 'Équipe formée aux codes des événements privés. Confidentialité garantie, matériel et véhicules neutres.' },
]

const galaTypes = [
  {
    cls: 'c1',
    Icon: Trophy,
    title: 'Cérémonies de remise de prix',
    description: 'Trophées sportifs, prix professionnels, awards d\'entreprise... Les lauréats repartent avec une vidéo mémorable.',
    tags: ['Trophées du Sport', 'Awards Corporate', 'Prix Associatifs'],
  },
  {
    cls: 'c2',
    Icon: Sparkles,
    title: 'Galas de charité',
    description: 'Une animation qui valorise vos donateurs et génère du contenu partageable pour amplifier votre cause.',
    tags: ['Fondations', 'ONG', 'Associations'],
  },
  {
    cls: 'c4',
    Icon: Users,
    title: 'Soirées annuelles & conventions',
    description: 'Le point d\'orgue de votre année. Une animation premium qui récompense vos équipes.',
    tags: ['Kick-off', 'Conventions', 'Anniversaires d\'entreprise'],
  },
  {
    cls: 'c3',
    Icon: Gem,
    title: 'Événements privés haut de gamme',
    description: 'Mariages de luxe, anniversaires prestigieux, fêtes privées... Pour ceux qui veulent le meilleur.',
    tags: ['Mariages Prestige', 'Anniversaires VIP', 'Réceptions Privées'],
  },
]

const redCarpet = [
  { title: 'Tapis rouge premium 6 mètres', desc: 'Avec barrières chromées et poteaux à cordes dorées.' },
  { title: 'Backdrop personnalisé grand format', desc: 'Imprimé avec votre logo et identité visuelle.' },
  { title: 'Équipe en tenue de soirée', desc: 'Smoking et robes de soirée pour s\'intégrer parfaitement.' },
  { title: 'Éclairage professionnel', desc: 'Projecteurs cinéma pour un rendu optimal.' },
]

const prestigeInclusions = [
  'Installation tapis rouge complète',
  'Backdrop personnalisé',
  '2 opérateurs en tenue de soirée',
  'Branding vidéo complet',
  'Galerie privée brandée',
  'Montage récapitulatif offert',
]

const liveOptions = [
  { Icon: Tv, title: 'Projection instantanée', description: 'Les vidéos s\'affichent en temps réel sur vos écrans. Créez un moment de partage collectif.' },
  { Icon: Clapperboard, title: 'Mosaïque des meilleurs moments', description: 'En fin de soirée, compilation automatique des meilleures vidéos diffusée sur écran.' },
  { Icon: Link2, title: 'Compatible tous systèmes', description: 'HDMI, réseau, streaming... On s\'adapte à votre infrastructure technique.' },
]

export default function GalasPage() {
  return (
    <>
      <FAQStructuredData faqs={galasFAQs} />

      <div className="fm-home overflow-hidden">
        <Breadcrumbs items={[{ name: 'Galas & Prestige', href: '/galas' }]} />
        <MediaController />

        {/* Hero */}
        <section className="fm-hero" id="top">
          <div className="hero-blob blob1" aria-hidden="true" />
          <div className="hero-blob blob2" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <Reveal>
                <span className="kicker">
                  <Crown size={16} fill="#FFC93C" stroke="#B65EAB" aria-hidden="true" />
                  Prestations de prestige
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1>
                  L&apos;expérience{' '}
                  <span className="fm-grad-text">tapis rouge</span> pour vos galas
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="lead">
                  Une technologie robotisée de pointe pour des vidéos slow-motion
                  spectaculaires. Le glambot gala, pour vos événements de prestige.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="hero-cta">
                  <Link
                    href="/contact"
                    onClick={() => trackConversion.devisClick('galas_hero')}
                    className="btn btn-primary btn-lg"
                  >
                    Demander une proposition
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <a
                    href="tel:+33676815953"
                    onClick={() => trackConversion.phoneClick()}
                    className="btn btn-ghost btn-lg"
                  >
                    <Phone size={18} aria-hidden="true" />
                    Appeler directement
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.32}>
                <div
                  className="text-[#6C6172]"
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '8px', fontSize: '14px' }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Trophy size={16} color="#FF9F47" aria-hidden="true" /> Technologie premium
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Star size={16} fill="#FFC93C" stroke="none" aria-hidden="true" /> Qualité cinématographique
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Gem size={16} color="#B65EAB" aria-hidden="true" /> Slow-motion tapis rouge
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.16} className="hero-media">
              <div className="sticker floaty">Tapis rouge · slow-motion</div>
              <div className="hm-grid">
                <div className="hm-frame">
                  <video
                    data-fm-vid
                    src="/videos/video-corcorans-groupe.webm"
                    poster="/images/posters/video-corcorans-groupe-poster.jpg"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Gala de prestige filmé par la Starcam"
                  />
                </div>
                <div className="hm-frame">
                  <video
                    data-fm-vid
                    src="/videos/clips/clip-4.mp4"
                    poster="/images/posters/clip-4-poster.jpg"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Invité filmé en slow-motion sur le tapis rouge"
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
                    src="/videos/video-mp-groupe.webm"
                    poster="/images/posters/video-mp-groupe-poster.jpg"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Soirée de gala filmée par la Starcam"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Ce qui nous différencie */}
        <section className="pad band-sun">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Le standard prestige</span>
              <h2>
                Une prestation à la hauteur de <span className="em">vos exigences</span>
              </h2>
              <p>Pour les événements où chaque détail compte.</p>
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

        {/* Types de galas */}
        <section className="pad band-rose">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Tous vos galas</span>
              <h2>
                Expertise dans tous types de <span className="em">galas</span>
              </h2>
            </Reveal>

            <div className="spec-grid">
              {galaTypes.map(({ cls, Icon, title, description, tags }, i) => (
                <Reveal key={title} delay={0.06 * i}>
                  <div className="cap">
                    <span className={`cap-ico ${cls}`} aria-hidden="true">
                      <Icon size={26} />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '12px' }}>
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[#8E3F84]"
                            style={{ background: '#FBEFF6', fontSize: '12px', fontWeight: 600, padding: '5px 12px', borderRadius: '999px' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Showreel partage avec la home */}
        <Showreel />

        {/* L'expérience tapis rouge */}
        <section className="pad band-peach">
          <div className="wrap">
            <div className="how-grid">
              <Reveal>
                <span className="eyebrow" style={{ justifyContent: 'flex-start' }}>
                  L&apos;expérience complète
                </span>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '16px' }}>
                  Recréez l&apos;atmosphère des{' '}
                  <span className="em">plus grandes cérémonies</span>
                </h2>
                <p style={{ marginBottom: '28px' }}>
                  Vos invités foulent un véritable tapis rouge, passent devant un
                  mur de marque personnalisé, et repartent avec une vidéo digne des
                  plus grands red carpets. Le tout signé{' '}
                  <Link href="/la-starcam" className="em">la Starcam</Link>.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {redCarpet.map(({ title, desc }, i) => (
                    <Reveal key={title} delay={0.08 * i}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                        <CheckCircle size={24} color="#B65EAB" style={{ flex: 'none', marginTop: '2px' }} aria-hidden="true" />
                        <div>
                          <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{title}</h3>
                          <p style={{ fontSize: '15px' }}>{desc}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div
                  className="bg-[#FFFBF5] rounded-[32px] p-8 text-center"
                  style={{ boxShadow: 'var(--shadow-md)' }}
                >
                  <span
                    style={{ display: 'inline-flex', width: '64px', height: '64px', borderRadius: '20px', alignItems: 'center', justifyContent: 'center', background: '#FFF7E0', color: '#B07400', marginBottom: '16px' }}
                    aria-hidden="true"
                  >
                    <Trophy size={32} />
                  </span>
                  <h3 style={{ fontSize: '26px', marginBottom: '8px' }}>Formule Prestige</h3>
                  <p style={{ marginBottom: '24px' }}>
                    Tout inclus pour une expérience irréprochable.
                  </p>

                  <ul style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                    {prestigeInclusions.map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }} className="text-[#2A2230]">
                        <CheckCircle size={18} color="#B65EAB" style={{ flex: 'none' }} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    onClick={() => trackConversion.devisClick('galas_prestige')}
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    Demander un devis Prestige
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <div style={{ marginTop: '14px' }}>
                    <Link href="/tarifs" className="em" style={{ fontWeight: 600, fontSize: '14px' }}>
                      Voir toutes nos formules
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Diffusion en direct */}
        <section className="pad band-sky">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Option grand écran</span>
              <h2>
                Diffusion en direct sur <span className="em">grand écran</span>
              </h2>
              <p>
                Imaginez : vos invités passent devant la Starcam, et quelques
                secondes plus tard, leur vidéo slow-motion apparaît sur
                l&apos;écran géant de la salle.
              </p>
            </Reveal>

            <div className="why-grid">
              {liveOptions.map(({ Icon, title, description }, i) => (
                <Reveal key={title} delay={0.08 * i}>
                  <div className="why-card">
                    <span className={`why-ico w${i + 1}`} aria-hidden="true">
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

        {/* FAQ */}
        <section className="pad band-rose">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Vous vous demandez</span>
              <h2>
                Questions <span className="em">fréquentes</span>
              </h2>
            </Reveal>

            <div className="max-w-4xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {galasFAQs.map((faq, i) => (
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
        <section className="cta-band band-sun">
          <div className="wrap">
            <Reveal className="cta-inner">
              <span className="dotblob cta-d1" aria-hidden="true" />
              <span className="dotblob cta-d2" aria-hidden="true" />
              <span
                style={{ position: 'relative', zIndex: 2, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '18px', background: 'rgba(255,255,255,0.18)', color: '#fff', margin: '0 auto 20px' }}
                aria-hidden="true"
              >
                <Crown size={28} />
              </span>
              <h2>
                Votre gala mérite
                <br />
                l&apos;excellence
              </h2>
              <p>
                Discutons de votre projet. Nous vous proposerons une solution
                sur-mesure.
              </p>
              <div className="btn-row">
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('galas_cta')}
                  className="btn btn-white btn-lg"
                >
                  Demander une proposition
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
