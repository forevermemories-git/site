'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    // Stocker la référence au formulaire avant les opérations async
    const form = e.currentTarget
    const formData = new FormData(form)

    // Ajouter l'access key Web3Forms
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

    // Vérifier que la clé existe
    if (!accessKey) {
      console.error('Web3Forms access key is not configured')
      setSubmitStatus('error')
      setErrorMessage('Configuration du formulaire incorrecte. Veuillez contacter l\'administrateur.')
      setIsSubmitting(false)
      return
    }

    formData.append('access_key', accessKey)

    try {
      console.log('Sending form to Web3Forms...')
      console.log('Access key présente:', !!accessKey)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)
      console.log('Response headers:', Object.fromEntries(response.headers.entries()))

      const responseText = await response.text()
      console.log('Response text:', responseText)

      const data = JSON.parse(responseText)
      console.log('Response data:', data)

      if (data.success) {
        setSubmitStatus('success')
        // Réinitialiser le formulaire
        form.reset()

        // Scroll vers le haut pour voir le message
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.message || 'Une erreur est survenue')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
      setErrorMessage('Erreur de connexion. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-dark">Demande de devis</h2>
      <p className="text-gray-600 mb-8">
        Remplissez ce formulaire et nous vous recontactons sous 24h avec une proposition personnalisée.
      </p>

      {/* Message de succès */}
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-4 duration-500">
          <CheckCircle size={24} className="text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-green-800 mb-1">Message envoyé avec succès !</h3>
            <p className="text-sm text-green-700">
              Nous avons bien reçu votre demande et vous répondrons sous 24h. Merci pour votre confiance !
            </p>
          </div>
        </div>
      )}

      {/* Message d'erreur */}
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-4 duration-500">
          <AlertCircle size={24} className="text-red-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-red-800 mb-1">Erreur d'envoi</h3>
            <p className="text-sm text-red-700">
              {errorMessage || 'Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.'}
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Champ honeypot anti-spam (caché) */}
        <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="prenom" className="block text-sm font-medium text-dark mb-2">
              Prénom *
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Votre prénom"
            />
          </div>
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-dark mb-2">
              Nom *
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Votre nom"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="votre@email.com"
          />
        </div>

        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-dark mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="06 00 00 00 00"
          />
        </div>

        <div>
          <label htmlFor="type-evenement" className="block text-sm font-medium text-dark mb-2">
            Type d'événement *
          </label>
          <select
            id="type-evenement"
            name="type-evenement"
            required
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
          >
            <option value="">Sélectionnez un type</option>
            <option value="mariage">Mariage</option>
            <option value="corporate">Événement Corporate</option>
            <option value="anniversaire">Anniversaire</option>
            <option value="gala">Soirée de Gala</option>
            <option value="autre">Autre</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-dark mb-2">
              Date de l'événement
            </label>
            <input
              type="date"
              id="date"
              name="date"
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            />
          </div>
          <div>
            <label htmlFor="lieu" className="block text-sm font-medium text-dark mb-2">
              Lieu (ville)
            </label>
            <input
              type="text"
              id="lieu"
              name="lieu"
              disabled={isSubmitting}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="Paris, Meaux..."
            />
          </div>
        </div>

        <div>
          <label htmlFor="invites" className="block text-sm font-medium text-dark mb-2">
            Nombre d'invités estimé
          </label>
          <input
            type="number"
            id="invites"
            name="invites"
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="100"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            disabled={isSubmitting}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Décrivez-nous votre projet, vos besoins spécifiques, vos questions..."
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-primary"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Envoi en cours...
            </>
          ) : (
            <>
              Envoyer ma demande
              <Send size={20} />
            </>
          )}
        </button>

        <p className="text-sm text-gray-600 text-center">
          * Champs obligatoires. Vos données sont traitées conformément à notre{' '}
          <Link href="/politique-confidentialite" className="text-primary hover:underline">
            politique de confidentialité
          </Link>
          .
        </p>
      </form>
    </div>
  )
}
