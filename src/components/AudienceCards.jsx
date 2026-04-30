import { motion } from 'framer-motion'
import {
  Palette, TrendingUp, Heart, Zap,
  Target, Users, BarChart3, Shield,
} from 'lucide-react'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.15 } } }
const slideLeft = { hidden: { opacity: 0, x: -60 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } }
const slideRight = { hidden: { opacity: 0, x: 60 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } } }

const creatorPerks = [
  { icon: Palette, text: 'More creative freedom' },
  { icon: TrendingUp, text: 'Bigger brand deals' },
  { icon: Heart, text: 'Higher engagement' },
  { icon: Zap, text: 'Scale your influence' },
]

const brandPerks = [
  { icon: Users, text: 'Access to top talent' },
  { icon: BarChart3, text: 'Measurable ROI' },
  { icon: Target, text: 'Authentic engagement' },
  { icon: Shield, text: 'Brand loyalty' },
]

function PerkItem({ Icon, text, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ x: 8, scale: 1.02 }}
      className="flex items-center gap-5 glass-subtle p-3.5 rounded-2xl group-hover:border-border-hover transition-all duration-300 cursor-default"
    >
      <motion.div
        whileHover={{ scale: 1.2, rotate: 8 }}
        transition={{ type: 'spring', stiffness: 400 }}
        className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${
          color === 'accent'
            ? 'bg-accent/10 border border-accent/20'
            : 'bg-purple/10 border border-purple/20'
        }`}
      >
        <Icon size={20} className={color === 'accent' ? 'text-accent' : 'text-purple-light'} />
      </motion.div>
      <span className="font-body text-[15px] text-text font-medium">{text}</span>
    </motion.div>
  )
}

export default function AudienceCards() {
  return (
    <section className="relative overflow-hidden py-8 md:py-0">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-[13px] md:text-[14px] tracking-[0.2em] text-accent uppercase mb-6 font-medium">
            Who We Serve
          </p>
          <h2 className="font-heading font-extrabold text-text mb-20 leading-[1.1] tracking-[-0.03em]" style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}>
            Two audiences.
            <br />
            <span className="accent-text">One mission.</span>
          </h2>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="grid md:grid-cols-2 gap-8">
          {/* Creators Card */}
          <motion.div
            variants={slideLeft}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="gradient-glow-border glass rounded-3xl p-10 md:p-14 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-accent to-accent-light transition-all duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 pl-4 md:pl-6">
              <h3 className="font-heading text-4xl md:text-5xl font-extrabold text-text mb-4 tracking-[-0.02em]">
                Creators
              </h3>
              <p className="font-body text-text-muted text-[17px] mb-12 font-light max-w-[300px] leading-[1.7]">
                Turn your content into a career. We'll get you there.
              </p>
            </div>
            <div className="relative z-10 space-y-4">
              {creatorPerks.map(({ icon, text }, i) => (
                <PerkItem key={text} Icon={icon} text={text} color="accent" index={i} />
              ))}
            </div>
          </motion.div>

          {/* Brands Card */}
          <motion.div
            variants={slideRight}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="gradient-glow-border glass rounded-3xl p-10 md:p-14 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 h-[3px] w-0 group-hover:w-full bg-gradient-to-r from-purple to-purple-light transition-all duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 pl-4 md:pl-6">
              <h3 className="font-heading text-4xl md:text-5xl font-extrabold text-text mb-4 tracking-[-0.02em]">
                Brands
              </h3>
              <p className="font-body text-text-muted text-[17px] mb-12 font-light max-w-[300px] leading-[1.7]">
                Find the perfect creators for campaigns that convert.
              </p>
            </div>
            <div className="relative z-10 space-y-4">
              {brandPerks.map(({ icon, text }, i) => (
                <PerkItem key={text} Icon={icon} text={text} color="purple" index={i} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
