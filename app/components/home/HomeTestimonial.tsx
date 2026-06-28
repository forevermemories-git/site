import Reveal from './Reveal'

const stats = [
  { cls: 's1', num: '+1000', lab: 'vidéos produites' },
  { cls: 's2', num: '48h', lab: 'galerie en ligne' },
  { cls: 's3', num: '5 axes', lab: 'bras robotisé' },
]

export default function HomeTestimonial() {
  return (
    <section className="pad band-sky" id="proof">
      <div className="wrap">
        <div className="proof-grid">
          <Reveal className="quote-card">
            <div className="quote-mark" aria-hidden="true">
              &ldquo;
            </div>
            <blockquote>
              La Starcam a fait <span className="em">sensation</span> à notre
              soirée. Chaque invité repartait avec sa vidéo sur le téléphone, le
              sourire jusqu&apos;aux oreilles.
            </blockquote>
            <div className="author">
              <span className="av" aria-hidden="true">
                CL
              </span>
              <span>
                <b>Camille Lefèvre</b>
                <span className="role">
                  Responsable événementiel, Maison Vatel
                </span>
              </span>
            </div>
          </Reveal>

          <div className="stats-col">
            {stats.map((s, i) => (
              <Reveal key={s.cls} delay={0.08 * (i + 1)}>
                <div className={`stat ${s.cls}`}>
                  <span className="num">{s.num}</span>
                  <span className="lab">{s.lab}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
