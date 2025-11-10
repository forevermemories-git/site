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

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
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
