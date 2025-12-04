'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '@/components/ui'

const programDays = [
  {
    day: 1,
    date: '26 Feb',
    title: 'Benvenuto',
    subtitle: 'in Kenya',
    highlight: 'Arrivo e welcome drink',
    activities: [
      'Arrivo a Mombasa e trasferimento in van privato',
      'Arrivo alla villa MICIO\'S HOUSE',
      'Welcome drink e presentazione del gruppo',
      'Cena di benvenuto con vista giardino',
    ],
  },
  {
    day: 2,
    date: '27 Feb',
    title: 'Si Parte',
    subtitle: 'Primo Allenamento',
    highlight: 'Functional Training',
    activities: [
      'Prima sessione di Functional Training in palestra locale',
      'Colazione tropicale in villa',
      'Tempo libero: esplorazione Watamu o relax piscina',
      'Cena gourmet in villa',
    ],
  },
  {
    day: 3,
    date: '28 Feb',
    title: 'Safari',
    subtitle: 'Tsavo Est',
    highlight: 'Safari nella savana',
    activities: [
      'Partenza all\'alba per il Safari allo Tsavo Est',
      'Avvistamento elefanti "pelle rossa", leoni, giraffe',
      'Pranzo al Lodge Manyatta',
      'Pernottamento al Lodge (pensione completa)',
    ],
  },
  {
    day: 4,
    date: '1 Mar',
    title: 'Ocean',
    subtitle: 'Day',
    highlight: 'Snorkeling',
    activities: [
      'Ultimo safari mattutino e rientro in villa',
      'Pomeriggio snorkeling nell\'Oceano Indiano',
      'Relax in spiaggia',
      'Cena in villa',
    ],
  },
  {
    day: 5,
    date: '2 Mar',
    title: 'Dhow',
    subtitle: 'Experience',
    highlight: 'Navigazione tradizionale',
    activities: [
      'Sessione Flexibility sulla spiaggia al sorgere del sole',
      'Giornata in dhow: delfini, fenicotteri, mangrovie',
      'Pranzo grigliata sull\'isoletta',
      'Aperitivo al tramonto in barca',
    ],
  },
  {
    day: 6,
    date: '3 Mar',
    title: 'Hell\'s',
    subtitle: 'Kitchen',
    highlight: 'Canyon Marafa',
    activities: [
      'Allenamento HIIT o TRX in palestra',
      'Escursione: Malindi, Che Shale, Canyon Marafa',
      'Foto nella terra rossa del canyon',
      'Rientro e cena in villa',
    ],
  },
  {
    day: 7,
    date: '4 Mar',
    title: 'Beach',
    subtitle: 'Day',
    highlight: 'Relax totale',
    activities: [
      'Sessione Mobility Training',
      'Giornata al MARAFIKI BEACH con lettino',
      'Pranzo grigliata in spiaggia',
      'Aperitivo sulle amache sull\'Oceano',
    ],
  },
  {
    day: 8,
    date: '5 Mar',
    title: 'Forza',
    subtitle: '& Scoperta',
    highlight: 'Rovine di Gede',
    activities: [
      'Allenamento funzionale intensivo total body',
      'Visita alle Rovine di GEDE',
      'Shopping e souvenir a Watamu',
      'Cena di arrivederci e festa finale',
    ],
  },
  {
    day: 9,
    date: '6 Mar',
    title: 'Kayak',
    subtitle: '& Tramonto',
    highlight: 'Ultimo tramonto',
    activities: [
      'Kayak nelle mangrovie',
      'Ultimo tuffo in piscina o oceano',
      'Aperitivo finale al tramonto',
      'Cena e saluti',
    ],
  },
  {
    day: 10,
    date: '7 Mar',
    title: 'Arrivederci',
    subtitle: 'Kenya',
    highlight: 'Partenza',
    activities: [
      'Colazione finale in villa',
      'Check-out da MICIO\'S HOUSE',
      'Trasferimento all\'aeroporto di Mombasa',
      'Partenza per Milano con il cuore pieno',
      '✨ Opzione: partenza l\'8 Marzo aggiungendo una notte extra',
    ],
  },
]

export default function Program() {
  const [selectedDay, setSelectedDay] = useState<number | null>(null)

  return (
    <Section id="programma" background="light" padding="lg">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sunset-500 font-medium tracking-widest uppercase text-sm">
          Il Programma
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-800 mt-3">
          9 Giorni di <span className="text-sunset-500">Avventura</span>
        </h2>
        <p className="text-sand-500 mt-4 max-w-xl mx-auto">
          Ogni giornata è un equilibrio perfetto tra movimento, avventura e relax.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto">
        {/* Griglia responsive: 2 colonne mobile, 5 colonne desktop */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-sand-200">
          {programDays.map((day, index) => (
            <motion.button
              key={day.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              onClick={() => setSelectedDay(selectedDay === day.day ? null : day.day)}
              className={`group bg-white p-4 md:p-6 text-left transition-all duration-300
                        ${selectedDay === day.day ? 'bg-dark-800' : 'hover:bg-sand-50'}`}
            >
              <span className={`text-3xl md:text-4xl font-bold transition-colors duration-300
                              ${selectedDay === day.day ? 'text-sunset-500' : 'text-sand-200 group-hover:text-sunset-500'}`}>
                {String(day.day).padStart(2, '0')}
              </span>
              <p className={`text-xs mt-1 transition-colors duration-300
                           ${selectedDay === day.day ? 'text-white/60' : 'text-sand-400'}`}>
                {day.date}
              </p>
              <h3 className={`text-sm md:text-base font-bold mt-2 transition-colors duration-300
                            ${selectedDay === day.day ? 'text-white' : 'text-dark-800'}`}>
                {day.title}
              </h3>
              <p className={`text-xs transition-colors duration-300
                           ${selectedDay === day.day ? 'text-sunset-500' : 'text-sunset-500'}`}>
                {day.subtitle}
              </p>
            </motion.button>
          ))}
        </div>

        {/* Dettaglio giorno selezionato */}
        <AnimatePresence>
          {selectedDay && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="mt-6 p-6 md:p-10 bg-dark-800 rounded-lg">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <span className="text-sunset-500 text-5xl md:text-6xl font-bold">
                        {String(selectedDay).padStart(2, '0')}
                      </span>
                      <span className="text-white/40 text-lg">
                        {programDays[selectedDay - 1].date}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mt-2">
                      {programDays[selectedDay - 1].title}{' '}
                      <span className="text-sunset-500">{programDays[selectedDay - 1].subtitle}</span>
                    </h3>
                    <p className="text-white/60 mt-1">{programDays[selectedDay - 1].highlight}</p>
                  </div>
                  <ul className="space-y-3 md:max-w-md">
                    {programDays[selectedDay - 1].activities.map((activity, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-sunset-500 mt-2 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hint */}
        {!selectedDay && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sand-400 mt-6 text-sm"
          >
            Clicca su un giorno per vedere i dettagli
          </motion.p>
        )}
      </div>
    </Section>
  )
}
