import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Reveal from './Reveal'

export default function Showreel() {
  return (
    <section className="pad band-mint" id="reel">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">Showreel</span>
          <h2>
            Des sourires, <span className="em">en grand format</span>
          </h2>
          <p>
            Un aperçu des moments capturés par la Starcam. Imaginez vos invités à
            l&apos;écran.
          </p>
        </Reveal>

        <div className="reel-grid">
          <Reveal className="reel-card">
            <video
              data-fm-vid
              src="/videos/video-chezrose-girls.webm"
              poster="/images/posters/video-chezrose-girls-poster.jpg"
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Réalisation, mariage filmé par la Starcam"
            />
          </Reveal>

          <Reveal delay={0.08} className="reel-card">
            <video
              data-fm-vid
              src="/videos/video-corcorans-groupe.webm"
              poster="/images/posters/video-corcorans-groupe-poster.jpg"
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Réalisation, groupe d'invités filmé par la Starcam"
            />
          </Reveal>

          <Reveal delay={0.16} className="reel-card">
            <video
              data-fm-vid
              src="/videos/video-mamakutty-groupe.webm"
              poster="/images/posters/video-mamakutty-groupe-poster.jpg"
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Réalisation, groupe en célébration filmé par la Starcam"
            />
          </Reveal>

          <Reveal className="reel-card">
            <video
              data-fm-vid
              src="/videos/clips/clip-4.mp4"
              poster="/images/posters/clip-4-poster.jpg"
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Réalisation, anniversaire filmé par la Starcam"
            />
          </Reveal>

          <Reveal delay={0.08} className="reel-card">
            <video
              data-fm-vid
              src="/videos/video-sambavam-groupe.webm"
              poster="/images/posters/video-sambavam-groupe-poster.jpg"
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Réalisation, invités en célébration sur le tapis rouge"
            />
          </Reveal>

          <Reveal delay={0.16} className="reel-card">
            <video
              data-fm-vid
              src="/videos/video-mp-groupe.webm"
              poster="/images/posters/video-mp-groupe-poster.jpg"
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Réalisation, gala filmé par la Starcam"
            />
          </Reveal>
        </div>

        <Reveal className="reel-cta">
          <Link href="/contact" className="btn btn-coral btn-lg">
            Réserver mon événement
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
