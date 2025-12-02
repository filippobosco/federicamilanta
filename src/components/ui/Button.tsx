'use client'

import { motion, HTMLMotionProps } from 'framer-motion'
import clsx from 'clsx'

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  isLoading?: boolean
  href?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  isLoading = false,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = `
    relative inline-flex items-center justify-center gap-2 
    font-heading font-semibold rounded-full 
    transition-all duration-300 
    disabled:opacity-50 disabled:cursor-not-allowed
    focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunset-500
  `

  const variants = {
    primary: `
      bg-gradient-to-r from-sunset-500 to-sunset-600 
      text-white shadow-lg shadow-sunset-500/30
      hover:shadow-xl hover:shadow-sunset-500/40
    `,
    secondary: `
      bg-gradient-to-r from-ocean-400 to-nature-500 
      text-white shadow-lg shadow-ocean-400/30
      hover:shadow-xl hover:shadow-ocean-400/40
    `,
    outline: `
      border-2 border-sunset-500 text-sunset-500 
      hover:bg-sunset-500 hover:text-white
      bg-transparent
    `,
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4.5 text-lg',
  }

  const motionProps = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  }

  const content = (
    <>
      {isLoading && (
        <svg
          className="animate-spin h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {icon && iconPosition === 'left' && !isLoading && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      <span>{children}</span>
      {icon && iconPosition === 'right' && !isLoading && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={clsx(baseStyles, variants[variant], sizes[size], className)}
        {...motionProps}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      disabled={isLoading}
      {...motionProps}
      {...props}
    >
      {/* Shimmer effect for primary buttons */}
      {variant === 'primary' && (
        <span
          className="absolute inset-0 overflow-hidden rounded-full"
          aria-hidden="true"
        >
          <span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                       -translate-x-full animate-[shimmer_2s_infinite]"
          />
        </span>
      )}
      {content}
    </motion.button>
  )
}


