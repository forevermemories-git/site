import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { blogArticles } from '../data/articles'
import { getArticleContent } from '../data/content'
import ReadingProgressBar from '@/app/components/blog/ReadingProgressBar'
import ShareButtons from '@/app/components/blog/ShareButtons'

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
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
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
      <ReadingProgressBar />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Moderne et Épuré */}
        <section className="relative pt-32 pb-12 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-primary transition-colors mb-8 group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Retour au blog</span>
            </Link>

            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full uppercase tracking-wider">
                {article.emoji} {article.category}
              </span>
              {article.badge && (
                <span className="ml-3 inline-block px-4 py-1.5 bg-gradient-primary text-white text-sm font-semibold rounded-full">
                  {article.badge}
                </span>
              )}
            </div>

            {/* Title - Grand et Impactant */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-dark leading-tight">
              {article.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed font-light">
              {article.excerpt}
            </p>

            {/* Meta Info - Moderne */}
            <div className="flex flex-wrap items-center gap-6 py-6 border-y border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg">
                  FM
                </div>
                <div>
                  <div className="font-semibold text-dark">{article.author}</div>
                  <div className="text-sm text-gray-500">Content Specialist</div>
                </div>
              </div>
              <div className="h-8 w-px bg-gray-200 hidden md:block" />
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={18} />
                <span className="text-sm font-medium">{article.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock size={18} />
                <span className="text-sm font-medium">{article.readTime} de lecture</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content with Sidebar */}
        <article className="py-12 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Article */}
              <div className="flex-1 max-w-3xl mx-auto lg:mx-0">
                {/* Article Content - Prose Amélioré */}
                <div
                  className="prose prose-lg prose-gray max-w-none
                    prose-headings:font-bold prose-headings:tracking-tight
                    prose-h2:text-3xl prose-h2:md:text-4xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-dark prose-h2:scroll-mt-24
                    prose-h3:text-2xl prose-h3:md:text-3xl prose-h3:mt-10 prose-h3:mb-4 prose-h3:text-dark prose-h3:scroll-mt-24
                    prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                    prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-a:transition-all
                    prose-strong:text-dark prose-strong:font-semibold
                    prose-ul:my-8 prose-ul:space-y-2 prose-li:text-gray-700 prose-li:text-lg prose-li:marker:text-primary
                    prose-ol:my-8 prose-ol:space-y-2
                    prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-700 prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:my-8
                    prose-code:text-primary prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono
                    prose-pre:bg-gray-900 prose-pre:text-gray-100
                    prose-table:border-collapse prose-table:w-full prose-table:my-8 prose-table:shadow-md prose-table:rounded-lg prose-table:overflow-hidden
                    prose-th:bg-gradient-primary prose-th:text-white prose-th:p-4 prose-th:text-left prose-th:font-semibold prose-th:text-base
                    prose-td:border prose-td:border-gray-200 prose-td:p-4 prose-td:bg-white
                    prose-tr:even:bg-gray-50
                    prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8"
                  dangerouslySetInnerHTML={{ __html: articleContent }}
                />

                {/* Tags */}
                {article.keywords && article.keywords.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Mots-clés</h3>
                    <div className="flex flex-wrap gap-2">
                      {article.keywords.map((keyword) => (
                        <span
                          key={keyword}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar - Desktop Only */}
              <aside className="hidden lg:block w-80 shrink-0">
                <div className="sticky top-24 space-y-8">
                  {/* Share Buttons */}
                  <ShareButtons title={article.title} slug={slug} />

                  {/* Author Card */}
                  <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 border-2 border-primary/20">
                    <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-2xl mb-4 mx-auto">
                      FM
                    </div>
                    <h3 className="font-bold text-center mb-2 text-dark">Forever Memories</h3>
                    <p className="text-sm text-gray-600 text-center mb-4">
                      Experts en animation événementielle avec notre Glambot exclusif
                    </p>
                    <Link
                      href="/contact"
                      className="block w-full px-4 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all text-center"
                    >
                      Nous contacter
                    </Link>
                  </div>

                  {/* Popular Articles */}
                  <div className="bg-white rounded-2xl p-6 border-2 border-gray-100">
                    <h3 className="font-bold text-lg mb-4 text-dark">Articles populaires</h3>
                    <div className="space-y-4">
                      {blogArticles.filter(a => a.badge).slice(0, 3).map((popularArticle) => (
                        <Link
                          key={popularArticle.slug}
                          href={`/blog/${popularArticle.slug}`}
                          className="block group"
                        >
                          <div className="flex items-start gap-3">
                            <span className="text-2xl">{popularArticle.emoji}</span>
                            <div>
                              <h4 className="font-semibold text-sm text-dark group-hover:text-primary transition-colors line-clamp-2">
                                {popularArticle.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">{popularArticle.readTime}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </article>

        {/* Share Buttons - Mobile */}
        <div className="lg:hidden px-4 md:px-8 pb-12">
          <div className="max-w-3xl mx-auto">
            <ShareButtons title={article.title} slug={slug} />
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-primary">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">✨</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Prêt à créer des souvenirs inoubliables ?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez notre Glambot et offrez à vos invités une expérience digne d'Hollywood
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/la-starcam"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-all"
              >
                Découvrir la technologie
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation Articles */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-dark text-center">Continuer la lecture</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Previous Article */}
              {prevArticle && (
                <Link
                  href={`/blog/${prevArticle.slug}`}
                  className="group relative overflow-hidden bg-white rounded-2xl border-2 border-gray-100 hover:border-primary transition-all shadow-sm hover:shadow-xl p-8"
                >
                  <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                    <ArrowLeft size={14} />
                    Article précédent
                  </div>
                  <div className="text-3xl mb-3">{prevArticle.emoji}</div>
                  <h3 className="font-bold text-xl text-dark group-hover:text-primary transition-colors line-clamp-2 mb-2">
                    {prevArticle.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{prevArticle.excerpt}</p>
                </Link>
              )}

              {/* Next Article */}
              {nextArticle && (
                <Link
                  href={`/blog/${nextArticle.slug}`}
                  className="group relative overflow-hidden bg-white rounded-2xl border-2 border-gray-100 hover:border-primary transition-all shadow-sm hover:shadow-xl p-8"
                >
                  <div className="text-sm text-gray-500 mb-2 flex items-center justify-end gap-2">
                    Article suivant
                    <ArrowRight size={14} />
                  </div>
                  <div className="text-3xl mb-3 text-right">{nextArticle.emoji}</div>
                  <h3 className="font-bold text-xl text-dark group-hover:text-primary transition-colors line-clamp-2 mb-2 text-right">
                    {nextArticle.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 text-right">{nextArticle.excerpt}</p>
                </Link>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
