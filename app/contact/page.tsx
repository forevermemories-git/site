import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from 'lucide-react'
import ContactForm from '../components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contact | Forever Memories - Location Starcam en Île-de-France',
  description: 'Contactez Forever Memories pour louer la Starcam pour votre événement. Devis gratuit sous 24h. Téléphone, email, formulaire de contact. Paris et Île-de-France.',
  keywords: ['contact starcam', 'devis glambot', 'réserver starcam', 'contact photobooth paris', 'location starcam île-de-france'],
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-8 px-4 md:px-8 bg-gradient-to-b from-primary/5 to-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-dark leading-tight">
            Contactez <span className="gradient-text">Forever Memories</span>
            <br className="hidden md:block" />
            <span className="md:hidden"> </span>
            Nous sommes à votre écoute
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto font-light">
            Une question ? Un projet ? Nous vous répondons sous 24h pour concrétiser votre événement d'exception
          </p>
        </div>
      </section>

      {/* Coordonnées principales */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <a href="tel:+33676815953" className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-3xl border-2 border-primary/20 hover:shadow-lg transition-all group text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Phone size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark">Téléphone</h3>
              <p className="text-2xl font-bold text-primary">06 76 81 59 53</p>
            </a>

            <a href="mailto:hello@forevermemories.fr" className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-3xl border-2 border-primary/20 hover:shadow-lg transition-all group text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark">Email</h3>
              <p className="text-lg font-bold text-primary mb-2">hello@forevermemories.fr</p>
              <p className="text-gray-600 text-sm">Réponse sous 24h</p>
            </a>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-3xl border-2 border-primary/20 text-center">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white mb-4 mx-auto">
                <MapPin size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-dark">Localisation</h3>
              <p className="text-lg font-bold text-primary mb-2">Île-de-France</p>
              <p className="text-gray-600 text-sm">Paris et région parisienne</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulaire de contact et infos */}
      <section className="py-8 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulaire */}
            <ContactForm />

            {/* Informations complémentaires */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-200">
                <h3 className="text-2xl font-bold mb-6 text-dark">Suivez-nous</h3>
                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/forevermemories.off/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary/10 transition-all group"
                  >
                    <Instagram size={32} className="text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-dark">Instagram</div>
                      <div className="text-gray-600 text-sm">@forevermemories.off</div>
                    </div>
                  </a>

                  <a
                    href="https://www.facebook.com/profile.php?id=61583156844468"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-primary/10 transition-all group"
                  >
                    <Facebook size={32} className="text-primary group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="font-semibold text-dark">Facebook</div>
                      <div className="text-gray-600 text-sm">Forever Memories</div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-3xl border-2 border-primary/20">
                <MessageCircle size={40} className="text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3 text-dark">Besoin d'une réponse rapide ?</h3>
                <p className="text-gray-700 mb-4">
                  Appelez-nous directement pour une réponse immédiate à vos questions.
                </p>
                <a
                  href="tel:+33676815953"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all"
                >
                  <Phone size={20} />
                  06 76 81 59 53
                </a>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-200">
                <h3 className="text-xl font-bold mb-4 text-dark">Zone d'intervention</h3>
                <p className="text-gray-700 mb-4">
                  Nous intervenons dans toute l'Île-de-France sans frais de déplacement supplémentaires :
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Paris 75</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Seine-et-Marne 77</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Yvelines 78</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Essonne 91</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Hauts-de-Seine 92</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Seine-Saint-Denis 93</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Val-de-Marne 94</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Val-d'Oise 95</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Contact */}
      <section className="py-8 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-dark">
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Sous quel délai puis-je obtenir un devis ?</h3>
              <p className="text-gray-700">
                Nous nous engageons à vous répondre sous 24h ouvrées avec une proposition personnalisée.
                Pour les demandes urgentes, n'hésitez pas à nous appeler directement.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Le devis est-il gratuit et sans engagement ?</h3>
              <p className="text-gray-700">
                Oui, absolument ! Tous nos devis sont gratuits et sans aucun engagement. Vous êtes libre de comparer
                et de choisir la prestation qui vous convient le mieux.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Puis-je réserver une démo avant mon événement ?</h3>
              <p className="text-gray-700">
                Oui, nous pouvons organiser une démonstration dans nos locaux ou lors d'un rendez-vous.
                Contactez-nous pour planifier une session découverte de la Starcam.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold mb-3 text-dark">Combien de temps à l'avance dois-je réserver ?</h3>
              <p className="text-gray-700">
                Nous recommandons de réserver au moins 1 à 2 mois à l'avance, surtout pour les week-ends et la haute saison
                (mai à septembre). Cependant, contactez-nous même pour une date proche, nous ferons notre maximum pour vous satisfaire.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
