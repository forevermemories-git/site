import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import { blogArticles } from '../data/articles'
import { getArticleContent } from '../data/content'

export async function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = blogArticles.find(a => a.slug === params.slug)

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

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = blogArticles.find(a => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  const articleContent = getArticleContent(params.slug)
  const currentIndex = blogArticles.findIndex(a => a.slug === params.slug)
  const prevArticle = currentIndex > 0 ? blogArticles[currentIndex - 1] : null
  const nextArticle = currentIndex < blogArticles.length - 1 ? blogArticles[currentIndex + 1] : null

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mb-6 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Retour au blog
          </Link>

          {/* Category */}
          <div className="mb-4">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-dark leading-tight">
            {article.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              {article.date}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              {article.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12 px-4 md:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg max-w-none
          prose-headings:text-dark prose-headings:font-bold
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
          prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
          prose-a:text-primary prose-a:no-underline hover:prose-a:underline
          prose-strong:text-dark prose-strong:font-semibold
          prose-ul:my-6 prose-li:text-gray-700
          prose-table:border-collapse prose-table:w-full
          prose-th:bg-primary/10 prose-th:p-3 prose-th:text-left prose-th:font-semibold
          prose-td:border prose-td:border-gray-200 prose-td:p-3"
          dangerouslySetInnerHTML={{ __html: articleContent }}
        />
      </article>

      {/* CTA Section */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-dark">
            Intéressé par notre Glambot ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactez-nous pour un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all"
            >
              Demander un devis
            </Link>
            <Link
              href="/la-starcam"
              className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all"
            >
              Découvrir la technologie
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Articles */}
      <section className="py-12 px-4 md:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Previous Article */}
            {prevArticle && (
              <Link
                href={`/blog/${prevArticle.slug}`}
                className="group flex items-start gap-4 p-6 border-2 border-gray-100 rounded-xl hover:border-primary transition-all"
              >
                <div className="text-2xl">{prevArticle.emoji}</div>
                <div className="flex-1">
                  <div className="text-sm text-gray-500 mb-1 flex items-center gap-1">
                    <ArrowLeft size={14} />
                    Article précédent
                  </div>
                  <h3 className="font-semibold text-dark group-hover:text-primary transition-colors line-clamp-2">
                    {prevArticle.title}
                  </h3>
                </div>
              </Link>
            )}

            {/* Next Article */}
            {nextArticle && (
              <Link
                href={`/blog/${nextArticle.slug}`}
                className="group flex items-start gap-4 p-6 border-2 border-gray-100 rounded-xl hover:border-primary transition-all md:ml-auto"
              >
                <div className="flex-1 text-right">
                  <div className="text-sm text-gray-500 mb-1 flex items-center justify-end gap-1">
                    Article suivant
                    <ArrowRight size={14} />
                  </div>
                  <h3 className="font-semibold text-dark group-hover:text-primary transition-colors line-clamp-2">
                    {nextArticle.title}
                  </h3>
                </div>
                <div className="text-2xl">{nextArticle.emoji}</div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
