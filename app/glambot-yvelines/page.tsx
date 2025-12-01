import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Phone, Camera, Users, Clock, CheckCircle } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Glambot Yvelines (78) | Location Photobooth Robot Slow-Motion Versailles',
  description: 'Location de Glambot dans les Yvelines (78). Robot Starcam pour vidéos slow-motion. Mariages à Versailles, Saint-Germain-en-Laye, Rambouillet. Devis gratuit.',
  keywords: ['glambot yvelines', 'glambot 78', 'photobooth versailles', 'location glambot saint-germain', 'animation mariage yvelines', 'starcam 78', 'photobooth 78'],
  alternates: {
    canonical: 'https://forevermemories.fr/glambot-yvelines',
  },
}

const yvelinesFAQs = [
  {
    question: 'Intervenez-vous dans toutes les Yvelines ?',
    answer: 'Oui, nous couvrons l\'ensemble du département 78 : Versailles, Saint-Germain-en-Laye, Rambouillet, Mantes-la-Jolie, Poissy, Conflans-Sainte-Honorine, et toutes les autres communes des Yvelines.'
  },
  {
    question: 'Le Glambot peut-il être installé dans les châteaux des Yvelines ?',
    answer: 'Absolument ! Les Yvelines regorgent de lieux prestigieux. Notre Starcam s\'adapte parfaitement aux contraintes des châteaux, orangeries et domaines du 78. Nous avons l\'expérience des lieux d\'exception.'
  },
  {
    question: 'Y a-t-il des frais de déplacement pour les Yvelines ?',
    answer: 'Non, les Yvelines font partie de notre zone d\'intervention principale en Île-de-France. Aucun frais de déplacement supplémentaire ne s\'applique.'
  },
  {
    question: 'Quels types d\'événements organisez-vous dans le 78 ?',
    answer: 'Tous types d\'événements : mariages dans les domaines viticoles, soirées corporate dans les espaces événementiels de Saint-Quentin-en-Yvelines, anniversaires privés, galas associatifs...'
  },
  {
    question: 'Proposez-vous une visite technique gratuite dans les Yvelines ?',
    answer: 'Oui, pour les événements dans les Yvelines, nous proposons une visite technique gratuite du lieu afin de préparer au mieux l\'installation de notre Starcam et vous conseiller sur le meilleur emplacement.'
  }
]

export default function GlambotYvelinesPage() {
  return (
    <>
      <FAQStructuredData faqs={yvelinesFAQs} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={[{ name: 'Glambot Yvelines', href: '/glambot-yvelines' }]} />

        {/* Hero Section */}
        <section className="relative pt-8 pb-8 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-6">
              <MapPin size={16} />
              Yvelines (78)
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark leading-tight">
              Location <span className="gradient-text">Glambot</span> dans les Yvelines
              <br className="hidden md:block" />
              <span className="md:hidden"> </span>
              L'élégance royale pour vos événements
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
              Des vidéos slow-motion dignes des plus beaux lieux des Yvelines : Versailles, Saint-Germain-en-Laye, et au-delà
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
              Nos interventions dans les Yvelines
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-dark">Est des Yvelines</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Versailles</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Saint-Germain-en-Laye</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Le Chesnay-Rocquencourt</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Poissy</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Conflans-Sainte-Honorine</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-dark">Centre des Yvelines</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Saint-Quentin-en-Yvelines</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Plaisir</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Élancourt</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Maurepas</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Trappes</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-dark">Ouest des Yvelines</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Rambouillet</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Mantes-la-Jolie</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Les Mureaux</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Houdan</li>
                  <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Montfort-l'Amaury</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Avantages */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
              Pourquoi choisir notre Glambot dans les Yvelines ?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Camera size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">Lieux prestigieux</h3>
                <p className="text-gray-600">Notre Starcam sublime les cadres exceptionnels des Yvelines : châteaux, orangeries, domaines viticoles et espaces verts.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">Expérience locale</h3>
                <p className="text-gray-600">Nous connaissons les spécificités des lieux yvelinois et savons adapter notre installation à chaque configuration.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Clock size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-dark">Service premium</h3>
                <p className="text-gray-600">Visite technique gratuite, installation soignée, équipe professionnelle. Un service à la hauteur des lieux d'exception.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Types d'événements */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-dark">
              Tous vos événements dans le 78
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/mariages" className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all no-underline">
                <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">Mariages</h3>
                <p className="text-gray-600 mb-4">Châteaux, domaines, jardins à la française</p>
                <span className="text-primary font-medium inline-flex items-center gap-1">
                  En savoir plus <ArrowRight size={16} />
                </span>
              </Link>

              <Link href="/evenements-corporate" className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all no-underline">
                <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">Corporate</h3>
                <p className="text-gray-600 mb-4">Événements d'entreprise, team building</p>
                <span className="text-primary font-medium inline-flex items-center gap-1">
                  En savoir plus <ArrowRight size={16} />
                </span>
              </Link>

              <Link href="/galas" className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all no-underline">
                <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">Galas</h3>
                <p className="text-gray-600 mb-4">Soirées de prestige, associations</p>
                <span className="text-primary font-medium inline-flex items-center gap-1">
                  En savoir plus <ArrowRight size={16} />
                </span>
              </Link>

              <Link href="/anniversaires" className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all no-underline">
                <h3 className="text-xl font-bold mb-2 text-dark group-hover:text-primary transition-colors">Anniversaires</h3>
                <p className="text-gray-600 mb-4">Fêtes privées, événements familiaux</p>
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
              Questions fréquentes - Yvelines
            </h2>

            <div className="space-y-6">
              {yvelinesFAQs.map((faq, index) => (
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
              Votre événement dans les Yvelines mérite l'excellence
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Devis gratuit et personnalisé sous 24h. Visite technique offerte.
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
