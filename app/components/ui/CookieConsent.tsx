'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X, Cookie } from 'lucide-react'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà consenti
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Afficher la bannière après 1 seconde
      setTimeout(() => setIsVisible(true), 1000)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem('cookie-consent', 'all')
    setIsVisible(false)
  }

  const acceptEssential = () => {
    localStorage.setItem('cookie-consent', 'essential')
    setIsVisible(false)
  }

  const reject = () => {
    localStorage.setItem('cookie-consent', 'none')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6 bg-white/95 backdrop-blur-md border-t-2 border-primary/20 shadow-2xl animate-slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center justify-between">
          {/* Content */}
          <div className="flex-1 flex items-start gap-3">
            <Cookie className="text-primary flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-lg mb-2 text-dark">
                🍪 Cookies et confidentialité
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Nous utilisons des cookies essentiels pour le fonctionnement du site et des cookies analytiques pour améliorer votre expérience.{' '}
                <Link href="/politique-confidentialite" className="text-primary hover:text-primary-dark underline font-medium">
                  En savoir plus
                </Link>
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-2 md:flex-nowrap">
            <button
              onClick={reject}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-dark border border-gray-300 rounded-full transition-colors whitespace-nowrap"
              aria-label="Refuser tous les cookies"
            >
              Tout refuser
            </button>
            <button
              onClick={acceptEssential}
              className="px-4 py-2 text-sm font-medium text-primary hover:text-primary-dark border border-primary rounded-full transition-colors whitespace-nowrap"
              aria-label="Accepter uniquement les cookies essentiels"
            >
              Essentiels uniquement
            </button>
            <button
              onClick={acceptAll}
              className="px-6 py-2 text-sm font-semibold text-white bg-primary hover:bg-primary-dark rounded-full transition-colors shadow-md hover:shadow-lg whitespace-nowrap"
              aria-label="Accepter tous les cookies"
            >
              Tout accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
