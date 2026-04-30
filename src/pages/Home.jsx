import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import AudienceCards from '../components/AudienceCards'
import PhilosophySection from '../components/PhilosophySection'
import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'

const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'audience', label: 'Audience' },
  { id: 'philosophy', label: 'Philosophy' },
  { id: 'stats', label: 'Stats' },
  { id: 'cta', label: 'CTA' },
]

function SectionNav() {
  const [active, setActive] = useState('hero')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400)

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight * 0.4) {
            setActive(sections[i].id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="nav-dots"
        >
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`nav-dot ${active === s.id ? 'active' : ''}`}
              aria-label={`Scroll to ${s.label}`}
              title={s.label}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SectionDivider() {
  return (
    <div className="max-w-[1400px] mx-auto px-6 md:px-12">
      <div className="section-divider" />
    </div>
  )
}

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <SectionNav />

      <div id="hero">
        <HeroSection />
      </div>

      <div className="pb-40">
        <SectionDivider />
        <div id="audience" className="pt-24 md:pt-40">
          <AudienceCards />
        </div>

        <SectionDivider />
        <div id="philosophy" className="pt-24 md:pt-40">
          <PhilosophySection />
        </div>

        <SectionDivider />
        <div id="stats" className="pt-24 md:pt-40">
          <StatsSection />
        </div>
      </div>

      <div id="cta">
        <CTASection />
      </div>
    </motion.main>
  )
}
