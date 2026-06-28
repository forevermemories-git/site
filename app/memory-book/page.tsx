import type { Metadata } from 'next'
import Breadcrumbs from '@/app/components/seo/Breadcrumbs'
import FAQStructuredData from '@/app/components/seo/FAQStructuredData'
import MemoryBookClient from './MemoryBookClient'

export const metadata: Metadata = {
  title:
    "Memory Book : livre d'or vidéo et album photo collaboratif | ForeverMemories",
  description:
    "Le Memory Book de ForeverMemories : livre d'or vidéo, livre d'or audio et album photo chronologique pour votre événement. Un QR code événement, et vos invités déposent vidéos et photos dans un album collaboratif (mariage, anniversaire, gala). Le souvenir d'événement en Île-de-France, sans inscription.",
  alternates: { canonical: '/memory-book' },
  openGraph: {
    title:
      "Memory Book : livre d'or vidéo et album photo collaboratif | ForeverMemories",
    description:
      "Un QR code événement, trois onglets : Infos, Livre d'or et Album. Vos invités laissent un message vidéo et déposent leurs photos dans un album collaboratif rangé par ordre chronologique.",
    url: 'https://www.forevermemories.fr/memory-book',
    siteName: 'ForeverMemories',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-memory-book.jpg',
        width: 1200,
        height: 630,
        alt: "Memory Book ForeverMemories : livre d'or vidéo et album collaboratif",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Memory Book : livre d'or vidéo et album collaboratif | ForeverMemories",
    description:
      "Un QR code, et vos invités déposent messages vidéo, photos et vidéos. Album collaboratif rangé par ordre chronologique.",
    images: ['/og-memory-book.jpg'],
  },
}

const memoryBookFAQs = [
  {
    question: "Qu'est-ce que le Memory Book de ForeverMemories ?",
    answer:
      "Le Memory Book est un livre d'or vidéo et un album photo collaboratif pour votre événement. Un seul QR code ouvre une page avec trois onglets (Infos, Livre d'or, Album) : vos invités y laissent un message vidéo, audio ou écrit et déposent leurs photos et vidéos. L'album collaboratif se range automatiquement par ordre chronologique.",
  },
  {
    question: "Mes invités doivent-ils créer un compte ou installer une application ?",
    answer:
      "Non. Le QR code événement ouvre la page directement dans le navigateur, sans inscription ni application à installer. Chaque invité peut filmer un message avec la caméra intégrée, importer ses fichiers ou écrire un mot, puis ajouter ses photos en quelques secondes.",
  },
  {
    question: "Comment l'album photo se range-t-il tout seul ?",
    answer:
      "L'album est chronologique : il utilise l'heure de capture réelle (EXIF) de chaque photo et vidéo pour les classer dans le bon ordre. Résultat, un même instant de l'événement apparaît depuis plusieurs angles, réunis côte à côte dans l'album collaboratif.",
  },
  {
    question: "Le Memory Book remplace-t-il la Starcam ?",
    answer:
      "Non, les deux sont complémentaires. La Starcam filme vos invités en slow-motion cinématique grâce au bras robotisé, tandis que le Memory Book rassemble les souvenirs collectifs de tout le monde. Le Memory Book est un service clé en main : contactez-nous pour le mettre en place pour votre événement en Île-de-France.",
  },
]

export default function MemoryBookPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: 'Memory Book', href: '/memory-book' }]} />
      <FAQStructuredData faqs={memoryBookFAQs} />
      <MemoryBookClient />
    </>
  )
}
