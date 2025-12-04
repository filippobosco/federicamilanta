'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: 'Devo essere un atleta per partecipare?',
    answer: "Assolutamente no! Gli allenamenti sono pensati per tutti i livelli. Adatteremo l'intensità alle tue capacità, così da farti lavorare in sicurezza e con soddisfazione. L'importante è avere voglia di muoversi e mettersi in gioco.",
  },
  {
    question: 'Come funzionano gli allenamenti?',
    answer: "Ogni mattina faremo allenamenti funzionali di circa 60-90 minuti. Lavoro a corpo libero, circuiti, esercizi cardiovascolari e tonificazione. Tutto all'aperto, con vista oceano o in spiaggia. Ci divertiremo sudando!",
  },
  {
    question: 'Cosa include esattamente il prezzo di 1.499€?',
    answer: 'Il prezzo include: alloggio in villa con piscina per 8 notti, tutti gli allenamenti, safari completo, escursioni, kayak, snorkeling, cene gourmet, aperitivi, trasferimenti locali e organizzazione completa. Praticamente tutto, tranne voli internazionali, visto e alcuni pranzi.',
  },
  {
    question: 'Come raggiungo Watamu?',
    answer: 'Dovrai prenotare un volo per l\'aeroporto di Mombasa (Kenya). Da lì organizzeremo un trasferimento privato fino alla villa a Watamu (circa 2 ore). Ti darò tutte le indicazioni dettagliate dopo la prenotazione.',
  },
  {
    question: 'Serve il visto per il Kenya?',
    answer: 'Sì, è necessario il visto turistico che puoi richiedere online (eVisa) prima della partenza. Costa circa 50$ e si ottiene in pochi giorni. Ti fornirò tutte le istruzioni.',
  },
  {
    question: 'Posso partecipare da solo/a?',
    answer: "Certo! Anzi, molti partecipanti arrivano da soli e il gruppo diventa subito una piccola famiglia. È un'occasione perfetta per conoscere persone nuove che condividono le tue passioni.",
  },
  {
    question: 'Che tipo di alloggio è previsto?',
    answer: "Alloggeremo in una villa privata con piscina, immersa nella natura. Camere confortevoli, spazi comuni per rilassarsi e una location da sogno a pochi passi dall'oceano.",
  },
  {
    question: 'Cosa succede se devo cancellare?',
    answer: "Le condizioni di cancellazione dipendono dalla data in cui comunichi la rinuncia. Ti fornirò tutte le informazioni dettagliate al momento della prenotazione, con le policy dell'agenzia locale.",
  },
  {
    question: 'Ci sono costi nascosti?',
    answer: 'No, nessun costo nascosto. Il prezzo che vedi è quello finale per tutto ciò che è incluso. Gli unici extra sono voli, visto, alcuni pranzi e spese personali (souvenir, bevande extra, ecc.).',
  },
  {
    question: 'Come posso prenotare?',
    answer: 'Semplice! Compila il form qui sotto con i tuoi dati e ti ricontatterò entro 24 ore con tutte le informazioni per confermare la tua prenotazione. Oppure scrivimi direttamente su Instagram (@federica_milanta).',
  },
]

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-b border-white/10 last:border-b-0"
    >
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between gap-4 text-left
                   hover:text-sunset-500 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-white pr-8">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDownIcon className="w-6 h-6 text-sunset-500" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-white/60 leading-relaxed pr-12">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-dark-800 py-20 md:py-28 lg:py-32">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Domande <span className="text-sunset-500">Frequenti</span>
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Qui trovi le risposte alle domande più comuni. Se hai altri dubbi, scrivimi!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Linea divisoria con il footer */}
      <div className="mt-20 md:mt-28 lg:mt-32 border-t border-white/10" />
    </section>
  )
}
