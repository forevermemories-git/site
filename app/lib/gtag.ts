// Google Analytics Event Tracking

export const GA_MEASUREMENT_ID = 'G-Y8GG7D44TG'

// Types d'événements
type GTagEvent = {
  action: string
  category: string
  label?: string
  value?: number
}

// Fonction pour envoyer des événements à GA4
export const trackEvent = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Événements de conversion prédéfinis
export const trackConversion = {
  // Click sur devis
  devisClick: (location: string) => {
    trackEvent({
      action: 'demande_devis',
      category: 'conversion',
      label: location,
    })
  },

  // Click sur contact
  contactClick: (method: 'phone' | 'email' | 'form') => {
    trackEvent({
      action: 'contact_click',
      category: 'conversion',
      label: method,
    })
  },

  // Click sur téléphone
  phoneClick: () => {
    trackEvent({
      action: 'phone_click',
      category: 'conversion',
      label: 'telephone',
    })
  },

  // Click sur email
  emailClick: () => {
    trackEvent({
      action: 'email_click',
      category: 'conversion',
      label: 'email',
    })
  },

  // Soumission formulaire
  formSubmit: (formName: string) => {
    trackEvent({
      action: 'form_submit',
      category: 'conversion',
      label: formName,
    })
  },

  // Click sur CTA
  ctaClick: (ctaName: string) => {
    trackEvent({
      action: 'cta_click',
      category: 'engagement',
      label: ctaName,
    })
  },

  // Consultation page tarifs
  tarifView: () => {
    trackEvent({
      action: 'page_view',
      category: 'engagement',
      label: 'tarifs',
    })
  },

  // Consultation galerie/vidéos
  mediaView: (type: 'video' | 'gallery') => {
    trackEvent({
      action: 'media_view',
      category: 'engagement',
      label: type,
    })
  },
}
