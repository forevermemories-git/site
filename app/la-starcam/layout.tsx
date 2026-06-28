import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'La Starcam : robot vidéo Glambot slow-motion',
  description:
    "Découvrez la Starcam, le bras robotisé 5 axes qui filme vos invités en slow-motion Full HD, comme sur un tapis rouge. Vidéo sur place, galerie en ligne sous 48h. Île-de-France.",
  alternates: { canonical: 'https://forevermemories.fr/la-starcam' },
  openGraph: {
    title: 'La Starcam : robot vidéo Glambot slow-motion | ForeverMemories',
    description:
      "Le bras robotisé qui filme vos invités en slow-motion cinématique. Vidéo sur place, galerie en ligne sous 48h.",
    url: 'https://forevermemories.fr/la-starcam',
    type: 'website',
  },
}

export default function LaStarcamLayout({ children }: { children: ReactNode }) {
  return children
}
