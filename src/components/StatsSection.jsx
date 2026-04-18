import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 50, suffix: '+', label: 'Brand Collaborations' },
  { value: 10, suffix: 'M+', label: 'Reach Generated' },
  { value: 500, suffix: '+', label: 'Creators in Network' },
  { value: 4, suffix: 'x', label: 'Average Brand ROI' },
]

function Counter({ target, suffix, inView }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    const duration = 1500
    const startTime = performance.now()

    function animate(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [inView, target])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section className="relative overflow-hidden border-t border-b border-border" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="text-center">
              <p
                className="font-heading font-extrabold gradient-text mb-2"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
              >
                <Counter target={stat.value} suffix={stat.suffix} inView={inView} />
              </p>
              <p className="font-body text-text-muted text-[14px] tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
