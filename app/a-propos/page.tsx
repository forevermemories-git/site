import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Heart, Users, Award, Target, Sparkles, CheckCircle, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'À Propos | Forever Memories - Location Starcam en Île-de-France',
  description: 'Découvrez Forever Memories, votre spécialiste de la location de Starcam en Île-de-France. Une équipe passionnée au service de vos événements d\'exception.',
  keywords: ['forever memories', 'à propos starcam', 'agence umain', 'photobooth île-de-france', 'glambot paris', 'équipe starcam'],
}

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-2 md:pb-4 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark leading-tight">
            <span className="gradient-text">Forever Memories</span>
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            Des souvenirs qui durent toujours
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
            Nous mettons notre passion et notre expertise au service de vos événements d'exception
          </p>
        </div>
      </section>

      {/* Notre histoire */}
      <section className="pt-6 md:pt-8 pb-12 md:pb-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-dark">
              Notre histoire
            </h2>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Forever Memories est née d'une passion : celle de capturer et d'immortaliser les moments d'exception
              de la vie. Fascinés par la technologie Starcam utilisée lors des plus grandes cérémonies mondiales,
              nous avons décidé de la rendre accessible à tous les événements, des mariages intimistes aux galas
              les plus prestigieux.
            </p>

            <p className="text-lg text-gray-700 mb-6">
              Basés à Pierre-Levée en Seine-et-Marne, nous intervenons dans toute l'Île-de-France avec une mission claire :
              offrir à chaque client une expérience premium et des souvenirs cinématographiques inoubliables.
            </p>

            <p className="text-lg text-gray-700">
              Aujourd'hui, avec plus de 500 vidéos produites et des dizaines d'événements réussis, nous continuons
              d'innover et de perfectionner notre service pour rester le partenaire privilégié de vos moments d'exception.
            </p>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Nos valeurs
            </h2>
            <p className="text-lg text-gray-600">
              Les principes qui guident notre travail au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark text-center">Passion</h3>
              <p className="text-gray-700 text-center">
                Nous aimons ce que nous faisons et cela se ressent dans chaque prestation. Votre bonheur est notre récompense.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark text-center">Excellence</h3>
              <p className="text-gray-700 text-center">
                Équipement de dernière génération, opérateurs formés et service premium. Nous visons l'excellence à chaque instant.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-dark text-center">Proximité</h3>
              <p className="text-gray-700 text-center">
                Nous sommes à votre écoute du premier contact au jour J. Un accompagnement personnalisé et réactif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Notre engagement */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Notre engagement qualité
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-dark">Matériel de dernière génération</h3>
                  <p className="text-gray-700">
                    Nous investissons continuellement dans notre équipement pour vous garantir la meilleure qualité possible.
                    Notre Starcam est identique à celle utilisée aux Oscars et au Met Gala.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-dark">Opérateurs professionnels</h3>
                  <p className="text-gray-700">
                    Notre équipe est formée aux dernières techniques et reste en veille constante sur les tendances.
                    Expérience, professionnalisme et bonne humeur garantis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-dark">Service sur-mesure</h3>
                  <p className="text-gray-700">
                    Chaque événement est unique. Nous personnalisons notre prestation selon vos besoins, votre budget
                    et votre vision.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-dark">Réactivité et disponibilité</h3>
                  <p className="text-gray-700">
                    Nous répondons rapidement à vos demandes et restons disponibles avant, pendant et après votre événement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border-2 border-primary/20 flex flex-col justify-center">
              <div className="text-center mb-6">
                <Sparkles size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4 text-dark">Notre promesse</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Star size={20} className="text-primary flex-shrink-0 fill-primary" />
                  <span className="text-gray-700">Une expérience inoubliable pour vos invités</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star size={20} className="text-primary flex-shrink-0 fill-primary" />
                  <span className="text-gray-700">Des vidéos de qualité professionnelle</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star size={20} className="text-primary flex-shrink-0 fill-primary" />
                  <span className="text-gray-700">Un service clé en main sans stress</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star size={20} className="text-primary flex-shrink-0 fill-primary" />
                  <span className="text-gray-700">Des souvenirs à conserver toute une vie</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre zone d'intervention */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dark">
            Notre zone d'intervention
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Basés à Pierre-Levée en Seine-et-Marne, nous intervenons dans toute l'Île-de-France :
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Paris (75)</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Seine-et-Marne (77)</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Yvelines (78)</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Essonne (91)</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Hauts-de-Seine (92)</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Seine-Saint-Denis (93)</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Val-de-Marne (94)</span>
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium">Val-d'Oise (95)</span>
          </div>
          <p className="text-gray-600">
            Nous pouvons également intervenir en dehors de l'Île-de-France pour vos événements exceptionnels.
            N'hésitez pas à nous consulter.
          </p>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Forever Memories en chiffres
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-gray-700">Vidéos produites</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-700">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">8</div>
              <div className="text-gray-700">Départements couverts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24h</div>
              <div className="text-gray-700">Délai de réponse</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 md:py-16 px-4 md:px-8 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Envie de nous confier votre événement ?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Contactez-nous pour discuter de votre projet et obtenir un devis personnalisé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+33676815953" className="px-8 py-4 bg-white text-primary rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
              Appelez-nous : 06 76 81 59 53
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-all">
              Page contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
