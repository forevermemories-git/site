import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Building2, Camera, Users, TrendingUp, Star, CheckCircle, Sparkles, Share2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Starcam Événements Corporate | Animation Photobooth pour Entreprises en Île-de-France',
  description: 'Location de robot Starcam pour vos événements professionnels. Animation glambot pour lancements de produits, soirées d\'entreprise, team building. Paris et Île-de-France.',
  keywords: ['starcam corporate', 'photobooth entreprise', 'animation événement professionnel', 'glambot lancement produit', 'photobooth team building', 'animation soirée entreprise paris'],
}

export default function EvenementsCorporatePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-6">
            <Building2 size={16} />
            Événements Corporate
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark leading-tight">
            La <span className="gradient-text">Starcam</span> pour vos événements professionnels
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            Une animation qui marque les esprits
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
            Une prestation unique en France : valorisez votre marque, engagez vos collaborateurs et donnez un côté ultra-professionnel à vos événements avec notre technologie exclusive
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#contact" className="group px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
              Demander un devis entreprise
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#usages" className="px-8 py-4 text-dark font-medium hover:text-primary transition-colors">
              Voir les cas d'usage
            </Link>
          </div>
        </div>
      </section>

      {/* Pourquoi la Starcam pour votre entreprise */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Pourquoi intégrer la Starcam à vos événements corporate ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une technologie rare et exclusive pour marquer les esprits et différencier vos événements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                <Share2 size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark text-center">Prestation exclusive</h3>
              <p className="text-gray-700 text-center">
                Quasi aucun autre prestataire en France ne propose cette technologie. Démarquez-vous avec une animation que vos concurrents n'ont pas
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                <Sparkles size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark text-center">Branding puissant</h3>
              <p className="text-gray-700 text-center">
                Créez une association forte entre votre marque et l'innovation. Vos vidéos personnalisées deviennent un outil de branding mémorable
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark text-center">Impact professionnel</h3>
              <p className="text-gray-700 text-center">
                Donnez un côté ultra-professionnel et prestigieux à vos événements. Engagez vos collaborateurs avec une expérience qu'ils ne verront nulle part ailleurs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cas d'usage */}
      <section id="usages" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Cas d'usage corporate
            </h2>
            <p className="text-lg text-gray-600">
              Une solution adaptée à tous vos événements professionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Star size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-dark">Lancements de produits</h3>
                  <p className="text-gray-700">
                    Créez le buzz autour de votre nouveau produit. Vos invités deviennent des ambassadeurs en partageant leurs vidéos
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-dark">Team building & séminaires</h3>
                  <p className="text-gray-700">
                    Renforcez la cohésion d'équipe avec une activité ludique et fédératrice. Des souvenirs partagés qui durent
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-dark">Soirées d'entreprise</h3>
                  <p className="text-gray-700">
                    Anniversaires d'entreprise, vœux, cérémonies de récompenses. Une animation premium pour vos collaborateurs
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Camera size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-dark">Salons & conférences</h3>
                  <p className="text-gray-700">
                    Attirez les visiteurs sur votre stand et créez de l'engagement. Un contenu unique pour vos réseaux sociaux
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personnalisation */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Personnalisation à l'image de votre entreprise
            </h2>
            <p className="text-lg text-gray-600">
              Une expérience sur-mesure qui renforce votre identité de marque
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-dark">Branding vidéo</h3>
                  <p className="text-gray-700">
                    Intégrez votre logo, vos couleurs et votre baseline directement dans les vidéos
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-dark">Décor personnalisé</h3>
                  <p className="text-gray-700">
                    Backdrop aux couleurs de votre entreprise, signalétique sur-mesure
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-dark">Galerie privée brandée</h3>
                  <p className="text-gray-700">
                    Plateforme en ligne personnalisée pour accéder à toutes les vidéos de l'événement
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-dark">Statistiques détaillées</h3>
                  <p className="text-gray-700">
                    Rapport post-événement avec métriques d'engagement et de viralité
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-dark text-center">Inclus dans nos prestations corporate</h3>
              <div className="space-y-3">
                {[
                  'Installation et démontage complets',
                  'Opérateur professionnel dédié',
                  'Vidéos slow-motion et accéléré Full HD',
                  'Livraison instantanée pour chaque participant',
                  'Galerie en ligne privée sous 48h',
                  'Personnalisation logo et couleurs',
                  'Rapport de statistiques post-événement',
                  'Support technique sur site'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-8 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Notre process pour vos événements professionnels
            </h2>
            <p className="text-lg text-gray-600">
              Un accompagnement de bout en bout pour une prestation sans faille
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2 text-dark">Briefing détaillé</h3>
              <p className="text-gray-700 text-sm">
                Nous comprenons vos objectifs, votre audience et vos besoins en branding
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2 text-dark">Préparation personnalisée</h3>
              <p className="text-gray-700 text-sm">
                Création des éléments brandés, préparation technique et logistique
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2 text-dark">Prestation sur site</h3>
              <p className="text-gray-700 text-sm">
                Installation, animation et gestion complète par notre équipe professionnelle
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-4">4</div>
              <h3 className="text-lg font-semibold mb-2 text-dark">Suivi post-événement</h3>
              <p className="text-gray-700 text-sm">
                Livraison de la galerie et rapport de statistiques sous 48h
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Corporate */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Quel est le délai pour personnaliser les vidéos avec notre logo ?</h3>
              <p className="text-gray-700">
                Nous recommandons de nous transmettre vos éléments graphiques (logo, charte couleurs) au moins 7 jours avant l'événement.
                Cela nous permet de créer et valider avec vous le rendu des vidéos personnalisées.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Combien de personnes peuvent utiliser la Starcam lors d'un événement ?</h3>
              <p className="text-gray-700">
                Il n'y a pas de limite ! Que vous ayez 50 ou 500 participants, chacun peut profiter de l'expérience.
                En moyenne, nous réalisons 100 à 200 vidéos lors d'un événement de 4 heures.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Peut-on récupérer toutes les vidéos pour notre communication ?</h3>
              <p className="text-gray-700">
                Absolument ! Vous recevez un accès administrateur à la galerie en ligne vous permettant de télécharger
                toutes les vidéos. Vous pouvez ensuite les utiliser pour votre communication corporate (avec accord des participants).
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Quelles sont les contraintes techniques sur site ?</h3>
              <p className="text-gray-700">
                Nous avons besoin d'un espace d'environ 4m x 3m et d'une prise électrique standard. Notre équipe s'adapte
                à la configuration de votre lieu (intérieur, extérieur sous chapiteau, stand de salon, etc.).
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Proposez-vous des forfaits pour plusieurs événements ?</h3>
              <p className="text-gray-700">
                Oui ! Pour les entreprises organisant plusieurs événements dans l'année, nous proposons des formules
                avantageuses. Contactez-nous pour un devis personnalisé adapté à vos besoins.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Peut-on avoir une démo avant de réserver ?</h3>
              <p className="text-gray-700">
                Nous pouvons organiser une démo sur mesure dans vos locaux ou vous présenter des exemples concrets
                de nos réalisations corporate. N'hésitez pas à nous contacter pour planifier une rencontre.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-8 px-4 md:px-8 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Prêts à marquer votre prochain événement corporate ?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Discutons de votre projet et recevez un devis personnalisé sous 24h
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+33676815953" className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              Appelez-nous : 06 76 81 59 53
            </Link>
            <Link href="mailto:hello@forevermemories.fr" className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-all">
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
