import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Sparkles, Share2, Users, Gift, Camera, CheckCircle, Phone, Instagram, Zap, Music, Star } from 'lucide-react'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Animation Anniversaire Originale | Starcam Photobooth Slow-Motion Paris & Île-de-France',
  description: 'Vous cherchez une animation anniversaire originale qui sort de l\'ordinaire ? La Starcam crée des vidéos slow-motion virales que vos invités partageront sur Instagram et TikTok. 18 ans, 30 ans, 40 ans, 50 ans... Une fête mémorable garantie.',
  keywords: ['animation anniversaire originale', 'idée anniversaire 30 ans', 'animation fête 40 ans', 'anniversaire 50 ans original', 'photobooth anniversaire paris', 'animation anniversaire adulte', 'idée animation soirée privée'],
  alternates: {
    canonical: 'https://forevermemories.fr/anniversaires',
  },
  openGraph: {
    title: 'Animation Anniversaire Originale | Vidéos Virales Slow-Motion',
    description: 'L\'animation qui fait le buzz ! Vidéos slow-motion Instagram-ready pour un anniversaire inoubliable.',
    type: 'website',
  }
}

const anniversairesFAQs = [
  {
    question: 'Est-ce adapté pour un anniversaire surprise ?',
    answer: 'C\'est PARFAIT pour un anniversaire surprise ! On installe discrètement pendant que les invités arrivent. L\'effet de surprise quand la personne fêtée découvre le robot est incroyable. On peut même filmer sa réaction en slow-motion !'
  },
  {
    question: 'Mes invités vont-ils vraiment utiliser la Starcam ?',
    answer: 'À 100% ! C\'est addictif. Les invités font la queue pour repasser. En moyenne, chaque personne fait 3-4 passages dans la soirée. L\'aspect "défi entre amis" crée une vraie émulation.'
  },
  {
    question: 'Les vidéos sont-elles vraiment partageables sur Instagram/TikTok ?',
    answer: 'Oui ! Les vidéos sont au format vertical 9:16, optimisées pour les Stories et Reels. Chaque invité reçoit sa vidéo instantanément par SMS et peut la poster en 2 clics.'
  },
  {
    question: 'Peut-on personnaliser avec le thème de la fête ?',
    answer: 'Absolument ! On adapte les couleurs, on peut ajouter un message personnalisé ("Joyeux 30 ans Marie !"), et même intégrer le thème de votre soirée (années 80, disco, tropical...).'
  },
  {
    question: 'C\'est adapté pour quel nombre d\'invités ?',
    answer: 'De 20 à 150 invités, la Starcam s\'adapte. Pour les petits groupes, on propose des formules ajustées. Pour les grandes fêtes, on peut ajouter un second opérateur pour zéro temps d\'attente.'
  }
]

