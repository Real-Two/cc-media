import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  { brand: 'Himalaya', type: 'Instagram Reels Series', stat: '1.8M+ Views', image: '/brands/himalaya.jpg' },
  { brand: 'WishCare', type: 'Creator-Brand Partnership', stat: '3.2x ROI', image: '/brands/wishcare.jpg' },
  { brand: 'BlaBliBlü', type: 'Meta Ad Campaign', stat: '500K+ Impressions', image: '/brands/blabliblu.jpg' },
  { brand: 'Himalaya', type: 'Storytelling Campaign', stat: '4.1x ROI', image: '/brands/himalaya.jpg' },
  { brand: 'WishCare', type: 'YouTube Shorts', stat: '1.2M+ Views', image: '/brands/wishcare.jpg' },
  { brand: 'BlaBliBlü', type: 'Influencer Campaign', stat: '2.5M+ Reach', image: '/brands/blabliblu.jpg' },
]

function TiltCard({ children, className }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ rotateX: y * -8, rotateY: x * 8 })
  }

  const handleMouseLeave = () => setTilt({ rotateX: 0, rotateY: 0 })

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={tilt}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Work() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative min-h-[80vh] flex flex-col"
    >
      {/* Hero */}
      <section className="pt-48 pb-24 md:pt-56 md:pb-32 flex flex-col items-center text-center relative">
        <div className="absolute inset-0 hero-gradient-bg opacity-50" />
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 w-full relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}
            className="inline-block px-5 py-2.5 rounded-full glass-subtle mb-8"
          >
            <span className="font-mono text-[12px] md:text-[13px] tracking-[0.2em] text-accent uppercase font-medium">Our Work</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-text mb-6 leading-[1] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(48px, 10vw, 120px)' }}
          >
            Campaigns that<br /><span className="accent-text">get results.</span>
          </motion.h1>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-48 md:pb-64 flex-1">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: 'easeOut' }}
              >
                <TiltCard className="group glass rounded-3xl overflow-hidden cursor-default hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)] transition-shadow duration-300">
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={`CollabCell Media x ${project.brand}`}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-6">
                      <motion.span
                        initial={{ y: 10, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        className="font-heading text-text text-lg font-bold"
                      >
                        View Details →
                      </motion.span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-8">
                    <p className="font-mono text-[11px] tracking-[0.15em] text-accent uppercase mb-3 font-medium">{project.type}</p>
                    <h3 className="font-heading text-2xl font-bold text-text mb-4 tracking-[-0.01em]">{project.brand}</h3>
                    <div className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                      <span className="font-mono text-text-muted text-[14px] font-medium">{project.stat}</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  )
}
