import { motion } from 'framer-motion'
import HeroSection from '../components/HeroSection'
import AudienceCards from '../components/AudienceCards'
import PhilosophySection from '../components/PhilosophySection'
import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className=""
    >
      <HeroSection />
      <div className="space-y-40 md:space-y-64 pb-40">
        <AudienceCards />
        <PhilosophySection />
        <StatsSection />
      </div>
      <CTASection />
    </motion.main>
  )
}
