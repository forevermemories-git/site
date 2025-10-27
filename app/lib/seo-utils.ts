import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  noindex?: boolean
}

export function generateSEO({
  title,
  description,
  keywords = [],
  image = '/og-image.jpg',
  url,
  type = 'website',
  noindex = false
}: SEOProps): Metadata {
  const siteUrl = 'https://forevermemories.fr'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    robots: noindex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'ForeverMemories',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: 'fr_FR',
      type
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
      creator: '@forevermemories'
    },
    alternates: {
      canonical: fullUrl
    }
  }
}

// Génère les breadcrumbs structurés
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://forevermemories.fr${item.url}`
    }))
  }
}

// Génère le schema FAQ
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }
}

// Génère le schema Event
export function generateEventSchema(event: {
  name: string
  description: string
  startDate: string
  location: string
  image?: string
  offers?: {
    price: string
    currency: string
  }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.name,
    description: event.description,
    startDate: event.startDate,
    location: {
      '@type': 'Place',
      name: event.location,
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'FR'
      }
    },
    image: event.image ? `https://forevermemories.fr${event.image}` : undefined,
    offers: event.offers
      ? {
          '@type': 'Offer',
          price: event.offers.price,
          priceCurrency: event.offers.currency,
          availability: 'https://schema.org/InStock'
        }
      : undefined
  }
}
