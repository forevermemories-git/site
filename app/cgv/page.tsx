import { Metadata } from 'next'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | Forever Memories - Location Starcam',
  description: 'Consultez nos conditions générales de vente pour la location de Starcam. Modalités de réservation, annulation, et conditions contractuelles.',
  keywords: ['cgv starcam', 'conditions vente glambot', 'contrat location starcam'],
}

export default function CGV() {
  return (
    <div className="min-h-screen bg-white">
      <Breadcrumbs items={[{ name: 'CGV', href: '/cgv' }]} />
      <div className="pt-8 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-dark">
          Conditions générales de vente
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre Agence ÜMAIN,
            société par actions simplifiée au capital de 500€, immatriculée au RCS de Meaux sous le numéro 989 982 913,
            dont le siège social est situé au 20 rue des Houis, 77580 Pierre-Levée (ci-après "Forever Memories" ou "le Prestataire")
            et toute personne physique ou morale souhaitant bénéficier des services proposés (ci-après "le Client").
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Article 1 - Objet</h2>
            <p className="text-gray-700">
              Les présentes CGV ont pour objet de définir les conditions dans lesquelles Forever Memories fournit ses
              services de location de robot vidéo Starcam (Glambot) pour événements, incluant la captation de vidéos
              slow-motion et accélérées en haute définition.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Article 2 - Services proposés</h2>
            <p className="text-gray-700 mb-4">
              Forever Memories propose les prestations suivantes :
            </p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <ul className="space-y-2 text-gray-700">
                <li><strong>• Location de la Starcam :</strong> Robot vidéo professionnel pour captation slow-motion et accélérée</li>
                <li><strong>• Installation et configuration :</strong> Mise en place du matériel sur le lieu de l'événement</li>
                <li><strong>• Accompagnement technique :</strong> Présence d'un opérateur pendant la durée de la prestation</li>
                <li><strong>• Livraison instantanée :</strong> Les invités repartent immédiatement avec leurs vidéos</li>
                <li><strong>• Accès en ligne :</strong> Mise à disposition d'un lien pour télécharger toutes les vidéos sous 48h</li>
                <li><strong>• Qualité Full HD :</strong> Vidéos en haute définition avec rendu cinématographique</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Article 3 - Réservation</h2>
            <p className="text-gray-700 mb-4">
              La réservation peut s'effectuer :
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1 mb-4">
              <li>Par téléphone au <a href="tel:+33676815953" className="text-primary hover:underline">06 76 81 59 53</a></li>
              <li>Par email à <a href="mailto:hello@forevermemories.fr" className="text-primary hover:underline">hello@forevermemories.fr</a></li>
              <li>Via le formulaire de contact du site web</li>
            </ul>
            <p className="text-gray-700">
              Toute réservation doit être confirmée par écrit (email ou contrat signé) et est considérée comme définitive
              après versement de l'acompte prévu à l'article 5.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Article 4 - Tarifs</h2>
            <p className="text-gray-700 mb-4">
              Les tarifs de nos prestations sont indiqués en euros, toutes taxes comprises (TTC). Ils incluent :
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1 mb-4">
              <li>La location du matériel pour la durée convenue</li>
              <li>L'installation et le démontage</li>
              <li>La présence d'un opérateur qualifié</li>
              <li>La livraison instantanée des vidéos aux participants</li>
              <li>L'accès en ligne aux vidéos sous 48h</li>
            </ul>
            <p className="text-gray-700 mb-4">
              <strong>Frais supplémentaires :</strong> Des frais de déplacement peuvent s'appliquer en fonction de la distance
              et seront communiqués lors du devis.
            </p>
            <p className="text-gray-700">
              Les tarifs sont susceptibles de variation en fonction de la durée de la prestation, du type d'événement et des
              options choisies. Un devis personnalisé sera établi pour chaque demande.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Article 5 - Modalités de paiement</h2>
            <p className="text-gray-700 mb-4">
              Le règlement s'effectue selon les modalités suivantes :
            </p>
            <div className="bg-primary/5 p-6 rounded-xl">
              <ul className="space-y-3 text-gray-700">
                <li><strong>Acompte :</strong> 30% du montant total TTC à la réservation (non remboursable en cas d'annulation par le Client)</li>
                <li><strong>Solde :</strong> 70% du montant total TTC à régler au plus tard le jour de la prestation, avant le début de l'événement</li>
              </ul>
            </div>
            <p className="text-gray-700 mt-4">
              Moyens de paiement acceptés : virement bancaire, chèque, espèces (dans la limite légale), carte bancaire.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Article 6 - Annulation et modification</h2>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-3 text-dark">6.1 - Annulation par le Client</h3>
              <p className="text-gray-700 mb-3">En cas d'annulation par le Client :</p>
              <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
                <li><strong>Plus de 30 jours avant :</strong> Remboursement de 70% de l'acompte</li>
                <li><strong>Entre 30 et 15 jours avant :</strong> Remboursement de 50% de l'acompte</li>
                <li><strong>Moins de 15 jours avant :</strong> Aucun remboursement</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-3 text-dark">6.2 - Report de date</h3>
              <p className="text-gray-700">
                Un report de date est possible une seule fois, sous réserve de disponibilité et moyennant des frais
                administratifs de 10% du montant total si la demande est faite moins de 30 jours avant l'événement.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-dark">6.3 - Annulation par le Prestataire</h3>
              <p className="text-gray-700">
                En cas de force majeure ou d'impossibilité d'exécution du service pour des raisons indépendantes de sa
                volonté, Forever Memories se réserve le droit d'annuler la prestation. Dans ce cas, le Client sera
                intégralement remboursé des sommes versées.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Article 7 - Obligations du Client</h2>
            <p className="text-gray-700 mb-4">
              Le Client s'engage à :
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Fournir des informations exactes et complètes lors de la réservation</li>
              <li>Garantir l'accès au lieu de l'événement et la disponibilité d'un espace suffisant pour l'installation</li>
              <li>Assurer la présence d'une alimentation électrique conforme (220V)</li>
              <li>Informer ses invités de la présence du dispositif de captation vidéo</li>
              <li>Veiller au bon déroulement des prises de vue et au respect du matériel</li>
              <li>Effectuer le paiement selon les modalités prévues</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Article 8 - Obligations du Prestataire</h2>
            <p className="text-gray-700 mb-4">
              Forever Memories s'engage à :
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-2">
              <li>Fournir un matériel en parfait état de fonctionnement</li>
              <li>Assurer la présence d'un opérateur qualifié pendant toute la durée de la prestation</li>
              <li>Installer et configurer le matériel avant le début de l'événement</li>
              <li>Garantir la livraison instantanée des vidéos aux participants</li>
              <li>Mettre à disposition un lien de téléchargement de toutes les vidéos sous 48h</li>
              <li>Respecter la confidentialité des données personnelles conformément au RGPD</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Article 9 - Propriété intellectuelle et droit à l'image</h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-3 text-dark">9.1 - Propriété des vidéos</h3>
              <p className="text-gray-700">
                Le Client acquiert la pleine propriété des vidéos réalisées lors de son événement. Il peut les utiliser
                librement à des fins personnelles et les partager avec ses invités.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-dark">9.2 - Utilisation promotionnelle</h3>
              <p className="text-gray-700">
                Sauf opposition expresse du Client, Forever Memories se réserve le droit d'utiliser certaines vidéos
                (en garantissant l'anonymat des personnes) à des fins promotionnelles sur son site web et ses réseaux sociaux.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Article 10 - Responsabilité et assurance</h2>
            <p className="text-gray-700 mb-4">
              Forever Memories est assuré en responsabilité civile professionnelle pour ses activités.
            </p>
            <p className="text-gray-700 mb-4">
              La responsabilité de Forever Memories ne pourra être engagée que pour des fautes directement imputables
              à son personnel ou à un défaut de son matériel. Elle ne saurait être tenue responsable :
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
              <li>Des dommages résultant d'une mauvaise utilisation du matériel par le Client ou ses invités</li>
              <li>Des conditions météorologiques défavorables en cas d'événement en extérieur</li>
              <li>D'une coupure d'électricité ou d'un défaut de connexion internet hors de son contrôle</li>
              <li>Du comportement des participants</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Article 11 - Protection des données personnelles</h2>
            <p className="text-gray-700">
              Les données personnelles collectées dans le cadre de la réservation et de la prestation sont traitées
              conformément à notre <a href="/politique-confidentialite" className="text-primary hover:underline font-medium">Politique de Confidentialité</a>.
              Le Client dispose d'un droit d'accès, de rectification et de suppression de ses données en contactant
              <a href="mailto:hello@forevermemories.fr" className="text-primary hover:underline"> hello@forevermemories.fr</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Article 12 - Droit de rétractation</h2>
            <p className="text-gray-700">
              Conformément à l'article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé
              pour les prestations de services pleinement exécutées avant la fin du délai de rétractation et dont l'exécution
              a commencé avec l'accord préalable exprès du consommateur. Le Client reconnaît que la prestation commence dès
              la réservation de la date et renonce expressément à son droit de rétractation.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Article 13 - Réclamations</h2>
            <p className="text-gray-700 mb-4">
              En cas de réclamation, le Client doit contacter Forever Memories :
            </p>
            <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
              <li>Par email : <a href="mailto:hello@forevermemories.fr" className="text-primary hover:underline">hello@forevermemories.fr</a></li>
              <li>Par téléphone : <a href="tel:+33676815953" className="text-primary hover:underline">06 76 81 59 53</a></li>
              <li>Par courrier : Agence ÜMAIN, 20 rue des Houis, 77580 Pierre-Levée</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Forever Memories s'engage à répondre dans les meilleurs délais.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Article 14 - Médiation</h2>
            <p className="text-gray-700 mb-4">
              Conformément à l'article L.612-1 du Code de la consommation, le Client a le droit de recourir gratuitement
              à un médiateur de la consommation en vue de la résolution amiable d'un litige l'opposant à Forever Memories.
            </p>
            <p className="text-gray-700">
              À cet effet, le Client peut saisir le médiateur compétent dont les coordonnées seront communiquées sur demande.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Article 15 - Droit applicable et juridiction</h2>
            <p className="text-gray-700">
              Les présentes CGV sont soumises au droit français. En cas de litige et à défaut d'accord amiable, le litige
              sera porté devant les tribunaux compétents de Meaux.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-dark">Article 16 - Acceptation des CGV</h2>
            <p className="text-gray-700">
              La réservation de nos services implique l'adhésion entière et sans réserve du Client aux présentes Conditions
              Générales de Vente. Le Client reconnaît avoir pris connaissance des présentes CGV et les accepter sans réserve.
            </p>
          </section>

          <div className="bg-primary/10 p-6 rounded-xl border-2 border-primary/20 mt-12">
            <h3 className="text-xl font-semibold mb-3 text-dark">Contact</h3>
            <p className="text-gray-700 mb-2"><strong>Agence ÜMAIN - Forever Memories</strong></p>
            <p className="text-gray-700 mb-2">20 rue des Houis, 77580 Pierre-Levée</p>
            <p className="text-gray-700 mb-2">Téléphone : <a href="tel:+33676815953" className="text-primary hover:underline">06 76 81 59 53</a></p>
            <p className="text-gray-700">Email : <a href="mailto:hello@forevermemories.fr" className="text-primary hover:underline">hello@forevermemories.fr</a></p>
          </div>

          <p className="text-sm text-gray-500 mt-12 pt-8 border-t border-gray-200">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}
