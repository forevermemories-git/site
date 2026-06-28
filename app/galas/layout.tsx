import type { Metadata } from 'next'
import type { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Glambot Gala & soirée de prestige : robot vidéo',
  description:
    "Une expérience tapis rouge pour vos galas et soirées de prestige : la Starcam filme vos invités en slow-motion cinématique Full HD. Animation premium en Île-de-France.",
  alternates: { canonical: 'https://forevermemories.fr/galas' },
  openGraph: {
    title: 'Glambot Gala & soirée de prestige : robot vidéo | ForeverMemories',
    description:
      "Une expérience digne des plus grands tapis rouges, filmée en slow-motion cinématique.",
    url: 'https://forevermemories.fr/galas',
    type: 'website',
  },
}

export default function GalasLayout({ children }: { children: ReactNode }) {
  return children
}
