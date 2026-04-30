import { motion } from 'framer-motion'

export default function PhilosophySection() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full text-center flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-block px-5 py-2.5 rounded-full border border-border bg-bg-elevated/50 backdrop-blur-sm mb-12"
        >
          <span className="font-mono text-[12px] md:text-[13px] tracking-[0.2em] text-accent uppercase font-medium">
            The Philosophy
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading font-bold text-text mb-16 leading-[1.1] tracking-[-0.02em]"
          style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
        >
          <span className="text-cyan">Design</span> is silent.
          <br />
          <span className="accent-text">Impact</span> is loud.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1000px]"
        >
          {[
            {
              title: 'Clarity',
              desc: 'No fluff, no jargon. Just clear messaging that connects.',
              gradient: 'from-accent/10 to-transparent',
            },
            {
              title: 'Aesthetics',
              desc: 'Visuals that demand attention and command authority.',
              gradient: 'from-purple/10 to-transparent',
              elevated: true,
            },
            {
              title: 'Scale',
              desc: 'Systems built for exponential growth and reach.',
              gradient: 'from-cyan/10 to-transparent',
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`bg-bg-card border border-border p-8 rounded-3xl transition-all duration-500 hover:border-border-hover relative overflow-hidden group ${
                card.elevated ? 'mt-0 md:mt-12' : ''
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <div className="relative z-10">
                <h3 className="font-heading font-bold text-2xl text-text mb-4">
                  {card.title}
                </h3>
                <p className="font-body text-text-muted text-[15px] font-light leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
