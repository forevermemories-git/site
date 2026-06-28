'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Sparkles,
  Share2,
  Users,
  CheckCircle,
  X,
  Phone,
  Instagram,
  Zap,
  Music,
  Star,
  Smartphone,
  GraduationCap,
  PartyPopper,
  Crown,
  Trophy,
  Drama,
  Cake,
} from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import MediaController from '@/app/components/home/MediaController'
import Reveal from '@/app/components/home/Reveal'
import Showreel from '@/app/components/home/Showreel'
import { trackConversion } from '@/app/lib/gtag'

const anniversairesFAQs = [
  {
    question: 'Est-ce adapté pour un anniversaire surprise ?',
    answer: 'C\'est PARFAIT pour un anniversaire surprise ! On installe discrètement pendant que les invités arrivent. L\'effet de surprise quand la personne fêtée découvre le robot est incroyable. On peut même filmer sa réaction en slow-motion !'
  },
  {
    question: 'Mes invités vont-ils vraiment utiliser la Starcam ?',
    answer: 'À 100% ! C\'est addictif. Les invités font la queue pour repasser. En moyenne, chaque personne fait 3-4 passages dans la soirée. L\'aspect "défi entre amis" crée une vraie émulation.'
  },
  {
    question: 'Les vidéos sont-elles vraiment partageables sur Instagram/TikTok ?',
    answer: 'Oui ! Les vidéos sont au format vertical 9:16, optimisées pour les Stories et Reels. Chaque invité reçoit sa vidéo instantanément par SMS et peut la poster en 2 clics.'
  },
  {
    question: 'Peut-on personnaliser avec le thème de la fête ?',
    answer: 'Absolument ! On adapte les couleurs, on peut ajouter un message personnalisé ("Joyeux 30 ans Marie !"), et même intégrer le thème de votre soirée (années 80, disco, tropical...).'
  },
  {
    question: 'C\'est adapté pour quel nombre d\'invités ?',
    answer: 'De 20 à 150 invités, la Starcam s\'adapte. Pour les petits groupes, on propose des formules ajustées. Pour les grandes fêtes, on peut ajouter un second opérateur pour zéro temps d\'attente.'
  }
]

const ageGroups = [
  { cls: 'w1', Icon: GraduationCap, title: '18-25 ans', description: 'Majorité, fin d\'études, entrée dans la vie active... L\'âge où on veut du contenu viral pour les réseaux.', tags: ['TikTok ready', 'Squad goals'] },
  { cls: 'w2', Icon: PartyPopper, title: '30-40 ans', description: 'Les caps symboliques ! On veut marquer le coup avec les amis de longue date. Ambiance festive et décomplexée.', tags: ['Entre amis', 'Nostalgie fun'] },
  { cls: 'w3', Icon: Sparkles, title: '50-60 ans', description: 'Les anniversaires qu\'on célèbre en grand. Souvent intergénérationnel : les ados adorent autant que les parents.', tags: ['Famille', 'Élégant'] },
  { cls: 'w4', Icon: Crown, title: '70 ans et +', description: 'Les grandes célébrations familiales. Les petits-enfants initient les grands-parents... moments magiques garantis !', tags: ['Multigénérationnel', 'Souvenirs'] }
]

const ideas = [
  { cls: 'w1', Icon: Trophy, title: 'Le défi du meilleur ralenti', description: 'Qui fera la vidéo la plus stylée ? Les invités se challengent et votent pour leur préférée. Ambiance garantie !' },
  { cls: 'w2', Icon: Users, title: 'Le passage en groupe', description: 'Des groupes entiers en même temps, jusqu\'à 35 personnes quand la place le permet. Les vidéos de groupe (famille, squad, collègues) sont souvent les plus drôles.' },
  { cls: 'w3', Icon: Drama, title: 'Les poses signature', description: 'Confettis, champagne, cheveux au vent... Notre opérateur guide les invités pour des résultats dignes d\'un clip.' }
]

const cons = [
  'Photos statiques qu\'on ne regarde plus jamais',
  'Props ringards (moustaches, lunettes...)',
  'Format carré pas adapté aux réseaux',
  'Vu et revu à chaque soirée',
]

const pros = [
  'Vidéos slow-motion spectaculaires qu\'on re-regarde 100 fois',
  'Mouvements de caméra robotisés effet Hollywood',
  'Format 9:16 parfait pour Stories et TikTok',
  'Technologie exclusive quasi-introuvable en France',
]

const socialPoints = [
  { Icon: Share2, title: 'Partage en 2 clics', desc: 'Vidéo reçue par SMS, ouvrir, partager. Pas d\'app à télécharger.' },
  { Icon: Zap, title: 'Format vertical natif', desc: '9:16, le format parfait pour Stories, Reels et TikTok. Pas de recadrage.' },
  { Icon: Music, title: 'Musique intégrée', desc: 'Chaque vidéo a déjà une bande son. Prête à être postée telle quelle.' },
]

