const WORDS = [
  'MARIAGES',
  'GALAS',
  'TAPIS ROUGE',
  'ANNIVERSAIRES',
  'PRESTIGE',
  'CORPORATE',
]

export default function EventMarquee() {
  // Duplicated once so the -50% translate loops seamlessly.
  const loop = [...WORDS, ...WORDS]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((word, i) => (
          <span key={`${word}-${i}`} className="contents">
            <span className={`marquee-word ${i % 2 === 0 ? 'mw-fill' : 'mw-outline'}`}>{word}</span>
            <span className="marquee-dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
