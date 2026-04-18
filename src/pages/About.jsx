import { motion } from 'framer-motion'
import { Sparkles, BarChart3, Palette, Eye } from 'lucide-react'

const values = [
  { icon: Sparkles, name: 'Authentic', desc: 'We believe in real stories, real creators, and real impact.' },
  { icon: BarChart3, name: 'Results-Driven', desc: 'Every campaign is measured, optimized, and accountable.' },
  { icon: Palette, name: 'Creative', desc: 'Bold ideas that break through the noise and leave a mark.' },
  { icon: Eye, name: 'Transparent', desc: 'No hidden fees, no black boxes. Full visibility, always.' },
]

const team = [
  { initials: 'AK', role: 'Founder & CEO' },
  { initials: 'RS', role: 'Creative Director' },
  { initials: 'PM', role: 'Head of Partnerships' },
  { initials: 'NK', role: 'Campaign Manager' },
]

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } }
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="bg-bg relative flex flex-col gap-32 md:gap-48 pt-40 pb-64"
    >
      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 md:px-12 relative">
        <div className="max-w-[1200px] w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block px-5 py-2 rounded-full border border-border bg-white shadow-sm mb-12"
          >
            <span className="font-body text-[13px] md:text-[14px] tracking-[0.2em] text-accent uppercase font-semibold">
              About Us
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-bold text-text mb-8 leading-[1.05]"
            style={{ fontSize: 'clamp(56px, 12vw, 150px)', fontFamily: 'var(--font-display)' }}
          >
            The Bridge Between
            <br />
            <span className="accent-text" style={{ fontFamily: 'var(--font-heading)' }}>Creators & Brands.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-text-muted text-[18px] md:text-[24px] leading-[1.6] max-w-[600px] mx-auto font-light"
          >
            Building the infrastructure for authentic, ROI-driven partnerships.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="flex flex-col items-center justify-center text-center">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-[900px] mx-auto flex flex-col items-center text-center"
          >
            <p className="font-heading text-[13px] tracking-[0.2em] text-accent uppercase mb-8 font-semibold text-center">Our Mission</p>
            <h2 className="font-bold text-text mb-8 leading-[1.1] text-center" style={{ fontSize: 'clamp(48px, 8vw, 100px)', fontFamily: 'var(--font-serif)' }}>
              Empowering Creators.<br />
              <span className="text-teal font-style-italic" style={{ fontStyle: 'italic' }}>Unleashing Potential.</span>
            </h2>
            <p className="font-body text-text-muted text-[18px] md:text-[22px] leading-[1.8] font-light max-w-[600px] mx-auto text-center">
              Every match is seamless, strategic, and scalable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-5 py-2 rounded-full border border-border bg-white shadow-sm"
            >
              <span className="font-body text-[13px] md:text-[14px] tracking-[0.2em] text-accent uppercase font-semibold">
                Our Values
              </span>
            </motion.div>
          </div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <motion.div key={v.name} variants={fadeUp} whileHover={{ y: -6 }} className="bg-white border border-border rounded-3xl p-10 cursor-default hover:border-[rgba(255,90,95,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-[rgba(255,90,95,0.1)] flex items-center justify-center border border-[rgba(255,90,95,0.2)] mb-8">
                  <v.icon size={28} className="text-accent" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-text mb-4">{v.name}</h3>
                <p className="font-body text-text-muted text-[16px] leading-[1.7] font-light">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-full border border-border bg-bg shadow-sm mb-24 mx-auto"
          >
            <span className="font-body text-[13px] md:text-[14px] tracking-[0.2em] text-accent uppercase font-semibold">
              The Team
            </span>
          </motion.div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {team.map((member) => (
              <motion.div key={member.initials} variants={fadeUp} className="text-center group">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-bg border border-border flex items-center justify-center mx-auto mb-8 group-hover:border-[rgba(255,90,95,0.3)] group-hover:shadow-[0_15px_40px_rgba(255,90,95,0.15)] transition-all duration-300">
                  <span className="font-heading text-4xl md:text-5xl font-bold accent-text">{member.initials}</span>
                </div>
                <p className="font-body text-text-muted text-[18px] md:text-[20px] font-medium">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
