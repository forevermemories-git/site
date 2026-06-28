import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Glambot Anniversaire : animation vidéo slow-motion',
  description:
    "Transformez votre anniversaire en moment digne d'Hollywood avec la Starcam, le robot vidéo slow-motion. Vos invités repartent avec leur vidéo. Île-de-France.",
  alternates: { canonical: 'https://forevermemories.fr/anniversaires' },
  openGraph: {
    title: 'Glambot Anniversaire : animation vidéo slow-motion | ForeverMemories',
    description:
      "Une célébration digne d'Hollywood : la Starcam filme vos invités en slow-motion. Vidéo livrée sur place.",
    url: 'https://forevermemories.fr/anniversaires',
    type: 'website',
  },
}

export default function AnniversairesLayout({ children }: { children: ReactNode }) {
  return children
}
