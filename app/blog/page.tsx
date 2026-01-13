'use client'

import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Clock, ArrowRight, BookOpen } from 'lucide-react'
import { blogArticles } from './data/articles'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import { useRef } from 'react'

// Fonction pour parser les dates françaises
function parseDate(dateStr: string): Date {
  const months: { [key: string]: number } = {
    'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
    'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11
  }
  const parts = dateStr.split(' ')
  const day = parseInt(parts[0])
  const month = months[parts[1].toLowerCase()]
  const year = parseInt(parts[2])
  return new Date(year, month, day)
}

// Trier les articles du plus récent au plus ancien
const sortedArticles = [...blogArticles].sort((a, b) => {
  return parseDate(b.date).getTime() - parseDate(a.date).getTime()
})

// Article Card Component
function ArticleCard({ article, index }: { article: typeof blogArticles[0]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative h-full"
    >
      <Link href={`/blog/${article.slug}`} className="block h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

        <div className="relative h-full bg-dark-card/50 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden group-hover:border-primary/20 transition-all duration-300 flex flex-col">
          {/* Image / Emoji area */}
          <div className="relative h-48 bg-gradient-to-br from-primary/10 to-rose/5 overflow-hidden flex items-center justify-center">
            <span className="text-7xl group-hover:scale-110 transition-transform duration-500">
              {article.emoji}
            </span>

            {article.badge && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-primary to-rose text-white text-xs font-semibold rounded-full"
              >
                {article.badge}
              </motion.div>
            )}

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />
          </div>

          {/* Content */}
          <div className="p-6 flex-1 flex flex-col">
            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-cream/40 mb-3">
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                {article.readTime}
              </div>
              <span className="w-1 h-1 rounded-full bg-cream/20" />
              <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                {article.category}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold mb-3 text-cream group-hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h2>

            {/* Excerpt */}
            <p className="text-cream/50 text-sm mb-4 line-clamp-3 flex-1">
              {article.excerpt}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2 text-primary font-medium text-sm mt-auto pt-4 border-t border-white/5 group-hover:gap-3 transition-all">
              Lire l'article
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function BlogPage() {
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <div ref={sectionRef} className="min-h-screen bg-dark">
      <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }]} />

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
        {/* Background elements */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ y: backgroundY }}
        >
          <div className="absolute top-20 -left-32 w-96 h-96 bg-primary/15 rounded-full blur-[150px]" />
          <div className="absolute top-40 -right-32 w-80 h-80 bg-rose/10 rounded-full blur-[120px]" />
        </motion.div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        <div className="container-wide relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <BookOpen size={20} className="text-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Articles & Conseils</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1]"
            >
              <span className="text-cream">Blog </span>
              <span className="bg-gradient-to-r from-primary-light via-primary to-rose bg-clip-text text-transparent">Forever Memories</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-cream/50 max-w-3xl mx-auto leading-relaxed"
            >
              Conseils, comparaisons et tendances sur les Glambots, photobooths 360 et animations événementielles
            </motion.p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {sortedArticles.map((article, index) => (
              <ArticleCard key={article.slug} article={article} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-rose" />
            <div className="absolute inset-0 bg-dark/20" />

            <div className="relative p-10 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Prêt à vivre l'expérience Glambot ?
              </h2>
              <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
                Découvrez notre technologie unique en Île-de-France
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group px-8 py-4 bg-white text-dark rounded-full font-semibold hover:bg-cream transition-all flex items-center justify-center gap-2"
                >
                  Demander un devis
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/la-starcam"
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white hover:text-dark transition-all"
                >
                  Découvrir la technologie
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
