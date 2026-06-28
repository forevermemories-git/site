import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Glambot Mariage : animation vidéo slow-motion',
  description:
    "Sublimez votre mariage avec la Starcam, le robot vidéo Glambot qui filme vos invités en slow-motion cinématique. Animation glamour, souvenirs partagés en 48h. Île-de-France.",
  alternates: { canonical: 'https://forevermemories.fr/mariages' },
  openGraph: {
    title: 'Glambot Mariage : animation vidéo slow-motion | ForeverMemories',
    description:
      "Le robot vidéo qui filme vos invités en slow-motion, comme sur un tapis rouge. Animation glamour inoubliable.",
    url: 'https://forevermemories.fr/mariages',
    type: 'website',
  },
}

export default function MariagesLayout({ children }: { children: ReactNode }) {
  return children
}
