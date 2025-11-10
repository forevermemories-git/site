import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles, Camera, Award, Star, CheckCircle, Crown, Phone } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Starcam Gala | Photobooth Glambot pour vos Soirées de Gala en Île-de-France',
  description: 'Location de robot Starcam pour votre soirée de gala. Animation photobooth glambot premium avec vidéos slow-motion de prestige. Paris et Île-de-France.',
  keywords: ['starcam gala', 'photobooth gala', 'animation gala luxe', 'glambot soirée prestige', 'photobooth événement chic', 'animation gala paris'],
}

const galasFAQs = [
  {
    question: 'Comment s\'intègre la Starcam à l\'ambiance d\'un gala ?',
    answer: 'La Starcam est conçue pour les événements haut de gamme. Son design élégant et sa présentation soignée s\'intègrent parfaitement à une soirée de gala. Notre équipe s\'adapte au dress code de votre événement.'
  },
  {
    question: 'Peut-on personnaliser l\'expérience pour nos invités VIP ?',
    answer: 'Oui, nous proposons des options VIP : installation de tapis rouge, backdrop premium personnalisé, service dédié pour vos invités d\'honneur. Contactez-nous pour une prestation sur-mesure.'
  },
  {
    question: 'Combien de temps faut-il prévoir pour l\'installation ?',
    answer: 'Pour un gala, nous arrivons généralement 2 heures avant le début de l\'événement. Cela nous permet d\'installer le matériel, le tapis rouge et tous les éléments personnalisés dans les meilleures conditions.'
  },
  {
    question: 'Les vidéos peuvent-elles être utilisées pour la communication de l\'événement ?',
    answer: 'Oui, vous recevez un accès complet à toutes les vidéos. Avec l\'accord des participants, vous pouvez utiliser ces contenus pour votre communication post-événement et vos réseaux sociaux.'
  },
  {
    question: 'Proposez-vous d\'autres services pour compléter la prestation ?',
    answer: 'Nous pouvons vous recommander des partenaires de confiance pour compléter votre événement : photographes professionnels, décorateurs, traiteurs haut de gamme. N\'hésitez pas à nous solliciter.'
  }
]

