'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section } from '@/components/ui'

const programDays = [
  {
    day: 1,
    date: '8 Ago',
    title: 'Benvenuto',
    subtitle: 'in Kenya',
    highlight: 'Arrivo e welcome drink',
    activities: [
      'Arrivo a Mombasa e trasferimento in van privato',
      'Arrivo alla villa privata',
      'Welcome drink e presentazione del gruppo',
      'Cena di benvenuto in villa preparata dallo Chef',
    ],
  },
  {
    day: 2,
    date: '9 Ago',
    title: 'Safari',
    subtitle: 'Giorno 1',
    highlight: 'Partenza per la savana',
    activities: [
      'Partenza all\'alba per il Safari',
      'Avvistamento animali nella savana',
      'Pranzo al Lodge',
      'Pomeriggio safari e pernottamento al Lodge (camere da 2 o 3 per camera)',
    ],
  },
  {
    day: 3,
    date: '10 Ago',
    title: 'Safari',
    subtitle: 'Giorno 2',
    highlight: 'Ultimo safari e rientro',
    activities: [
      'Safari mattutino nella savana',
      'Pranzo al Lodge',
      'Rientro in villa nel pomeriggio',
      'Relax in piscina e cena in villa',
    ],
  },
  {
    day: 4,
    date: '11 Ago',
    title: 'Dhow',
    subtitle: 'Experience',
    highlight: 'FULL DAY BOAT in DHOW',
    activities: [
      'Allenamento con VIC e Federica',
      'Giornata in Dhow tipica barca locale',
      'Canoa 1 ora nelle mangrovie',
      'Pranzo in barca e relax',
      'Cena in villa',
    ],
  },
  {
    day: 5,
    date: '12 Ago',
    title: 'Escursione',
    subtitle: 'MARAFA & MALINDI',
    highlight: 'Canyon e spiagge dorate',
    activities: [
      'Allenamento con Federica',
      'Escursione: MARAFA (Hell\'s Kitchen), CHE SHALE, MALINDI',
      'Foto nella terra rossa del canyon',
      'Rientro e cena in villa',
    ],
  },
  {
    day: 6,
    date: '13 Ago',
    title: 'Relax',
    subtitle: '& Training',
    highlight: 'Giornata di recupero',
    activities: [
      'Allenamento con VIC e Federica',
      'Colazione in villa',
      'Tempo libero: relax piscina o esplorazione Watamu',
      'Cena in villa',
    ],
  },
  {
    day: 7,
    date: '14 Ago',
    title: 'Domenica',
    subtitle: 'MARAFIKI',
    highlight: 'Messa Gospel e grigliata',
    activities: [
      'Giornata al MARAFIKI BEACH con lettino',
      'MESSA GOSPEL',
      'GRIGLIATA in spiaggia',
      'Relax e cena in villa',
    ],
  },
  {
    day: 8,
    date: '15 Ago',
    title: 'Scoperta',
    subtitle: '& Cultura',
    highlight: 'Rovine di Gede e Cooking Class',
    activities: [
      'Allenamento con VIC e Federica',
      'Visita alle ROVINE DI GEDE in tuk tuk',
      'COOKING CLASS NEL VILLAGGIO',
      'Cena in villa',
    ],
  },
  {
    day: 9,
    date: '16 Ago',
    title: 'Victoria',
    subtitle: 'Academy',
    highlight: 'Visita e aperitivo',
    activities: [
      'Allenamento con Federica',
      'Visita alla VICTORIA ACADEMY',
      'APERITIVO CRAB SHARK, LITCHOUSE',
      'Cena in villa',
    ],
  },
  {
    day: 10,
    date: '17 Ago',
    title: 'Forza',
    subtitle: '& Relax',
    highlight: 'Ultimi allenamenti',
    activities: [
      'Allenamento con VIC e Federica',
      'Tempo libero per relax o attività personali',
      'Ultimo tuffo in piscina o oceano',
      'Cena di arrivederci in villa',
    ],
  },
  {
    day: 11,
    date: '18 Ago',
    title: 'Ultimo',
    subtitle: 'Giorno',
    highlight: 'Relax finale',
    activities: [
      'Allenamento con Federica',
      'Colazione in villa',
      'Tempo libero per ultimi acquisti o relax',
      'Cena finale in villa',
    ],
  },
  {
    day: 12,
    date: '19 Ago',
    title: 'Arrivederci',
    subtitle: 'Kenya',
    highlight: 'Partenza',
    activities: [
      'Colazione finale in villa',
      'Check-out dalla villa',
      'Trasferimento all\'aeroporto di Mombasa',
      'Partenza con il cuore pieno di ricordi indimenticabili',
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
          12 Giorni di <span className="text-sunset-500">Avventura</span>
        </h2>
        <p className="text-sand-500 mt-4 max-w-xl mx-auto">
          Ogni giornata è un equilibrio perfetto tra movimento, avventura e relax.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="max-w-6xl mx-auto">
        {/* Griglia responsive: 2 colonne mobile, 4 colonne desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-sand-200">
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
