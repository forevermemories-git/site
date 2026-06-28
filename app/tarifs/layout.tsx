import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Tarifs Glambot Starcam : location robot vidéo',
  description:
    "Nos formules Glambot Starcam pour mariages, corporate, anniversaires et galas. Devis personnalisé selon votre événement. Vidéo slow-motion Full HD, galerie en ligne sous 48h.",
  alternates: { canonical: 'https://forevermemories.fr/tarifs' },
  openGraph: {
    title: 'Tarifs Glambot Starcam : location robot vidéo | ForeverMemories',
    description:
      "Des formules adaptées à votre événement. Devis personnalisé, vidéo slow-motion et galerie 48h.",
    url: 'https://forevermemories.fr/tarifs',
    type: 'website',
  },
}

export default function TarifsLayout({ children }: { children: ReactNode }) {
  return children
}
