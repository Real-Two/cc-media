import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  Film,
  Video,
  Target,
  Clapperboard,
  LayoutDashboard,
  Handshake,
} from 'lucide-react'

const services = [
  {
    icon: Film,
    num: '01',
    name: 'Instagram Reels',
    desc: "Scroll-stopping short-form video that captures attention in the first frame and holds it till the last. We handle concept, scripting, filming direction, and editing.",
    includes: [
      'Creative concept development',
      'Script & storyboard',
      'Creator casting & management',
      'Post-production & delivery',
      'Performance analytics',
    ],
    videoSrc: '/services/instagram-reels.mp4',
    color: 'accent',
  },
  {
    icon: Video,
    num: '02',
    name: 'YouTube Shorts',
    desc: "Quick, impactful storytelling that scales your brand presence across the world's largest video platform. Optimised for discovery and engagement.",
    includes: [
      'Channel strategy',
      'Content calendar planning',
      'Shorts production',
      'SEO & thumbnail optimization',
      'Audience growth tracking',
    ],
    videoSrc: '/services/youtube-shorts.mp4',
    color: 'purple',
  },
  {
    icon: Target,
    num: '03',
    name: 'Meta Ad Campaigns',
    desc: 'Targeted growth that scales — precision advertising backed by data, creativity, and real-time optimisation across Facebook and Instagram.',
    includes: [
      'Audience research & targeting',
      'Ad creative production',
      'A/B testing frameworks',
      'Budget optimization',
      'Conversion tracking & reporting',
    ],
    color: 'cyan',
  },
  {
    icon: Clapperboard,
    num: '04',
    name: 'Storytelling Ad Campaigns',
    desc: 'Cinematic content that converts. We craft narratives that make audiences feel, remember, and act — from concept to final cut.',
    includes: [
      'Brand narrative development',
      'Cinematic production',
      'Multi-platform adaptation',
      'Emotional engagement strategy',
      'Campaign launch & management',
    ],
    color: 'accent',
  },
  {
    icon: LayoutDashboard,
    num: '05',
    name: 'Full Influencer Strategy',
    desc: 'End-to-end partnerships and execution — from discovery to deployment to performance tracking. We manage the entire influencer lifecycle.',
    includes: [
      'Influencer discovery & vetting',
      'Campaign strategy & briefs',
      'Contract & negotiations',
      'Content approval workflows',
      'ROI measurement & reporting',
    ],
    color: 'purple',
  },
  {
    icon: Handshake,
    num: '06',
    name: 'Creator-Brand Matchmaking',
    desc: "Connecting the right talent to the right brand. Every match is intentional, every result is measurable. Our network spans 1 lakh+ creators.",
    includes: [
      'Creator database access',
      'Brand alignment scoring',
      'Collaboration proposals',
      'Relationship management',
      'Long-term partnership building',
    ],
    color: 'cyan',
  },
]

const colorStyles = {
  accent: {
    iconBg: 'bg-accent/10 border-accent/20',
    iconColor: 'text-accent',
    dotGlow: 'shadow-[0_0_8px_rgba(255,107,53,0.6)]',
    dotBg: 'bg-accent',
  },
  purple: {
    iconBg: 'bg-purple/10 border-purple/20',
    iconColor: 'text-purple-light',
    dotGlow: 'shadow-[0_0_8px_rgba(124,58,237,0.6)]',
    dotBg: 'bg-purple',
  },
  cyan: {
    iconBg: 'bg-cyan/10 border-cyan/20',
    iconColor: 'text-cyan-light',
    dotGlow: 'shadow-[0_0_8px_rgba(6,182,212,0.6)]',
    dotBg: 'bg-cyan',
  },
}

const TOTAL = services.length

function ServiceCard({ service, index, carouselRef }) {
  const cardRef = useRef(null)
  const colors = colorStyles[service.color]

  // Track this card's position inside the horizontal scroll container
  const { scrollXProgress } = useScroll({
    target: cardRef,
    container: carouselRef,
    axis: 'x',
    offset: ['start end', 'end start'], // 0 when entering right, 0.5 centered, 1 exiting left
  })

  // ANTI-GRAVITY / MAGNETIC PARALLAX PHYSICS
  // Entering (0 -> 0.5): Card starts pushed further right (40%), and moves left faster than the scroll to snap into center (0%). This creates a strong "pulled in" deceleration effect.
  // Exiting (0.5 -> 1.0): Card starts center (0%) and moves further left (-40%) than normal scroll, making it accelerate out like it's being repelled.
  const x = useTransform(scrollXProgress, [0, 0.5, 1], ['40%', '0%', '-40%'])
  
  // Scale: Enlarges smoothly when hitting the center, shrinks when exiting
  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [0.75, 1, 0.75])
  
  // Opacity: Fades in early, fades out late for smooth visual overlap
  const opacity = useTransform(scrollXProgress, [0, 0.3, 0.5, 0.7, 1], [0, 1, 1, 1, 0])

  return (
    <section 
      ref={cardRef} 
      className="w-screen h-screen flex-shrink-0 snap-center flex items-center justify-center px-5 sm:px-8 md:px-12 py-8 relative"
    >
      <motion.div 
        style={{ x, scale, opacity }}
        className="w-full max-w-[1400px] mx-auto bg-bg-card border border-border rounded-3xl p-8 md:p-14 shadow-[0_24px_80px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-10 md:gap-16 items-center h-full max-h-[85vh] will-change-transform"
      >
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          <span className="font-mono text-[50px] md:text-[70px] font-bold text-text-dim/20 -ml-2 block leading-none">
            {service.num}
          </span>
          <div className="flex items-center gap-4 mb-5 -mt-6">
            <div className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center border shrink-0`}>
              <service.icon size={28} className={colors.iconColor} />
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-text tracking-[-0.02em]">
              {service.name}
            </h2>
          </div>
          <p className="font-body text-text-muted text-[15px] md:text-[17px] leading-[1.7] mb-8 font-light max-w-[500px]">
            {service.desc}
          </p>
          <div>
            <p className="font-mono text-[11px] tracking-[0.2em] text-text-muted uppercase mb-4 font-medium">
              What's Included
            </p>
            <ul className="space-y-3">
              {service.includes.map((item) => (
                <li key={item} className="font-body text-[14px] text-text-muted flex items-center gap-4 font-light">
                  <span className={`w-2 h-2 rounded-full ${colors.dotBg} shrink-0 ${colors.dotGlow}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Visual */}
        <div className="flex-1 w-full relative rounded-2xl overflow-hidden bg-bg-elevated border border-border flex items-center justify-center self-stretch min-h-[300px]">
          {service.videoSrc ? (
            <video
              src={service.videoSrc}
              muted
              playsInline
              loop
              autoPlay
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple/5" />
              <service.icon size={120} className={`${colors.iconColor} opacity-10`} />
            </>
          )}
        </div>
      </motion.div>
    </section>
  )
}

