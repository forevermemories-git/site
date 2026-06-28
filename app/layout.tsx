import type { Metadata } from 'next'
import { Bricolage_Grotesque, Geist, Bungee_Outline, Bungee, Outfit, Newsreader } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import SmoothScroll from './components/ui/SmoothScroll'
import StructuredData from './components/seo/StructuredData'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import SkipToContent from './components/ui/SkipToContent'
import GoogleAnalytics from './components/analytics/GoogleAnalytics'

// Display: grotesque éditorial marqué pour les titres
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-display',
})

// Texte / UI: grotesque neutre et net
const sans = Geist({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-sans',
})

// Outline display: used only by the home marquee band
const outline = Bungee_Outline({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-outline',
})

// Solid Bungee: the "fill" words in the home marquee (alternating with the outline ones)
const bungeeSolid = Bungee({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-bungee',
})

// Outfit: body/UI font of the validated home mockup (the home must match it)
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-outfit',
})

// Newsreader: serif of the Memory Book "Argentique" theme (used in the guest-page mockup)
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-newsreader',
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FFFBF5',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.forevermemories.fr'),
  title: {
    default: 'Starcam by ForeverMemories | Vidéos Glamour Slow-Motion pour Vos Événements',
    template: '%s | ForeverMemories'
  },
  description: 'Location de robot Glambot Starcam pour vos événements. Vidéos slow-motion Full HD pour mariages, corporate et soirées. +500 événements réussis.',
  keywords: ['glambot', 'starcam', 'photobooth', 'vidéo slow-motion', 'événements', 'mariages', 'corporate', 'location glambot', 'robot vidéo', 'slow motion', 'photobooth luxe', 'vidéo Full HD événement', 'memory book', "livre d'or vidéo", "livre d'or audio", 'album photo chronologique', 'album collaboratif événement', 'QR code événement', 'animation mariage Île-de-France'],
  authors: [{ name: 'ForeverMemories', url: 'https://www.forevermemories.fr' }],
  creator: 'ForeverMemories',
  publisher: 'ForeverMemories',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'icon', url: '/icon.png', sizes: '512x512', type: 'image/png' },
    ],
  },
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
    canonical: 'https://www.forevermemories.fr',
    languages: {
      'fr-FR': 'https://www.forevermemories.fr',
    },
  },
  openGraph: {
    title: 'Starcam by ForeverMemories | Robot Glambot Professionnel',
    description: 'Location de robot Glambot Starcam pour des vidéos slow-motion spectaculaires. Plus de 500 événements réussis. Qualité Full HD, livraison instantanée + accès en ligne 48h.',
    url: 'https://www.forevermemories.fr',
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
    google: '7xpPgJvgPad12C8l5xgsCfuy5PfUwHcq8LaIw7Oh4mk',
  },
  category: 'Events & Entertainment',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${sans.variable} ${display.variable} ${outline.variable} ${bungeeSolid.variable} ${outfit.variable} ${newsreader.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          id="axeptio-settings"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.axeptioSettings = {
                clientId: "692d6035f7258ca22ab19698",
                cookiesVersion: "dc3001c0-7caa-4083-86f4-eee0bdc8ec69",
                googleConsentMode: {
                  default: {
                    analytics_storage: "denied",
                    ad_storage: "denied",
                    ad_user_data: "denied",
                    ad_personalization: "denied",
                    wait_for_update: 500
                  }
                }
              };
            `
          }}
        />
        <Script
          id="axeptio-sdk"
          src="https://static.axept.io/sdk.js"
          strategy="beforeInteractive"
        />
        <StructuredData />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <SkipToContent />
        <SmoothScroll>
          <Header />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  )
}
