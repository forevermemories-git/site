import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'À propos : Glambot Starcam & Memory Book',
  description:
    "ForeverMemories, prestataire vidéo événementiel en Île-de-France : la Starcam (robot vidéo Glambot slow-motion) et le Memory Book (livre d'or vidéo et album collaboratif). Notre histoire.",
  alternates: { canonical: 'https://forevermemories.fr/a-propos' },
  openGraph: {
    title: 'À propos : Glambot Starcam & Memory Book | ForeverMemories',
    description:
      "Prestataire vidéo événementiel en Île-de-France. La Starcam et le Memory Book, pour des souvenirs qui durent.",
    url: 'https://forevermemories.fr/a-propos',
    type: 'website',
  },
}

export default function AProposLayout({ children }: { children: ReactNode }) {
  return children
}
