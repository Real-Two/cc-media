import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-[600px] h-[600px] rounded-full opacity-[0.08]"
          style={{
            background: 'radial-gradient(circle, rgba(255,90,95,0.8), rgba(78,205,196,0.5), transparent)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center flex flex-col items-center"
        >
          <h2
            className="font-heading font-bold text-text mb-8 leading-[1]"
            style={{ fontSize: 'clamp(56px, 12vw, 150px)' }}
          >
            Let's build
            <br />
            <span className="accent-text">the future.</span>
          </h2>
          <p className="font-body text-text-muted text-[18px] md:text-[22px] leading-[1.6] max-w-[600px] font-light mb-14">
            Brands seeking growth. Creators seeking scale. We are the bridge.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact?type=brand"
              className="gradient-btn px-12 py-5 rounded-full font-body text-[16px] font-bold tracking-wide no-underline flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              I'm a Brand <ArrowRight size={18} />
            </Link>
            <Link
              to="/contact?type=creator"
              className="ghost-btn px-12 py-5 rounded-full font-body text-[16px] font-bold tracking-wide no-underline flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              I'm a Creator <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
