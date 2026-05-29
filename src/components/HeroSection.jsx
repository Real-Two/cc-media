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

  // Subtle parallax on headline
  const headlineY = useTransform(scrollYProgress, [0, 0.25], [0, 40])
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.25])

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
        glow.style.background = `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 107, 53, 0.08), rgba(124, 58, 237, 0.05), transparent 70%)`
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
      className="min-h-screen relative flex flex-col justify-center overflow-hidden hero-poster-container"
    >
      {/* Dark readable overlay */}
      <div className="hero-poster-overlay" />

      {/* Cursor-following glow */}
      <div
        ref={glowRef}
        className="absolute inset-0 pointer-events-none z-[2]"
      />

      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 pointer-events-none z-[3]" />

      {/* Content wrapper - Overlay Layout */}
      <motion.div
        style={{ y: headlineY, opacity: headlineOpacity }}
        className="relative z-10 max-w-[1600px] w-full mx-auto px-5 sm:px-8 md:px-16 pt-32 pb-24 flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8"
      >
        {/* Left Column: Core Agency Value Pitch */}
        <div className="w-full lg:w-[55%] flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Tag */}
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
            <span className="inline-block text-accent">
              <RotatingText />
            </span>
            <br />
            for modern brands.
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

          {/* Magnetic CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.55,
              ease: [0.34, 1.56, 0.64, 1],
            }}
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

        {/* Right Column: Floating Interactive HUD Widgets */}
        <div className="w-full lg:w-[45%] h-[240px] sm:h-[300px] lg:h-[450px] relative flex items-center justify-center">
          
          {/* Himalaya Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: 60, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[5%] right-[2%] sm:right-[10%] w-[160px] lg:w-[240px] glass p-3 lg:p-4 rounded-2xl lg:rounded-3xl border border-[#2e7d32]/20 shadow-[0_0_35px_rgba(46,125,50,0.15)] animate-float-slow backdrop-blur-md cursor-pointer group"
            whileHover={{ scale: 1.04, borderColor: 'rgba(46,125,50,0.5)' }}
          >
            <div className="flex items-center justify-between mb-2 lg:mb-3">
              <div className="flex items-center gap-1.5 lg:gap-2">
                <svg className="w-4.5 h-4.5 lg:w-5.5 lg:h-5.5 text-[#2e7d32]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C8.14,18.63 9.62,17.64 11.5,16.89C13,16.29 14.5,16 16,16C18,16 20,17 21,18.5C21.07,15.5 19.5,11.5 17,8M16,14C14.7,14 13.5,14.3 12.3,14.8C10.7,15.5 9.3,16.3 8,17.2C10.5,14 13.25,11.8 17.5,11.2C18.25,12.1 18.5,13.25 18.5,14H16Z" />
                </svg>
                <span className="font-heading font-bold text-[10px] lg:text-xs tracking-wider text-text">Himalaya</span>
              </div>
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2e7d32] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#2e7d32]"></span>
              </span>
            </div>
            <div className="font-mono text-[8px] lg:text-[9px] text-text-muted/60 mb-0.5 tracking-wider">VIEWS SECURED</div>
            <div className="font-mono font-bold text-xs lg:text-base tracking-tight text-text">1.8M+ VIEWS</div>
            <div className="font-mono text-[7px] lg:text-[8px] text-[#2e7d32] mt-1 lg:mt-1.5 flex justify-between border-t border-white/5 pt-1 lg:pt-1.5">
              <span>ROI: 4.1x</span>
              <span className="opacity-75">REELS</span>
            </div>
          </motion.div>

          {/* WishCare Floating Card */}
          <motion.div
            initial={{ opacity: 0, x: -60, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-[5%] left-[2%] sm:left-[10%] w-[160px] lg:w-[240px] glass p-3 lg:p-4 rounded-2xl lg:rounded-3xl border border-[#e91e63]/20 shadow-[0_0_35px_rgba(233,30,99,0.15)] animate-float-medium backdrop-blur-md cursor-pointer group"
            whileHover={{ scale: 1.04, borderColor: 'rgba(233,30,99,0.5)' }}
          >
            <div className="flex items-center justify-between mb-2 lg:mb-3">
              <div className="flex items-center gap-1.5 lg:gap-2">
                <svg className="w-4 h-4 lg:w-5 lg:h-5 text-[#e91e63]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                </svg>
                <span className="font-heading font-bold text-[10px] lg:text-xs tracking-wider text-text">WishCare</span>
              </div>
              <span className="flex h-1.5 w-1.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e91e63] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#e91e63]"></span>
              </span>
            </div>
            <div className="font-mono text-[8px] lg:text-[9px] text-text-muted/60 mb-0.5 tracking-wider">CREATOR MATCHES</div>
            <div className="font-mono font-bold text-xs lg:text-base tracking-tight text-text">1.2M+ REACH</div>
            <div className="font-mono text-[7px] lg:text-[8px] text-[#e91e63] mt-1 lg:mt-1.5 flex justify-between border-t border-white/5 pt-1 lg:pt-1.5">
              <span>ROI: 3.2x</span>
              <span className="opacity-75">SHORTS</span>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Bottom overlay mask (smooth fade to dark) */}
      <div className="hero-poster-mask" />

      {/* Marquee */}
      <div className="mt-auto relative z-20">
        <MarqueeTicker />
      </div>
    </section>
  )
}
