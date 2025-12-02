'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Section, SectionTitle, TestimonialCard } from '@/components/ui'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const testimonials = [
  {
    quote: 'Federica è una trainer incredibile. Sa motivarti senza mai farti sentire giudicato. Gli allenamenti sono intensi ma divertenti, e torni a casa con energia da vendere. Non vedo l\'ora di partire con lei per il Kenya!',
    author: 'Marco, 34 anni',
    rating: 5,
  },
  {
    quote: 'Ho iniziato ad allenarmi con Federica un anno fa e non mi sono più fermata. È professionale, preparata e riesce sempre a trasmetterti la sua carica positiva. L\'idea del retreat in Kenya mi ha conquistata subito: fitness e avventura insieme!',
    author: 'Giulia, 29 anni',
    rating: 5,
  },
  {
    quote: 'Cercavo qualcosa di diverso dalla solita vacanza. Con Federica ho trovato un\'opportunità unica: allenarmi, esplorare l\'Africa e conoscere persone fantastiche. Questo viaggio è esattamente quello che mi serviva.',
    author: 'Alessandro, 41 anni',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <Section id="testimonianze" background="light" padding="lg">
      <SectionTitle
        title="Chi Si è Allenato con Me Racconta"
        gradient
      />

      {/* Desktop: Griglia */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.author}
            quote={testimonial.quote}
            author={testimonial.author}
            rating={testimonial.rating}
            delay={index * 0.1}
          />
        ))}
      </div>

      {/* Mobile: Carosello */}
      <div className="md:hidden">
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
            >
              <TestimonialCard
                quote={testimonials[currentIndex].quote}
                author={testimonials[currentIndex].author}
                rating={testimonials[currentIndex].rating}
                delay={0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controlli carosello */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-sand-100 flex items-center justify-center
                     hover:bg-sunset-500 hover:text-white transition-colors"
            aria-label="Recensione precedente"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          {/* Indicatori */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300
                          ${index === currentIndex ? 'w-6 bg-sunset-500' : 'bg-sand-300'}`}
                aria-label={`Vai alla recensione ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-sand-100 flex items-center justify-center
                     hover:bg-sunset-500 hover:text-white transition-colors"
            aria-label="Recensione successiva"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Trust indicators */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-12 flex flex-wrap justify-center gap-8 items-center"
      >
        <div className="flex items-center gap-2 text-sand-500">
          <svg className="w-6 h-6 text-ocean-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.939z"/>
          </svg>
          <span className="font-medium">+500 clienti soddisfatti</span>
        </div>
        <div className="flex items-center gap-2 text-sand-500">
          <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span className="font-medium">4.9/5 rating medio</span>
        </div>
        <div className="flex items-center gap-2 text-sand-500">
          <svg className="w-6 h-6 text-sunset-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <span className="font-medium">15+ anni di esperienza</span>
        </div>
      </motion.div>
    </Section>
  )
}
