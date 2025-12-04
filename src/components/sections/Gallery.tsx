'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { Section, SectionTitle } from '@/components/ui'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=800',
    alt: 'Villa con piscina infinity e palme',
    title: 'Villa con Piscina',
    span: 'col-span-2 row-span-2',
  },
  {
    src: '/palestra.jpg',
    alt: 'Palestra locale con attrezzature TRX e functional training',
    title: 'Palestra Locale',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600',
    alt: 'Safari nella savana con elefante',
    title: 'Safari',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/mare.JPG',
    alt: 'Spiaggia di Watamu con acqua cristallina e sabbia bianca',
    title: 'Spiaggia Watamu',
    span: 'col-span-1 row-span-2',
  },
  {
    src: '/sdraio.jpg',
    alt: 'Relax in spiaggia con lettini e palme',
    title: 'Relax in Spiaggia',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600',
    alt: 'Kayak lungo la costa',
    title: 'Avventure Marine',
    span: 'col-span-1 row-span-1',
  },
  {
    src: '/panorama.png',
    alt: 'Marafa Hell\'s Kitchen - canyon rosso spettacolare',
    title: 'Marafa Canyon',
    span: 'col-span-1 row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=600',
    alt: 'Cena gourmet con piatti locali',
    title: 'Cena Gourmet',
    span: 'col-span-1 row-span-1',
  },
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <Section id="gallery" background="light" padding="lg">
      <SectionTitle
        title="Guarda Dove Ti Porterò"
        subtitle="Lasciati ispirare dalle immagini di quello che vivremo insieme."
        gradient
      />

      {/* Masonry Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {galleryImages.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`relative group cursor-pointer overflow-hidden rounded-2xl ${image.span}`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-800/95 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative max-w-5xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryImages[selectedImage].src.replace('w=600', 'w=1200').replace('w=800', 'w=1200')}
                alt={galleryImages[selectedImage].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-white font-bold text-xl">
                  {galleryImages[selectedImage].title}
                </h3>
                <p className="text-white/70">
                  {galleryImages[selectedImage].alt}
                </p>
              </div>
            </motion.div>
            
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 
                        transition-colors duration-200"
              aria-label="Chiudi"
            >
              <XMarkIcon className="w-8 h-8 text-white" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) =>
                  prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
                )
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 
                        hover:bg-white/20 transition-colors duration-200"
              aria-label="Immagine precedente"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage((prev) =>
                  prev !== null ? (prev + 1) % galleryImages.length : null
                )
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 
                        hover:bg-white/20 transition-colors duration-200"
              aria-label="Immagine successiva"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}


