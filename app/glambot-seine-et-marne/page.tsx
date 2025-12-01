import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Star, CheckCircle, Phone, Camera, Users, Clock, Home } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Glambot Seine-et-Marne (77) | Location Photobooth Robot Slow-Motion',
  description: 'Location de Glambot en Seine-et-Marne (77). Robot Starcam pour vidéos slow-motion. Mariages dans les châteaux, domaines et salles de réception du 77. Devis gratuit.',
  keywords: ['glambot seine-et-marne', 'glambot 77', 'photobooth 77', 'location glambot meaux', 'photobooth fontainebleau', 'animation mariage 77', 'starcam seine-et-marne'],
  alternates: {
    canonical: 'https://forevermemories.fr/glambot-seine-et-marne',
  },
}

const seineMarneFAQs = [
  {
    question: 'Intervenez-vous dans toute la Seine-et-Marne ?',
    answer: 'Oui, nous couvrons l\'ensemble du département 77 : Meaux, Melun, Fontainebleau, Provins, Chelles, Pontault-Combault, Torcy, et toutes les autres communes. Notre équipe est basée en Seine-et-Marne, c\'est notre territoire principal.'
  },
  {
    question: 'Le Glambot est-il adapté aux mariages dans les châteaux du 77 ?',
    answer: 'Absolument ! Nous avons l\'habitude des châteaux et domaines de Seine-et-Marne : Château de Fontainebleau, Vaux-le-Vicomte, et de nombreux domaines privés. Notre équipement s\'adapte aux contraintes patrimoniales.'
  },
  {
    question: 'Y a-t-il des frais de déplacement en Seine-et-Marne ?',
    answer: 'Non, aucun frais de déplacement pour la Seine-et-Marne. C\'est notre département d\'implantation, nous nous déplaçons gratuitement dans tout le 77.'
  },
  {
    question: 'Peut-on installer le Glambot en extérieur dans un domaine ?',
    answer: 'Oui, notre Starcam s\'installe aussi bien en intérieur qu\'en extérieur. Pour les installations en plein air, nous recommandons un espace abrité (chapiteau, grange, terrasse couverte) en cas d\'intempéries.'
  },
  {
    question: 'Combien de temps à l\'avance réserver pour un mariage en Seine-et-Marne ?',
    answer: 'La Seine-et-Marne étant très prisée pour les mariages (nombreux châteaux et domaines), nous recommandons de réserver 3-6 mois à l\'avance, surtout pour la saison mai-septembre.'
  }
]

export default function GlambotSeineMarnePage() {
  return (
    <>
      <FAQStructuredData faqs={seineMarneFAQs} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={[{ name: 'Glambot Seine-et-Marne', href: '/glambot-seine-et-marne' }]} />

        {/* Hero Section */}
        <section className="relative pt-8 pb-8 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-6">
              <MapPin size={16} />
              Seine-et-Marne (77)
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark leading-tight">
              Location <span className="gradient-text">Glambot</span> en Seine-et-Marne
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              Votre événement dans le 77
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
              Notre territoire d'implantation ! Profitez de notre expertise locale pour des vidéos slow-motion exceptionnelles dans les plus beaux lieux du 77
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

        {/* Notre avantage local */}
        <section className="py-16 px-4 md:px-8 bg-primary/5">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Home size={32} />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark">Notre territoire, notre expertise</h2>
                  <p className="text-primary font-medium">Basés en Seine-et-Marne depuis nos débuts</p>
                </div>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                Forever Memories est implanté en Seine-et-Marne. Nous connaissons parfaitement les lieux de réception du département : châteaux, domaines, salles des fêtes, hôtels. Cette connaissance locale nous permet de vous conseiller et de nous adapter aux spécificités de chaque lieu.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                  <CheckCircle size={16} /> Aucun frais de déplacement
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                  <CheckCircle size={16} /> Visite technique gratuite
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary font-medium">
                  <CheckCircle size={16} /> Connaissance des lieux
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Villes principales */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
              Nous intervenons dans tout le 77
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-dark">Nord Seine-et-Marne</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Meaux</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Chelles</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Torcy / Marne-la-Vallée</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Lagny-sur-Marne</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Pontault-Combault</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-dark">Centre Seine-et-Marne</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Melun</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Fontainebleau</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Nemours</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Brie-Comte-Robert</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Savigny-le-Temple</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-dark">Est Seine-et-Marne</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Provins</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Coulommiers</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> La Ferté-sous-Jouarre</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Montereau</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Nangis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lieux emblématiques */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-dark">
              Les plus beaux lieux du 77
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              La Seine-et-Marne regorge de lieux d'exception pour vos événements. Notre Starcam sublime chacun d'entre eux.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-dark">Châteaux &amp; Domaines</h3>
                <p className="text-gray-600 mb-4">
                  Le 77 est réputé pour ses châteaux majestueux : Fontainebleau, Vaux-le-Vicomte, et de nombreux domaines privés. Notre Glambot apporte une touche Hollywood à ces lieux chargés d'histoire.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle size={16} className="text-primary" /> Adaptation aux contraintes patrimoniales
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle size={16} className="text-primary" /> Installation discrète et respectueuse
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-dark">Granges &amp; Corps de ferme</h3>
                <p className="text-gray-600 mb-4">
                  Les granges rénovées et corps de ferme du 77 offrent un cadre champêtre et authentique. Notre Starcam s'intègre parfaitement à ces ambiances rustiques chic.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle size={16} className="text-primary" /> Installation intérieure ou extérieure
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle size={16} className="text-primary" /> Éclairage adapté aux lieux atypiques
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
              Questions fréquentes - Seine-et-Marne
            </h2>

            <div className="space-y-6">
              {seineMarneFAQs.map((faq, index) => (
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
              Votre événement en Seine-et-Marne mérite le meilleur
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Profitez de notre expertise locale. Devis gratuit et personnalisé sous 24h.
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
