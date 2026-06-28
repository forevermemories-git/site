import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Location Glambot Yvelines (78) : robot vidéo',
  description:
    "Glambot dans les Yvelines (78) : la Starcam filme vos invités en slow-motion comme sur un tapis rouge. Mariages, galas, corporate. Devis gratuit en Île-de-France.",
  alternates: { canonical: 'https://www.forevermemories.fr/glambot-yvelines' },
  openGraph: {
    title: 'Location Glambot Yvelines (78) : robot vidéo | ForeverMemories',
    description:
      "Le Glambot Starcam dans les Yvelines : vidéos slow-motion pour mariages et événements. Devis gratuit.",
    url: 'https://www.forevermemories.fr/glambot-yvelines',
    type: 'website',
  },
}

export default function GlambotYvelinesLayout({ children }: { children: ReactNode }) {
  return children
}
