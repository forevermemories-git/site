import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Location Glambot Paris : robot vidéo slow-motion',
  description:
    "Location de Glambot à Paris : la Starcam, robot vidéo 5 axes filme vos invités en slow-motion Full HD. Mariages, corporate, soirées. Devis gratuit en Île-de-France.",
  alternates: { canonical: 'https://www.forevermemories.fr/glambot-paris' },
  openGraph: {
    title: 'Location Glambot Paris : robot vidéo slow-motion | ForeverMemories',
    description:
      "Le Glambot Starcam à Paris : vidéos slow-motion cinématiques pour vos événements. Devis gratuit.",
    url: 'https://www.forevermemories.fr/glambot-paris',
    type: 'website',
  },
}

export default function GlambotParisLayout({ children }: { children: ReactNode }) {
  return children
}
