import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Location Glambot Seine-et-Marne (77) : robot vidéo',
  description:
    "Glambot en Seine-et-Marne (77) : la Starcam filme vos invités en slow-motion cinématique. Mariages, anniversaires, galas. Devis gratuit, intervention en Île-de-France.",
  alternates: { canonical: 'https://forevermemories.fr/glambot-seine-et-marne' },
  openGraph: {
    title: 'Location Glambot Seine-et-Marne (77) : robot vidéo | ForeverMemories',
    description:
      "Le Glambot Starcam en Seine-et-Marne : vidéos slow-motion pour mariages et événements. Devis gratuit.",
    url: 'https://forevermemories.fr/glambot-seine-et-marne',
    type: 'website',
  },
}

export default function GlambotSeineEtMarneLayout({ children }: { children: ReactNode }) {
  return children
}
