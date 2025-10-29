import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, PartyPopper, Camera, Users, Gift, Star, CheckCircle, Cake } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Starcam Anniversaire | Photobooth Glambot pour vos Anniversaires en Île-de-France',
  description: 'Location de robot Starcam pour votre anniversaire. Animation glambot avec vidéos slow-motion pour un anniversaire inoubliable. Paris, Seine-et-Marne et toute l\'Île-de-France.',
  keywords: ['starcam anniversaire', 'photobooth anniversaire', 'animation anniversaire luxe', 'glambot anniversaire', 'vidéo slow motion anniversaire', 'anniversaire original paris'],
}

export default function AnniversairesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-6">
            <Cake size={16} className="fill-primary" />
            Spécial Anniversaires
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark leading-tight">
            Un anniversaire <span className="gradient-text">inoubliable</span>
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            avec la Starcam
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
            Transformez votre anniversaire en une fête digne d'Hollywood avec des vidéos slow-motion spectaculaires
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="group px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
              Réserver pour mon anniversaire
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#tarifs" className="px-8 py-4 text-dark font-medium hover:text-primary transition-colors">
              Voir les formules
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi la Starcam pour votre anniversaire */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              L'animation qui fera parler de votre anniversaire
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une expérience unique qui rendra votre fête mémorable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                <Star size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark text-center">Effet star</h3>
              <p className="text-gray-700 text-center">
                Vous et vos invités vous sentez comme des célébrités avec des vidéos dignes du tapis rouge
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                <PartyPopper size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark text-center">Ambiance garantie</h3>
              <p className="text-gray-700 text-center">
                Une animation ludique et conviviale qui crée de l'émulation et des fous rires toute la soirée
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                <Gift size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark text-center">Souvenirs uniques</h3>
              <p className="text-gray-700 text-center">
                Vos invités repartent avec leurs vidéos immédiatement. Un cadeau dont ils se souviendront longtemps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types d'anniversaires */}
      <section className="py-8 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Pour tous les types d'anniversaires
            </h2>
            <p className="text-lg text-gray-600">
              De 18 à 80 ans, la Starcam s'adapte à toutes les ambiances
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-dark">18 ans - Majorité</h3>
              <p className="text-gray-700 mb-4">
                Marquez le passage à l'âge adulte avec style. Une animation moderne qui plaît aux jeunes et crée le buzz sur les réseaux sociaux.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Soirée branchée</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Réseaux sociaux</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Tendance</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-dark">20-40 ans - Entre amis</h3>
              <p className="text-gray-700 mb-4">
                Une animation originale pour une fête entre amis. Fous rires garantis et vidéos à partager sans modération.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Convivial</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Fun</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Original</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-dark">40-60 ans - Anniversaires marquants</h3>
              <p className="text-gray-700 mb-4">
                Célébrez vos 40, 50 ou 60 ans avec élégance. Une animation premium qui plaît à toutes les générations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Élégant</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Intergénérationnel</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Classe</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-3 text-dark">60 ans et + - Célébrations familiales</h3>
              <p className="text-gray-700 mb-4">
                Réunissez toute la famille autour d'une activité ludique. Des souvenirs mémorables pour toutes les générations.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Familial</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Chaleureux</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Souvenirs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Comment ça se passe le jour de la fête ?
            </h2>
            <p className="text-lg text-gray-600">
              Un service clé en main pour profiter pleinement de votre anniversaire
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">1</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-dark">Arrivée et installation</h3>
                <p className="text-gray-700">
                  Notre équipe arrive 1h avant pour installer discrètement le matériel. Tout est prêt pour le début de la fête
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">2</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-dark">Animation toute la soirée</h3>
                <p className="text-gray-700">
                  Un opérateur professionnel guide vos invités et assure une ambiance festive tout au long de l'événement
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">3</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-dark">Vidéos instantanées</h3>
                <p className="text-gray-700">
                  Chaque invité reçoit sa vidéo immédiatement et peut la partager sur les réseaux sociaux en direct
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">4</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-dark">Galerie complète</h3>
                <p className="text-gray-700">
                  Toutes les vidéos accessibles via un lien privé sous 48h. Revivez ces moments à volonté
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inclus */}
      <section className="py-8 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Inclus dans nos formules anniversaire
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border-2 border-primary/20">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Installation et démontage du matériel',
                'Opérateur professionnel présent toute la soirée',
                'Vidéos slow-motion et accélérées en Full HD',
                'Livraison instantanée pour chaque invité',
                'Galerie en ligne privée sous 48h',
                'Passages illimités pour vos invités',
                'Personnalisation possible avec thème de la fête',
                'Animation et ambiance festive'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Anniversaire */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Combien d'invités minimum ou maximum ?</h3>
              <p className="text-gray-700">
                Il n'y a pas de minimum ni de maximum ! Que vous soyez 20 ou 100 invités, la Starcam s'adapte.
                Pour les petits groupes (moins de 30 personnes), nous proposons des formules ajustées.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Peut-on l'installer chez moi ou dans un jardin ?</h3>
              <p className="text-gray-700">
                Oui, absolument ! La Starcam s'installe aussi bien en intérieur qu'en extérieur (jardin, terrasse).
                Pour l'extérieur, nous recommandons une installation sous chapiteau ou auvent en cas de pluie.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Quelle est la durée de location idéale ?</h3>
              <p className="text-gray-700">
                Nos formules anniversaire sont généralement de 3 à 5 heures. Pour une soirée classique, 4 heures
                est la durée idéale permettant à tous vos invités de profiter de l'expérience plusieurs fois.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Peut-on personnaliser les vidéos avec le thème de la fête ?</h3>
              <p className="text-gray-700">
                Oui ! Nous pouvons personnaliser les vidéos avec les couleurs de votre fête, ajouter un message d'anniversaire,
                ou même intégrer le prénom de la personne fêtée. Parlez-nous de votre thème !
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Jusqu'où vous déplacez-vous en Île-de-France ?</h3>
              <p className="text-gray-700">
                Nous intervenons dans toute l'Île-de-France : Paris, Seine-et-Marne (77), Yvelines (78),
                Essonne (91), Hauts-de-Seine (92), Seine-Saint-Denis (93), Val-de-Marne (94) et Val-d'Oise (95).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-8 px-4 md:px-8 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Prêt à organiser un anniversaire inoubliable ?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Contactez-nous pour un devis personnalisé et gratuit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+33676815953" className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              Appelez-nous : 06 76 81 59 53
            </Link>
            <Link href="mailto:hello@forevermemories.fr" className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-all">
              Demander un devis par email
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
