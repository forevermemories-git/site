import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Location Glambot Val-de-Marne (94) : robot vidéo',
  description:
    "Glambot dans le Val-de-Marne (94) : la Starcam, robot vidéo 5 axes pour mariages, corporate et soirées. Vidéos slow-motion Full HD, galerie 48h. Devis gratuit.",
  alternates: { canonical: 'https://www.forevermemories.fr/glambot-val-de-marne' },
  openGraph: {
    title: 'Location Glambot Val-de-Marne (94) : robot vidéo | ForeverMemories',
    description:
      "Le Glambot Starcam dans le Val-de-Marne : vidéos slow-motion cinématiques pour vos événements. Devis gratuit.",
    url: 'https://www.forevermemories.fr/glambot-val-de-marne',
    type: 'website',
  },
}

export default function GlambotValDeMarneLayout({ children }: { children: ReactNode }) {
  return children
}