export default function GalasPage() {
  return (
    <>
      <FAQStructuredData faqs={galasFAQs} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={[{ name: 'Galas', href: '/galas' }]} />
        {/* Hero Section */}
        <section className="relative pt-8 pb-8 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-6">
            <Crown size={16} className="fill-primary" />
            Soirées de Gala
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark leading-tight">
            La <span className="gradient-text">Starcam</span> pour vos galas
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            Une animation de prestige
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
            Offrez à vos invités une expérience digne des plus grands tapis rouges avec des vidéos slow-motion d'exception
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
              Réserver pour mon gala
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#prestations" className="px-8 py-4 text-dark font-medium hover:text-primary transition-colors">
              Découvrir nos prestations gala
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi la Starcam pour votre gala */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Une animation à la hauteur de votre événement
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La Starcam sublime vos soirées de prestige et crée des souvenirs inoubliables
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark text-center">Prestige et élégance</h3>
              <p className="text-gray-700 text-center">
                Une animation premium utilisée lors des plus grands événements : Oscars, Cannes, Fashion Week
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark text-center">Expérience VIP</h3>
              <p className="text-gray-700 text-center">
                Vos invités se sentent comme des stars avec un traitement digne des plus grands tapis rouges
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                <Camera size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark text-center">Souvenirs cinématographiques</h3>
              <p className="text-gray-700 text-center">
                Des vidéos slow-motion Full HD de qualité professionnelle à conserver à vie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types de galas */}
      <section className="py-8 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Pour tous types de galas
            </h2>
            <p className="text-lg text-gray-600">
              Une animation adaptée à l'ambiance de votre événement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-dark">Galas de charité</h3>
                  <p className="text-gray-700">
                    Dynamisez votre levée de fonds avec une animation premium. Les vidéos peuvent être partagées
                    pour amplifier la visibilité de votre cause.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Crown size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-dark">Cérémonies de récompenses</h3>
                  <p className="text-gray-700">
                    Sublimez vos remises de prix avec une expérience digne des Oscars. Les lauréats repartent
                    avec un souvenir exceptionnel.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-dark">Soirées de prestige</h3>
                  <p className="text-gray-700">
                    Inaugurations, anniversaires d'entreprise haut de gamme, soirées VIP. Une animation qui
                    marque les esprits.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Star size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-dark">Bals et soirées de gala</h3>
                  <p className="text-gray-700">
                    Ajoutez une dimension glamour à vos bals. Une animation élégante qui s'intègre parfaitement
                    à une soirée chic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prestations premium */}
      <section id="prestations" className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Prestations premium pour galas
            </h2>
            <p className="text-lg text-gray-600">
              Des options exclusives pour une expérience sur-mesure
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-dark">Tapis rouge personnalisé</h3>
                  <p className="text-gray-700">
                    Installation d'un véritable tapis rouge avec barrières VIP pour une expérience complète
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-dark">Branding haut de gamme</h3>
                  <p className="text-gray-700">
                    Logo de votre événement intégré aux vidéos, backdrop personnalisé aux couleurs de votre gala
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-dark">Équipe en tenue de soirée</h3>
                  <p className="text-gray-700">
                    Notre équipe s'habille en accord avec le dress code de votre événement
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-dark">Galerie privée premium</h3>
                  <p className="text-gray-700">
                    Plateforme en ligne élégante et brandée pour accéder à toutes les vidéos du gala
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-dark">Montage vidéo récapitulatif</h3>
                  <p className="text-gray-700">
                    Option : compilation professionnelle des meilleurs moments de la soirée
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border-2 border-primary/20 sticky top-8">
              <h3 className="text-2xl font-bold mb-6 text-dark text-center">Inclus dans nos formules gala</h3>
              <div className="space-y-3">
                {[
                  'Installation et démontage complets',
                  'Opérateur professionnel en tenue de soirée',
                  'Vidéos slow-motion et accélérées Full HD',
                  'Livraison instantanée pour chaque invité',
                  'Galerie en ligne privée premium',
                  'Personnalisation logo et couleurs',
                  'Tapis rouge et barrières VIP',
                  'Support technique dédié'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-primary/20">
                <p className="text-center text-sm text-gray-600">
                  Devis sur-mesure selon vos besoins
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos références */}
      <section className="py-8 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Ils nous ont fait confiance
            </h2>
            <p className="text-lg text-gray-600">
              La Starcam est présente lors des plus grands événements
            </p>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">500+</div>
                <div className="text-gray-600">Vidéos produites lors d'événements prestigieux</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-gray-600">Satisfaction clients pour nos galas</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">Full HD</div>
                <div className="text-gray-600">Qualité professionnelle garantie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Gala */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Comment s'intègre la Starcam à l'ambiance d'un gala ?</h3>
              <p className="text-gray-700">
                La Starcam est conçue pour les événements haut de gamme. Son design élégant et sa présentation soignée
                s'intègrent parfaitement à une soirée de gala. Notre équipe s'adapte au dress code de votre événement.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Peut-on personnaliser l'expérience pour nos invités VIP ?</h3>
              <p className="text-gray-700">
                Oui, nous proposons des options VIP : installation de tapis rouge, backdrop premium personnalisé,
                service dédié pour vos invités d'honneur. Contactez-nous pour une prestation sur-mesure.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Combien de temps faut-il prévoir pour l'installation ?</h3>
              <p className="text-gray-700">
                Pour un gala, nous arrivons généralement 2 heures avant le début de l'événement. Cela nous permet
                d'installer le matériel, le tapis rouge et tous les éléments personnalisés dans les meilleures conditions.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Les vidéos peuvent-elles être utilisées pour la communication de l'événement ?</h3>
              <p className="text-gray-700">
                Oui, vous recevez un accès complet à toutes les vidéos. Avec l'accord des participants, vous pouvez
                utiliser ces contenus pour votre communication post-événement et vos réseaux sociaux.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Proposez-vous d'autres services pour compléter la prestation ?</h3>
              <p className="text-gray-700">
                Nous pouvons vous recommander des partenaires de confiance pour compléter votre événement : photographes
                professionnels, décorateurs, traiteurs haut de gamme. N'hésitez pas à nous solliciter.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-8 px-4 md:px-8 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Sublimez votre gala avec la Starcam
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Demandez un devis personnalisé pour votre événement de prestige
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+33676815953" className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              <Phone size={20} />
              06 76 81 59 53
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-all">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}
