import { Metadata } from 'next'
import { Eye, Pencil, Trash2, Ban, Lock, Download } from 'lucide-react'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Forever Memories - Protection des Données',
  description: 'Notre politique de confidentialité et protection des données personnelles. RGPD, cookies, et utilisation de vos informations par Forever Memories.',
  keywords: ['politique confidentialité', 'rgpd starcam', 'protection données', 'vie privée'],
  alternates: {
    canonical: 'https://forevermemories.fr/politique-confidentialite',
  },
}

function RightCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-dark-card/50 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-primary/20 transition-colors">
      <div className="flex items-center gap-3 mb-2">
        <div className="text-primary">{icon}</div>
        <h4 className="font-semibold text-cream">{title}</h4>
      </div>
      <p className="text-cream/60 text-sm">{description}</p>
    </div>
  )
}

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-dark">
      <Breadcrumbs items={[{ name: 'Politique de Confidentialité', href: '/politique-confidentialite' }]} />

      <div className="pt-28 md:pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-cream opacity-0 animate-fade-in">
            Politique de confidentialité
          </h1>

          <div className="prose prose-lg max-w-none opacity-0 animate-fade-in-delay">
            <p className="text-cream/60 mb-8">
              La présente Politique de Confidentialité décrit comment Agence ÜMAIN (ci-après "nous", "notre" ou "Forever Memories")
              collecte, utilise, partage et protège les informations personnelles des utilisateurs du site web forevermemories.fr.
              Nous nous engageons à protéger votre vie privée conformément au Règlement Général sur la Protection des Données (RGPD)
              et à la loi Informatique et Libertés.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cream">1. Responsable du traitement</h2>
              <div className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <p className="mb-2 text-cream/70"><strong className="text-cream">Raison sociale :</strong> Agence ÜMAIN</p>
                <p className="mb-2 text-cream/70"><strong className="text-cream">Siège social :</strong> 20 rue des Houis, 77580 Pierre-Levée, France</p>
                <p className="mb-2 text-cream/70"><strong className="text-cream">RCS :</strong> 989 982 913 R.C.S. Meaux</p>
                <p className="mb-2 text-cream/70"><strong className="text-cream">Email :</strong> <a href="mailto:hello@forevermemories.fr" className="text-primary hover:text-primary-light transition-colors">hello@forevermemories.fr</a></p>
                <p className="text-cream/70"><strong className="text-cream">Téléphone :</strong> <a href="tel:+33676815953" className="text-primary hover:text-primary-light transition-colors">06 76 81 59 53</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cream">2. Données collectées</h2>
              <p className="text-cream/70 mb-4">
                Dans le cadre de l'utilisation de nos services et de la navigation sur notre site, nous sommes susceptibles de
                collecter les catégories de données personnelles suivantes :
              </p>

              <div className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-4">
                <h3 className="text-xl font-semibold mb-3 text-cream">Données d'identification</h3>
                <ul className="list-disc list-inside text-cream/70 ml-4 space-y-1">
                  <li>Nom et prénom</li>
                  <li>Adresse email</li>
                  <li>Numéro de téléphone</li>
                  <li>Adresse postale</li>
                </ul>
              </div>

              <div className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-4">
                <h3 className="text-xl font-semibold mb-3 text-cream">Données de réservation et événement</h3>
                <ul className="list-disc list-inside text-cream/70 ml-4 space-y-1">
                  <li>Type d'événement</li>
                  <li>Date et lieu de l'événement</li>
                  <li>Nombre d'invités estimé</li>
                  <li>Besoins spécifiques</li>
                </ul>
              </div>

              <div className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 mb-4">
                <h3 className="text-xl font-semibold mb-3 text-cream">Données de navigation</h3>
                <ul className="list-disc list-inside text-cream/70 ml-4 space-y-1">
                  <li>Adresse IP</li>
                  <li>Type et version du navigateur</li>
                  <li>Pages visitées</li>
                  <li>Date et heure de connexion</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cream">3. Finalités du traitement</h2>
              <p className="text-cream/70 mb-4">
                Vos données personnelles sont collectées et traitées pour les finalités suivantes :
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <div>
                    <strong className="text-cream">Gestion des demandes de devis et réservations</strong>
                    <p className="text-cream/70">Pour traiter vos demandes de réservation de la Starcam et vous fournir nos services.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <div>
                    <strong className="text-cream">Communication</strong>
                    <p className="text-cream/70">Pour répondre à vos questions et vous informer sur nos services.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <div>
                    <strong className="text-cream">Amélioration de nos services</strong>
                    <p className="text-cream/70">Pour analyser l'utilisation de notre site et améliorer l'expérience utilisateur.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary font-bold text-xl">•</span>
                  <div>
                    <strong className="text-cream">Marketing (avec consentement)</strong>
                    <p className="text-cream/70">Pour vous envoyer des offres promotionnelles si vous avez accepté de les recevoir.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cream">4. Base légale du traitement</h2>
              <p className="text-cream/70 mb-4">
                Conformément au RGPD, les bases légales de nos traitements sont :
              </p>
              <ul className="list-disc list-inside text-cream/70 ml-4 space-y-2">
                <li><strong className="text-cream">L'exécution du contrat :</strong> pour la gestion de votre réservation</li>
                <li><strong className="text-cream">Le consentement :</strong> pour l'envoi de communications marketing</li>
                <li><strong className="text-cream">L'intérêt légitime :</strong> pour l'amélioration de nos services et la sécurité du site</li>
                <li><strong className="text-cream">L'obligation légale :</strong> pour la conservation de données à des fins comptables et fiscales</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cream">5. Durée de conservation</h2>
              <p className="text-cream/70 mb-4">
                Vos données personnelles sont conservées pendant les durées suivantes :
              </p>
              <div className="bg-dark-card/50 backdrop-blur-sm p-6 rounded-xl border border-white/10">
                <ul className="space-y-2 text-cream/70">
                  <li><strong className="text-cream">Données clients :</strong> 3 ans après la fin de la relation commerciale</li>
                  <li><strong className="text-cream">Données de prospection :</strong> 3 ans à compter du dernier contact</li>
                  <li><strong className="text-cream">Données comptables :</strong> 10 ans conformément aux obligations légales</li>
                  <li><strong className="text-cream">Cookies et traceurs :</strong> 13 mois maximum</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cream">6. Destinataires des données</h2>
              <p className="text-cream/70 mb-4">
                Vos données personnelles sont destinées aux services internes d'Agence ÜMAIN. Elles peuvent également être
                transmises à nos sous-traitants et partenaires dans les cas suivants :
              </p>
              <ul className="list-disc list-inside text-cream/70 ml-4 space-y-1">
                <li>Prestataires d'hébergement web</li>
                <li>Services de paiement en ligne (si applicable)</li>
                <li>Outils d'analyse et de statistiques</li>
                <li>Services d'emailing (si vous avez consenti à recevoir nos communications)</li>
              </ul>
              <p className="text-cream/70 mt-4">
                Ces tiers sont contractuellement tenus de respecter la confidentialité et la sécurité de vos données.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cream">7. Vos droits</h2>
              <p className="text-cream/70 mb-4">
                Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <RightCard
                  icon={<Eye size={20} />}
                  title="Droit d'accès"
                  description="Vous pouvez accéder à vos données personnelles."
                />
                <RightCard
                  icon={<Pencil size={20} />}
                  title="Droit de rectification"
                  description="Vous pouvez demander la correction de vos données inexactes."
                />
                <RightCard
                  icon={<Trash2 size={20} />}
                  title="Droit à l'effacement"
                  description="Vous pouvez demander la suppression de vos données."
                />
                <RightCard
                  icon={<Ban size={20} />}
                  title="Droit d'opposition"
                  description="Vous pouvez vous opposer au traitement de vos données."
                />
                <RightCard
                  icon={<Lock size={20} />}
                  title="Droit à la limitation"
                  description="Vous pouvez demander la limitation du traitement dans certains cas."
                />
                <RightCard
                  icon={<Download size={20} />}
                  title="Droit à la portabilité"
                  description="Vous pouvez recevoir vos données dans un format structuré."
                />
              </div>
              <p className="text-cream/70 mt-6">
                Pour exercer ces droits, vous pouvez nous contacter :
              </p>
              <ul className="list-disc list-inside text-cream/70 ml-4 mt-2">
                <li>Par email : <a href="mailto:hello@forevermemories.fr" className="text-primary hover:text-primary-light transition-colors">hello@forevermemories.fr</a></li>
                <li>Par courrier : Agence ÜMAIN, 20 rue des Houis, 77580 Pierre-Levée</li>
                <li>Par téléphone : <a href="tel:+33676815953" className="text-primary hover:text-primary-light transition-colors">06 76 81 59 53</a></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cream">8. Sécurité des données</h2>
              <p className="text-cream/70 mb-4">
                Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées afin de garantir un niveau
                de sécurité adapté au risque, notamment :
              </p>
              <ul className="list-disc list-inside text-cream/70 ml-4 space-y-1">
                <li>Chiffrement des données sensibles (HTTPS)</li>
                <li>Contrôle d'accès strict aux données personnelles</li>
                <li>Sauvegardes régulières</li>
                <li>Mise à jour régulière des systèmes de sécurité</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cream">9. Cookies</h2>
              <p className="text-cream/70 mb-4">
                Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez à tout moment gérer
                vos préférences en matière de cookies via les paramètres de votre navigateur.
              </p>
              <p className="text-cream/70">
                Les cookies utilisés ont pour finalité : l'analyse d'audience, le bon fonctionnement du site, et la personnalisation
                de votre expérience (avec votre consentement).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cream">10. Réclamation auprès de la CNIL</h2>
              <p className="text-cream/70">
                Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire une réclamation auprès de
                la Commission Nationale de l'Informatique et des Libertés (CNIL) :
              </p>
              <div className="bg-dark-card/50 backdrop-blur-sm p-4 rounded-xl border border-white/10 mt-4">
                <p className="text-cream/70">CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07</p>
                <p className="text-cream/70">Tél : 01 53 73 22 22</p>
                <p className="text-cream/70">Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-light transition-colors">www.cnil.fr</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-cream">11. Modifications</h2>
              <p className="text-cream/70">
                Nous nous réservons le droit de modifier la présente Politique de Confidentialité à tout moment. Toute modification
                sera publiée sur cette page avec une mise à jour de la date de "dernière mise à jour". Nous vous invitons à consulter
                régulièrement cette page.
              </p>
            </section>

            <p className="text-sm text-cream/40 mt-12 pt-8 border-t border-white/10">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