function CardCarousel() {
  const carouselRef = useRef(null)
  const [active, setActive] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Update active dot indicator based on horizontal scroll position
  const handleScroll = () => {
    if (!carouselRef.current) return
    const scrollLeft = carouselRef.current.scrollLeft
    const width = carouselRef.current.clientWidth
    const index = Math.round(scrollLeft / width)
    if (index !== active) {
      setActive(index)
    }
  }

  // Momentum Physics: One wheel scroll gesture = one card transition
  useEffect(() => {
    const el = carouselRef.current
    if (!el) return

    let isScrolling = false
    let scrollTimeout

    const onWheel = (e) => {
      // Allow native horizontal swipes (like trackpads) to work natively with scroll-snap
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return

      // Only hijack vertical scroll if the carousel is mostly centered in the viewport
      const rect = el.getBoundingClientRect()
      if (Math.abs(rect.top) > 100) return

      const isAtStart = el.scrollLeft <= 0
      const isAtEnd = Math.ceil(el.scrollLeft + el.clientWidth) >= el.scrollWidth

      // Allow vertical scroll out of the carousel at boundaries
      if (isAtStart && e.deltaY < 0) return
      if (isAtEnd && e.deltaY > 0) return

      // Hijack vertical wheel scroll to move horizontally
      e.preventDefault()
      e.stopPropagation()

      if (!isScrolling) {
        isScrolling = true
        
        // Calculate exact target to snap perfectly
        const direction = Math.sign(e.deltaY)
        const targetLeft = el.scrollLeft + (direction * el.clientWidth)
        
        el.scrollTo({
          left: targetLeft,
          behavior: 'smooth'
        })

        // Enforce intentional transition - block multiple fast scrolls
        scrollTimeout = setTimeout(() => {
          isScrolling = false
        }, 800)
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    return () => {
      el.removeEventListener('wheel', onWheel)
      clearTimeout(scrollTimeout)
    }
  }, [])

  return (
    <div className="relative w-full h-screen bg-bg">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      
      <div 
        ref={carouselRef}
        onScroll={handleScroll}
        className="w-full h-full flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory hide-scrollbar relative z-10"
      >
        {isMounted && services.map((service, i) => (
          <ServiceCard 
            key={service.num} 
            service={service} 
            index={i} 
            carouselRef={carouselRef} 
          />
        ))}
      </div>

      {/* Navigation Indicators */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              carouselRef.current?.scrollTo({
                left: i * window.innerWidth,
                behavior: 'smooth'
              })
            }}
            className="rounded-full transition-all duration-300 cursor-pointer p-1 -m-1"
            aria-label={`Go to slide ${i + 1}`}
          >
            <div
              className="rounded-full transition-all duration-300"
              style={{
                width: active === i ? '8px' : '6px',
                height: active === i ? '8px' : '6px',
                background: active === i ? 'var(--color-accent)' : 'rgba(255,255,255,0.2)',
                boxShadow: active === i ? '0 0 8px rgba(255,107,53,0.6)' : 'none',
              }}
            />
          </button>
        ))}
      </div>

      {/* Counter */}
      <div className="absolute top-6 right-8 z-50 font-mono text-[11px] tracking-[0.2em] text-text-dim/40 uppercase pointer-events-none">
        {String(active + 1).padStart(2, '0')} / {String(TOTAL).padStart(2, '0')}
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative"
    >
      {/* Hero */}
      <section className="pt-48 pb-24 md:pt-56 md:pb-32 flex flex-col items-center text-center relative">
        <div className="absolute inset-0 hero-gradient-bg opacity-50" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="inline-block px-5 py-2.5 rounded-full border border-border bg-bg-elevated/50 backdrop-blur-sm mb-8"
          >
            <span className="font-mono text-[12px] md:text-[13px] tracking-[0.2em] text-accent uppercase font-medium">
              Our Services
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-text mb-8 leading-[1] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(48px, 10vw, 120px)' }}
          >
            Everything your
            <br />
            <span className="accent-text">brand needs.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-text-muted text-[17px] md:text-[21px] leading-[1.7] max-w-[700px] mx-auto font-light"
          >
            From scroll-stopping Reels to full-scale influencer campaigns — we
            handle every layer of your digital story with precision and flair.
          </motion.p>
        </div>
      </section>

      {/* Horizontal Scroll Snap Carousel */}
      <CardCarousel />
      
      {/* Spacer to allow scrolling past carousel if needed, though footer comes next in layout */}
    </motion.main>
  )
}
