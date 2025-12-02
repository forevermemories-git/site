interface ArticleStructuredDataProps {
  title: string
  description: string
  author: string
  datePublished: string
  dateModified?: string
  image?: string
  category: string
  keywords: string[]
  slug: string
}

// Convertit une date française ("2 décembre 2025") en format ISO 8601 ("2025-12-02")
function frenchDateToISO(dateStr: string): string {
  const months: { [key: string]: string } = {
    'janvier': '01', 'février': '02', 'mars': '03', 'avril': '04',
    'mai': '05', 'juin': '06', 'juillet': '07', 'août': '08',
    'septembre': '09', 'octobre': '10', 'novembre': '11', 'décembre': '12'
  }
  const parts = dateStr.split(' ')
  const day = parts[0].padStart(2, '0')
  const month = months[parts[1].toLowerCase()]
  const year = parts[2]
  return `${year}-${month}-${day}`
}

export default function ArticleStructuredData({
  title,
  description,
  author,
  datePublished,
  dateModified,
  image = '/images/ForeverMemories-logo.png',
  category,
  keywords,
  slug
}: ArticleStructuredDataProps) {

  const url = `https://forevermemories.fr/blog/${slug}`
  const isoDatePublished = frenchDateToISO(datePublished)
  const isoDateModified = dateModified ? frenchDateToISO(dateModified) : isoDatePublished

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": isoDatePublished,
    "dateModified": isoDateModified,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://forevermemories.fr"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ForeverMemories",
      "logo": {
        "@type": "ImageObject",
        "url": "https://forevermemories.fr/images/ForeverMemories-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "articleSection": category,
    "keywords": keywords.join(', '),
    "inLanguage": "fr-FR"
  }

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://forevermemories.fr"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://forevermemories.fr/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": url
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
