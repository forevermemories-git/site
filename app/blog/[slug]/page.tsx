import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { blogArticles } from '../data/articles'
import { getArticleContent } from '../data/content'
import ReadingProgressBar from '@/app/components/blog/ReadingProgressBar'
import ShareButtons from '@/app/components/blog/ShareButtons'
import ArticleStructuredData from '@/app/components/seo/ArticleStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = blogArticles.find(a => a.slug === slug)

  if (!article) {
    return {
      title: 'Article non trouvé',
    }
  }

  return {
    title: `${article.title} | Blog Forever Memories`,
    description: article.excerpt,
    keywords: article.keywords,
    alternates: {
      canonical: `https://www.forevermemories.fr/blog/${slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
    },
  }
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = blogArticles.find(a => a.slug === slug)

  if (!article) {
    notFound()
  }

  const articleContent = getArticleContent(slug)
  const currentIndex = blogArticles.findIndex(a => a.slug === slug)
  const prevArticle = currentIndex > 0 ? blogArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null

  return (
    <>
      <ArticleStructuredData
        title={article.title}
        description={article.excerpt}
        author={article.author}
        datePublished={article.date}
        category={article.category}
        keywords={article.keywords}
        slug={slug}
      />
      <ReadingProgressBar />

      <div className="fm-home overflow-hidden">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: 'Blog', href: '/blog' },
            { name: article.title, href: `/blog/${slug}` }
          ]}
        />

        {/* Hero */}
        <section className="relative px-4 pb-10 pt-28 md:px-8 md:pt-32">
          <div className="hero-blob blob1" aria-hidden="true" />
          <div className="relative z-10 mx-auto max-w-[760px]">
            {/* Retour */}
            <Link
              href="/blog"
              className="group/back mb-8 inline-flex items-center gap-2 text-sm font-medium !text-[#6C6172] transition-colors hover:!text-[#8E3F84]"
            >
              <ArrowLeft size={18} aria-hidden="true" className="transition-transform group-hover/back:-translate-x-1" />
              Retour au blog
            </Link>

            {/* Categorie */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-block rounded-full bg-[#FBEFF6] px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-[#8E3F84]">
                {article.category}
              </span>
              {article.badge && (
                <span className="inline-block rounded-full px-4 py-1.5 text-sm font-semibold text-white" style={{ background: 'var(--fm-grad)' }}>
                  {article.badge}
                </span>
              )}
            </div>

            {/* Titre */}
            <h1 className="mb-6 text-[clamp(34px,5.2vw,52px)] leading-[1.05] text-[#2A2230]">
              {article.title}
            </h1>

            {/* Chapo */}
            <p className="mb-8 text-xl leading-relaxed text-[#6C6172] md:text-2xl">
              {article.excerpt}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 border-y border-[rgba(42,34,48,0.10)] py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full font-bold text-lg text-white" style={{ background: 'var(--fm-grad)' }}>
                  FM
                </div>
                <div>
                  <div className="font-semibold text-[#2A2230]">{article.author}</div>
                  <div className="text-sm text-[#6C6172]">Equipe editoriale</div>
                </div>
              </div>
              <div className="hidden h-8 w-px bg-[rgba(42,34,48,0.10)] md:block" />
              <div className="flex items-center gap-2 text-[#6C6172]">
                <Clock size={18} aria-hidden="true" />
                <span className="text-sm font-medium">{article.readTime} de lecture</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contenu + sidebar */}
        <article className="px-4 py-12 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-12 lg:flex-row">
              {/* Article */}
              <div className="mx-auto w-full max-w-[720px] lg:mx-0">
                <div
                  className="prose prose-lg max-w-none
                    prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-[#2A2230]
                    prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:scroll-mt-24
                    prose-h3:text-2xl prose-h3:md:text-3xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:scroll-mt-24
                    prose-p:text-[#473F50] prose-p:leading-[1.75] prose-p:mb-6 prose-p:text-[1.0625rem]
                    prose-a:text-[#8E3F84] prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-a:transition-all
                    prose-strong:text-[#2A2230] prose-strong:font-semibold
                    prose-ul:my-7 prose-ul:space-y-2 prose-li:text-[#473F50] prose-li:text-[1.0625rem] prose-li:marker:text-[#B65EAB]
                    prose-ol:my-7 prose-ol:space-y-2
                    prose-blockquote:border-l-4 prose-blockquote:border-[#B65EAB] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-[#5B2A55] prose-blockquote:bg-[#FBEFF6] prose-blockquote:py-4 prose-blockquote:rounded-r-xl prose-blockquote:my-8
                    prose-code:text-[#8E3F84] prose-code:bg-[#FBEFF6] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                    prose-pre:bg-[#2A2230] prose-pre:text-[#F5F3F0]
                    prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:rounded-xl prose-table:overflow-hidden prose-table:shadow-[0_6px_18px_rgba(91,42,85,0.08)]
                    prose-th:bg-[#B65EAB] prose-th:p-4 prose-th:text-left prose-th:font-semibold prose-th:text-base prose-th:text-white
                    prose-td:border prose-td:border-[rgba(42,34,48,0.08)] prose-td:p-4 prose-td:bg-white
                    prose-img:rounded-2xl prose-img:shadow-[0_16px_40px_rgba(91,42,85,0.14)] prose-img:my-8
                    [&_p]:!text-[#473F50]
                    [&_a]:!text-[#8E3F84] [&_a]:!underline [&_a]:decoration-[#B65EAB]/40 [&_a]:underline-offset-2 [&_a:hover]:decoration-[#B65EAB]"
                  dangerouslySetInnerHTML={{ __html: articleContent }}
                />

                {/* Tags */}
                {article.keywords && article.keywords.length > 0 && (
                  <div className="mt-12 border-t border-[rgba(42,34,48,0.10)] pt-8">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#6C6172]">Mots-cles</h3>
                    <div className="flex flex-wrap gap-2">
                      {article.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="rounded-full border border-[rgba(42,34,48,0.08)] bg-white px-4 py-2 text-sm font-medium text-[#6C6172] transition-colors hover:bg-[#FBEFF6] hover:text-[#8E3F84]"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="hidden w-80 shrink-0 lg:block">
                <div className="sticky top-24 space-y-8">
                  {/* Partage */}
                  <ShareButtons title={article.title} slug={slug} />

                  {/* Carte auteur */}
                  <div className="rounded-2xl border border-[rgba(42,34,48,0.08)] bg-white p-6 shadow-[0_6px_18px_rgba(91,42,85,0.08)]">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white" style={{ background: 'var(--fm-grad)' }}>
                      FM
                    </div>
                    <h3 className="mb-2 text-center text-[#2A2230]">Forever Memories</h3>
                    <p className="mb-4 text-center text-sm text-[#6C6172]">
                      Experts en animation evenementielle avec la Starcam, notre glambot robotise.
                    </p>
                    <Link
                      href="/la-starcam"
                      className="mb-3 block w-full rounded-full border border-[rgba(42,34,48,0.12)] px-4 py-2.5 text-center font-semibold !text-[#8E3F84] transition-colors hover:bg-[#FBEFF6]"
                    >
                      Decouvrir la Starcam
                    </Link>
                    <Link
                      href="/contact"
                      className="block w-full rounded-full px-4 py-2.5 text-center font-semibold !text-white transition-transform hover:-translate-y-0.5"
                      style={{ background: 'var(--fm-grad)' }}
                    >
                      Nous contacter
                    </Link>
                  </div>

                  {/* Articles populaires */}
                  <div className="rounded-2xl border border-[rgba(42,34,48,0.08)] bg-white p-6 shadow-[0_6px_18px_rgba(91,42,85,0.08)]">
                    <h3 className="mb-4 text-lg text-[#2A2230]">Articles populaires</h3>
                    <div className="space-y-4">
                      {blogArticles.filter(a => a.badge).slice(0, 3).map((popularArticle) => (
                        <Link
                          key={popularArticle.slug}
                          href={`/blog/${popularArticle.slug}`}
                          className="group/pop block"
                        >
                          <h4 className="text-sm font-semibold text-[#2A2230] transition-colors group-hover/pop:text-[#8E3F84] line-clamp-2">
                            {popularArticle.title}
                          </h4>
                          <p className="mt-1 text-xs text-[#6C6172]">{popularArticle.readTime} de lecture</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* Partage mobile */}
        <div className="px-4 pb-12 md:px-8 lg:hidden">
          <div className="mx-auto max-w-[720px]">
            <ShareButtons title={article.title} slug={slug} />
          </div>
        </div>

        {/* CTA */}
        <section className="cta-band band-rose">
          <div className="wrap">
            <div className="cta-inner">
              <span className="dotblob cta-d1" aria-hidden="true" />
              <span className="dotblob cta-d2" aria-hidden="true" />
              <h2>
                Prets a creer des
                <br />
                souvenirs inoubliables ?
              </h2>
              <p>Offrez a vos invites leur moment de star avec la Starcam, filme en slow-motion.</p>
              <div className="btn-row">
                <Link href="/contact" className="btn btn-white btn-lg">
                  Demander un devis
                  <ArrowRight size={18} aria-hidden="true" stroke="#8E3F84" />
                </Link>
                <Link href="/la-starcam" className="btn btn-outline btn-lg">
                  Decouvrir la Starcam
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation articles */}
        <section className="px-4 py-16 md:px-8" style={{ background: 'var(--tint-sky)' }}>
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-8 text-center text-2xl text-[#2A2230] md:text-3xl">Continuer la lecture</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {prevArticle && (
                <Link
                  href={`/blog/${prevArticle.slug}`}
                  className="group/nav rounded-2xl border border-[rgba(42,34,48,0.08)] bg-white p-7 shadow-[0_6px_18px_rgba(91,42,85,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(91,42,85,0.14)]"
                >
                  <div className="mb-2 flex items-center gap-2 text-sm text-[#6C6172]">
                    <ArrowLeft size={14} aria-hidden="true" />
                    Article precedent
                  </div>
                  <h3 className="mb-2 text-xl text-[#2A2230] transition-colors group-hover/nav:text-[#8E3F84] line-clamp-2">
                    {prevArticle.title}
                  </h3>
                  <p className="text-sm text-[#6C6172] line-clamp-2">{prevArticle.excerpt}</p>
                </Link>
              )}

              {nextArticle && (
                <Link
                  href={`/blog/${nextArticle.slug}`}
                  className="group/nav rounded-2xl border border-[rgba(42,34,48,0.08)] bg-white p-7 text-right shadow-[0_6px_18px_rgba(91,42,85,0.08)] transition-all hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(91,42,85,0.14)]"
                >
                  <div className="mb-2 flex items-center justify-end gap-2 text-sm text-[#6C6172]">
                    Article suivant
                    <ArrowRight size={14} aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-xl text-[#2A2230] transition-colors group-hover/nav:text-[#8E3F84] line-clamp-2">
                    {nextArticle.title}
                  </h3>
                  <p className="text-sm text-[#6C6172] line-clamp-2">{nextArticle.excerpt}</p>
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
