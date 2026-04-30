import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
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
    desc: "Connecting the right talent to the right brand. Every match is intentional, every result is measurable. Our network spans 500+ creators.",
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

function VideoPlayer({ src }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {})
        } else {
          videoRef.current?.pause()
        }
      },
      { threshold: 0.5 }
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      muted
      playsInline
      loop
      className="absolute inset-0 w-full h-full object-cover"
    />
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

      {/* Sticky Cards Scroll Section */}
      <section className="pb-48 md:pb-64 px-5 sm:px-8 md:px-12 max-w-[1400px] mx-auto relative">
        <div className="flex flex-col gap-0 pb-[10vh]">
          {services.map((service, i) => {
            const colors = colorStyles[service.color]
            return (
              <div
                key={service.num}
                className="sticky top-[120px] pt-[20px] h-auto min-h-[60vh] w-full flex justify-center"
                style={{ zIndex: i + 1 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-full bg-bg-card border border-border rounded-3xl p-8 md:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col md:flex-row gap-12 md:gap-20 items-center transform transition-all duration-500 hover:-translate-y-2 hover:border-border-hover group"
                >
                  {/* Text */}
                  <div className="flex-1">
                    <span className="font-mono text-[50px] md:text-[70px] font-bold text-text-dim/20 -ml-2 block leading-none">
                      {service.num}
                    </span>
                    <div className="flex items-center gap-4 mb-6 -mt-6 relative z-10">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        className={`w-14 h-14 rounded-2xl ${colors.iconBg} flex items-center justify-center border`}
                      >
                        <service.icon size={28} className={colors.iconColor} />
                      </motion.div>
                      <h2 className="font-heading text-3xl md:text-5xl font-bold text-text tracking-[-0.02em]">
                        {service.name}
                      </h2>
                    </div>
                    <p className="font-body text-text-muted text-[15px] md:text-[17px] leading-[1.7] mb-10 font-light max-w-[500px]">
                      {service.desc}
                    </p>
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.2em] text-text-muted uppercase mb-5 font-medium">
                        What's Included
                      </p>
                      <ul className="space-y-4">
                        {service.includes.map((item) => (
                          <li
                            key={item}
                            className="font-body text-[14px] text-text-muted flex items-center gap-4 font-light"
                          >
                            <span
                              className={`w-2 h-2 rounded-full ${colors.dotBg} shrink-0 ${colors.dotGlow}`}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* Visual */}
                  <div className="flex-1 w-full h-full min-h-[300px] md:min-h-[500px] relative rounded-2xl overflow-hidden bg-bg-elevated border border-border flex items-center justify-center group/visual">
                    {service.videoSrc ? (
                      <VideoPlayer src={service.videoSrc} />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-purple/5 group-hover/visual:scale-105 transition-transform duration-700" />
                        <service.icon
                          size={120}
                          className={`${colors.iconColor} opacity-10 group-hover/visual:opacity-30 transition-all duration-500 transform group-hover/visual:scale-110`}
                        />
                      </>
                    )}
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </section>
    </motion.main>
  )
}
