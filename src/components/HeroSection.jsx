import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import RotatingText from './RotatingText'
import MarqueeTicker from './MarqueeTicker'

// Brand Logo Sub-component (returns stylized inline SVGs of the brand logos)
function BrandLogo({ brand, hovered }) {
  if (brand === 'Himalaya') {
    return (
      <div className="flex items-center gap-2">
        {/* Organic Leaf Icon */}
        <svg className={`w-5 h-5 transition-colors duration-300 ${hovered ? 'text-[#2e7d32]' : 'text-text/40'}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C8.14,18.63 9.62,17.64 11.5,16.89C13,16.29 14.5,16 16,16C18,16 20,17 21,18.5C21.07,15.5 19.5,11.5 17,8M16,14C14.7,14 13.5,14.3 12.3,14.8C10.7,15.5 9.3,16.3 8,17.2C10.5,14 13.25,11.8 17.5,11.2C18.25,12.1 18.5,13.25 18.5,14H16Z" />
        </svg>
        <span className={`font-heading text-xs tracking-wider transition-colors duration-300 font-semibold ${hovered ? 'text-[#2e7d32]' : 'text-text/40'}`}>
          Himalaya
        </span>
      </div>
    )
  }
  
  if (brand === 'Philips') {
    return (
      <div className="flex items-center gap-2">
        {/* Shield Icon */}
        <svg className={`w-4 h-4 transition-colors duration-300 ${hovered ? 'text-[#005cbb]' : 'text-text/40'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
        <span className={`font-heading text-[11px] font-extrabold tracking-[0.15em] transition-colors duration-300 ${hovered ? 'text-[#005cbb]' : 'text-text/40'}`}>
          PHILIPS
        </span>
      </div>
    )
  }

  if (brand === 'Head & Shoulders') {
    return (
      <div className="flex items-center gap-1.5">
        {/* Swirl/Wave Icon */}
        <svg className={`w-4.5 h-4.5 transition-colors duration-300 ${hovered ? 'text-[#00a3e0]' : 'text-text/40'}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.5 18.8,16.8 17,18.3C15.8,17 14.1,16 12,16C8.5,16 5.5,18.5 5,21.8C3.1,19.6 2,16.9 2,14C2,8.5 6.5,4 12,4Z" />
        </svg>
        <span className={`font-body text-[10px] font-light lowercase tracking-tight transition-colors duration-300 ${hovered ? 'text-[#00a3e0]' : 'text-text/40'}`}>
          head & shoulders
        </span>
      </div>
    )
  }

  if (brand === 'WishCare') {
    return (
      <div className="flex items-center gap-1.5">
        {/* Heart Leaf Icon */}
        <svg className={`w-4 h-4 transition-colors duration-300 ${hovered ? 'text-[#e91e63]' : 'text-text/40'}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
        </svg>
        <span className={`font-heading text-xs font-semibold tracking-wide transition-colors duration-300 ${hovered ? 'text-[#e91e63]' : 'text-text/40'}`}>
          WishCare
        </span>
      </div>
    )
  }

  if (brand === 'BlaBliBlü') {
    return (
      <div className="flex items-center gap-1.5">
        {/* Speech/Quote Icon */}
        <svg className={`w-4 h-4 transition-colors duration-300 ${hovered ? 'text-[#a78bfa]' : 'text-text/40'}`} viewBox="0 0 24 24" fill="currentColor">
          <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.7C10,21.9 9.75,22 9,22Z" />
        </svg>
        <span className={`font-mono text-[10px] font-bold tracking-tight transition-colors duration-300 ${hovered ? 'text-[#a78bfa]' : 'text-text/40'}`}>
          BlaBliBlü
        </span>
      </div>
    )
  }

  return null
}

// Brand Logo Card Wrapper
function BrandCard({ brand }) {
  const [hovered, setHovered] = useState(false)
  
  const glowShadowMap = {
    'Himalaya': 'hover:shadow-[0_0_30px_rgba(46,125,50,0.25)] hover:border-[#2e7d32]/45',
    'Philips': 'hover:shadow-[0_0_30px_rgba(0,92,187,0.25)] hover:border-[#005cbb]/45',
    'Head & Shoulders': 'hover:shadow-[0_0_30px_rgba(0,163,224,0.25)] hover:border-[#00a3e0]/45',
    'WishCare': 'hover:shadow-[0_0_30px_rgba(233,30,99,0.25)] hover:border-[#e91e63]/45',
    'BlaBliBlü': 'hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] hover:border-[#a78bfa]/45',
  }

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ scale: 1.05, y: -2 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={`px-5 py-3.5 rounded-2xl glass-subtle border border-white/5 transition-all duration-300 flex items-center justify-center cursor-pointer min-h-[50px] ${glowShadowMap[brand]}`}
    >
      <BrandLogo brand={brand} hovered={hovered} />
    </motion.div>
  )
}

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
      className="w-full sm:w-auto"
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
        className="relative z-10 max-w-[1600px] w-full mx-auto px-5 sm:px-8 md:px-12 pt-32 pb-16 flex-1 flex flex-col justify-center items-center text-center"
      >
        <div className="max-w-[1100px] flex flex-col items-center">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading font-extrabold leading-[1.05] mb-8 tracking-[-0.03em] text-text w-full"
            style={{ fontSize: 'clamp(32px, 9vw, 130px)' }}
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
            className="font-body text-text-muted text-[15px] md:text-[21px] leading-[1.7] max-w-[700px] mb-14 font-light px-2"
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
            className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center px-4 sm:px-0"
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

          {/* Trusted By Section (Idea 1 - Dope Glassmorphic Logo Dock) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-20 md:mt-24 w-full max-w-[850px]"
          >
            <p className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] text-text-muted/50 uppercase mb-6 font-medium">
              Trusted by leading brands
            </p>
            <div className="grid grid-cols-2 min-[500px]:grid-cols-3 sm:flex sm:flex-wrap justify-center gap-3 md:gap-4 px-4">
              {['Himalaya', 'WishCare', 'Philips', 'Head & Shoulders', 'BlaBliBlü'].map((brand) => (
                <BrandCard key={brand} brand={brand} />
              ))}
            </div>
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
