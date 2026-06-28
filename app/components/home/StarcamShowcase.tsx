import { Bot, Film, Sparkles, Smartphone, Clock } from 'lucide-react'
import Reveal from './Reveal'

const caps = [
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
    text: 'Chaque geste ralenti, spectaculaire, transformé en moment de cinéma.',
  },
  {
    cls: 'c3',
    Icon: Sparkles,
    title: 'Qualité Full HD',
    text: '1080p à 120 images par seconde, éclairage studio intégré pour une image nette et premium.',
  },
  {
    cls: 'c4',
    Icon: Smartphone,
    title: 'Livraison immédiate',
    text: 'La vidéo sur le téléphone des invités sur place, et la galerie en ligne sous 48h.',
  },
]

export default function StarcamShowcase() {
  return (
    <section className="pad band-sun" id="how">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">La Starcam</span>
          <h2>
            Un bras robotisé qui transforme{' '}
            <span className="em">vos invités en stars</span>
          </h2>
          <p>
            Une caméra cinéma au bout d&apos;un bras à 5 axes. Le résultat
            ressemble à une bande-annonce, pas à une vidéo de soirée.
          </p>
        </Reveal>

        <div className="how-grid">
          <Reveal className="how-photo">
            <div className="frame">
              <video
                data-fm-vid
                src="/videos/reels/al-wedding.webm"
                poster="/images/posters/video-al-groupe-poster.jpg"
                muted
                loop
                playsInline
                preload="metadata"
                aria-label="Reel vertical filmé par la Starcam au mariage d'Antoine et Lashmi"
              />
            </div>
            <div className="float-badge floaty">
              <span className="badge-ring" aria-hidden="true">
                <Clock size={22} />
              </span>
              <span>
                <b>48h</b>
                <span className="fb-sub">galerie en ligne</span>
              </span>
            </div>
          </Reveal>

          <div className="caps">
            {caps.map(({ cls, Icon, title, text }, i) => (
              <Reveal key={title} delay={0.08 * (i + 1)}>
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
      </div>
    </section>
  )
}
