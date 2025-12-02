'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import clsx from 'clsx'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: 'light' | 'dark' | 'gradient' | 'pattern'
  padding?: 'sm' | 'md' | 'lg' | 'none'
}

export default function Section({
  children,
  className,
  id,
  background = 'light',
  padding = 'lg',
}: SectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const backgrounds = {
    light: 'bg-sand-50',
    dark: 'bg-dark-800 text-white',
    gradient: 'bg-gradient-to-br from-sand-50 via-white to-ocean-50',
    pattern: 'bg-sand-50 bg-pattern-dots',
  }

  const paddings = {
    none: '',
    sm: 'py-12 md:py-16',
    md: 'py-16 md:py-24',
    lg: 'py-20 md:py-28 lg:py-32',
  }

  return (
    <section
      ref={ref}
      id={id}
      className={clsx(
        'relative overflow-hidden',
        backgrounds[background],
        paddings[padding],
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="section-container relative z-10"
      >
        {children}
      </motion.div>
    </section>
  )
}

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  gradient?: boolean
}

export function SectionTitle({
  title,
  subtitle,
  align = 'center',
  className,
  gradient = false,
}: SectionTitleProps) {
  const alignments = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={clsx('max-w-3xl mb-12 md:mb-16', alignments[align], className)}
    >
      <h2
        className={clsx(
          'text-3xl md:text-4xl lg:text-5xl font-bold mb-4',
          gradient && 'text-sunset-500'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-sand-500 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

