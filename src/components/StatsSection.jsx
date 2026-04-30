import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 50, suffix: '+', label: 'Brand Collaborations', color: 'accent' },
  { value: 10, suffix: 'M+', label: 'Reach Generated', color: 'purple' },
  { value: 1, suffix: ' Lakh+', label: 'Creators in Network', color: 'cyan' },
  { value: 4, suffix: 'x', label: 'Average Brand ROI', color: 'accent' },
]

const colorMap = {
  accent: 'from-[#ff6b35] to-[#ff8c5a]',
  purple: 'from-[#7c3aed] to-[#a78bfa]',
  cyan: 'from-[#06b6d4] to-[#22d3ee]',
}

function Counter({ target, suffix, inView }) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    const duration = 1800
    const startTime = performance.now()

    function animate(currentTime) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4) // easeOutQuart for snappier feel
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
    <section className="relative overflow-hidden" ref={ref}>
      {/* Animated gradient dividers top/bottom */}
      <div className="section-divider" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[800px] h-[400px] rounded-full opacity-[0.06]"
          style={{
            background: 'radial-gradient(circle, rgba(255,107,53,0.8), rgba(124,58,237,0.5), transparent)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 py-20 md:py-28 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className="text-center group"
            >
              {/* Number with individual color gradient */}
              <p
                className={`font-mono font-bold mb-3 tracking-tight bg-gradient-to-r ${colorMap[stat.color]} bg-clip-text`}
                style={{
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <Counter target={stat.value} suffix={stat.suffix} inView={inView} />
              </p>
              {/* Subtle glow line under number */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: '40px' }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                className={`h-[2px] mx-auto mb-4 rounded-full bg-gradient-to-r ${colorMap[stat.color]}`}
              />
              <p className="font-body text-text-muted text-[12px] md:text-[13px] tracking-[0.15em] uppercase font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider" />
    </section>
  )
}
