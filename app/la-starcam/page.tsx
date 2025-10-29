import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Camera, Zap, Video, Share2, Download, Star, CheckCircle, Play } from 'lucide-react'

export const metadata: Metadata = {
  title: 'La Starcam | Robot Photobooth Glambot - Vidéos Slow-Motion Professionnelles',
  description: 'Découvrez la Starcam, le robot glambot utilisé lors des plus grands événements. Vidéos slow-motion et accélérées Full HD pour immortaliser vos moments d\'exception.',
  keywords: ['starcam', 'glambot', 'robot photobooth', 'slow motion', 'vidéo slow-motion', 'photobooth professionnel', 'glambot france'],
}

export default function LaStarcamPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium text-primary mb-6">
            <Camera size={16} />
            Technologie Starcam
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark leading-tight">
            Qu'est-ce que <span className="gradient-text">la Starcam</span> ?
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            Le glambot des plus grands événements
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
            Un robot motorisé qui capture des vidéos slow-motion cinématographiques, utilisé lors des Oscars, du Met Gala et des défilés de mode
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#fonctionnement" className="group px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30">
              Découvrir le fonctionnement
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#evenements" className="px-8 py-4 text-dark font-medium hover:text-primary transition-colors">
              Voir les événements
            </Link>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que la Starcam */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-dark">
                La technologie des tapis rouges
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                La Starcam est un robot motorisé équipé d'une caméra haute définition qui se déplace sur un rail.
                En quelques secondes, elle capture des vidéos époustouflantes en slow-motion et en accéléré.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Cette technologie, développée pour les plus grands événements mondiaux (Oscars, Met Gala, Cannes),
                est désormais accessible pour vos événements privés et professionnels.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                  <Star size={16} className="inline mr-2" />
                  Utilisée aux Oscars
                </div>
                <div className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                  <Camera size={16} className="inline mr-2" />
                  Qualité Full HD
                </div>
                <div className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">
                  <Zap size={16} className="inline mr-2" />
                  Effet wow garanti
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-dark">Caractéristiques techniques</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-dark">Caméra professionnelle</div>
                    <div className="text-gray-600 text-sm">Full HD 1080p, 120 fps</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-dark">Rail motorisé 3 mètres</div>
                    <div className="text-gray-600 text-sm">Mouvement fluide et précis</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-dark">Double effet</div>
                    <div className="text-gray-600 text-sm">Slow-motion et accéléré</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-dark">Éclairage professionnel</div>
                    <div className="text-gray-600 text-sm">Studio mobile intégré</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-dark">Livraison instantanée</div>
                    <div className="text-gray-600 text-sm">Vidéo envoyée immédiatement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comment ça fonctionne */}
      <section id="fonctionnement" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Comment fonctionne la Starcam ?
            </h2>
            <p className="text-lg text-gray-600">
              Une expérience simple et rapide pour un résultat spectaculaire
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto">1</div>
              <h3 className="text-lg font-semibold mb-2 text-dark text-center">Positionnement</h3>
              <p className="text-gray-700 text-center text-sm">
                Vous vous placez devant la Starcam. Notre opérateur vous guide pour la meilleure position
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto">2</div>
              <h3 className="text-lg font-semibold mb-2 text-dark text-center">Action !</h3>
              <p className="text-gray-700 text-center text-sm">
                Le robot démarre et se déplace sur le rail en capturant votre mouvement en vidéo haute définition
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto">3</div>
              <h3 className="text-lg font-semibold mb-2 text-dark text-center">Traitement automatique</h3>
              <p className="text-gray-700 text-center text-sm">
                La vidéo est automatiquement traitée en slow-motion et accélérée avec votre branding personnalisé
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto">4</div>
              <h3 className="text-lg font-semibold mb-2 text-dark text-center">Réception immédiate</h3>
              <p className="text-gray-700 text-center text-sm">
                Vous recevez votre vidéo instantanément sur votre téléphone, prête à être partagée
              </p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-3xl border-2 border-primary/20 text-center">
            <Play size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3 text-dark">Durée totale : 1 à 2 minutes</h3>
            <p className="text-gray-700 max-w-2xl mx-auto">
              De votre passage devant la caméra à la réception de votre vidéo, tout le processus ne prend que quelques instants.
              Vous pouvez passer plusieurs fois pour réaliser différentes poses !
            </p>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Pourquoi choisir la Starcam ?
            </h2>
            <p className="text-lg text-gray-600">
              Les avantages d'une animation premium
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto">
                <Video size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">Qualité cinématographique</h3>
              <p className="text-gray-700">
                Des vidéos Full HD avec un rendu professionnel digne d'Hollywood. Éclairage studio intégré pour un résultat parfait
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">Effet wow instantané</h3>
              <p className="text-gray-700">
                Vos invités sont immédiatement impressionnés par le résultat. Une animation qui crée de l'émulation et des souvenirs mémorables
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto">
                <Share2 size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">Viralité garantie</h3>
              <p className="text-gray-700">
                Vos invités partagent leurs vidéos sur Instagram, TikTok, Facebook. Une visibilité organique pour votre événement
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto">
                <Download size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">Livraison immédiate</h3>
              <p className="text-gray-700">
                Plus besoin d'attendre des semaines. Chaque participant repart avec sa vidéo immédiatement après son passage
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">Personnalisation complète</h3>
              <p className="text-gray-700">
                Logo, couleurs, musique, backdrop. Tout peut être personnalisé pour refléter l'identité de votre événement
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark">Service clé en main</h3>
              <p className="text-gray-700">
                Installation, animation, démontage. Notre équipe professionnelle gère tout de A à Z pour que vous profitiez pleinement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pour quels événements */}
      <section id="evenements" className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Pour quels événements ?
            </h2>
            <p className="text-lg text-gray-600">
              La Starcam s'adapte à tous vos moments d'exception
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/mariages" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all group">
              <h3 className="text-xl font-semibold mb-2 text-dark group-hover:text-primary transition-colors">Mariages</h3>
              <p className="text-gray-700 text-sm mb-3">
                Une animation glamour qui rendra votre mariage inoubliable
              </p>
              <div className="text-primary text-sm font-medium flex items-center gap-1">
                En savoir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href="/evenements-corporate" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all group">
              <h3 className="text-xl font-semibold mb-2 text-dark group-hover:text-primary transition-colors">Événements Corporate</h3>
              <p className="text-gray-700 text-sm mb-3">
                Activez votre marque et engagez vos collaborateurs
              </p>
              <div className="text-primary text-sm font-medium flex items-center gap-1">
                En savoir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href="/anniversaires" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all group">
              <h3 className="text-xl font-semibold mb-2 text-dark group-hover:text-primary transition-colors">Anniversaires</h3>
              <p className="text-gray-700 text-sm mb-3">
                Transformez votre fête en un événement digne d'Hollywood
              </p>
              <div className="text-primary text-sm font-medium flex items-center gap-1">
                En savoir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href="/galas" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all group">
              <h3 className="text-xl font-semibold mb-2 text-dark group-hover:text-primary transition-colors">Soirées de Gala</h3>
              <p className="text-gray-700 text-sm mb-3">
                Une expérience VIP digne des plus grands tapis rouges
              </p>
              <div className="text-primary text-sm font-medium flex items-center gap-1">
                En savoir plus <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-dark">Lancements de produits</h3>
              <p className="text-gray-700 text-sm">
                Créez le buzz autour de votre nouveau produit
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-xl font-semibold mb-2 text-dark">Et bien plus...</h3>
              <p className="text-gray-700 text-sm">
                Festivals, salons, inaugurations, soirées privées
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-8 px-4 md:px-8 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Prêt à essayer la Starcam ?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Demandez votre devis gratuit et découvrez comment la Starcam peut transformer votre événement
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
