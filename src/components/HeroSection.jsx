import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import RotatingText from './RotatingText'
import MarqueeTicker from './MarqueeTicker'

const brandCards = [
  {
    image: '/brands/himalya.jpg',
    brand: 'Himalaya',
    position: 'top-[8%] sm:top-[12%] left-[2%] sm:left-[5%] md:left-[8%]',
    rotate: -12,
    scale: 0.85,
    blurRadius: 1.5,
    initialOpacity: 0.15,
    delay: 0,
    depth: 0.15,
  },
  {
    image: '/brands/wishcare.jpg',
    brand: 'WishCare',
    position: 'top-[16%] sm:top-[22%] right-[2%] sm:right-[5%] md:right-[8%]',
    rotate: 15,
    scale: 0.9,
    blurRadius: 1,
    initialOpacity: 0.2,
    delay: 1.5,
    depth: 0.22,
  },
  {
    image: '/brands/blabliblu.jpg',
    brand: 'BlaBliBlü',
    position: 'bottom-[25%] sm:bottom-[32%] left-[4%] sm:left-[6%] md:left-[10%]',
    rotate: 8,
    scale: 0.95,
    blurRadius: 0,
    initialOpacity: 0.25,
    delay: 0.8,
    depth: 0.3,
  },
  {
    image: '/brands/philips.jpg',
    brand: 'Philips',
    position: 'bottom-[12%] sm:bottom-[18%] right-[4%] sm:right-[8%] md:right-[12%]',
    rotate: -8,
    scale: 0.8,
    blurRadius: 2,
    initialOpacity: 0.15,
    delay: 2.2,
    depth: 0.1,
  },
  {
    image: '/brands/headnshoulders.png',
    brand: 'Head & Shoulders',
    position: 'top-[42%] sm:top-[48%] right-[1%] sm:right-[2%] md:right-[4%]',
    rotate: -15,
    scale: 0.75,
    blurRadius: 1.5,
    initialOpacity: 0.18,
    delay: 3,
    depth: 0.18,
  },
]

function FloatingBrandCard({ card, mouseX, mouseY }) {
  const [hovered, setHovered] = useState(false)
  
  const x = useTransform(mouseX, (val) => val * card.depth * (hovered ? 120 : 70))
  const y = useTransform(mouseY, (val) => val * card.depth * (hovered ? 120 : 70))

  return (
    <motion.div
      style={{ x, y }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      animate={{
        y: hovered ? -12 : [0, -8, 0], // floats higher when hovered
      }}
      transition={{
        y: {
          duration: hovered ? 0.3 : 6,
          repeat: hovered ? 0 : Infinity,
          ease: "easeInOut",
          delay: hovered ? 0 : card.delay,
        }
      }}
      className={`absolute ${card.position} z-[3] pointer-events-auto select-none hidden md:block`}
    >
      <motion.div
        animate={{
          scale: hovered ? card.scale * 1.12 : card.scale,
          rotate: hovered ? card.rotate * 0.4 : card.rotate,
          filter: hovered ? 'blur(0px) grayscale(0%)' : `blur(${card.blurRadius}px) grayscale(100%)`,
          opacity: hovered ? 0.95 : card.initialOpacity,
          borderColor: hovered ? 'rgba(6, 182, 212, 0.4)' : 'rgba(255, 255, 255, 0.05)',
          boxShadow: hovered 
            ? '0 25px 60px rgba(6, 182, 212, 0.25)' 
            : '0 15px 35px rgba(0, 0, 0, 0.5)',
        }}
        transition={{ type: 'spring', stiffness: 220, damping: 22 }}
        className="w-[100px] sm:w-[130px] md:w-[190px] aspect-[4/3] rounded-2xl overflow-hidden glass border cursor-pointer relative"
      >
        <img
          src={card.image}
          alt={card.brand}
          className="w-full h-full object-cover pointer-events-none"
        />
        {/* Soft dark mask when not hovered */}
        <div className={`absolute inset-0 bg-bg/40 transition-opacity duration-300 pointer-events-none ${hovered ? 'opacity-0' : 'opacity-100'}`} />
      </motion.div>
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

  // Framer Motion values for mouse position relative to window center
  const mouseX = useSpring(0, { stiffness: 60, damping: 20 })
  const mouseY = useSpring(0, { stiffness: 60, damping: 20 })

  // Parallax transforms for orbs
  const orbY1 = useTransform(scrollYProgress, [0, 0.3], [0, -80])
  const orbY2 = useTransform(scrollYProgress, [0, 0.3], [0, -50])
  const orbY3 = useTransform(scrollYProgress, [0, 0.3], [0, -120])
  // Subtle parallax on headline
  const headlineY = useTransform(scrollYProgress, [0, 0.2], [0, 30])
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0.3])

  // Cursor-following glow effect and mouse coordinate tracking
  useEffect(() => {
    const hero = heroRef.current
    const glow = glowRef.current
    if (!hero || !glow) return

    let rafId = null
    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Normalize position to [-0.5, 0.5] range
      const normX = (e.clientX / window.innerWidth) - 0.5
      const normY = (e.clientY / window.innerHeight) - 0.5
      mouseX.set(normX)
      mouseY.set(normY)

      if (rafId) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(() => {
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

      {/* Floating Holographic Brand Cards */}
      {brandCards.map((card, idx) => (
        <FloatingBrandCard
          key={idx}
          card={card}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}

      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0 pointer-events-none z-[2]" />

      {/* Content */}
      <motion.div
        style={{ y: headlineY, opacity: headlineOpacity }}
        className="relative z-10 max-w-[1600px] w-full mx-auto px-5 sm:px-8 md:px-12 pt-36 pb-24 flex-1 flex flex-col justify-center items-center text-center"
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
        </div>
      </motion.div>

      {/* Marquee */}
      <div className="mt-auto relative z-20">
        <MarqueeTicker />
      </div>
    </section>
  )
}
