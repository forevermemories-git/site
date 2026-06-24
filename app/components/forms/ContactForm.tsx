'use client'

import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { trackConversion } from '@/app/lib/gtag'

type FieldType = 'text' | 'email' | 'tel' | 'date' | 'select' | 'textarea'

interface FieldConfig {
  name: string
  label: string
  type: FieldType
  placeholder?: string
  required?: boolean
  half?: boolean
  options?: { value: string; label: string }[]
}

// Champs définis en data — rendus dynamiquement (pas de markup de formulaire figé)
const FIELDS: FieldConfig[] = [
  { name: 'prenom', label: 'Prénom', type: 'text', placeholder: 'Votre prénom', required: true, half: true },
  { name: 'nom', label: 'Nom', type: 'text', placeholder: 'Votre nom', required: true, half: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'votre@email.com', required: true },
  { name: 'telephone', label: 'Téléphone', type: 'tel', placeholder: '06 00 00 00 00', half: true },
  { name: 'date', label: 'Date de l’événement', type: 'date', half: true },
  {
    name: 'type-evenement',
    label: 'Type d’événement',
    type: 'select',
    required: true,
    options: [
      { value: '', label: 'Sélectionnez un type' },
      { value: 'mariage', label: 'Mariage' },
      { value: 'corporate', label: 'Événement Corporate' },
      { value: 'anniversaire', label: 'Anniversaire' },
      { value: 'gala', label: 'Soirée de Gala' },
      { value: 'autre', label: 'Autre' },
    ],
  },
  {
    name: 'message',
    label: 'Votre message',
    type: 'textarea',
    placeholder: 'Parlez-nous de votre événement...',
    required: true,
  },
]

const fieldClasses =
  'w-full px-4 py-3 bg-dark-card/50 border border-white/10 rounded-xl text-cream placeholder:text-cream/30 focus:ring-2 focus:ring-primary/40 focus:border-primary/40 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const reduce = useReducedMotion()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('loading')
    setErrorMessage('')

    const payload = new FormData(form)
    payload.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? '')
    payload.append('subject', 'Nouvelle demande - Forever Memories')
    payload.append('from_name', 'Site Forever Memories')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: payload,
      })
      const result = await response.json()

      if (result.success) {
        setStatus('success')
        form.reset()
        trackConversion.devisClick('contact_form')
      } else {
        setStatus('error')
        setErrorMessage(result.message || 'Une erreur est survenue. Réessayez.')
      }
    } catch {
      setStatus('error')
      setErrorMessage('Impossible d’envoyer votre demande. Vérifiez votre connexion et réessayez.')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border border-primary/20 bg-dark-card/50 p-10 text-center"
      >
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary-light">
          <CheckCircle size={28} />
        </div>
        <h3 className="text-2xl font-semibold text-cream">Demande envoyée</h3>
        <p className="mx-auto mt-3 max-w-md text-cream/55">
          Merci, nous revenons vers vous très vite pour parler de votre événement.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn-secondary mt-8"
        >
          Envoyer une autre demande
        </button>
      </motion.div>
    )
  }

  const isLoading = status === 'loading'

  return (
    <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {FIELDS.map((field) => {
        const span = field.half ? 'sm:col-span-1' : 'sm:col-span-2'
        return (
          <div key={field.name} className={span}>
            <label htmlFor={field.name} className="mb-2 block text-sm font-medium text-cream/70">
              {field.label}
              {field.required && <span className="text-primary-light"> *</span>}
            </label>

            {field.type === 'textarea' ? (
              <textarea
                id={field.name}
                name={field.name}
                rows={5}
                required={field.required}
                disabled={isLoading}
                placeholder={field.placeholder}
                className={`${fieldClasses} resize-none`}
              />
            ) : field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                disabled={isLoading}
                defaultValue=""
                className={`${fieldClasses} [color-scheme:dark]`}
              >
                {field.options?.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                disabled={isLoading}
                placeholder={field.placeholder}
                className={`${fieldClasses}${field.type === 'date' ? ' [color-scheme:dark]' : ''}`}
              />
            )}
          </div>
        )
      })}

      {status === 'error' && (
        <div
          role="alert"
          className="sm:col-span-2 flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/[0.06] px-4 py-3 text-sm text-red-300"
        >
          <AlertCircle size={18} className="shrink-0" />
          {errorMessage}
        </div>
      )}

      <div className="sm:col-span-2">
        <button type="submit" disabled={isLoading} className="btn-primary w-full sm:w-auto">
          {isLoading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Envoi en cours
            </>
          ) : (
            <>
              <Send size={18} />
              Envoyer ma demande
            </>
          )}
        </button>
      </div>
    </form>
  )
}
