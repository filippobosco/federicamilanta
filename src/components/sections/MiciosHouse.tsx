'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Section } from '@/components/ui'

const features = [
  {
    title: 'Posizione da Sogno',
    description: 'A Watamu, in mezzo alla natura, tra palme e tranquillità, vicino alle spiagge paradisiache.',
  },
  {
    title: 'Piscina Privata',
    description: 'Ampio giardino con piscina, lettini per il relax, zona living esterna e bar a bordo piscina.',
  },
  {
    title: '4 Camere Eleganti',
    description: 'Spaziose camere matrimoniali arredate con gusto, ciascuna con il proprio bagno privato.',
  },
  {
    title: 'Chef Privato',
    description: 'Cucina locale sana e autentica. Colazioni preparate con ingredienti freschi e cene gourmet.',
  },
  {
    title: 'Accoglienza Autentica',
    description: 'Supporto e calore dai proprietari Michela e Rooney, che rendono ogni soggiorno speciale.',
  },
  {
    title: 'Spazi per Allenamenti',
    description: 'Giardino e spazi esterni perfetti per praticare attività sportiva o semplicemente rilassarsi.',
  },
]

export default function MiciosHouse() {
  return (
    <Section id="villa" background="light" padding="lg">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sunset-500 font-medium tracking-widest uppercase text-sm">
          Il Tuo Alloggio
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-800 mt-3">
          Villa Privata <span className="text-sunset-500">MICIO&apos;S HOUSE</span>
        </h2>
        <p className="text-sand-500 mt-4 max-w-2xl mx-auto text-lg">
          A Watamu, immersa nel verde delle palme e nella tranquillità, a pochi minuti dal meraviglioso mare.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Image + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] rounded-2xl overflow-hidden"
          >
            <Image
              src="/oceanie - campagne (1).png"
              alt="Villa MICIO'S HOUSE - Piscina"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-lg text-dark-800/80 leading-relaxed mb-6">
              Durante il nostro Wellness Retreat, la nostra &quot;Casa&quot; sarà la bellissima 
              Villa privata MICIO&apos;S HOUSE.
            </p>
            <p className="text-lg text-dark-800/80 leading-relaxed">
              Una villa arredata con stile, un vero equilibrio di forme, colori ed eleganza africana. 
              Spazi pensati per il tuo benessere e relax.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-sand-200">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 group hover:bg-sand-50 transition-colors"
            >
              <h3 className="text-xl font-bold text-dark-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-sand-500 leading-relaxed">
                {feature.description}
              </p>
              <div className="mt-4 w-8 h-0.5 bg-sand-200 group-hover:w-12 group-hover:bg-sunset-500 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}

