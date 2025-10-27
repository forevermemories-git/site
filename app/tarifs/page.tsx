import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, Star, Heart, Building2, PartyPopper, Crown, Phone, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Tarifs Starcam | Prix Location Photobooth Glambot en Île-de-France',
  description: 'Découvrez nos tarifs de location Starcam pour mariages, événements corporate, anniversaires et galas. Devis gratuit et personnalisé. Paris et Île-de-France.',
  keywords: ['tarif starcam', 'prix photobooth glambot', 'location starcam', 'prix glambot mariage', 'tarif photobooth événement', 'devis starcam'],
}

export default function TarifsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark leading-tight">
            Nos <span className="gradient-text">tarifs</span> et formules
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            Une offre adaptée à chaque événement
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
            Des forfaits flexibles pour tous types d'événements, du plus intime au plus prestigieux
          </p>

          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium">
            <Star size={20} className="fill-primary" />
            Devis gratuit et personnalisé sous 24h
          </div>
        </div>
      </section>

      {/* Formules principales */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Nos formules principales
            </h2>
            <p className="text-lg text-gray-600">
              Choisissez la formule adaptée à votre type d'événement
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Formule Essentielle */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <PartyPopper size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-dark">Essentielle</h3>
              <div className="mb-6">
                <div className="text-3xl font-bold text-primary mb-1">Sur devis</div>
                <div className="text-gray-600 text-sm">3 heures de prestation</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Installation et démontage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Opérateur professionnel 3h</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Vidéos slow-motion Full HD</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Livraison instantanée</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Galerie en ligne 48h</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Passages illimités</span>
                </li>
              </ul>

              <div className="text-sm text-gray-600 italic">
                Idéal pour petits événements et anniversaires
              </div>
            </div>

            {/* Formule Mariage */}
            <div className="bg-gradient-to-b from-primary/5 to-white border-2 border-primary rounded-3xl p-8 relative hover:shadow-xl transition-all">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-primary text-white text-sm font-semibold rounded-full">
                Populaire
              </div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Heart size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-dark">Mariage</h3>
              <div className="mb-6">
                <div className="text-3xl font-bold text-primary mb-1">Sur devis</div>
                <div className="text-gray-600 text-sm">4-6 heures de prestation</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Tout de la formule Essentielle</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Opérateur toute la soirée</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Personnalisation couleurs mariage</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Backdrop personnalisé</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Animation et ambiance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Galerie premium mariés</span>
                </li>
              </ul>

              <div className="text-sm text-gray-600 italic">
                La formule préférée des mariés
              </div>
            </div>

            {/* Formule Corporate */}
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Building2 size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-dark">Corporate</h3>
              <div className="mb-6">
                <div className="text-3xl font-bold text-primary mb-1">Sur devis</div>
                <div className="text-gray-600 text-sm">4 heures minimum</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Tout de la formule Essentielle</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Branding vidéo avec logo</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Backdrop aux couleurs entreprise</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Galerie privée brandée</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Rapport de statistiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Support dédié</span>
                </li>
              </ul>

              <div className="text-sm text-gray-600 italic">
                Activation de marque et engagement
              </div>
            </div>

            {/* Formule Premium Gala */}
            <div className="bg-gradient-to-b from-primary/10 to-white border-2 border-primary rounded-3xl p-8 hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white mb-4">
                <Crown size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-dark">Premium Gala</h3>
              <div className="mb-6">
                <div className="text-3xl font-bold text-primary mb-1">Sur devis</div>
                <div className="text-gray-600 text-sm">Prestation sur-mesure</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Tout de la formule Corporate</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Tapis rouge personnalisé</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Barrières VIP</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Équipe en tenue de soirée</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Montage vidéo récapitulatif</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Service concierge dédié</span>
                </li>
              </ul>

              <div className="text-sm text-gray-600 italic">
                L'excellence pour vos événements de prestige
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Options additionnelles */}
      <section className="py-8 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Options et personnalisations
            </h2>
            <p className="text-lg text-gray-600">
              Ajoutez des extras pour une expérience encore plus unique
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-dark">Heure supplémentaire</h3>
              <p className="text-gray-700 text-sm mb-3">
                Prolongez la magie avec des heures additionnelles
              </p>
              <div className="text-primary font-bold">Sur devis</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-dark">Tapis rouge premium</h3>
              <p className="text-gray-700 text-sm mb-3">
                Installation complète avec barrières VIP et signalétique
              </p>
              <div className="text-primary font-bold">Sur devis</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-dark">Montage vidéo événement</h3>
              <p className="text-gray-700 text-sm mb-3">
                Compilation professionnelle des meilleurs moments
              </p>
              <div className="text-primary font-bold">Sur devis</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-dark">Backdrop personnalisé XXL</h3>
              <p className="text-gray-700 text-sm mb-3">
                Décor sur-mesure aux dimensions et couleurs de votre choix
              </p>
              <div className="text-primary font-bold">Sur devis</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-dark">Second opérateur</h3>
              <p className="text-gray-700 text-sm mb-3">
                Pour les événements avec fort affluence
              </p>
              <div className="text-primary font-bold">Sur devis</div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-2 text-dark">Accessoires & props</h3>
              <p className="text-gray-700 text-sm mb-3">
                Lunettes, chapeaux, accessoires glamour personnalisés
              </p>
              <div className="text-primary font-bold">Sur devis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi nos tarifs */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Ce qui est inclus dans nos tarifs
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-dark">Toujours inclus</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Transport et installation sur site en Île-de-France</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Opérateur professionnel formé et expérimenté</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Matériel de dernière génération (robot, éclairage, son)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Vidéos en qualité Full HD professionnelle</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Livraison instantanée pour chaque participant</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Galerie en ligne privée accessible sous 48h</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Passages illimités pour tous vos invités</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check size={20} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-gray-700">Assurance RC professionnelle</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-3xl border-2 border-primary/20">
              <h3 className="text-xl font-bold mb-4 text-dark">Facilités de paiement</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-semibold text-dark mb-1">Acompte à la réservation</div>
                  <div className="text-gray-700 text-sm">30% pour confirmer votre date</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-semibold text-dark mb-1">Solde le jour J</div>
                  <div className="text-gray-700 text-sm">70% le jour de l'événement avant installation</div>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <div className="font-semibold text-dark mb-1">Paiements acceptés</div>
                  <div className="text-gray-700 text-sm">Virement bancaire, chèque, espèces</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="py-8 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Zone d'intervention
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Nous intervenons dans toute l'Île-de-France sans frais de déplacement supplémentaires :
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700">Paris (75)</span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700">Seine-et-Marne (77)</span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700">Yvelines (78)</span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700">Essonne (91)</span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700">Hauts-de-Seine (92)</span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700">Seine-Saint-Denis (93)</span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700">Val-de-Marne (94)</span>
            <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700">Val-d'Oise (95)</span>
          </div>
          <p className="text-gray-600 text-sm">
            Interventions possibles en dehors de l'Île-de-France sur devis (frais de déplacement supplémentaires)
          </p>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-8 px-4 md:px-8 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Demandez votre devis personnalisé
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Recevez une proposition sur-mesure en moins de 24h, sans engagement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+33676815953" className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              <Phone size={20} />
              06 76 81 59 53
            </Link>
            <Link href="mailto:hello@forevermemories.fr" className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-all flex items-center justify-center gap-2">
              <Mail size={20} />
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
