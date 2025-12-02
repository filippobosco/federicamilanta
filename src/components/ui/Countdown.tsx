'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CountdownProps {
  targetDate: Date
  className?: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function Countdown({ targetDate, className }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime()

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  if (!mounted) {
    return (
      <div className={className}>
        <div className="flex justify-center gap-4">
          {['Giorni', 'Ore', 'Minuti', 'Secondi'].map((label) => (
            <div key={label} className="text-center">
              <div className="bg-dark-800 text-white rounded-xl p-4 min-w-[80px] shadow-lg">
                <span className="text-3xl md:text-4xl font-bold font-heading">--</span>
              </div>
              <span className="text-sm text-white mt-2 block">{label}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const timeUnits = [
    { value: timeLeft.days, label: 'Giorni' },
    { value: timeLeft.hours, label: 'Ore' },
    { value: timeLeft.minutes, label: 'Minuti' },
    { value: timeLeft.seconds, label: 'Secondi' },
  ]

  return (
    <div className={className}>
      <div className="flex justify-center gap-3 md:gap-4">
        {timeUnits.map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="bg-dark-800 text-white rounded-xl p-3 md:p-4 min-w-[70px] md:min-w-[90px] shadow-lg relative overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={value}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  className="text-2xl md:text-4xl font-bold font-heading block"
                >
                  {String(value).padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
            </div>
            <span className="text-xs md:text-sm text-white mt-2 block font-medium">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

