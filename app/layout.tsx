import type { Metadata } from 'next'
import { Poppins, Outfit } from 'next/font/google'
import './globals.css'
import SmoothScroll from './components/ui/SmoothScroll'
import StructuredData from './components/seo/StructuredData'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import SkipToContent from './components/ui/SkipToContent'
import CookieConsent from './components/ui/CookieConsent'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-poppins',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-outfit',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://forevermemories.fr'),
  title: {
    default: 'Starcam by ForeverMemories | Vidéos Glamour Slow-Motion pour Vos Événements',
    template: '%s | ForeverMemories'
  },
  description: 'Location de robot Glambot Starcam professionnel pour vos événements. Vidéos slow-motion cinématographiques Full HD pour mariages, événements corporate et soirées de prestige. Plus de 500 événements réussis en France.',
  keywords: ['glambot', 'starcam', 'photobooth', 'vidéo slow-motion', 'événements', 'mariages', 'corporate', 'location glambot', 'robot vidéo', 'slow motion', 'photobooth luxe', 'vidéo Full HD événement'],
  authors: [{ name: 'ForeverMemories', url: 'https://forevermemories.fr' }],
  creator: 'ForeverMemories',
  publisher: 'ForeverMemories',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://forevermemories.fr',
    languages: {
      'fr-FR': 'https://forevermemories.fr',
    },
  },
  openGraph: {
    title: 'Starcam by ForeverMemories | Robot Glambot Professionnel',
    description: 'Location de robot Glambot Starcam pour des vidéos slow-motion spectaculaires. Plus de 500 événements réussis. Qualité Full HD, livraison instantanée + accès en ligne 48h.',
    url: 'https://forevermemories.fr',
    siteName: 'ForeverMemories',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ForeverMemories Starcam - Robot Glambot Professionnel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Starcam by ForeverMemories | Robot Glambot Professionnel',
    description: 'Location de robot Glambot pour des vidéos slow-motion spectaculaires. Qualité Full HD, livraison instantanée + accès en ligne 48h.',
    images: ['/twitter-image.jpg'],
    creator: '@forevermemories',
  },
  verification: {
    google: 'votre-code-verification-google',
  },
  category: 'Events & Entertainment',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${outfit.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <SkipToContent />
        <SmoothScroll>
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
        <CookieConsent />
      </body>
    </html>
  )
}
