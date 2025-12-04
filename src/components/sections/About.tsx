'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Section, Button } from '@/components/ui'

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 lg:py-32 bg-gradient-to-br from-sunset-100 via-orange-100/80 to-amber-50 overflow-hidden">
      <div className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
            <Image
              src="/federica.jpg"
              alt="Federica Milanta - Personal Trainer"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          
          {/* Stats badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="absolute -bottom-4 right-4 md:right-8 bg-dark-800 rounded-xl p-4 shadow-xl"
          >
            <div className="text-center">
              <span className="block text-3xl font-bold text-sunset-500">15+</span>
              <span className="text-sm text-white/70">Anni di Esperienza</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-800 mb-6">
            Ciao, Sono{' '}
            <span className="text-sunset-500">Federica Milanta</span>
          </h2>

          <div className="space-y-5 text-lg text-dark-800/80 leading-relaxed">
            <p>
              Sono personal trainer da oltre 15 anni e la mia missione è semplice:{' '}
              <strong className="text-dark-800">
                aiutare le persone a sentirsi bene nel proprio corpo
              </strong>
              , con allenamenti efficaci, energia positiva e un approccio che funziona davvero.
            </p>

            <p>
              Ma non mi basta la palestra. Ho viaggiato tanto per il mondo, amo esplorare 
              posti nuovi...<br />
              Per questo ho deciso di unire le mie 2 grandi passioni:{' '}
              <strong className="text-sunset-500">SPORT & FITNESS</strong> e{' '}
              <strong className="text-sunset-500">L&apos;AVVENTURA</strong>.
            </p>

            <p>
              Questo Wellness Retreat in Kenya è il progetto che ho sempre sognato. Un viaggio 
              pensato per chi, come me, non vuole scegliere tra allenarsi e scoprire il mondo. 
              Per chi vuole tornare a casa{' '}
              <strong className="text-dark-800">
                più forte, più rigenerato e con ricordi indimenticabili
              </strong>.
            </p>

            <p>
              Non sarà una vacanza passiva. Sarà un&apos;esperienza che ti metterà alla prova, 
              ti farà sudare, ridere, emozionare.{' '}
              <strong className="text-sunset-500">E ti farà sentire vivo.</strong>
            </p>

            <p className="text-xl font-heading font-bold text-dark-800 pt-4">
              Io ci sarò, ogni giorno, ad allenarti, motivarti e condividere con te 
              ogni momento di questo viaggio straordinario.
            </p>

            <p className="text-2xl font-heading font-bold text-sunset-500 pt-2">
              Pronto a partire con me?
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-8"
          >
            <Button href="#contatti" size="lg">
              Parti con Me per il Kenya
            </Button>
          </motion.div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}

