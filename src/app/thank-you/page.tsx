'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CheckCircleIcon, EnvelopeIcon, CalendarDaysIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-sunset-100 via-orange-100/80 to-amber-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Card principale */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center"
        >
          {/* Icona successo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center"
          >
            <CheckCircleIcon className="w-12 h-12 text-green-500" />
          </motion.div>

          {/* Titolo */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-dark-800 mb-4"
          >
            Grazie per avermi contattata!
          </motion.h1>

          {/* Sottotitolo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-dark-800/70 mb-8"
          >
            Ho ricevuto la tua richiesta e ti risponderò entro{' '}
            <span className="text-sunset-500 font-semibold">24 ore</span>.
          </motion.p>

          {/* Info box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-sand-50 rounded-2xl p-6 mb-8"
          >
            <h2 className="font-bold text-dark-800 mb-4">Cosa succede ora?</h2>
            <div className="space-y-4 text-left">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sunset-100 flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="w-5 h-5 text-sunset-500" />
                </div>
                <div>
                  <p className="font-medium text-dark-800">Riceverai una mia email</p>
                  <p className="text-sm text-dark-800/60">
                    Ti scriverò personalmente per rispondere alle tue domande e darti tutte le informazioni sul retreat.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-sunset-100 flex items-center justify-center flex-shrink-0">
                  <CalendarDaysIcon className="w-5 h-5 text-sunset-500" />
                </div>
                <div>
                  <p className="font-medium text-dark-800">Fisseremo una call (se vuoi)</p>
                  <p className="text-sm text-dark-800/60">
                    Possiamo organizzare una breve videochiamata per conoscerti e rispondere a ogni tuo dubbio.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Date retreat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-dark-800 rounded-xl p-6 mb-8"
          >
            <p className="text-white/60 text-sm uppercase tracking-wider mb-2">Il Retreat</p>
            <p className="text-2xl font-bold text-white">
              26 Febbraio — 7 Marzo <span className="text-sunset-500">2026</span>
            </p>
            <p className="text-white/60 mt-1">Watamu, Kenya • 8 notti • 1.499€</p>
          </motion.div>

          {/* Contatti diretti */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mb-8"
          >
            <p className="text-dark-800/60 mb-4">Vuoi contattarmi direttamente?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/393518676539"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 
                         text-white font-semibold rounded-full hover:bg-green-600 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:info.federicamilanta@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-dark-800 
                         text-dark-800 font-semibold rounded-full hover:bg-dark-800 hover:text-white transition-colors"
              >
                <EnvelopeIcon className="w-5 h-5" />
                Email
              </a>
            </div>
          </motion.div>

          {/* Torna alla home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-dark-800/60 hover:text-sunset-500 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Torna alla pagina principale
            </Link>
          </motion.div>
        </motion.div>

        {/* Footer mini */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-dark-800/40 mt-8 text-sm"
        >
          © 2025 Federica Milanta • Wellness Retreat Kenya
        </motion.p>
      </div>
    </main>
  )
}

