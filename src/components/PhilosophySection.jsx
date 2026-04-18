import { motion } from 'framer-motion'

export default function PhilosophySection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-block px-5 py-2 rounded-full border border-border bg-white shadow-sm mb-12"
        >
          <span className="font-body text-[13px] md:text-[14px] tracking-[0.2em] text-accent uppercase font-semibold">
            The Philosophy
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bold text-text mb-16 leading-[1.1]"
          style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontFamily: 'var(--font-serif)' }}
        >
          <span className="font-style-italic text-teal" style={{ fontStyle: 'italic' }}>Design</span> is silent.<br />
          <span className="accent-text">Impact</span> is loud.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1000px]"
        >
          <div className="bg-[#FAFAFA] border border-border p-8 rounded-3xl transition-all duration-500 hover:shadow-md">
            <h3 className="font-heading font-bold text-2xl text-text mb-4">Clarity</h3>
            <p className="font-body text-text-muted text-[15px] font-light leading-relaxed">No fluff, no jargon. Just clear messaging that connects.</p>
          </div>
          <div className="bg-[#FAFAFA] border border-border p-8 rounded-3xl transition-all duration-500 hover:shadow-md mt-0 md:mt-12">
            <h3 className="font-heading font-bold text-2xl text-text mb-4">Aesthetics</h3>
            <p className="font-body text-text-muted text-[15px] font-light leading-relaxed">Visuals that demand attention and command authority.</p>
          </div>
          <div className="bg-[#FAFAFA] border border-border p-8 rounded-3xl transition-all duration-500 hover:shadow-md">
            <h3 className="font-heading font-bold text-2xl text-text mb-4">Scale</h3>
            <p className="font-body text-text-muted text-[15px] font-light leading-relaxed">Systems built for exponential growth and reach.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
