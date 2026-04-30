import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const words = ['Creators', 'Stories', 'Culture', 'Impact']

export default function RotatingText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <span className="inline-block relative w-auto">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className="inline-block"
          style={{
            background: 'linear-gradient(135deg, #ff6b35, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ y: 40, opacity: 0, filter: 'blur(8px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={{ y: -40, opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
