export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ForeverMemories",
    "alternateName": "ForeverMemories Starcam",
    "url": "https://forevermemories.fr",
    "logo": "https://forevermemories.fr/images/ForeverMemories-logo.png",
    "description": "Location de robot Glambot Starcam professionnel pour événements, mariages et soirées corporate. Vidéos slow-motion Full HD de qualité cinématographique.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "20 rue des Houis",
      "postalCode": "77580",
      "addressLocality": "Pierre-Levée",
      "addressRegion": "Seine-et-Marne",
      "addressCountry": "FR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33676815953",
      "contactType": "Customer Service",
      "email": "hello@forevermemories.fr",
      "availableLanguage": ["French"]
    },
    "sameAs": [
      "https://www.instagram.com/forevermemories.off/",
      "https://www.facebook.com/profile.php?id=61583156844468"
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Location Robot Glambot Starcam",
    "provider": {
      "@type": "Organization",
      "name": "ForeverMemories"
    },
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "description": "Location de robot Glambot Starcam pour créer des vidéos slow-motion spectaculaires lors de vos événements. Qualité Full HD professionnelle, livraison instantanée + accès en ligne sous 48h.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "EUR"
      }
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ForeverMemories",
    "image": "https://forevermemories.fr/images/ForeverMemories-logo.png",
    "@id": "https://forevermemories.fr",
    "url": "https://forevermemories.fr",
    "telephone": "+33676815953",
    "priceRange": "€€€",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "20 rue des Houis",
      "postalCode": "77580",
      "addressLocality": "Pierre-Levée",
      "addressRegion": "Seine-et-Marne",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.9204,
      "longitude": 2.9850
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "500"
    }
  }

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Location Starcam - Robot Glambot Professionnel",
    "description": "Robot Glambot professionnel pour des vidéos slow-motion Full HD spectaculaires. Utilisé lors des plus grandes cérémonies mondiales.",
    "brand": {
      "@type": "Brand",
      "name": "ForeverMemories"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "EUR"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Accueil",
        "item": "https://forevermemories.fr"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
