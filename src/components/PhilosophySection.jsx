import { motion } from 'framer-motion'

const cards = [
  { title: 'Clarity', desc: 'No fluff, no jargon. Just clear messaging that connects.', gradient: 'from-accent/10 to-transparent', icon: '◈' },
  { title: 'Aesthetics', desc: 'Visuals that demand attention and command authority.', gradient: 'from-purple/10 to-transparent', elevated: true, icon: '◉' },
  { title: 'Scale', desc: 'Systems built for exponential growth and reach.', gradient: 'from-cyan/10 to-transparent', icon: '◆' },
]

export default function PhilosophySection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-12 w-full text-center flex flex-col items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="inline-block px-5 py-2.5 rounded-full glass-subtle mb-12"
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
          className="font-heading font-extrabold text-text mb-16 leading-[1.1] tracking-[-0.03em]"
          style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
        >
          <span className="text-cyan">Design</span> is silent.
          <br />
          <span className="accent-text">Impact</span> is loud.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1000px]">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
              whileHover={{ y: -8, scale: 1.03 }}
              className={`glass rounded-3xl p-8 transition-all duration-500 hover:border-border-hover relative overflow-hidden group cursor-default ${
                card.elevated ? 'mt-0 md:mt-12' : ''
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10">
                {/* Decorative icon */}
                <motion.span
                  initial={{ opacity: 0.3 }}
                  whileHover={{ opacity: 0.6, scale: 1.1 }}
                  className="text-4xl mb-4 block text-text-dim"
                >
                  {card.icon}
                </motion.span>
                <h3 className="font-heading font-bold text-2xl text-text mb-4">{card.title}</h3>
                <p className="font-body text-text-muted text-[15px] font-light leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
