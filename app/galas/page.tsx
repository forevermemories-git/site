import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Crown, Award, Sparkles, Star, CheckCircle, Phone, Shield, Users, Camera, Gem, Trophy } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Animation Gala de Prestige | Starcam Tapis Rouge VIP Paris & Île-de-France',
  description: 'Animation haut de gamme pour galas, cérémonies de remise de prix et soirées de prestige. Tapis rouge, service VIP, branding personnalisé. La même technologie que les Oscars et le Festival de Cannes.',
  keywords: ['animation gala prestige', 'photobooth gala luxe', 'soirée de gala animation', 'cérémonie remise prix', 'tapis rouge événement', 'animation soirée prestige paris', 'glambot gala'],
  alternates: {
    canonical: 'https://forevermemories.fr/galas',
  },
  openGraph: {
    title: 'Animation Gala de Prestige | Expérience Tapis Rouge VIP',
    description: 'La technologie des Oscars pour vos galas et cérémonies. Service premium et personnalisation totale.',
    type: 'website',
  }
}

const galasFAQs = [
  {
    question: 'Quelle est la différence avec une prestation standard ?',
    answer: 'Notre offre Gala inclut des éléments premium : tapis rouge de 6m, barrières VIP chromées, équipe en tenue de soirée (smoking/robe), branding complet de vos vidéos, et un chef de projet dédié pour coordonner avec votre équipe événementielle.'
  },
  {
    question: 'Pouvez-vous vous intégrer à une scénographie existante ?',
    answer: 'Absolument. Nous travaillons régulièrement avec des agences événementielles et scénographes. Notre équipe technique peut s\'adapter à vos contraintes (couleurs, positionnement, timing) et se coordonner avec vos autres prestataires.'
  },
  {
    question: 'Quel délai pour la personnalisation des vidéos avec notre branding ?',
    answer: 'Nous recommandons de nous transmettre vos éléments graphiques (logo HD, charte couleurs) au moins 2 semaines avant l\'événement. Pour des demandes complexes (animation logo, intro personnalisée), prévoir 3 semaines.'
  },
  {
    question: 'Proposez-vous un service pour les invités VIP ?',
    answer: 'Oui, nous pouvons mettre en place un "fast pass" pour vos invités d\'honneur : accès prioritaire, opérateur dédié, et même des vidéos avec un traitement spécial (ralenti plus prononcé, montage différent).'
  },
  {
    question: 'Les vidéos peuvent-elles être diffusées en direct ?',
    answer: 'Oui ! Nous pouvons projeter les vidéos en temps réel sur un écran dans la salle. Effet garanti quand les invités se voient apparaître en slow-motion quelques secondes après leur passage.'
  }
]

