import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { blogArticles } from './data/articles'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import Reveal from '@/app/components/home/Reveal'

export const metadata: Metadata = {
  title: 'Blog Forever Memories | Glambot, Starcam et animation evenementielle',
  description:
    "Conseils et tendances sur la Starcam, le glambot robotise, le livre d'or video et l'album souvenir chronologique. Des idees d'animation pour vos mariages, galas et evenements d'entreprise.",
  keywords: [
    'blog glambot',
    'starcam',
    'animation evenementielle',
    "livre d'or video",
    'album souvenir video',
    'glambot mariage',
    'animation gala',
    'photobooth video',
    'video slow motion evenement',
  ],
  alternates: {
    canonical: 'https://www.forevermemories.fr/blog',
  },
  openGraph: {
    title: 'Blog Forever Memories - Glambot & animation evenementielle',
    description:
      "Guides et inspiration autour de la Starcam, du glambot, du livre d'or video et de l'album souvenir pour vos evenements.",
    type: 'website',
  },
}

// Tints "Confetti" alternes pour les vignettes de cartes
const cardTints = [
  { bg: 'var(--tint-rose)', ink: '#8E3F84' },
  { bg: 'var(--tint-sun)', ink: '#8a6d12' },
  { bg: 'var(--tint-mint)', ink: '#1f7a5a' },
  { bg: 'var(--tint-sky)', ink: '#245078' },
  { bg: 'var(--tint-peach)', ink: '#b2341e' },
]

// Parser les dates francaises
function parseDate(dateStr: string): Date {
  const months: { [key: string]: number } = {
    janvier: 0, 'février': 1, mars: 2, avril: 3, mai: 4, juin: 5,
    juillet: 6, 'août': 7, septembre: 8, octobre: 9, novembre: 10, 'décembre': 11,
  }
  const parts = dateStr.split(' ')
  const day = parseInt(parts[0])
  const month = months[parts[1].toLowerCase()]
  const year = parseInt(parts[2])
  return new Date(year, month, day)
}

const sortedArticles = [...blogArticles].sort(
  (a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime()
)

export default function BlogPage() {
  return (
    <div className="fm-home overflow-hidden">
      <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} />

      {/* Hero */}
      <section className="pt-32 md:pt-36 pb-10 md:pb-14">
        <div className="wrap">
          <Reveal className="sec-head">
            <span className="eyebrow">Conseils &amp; inspiration</span>
            <h1 className="mb-3" style={{ fontSize: 'clamp(38px, 5.4vw, 60px)' }}>
              Le blog <span className="fm-grad-text">Forever Memories</span>
            </h1>
            <p>
              Glambot, Starcam, livre d&apos;or video et album souvenir : nos guides
              pour reussir l&apos;animation de vos mariages, galas et evenements
              d&apos;entreprise.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grille d'articles */}
      <section className="pb-20 md:pb-28">
        <div className="wrap">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sortedArticles.map((article, index) => {
              const tint = cardTints[index % cardTints.length]
              return (
                <Reveal key={article.slug} delay={(index % 3) * 0.08} className="h-full">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="group/card flex h-full flex-col overflow-hidden rounded-[26px] border border-[rgba(42,34,48,0.08)] bg-white shadow-[0_6px_18px_rgba(91,42,85,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(91,42,85,0.14)]"
                  >
                    {/* Vignette typographique tintee */}
                    <div
                      className="relative px-6 pb-5 pt-6"
                      style={{ background: tint.bg }}
                    >
                      {article.badge && (
                        <span className="absolute right-5 top-5 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white" style={{ background: 'var(--fm-grad)' }}>
                          {article.badge}
                        </span>
                      )}
                      <span
                        className="text-xs font-bold uppercase tracking-[0.08em]"
                        style={{ color: tint.ink }}
                      >
                        {article.category}
                      </span>
                      <div className="mt-1 text-[13px] font-medium text-[#6C6172]">
                        {article.readTime} de lecture
                      </div>
                    </div>

                    {/* Corps */}
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="mb-3 text-[20px] leading-snug text-[#2A2230] transition-colors group-hover/card:text-[#B65EAB]">
                        {article.title}
                      </h2>
                      <p className="mb-5 flex-1 text-[15px] leading-relaxed text-[#6C6172]">
                        {article.excerpt}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-2 border-t border-[rgba(42,34,48,0.08)] pt-4 text-sm font-semibold text-[#8E3F84]">
                        Lire l&apos;article
                        <ArrowRight
                          size={16}
                          aria-hidden="true"
                          className="transition-transform group-hover/card:translate-x-1"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Envie de faire briller
              <br />
              vos invites ?
            </h2>
            <p>Decouvrez la Starcam, notre bras robotise qui filme vos invites en slow-motion.</p>
            <div className="btn-row">
              <Link href="/contact" className="btn btn-white btn-lg">
                Demander un devis
                <ArrowRight size={18} aria-hidden="true" stroke="#8E3F84" />
              </Link>
              <Link href="/la-starcam" className="btn btn-outline btn-lg">
                Decouvrir la Starcam
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
