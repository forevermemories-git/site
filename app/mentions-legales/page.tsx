import { Metadata } from 'next'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Mentions Légales | Forever Memories - Location Starcam en Île-de-France',
  description: 'Mentions légales de Forever Memories. Informations sur l\'éditeur, l\'hébergement et les conditions d\'utilisation du site forevermemories.fr.',
  keywords: ['mentions légales', 'informations légales starcam', 'éditeur site'],
  alternates: {
    canonical: 'https://www.forevermemories.fr/mentions-legales',
  },
}

export default function MentionsLegales() {
  return (
    <div className="fm-home overflow-hidden min-h-screen">
      <Breadcrumbs items={[{ name: 'Mentions Légales', href: '/mentions-legales' }]} />

      <div className="pt-28 md:pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#2A2230] opacity-0 animate-fade-in">
            Mentions légales
          </h1>

          <div className="prose prose-lg max-w-none opacity-0 animate-fade-in-delay">
            <p className="text-[#6C6172] mb-8">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l'économie numérique,
              il est précisé aux utilisateurs du site Forever Memories l'identité des différents intervenants dans le cadre de
              sa réalisation et de son suivi.
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#2A2230]">Éditeur du site</h2>
              <div className="bg-white p-6 rounded-xl border border-[rgba(42,34,48,0.08)]">
                <p className="mb-2 text-[#473F50]"><strong className="text-[#2A2230]">Raison sociale :</strong> Agence ÜMAIN</p>
                <p className="mb-2 text-[#473F50]"><strong className="text-[#2A2230]">Forme juridique :</strong> Société par actions simplifiée (Société à associé unique)</p>
                <p className="mb-2 text-[#473F50]"><strong className="text-[#2A2230]">Capital social :</strong> 500,00 €</p>
                <p className="mb-2 text-[#473F50]"><strong className="text-[#2A2230]">Siège social :</strong> 20 rue des Houis, 77580 Pierre-Levée, France</p>
                <p className="mb-2 text-[#473F50]"><strong className="text-[#2A2230]">RCS :</strong> 989 982 913 R.C.S. Meaux</p>
                <p className="mb-2 text-[#473F50]"><strong className="text-[#2A2230]">Date d'immatriculation :</strong> 04/08/2025</p>
                <p className="mb-2 text-[#473F50]"><strong className="text-[#2A2230]">Téléphone :</strong> <a href="tel:+33676815953" className="!text-[#8E3F84] underline decoration-[#B65EAB]/40 underline-offset-2 hover:decoration-[#B65EAB] transition-colors">06 76 81 59 53</a></p>
                <p className="mb-2 text-[#473F50]"><strong className="text-[#2A2230]">Email :</strong> <a href="mailto:hello@forevermemories.fr" className="!text-[#8E3F84] underline decoration-[#B65EAB]/40 underline-offset-2 hover:decoration-[#B65EAB] transition-colors">hello@forevermemories.fr</a></p>
                <p className="text-[#473F50]"><strong className="text-[#2A2230]">Directeur de la publication :</strong> Agence ÜMAIN</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#2A2230]">Hébergeur du site</h2>
              <div className="bg-white p-6 rounded-xl border border-[rgba(42,34,48,0.08)]">
                <p className="mb-2 text-[#473F50]"><strong className="text-[#2A2230]">Hébergeur :</strong> Vercel Inc.</p>
                <p className="mb-2 text-[#473F50]"><strong className="text-[#2A2230]">Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</p>
                <p className="text-[#473F50]"><strong className="text-[#2A2230]">Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="!text-[#8E3F84] underline decoration-[#B65EAB]/40 underline-offset-2 hover:decoration-[#B65EAB] transition-colors">vercel.com</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#2A2230]">Propriété intellectuelle</h2>
              <p className="text-[#473F50] mb-4">
                L'ensemble du contenu du présent site (textes, images, vidéos, logos, etc.) est la propriété exclusive de
                Agence ÜMAIN ou de ses partenaires. Toute reproduction, distribution, modification, adaptation, retransmission
                ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord exprès par
                écrit de Agence ÜMAIN.
              </p>
              <p className="text-[#473F50]">
                La marque "Forever Memories" ainsi que les logos figurant sur le site sont des marques déposées. Toute reproduction
                totale ou partielle de ces marques ou logos, effectuée à partir des éléments du site sans l'autorisation expresse
                de Agence ÜMAIN est prohibée.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#2A2230]">Protection des données personnelles</h2>
              <p className="text-[#473F50] mb-4">
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés du
                6 janvier 1978 modifiée, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux
                données personnelles vous concernant.
              </p>
              <p className="text-[#473F50] mb-4">
                Pour exercer ces droits, vous pouvez nous contacter :
              </p>
              <ul className="list-disc list-inside text-[#473F50] ml-4 space-y-1">
                <li>Par email : <a href="mailto:hello@forevermemories.fr" className="!text-[#8E3F84] underline decoration-[#B65EAB]/40 underline-offset-2 hover:decoration-[#B65EAB] transition-colors">hello@forevermemories.fr</a></li>
                <li>Par courrier : Agence ÜMAIN, 20 rue des Houis, 77580 Pierre-Levée</li>
                <li>Par téléphone : <a href="tel:+33676815953" className="!text-[#8E3F84] underline decoration-[#B65EAB]/40 underline-offset-2 hover:decoration-[#B65EAB] transition-colors">06 76 81 59 53</a></li>
              </ul>
              <p className="text-[#473F50] mt-4">
                Pour plus d'informations sur la protection de vos données, consultez notre{' '}
                <a href="/politique-confidentialite" className="!text-[#8E3F84] underline decoration-[#B65EAB]/40 underline-offset-2 hover:decoration-[#B65EAB] transition-colors font-medium">Politique de Confidentialité</a>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#2A2230]">Cookies</h2>
              <p className="text-[#473F50]">
                Le site peut être amené à vous demander l'acceptation des cookies pour des besoins de statistiques et d'affichage.
                Un cookie est une information déposée sur votre disque dur par le serveur du site que vous visitez. Il contient
                plusieurs données qui sont stockées sur votre ordinateur dans un simple fichier texte auquel un serveur accède
                pour lire et enregistrer des informations. Vous pouvez vous opposer à l'enregistrement de cookies en configurant
                votre navigateur.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#2A2230]">Liens hypertextes</h2>
              <p className="text-[#473F50]">
                Le site peut contenir des liens hypertextes vers d'autres sites. Agence ÜMAIN ne dispose d'aucun moyen de contrôle
                sur ces sites et décline toute responsabilité quant à l'accès, au contenu ou à l'utilisation de ces sites, ainsi
                qu'aux dommages pouvant résulter de la consultation des informations présentes sur ces sites.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#2A2230]">Limitation de responsabilité</h2>
              <p className="text-[#473F50] mb-4">
                Agence ÜMAIN s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois,
                Agence ÜMAIN ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur
                ce site.
              </p>
              <p className="text-[#473F50]">
                En conséquence, Agence ÜMAIN décline toute responsabilité pour toute imprécision, inexactitude ou omission portant
                sur des informations disponibles sur le site. Agence ÜMAIN ne pourra être tenue responsable des dommages directs ou
                indirects résultant de l'accès au site ou de l'utilisation du site, y compris l'inaccessibilité, les pertes de
                données, détériorations, destructions ou virus.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[#2A2230]">Droit applicable et juridiction</h2>
              <p className="text-[#473F50]">
                Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut d'accord amiable,
                le litige sera porté devant les tribunaux français conformément aux règles de compétence en vigueur.
              </p>
            </section>

            <p className="text-sm text-[#9A90A2] mt-12 pt-8 border-t border-[rgba(42,34,48,0.10)]">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
