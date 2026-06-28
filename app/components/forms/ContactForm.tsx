'use client'

import { useState, useEffect } from 'react'
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

// Champs definis en data, rendus dynamiquement (pas de markup de formulaire fige)
const FIELDS: FieldConfig[] = [
  { name: 'prenom', label: 'Prénom', type: 'text', placeholder: 'Votre prénom', required: true, half: true },
  { name: 'nom', label: 'Nom', type: 'text', placeholder: 'Votre nom', required: true, half: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'votre@email.com', required: true },
  { name: 'telephone', label: 'Téléphone', type: 'tel', placeholder: '06 00 00 00 00', half: true },
  { name: 'date', label: 'Date de l’événement', type: 'date', half: true },
  {
    name: 'produit',
    label: 'Quel produit ?',
    type: 'select',
    required: true,
    half: true,
    options: [
      { value: '', label: 'Sélectionnez' },
      { value: 'starcam', label: 'La Starcam' },
      { value: 'memory-book', label: 'Le Memory Book' },
      { value: 'les-deux', label: 'Les deux' },
    ],
  },
  {
    name: 'type-evenement',
    label: 'Type d’événement',
    type: 'select',
    required: true,
    half: true,
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
  'w-full px-4 py-3 bg-[#FFFBF5] border border-[rgba(42,34,48,0.16)] rounded-xl text-[#2A2230] placeholder:text-[#6C6172] focus:border-[#B65EAB] focus:ring-2 focus:ring-[#B65EAB]/35 outline-none transition-all disabled:opacity-50 disabled:cursor-not-allowed'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm() {
  const reduce = useReducedMotion()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  // Préremplissage du produit depuis l'URL (ex: /contact?produit=starcam depuis la page Tarifs)
  const [produit, setProduit] = useState('')

  useEffect(() => {
    try {
      const p = new URLSearchParams(window.location.search).get('produit')
      if (p && ['starcam', 'memory-book', 'les-deux'].includes(p)) setProduit(p)
    } catch {}
  }, [])

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
        className="rounded-2xl border border-[rgba(42,34,48,0.10)] bg-white p-10 text-center"
        style={{ boxShadow: 'var(--shadow-md)' }}
      >
        <div
          className="mx-auto mb-5 h-14 w-14 rounded-full bg-[#FBEFF6] text-[#B65EAB]"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <CheckCircle size={28} />
        </div>
        <h3 className="text-2xl font-semibold text-[#2A2230]">Demande envoyée</h3>
        <p className="mx-auto mt-3 max-w-md text-[#6C6172]">
          Merci, nous revenons vers vous très vite pour parler de votre événement.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn btn-ghost mt-8"
        >
          Envoyer une autre demande
        </button>
      </motion.div>
    )
  }

  const isLoading = status === 'loading'

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}
    >
      {FIELDS.map((field) => {
        return (
          <div key={field.name} style={field.half ? undefined : { gridColumn: '1 / -1' }}>
            <label
              htmlFor={field.name}
              className="mb-2 text-sm font-medium text-[#5B2A55]"
              style={{ display: 'block' }}
            >
              {field.label}
              {field.required && <span className="text-[#B65EAB]"> *</span>}
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
                {...(field.name === 'produit'
                  ? { value: produit, onChange: (e: React.ChangeEvent<HTMLSelectElement>) => setProduit(e.target.value) }
                  : { defaultValue: '' })}
                className={`${fieldClasses} [color-scheme:light]`}
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
                className={`${fieldClasses}${field.type === 'date' ? ' [color-scheme:light]' : ''}`}
              />
            )}
          </div>
        )
      })}

      {status === 'error' && (
        <div
          role="alert"
          className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700"
          style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <AlertCircle size={18} style={{ flex: 'none' }} />
          {errorMessage}
        </div>
      )}

      <div style={{ gridColumn: '1 / -1' }}>
        <button type="submit" disabled={isLoading} className="btn btn-primary w-full sm:w-auto">
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
