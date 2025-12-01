import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Star, CheckCircle, Phone, Camera, Users, Clock } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Glambot Paris | Location Robot Photobooth Slow-Motion à Paris',
  description: 'Location de Glambot à Paris et petite couronne. Robot Starcam pour vidéos slow-motion cinématographiques. Mariages, corporate, anniversaires. Devis gratuit sous 24h.',
  keywords: ['glambot paris', 'location glambot paris', 'photobooth paris', 'robot video paris', 'slow motion paris', 'animation événement paris', 'starcam paris'],
  alternates: {
    canonical: 'https://forevermemories.fr/glambot-paris',
  },
}

const parisFAQs = [
  {
    question: 'Où intervenez-vous exactement à Paris ?',
    answer: 'Nous intervenons dans tout Paris intra-muros (75) ainsi que dans la petite couronne : Hauts-de-Seine (92), Seine-Saint-Denis (93) et Val-de-Marne (94). Aucun frais de déplacement supplémentaire pour ces zones.'
  },
  {
    question: 'Quels types de lieux à Paris sont adaptés pour le Glambot ?',
    answer: 'Notre Starcam s\'adapte à tous les lieux parisiens : hôtels particuliers, rooftops, salles de réception, restaurants, espaces Haussmanniens, lofts industriels. Nous avons l\'habitude des contraintes des lieux prestigieux parisiens.'
  },
  {
    question: 'Peut-on installer le Glambot dans un appartement parisien ?',
    answer: 'Oui, notre équipement compact (3m x 3m) s\'adapte aux espaces parisiens. Nous vérifions toujours la faisabilité en amont et proposons des solutions adaptées même pour les espaces plus restreints.'
  },
  {
    question: 'Combien coûte une prestation Glambot à Paris ?',
    answer: 'Nos prestations à Paris démarrent à partir de 1500€ pour 3h. Le tarif exact dépend de la durée, du jour (semaine/week-end) et des options choisies. Demandez un devis gratuit pour votre événement.'
  },
  {
    question: 'Quel délai pour réserver à Paris ?',
    answer: 'Paris étant notre zone principale d\'intervention, nous avons une forte demande. Nous recommandons de réserver 2-3 mois à l\'avance, surtout pour les week-ends. Contactez-nous même en dernière minute, nous ferons notre maximum.'
  }
]

export default function GlambotParisPage() {
  return (
    <>
      <FAQStructuredData faqs={parisFAQs} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={[{ name: 'Glambot Paris', href: '/glambot-paris' }]} />

        {/* Hero Section */}
        <section className="relative pt-8 pb-8 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-6">
              <MapPin size={16} />
              Paris &amp; Petite Couronne
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark leading-tight">
              Location <span className="gradient-text">Glambot</span> à Paris
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              L'expérience Hollywood dans la capitale
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
              Transformez votre événement parisien en moment d'exception avec notre robot Starcam et ses vidéos slow-motion cinématographiques
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 no-underline"
              >
                Demander un devis gratuit
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/tarifs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-all no-underline"
              >
                Voir nos tarifs
              </Link>
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
              Nos zones d'intervention à Paris
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">Paris (75)</h3>
                <p className="text-gray-600">Tous les arrondissements, des lieux prestigieux du 8ème aux espaces branchés du 11ème</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">Hauts-de-Seine (92)</h3>
                <p className="text-gray-600">Neuilly, Boulogne, La Défense, Issy-les-Moulineaux et toutes les communes</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">Seine-Saint-Denis (93)</h3>
                <p className="text-gray-600">Saint-Denis, Montreuil, Saint-Ouen, Pantin et l'ensemble du département</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">Val-de-Marne (94)</h3>
                <p className="text-gray-600">Vincennes, Saint-Mandé, Créteil, Nogent-sur-Marne et alentours</p>
              </div>
            </div>

            <p className="text-center mt-8 text-gray-600">
              <strong>Aucun frais de déplacement</strong> pour Paris et la petite couronne
            </p>
          </div>
        </section>

        {/* Pourquoi nous choisir */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
              Pourquoi choisir Forever Memories à Paris ?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Camera size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">Technologie exclusive</h3>
                <p className="text-gray-600">Notre Starcam est l'un des rares Glambots disponibles en région parisienne. Une technologie quasi introuvable ailleurs.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">500+ événements</h3>
                <p className="text-gray-600">Plus de 500 événements réussis en Île-de-France. Nous connaissons parfaitement les lieux et contraintes parisiennes.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Clock size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">Réactivité locale</h3>
                <p className="text-gray-600">Basés en Île-de-France, nous sommes réactifs et flexibles. Visite technique gratuite sur Paris si nécessaire.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types d'événements */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
              Tous vos événements parisiens
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/mariages" className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all no-underline">
                <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">Mariages</h3>
                <p className="text-gray-600 mb-4">Hôtels particuliers, châteaux, rooftops parisiens</p>
                <span className="text-primary font-medium inline-flex items-center gap-1">
                  En savoir plus <ArrowRight size={16} />
                </span>
              </Link>

              <Link href="/evenements-corporate" className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all no-underline">
                <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">Corporate</h3>
                <p className="text-gray-600 mb-4">Séminaires, lancements, soirées d'entreprise</p>
                <span className="text-primary font-medium inline-flex items-center gap-1">
                  En savoir plus <ArrowRight size={16} />
                </span>
              </Link>

              <Link href="/galas" className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all no-underline">
                <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">Galas</h3>
                <p className="text-gray-600 mb-4">Soirées de prestige, cérémonies, tapis rouge</p>
                <span className="text-primary font-medium inline-flex items-center gap-1">
                  En savoir plus <ArrowRight size={16} />
                </span>
              </Link>

              <Link href="/anniversaires" className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all no-underline">
                <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">Anniversaires</h3>
                <p className="text-gray-600 mb-4">Fêtes privées, anniversaires marquants</p>
                <span className="text-primary font-medium inline-flex items-center gap-1">
                  En savoir plus <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
              Questions fréquentes - Glambot Paris
            </h2>

            <div className="space-y-6">
              {parisFAQs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-2 text-dark">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 md:px-8 bg-primary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Prêt à transformer votre événement parisien ?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contactez-nous pour un devis gratuit et personnalisé sous 24h
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-gray-100 transition-all no-underline"
              >
                <Phone size={20} />
                Demander un devis
              </Link>
              <a
                href="tel:+33612345678"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white/10 transition-all no-underline"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
