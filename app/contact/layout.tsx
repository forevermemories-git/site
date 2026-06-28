import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Contact & devis Glambot Starcam',
  description:
    "Demandez votre devis gratuit pour la Starcam (Glambot) ou le Memory Book. Réponse sous 24h. Animation vidéo événementielle en Île-de-France. Tél. 06 76 81 59 53.",
  alternates: { canonical: 'https://forevermemories.fr/contact' },
  openGraph: {
    title: 'Contact & devis Glambot Starcam | ForeverMemories',
    description:
      "Un projet, une date ? Demandez votre devis gratuit. Réponse sous 24h, intervention en Île-de-France.",
    url: 'https://forevermemories.fr/contact',
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children
}
