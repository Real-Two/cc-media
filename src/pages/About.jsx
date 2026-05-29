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
  cyan:   { iconBg: 'bg-cyan/10 border-cyan/20',   iconColor: 'text-cyan-light',    hoverBorder: 'hover:border-cyan/30',   gradient: 'from-cyan/5 to-transparent'   },
}

const container = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
const fadeUp    = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }

export default function About() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative flex flex-col"
    >

      {/* ─── HERO (full-viewport, centred) ─── */}
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-5 sm:px-8 md:px-12">
        <div className="absolute inset-0 hero-gradient-bg opacity-40 pointer-events-none" />

        <div className="max-w-[860px] w-full relative z-10 flex flex-col items-center gap-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-5 py-2.5 rounded-full border border-border bg-bg-elevated/50 backdrop-blur-sm"
          >
            <span className="font-mono text-[12px] md:text-[13px] tracking-[0.22em] text-accent uppercase font-medium">About Us</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="font-heading font-extrabold text-text leading-[1.04] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(44px, 9vw, 110px)' }}
          >
            The Bridge Between<br />
            <span className="accent-text">Creators &amp; Brands.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
            className="font-body text-text-muted text-[17px] md:text-[20px] leading-[1.75] font-light max-w-[560px]"
          >
            Building the infrastructure for authentic, ROI-driven partnerships.
          </motion.p>
        </div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] tracking-[0.25em] text-text-muted/50 uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-text-muted/30 to-transparent"
          />
        </motion.div>
      </section>

      {/* ─── MISSION SPLIT ─── */}
      <section className="relative py-32 md:py-40 px-5 sm:px-8 md:px-12">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div className="max-w-[1200px] mx-auto w-full relative z-10">

          {/* Section label centred above */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-20"
          >
            <div className="inline-flex items-center px-5 py-2.5 rounded-full border border-border bg-bg-elevated/50 backdrop-blur-sm">
              <span className="font-mono text-[11px] md:text-[12px] tracking-[0.22em] text-cyan uppercase font-medium">Our Mission</span>
            </div>
          </motion.div>

          {/* Two columns */}
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col gap-6"
            >
              <h2
                className="font-heading font-extrabold text-text leading-[1.06] tracking-[-0.03em]"
                style={{ fontSize: 'clamp(34px, 4.5vw, 60px)' }}
              >
                Empowering Creators.<br />
                <span className="text-cyan">Unleashing Potential.</span>
              </h2>
              <p className="font-body text-text-muted text-[16px] md:text-[18px] leading-[1.85] font-light">
                Every match is seamless, strategic, and scalable — built to deliver real results for brands and genuine value for creators.
              </p>
            </motion.div>

            {/* Right — stat cards */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { num: '50+', label: 'Brand Campaigns' },
                { num: '10M+', label: 'Total Reach' },
                { num: '4.1×', label: 'Average ROI' },
                { num: '100%', label: 'Transparent Reporting' },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="bg-bg-card border border-border rounded-2xl p-6 flex flex-col gap-2 hover:border-accent/30 transition-colors"
                >
                  <span className="font-heading font-extrabold text-text tracking-[-0.02em]" style={{ fontSize: 'clamp(28px, 3vw, 42px)' }}>
                    {num}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.15em] text-text-muted uppercase font-medium leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="py-32 md:py-40 px-5 sm:px-8 md:px-12">
        <div className="max-w-[1200px] mx-auto w-full">

          {/* Heading block */}
          <div className="flex flex-col items-center text-center mb-20 gap-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-border bg-bg-elevated/50 backdrop-blur-sm"
            >
              <span className="font-mono text-[11px] md:text-[12px] tracking-[0.22em] text-accent uppercase font-medium">Our Values</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-heading font-extrabold text-text tracking-[-0.025em] leading-[1.1]"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
            >
              What drives us forward.
            </motion.h2>
          </div>

          {/* Cards grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {values.map((v) => {
              const c = colorStyles[v.color]
              return (
                <motion.div
                  key={v.name}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className={`bg-bg-card border border-border rounded-3xl p-8 cursor-default ${c.hoverBorder} hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all relative overflow-hidden group`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="relative z-10 flex flex-col gap-5">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-14 h-14 rounded-2xl ${c.iconBg} flex items-center justify-center border`}
                    >
                      <v.icon size={24} className={c.iconColor} />
                    </motion.div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-text mb-2">{v.name}</h3>
                      <p className="font-body text-text-muted text-[14px] leading-[1.7] font-light">{v.desc}</p>
                    </div>
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
