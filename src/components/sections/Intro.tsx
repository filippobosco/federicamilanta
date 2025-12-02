'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Section } from '@/components/ui'

export default function Intro() {
  return (
    <Section id="intro" background="light" padding="lg">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4">
          {/* Left column - Image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] relative rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?q=80&w=800"
                alt="Tramonto in Kenya"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
            {/* Floating date box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 bg-dark-800 rounded-xl p-6 shadow-2xl"
            >
              <p className="text-white/60 text-xs uppercase tracking-wider">Date</p>
              <p className="text-white text-xl font-bold mt-1">26 Feb — 7 Mar</p>
              <p className="text-sunset-500 font-bold">2026</p>
            </motion.div>
          </motion.div>

          {/* Right column - Content */}
          <div className="lg:col-span-7 lg:pl-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sunset-500 font-medium tracking-widest uppercase text-sm">
                Wellness Retreat Kenya
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-800 mt-4 leading-tight">
                Dove il fitness incontra l&apos;avventura
              </h2>

              <div className="w-16 h-1 bg-sunset-500 mt-6 mb-8" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-5 text-lg text-dark-800/70 leading-relaxed"
            >
              <p>
                Stanco della solita routine? Immagina di svegliarti con il suono 
                dell&apos;Oceano Indiano, allenarti sotto il sole africano e chiudere 
                la giornata con un tramonto mozzafiato.
              </p>

              <p>
                <strong className="text-dark-800">8 notti e 9 giorni</strong> di 
                Functional Training, safari allo Tsavo Est, snorkeling, escursioni 
                in dhow e relax in villa privata con piscina.
              </p>
            </motion.div>

            {/* Bottom statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 pt-8 border-t border-sand-200"
            >
              <p className="text-xl md:text-2xl font-bold text-dark-800">
                Non serve essere atleti.
              </p>
              <p className="text-xl md:text-2xl text-sunset-500 font-bold mt-1">
                Basta la voglia di sentirsi vivi.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  )
}
