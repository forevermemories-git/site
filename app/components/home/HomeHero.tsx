import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import Reveal from './Reveal'

const heroFrames = [
  {
    src: '/videos/video-al-groupe.webm',
    poster: '/images/posters/video-al-groupe-poster.jpg',
    label: "Invités filmés en slow-motion par la Starcam au mariage d'Antoine et Lashmi",
    hidden: false,
  },
  {
    src: '/videos/clips/clip-1.mp4',
    poster: '/images/posters/clip-1-poster.jpg',
    label: 'Invités filmés par la Starcam',
    hidden: true,
  },
  {
    src: '/videos/clips/clip-2.mp4',
    poster: '/images/posters/clip-2-poster.jpg',
    label: 'Invités filmés par la Starcam',
    hidden: true,
  },
  {
    src: '/videos/video-mp-groupe.webm',
    poster: '/images/posters/video-mp-groupe-poster.jpg',
    label: 'Groupe filmé par la Starcam',
    hidden: true,
  },
]

export default function HomeHero() {
  return (
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
              Chaque invité devient une{' '}
              <span className="fm-grad-text it">star.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="lead">
              ForeverMemories capture vos événements autrement. La Starcam filme
              vos invités en slow-motion, comme sur un tapis rouge. Vidéo sur
              place, galerie en ligne sous 48h.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="hero-cta">
              <Link href="/contact" className="btn btn-primary btn-lg">
                Réserver mon événement
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <a href="#reel" className="btn btn-ghost btn-lg">
                <span
                  aria-hidden="true"
                  className="inline-flex h-5 w-5 items-center justify-center rounded-full"
                  style={{ background: '#B65EAB' }}
                >
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path d="M9 7.5l7 4.5-7 4.5z" fill="#fff" />
                  </svg>
                </span>
                Voir nos réalisations
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
            {heroFrames.map((f) => (
              <div className="hm-frame" key={f.src}>
                <video
                  data-fm-vid
                  src={f.src}
                  poster={f.poster}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={f.hidden ? undefined : f.label}
                  aria-hidden={f.hidden ? true : undefined}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
