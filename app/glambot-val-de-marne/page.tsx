import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Phone, Camera, Users, Clock, CheckCircle } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Glambot Val-de-Marne (94) | Location Photobooth Robot Slow-Motion',
  description: 'Location de Glambot dans le Val-de-Marne (94). Robot Starcam pour vidéos slow-motion. Mariages, corporate, anniversaires à Créteil, Vincennes, Saint-Maur. Devis gratuit.',
  keywords: ['glambot val-de-marne', 'glambot 94', 'photobooth créteil', 'location glambot vincennes', 'animation mariage 94', 'starcam val-de-marne', 'photobooth 94'],
  alternates: {
    canonical: 'https://forevermemories.fr/glambot-val-de-marne',
  },
}

const valDeMarneFAQs = [
  {
    question: 'Dans quelles villes du Val-de-Marne intervenez-vous ?',
    answer: 'Nous couvrons tout le Val-de-Marne : Créteil, Vincennes, Saint-Maur-des-Fossés, Champigny-sur-Marne, Vitry-sur-Seine, Ivry-sur-Seine, Maisons-Alfort, Nogent-sur-Marne, et toutes les autres communes du 94.'
  },
  {
    question: 'Y a-t-il des frais de déplacement pour le Val-de-Marne ?',
    answer: 'Non, le Val-de-Marne fait partie de la petite couronne parisienne, notre zone d\'intervention principale. Aucun frais de déplacement supplémentaire ne s\'applique pour le 94.'
  },
  {
    question: 'Quels lieux de réception du 94 connaissez-vous ?',
    answer: 'Nous avons déjà travaillé dans de nombreux lieux du Val-de-Marne : bords de Marne, espaces événementiels de Créteil, salles de Vincennes, restaurants avec vue, péniches... Nous connaissons bien le département.'
  },
  {
    question: 'Le Glambot peut-il être installé en bord de Marne ?',
    answer: 'Oui, nous adorons les installations en bord de Marne ! Le cadre naturel et verdoyant offre un décor magnifique pour nos vidéos slow-motion. Nous prévoyons un abri en cas de météo incertaine.'
  },
  {
    question: 'Proposez-vous des formules adaptées aux événements du 94 ?',
    answer: 'Nos formules sont les mêmes pour toute l\'Île-de-France, avec des tarifs adaptés à la durée et au type d\'événement. Contactez-nous pour un devis personnalisé selon vos besoins.'
  }
]

export default function GlambotValDeMarnePage() {
  return (
    <>
      <FAQStructuredData faqs={valDeMarneFAQs} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={[{ name: 'Glambot Val-de-Marne', href: '/glambot-val-de-marne' }]} />

        {/* Hero Section */}
        <section className="relative pt-8 pb-8 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-6">
              <MapPin size={16} />
              Val-de-Marne (94)
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark leading-tight">
              Location <span className="gradient-text">Glambot</span> dans le Val-de-Marne
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              L'expérience premium aux portes de Paris
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
              Des vidéos slow-motion spectaculaires pour vos événements dans le 94 : bords de Marne, espaces verts, et lieux de réception modernes
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

        {/* Avantage petite couronne */}
        <section className="py-16 px-4 md:px-8 bg-primary/5">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    <MapPin size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-dark">Petite couronne</h3>
                  <p className="text-gray-600">Le Val-de-Marne fait partie de notre zone d'intervention prioritaire, sans frais supplémentaires.</p>
                </div>

                <div>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    <Clock size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-dark">Réactivité</h3>
                  <p className="text-gray-600">Proximité immédiate avec Paris et notre base. Installation rapide et flexible selon vos contraintes.</p>
                </div>

                <div>
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-dark">Connaissance locale</h3>
                  <p className="text-gray-600">Nous connaissons les lieux emblématiques du 94 et savons nous adapter à chaque configuration.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Zones d'intervention */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
              Nous intervenons dans tout le Val-de-Marne
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-dark">Ouest du 94</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Vincennes</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Saint-Mandé</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Charenton-le-Pont</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Ivry-sur-Seine</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Vitry-sur-Seine</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-dark">Centre du 94</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Créteil</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Maisons-Alfort</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Alfortville</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Saint-Maurice</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Joinville-le-Pont</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold mb-4 text-dark">Est du 94</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Saint-Maur-des-Fossés</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Champigny-sur-Marne</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Nogent-sur-Marne</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Le Perreux-sur-Marne</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Fontenay-sous-Bois</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lieux spécifiques */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-dark">
              Les plus beaux cadres du Val-de-Marne
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              Le 94 offre des lieux variés et charmants pour vos événements. Notre Glambot s'adapte à chaque ambiance.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-dark">Bords de Marne</h3>
                <p className="text-gray-600 mb-4">
                  Les guinguettes et espaces en bord de Marne offrent un cadre bucolique et festif. Notre Starcam capture parfaitement l'atmosphère champêtre et conviviale de ces lieux uniques.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle size={16} className="text-primary" /> Ambiance guinguette
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle size={16} className="text-primary" /> Décor naturel verdoyant
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-dark">Bois de Vincennes</h3>
                <p className="text-gray-600 mb-4">
                  Le Bois de Vincennes et ses alentours proposent des espaces événementiels uniques. Parc Floral, Château de Vincennes, restaurants avec jardin...
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle size={16} className="text-primary" /> Cadre prestigieux
                  </li>
                  <li className="flex items-center gap-2 text-gray-600">
                    <CheckCircle size={16} className="text-primary" /> Espaces verts exceptionnels
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Types d'événements */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
              Tous vos événements dans le 94
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/mariages" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all no-underline">
                <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">Mariages</h3>
                <p className="text-gray-600 mb-4">Guinguettes, espaces bord de Marne, salles de réception</p>
                <span className="text-primary font-medium inline-flex items-center gap-1">
                  En savoir plus <ArrowRight size={16} />
                </span>
              </Link>

              <Link href="/evenements-corporate" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all no-underline">
                <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">Corporate</h3>
                <p className="text-gray-600 mb-4">Séminaires, team building, soirées d'entreprise</p>
                <span className="text-primary font-medium inline-flex items-center gap-1">
                  En savoir plus <ArrowRight size={16} />
                </span>
              </Link>

              <Link href="/galas" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all no-underline">
                <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">Galas</h3>
                <p className="text-gray-600 mb-4">Soirées associatives, événements caritatifs</p>
                <span className="text-primary font-medium inline-flex items-center gap-1">
                  En savoir plus <ArrowRight size={16} />
                </span>
              </Link>

              <Link href="/anniversaires" className="group bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all no-underline">
                <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">Anniversaires</h3>
                <p className="text-gray-600 mb-4">Fêtes privées, anniversaires en famille</p>
                <span className="text-primary font-medium inline-flex items-center gap-1">
                  En savoir plus <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
              Questions fréquentes - Val-de-Marne
            </h2>

            <div className="space-y-6">
              {valDeMarneFAQs.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6">
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
              Votre événement dans le Val-de-Marne vous attend
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Devis gratuit et personnalisé sous 24h. Aucun frais de déplacement.
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