export default function AnniversairesPage() {
  return (
    <>
      <FAQStructuredData faqs={anniversairesFAQs} />

      <div className="min-h-screen bg-white">
        <Breadcrumbs items={[{ name: 'Anniversaires', href: '/anniversaires' }]} />

        {/* Hero Section - Angle FUN et VIRAL */}
        <section className="relative pt-8 pb-12 px-4 md:px-8 bg-gradient-to-b from-orange-50 to-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-sm font-medium text-orange-600 mb-6">
              <Sparkles size={16} />
              L'animation qui fait le buzz
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark leading-tight">
              Un anniversaire dont on parlera
              <br className="hidden md:block" />
              <span className="gradient-text">encore dans 10 ans</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl mx-auto font-light">
              Fini les animations ringardes. La Starcam crée des vidéos slow-motion que vos invités vont s'arracher pour les poster sur Insta.
            </p>

            {/* Social proof rapide */}
            <div className="flex flex-wrap justify-center gap-4 mb-10 text-sm text-gray-600">
              <span className="flex items-center gap-1"><Star size={16} className="text-yellow-500 fill-yellow-500" /> 4.9/5 sur Google</span>
              <span className="flex items-center gap-1"><Users size={16} className="text-primary" /> +200 fêtes animées</span>
              <span className="flex items-center gap-1"><Instagram size={16} className="text-pink-500" /> +5000 vidéos partagées</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="group px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                Réserver ma date
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/tarifs" className="px-8 py-4 border-2 border-gray-200 text-dark font-medium hover:border-primary hover:text-primary rounded-full transition-colors">
                Voir les tarifs
              </Link>
            </div>
          </div>
        </section>

        {/* Section : Pourquoi c'est différent d'un photobooth classique */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
                Pourquoi vos invités vont adorer
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                (et pourquoi c'est 100x mieux qu'un photobooth classique)
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Comparaison visuelle */}
              <div className="bg-gray-100 p-8 rounded-2xl">
                <div className="text-red-500 font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">😴</span> Photobooth classique
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Photos statiques qu'on ne regarde plus jamais
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Props ringards (moustaches, lunettes...)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Format carré pas adapté aux réseaux
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400">✗</span>
                    Vu et revu à chaque soirée
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-orange-50 p-8 rounded-2xl border-2 border-primary/20">
                <div className="text-primary font-semibold mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔥</span> La Starcam
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Vidéos slow-motion spectaculaires qu'on re-regarde 100 fois
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Mouvements de caméra robotisés effet Hollywood
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Format 9:16 parfait pour Stories et TikTok
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">✓</span>
                    Technologie exclusive quasi-introuvable en France
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section : Par tranche d'âge - CONTENU UNIQUE */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
                Adapté à chaque âge, chaque ambiance
              </h2>
              <p className="text-lg text-gray-600">
                De 18 à 80 ans, on a l'expérience pour créer la bonne vibe
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-2 text-dark">18-25 ans</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Majorité, fin d'études, entrée dans la vie active... L'âge où on veut du contenu viral pour les réseaux.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">TikTok ready</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Squad goals</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold mb-2 text-dark">30-40 ans</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Les caps symboliques ! On veut marquer le coup avec les amis de longue date. Ambiance festive et décomplexée.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Entre amis</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Nostalgie fun</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold mb-2 text-dark">50-60 ans</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Les anniversaires qu'on célèbre en grand. Souvent intergénérationnel : les ados adorent autant que les parents.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Famille</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Élégant</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">👑</div>
                <h3 className="text-xl font-bold mb-2 text-dark">70 ans et +</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Les grandes célébrations familiales. Les petits-enfants initient les grands-parents... moments magiques garantis !
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Multigénérationnel</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">Souvenirs</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section : Le côté viral / réseaux sociaux - UNIQUE */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
                  <Instagram size={16} />
                  Conçu pour les réseaux
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
                  Des vidéos que vos invités vont vraiment partager
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Soyons honnêtes : les photos de photobooth finissent dans un tiroir. Nos vidéos slow-motion, elles, sont postées dans les 5 minutes sur Instagram, TikTok, WhatsApp...
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Share2 size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">Partage en 2 clics</h4>
                      <p className="text-gray-600 text-sm">Vidéo reçue par SMS → ouvrir → partager. Pas d'app à télécharger.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Zap size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">Format vertical natif</h4>
                      <p className="text-gray-600 text-sm">9:16, le format parfait pour Stories, Reels et TikTok. Pas de recadrage.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Music size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-dark">Musique intégrée</h4>
                      <p className="text-gray-600 text-sm">Chaque vidéo a déjà une bande son. Prête à être postée telle quelle.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-100 via-purple-50 to-orange-50 p-8 rounded-3xl">
                <div className="text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <div className="text-4xl font-bold text-dark mb-2">87%</div>
                  <p className="text-gray-600 mb-6">de nos vidéos sont partagées sur les réseaux dans l'heure</p>

                  <div className="flex justify-center gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-500">Instagram</div>
                      <div className="text-sm text-gray-500">Stories & Reels</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800">TikTok</div>
                      <div className="text-sm text-gray-500">Format natif</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-500">WhatsApp</div>
                      <div className="text-sm text-gray-500">Partage direct</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section : Idées de poses et défis - CONTENU UNIQUE */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-orange-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
                Des idées pour animer la soirée
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Notre opérateur propose des défis et des poses pour créer une vraie émulation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="text-3xl mb-3">🏆</div>
                <h3 className="font-bold text-lg mb-2 text-dark">Le défi du meilleur ralenti</h3>
                <p className="text-gray-600 text-sm">
                  Qui fera la vidéo la plus stylée ? Les invités se challengent et votent pour leur préférée. Ambiance garantie !
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="text-3xl mb-3">👯</div>
                <h3 className="font-bold text-lg mb-2 text-dark">Le passage en groupe</h3>
                <p className="text-gray-600 text-sm">
                  Jusqu'à 4 personnes en même temps. Les vidéos de groupe (famille, squad, collègues) sont souvent les plus drôles.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm">
                <div className="text-3xl mb-3">🎭</div>
                <h3 className="font-bold text-lg mb-2 text-dark">Les poses signature</h3>
                <p className="text-gray-600 text-sm">
                  Confettis, champagne, cheveux au vent... Notre opérateur guide les invités pour des résultats dignes d'un clip.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ce qui est inclus - Version simplifiée */}
        <section className="py-16 px-4 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
                Tout est inclus, zéro surprise
              </h2>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-primary/5 rounded-3xl p-8 md:p-10 border-2 border-primary/20">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Installation et démontage (on gère tout)',
                  'Opérateur pro qui anime la soirée',
                  'Vidéos slow-motion Full HD',
                  'Livraison instantanée par SMS',
                  'Galerie en ligne sous 48h',
                  'Passages illimités pour tous',
                  'Personnalisation couleurs & message',
                  'Musique et ambiance festive'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-primary flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-primary/20 text-center">
                <Link href="/tarifs" className="text-primary font-semibold hover:underline">
                  Voir nos formules et tarifs →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-dark">
                Vos questions
              </h2>
            </div>

            <div className="space-y-4">
              {anniversairesFAQs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold mb-3 text-dark">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-orange-500 to-primary">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-5xl mb-6">🎂</div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Prêt à organiser un anniversaire légendaire ?
            </h2>
            <p className="text-xl text-white/90 mb-10">
              Les meilleures dates partent vite. Réservez maintenant !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+33676815953" className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                <Phone size={20} />
                06 76 81 59 53
              </Link>
              <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-all">
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
