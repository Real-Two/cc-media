import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 50, suffix: '+', label: 'Brand Collaborations' },
  { value: 10, suffix: 'M+', label: 'Reach Generated' },
  { value: 1, suffix: ' Lakh+', label: 'Creators in Network' },
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
    <section
      className="relative overflow-hidden border-t border-b border-border"
      ref={ref}
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[800px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background:
              'radial-gradient(circle, rgba(255,107,53,0.8), rgba(124,58,237,0.5), transparent)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20 md:py-28 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <p
                className="font-mono font-bold accent-text-warm mb-3 tracking-tight"
                style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
              >
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </p>
              <p className="font-body text-text-muted text-[13px] md:text-[14px] tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
