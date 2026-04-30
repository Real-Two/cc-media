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
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="relative flex flex-col gap-32 md:gap-48 pt-40 pb-64">
      {/* Hero */}
      <section className="flex flex-col items-center text-center px-6 md:px-12 relative">
        <div className="absolute inset-0 hero-gradient-bg opacity-40" />
        <div className="max-w-[1200px] w-full relative z-10">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-block px-5 py-2.5 rounded-full border border-border bg-bg-elevated/50 backdrop-blur-sm mb-12">
            <span className="font-mono text-[12px] md:text-[13px] tracking-[0.2em] text-accent uppercase font-medium">About Us</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-heading font-bold text-text mb-8 leading-[1.05] tracking-[-0.02em]" style={{ fontSize: 'clamp(52px, 12vw, 150px)' }}>
            The Bridge Between<br /><span className="accent-text">Creators & Brands.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="font-body text-text-muted text-[17px] md:text-[22px] leading-[1.7] max-w-[600px] mx-auto font-light">
            Building the infrastructure for authentic, ROI-driven partnerships.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="flex flex-col items-center justify-center text-center relative">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-[900px] mx-auto flex flex-col items-center">
            <p className="font-mono text-[12px] tracking-[0.2em] text-accent uppercase mb-8 font-medium">Our Mission</p>
            <h2 className="font-heading font-bold text-text mb-8 leading-[1.1] tracking-[-0.02em]" style={{ fontSize: 'clamp(48px, 8vw, 100px)' }}>
              Empowering Creators.<br /><span className="text-cyan">Unleashing Potential.</span>
            </h2>
            <p className="font-body text-text-muted text-[17px] md:text-[21px] leading-[1.8] font-light max-w-[600px]">Every match is seamless, strategic, and scalable.</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="text-center mb-20">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="inline-block px-5 py-2.5 rounded-full border border-border bg-bg-elevated/50 backdrop-blur-sm">
              <span className="font-mono text-[12px] md:text-[13px] tracking-[0.2em] text-accent uppercase font-medium">Our Values</span>
            </motion.div>
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
