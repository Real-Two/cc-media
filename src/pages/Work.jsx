import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'

const projects = [
  { brand: 'Himalaya', type: 'Reels & Storytelling Campaign', stat: '1.8M+ Views | 4.1x ROI', image: '/brands/himalya.jpg' },
  { brand: 'WishCare', type: 'Creator Partnership & Shorts', stat: '1.2M+ Views | 3.2x ROI', image: '/brands/wishcare.jpg' },
  { brand: 'BlaBliBlü', type: 'Influencer & Meta Ad Campaign', stat: '2.5M+ Reach | 500K+ Imp.', image: '/brands/blabliblu.jpg' },
  { brand: 'Philips', type: 'Brand Campaign & Creator Content', stat: '', image: '/brands/philips.jpg' },
  { brand: 'Head & Shoulders', type: 'Influencer Partnership', stat: '', image: '/brands/headnshoulders.png' },
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
      <section className="pb-24 flex-1">
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

      {/* Expert Panel Section */}
      <section className="pb-48 md:pb-64 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple/5 to-transparent pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-5 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-subtle"
              >
                <Sparkles className="w-4 h-4 text-purple-light" />
                <span className="font-mono text-[11px] tracking-[0.2em] text-purple-light uppercase font-medium">
                  IP Initiative
                </span>
              </motion.div>

              <div className="space-y-4">
                <h2 className="font-heading text-4xl md:text-5xl font-extrabold text-text tracking-[-0.02em] leading-[1.1]">
                  The Expert Panel<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-light via-cyan to-accent animate-pulse">
                    Initiative.
                  </span>
                </h2>
                <p className="text-text-muted text-lg leading-relaxed">
                  Beyond traditional ads, we create value-first awareness drives. We orchestrate intellectual panels where top-tier creators address complex subjects—like personal finance, career growth, and market trends—in a highly digestible, authentic format.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-purple-light shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-text mb-1">Value-First Content</h4>
                    <p className="text-text-muted text-[14px]">No sales pitches. Purely educational content focused on solving real-world questions.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-cyan shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-bold text-text mb-1">Trust-Based ROI</h4>
                    <p className="text-text-muted text-[14px]">By educating instead of pitching, we build organic trust and unparalleled brand authority.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Expert Panel Image Representation */}
            <div className="lg:col-span-7 flex justify-center items-center relative w-full">
              {/* Background ambient glows */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-purple/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] bg-cyan/10 rounded-full blur-[60px] pointer-events-none" />

              <TiltCard className="group glass rounded-3xl overflow-hidden cursor-default w-full max-w-[540px] hover:shadow-[0_30px_70px_rgba(0,0,0,0.5)] transition-shadow duration-300 border border-white/5">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src="/brands/expert_panel.jpg"
                    alt="CollabCell Media Expert Panel"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-105"
                    loading="lazy"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-transparent to-transparent pointer-events-none" />
                </div>
                
                {/* Info Footer */}
                <div className="p-8 space-y-3 bg-bg/90 backdrop-blur-md relative z-10 border-t border-white/5">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-[10px] tracking-[0.15em] text-purple-light uppercase font-semibold">
                      IP Initiative Case Study
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-text tracking-[-0.01em]">
                    Finance Awareness Panels
                  </h3>
                  <div className="flex justify-between items-center pt-3 border-t border-white/5">
                    <div>
                      <p className="font-mono text-[9px] text-text-muted uppercase tracking-wider">Reach Impact</p>
                      <p className="font-heading text-md font-bold text-text">4.2M+ Views</p>
                    </div>
                    <div className="text-right">
                      <p className="font-mono text-[9px] text-text-muted uppercase tracking-wider">Viewer Sentiment</p>
                      <p className="font-heading text-md font-bold text-cyan">98.4% Positive</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>

          </div>
        </div>
      </section>
    </motion.main>
  )
}
