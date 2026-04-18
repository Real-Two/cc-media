import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import RotatingText from './RotatingText'
import MarqueeTicker from './MarqueeTicker'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex flex-col justify-center overflow-hidden">
      {/* Gradient Orbs */}
      <div className="orb orb-teal top-[-10%] left-[-10%]" />
      <div className="orb orb-purple top-[20%] right-[-5%]" />
      <div className="orb orb-magenta bottom-[10%] left-[30%]" />

      {/* Content */}
      <div className="relative z-10 max-w-[1600px] w-full mx-auto px-6 md:px-12 pt-40 pb-24 flex-1 flex flex-col justify-center items-center text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-[1100px] flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-12 px-5 py-2 rounded-full border border-border bg-white shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-body text-[12px] md:text-[14px] tracking-[0.2em] text-accent uppercase font-semibold">
              Digital Innovation Agency
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-bold leading-[1.05] mb-8 tracking-tight text-text"
            style={{ fontSize: 'clamp(56px, 10vw, 130px)', fontFamily: 'var(--font-display)' }}
          >
            We shape <span className="text-accent inline-block drop-shadow-sm" style={{ fontFamily: 'var(--font-heading)' }}><RotatingText /></span>
            <br />
            for modern brands.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeUp}
            className="font-body text-text-muted text-[18px] md:text-[22px] leading-[1.6] max-w-[700px] mb-14 font-light"
          >
            A cross-functional team bridging the gap between raw creator talent and scalable brand growth. No fluff, just results.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <Link
              to="/contact"
              className="gradient-btn px-10 py-5 rounded-full font-body text-[16px] font-medium tracking-wide no-underline flex items-center justify-center whitespace-nowrap shrink-0 min-w-[220px]"
            >
              Start a Project
            </Link>
            <Link
              to="/work"
              className="ghost-btn px-10 py-5 rounded-full font-body text-[16px] font-medium tracking-wide no-underline flex items-center justify-center whitespace-nowrap shrink-0 min-w-[220px]"
            >
              Explore Our Work
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-auto relative z-20">
        <MarqueeTicker />
      </div>
    </section>
  )
}
