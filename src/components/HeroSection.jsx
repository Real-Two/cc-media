import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import RotatingText from './RotatingText'
import MarqueeTicker from './MarqueeTicker'

export default function HeroSection() {
  const heroRef = useRef(null)
  const glowRef = useRef(null)

  // Cursor-following glow effect
  useEffect(() => {
    const hero = heroRef.current
    const glow = glowRef.current
    if (!hero || !glow) return

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      glow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 107, 53, 0.06), rgba(124, 58, 237, 0.03), transparent 70%)`
    }

    hero.addEventListener('mousemove', handleMouseMove)
    return () => hero.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="min-h-screen relative flex flex-col justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="hero-gradient-bg" />

      {/* Cursor-following glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none z-[1] transition-all duration-300"
      />

      {/* Gradient Orbs */}
      <div className="orb orb-teal top-[-10%] left-[-10%]" />
      <div className="orb orb-purple top-[20%] right-[-5%]" />
      <div className="orb orb-magenta bottom-[10%] left-[30%]" />

      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 pointer-events-none z-[2]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 pt-40 pb-24 flex-1 flex flex-col justify-center items-center text-center">
        <div className="max-w-[1100px] flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0 }}
            className="flex items-center gap-3 mb-12 px-5 py-2.5 rounded-full border border-border bg-bg-elevated/50 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[11px] md:text-[13px] tracking-[0.2em] text-accent uppercase font-medium">
              Digital Innovation Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading font-bold leading-[1.05] mb-8 tracking-[-0.02em] text-text"
            style={{ fontSize: 'clamp(52px, 10vw, 130px)' }}
          >
            We shape{' '}
            <span className="accent-text inline-block">
              <RotatingText />
            </span>
            <br />
            for modern brands.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-body text-text-muted text-[17px] md:text-[21px] leading-[1.7] max-w-[700px] mb-14 font-light"
          >
            A cross-functional team bridging the gap between raw creator talent
            and scalable brand growth. No fluff, just results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.6,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="flex flex-col sm:flex-row gap-5 w-full justify-center"
          >
            <Link
              to="/contact"
              className="gradient-btn cta-pulse px-10 py-5 rounded-full font-body text-[16px] font-semibold tracking-wide no-underline flex items-center justify-center whitespace-nowrap shrink-0 min-w-[220px]"
            >
              <span>Start a Project</span>
            </Link>
            <Link
              to="/work"
              className="ghost-btn px-10 py-5 rounded-full font-body text-[16px] font-medium tracking-wide no-underline flex items-center justify-center whitespace-nowrap shrink-0 min-w-[220px]"
            >
              Explore Our Work
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-auto relative z-20">
        <MarqueeTicker />
      </div>
    </section>
  )
}
