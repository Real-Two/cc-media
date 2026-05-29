import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import RotatingText from './RotatingText'
import MarqueeTicker from './MarqueeTicker'

// Interactive Showcase Card Component for Brands
function ShowcaseCard({ brand, stats, logo, themeClass, className }) {
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)

  const isRevealed = hovered || active

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setActive(!active)}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`relative overflow-hidden rounded-3xl border border-white/5 p-6 min-h-[140px] md:min-h-[155px] flex flex-col justify-between cursor-pointer transition-all duration-500 ${themeClass} ${className}`}
    >
      {/* Background overlay animations */}
      {brand === 'WishCare' && <div className="brand-wishcare-glow" />}
      {brand === 'Philips' && <div className="brand-philips-radar" />}
      {brand === 'BlaBliBlü' && <div className="brand-blabliblu-glitch" />}

      {/* Card HUD Elements */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between flex-1">
        {/* Top Status */}
        <div className="flex justify-between items-center w-full">
          <span className="font-mono text-[9px] tracking-widest text-text-muted/40 uppercase font-medium">
            CASE STUDY
          </span>
          <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            brand === 'Himalaya' ? 'bg-[#2e7d32]' :
            brand === 'WishCare' ? 'bg-[#e91e63]' :
            brand === 'Philips' ? 'bg-[#005cbb]' :
            brand === 'Head & Shoulders' ? 'bg-[#00a3e0]' :
            'bg-[#a78bfa]'
          } ${isRevealed ? 'animate-ping scale-150' : 'opacity-60'}`} />
        </div>

        {/* Center Graphic/Text */}
        <div className="my-auto py-3">
          {isRevealed ? (
            <motion.div
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-1"
            >
              {stats.split('//').map((part, index) => (
                <div key={index} className="font-mono font-bold text-xs sm:text-[13px] md:text-sm tracking-wider text-text uppercase">
                  {part.trim()}
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex items-center text-text"
            >
              {logo}
            </motion.div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center w-full">
          <span className={`font-mono text-[9px] tracking-wider transition-colors duration-300 font-medium ${isRevealed ? 'text-accent' : 'text-text-muted/40'}`}>
            {isRevealed ? 'REVEALED' : 'HOVER TO REVEAL'}
          </span>
          <svg className={`w-3.5 h-3.5 transition-transform duration-500 ${isRevealed ? 'rotate-45 text-accent' : 'text-text-muted/40'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
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

  // Brand Logo Helpers
  const himalayaLogo = (
    <div className="flex items-center gap-2.5">
      <svg className="w-7 h-7 text-[#2e7d32]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C8.14,18.63 9.62,17.64 11.5,16.89C13,16.29 14.5,16 16,16C18,16 20,17 21,18.5C21.07,15.5 19.5,11.5 17,8M16,14C14.7,14 13.5,14.3 12.3,14.8C10.7,15.5 9.3,16.3 8,17.2C10.5,14 13.25,11.8 17.5,11.2C18.25,12.1 18.5,13.25 18.5,14H16Z" />
      </svg>
      <span className="font-heading text-base md:text-lg tracking-wider text-text font-bold">
        Himalaya
      </span>
    </div>
  )

  const wishcareLogo = (
    <div className="flex items-center gap-2">
      <svg className="w-6 h-6 text-[#e91e63]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
      </svg>
      <span className="font-heading text-base md:text-lg tracking-wide text-text font-bold">
        WishCare
      </span>
    </div>
  )

  const philipsLogo = (
    <div className="flex items-center gap-2">
      <svg className="w-5.5 h-5.5 text-[#005cbb]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
      <span className="font-heading text-[13px] md:text-[15px] font-extrabold tracking-[0.2em] text-text">
        PHILIPS
      </span>
    </div>
  )

  const headShouldersLogo = (
    <div className="flex items-center gap-2">
      <svg className="w-6 h-6 text-[#00a3e0]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12C20,14.5 18.8,16.8 17,18.3C15.8,17 14.1,16 12,16C8.5,16 5.5,18.5 5,21.8C3.1,19.6 2,16.9 2,14C2,8.5 6.5,4 12,4Z" />
      </svg>
      <span className="font-body text-[12px] md:text-[13px] font-light lowercase tracking-tighter text-text">
        head & shoulders
      </span>
    </div>
  )

  const blablibluLogo = (
    <div className="flex items-center gap-2">
      <svg className="w-5.5 h-5.5 text-[#a78bfa]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.7C10,21.9 9.75,22 9,22Z" />
      </svg>
      <span className="font-mono text-[12px] md:text-[13px] font-bold tracking-tight text-text">
        BlaBliBlü
      </span>
    </div>
  )

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

      {/* Content wrapper - Split Hero Layout */}
      <motion.div
        style={{ y: headlineY, opacity: headlineOpacity }}
        className="relative z-10 max-w-[1600px] w-full mx-auto px-5 sm:px-8 md:px-12 pt-32 pb-16 flex-1 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-10"
      >
        {/* Left Column: Core Agency Value Pitch */}
        <div className="w-full lg:w-[52%] flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Tag */}
          <div className="flex items-center gap-2.5 mb-6 px-4 py-1.5 rounded-full glass-subtle border border-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-[10px] md:text-[11px] tracking-[0.25em] text-accent uppercase font-medium">
              Top Tier Creator Partnerships
            </span>
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-heading font-extrabold leading-[1.05] mb-8 tracking-[-0.03em] text-text w-full"
            style={{ fontSize: 'clamp(32px, 8.5vw, 110px)' }}
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
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6, delay: 0.35 }}
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

        {/* Right Column: Giant Asymmetric Brand Showcase Grid */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-[45%] flex flex-col justify-center items-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[550px] p-1.5 relative">
            <ShowcaseCard
              brand="Himalaya"
              stats="1.8M+ VIEWS // 4.1x ROI"
              logo={himalayaLogo}
              themeClass="brand-himalaya"
              className="sm:col-span-1"
            />
            <ShowcaseCard
              brand="WishCare"
              stats="1.2M+ VIEWS // 3.2x ROI"
              logo={wishcareLogo}
              themeClass="brand-wishcare"
              className="sm:col-span-1"
            />
            <ShowcaseCard
              brand="Philips"
              stats="CREATOR CONTENT // 3.8x SCALE"
              logo={philipsLogo}
              themeClass="brand-philips"
              className="sm:col-span-2"
            />
            <ShowcaseCard
              brand="Head & Shoulders"
              stats="INFLUENCER CAMPAIGN // 2.1M+ REACH"
              logo={headShouldersLogo}
              themeClass="brand-headshoulders"
              className="sm:col-span-1"
            />
            <ShowcaseCard
              brand="BlaBliBlü"
              stats="2.5M+ REACH // 500K+ IMP."
              logo={blablibluLogo}
              themeClass="brand-blabliblu"
              className="sm:col-span-1"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Marquee */}
      <div className="mt-auto relative z-20">
        <MarqueeTicker />
      </div>
    </section>
  )
}
