'use client'

import Link from 'next/link'
import {
  ArrowRight,
  Heart,
  Users,
  Award,
  Sparkles,
  Star,
  Phone,
  MapPin,
  Video,
  MessageCircle,
} from 'lucide-react'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import Reveal from '@/app/components/home/Reveal'
import { trackConversion } from '@/app/lib/gtag'

const values = [
  {
    cls: 'w1',
    Icon: Heart,
    title: 'Passion',
    description:
      'Nous aimons ce que nous faisons et cela se ressent dans chaque prestation. Votre bonheur est notre vraie récompense.',
  },
  {
    cls: 'w2',
    Icon: Award,
    title: 'Excellence',
    description:
      'Bras robotisé de dernière génération, opérateurs formés et service premium. Nous visons l\'excellence à chaque image.',
  },
  {
    cls: 'w4',
    Icon: Users,
    title: 'Proximité',
    description:
      'Nous sommes à votre écoute du premier message au jour J. Un accompagnement personnalisé, réactif et sans jargon.',
  },
]

const engagements = [
  {
    cls: 'c1',
    Icon: Video,
    title: 'Matériel de dernière génération',
    description:
      'La Starcam est un bras robotisé 5 axes de qualité cinématographique. Nous réinvestissons en continu pour vous garantir la meilleure image.',
  },
  {
    cls: 'c2',
    Icon: Users,
    title: 'Opérateurs professionnels',
    description:
      'Notre équipe maîtrise les dernières techniques et reste en veille sur les tendances. Expérience, professionnalisme et bonne humeur garantis.',
  },
  {
    cls: 'c3',
    Icon: Sparkles,
    title: 'Service sur-mesure',
    description:
      'Chaque événement est unique. Nous adaptons la prestation à vos envies, votre budget et votre identité visuelle.',
  },
  {
    cls: 'c4',
    Icon: MessageCircle,
    title: 'Réactivité et disponibilité',
    description:
      'Nous répondons vite et restons joignables avant, pendant et après votre événement. Un seul interlocuteur, du devis au livrable.',
  },
]

const promises = [
  'Une animation qui fait briller vos invités',
  'Des vidéos slow-motion de qualité professionnelle',
  'Un service clé en main, installation et démontage compris',
  'Une galerie en ligne et des souvenirs à garder à vie',
]

const departments = [
  'Paris 75', 'Seine-et-Marne 77', 'Yvelines 78', 'Essonne 91',
  'Hauts-de-Seine 92', 'Seine-Saint-Denis 93', 'Val-de-Marne 94', 'Val-d\'Oise 95',
]

const stats = [
  { cls: 's1', num: '1000+', lab: 'Vidéos produites' },
  { cls: 's2', num: '5/5', lab: 'Note Google' },
  { cls: 's3', num: '8', lab: 'Départements couverts' },
  { cls: 's1', num: '24h', lab: 'Délai de réponse' },
]

const cardShadow: React.CSSProperties = { boxShadow: 'var(--shadow-sm)' }

