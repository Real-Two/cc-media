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
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
