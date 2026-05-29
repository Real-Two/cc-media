import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import RotatingText from './RotatingText'
import MarqueeTicker from './MarqueeTicker'

// ─── Brand data ───────────────────────────────────────────────────────────────
const BRANDS = [
  { name: 'Himalaya',         logo: '/brands/himalya.jpg' },
  { name: 'Philips',          logo: '/brands/philips.jpg' },
  { name: 'Head & Shoulders', logo: '/brands/headnshoulders.png' },
  { name: 'WishCare',         logo: '/brands/wishcare.jpg' },
  { name: 'BlaBliBlü',        logo: '/brands/blabliblu.jpg' },
  { name: 'Expert Panel',     logo: '/brands/expert_panel.jpg' },
]

// ─── Infinite Brand Logo Ticker ───────────────────────────────────────────────
function BrandLogoTicker() {
  // Quadruple-duplicate for a seamless loop with no gaps
  const items = [...BRANDS, ...BRANDS, ...BRANDS, ...BRANDS]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="brand-ticker-root"
    >
      {/* "Trusted By" label */}
      <div className="brand-ticker-header">
        <span className="brand-ticker-line" />
        <span className="brand-ticker-label">Trusted By</span>
        <span className="brand-ticker-line" />
      </div>

      {/* Scrolling track */}
      <div className="brand-ticker-track-wrap">
        <div className="brand-ticker-fade-left" />
        <div className="brand-ticker-fade-right" />
        <div className="brand-ticker-track">
          {items.map((brand, i) => (
            <img
              key={i}
              src={brand.logo}
              alt={brand.name}
              className="brand-ticker-logo"
              draggable={false}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

// ─── Magnetic CTA Button ──────────────────────────────────────────────────────
function MagneticButton({ children, className, ...props }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setPos({
      x: (e.clientX - rect.left - rect.width  / 2) * 0.15,
      y: (e.clientY - rect.top  - rect.height / 2) * 0.15,
    })
  }

  const handleMouseLeave = () => setPos({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5 }}
      className="w-full sm:w-auto"
    >
      <Link className={className} {...props}>{children}</Link>
    </motion.div>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  const heroRef = useRef(null)
  const glowRef = useRef(null)
  const { scrollYProgress } = useScroll()

  const headlineY       = useTransform(scrollYProgress, [0, 0.25], [0, 40])
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.25])

  useEffect(() => {
    const hero = heroRef.current
    const glow = glowRef.current
    if (!hero || !glow) return
    let rafId = null
    const handleMouseMove = (e) => {
      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect()
        glow.style.background = `radial-gradient(600px circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(255,107,53,0.08), rgba(124,58,237,0.05), transparent 70%)`
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
      className="min-h-[100svh] relative flex flex-col justify-start lg:justify-center overflow-hidden hero-poster-container"
    >
      <div className="hero-poster-overlay" />
      <div ref={glowRef} className="absolute inset-0 pointer-events-none z-[2]" />
      <div className="noise-overlay absolute inset-0 pointer-events-none z-[3]" />

      {/* ── Copy + CTAs ── */}
      <motion.div
        className="hero-content-pad relative z-10 max-w-[1600px] w-full mx-auto px-5 sm:px-8 md:px-16 lg:pt-32 pb-8 flex-1 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8"
        style={{ y: headlineY, opacity: headlineOpacity }}
      >
        <div className="w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Tag pill */}
          <div className="flex items-center gap-2.5 mb-6 px-4 py-1.5 rounded-full glass-subtle border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] text-accent uppercase font-medium">
              Top Tier Creator Partnerships
            </span>
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 45, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-heading font-extrabold leading-[1.05] mb-8 tracking-[-0.03em] text-text w-full"
            style={{ fontSize: 'clamp(32px, 8vw, 110px)' }}
          >
            We shape{' '}
            <span className="inline-block text-accent"><RotatingText /></span>
            <br />for modern brands.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 35, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-body text-text-muted text-[15px] md:text-[19px] leading-[1.7] max-w-[620px] mb-12 font-light"
          >
            A cross-functional team bridging the gap between raw creator talent
            and scalable brand growth. No fluff, just results.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.55, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start items-center"
          >
            <MagneticButton
              to="/contact"
              className="gradient-btn cta-pulse px-10 py-5 rounded-full font-body text-[16px] font-semibold tracking-wide no-underline flex items-center justify-center w-full sm:w-auto"
            >
              <span>Start a Project</span>
            </MagneticButton>
            <MagneticButton
              to="/work"
              className="ghost-btn px-10 py-5 rounded-full font-body text-[16px] font-medium tracking-wide no-underline flex items-center justify-center w-full sm:w-auto"
            >
              Explore Our Work
            </MagneticButton>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Brand Ticker — full width, anchored above marquee ── */}
      <div className="relative z-10 w-full pb-10 px-0">
        <BrandLogoTicker />
      </div>

      <div className="hero-poster-mask" />

      <div className="mt-auto relative z-20">
        <MarqueeTicker />
      </div>
    </section>
  )
}