export default function AProposPage() {
  return (
    <div className="fm-home overflow-hidden">
      <Breadcrumbs items={[{ name: 'À Propos', href: '/a-propos' }]} />

      {/* Hero */}
      <section className="fm-hero">
        <div className="hero-blob blob1" aria-hidden="true" />
        <div className="hero-blob blob2" aria-hidden="true" />
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="kicker">
                <Star size={16} fill="#B65EAB" stroke="#B65EAB" aria-hidden="true" />
                Notre histoire
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h1>
                Forever Memories, des{' '}
                <span className="fm-grad-text">souvenirs qui durent</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lead" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                Une équipe passionnée d&apos;événementiel qui met la technologie des
                tapis rouges au service de vos plus belles soirées, en Île-de-France.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="pad band-rose">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">D&apos;où vient Forever Memories</span>
            <h2>
              Rendre le cinéma <span className="em">accessible à chaque fête</span>
            </h2>
          </Reveal>
          <Reveal>
            <div
              className="mx-auto max-w-3xl"
              style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '18px', lineHeight: 1.6 }}
            >
              <p>
                Forever Memories est née d&apos;une passion : capturer et immortaliser
                les moments d&apos;exception. Fascinés par la technologie utilisée lors
                des plus grandes cérémonies, nous avons décidé de rendre{' '}
                <Link href="/la-starcam" className="em" style={{ fontWeight: 600 }}>
                  la Starcam
                </Link>{' '}
                accessible à tous les événements, des mariages intimistes aux galas les
                plus prestigieux.
              </p>
              <p>
                Basés en Île-de-France, nous intervenons dans toute la région parisienne
                avec une mission claire : offrir une expérience premium et des souvenirs
                cinématographiques inoubliables, du glambot animé sur place au{' '}
                <Link href="/memory-book" className="em" style={{ fontWeight: 600 }}>
                  livre d&apos;or vidéo
                </Link>{' '}
                à garder à vie.
              </p>
              <p>
                Aujourd&apos;hui, avec plus de <span className="em" style={{ fontWeight: 700 }}>1000 vidéos</span>{' '}
                produites et des dizaines d&apos;événements réussis, nous continuons
                d&apos;affiner notre service pour rester le partenaire privilégié de vos
                moments d&apos;exception.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="pad band-mint">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Ce qui nous définit</span>
            <h2>
              Nos <span className="em">valeurs</span>
            </h2>
            <p>Les principes qui guident notre travail au quotidien.</p>
          </Reveal>
          <div className="why-grid">
            {values.map(({ cls, Icon, title, description }, i) => (
              <Reveal key={title} delay={0.06 * i}>
                <div className="why-card" style={{ height: '100%' }}>
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

      {/* Notre engagement qualité */}
      <section className="pad band-sun">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Notre promesse</span>
            <h2>
              Notre engagement <span className="em">qualité</span>
            </h2>
          </Reveal>

          <div className="proof-grid" style={{ alignItems: 'start' }}>
            <div className="caps">
              {engagements.map(({ cls, Icon, title, description }, i) => (
                <Reveal key={title} delay={0.06 * i}>
                  <div className="cap">
                    <span className={`cap-ico ${cls}`} aria-hidden="true">
                      <Icon size={24} />
                    </span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="rounded-[32px] bg-white p-8 md:p-10" style={{ boxShadow: 'var(--shadow-md)' }}>
                <span className="cap-ico c1" aria-hidden="true" style={{ marginBottom: '18px' }}>
                  <Sparkles size={26} />
                </span>
                <h3 style={{ fontSize: '24px', marginBottom: '18px' }}>Ce qu&apos;on vous garantit</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {promises.map((promise) => (
                    <div key={promise} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                      <Star size={18} fill="#FFC93C" stroke="#FFC93C" aria-hidden="true" style={{ flex: 'none', marginTop: '3px' }} />
                      <span style={{ color: 'var(--ink)' }}>{promise}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="pad band-sky">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Île-de-France</span>
            <h2>
              <MapPin size={26} color="#B65EAB" aria-hidden="true" style={{ display: 'inline', verticalAlign: '-4px', marginRight: '6px' }} />
              Notre zone d&apos;<span className="em">intervention</span>
            </h2>
            <p>Basés en Île-de-France, nous intervenons dans toute la région parisienne.</p>
          </Reveal>
          <Reveal>
            <div
              className="mx-auto"
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', maxWidth: '720px' }}
            >
              {departments.map((dept) => (
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
              Nous pouvons aussi intervenir en dehors de l&apos;Île-de-France pour vos
              événements exceptionnels.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="pad band-peach">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">En quelques chiffres</span>
            <h2>
              Forever Memories en <span className="em">chiffres</span>
            </h2>
          </Reveal>
          <div className="events-grid">
            {stats.map(({ cls, num, lab }, i) => (
              <Reveal key={lab} delay={0.06 * i}>
                <div className={`stat ${cls}`}>
                  <span className="num">{num}</span>
                  <span className="lab">{lab}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band" style={{ background: 'var(--tint-cream)' }}>
        <div className="wrap">
          <Reveal className="cta-inner">
            <span className="dotblob cta-d1" aria-hidden="true" />
            <span className="dotblob cta-d2" aria-hidden="true" />
            <h2>
              Envie de nous confier
              <br />
              votre événement ?
            </h2>
            <p>Parlons de votre projet et recevez un devis personnalisé sous 24h.</p>
            <div className="btn-row">
              <Link
                href="/contact"
                onClick={() => trackConversion.devisClick('apropos_page_cta')}
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
