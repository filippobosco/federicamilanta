'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircleIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/outline'
import { Section, SectionTitle, Button } from '@/components/ui'

interface FormData {
  nome: string
  cognome: string
  email: string
  telefono: string
  messaggio: string
  privacy: boolean
}

export default function ContactForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    cognome: '',
    email: '',
    telefono: '',
    messaggio: '',
    privacy: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.nome.trim()) newErrors.nome = 'Il nome è obbligatorio'
    if (!formData.cognome.trim()) newErrors.cognome = 'Il cognome è obbligatorio'
    if (!formData.email.trim()) {
      newErrors.email = "L'email è obbligatoria"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Inserisci una email valida'
    }
    if (!formData.telefono.trim()) newErrors.telefono = 'Il telefono è obbligatorio'
    if (!formData.privacy) newErrors.privacy = 'Devi accettare la privacy policy'

    setErrors(newErrors as Partial<FormData>)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Invia dati a Google Sheets
      await fetch(
        'https://script.google.com/macros/s/AKfycbwHkpfmHDJDSd5EKCkMFrgjoXuEvj8bzOMIDtOsQDS0Pyf_PWEbo_urUyru7Z3MDsDgNA/exec',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nome: formData.nome,
            cognome: formData.cognome,
            email: formData.email,
            telefono: formData.telefono,
            messaggio: formData.messaggio,
          }),
        }
      )
      
      // Redirect alla thank you page
      router.push('/thank-you')
    } catch (error) {
      console.error('Errore invio form:', error)
      alert('Si è verificato un errore. Riprova o contattami su Instagram.')
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <Section id="contatti" background="pattern" padding="lg">
      <SectionTitle
        title="Richiedi Maggiori Informazioni"
        subtitle="Compila il form e ti ricontatterò entro 24 ore con tutti i dettagli per prenotare il tuo posto."
        gradient
      />

      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Nome */}
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-dark-800 mb-2">
                    Nome <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    className={errors.nome ? '!border-red-400' : ''}
                    placeholder="Il tuo nome"
                  />
                  {errors.nome && (
                    <p className="mt-1 text-sm text-red-500">{errors.nome}</p>
                  )}
                </div>

                {/* Cognome */}
                <div>
                  <label htmlFor="cognome" className="block text-sm font-medium text-dark-800 mb-2">
                    Cognome <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cognome"
                    name="cognome"
                    value={formData.cognome}
                    onChange={handleChange}
                    className={errors.cognome ? '!border-red-400' : ''}
                    placeholder="Il tuo cognome"
                  />
                  {errors.cognome && (
                    <p className="mt-1 text-sm text-red-500">{errors.cognome}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-800 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? '!border-red-400' : ''}
                    placeholder="la.tua@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Telefono */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-dark-800 mb-2">
                    Telefono (WhatsApp) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className={errors.telefono ? '!border-red-400' : ''}
                    placeholder="+39 XXX XXX XXXX"
                  />
                  {errors.telefono && (
                    <p className="mt-1 text-sm text-red-500">{errors.telefono}</p>
                  )}
                </div>
              </div>

              {/* Messaggio */}
              <div className="mt-6">
                <label htmlFor="messaggio" className="block text-sm font-medium text-dark-800 mb-2">
                  Messaggio / Note
                </label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  value={formData.messaggio}
                  onChange={handleChange}
                  rows={4}
                  placeholder='Es. "Vorrei sapere di più sugli allenamenti" o "Vengo da solo/a, ci sono altri partecipanti singoli?"'
                />
              </div>

              {/* Privacy */}
              <div className="mt-6">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="privacy"
                    checked={formData.privacy}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-2 border-sand-300 text-sunset-500 
                              focus:ring-sunset-500 cursor-pointer"
                  />
                  <span className="text-sm text-sand-500 group-hover:text-dark-800 transition-colors">
                    Accetto la{' '}
                    <a href="#" className="text-sunset-500 hover:underline">
                      Privacy Policy
                    </a>{' '}
                    <span className="text-red-500">*</span>
                  </span>
                </label>
                {errors.privacy && (
                  <p className="mt-1 text-sm text-red-500">{String(errors.privacy)}</p>
                )}
              </div>

              {/* Submit */}
              <div className="mt-8">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  isLoading={isSubmitting}
                >
                  Invia Richiesta
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-sand-500">
                <span className="flex items-center gap-2">
                  <ClockIcon className="w-5 h-5 text-ocean-400" />
                  Risposta entro 24h
                </span>
                <span className="flex items-center gap-2">
                  <ShieldCheckIcon className="w-5 h-5 text-ocean-400" />
                  Dati protetti
                </span>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-xl p-10 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-ocean-400/20 
                            flex items-center justify-center">
                <CheckCircleIcon className="w-12 h-12 text-ocean-400" />
              </div>
              <h3 className="text-2xl font-bold text-dark-800 mb-3">
                Richiesta Inviata con Successo! 🎉
              </h3>
              <p className="text-sand-500 mb-6">
                Grazie per il tuo interesse! Ti ricontatterò entro 24 ore con tutte 
                le informazioni per prenotare il tuo posto al Wellness Retreat in Kenya.
              </p>
              <p className="text-sm text-sand-400">
                Controlla anche la cartella spam della tua email.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  )
}


