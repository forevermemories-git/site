import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Structured Data
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
      ...items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": item.name,
        "item": `https://forevermemories.fr${item.href}`
      }))
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <nav aria-label="Fil d'Ariane" className="py-4 px-4 md:px-8">
        <ol className="flex items-center flex-wrap gap-2 text-sm max-w-6xl mx-auto">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-gray-600 hover:text-primary transition-colors"
              aria-label="Retour à l'accueil"
            >
              <Home size={16} />
              <span className="sr-only">Accueil</span>
            </Link>
          </li>

          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              <ChevronRight size={16} className="text-gray-400" />
              {index === items.length - 1 ? (
                <span className="text-gray-900 font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
