import { motion } from 'framer-motion'
import { Palette, TrendingUp, Heart, Zap, Target, Users, BarChart3, Shield } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

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
          <p className="font-body text-[14px] md:text-[16px] tracking-[0.2em] text-accent uppercase mb-6 font-semibold">
            Who We Serve
          </p>
          <h2
            className="font-bold text-text mb-20 leading-[1.1]"
            style={{ fontSize: 'clamp(48px, 8vw, 96px)', fontFamily: 'var(--font-serif)' }}
          >
            Two audiences.
            <br />
            <span className="text-teal font-style-italic" style={{ fontStyle: 'italic' }}>One mission.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {/* Creators Card */}
          <motion.div
            variants={slideLeft}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-[rgba(255,255,255,0.6)] backdrop-blur-xl border border-white rounded-3xl p-10 md:p-14 relative overflow-hidden group hover:border-[rgba(255,90,95,0.3)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
          >
            <div className="h-[4px] w-0 group-hover:w-full bg-gradient-to-r from-accent to-accent-light absolute top-0 left-0 transition-all duration-700 ease-out" />
            <div className="pl-4 md:pl-6">
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-text mb-4">
                Creators
              </h3>
              <p className="font-body text-text-muted text-[18px] mb-12 font-light max-w-[300px]">
                Turn your content into a career. We'll get you there.
              </p>
            </div>
            <div className="space-y-6">
              {creatorPerks.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-5 bg-white/50 p-3 rounded-2xl border border-white/60 shadow-sm group-hover:bg-white transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full border border-[rgba(255,90,95,0.1)] bg-[rgba(255,90,95,0.05)] flex items-center justify-center group-hover:bg-[rgba(255,90,95,0.1)] transition-colors duration-300 shrink-0">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <span className="font-body text-[16px] text-text font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Brands Card */}
          <motion.div
            variants={slideRight}
            whileHover={{ y: -6 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="bg-[rgba(255,255,255,0.6)] backdrop-blur-xl border border-white rounded-3xl p-10 md:p-14 relative overflow-hidden group hover:border-[rgba(255,90,95,0.3)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
          >
            <div className="h-[4px] w-0 group-hover:w-full bg-gradient-to-r from-accent to-accent-light absolute top-0 left-0 transition-all duration-700 ease-out" />
            <div className="pl-4 md:pl-6">
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-text mb-4">
                Brands
              </h3>
              <p className="font-body text-text-muted text-[18px] mb-12 font-light max-w-[300px]">
                Find the perfect creators for campaigns that convert.
              </p>
            </div>
            <div className="space-y-6">
              {brandPerks.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-5 bg-white/50 p-3 rounded-2xl border border-white/60 shadow-sm group-hover:bg-white transition-colors duration-300">
                  <div className="w-12 h-12 rounded-full border border-[rgba(255,90,95,0.1)] bg-[rgba(255,90,95,0.05)] flex items-center justify-center group-hover:bg-[rgba(255,90,95,0.1)] transition-colors duration-300 shrink-0">
                    <Icon size={20} className="text-accent" />
                  </div>
                  <span className="font-body text-[16px] text-text font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
