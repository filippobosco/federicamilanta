'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/ui'

const targetAudience = [
  {
    title: 'Ami Muoverti',
    subtitle: 'e Allenarti',
    description: 'Non stai fermo un minuto. Cerchi una vacanza che ti permetta di restare attivo, sudare e sentirti in forma, ma senza la monotonia della palestra.',
  },
  {
    title: 'Cerchi Esperienze',
    subtitle: 'Autentiche',
    description: "Non ti bastano i resort all-inclusive. Cerchi emozioni vere: un safari all'alba, un tuffo nell'oceano cristallino, un tramonto che ti resta negli occhi per sempre.",
  },
  {
    title: 'Vuoi Ricaricare',
    subtitle: 'le Energie',
    description: 'Lavori tanto, sei sempre di corsa. Vuoi staccare davvero, rigenerarti, tornare a casa con la mente leggera e il corpo pieno di energia.',
  },
  {
    title: 'Ami Viaggiare',
    subtitle: 'in Compagnia',
    description: "Partire con un piccolo gruppo ti fa sentire sicuro e ti permette di conoscere persone che condividono le tue passioni. Max 12 persone.",
  },
]

export default function Target() {
  return (
    <section id="target" className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-br from-sunset-100 via-orange-100/80 to-amber-50 overflow-hidden">
      <div className="section-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sunset-500 font-medium tracking-widest uppercase text-sm">
          Per Chi È
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-800 mt-3">
          Questo Retreat è per Te?
        </h2>
      </motion.div>

      {/* Cards in griglia 2x2 */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-sand-200">
        {targetAudience.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white p-8 md:p-12 hover:bg-sand-50 transition-colors duration-300"
          >
            {/* Titolo su due righe */}
            <h3 className="text-2xl md:text-3xl font-bold text-dark-800 leading-tight mb-4">
              {item.title}<br />
              <span className="text-sunset-500">{item.subtitle}</span>
            </h3>
            
            {/* Descrizione */}
            <p className="text-sand-500 leading-relaxed">
              {item.description}
            </p>

            {/* Linea decorativa */}
            <div className="mt-6 w-12 h-0.5 bg-sand-200 group-hover:w-20 group-hover:bg-sunset-500 
                          transition-all duration-500" />
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  )
}