export default function GalasPage() {
  return (
    <>
      <FAQStructuredData faqs={galasFAQs} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={[{ name: 'Galas & Prestige', href: '/galas' }]} />

        {/* Hero Section - Angle LUXE et PRESTIGE */}
        <section className="relative pt-8 pb-16 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur text-sm font-medium text-white/90 mb-6 border border-white/20">
              <Crown size={16} className="text-yellow-400" />
              Prestations de prestige
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              L'expérience
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">
                tapis rouge
              </span>
              pour vos galas
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
              La même technologie utilisée aux Oscars, au Festival de Cannes et dans les plus grandes cérémonies mondiales. Désormais disponible pour vos événements de prestige.
            </p>

            {/* Références visuelles */}
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Trophy size={16} className="text-yellow-500" /> Technologie Oscars
              </span>
              <span className="flex items-center gap-2">
                <Star size={16} className="text-yellow-500" /> Festival de Cannes
              </span>
              <span className="flex items-center gap-2">
                <Gem size={16} className="text-yellow-500" /> Galas Fortune 500
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 rounded-full font-semibold hover:from-yellow-400 hover:to-amber-400 transition-all flex items-center justify-center gap-2 shadow-lg">
                Demander une proposition
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="tel:+33676815953" className="px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/10 rounded-full transition-colors flex items-center justify-center gap-2">
                <Phone size={18} />
                Appeler directement
              </Link>
            </div>
          </div>
        </section>

        {/* Section : Ce qui nous différencie */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
                Une prestation à la hauteur de vos exigences
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Pour les événements où chaque détail compte
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center mx-auto mb-6">
                  <Crown size={36} className="text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark">Service White Glove</h3>
                <p className="text-gray-600">
                  Chef de projet dédié, coordination avec vos équipes, répétition technique possible la veille. Rien n'est laissé au hasard.
                </p>
              </div>

              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center mx-auto mb-6">
                  <Award size={36} className="text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark">Branding sur-mesure</h3>
                <p className="text-gray-600">
                  Vos couleurs, votre logo, votre univers graphique intégrés aux vidéos. Un prolongement parfait de votre identité visuelle.
                </p>
              </div>

              <div className="text-center p-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center mx-auto mb-6">
                  <Shield size={36} className="text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-dark">Discrétion absolue</h3>
                <p className="text-gray-600">
                  Équipe formée aux codes des événements privés. Confidentialité garantie, matériel et véhicules neutres.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section : Types de galas */}
        <section className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
                Expertise dans tous types de galas
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center flex-shrink-0">
                    <Trophy size={28} className="text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-dark">Cérémonies de remise de prix</h3>
                    <p className="text-gray-600">
                      Trophées sportifs, prix professionnels, awards d'entreprise... Les lauréats repartent avec une vidéo mémorable de leur moment de gloire.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full font-medium">Trophées du Sport</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full font-medium">Awards Corporate</span>
                  <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full font-medium">Prix Associatifs</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center flex-shrink-0">
                    <Sparkles size={28} className="text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-dark">Galas de charité</h3>
                    <p className="text-gray-600">
                      Une animation qui valorise vos donateurs et génère du contenu partageable pour amplifier votre cause sur les réseaux sociaux.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                  <span className="px-3 py-1 bg-red-50 text-red-700 text-xs rounded-full font-medium">Fondations</span>
                  <span className="px-3 py-1 bg-red-50 text-red-700 text-xs rounded-full font-medium">ONG</span>
                  <span className="px-3 py-1 bg-red-50 text-red-700 text-xs rounded-full font-medium">Associations</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center flex-shrink-0">
                    <Users size={28} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-dark">Soirées annuelles & conventions</h3>
                    <p className="text-gray-600">
                      Le point d'orgue de votre année. Une animation premium qui récompense vos équipes et renforce le sentiment d'appartenance.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">Kick-off</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">Conventions</span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">Anniversaires d'entreprise</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center flex-shrink-0">
                    <Gem size={28} className="text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-dark">Événements privés haut de gamme</h3>
                    <p className="text-gray-600">
                      Mariages de luxe, anniversaires prestigieux, fêtes privées... Pour ceux qui veulent le meilleur, sans compromis.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full font-medium">Mariages Prestige</span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full font-medium">Anniversaires VIP</span>
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs rounded-full font-medium">Réceptions Privées</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section : L'expérience tapis rouge - UNIQUE */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-medium mb-6">
                  <Star size={16} />
                  L'expérience complète
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Recréez l'atmosphère des plus grandes cérémonies
                </h2>
                <p className="text-lg text-gray-300 mb-8">
                  Vos invités foulent un véritable tapis rouge, passent devant un mur de marque personnalisé, et repartent avec une vidéo digne des plus grands red carpets.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Tapis rouge premium 6 mètres</h4>
                      <p className="text-gray-400 text-sm">Avec barrières chromées et poteaux à cordes dorées</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Backdrop personnalisé grand format</h4>
                      <p className="text-gray-400 text-sm">Imprimé avec votre logo et identité visuelle</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Équipe en tenue de soirée</h4>
                      <p className="text-gray-400 text-sm">Smoking et robes de soirée pour s'intégrer parfaitement</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-yellow-400 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-white">Éclairage professionnel</h4>
                      <p className="text-gray-400 text-sm">Projecteurs cinéma pour un rendu optimal</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 p-8 rounded-3xl border border-yellow-500/20">
                <div className="text-center">
                  <div className="text-6xl mb-6">🏆</div>
                  <h3 className="text-2xl font-bold mb-4">Formule Prestige</h3>
                  <p className="text-gray-400 mb-6">Tout inclus pour une expérience irréprochable</p>

                  <ul className="text-left space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle size={18} className="text-yellow-400" />
                      Installation tapis rouge complète
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle size={18} className="text-yellow-400" />
                      Backdrop personnalisé
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle size={18} className="text-yellow-400" />
                      2 opérateurs en tenue de soirée
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle size={18} className="text-yellow-400" />
                      Branding vidéo complet
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle size={18} className="text-yellow-400" />
                      Galerie privée brandée
                    </li>
                    <li className="flex items-center gap-2 text-gray-300">
                      <CheckCircle size={18} className="text-yellow-400" />
                      Montage récapitulatif offert
                    </li>
                  </ul>

                  <Link href="/contact" className="block w-full px-6 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 rounded-full font-semibold hover:from-yellow-400 hover:to-amber-400 transition-all text-center">
                    Demander un devis Prestige
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section : Diffusion en direct - UNIQUE */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
                Option : diffusion en direct sur grand écran
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Imaginez : vos invités passent devant la Starcam, et quelques secondes plus tard, leur vidéo slow-motion apparaît sur l'écran géant de la salle. Effet garanti.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-4xl mb-4">📺</div>
                <h3 className="font-bold text-lg mb-2 text-dark">Projection instantanée</h3>
                <p className="text-gray-600 text-sm">
                  Les vidéos s'affichent en temps réel sur vos écrans. Créez un moment de partage collectif.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="font-bold text-lg mb-2 text-dark">Mosaïque des meilleurs moments</h3>
                <p className="text-gray-600 text-sm">
                  En fin de soirée, compilation automatique des meilleures vidéos diffusée sur écran.
                </p>
              </div>

              <div className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="font-bold text-lg mb-2 text-dark">Compatible tous systèmes</h3>
                <p className="text-gray-600 text-sm">
                  HDMI, réseau, streaming... On s'adapte à votre infrastructure technique.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
                Questions fréquentes
              </h2>
            </div>

            <div className="space-y-4">
              {galasFAQs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold mb-3 text-dark">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <Crown size={48} className="text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Votre gala mérite l'excellence
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Discutons de votre projet. Nous vous proposerons une solution sur-mesure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+33676815953" className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 rounded-full font-semibold hover:from-yellow-400 hover:to-amber-400 transition-all flex items-center justify-center gap-2">
                <Phone size={20} />
                06 76 81 59 53
              </Link>
              <Link href="/contact" className="px-8 py-4 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all">
                Demander une proposition
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
