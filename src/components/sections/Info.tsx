'use client'

import { motion } from 'framer-motion'
import { Section, Button } from '@/components/ui'

const included = [
  '8 notti (7 in villa + 1 al Lodge Safari)',
  'Colazioni e 3 cene gourmet in villa',
  'Allenamenti quotidiani con Federica e Victor',
  'Safari completo allo Tsavo Est',
  'Giornata in dhow con pranzo incluso',
  'Kayak, snorkeling e sport acquatici',
  'Escursione Marafa Canyon e Rovine di Gede',
  'Aperitivi al tramonto',
  'Tutti i trasferimenti locali',
]

const notIncluded = [
  'Volo Italia-Kenya A/R (600-750€)',
  'ETA/Visto Kenya (30€)',
  'Alcuni pranzi',
  'Spese personali',
]

export default function Info() {
  return (
    <Section id="info" background="light" padding="lg">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sunset-500 font-medium tracking-widest uppercase text-sm">
          Info Pratiche
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-800 mt-3">
          Tutto Quello che <span className="text-sunset-500">Devi Sapere</span>
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        {/* Main info - Layout a griglia */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-sand-200 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 md:p-8"
          >
            <span className="text-sand-400 text-sm uppercase tracking-wider">Quando</span>
            <p className="text-xl md:text-2xl font-bold text-dark-800 mt-2">26 Feb — 7 Mar</p>
            <p className="text-sand-500 text-sm mt-1">2026</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 md:p-8"
          >
            <span className="text-sand-400 text-sm uppercase tracking-wider">Dove</span>
            <p className="text-xl md:text-2xl font-bold text-dark-800 mt-2">Watamu</p>
            <p className="text-sand-500 text-sm mt-1">Kenya</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 md:p-8"
          >
            <span className="text-sand-400 text-sm uppercase tracking-wider">Gruppo</span>
            <p className="text-xl md:text-2xl font-bold text-dark-800 mt-2">Max 12</p>
            <p className="text-sand-500 text-sm mt-1">Persone</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 md:p-8"
          >
            <span className="text-sand-400 text-sm uppercase tracking-wider">Prezzo</span>
            <p className="text-xl md:text-2xl font-bold text-sunset-500 mt-2">1.500 €</p>
            <p className="text-sand-500 text-sm mt-1">a persona</p>
          </motion.div>
        </div>

        {/* Included / Not included */}
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-dark-800 mb-6">
              Cosa <span className="text-sunset-500">Include</span>
            </h3>
            <ul className="space-y-4">
              {included.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 text-dark-800 pb-4 border-b border-sand-100"
                >
                  <span className="w-6 h-6 rounded-full bg-sunset-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-dark-800 mb-6">
              Cosa <span className="text-sand-400">Non Include</span>
            </h3>
            <ul className="space-y-4">
              {notIncluded.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-4 text-sand-500 pb-4 border-b border-sand-100"
                >
                  <span className="w-6 h-6 rounded-full bg-sand-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-sand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Deadline box */}
            <div className="mt-10 p-6 bg-dark-800 rounded-lg">
              <p className="text-white/60 text-sm uppercase tracking-wider mb-1">Scadenza Saldo</p>
              <p className="text-2xl font-bold text-white">12 Gennaio 2026</p>
              <p className="text-sunset-500 text-sm mt-2 font-medium">Caparra 360€ entro 25 Agosto 2025</p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button href="#contatti" size="lg">
            Prenota il Tuo Posto
          </Button>
        </motion.div>
      </div>
    </Section>
  )
}
