'use client'

import { motion } from 'framer-motion'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Section, Button, Countdown } from '@/components/ui'

export default function Urgency() {
  // Deadline: 12 gennaio 2026
  const deadline = new Date('2026-01-12T23:59:59')

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-sunset-500 via-sunset-600 to-sunset-700" />
      
      {/* Animated shapes */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 rounded-full 
                   bg-white/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full 
                   bg-white/10 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10 section-container text-center">
        {/* Alert icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/20 flex items-center justify-center"
        >
          <ExclamationTriangleIcon className="w-10 h-10 text-white" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
        >
          Attenzione: Posti Limitati!
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto"
        >
          Rimangono solo <strong className="text-yellow-300">5 posti disponibili</strong> su 12.
          <br />
          La deadline per il saldo è il <strong className="text-yellow-300">12 gennaio 2026</strong>.
        </motion.p>

        {/* Additional text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-lg text-white/80 mb-10"
        >
          Non perdere l&apos;occasione di vivere un&apos;esperienza che ricorderai per sempre.
        </motion.p>

        {/* Countdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mb-10"
        >
          <p className="text-white/80 mb-4 font-medium">Tempo rimasto per prenotare:</p>
          <Countdown targetDate={deadline} />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Button
            href="#contatti"
            variant="outline"
            size="lg"
            className="!border-white !text-white hover:!bg-white hover:!text-sunset-500"
          >
            Richiedi Informazioni Subito
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

