import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import RotatingText from './RotatingText'
import MarqueeTicker from './MarqueeTicker'

function MagneticButton({ children, className, ...props }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left - rect.width / 2) * 0.15
    const y = (e.clientY - rect.top - rect.height / 2) * 0.15
    setPos({ x, y })
  }

  const handleMouseLeave = () => setPos({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
    >
      <Link className={className} {...props}>
        {children}
      </Link>
    </motion.div>
  )
}

export default function HeroSection() {
  const heroRef = useRef(null)
  const glowRef = useRef(null)
  const { scrollYProgress } = useScroll()

  // Parallax transforms for orbs
  const orbY1 = useTransform(scrollYProgress, [0, 0.3], [0, -80])
  const orbY2 = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const orbY3 = useTransform(scrollYProgress, [0, 0.3], [0, -120])
  // Subtle parallax on headline
  const headlineY = useTransform(scrollYProgress, [0, 0.2], [0, 30])
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.3])

  // Cursor-following glow effect
  useEffect(() => {
    const hero = heroRef.current
    const glow = glowRef.current
    if (!hero || !glow) return

    let rafId = null
    const handleMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        glow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 107, 53, 0.07), rgba(124, 58, 237, 0.04), transparent 70%)`
      })
    }

    hero.addEventListener('mousemove', handleMouseMove)
    return () => {
      hero.removeEventListener('mousemove', handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
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
        className="absolute inset-0 pointer-events-none z-[1]"
      />

      {/* Parallax Gradient Orbs */}
      <motion.div style={{ y: orbY1 }} className="orb orb-teal top-[-10%] left-[-10%]" />
      <motion.div style={{ y: orbY2 }} className="orb orb-purple top-[20%] right-[-5%]" />
      <motion.div style={{ y: orbY3 }} className="orb orb-magenta bottom-[10%] left-[30%]" />

      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 pointer-events-none z-[2]" />

      {/* Content */}
      <motion.div
        style={{ y: headlineY, opacity: headlineOpacity }}
        className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 pt-40 pb-24 flex-1 flex flex-col justify-center items-center text-center"
      >
        <div className="max-w-[1100px] flex flex-col items-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0 }}
            className="flex items-center gap-3 mb-12 px-5 py-2.5 rounded-full glass-subtle"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[11px] md:text-[13px] tracking-[0.2em] text-accent uppercase font-medium">
              Digital Innovation Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading font-extrabold leading-[1.02] mb-8 tracking-[-0.03em] text-text w-full"
            style={{ fontSize: 'clamp(36px, 10vw, 130px)' }}
          >
            We shape{' '}
            <span className="inline-block">
              <RotatingText />
            </span>
            <br />
            for modern brands.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-body text-text-muted text-[17px] md:text-[21px] leading-[1.7] max-w-[700px] mb-14 font-light"
          >
            A cross-functional team bridging the gap between raw creator talent
            and scalable brand growth. No fluff, just results.
          </motion.p>

          {/* Magnetic CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.55,
              ease: [0.34, 1.56, 0.64, 1],
            }}
            className="flex flex-col sm:flex-row gap-5 w-full justify-center"
          >
            <MagneticButton
              to="/contact"
              className="gradient-btn cta-pulse px-10 py-5 rounded-full font-body text-[16px] font-semibold tracking-wide no-underline flex items-center justify-center whitespace-nowrap shrink-0 min-w-[220px]"
            >
              <span>Start a Project</span>
            </MagneticButton>
            <MagneticButton
              to="/work"
              className="ghost-btn px-10 py-5 rounded-full font-body text-[16px] font-medium tracking-wide no-underline flex items-center justify-center whitespace-nowrap shrink-0 min-w-[220px]"
            >
              Explore Our Work
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* Marquee */}
      <div className="mt-auto relative z-20">
        <MarqueeTicker />
      </div>
    </section>
  )
}
