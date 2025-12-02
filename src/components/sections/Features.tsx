'use client'

import { motion } from 'framer-motion'
import { Section, Button } from '@/components/ui'

const featureCategories = [
  {
    number: '01',
    category: 'Alloggio & Comfort',
    items: [
      'Villa privata con piscina infinity',
      'Camere confortevoli immerse nella natura',
      'Spazi comuni per socializzare',
    ],
  },
  {
    number: '02',
    category: 'Fitness & Benessere',
    items: [
      'Allenamenti funzionali quotidiani',
      'Sessioni guidate all\'aperto',
      'Workshop su alimentazione e mindset',
    ],
  },
  {
    number: '03',
    category: 'Avventura & Natura',
    items: [
      'Safari all inclusive nella savana',
      'Kayak e snorkeling nell\'oceano',
      'Escursioni tra mangrovie e foreste',
    ],
  },
  {
    number: '04',
    category: 'Relax & Gusto',
    items: [
      'Aperitivi al tramonto vista oceano',
      'Cene gourmet con sapori locali',
      'Tempo libero per te stesso',
    ],
  },
]

export default function Features() {
  return (
    <section id="incluso" className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-br from-sunset-100 via-orange-100/80 to-amber-50 overflow-hidden">
      <div className="section-container">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sunset-500 font-medium tracking-widest uppercase text-sm">
          Cosa Include
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-800 mt-3">
          Un&apos;Esperienza <span className="text-sunset-500">Completa</span>
        </h2>
        <p className="text-sand-500 max-w-xl mx-auto text-lg mt-4">
          8 giorni pensati per farti vivere ogni sfumatura del Kenya.
        </p>
      </motion.div>

      {/* Feature list - Layout verticale elegante */}
      <div className="max-w-4xl mx-auto">
        {featureCategories.map((cat, index) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
          >
            <div className="grid grid-cols-12 gap-4 md:gap-8 py-10 border-t border-sand-200 
                          hover:bg-sand-50/50 transition-colors duration-300 -mx-4 px-4 md:-mx-8 md:px-8">
              {/* Numero */}
              <div className="col-span-2 md:col-span-1">
                <span className="text-4xl md:text-5xl font-bold text-sand-200 
                               group-hover:text-sunset-500 transition-colors duration-300">
                  {cat.number}
                </span>
              </div>
              
              {/* Titolo */}
              <div className="col-span-10 md:col-span-4">
                <h3 className="text-xl md:text-2xl font-bold text-dark-800">
                  {cat.category}
                </h3>
              </div>
              
              {/* Items */}
              <div className="col-span-12 md:col-span-7 md:col-start-6 mt-4 md:mt-0">
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li 
                      key={i} 
                      className="text-sand-500 pl-4 border-l-2 border-sand-200
                               group-hover:border-sunset-500 transition-colors duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Ultima riga border */}
        <div className="border-t border-sand-200" />
      </div>

      {/* Bottom section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-16 text-center"
      >
        <p className="text-2xl font-bold text-dark-800">
          Tutto organizzato nei minimi dettagli.
        </p>
        <p className="text-sand-500 mt-2 mb-8">
          Tu devi solo goderti l&apos;esperienza.
        </p>
        <Button href="#contatti" size="lg">
          Prenota il Tuo Posto
        </Button>
      </motion.div>
      </div>
    </section>
  )
}
