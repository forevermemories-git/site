import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { blogArticles } from './data/articles'

export const metadata: Metadata = {
  title: 'Blog Glambot & Starcam | Conseils, Tendances & Innovations - Forever Memories',
  description: 'Découvrez nos guides sur le Glambot, la différence avec les photobooths 360, et comment créer des vidéos slow-motion dignes d\'Hollywood pour vos événements.',
  keywords: ['blog glambot', 'photobooth 360', 'animation mariage', 'slow motion booth', 'videobooth', 'conseils événement'],
  openGraph: {
    title: 'Blog Glambot & Événements | Forever Memories',
    description: 'Guides, comparaisons et tendances sur les Glambots et photobooths nouvelle génération',
    type: 'website',
  }
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-20 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark leading-tight">
            Blog <span className="gradient-text">Forever Memories</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto font-light">
            Conseils, comparaisons et tendances sur les Glambots, photobooths 360 et animations événementielles
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group"
              >
                <article className="h-full bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-primary hover:shadow-xl transition-all duration-300">
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                      {article.emoji}
                    </div>
                    {article.badge && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                        {article.badge}
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {article.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {article.readTime}
                      </div>
                    </div>

                    {/* Category */}
                    <div className="mb-3">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {article.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-bold mb-3 text-dark group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      Lire l'article
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Prêt à vivre l'expérience Glambot ?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Découvrez notre technologie unique en Île-de-France
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-all"
            >
              Demander un devis
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
    </div>
  )
}
