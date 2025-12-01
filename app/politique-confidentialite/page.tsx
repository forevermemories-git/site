import { Metadata } from 'next'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Forever Memories - Protection des Données',
  description: 'Notre politique de confidentialité et protection des données personnelles. RGPD, cookies, et utilisation de vos informations par Forever Memories.',
  keywords: ['politique confidentialité', 'rgpd starcam', 'protection données', 'vie privée'],
  alternates: {
    canonical: 'https://forevermemories.fr/politique-confidentialite',
  },
}

export default function PolitiqueConfidentialite() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs items={[{ name: 'Politique de Confidentialité', href: '/politique-confidentialite' }]} />
      <div className="pt-8 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-dark">
          Politique de confidentialité
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            La présente Politique de Confidentialité décrit comment Agence ÜMAIN (ci-après "nous", "notre" ou "Forever Memories")
            collecte, utilise, partage et protège les informations personnelles des utilisateurs du site web forevermemories.fr.
            Nous nous engageons à protéger votre vie privée conformément au Règlement Général sur la Protection des Données (RGPD)
            et à la loi Informatique et Libertés.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">1. Responsable du traitement</h2>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <p className="mb-2"><strong>Raison sociale :</strong> Agence ÜMAIN</p>
              <p className="mb-2"><strong>Siège social :</strong> 20 rue des Houis, 77580 Pierre-Levée, France</p>
              <p className="mb-2"><strong>RCS :</strong> 989 982 913 R.C.S. Meaux</p>
              <p className="mb-2"><strong>Email :</strong> <a href="mailto:hello@forevermemories.fr" className="text-primary hover:underline">hello@forevermemories.fr</a></p>
              <p className="mb-2"><strong>Téléphone :</strong> <a href="tel:+33676815953" className="text-primary hover:underline">06 76 81 59 53</a></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">2. Données collectées</h2>
            <p className="text-gray-700 mb-4">
              Dans le cadre de l'utilisation de nos services et de la navigation sur notre site, nous sommes susceptibles de
              collecter les catégories de données personnelles suivantes :
            </p>

            <div className="bg-primary/5 p-6 rounded-xl mb-4">
              <h3 className="text-xl font-semibold mb-3 text-dark">Données d'identification</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Adresse postale</li>
              </ul>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl mb-4">
              <h3 className="text-xl font-semibold mb-3 text-dark">Données de réservation et événement</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>Type d'événement</li>
                <li>Date et lieu de l'événement</li>
                <li>Nombre d'invités estimé</li>
                <li>Besoins spécifiques</li>
              </ul>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl mb-4">
              <h3 className="text-xl font-semibold mb-3 text-dark">Données de navigation</h3>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li>Adresse IP</li>
                <li>Type et version du navigateur</li>
                <li>Pages visitées</li>
                <li>Date et heure de connexion</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">3. Finalités du traitement</h2>
            <p className="text-gray-700 mb-4">
              Vos données personnelles sont collectées et traitées pour les finalités suivantes :
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">•</span>
                <div>
                  <strong className="text-dark">Gestion des demandes de devis et réservations</strong>
                  <p className="text-gray-700">Pour traiter vos demandes de réservation de la Starcam et vous fournir nos services.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">•</span>
                <div>
                  <strong className="text-dark">Communication</strong>
                  <p className="text-gray-700">Pour répondre à vos questions et vous informer sur nos services.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">•</span>
                <div>
                  <strong className="text-dark">Amélioration de nos services</strong>
                  <p className="text-gray-700">Pour analyser l'utilisation de notre site et améliorer l'expérience utilisateur.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold text-xl">•</span>
                <div>
                  <strong className="text-dark">Marketing (avec consentement)</strong>
                  <p className="text-gray-700">Pour vous envoyer des offres promotionnelles si vous avez accepté de les recevoir.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">4. Base légale du traitement</h2>
            <p className="text-gray-700 mb-4">
              Conformément au RGPD, les bases légales de nos traitements sont :
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li><strong>L'exécution du contrat :</strong> pour la gestion de votre réservation</li>
              <li><strong>Le consentement :</strong> pour l'envoi de communications marketing</li>
              <li><strong>L'intérêt légitime :</strong> pour l'amélioration de nos services et la sécurité du site</li>
              <li><strong>L'obligation légale :</strong> pour la conservation de données à des fins comptables et fiscales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">5. Durée de conservation</h2>
            <p className="text-gray-700 mb-4">
              Vos données personnelles sont conservées pendant les durées suivantes :
            </p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <ul className="space-y-2 text-gray-700">
                <li><strong>Données clients :</strong> 3 ans après la fin de la relation commerciale</li>
                <li><strong>Données de prospection :</strong> 3 ans à compter du dernier contact</li>
                <li><strong>Données comptables :</strong> 10 ans conformément aux obligations légales</li>
                <li><strong>Cookies et traceurs :</strong> 13 mois maximum</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">6. Destinataires des données</h2>
            <p className="text-gray-700 mb-4">
              Vos données personnelles sont destinées aux services internes d'Agence ÜMAIN. Elles peuvent également être
              transmises à nos sous-traitants et partenaires dans les cas suivants :
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
              <li>Prestataires d'hébergement web</li>
              <li>Services de paiement en ligne (si applicable)</li>
              <li>Outils d'analyse et de statistiques</li>
              <li>Services d'emailing (si vous avez consenti à recevoir nos communications)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Ces tiers sont contractuellement tenus de respecter la confidentialité et la sécurité de vos données.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">7. Vos droits</h2>
            <p className="text-gray-700 mb-4">
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits suivants :
            </p>
            <div className="space-y-4">
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-semibold text-dark mb-2">✓ Droit d'accès</h4>
                <p className="text-gray-700 text-sm">Vous pouvez accéder à vos données personnelles.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-semibold text-dark mb-2">✓ Droit de rectification</h4>
                <p className="text-gray-700 text-sm">Vous pouvez demander la correction de vos données inexactes.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-semibold text-dark mb-2">✓ Droit à l'effacement</h4>
                <p className="text-gray-700 text-sm">Vous pouvez demander la suppression de vos données.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-semibold text-dark mb-2">✓ Droit d'opposition</h4>
                <p className="text-gray-700 text-sm">Vous pouvez vous opposer au traitement de vos données.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-semibold text-dark mb-2">✓ Droit à la limitation du traitement</h4>
                <p className="text-gray-700 text-sm">Vous pouvez demander la limitation du traitement dans certains cas.</p>
              </div>
              <div className="bg-primary/5 p-4 rounded-lg">
                <h4 className="font-semibold text-dark mb-2">✓ Droit à la portabilité</h4>
                <p className="text-gray-700 text-sm">Vous pouvez recevoir vos données dans un format structuré.</p>
              </div>
            </div>
            <p className="text-gray-700 mt-6">
              Pour exercer ces droits, vous pouvez nous contacter :
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 mt-2">
              <li>Par email : <a href="mailto:hello@forevermemories.fr" className="text-primary hover:underline">hello@forevermemories.fr</a></li>
              <li>Par courrier : Agence ÜMAIN, 20 rue des Houis, 77580 Pierre-Levée</li>
              <li>Par téléphone : <a href="tel:+33676815953" className="text-primary hover:underline">06 76 81 59 53</a></li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">8. Sécurité des données</h2>
            <p className="text-gray-700 mb-4">
              Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées afin de garantir un niveau
              de sécurité adapté au risque, notamment :
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
              <li>Chiffrement des données sensibles (HTTPS)</li>
              <li>Contrôle d'accès strict aux données personnelles</li>
              <li>Sauvegardes régulières</li>
              <li>Mise à jour régulière des systèmes de sécurité</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">9. Cookies</h2>
            <p className="text-gray-700 mb-4">
              Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez à tout moment gérer
              vos préférences en matière de cookies via les paramètres de votre navigateur.
            </p>
            <p className="text-gray-700">
              Les cookies utilisés ont pour finalité : l'analyse d'audience, le bon fonctionnement du site, et la personnalisation
              de votre expérience (avec votre consentement).
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">10. Réclamation auprès de la CNIL</h2>
            <p className="text-gray-700">
              Si vous estimez que vos droits ne sont pas respectés, vous avez le droit d'introduire une réclamation auprès de
              la Commission Nationale de l'Informatique et des Libertés (CNIL) :
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <p className="text-gray-700">CNIL - 3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07</p>
              <p className="text-gray-700">Tél : 01 53 73 22 22</p>
              <p className="text-gray-700">Site web : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a></p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">11. Modifications</h2>
            <p className="text-gray-700">
              Nous nous réservons le droit de modifier la présente Politique de Confidentialité à tout moment. Toute modification
              sera publiée sur cette page avec une mise à jour de la date de "dernière mise à jour". Nous vous invitons à consulter
              régulièrement cette page.
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}
