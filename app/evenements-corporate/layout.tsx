import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Glambot Corporate : animation vidéo de marque',
  description:
    "Activez votre marque en événement d'entreprise avec la Starcam : vidéos slow-motion partageables, contenu viral et engagement collaborateurs. Robot vidéo Glambot, Île-de-France.",
  alternates: { canonical: 'https://www.forevermemories.fr/evenements-corporate' },
  openGraph: {
    title: 'Glambot Corporate : animation vidéo de marque | ForeverMemories',
    description:
      "Valorisez votre marque avec des vidéos spectaculaires. Contenu viral et engagement en événement d'entreprise.",
    url: 'https://www.forevermemories.fr/evenements-corporate',
    type: 'website',
  },
}

export default function CorporateLayout({ children }: { children: ReactNode }) {
  return children
}
