'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Building2,
  Camera,
  Users,
  TrendingUp,
  Star,
  CheckCircle,
  Sparkles,
  Share2,
  Phone,
} from 'lucide-react'
import Image from 'next/image'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import MediaController from '@/app/components/home/MediaController'
import Reveal from '@/app/components/home/Reveal'
import Showreel from '@/app/components/home/Showreel'
import { trackConversion } from '@/app/lib/gtag'

const corporateFAQs = [
  {
    question: 'Quel est le délai pour personnaliser les vidéos avec notre logo ?',
    answer: 'Nous recommandons de nous transmettre vos éléments graphiques (logo, charte couleurs) au moins 7 jours avant l\'événement. Cela nous permet de créer et valider avec vous le rendu des vidéos personnalisées.'
  },
  {
    question: 'Combien de personnes peuvent utiliser la Starcam lors d\'un événement ?',
    answer: 'Il n\'y a pas de limite ! Que vous ayez 50 ou 500 participants, chacun peut profiter de l\'expérience. En moyenne, nous réalisons 100 à 200 vidéos lors d\'un événement de 4 heures.'
  },
  {
    question: 'Peut-on récupérer toutes les vidéos pour notre communication ?',
    answer: 'Absolument ! Vous recevez un accès administrateur à la galerie en ligne vous permettant de télécharger toutes les vidéos. Vous pouvez ensuite les utiliser pour votre communication corporate (avec accord des participants).'
  },
  {
    question: 'Quelles sont les contraintes techniques sur site ?',
    answer: 'Nous avons besoin d\'un espace d\'environ 4m x 3m et d\'une prise électrique standard. Notre équipe s\'adapte à la configuration de votre lieu (intérieur, extérieur sous chapiteau, stand de salon, etc.).'
  },
  {
    question: 'Proposez-vous des forfaits pour plusieurs événements ?',
    answer: 'Oui ! Pour les entreprises organisant plusieurs événements dans l\'année, nous proposons des formules avantageuses. Contactez-nous pour un devis personnalisé adapté à vos besoins.'
  },
  {
    question: 'Peut-on avoir une démo avant de réserver ?',
    answer: 'Nous pouvons organiser une démo sur mesure dans vos locaux ou vous présenter des exemples concrets de nos réalisations corporate. N\'hésitez pas à nous contacter pour planifier une rencontre.'
  }
]

const features = [
  { cls: 'w1', Icon: Share2, title: 'Prestation exclusive', description: 'Quasi aucun autre prestataire en France ne propose cette technologie. Démarquez-vous avec une animation que vos concurrents n\'ont pas.' },
  { cls: 'w2', Icon: Sparkles, title: 'Branding puissant', description: 'Créez une association forte entre votre marque et l\'innovation. Vos vidéos personnalisées deviennent un outil de branding mémorable.' },
  { cls: 'w3', Icon: TrendingUp, title: 'Impact professionnel', description: 'Donnez un côté ultra-professionnel et prestigieux à vos événements. Engagez vos collaborateurs avec une expérience qu\'ils ne verront nulle part ailleurs.' },
]

const useCases = [
  { cls: 'c1', Icon: Star, title: 'Lancements de produits', description: 'Créez le buzz autour de votre nouveau produit. Vos invités deviennent des ambassadeurs en partageant leurs vidéos.' },
  { cls: 'c2', Icon: Users, title: 'Team building & séminaires', description: 'Renforcez la cohésion d\'équipe avec une activité ludique et fédératrice. Des souvenirs partagés qui durent.' },
  { cls: 'c4', Icon: Building2, title: 'Soirées d\'entreprise', description: 'Anniversaires d\'entreprise, vœux, cérémonies de récompenses. Une animation premium pour vos collaborateurs.' },
  { cls: 'c3', Icon: Camera, title: 'Salons & conférences', description: 'Attirez les visiteurs sur votre stand et créez de l\'engagement. Un contenu unique pour vos réseaux sociaux.' },
]

const customization = [
  { title: 'Branding vidéo', description: 'Intégrez votre logo, vos couleurs et votre baseline directement dans les vidéos.' },
  { title: 'Décor personnalisé', description: 'Backdrop aux couleurs de votre entreprise, signalétique sur-mesure.' },
  { title: 'Galerie privée brandée', description: 'Plateforme en ligne personnalisée pour accéder à toutes les vidéos de l\'événement.' },
  { title: 'Statistiques détaillées', description: 'Rapport post-événement avec métriques d\'engagement et de viralité.' },
]

const steps = [
  { title: 'Briefing détaillé', description: 'Nous comprenons vos objectifs, votre audience et vos besoins en branding.' },
  { title: 'Préparation personnalisée', description: 'Création des éléments brandés, préparation technique et logistique.' },
  { title: 'Prestation sur site', description: 'Installation, animation et gestion complète par notre équipe professionnelle.' },
  { title: 'Suivi post-événement', description: 'Livraison de la galerie et rapport de statistiques sous 48h.' },
]

