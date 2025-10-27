import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Camera, Users, Clock, Star, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Starcam Mariage | Photobooth Glambot pour votre Mariage en Île-de-France',
  description: 'Location de robot Starcam pour votre mariage. Vidéos slow-motion glamour type Hollywood pour vos invités. Livraison instantanée + accès en ligne. Disponible Paris, Seine-et-Marne et toute l\'Île-de-France.',
  keywords: ['starcam mariage', 'glambot mariage', 'photobooth mariage luxe', 'vidéo slow motion mariage', 'animation mariage originale', 'mariage seine-et-marne', 'photobooth paris mariage'],
}

export default function MariagesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-6">
            <Heart size={16} className="fill-primary" />
            Spécial Mariages
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark leading-tight">
            La <span className="gradient-text">Starcam</span> pour votre mariage
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            Une animation glamour inoubliable
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
            Offrez à vos invités une expérience digne des plus grandes cérémonies avec des vidéos slow-motion spectaculaires
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="group px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
              Demander un devis gratuit
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#tarifs" className="px-8 py-4 text-dark font-medium hover:text-primary transition-colors">
              Voir nos formules mariage
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi la Starcam pour votre mariage */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Pourquoi choisir la Starcam pour votre mariage ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une animation qui marquera les esprits et créera des souvenirs inoubliables
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                <Star size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark text-center">Effet wow garanti</h3>
              <p className="text-gray-700 text-center">
                Vos invités se sentiront comme des stars avec des vidéos slow-motion dignes du tapis rouge des Oscars
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                <Camera size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark text-center">Souvenirs cinématographiques</h3>
              <p className="text-gray-700 text-center">
                Chaque invité repart avec ses vidéos immédiatement. Qualité Full HD pour un rendu professionnel
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark text-center">Animation pour tous</h3>
              <p className="text-gray-700 text-center">
                Petits et grands adorent ! Une activité conviviale qui crée de l'émulation et des moments de rire
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Déroulement */}
      <section className="py-8 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Comment ça se passe le jour J ?
            </h2>
            <p className="text-lg text-gray-600">
              Un service clé en main pour un mariage sans stress
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">1</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-dark">Installation discrète</h3>
                <p className="text-gray-700">
                  Notre équipe arrive 1h avant pour installer et tester le matériel. Tout est prêt pour le début de la réception
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">2</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-dark">Opérateur dédié</h3>
                <p className="text-gray-700">
                  Un professionnel reste sur place pour guider vos invités et garantir des vidéos parfaites
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">3</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-dark">Livraison instantanée</h3>
                <p className="text-gray-700">
                  Chaque invité reçoit sa vidéo immédiatement après le passage. Partage instantané sur les réseaux sociaux
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">4</div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-dark">Galerie en ligne</h3>
                <p className="text-gray-700">
                  Toutes les vidéos accessibles via un lien privé sous 48h. Conservez ces souvenirs à vie
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inclus dans nos formules mariage */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Inclus dans nos formules mariage
            </h2>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border-2 border-primary/20">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Installation et démontage du matériel',
                'Opérateur professionnel présent toute la soirée',
                'Vidéos slow-motion et accéléré en Full HD',
                'Livraison instantanée pour chaque invité',
                'Galerie en ligne privée sous 48h',
                'Durée illimitée de passage',
                'Personnalisation possible avec vos couleurs',
                'Aide à l\'animation et ambiance festive'
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

      {/* FAQ Mariage */}
      <section className="py-8 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Combien de temps dure la location ?</h3>
              <p className="text-gray-700">
                Nos formules mariage incluent la présence de la Starcam pendant toute votre réception (généralement 4-6h).
                Vos invités peuvent passer autant de fois qu'ils le souhaitent, sans limitation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Quel espace faut-il prévoir ?</h3>
              <p className="text-gray-700">
                Un espace d'environ 4m x 3m est idéal. Notre équipe s'adapte à la configuration de votre salle
                pour trouver le meilleur emplacement, en intérieur ou extérieur (sous chapiteau).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Les invités repartent-ils vraiment avec leurs vidéos ?</h3>
              <p className="text-gray-700">
                Oui ! Chaque participant reçoit sa vidéo immédiatement sur son téléphone. De plus, toutes les vidéos
                sont rassemblées dans une galerie en ligne privée accessible sous 48h.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Combien d'invités peuvent participer ?</h3>
              <p className="text-gray-700">
                Il n'y a pas de limite ! Que vous ayez 50 ou 200 invités, chacun pourra profiter de l'expérience.
                En moyenne, un passage dure 1-2 minutes, permettant à tout le monde de passer plusieurs fois dans la soirée.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Intervenez-vous partout en Île-de-France ?</h3>
              <p className="text-gray-700">
                Oui, nous nous déplaçons dans toute l'Île-de-France : Paris, Seine-et-Marne (77), Yvelines (78),
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
            Prêts à offrir un mariage inoubliable ?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Demandez votre devis gratuit et personnalisé en 2 minutes
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
