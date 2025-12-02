'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'glass' | 'gradient' | 'elevated'
  hover?: boolean
  delay?: number
}

export default function Card({
  children,
  className,
  variant = 'default',
  hover = true,
  delay = 0,
}: CardProps) {
  const variants = {
    default: 'bg-white shadow-lg',
    glass: 'bg-white/70 backdrop-blur-lg border border-white/30 shadow-lg',
    gradient: 'bg-gradient-to-br from-white to-sand-100 shadow-lg',
    elevated: 'bg-white shadow-xl',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
      className={clsx(
        'rounded-2xl p-6 md:p-8 transition-shadow duration-300',
        variants[variant],
        hover && 'cursor-pointer hover:shadow-2xl',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl 
                 transition-all duration-300 cursor-pointer"
    >
      <div
        className="w-14 h-14 rounded-xl bg-gradient-to-br from-sunset-500 to-ocean-400 
                   flex items-center justify-center mb-5 
                   group-hover:scale-110 transition-transform duration-300"
      >
        <span className="text-white text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold text-dark-800 mb-3">{title}</h3>
      <p className="text-sand-500 leading-relaxed">{description}</p>
    </motion.div>
  )
}

interface TestimonialCardProps {
  quote: string
  author: string
  rating?: number
  delay?: number
}

export function TestimonialCard({ quote, author, rating = 5, delay = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl 
                 transition-shadow duration-300"
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4" aria-label={`Valutazione: ${rating} stelle su 5`}>
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={clsx(
              'w-5 h-5',
              i < rating ? 'text-yellow-400' : 'text-gray-200'
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      {/* Quote */}
      <blockquote className="text-dark-800 leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-sunset-500 
                        flex items-center justify-center text-white font-bold">
          {author.charAt(0)}
        </div>
        <span className="font-semibold text-dark-800">{author}</span>
      </div>
    </motion.div>
  )
}