const inclusions = [
  'Installation et démontage complets',
  'Opérateur professionnel dédié',
  'Vidéos slow-motion Full HD',
  'Livraison instantanée pour chaque participant',
  'Galerie en ligne privée sous 48h',
  'Personnalisation logo et couleurs',
  'Rapport de statistiques post-événement',
  'Support technique sur site',
]

export default function EvenementsCorporatePage() {
  return (
    <>
      <FAQStructuredData faqs={corporateFAQs} />

      <div className="fm-home overflow-hidden">
        <Breadcrumbs items={[{ name: 'Événements Corporate', href: '/evenements-corporate' }]} />
        <MediaController />

        {/* Hero */}
        <section className="fm-hero" id="top">
          <div className="hero-blob blob1" aria-hidden="true" />
          <div className="hero-blob blob2" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <Reveal>
                <span className="kicker">
                  <Building2 size={16} stroke="#B65EAB" aria-hidden="true" />
                  Événements corporate
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1>
                  La <span className="fm-grad-text">Starcam</span> pour vos
                  événements pro, une animation qui marque les esprits
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="lead">
                  Une prestation rare : valorisez votre marque, engagez vos
                  collaborateurs et donnez un côté ultra-professionnel à vos
                  événements avec un robot vidéo slow-motion.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="hero-cta">
                  <Link
                    href="/contact"
                    onClick={() => trackConversion.devisClick('corporate_hero')}
                    className="btn btn-primary btn-lg"
                  >
                    Demander un devis entreprise
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <a href="#usages" className="btn btn-ghost btn-lg">
                    Voir les cas d&apos;usage
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
                  Robot vidéo événement disponible en Île-de-France
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.16} className="hero-media">
              <div className="sticker floaty">Branding · Full HD</div>
              <div className="hm-grid">
                <div className="hm-frame">
                  <video
                    data-fm-vid
                    src="/videos/video-sambavam-groupe.webm"
                    poster="/images/posters/video-sambavam-groupe-poster.jpg"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Événement corporate filmé par la Starcam"
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
                    aria-label="Participant filmé en slow-motion par la Starcam"
                  />
                </div>
                <div className="hm-frame">
                  <video
                    data-fm-vid
                    src="/videos/clips/clip-5.mp4"
                    poster="/images/posters/clip-5-poster.jpg"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Participant filmé en slow-motion sur le tapis rouge"
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
                    aria-label="Équipe filmée lors d'un événement corporate"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Pourquoi la Starcam */}
        <section className="pad band-sun">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Les avantages</span>
              <h2>
                Pourquoi intégrer la <span className="em">Starcam</span> ?
              </h2>
              <p>
                Une technologie rare et exclusive pour marquer les esprits.
                Découvrez{' '}
                <Link href="/la-starcam" className="em">le robot vidéo en détail</Link>.
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

        {/* Cas d'usage */}
        <section id="usages" className="pad band-rose">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Vos événements pro</span>
              <h2>
                Cas d&apos;usage <span className="em">corporate</span>
              </h2>
              <p>Une solution adaptée à tous vos événements professionnels.</p>
            </Reveal>

            <div className="spec-grid">
              {useCases.map(({ cls, Icon, title, description }, i) => (
                <Reveal key={title} delay={0.06 * i}>
                  <div className="cap">
                    <span className={`cap-ico ${cls}`} aria-hidden="true">
                      <Icon size={26} />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Showreel partage avec la home */}
        <Showreel />

        {/* Personnalisation */}
        <section className="pad band-peach">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Sur-mesure</span>
              <h2>
                Personnalisation <span className="em">sur-mesure</span>
              </h2>
              <p>Une expérience qui renforce votre identité de marque.</p>
            </Reveal>

            <div className="how-grid">
              <Reveal>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {customization.map(({ title, description }, i) => (
                    <Reveal key={title} delay={0.08 * i}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                        <CheckCircle size={24} color="#B65EAB" style={{ flex: 'none', marginTop: '2px' }} aria-hidden="true" />
                        <div>
                          <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{title}</h3>
                          <p style={{ fontSize: '15px' }}>{description}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div
                  className="bg-[#FFFBF5] rounded-[32px] p-8"
                  style={{ boxShadow: 'var(--shadow-md)' }}
                >
                  <h3 style={{ fontSize: '24px', marginBottom: '24px', textAlign: 'center' }}>
                    Inclus dans nos prestations
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {inclusions.map((item) => (
                      <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <CheckCircle size={18} color="#B65EAB" style={{ flex: 'none' }} aria-hidden="true" />
                        <span className="text-[#2A2230] font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Link href="/memory-book" className="em" style={{ fontWeight: 600, fontSize: '14px' }}>
                      Découvrir l&apos;album vidéo chronologique
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="pad band-mint">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Le déroulé</span>
              <h2>
                Notre <span className="em">process</span>
              </h2>
              <p>Un accompagnement de bout en bout.</p>
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
              {corporateFAQs.map((faq, i) => (
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
                Prêts à marquer votre
                <br />
                prochain événement ?
              </h2>
              <p>
                Discutons de votre projet et recevez un devis personnalisé sous
                24h.
              </p>
              <div className="btn-row">
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('corporate_cta')}
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