const inclusions = [
  'Installation et démontage (on gère tout)',
  'Opérateur pro qui anime la soirée',
  'Vidéos slow-motion Full HD',
  'Livraison instantanée par SMS',
  'Galerie en ligne sous 48h',
  'Passages illimités pour tous',
  'Personnalisation couleurs & message',
  'Musique et ambiance festive',
]

export default function AnniversairesPage() {
  return (
    <>
      <FAQStructuredData faqs={anniversairesFAQs} />

      <div className="fm-home overflow-hidden">
        <Breadcrumbs items={[{ name: 'Anniversaires', href: '/anniversaires' }]} />
        <MediaController />

        {/* Hero */}
        <section className="fm-hero" id="top">
          <div className="hero-blob blob1" aria-hidden="true" />
          <div className="hero-blob blob2" aria-hidden="true" />
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <Reveal>
                <span className="kicker">
                  <Sparkles size={16} fill="#B65EAB" stroke="#B65EAB" aria-hidden="true" />
                  L&apos;animation qui fait le buzz
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h1>
                  Un anniversaire dont on parlera{' '}
                  <span className="fm-grad-text">encore dans 10 ans</span>
                </h1>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="lead">
                  Fini les animations ringardes. Le glambot anniversaire crée des
                  vidéos slow-motion que vos invités vont s&apos;arracher pour les
                  poster sur Insta.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <div className="hero-cta">
                  <Link
                    href="/contact"
                    onClick={() => trackConversion.devisClick('anniversaires_hero')}
                    className="btn btn-primary btn-lg"
                  >
                    Réserver ma date
                    <ArrowRight size={18} aria-hidden="true" />
                  </Link>
                  <Link href="/tarifs" className="btn btn-ghost btn-lg">
                    Voir les tarifs
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.32}>
                <div
                  className="text-[#6C6172]"
                  style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '8px', fontSize: '14px' }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Star size={16} fill="#FFC93C" stroke="none" aria-hidden="true" /> 5/5 sur Google
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Users size={16} color="#B65EAB" aria-hidden="true" /> +200 fêtes animées
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Instagram size={16} color="#FF7A59" aria-hidden="true" /> +5000 vidéos partagées
                  </span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.16} className="hero-media">
              <div className="sticker floaty">Format 9:16 · Insta ready</div>
              <div className="hm-grid">
                <div className="hm-frame">
                  <video
                    data-fm-vid
                    src="/videos/video-mamakutty-groupe.webm"
                    poster="/images/posters/video-mamakutty-groupe-poster.jpg"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Anniversaire filmé en slow-motion par la Starcam"
                  />
                </div>
                <div className="hm-frame">
                  <video
                    data-fm-vid
                    src="/videos/clips/clip-3.mp4"
                    poster="/images/posters/clip-3-poster.jpg"
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
                    src="/videos/clips/clip-5.mp4"
                    poster="/images/posters/clip-5-poster.jpg"
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
                    src="/videos/video-sambavam-groupe.webm"
                    poster="/images/posters/video-sambavam-groupe-poster.jpg"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-label="Groupe d'invités en fête filmé par la Starcam"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Comparaison Photobooth vs Starcam */}
        <section className="pad band-rose">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Le match</span>
              <h2>
                Pourquoi vos invités vont <span className="em">adorer</span>
              </h2>
              <p>(et pourquoi c&apos;est 100x mieux qu&apos;un photobooth classique)</p>
            </Reveal>

            <div className="spec-grid max-w-5xl mx-auto">
              <Reveal>
                <div
                  className="bg-[#FFFBF5] rounded-[26px] p-8 h-full"
                  style={{ boxShadow: 'var(--shadow-sm)' }}
                >
                  <div className="text-[#6C6172] font-semibold mb-4 text-lg">
                    Photobooth classique
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {cons.map((c) => (
                      <li key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }} className="text-[#6C6172]">
                        <X size={20} color="#B0A6B8" style={{ flex: 'none', marginTop: '2px' }} aria-hidden="true" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div
                  className="rounded-[26px] p-8 h-full"
                  style={{ background: '#fff', boxShadow: 'var(--shadow-md)', border: '2px solid rgba(182,94,171,0.35)' }}
                >
                  <div className="text-[#8E3F84] font-semibold mb-4 text-lg">
                    La Starcam
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {pros.map((p) => (
                      <li key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }} className="text-[#2A2230]">
                        <CheckCircle size={20} color="#B65EAB" style={{ flex: 'none', marginTop: '2px' }} aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Showreel partage avec la home */}
        <Showreel />

        {/* Par tranche d'âge */}
        <section className="pad band-sun">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Pour tous les âges</span>
              <h2>
                Adapté à chaque âge, <span className="em">chaque ambiance</span>
              </h2>
              <p>De 18 à 80 ans, on a l&apos;expérience pour créer la bonne vibe.</p>
            </Reveal>

            <div className="why-grid is-4">
              {ageGroups.map(({ cls, Icon, title, description, tags }, i) => (
                <Reveal key={title} delay={0.06 * i}>
                  <div className="why-card">
                    <span className={`why-ico ${cls}`} aria-hidden="true">
                      <Icon size={26} />
                    </span>
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
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Côté viral / réseaux sociaux */}
        <section className="pad band-sky">
          <div className="wrap">
            <div className="how-grid">
              <Reveal>
                <span className="eyebrow" style={{ justifyContent: 'flex-start' }}>
                  Conçu pour les réseaux
                </span>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', marginBottom: '16px' }}>
                  Des vidéos que vos invités vont{' '}
                  <span className="em">vraiment partager</span>
                </h2>
                <p style={{ marginBottom: '28px' }}>
                  Soyons honnêtes : les photos de photobooth finissent dans un
                  tiroir. Nos vidéos slow-motion, elles, sont postées dans les 5
                  minutes sur Instagram, TikTok, WhatsApp. Découvrez{' '}
                  <Link href="/la-starcam" className="em">la technologie de la Starcam</Link>.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {socialPoints.map(({ Icon, title, desc }, i) => (
                    <Reveal key={title} delay={0.08 * i}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                        <span
                          style={{ flex: 'none', width: '44px', height: '44px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#B65EAB', color: '#fff' }}
                          aria-hidden="true"
                        >
                          <Icon size={20} />
                        </span>
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
                    style={{ display: 'inline-flex', width: '64px', height: '64px', borderRadius: '20px', alignItems: 'center', justifyContent: 'center', background: '#FBEFF6', color: '#B65EAB', marginBottom: '16px' }}
                    aria-hidden="true"
                  >
                    <Smartphone size={32} />
                  </span>
                  <div className="fm-grad-text" style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '54px', lineHeight: 1 }}>
                    87%
                  </div>
                  <p style={{ marginTop: '8px', marginBottom: '28px' }}>
                    de nos vidéos sont partagées sur les réseaux dans l&apos;heure
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
                    <div>
                      <div className="text-[#FF7A59]" style={{ fontWeight: 700 }}>Instagram</div>
                      <div className="text-[#6C6172]" style={{ fontSize: '13px' }}>Stories &amp; Reels</div>
                    </div>
                    <div>
                      <div className="text-[#2A2230]" style={{ fontWeight: 700 }}>TikTok</div>
                      <div className="text-[#6C6172]" style={{ fontSize: '13px' }}>Format natif</div>
                    </div>
                    <div>
                      <div className="text-[#8E3F84]" style={{ fontWeight: 700 }}>WhatsApp</div>
                      <div className="text-[#6C6172]" style={{ fontSize: '13px' }}>Partage direct</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Idées de poses et défis */}
        <section className="pad band-mint">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Idées d&apos;animation</span>
              <h2>
                Des idées pour <span className="em">animer la soirée</span>
              </h2>
              <p>
                Notre opérateur propose des défis et des poses pour créer une
                vraie émulation.
              </p>
            </Reveal>

            <div className="why-grid">
              {ideas.map(({ cls, Icon, title, description }, i) => (
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

        {/* Ce qui est inclus */}
        <section className="pad band-peach">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Tout compris</span>
              <h2>
                Tout est inclus, <span className="em">zéro surprise</span>
              </h2>
            </Reveal>

            <Reveal>
              <div
                className="bg-[#FFFBF5] rounded-[32px] p-8 md:p-10 max-w-4xl mx-auto"
                style={{ boxShadow: 'var(--shadow-md)' }}
              >
                <div className="spec-grid">
                  {inclusions.map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle size={20} color="#B65EAB" style={{ flex: 'none' }} aria-hidden="true" />
                      <span className="text-[#2A2230] font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <Link href="/tarifs" className="em" style={{ fontWeight: 600 }}>
                    Voir nos formules et tarifs
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="pad band-rose">
          <div className="wrap">
            <Reveal className="sec-head">
              <span className="eyebrow">Vous vous demandez</span>
              <h2>
                Vos <span className="em">questions</span>
              </h2>
            </Reveal>

            <div className="max-w-4xl mx-auto" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {anniversairesFAQs.map((faq, i) => (
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
              <span
                style={{ position: 'relative', zIndex: 2, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', borderRadius: '18px', background: 'rgba(255,255,255,0.18)', color: '#fff', margin: '0 auto 20px' }}
                aria-hidden="true"
              >
                <Cake size={28} />
              </span>
              <h2>
                Prêt à organiser un
                <br />
                anniversaire légendaire ?
              </h2>
              <p>Les meilleures dates partent vite. Réservez maintenant !</p>
              <div className="btn-row">
                <Link
                  href="/contact"
                  onClick={() => trackConversion.devisClick('anniversaires_cta')}
                  className="btn btn-white btn-lg"
                >
                  Demander un devis gratuit
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
