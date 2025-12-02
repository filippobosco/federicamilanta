'use client'

import { motion } from 'framer-motion'
import { CalendarDaysIcon, MapPinIcon, UserGroupIcon, ClockIcon } from '@heroicons/react/24/outline'
import { Button, Badge } from '@/components/ui'

export default function Hero() {
  const badges = [
    { icon: <CalendarDaysIcon className="w-4 h-4" />, text: '26 Feb - 7 Mar 2026' },
    { icon: <MapPinIcon className="w-4 h-4" />, text: 'Watamu, Kenya' },
    { icon: <UserGroupIcon className="w-4 h-4" />, text: 'Posti Limitati' },
  ]

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center py-20 overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-sunset-500/20 via-ocean-400/10 to-nature-500/20" />
        
        {/* Background image placeholder */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2000')`,
          }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-800/60 via-dark-800/40 to-dark-800/80" />
        
        {/* Animated shapes */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 rounded-full 
                     bg-gradient-to-br from-sunset-500/30 to-ocean-400/30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full 
                     bg-gradient-to-br from-ocean-400/30 to-nature-500/30 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center px-4">
        {/* Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={badge.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
            >
              <Badge icon={badge.icon}>{badge.text}</Badge>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: 'spring' }}
          >
            <Badge variant="urgent" icon={<ClockIcon className="w-4 h-4" />}>
              Ultimi Posti Disponibili
            </Badge>
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Non è la Solita Vacanza.
          <br />
          <span className="text-sunset-500">
            È un&apos;Esperienza che Ti Trasforma.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          Parti per il Wellness Retreat in Kenya: 8 notti tra allenamenti funzionali, 
          safari allo Tsavo Est, oceano cristallino e tramonti indimenticabili.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button
            size="lg"
            href="#contatti"
            icon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            }
          >
            Richiedi Informazioni
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator - posizionato alla fine della sezione */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.a
          href="#intro"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-sm font-medium">Scopri di più</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  )
}

