'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'

interface BadgeProps {
  children: React.ReactNode
  icon?: React.ReactNode
  variant?: 'default' | 'pulse' | 'urgent'
  className?: string
}

export default function Badge({
  children,
  icon,
  variant = 'default',
  className,
}: BadgeProps) {
  const variants = {
    default: 'bg-white/90 text-dark-800 shadow-md',
    pulse: 'bg-white/90 text-dark-800 shadow-md animate-pulse-slow',
    urgent: 'bg-sunset-500 text-white shadow-lg shadow-sunset-500/30',
  }

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={clsx(
        'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm',
        variants[variant],
        className
      )}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </motion.span>
  )
}


