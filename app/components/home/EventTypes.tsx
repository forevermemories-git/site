import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

const events = [
  {
    cls: 'ev-1',
    href: '/mariages',
    src: '/videos/video-al-groupe.webm',
    poster: '/images/posters/video-al-groupe-poster.jpg',
    tag: 'Mariages',
    title: 'Mariages',
    text: 'Une animation glamour inoubliable.',
    label: 'Mariage filmé par la Starcam',
  },
  {
    cls: 'ev-2',
    href: '/evenements-corporate',
    src: '/videos/video-sambavam-groupe.webm',
    poster: '/images/posters/video-sambavam-groupe-poster.jpg',
    tag: 'Entreprise',
    title: 'Corporate',
    text: 'Valorisez votre marque avec des vidéos spectaculaires.',
    label: 'Événement corporate filmé par la Starcam',
  },
  {
    cls: 'ev-3',
    href: '/anniversaires',
    src: '/videos/video-mamakutty-groupe.webm',
    poster: '/images/posters/video-mamakutty-groupe-poster.jpg',
    tag: 'Fêtes',
    title: 'Anniversaires',
    text: "Une célébration digne d'Hollywood.",
    label: 'Anniversaire filmé par la Starcam',
  },
  {
    cls: 'ev-4',
    href: '/galas',
    src: '/videos/video-corcorans-groupe.webm',
    poster: '/images/posters/video-corcorans-groupe-poster.jpg',
    tag: 'Prestige',
    title: 'Galas & Prestige',
    text: 'Une expérience digne des plus grands tapis rouges.',
    label: 'Gala de prestige filmé par la Starcam',
  },
]

export default function EventTypes() {
  return (
    <section className="pad band-peach" id="events">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Pour quel événement</span>
          <h2>
            La star, <span className="em">c&apos;est vous</span>
          </h2>
          <p>
            Mariage intime ou gala de prestige, la Starcam s&apos;adapte à
            l&apos;ambiance et fait briller chaque invité.
          </p>
        </Reveal>

        <div className="events-grid">
          {events.map((ev, i) => (
            <Reveal key={ev.cls} delay={0.08 * i}>
              <Link href={ev.href} className={`ev ${ev.cls} flex`}>
                <video
                  data-fm-vid
                  src={ev.src}
                  poster={ev.poster}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={ev.label}
                />
                <span className="scrim" aria-hidden="true" />
                <span className="ev-body">
                  <span className="ev-tag">{ev.tag}</span>
                  <h3>{ev.title}</h3>
                  <p>{ev.text}</p>
                  <span className="arr">
                    Découvrir <ArrowRight size={16} aria-hidden="true" />
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
