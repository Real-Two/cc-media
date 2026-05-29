import { motion } from 'framer-motion'
import { Sparkles, BarChart3, Palette, Eye } from 'lucide-react'

const values = [
  { icon: Sparkles, name: 'Authentic', desc: 'We believe in real stories, real creators, and real impact.', color: 'accent' },
  { icon: BarChart3, name: 'Results-Driven', desc: 'Every campaign is measured, optimized, and accountable.', color: 'purple' },
  { icon: Palette, name: 'Creative', desc: 'Bold ideas that break through the noise and leave a mark.', color: 'cyan' },
  { icon: Eye, name: 'Transparent', desc: 'No hidden fees, no black boxes. Full visibility, always.', color: 'accent' },
]

const colorStyles = {
  accent: { iconBg: 'bg-accent/10 border-accent/20', iconColor: 'text-accent', hoverBorder: 'hover:border-accent/30', gradient: 'from-accent/5 to-transparent' },
  purple: { iconBg: 'bg-purple/10 border-purple/20', iconColor: 'text-purple-light', hoverBorder: 'hover:border-purple/30', gradient: 'from-purple/5 to-transparent' },
  cyan: { iconBg: 'bg-cyan/10 border-cyan/20', iconColor: 'text-cyan-light', hoverBorder: 'hover:border-cyan/30', gradient: 'from-cyan/5 to-transparent' },
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } }
const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function About() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="relative flex flex-col pt-40 pb-32">

      {/* Hero badge */}
      <section className="flex flex-col items-center text-center px-5 sm:px-8 md:px-12 relative pb-0">
        <div className="absolute inset-0 hero-gradient-bg opacity-40" />
        <div className="max-w-[1400px] w-full relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2.5 rounded-full border border-border bg-bg-elevated/50 backdrop-blur-sm mb-16">
            <span className="font-mono text-[12px] md:text-[13px] tracking-[0.2em] text-accent uppercase font-medium">About Us</span>
          </motion.div>
        </div>
      </section>

      {/* Side-by-side: Our Story + Our Mission */}
      <section className="relative px-5 sm:px-8 md:px-12 pb-32 md:pb-40">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-[1400px] mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-0 md:gap-16 lg:gap-24 items-start">

            {/* Left — Identity */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col justify-start pb-16 md:pb-0 md:pr-16 lg:pr-24 md:border-r border-border"
            >
              <p className="font-mono text-[11px] tracking-[0.25em] text-text-muted uppercase mb-6 font-medium">Who We Are</p>
              <h1 className="font-heading font-bold text-text leading-[1.05] tracking-[-0.03em] mb-8" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
                The Bridge Between<br /><span className="accent-text">Creators &amp; Brands.</span>
              </h1>
              <p className="font-body text-text-muted text-[16px] md:text-[18px] leading-[1.8] font-light max-w-[480px]">
                Building the infrastructure for authentic, ROI-driven partnerships.
              </p>
            </motion.div>

            {/* Right — Mission */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
              className="flex flex-col justify-start md:pt-0"
            >
              <p className="font-mono text-[11px] tracking-[0.25em] text-cyan uppercase mb-6 font-medium">Our Mission</p>
              <h2 className="font-heading font-bold text-text leading-[1.05] tracking-[-0.03em] mb-8" style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}>
                Empowering Creators.<br /><span className="text-cyan">Unleashing Potential.</span>
              </h2>
              <p className="font-body text-text-muted text-[16px] md:text-[18px] leading-[1.8] font-light max-w-[480px]">
                Every match is seamless, strategic, and scalable — built to deliver real results for brands and real value for creators.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pb-32 md:pb-48">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 w-full">
          <div className="text-center mb-20">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-block px-5 py-2.5 rounded-full border border-border bg-bg-elevated/50 backdrop-blur-sm mb-6">
              <span className="font-mono text-[12px] md:text-[13px] tracking-[0.2em] text-accent uppercase font-medium">Our Values</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading font-bold text-text tracking-[-0.02em] leading-[1.1]"
              style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
            >
              What drives us forward.
            </motion.h2>
          </div>
          <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const c = colorStyles[v.color]
              return (
                <motion.div key={v.name} variants={fadeUp} whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 300 }} className={`bg-bg-card border border-border rounded-3xl p-10 cursor-default ${c.hoverBorder} hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all relative overflow-hidden group`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className={`w-16 h-16 rounded-2xl ${c.iconBg} flex items-center justify-center border mb-8`}>
                      <v.icon size={28} className={c.iconColor} />
                    </motion.div>
                    <h3 className="font-heading text-2xl font-bold text-text mb-4">{v.name}</h3>
                    <p className="font-body text-text-muted text-[15px] leading-[1.7] font-light">{v.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
