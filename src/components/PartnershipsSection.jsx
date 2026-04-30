import { motion } from 'framer-motion'

const partnerships = [
  {
    brand: 'Head & Shoulders',
    desc: 'Driving Impactful Marketing Campaigns',
  },
  {
    brand: 'Himalaya',
    desc: 'Driving Impactful Marketing Campaigns',
  },
  {
    brand: 'WishCare',
    desc: 'Driving Impactful Marketing Campaigns',
  },
  {
    brand: 'BlaBliBlü',
    desc: 'Driving Impactful Marketing Campaigns',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function PartnershipsSection() {
  return (
    <section className="relative overflow-hidden py-8 md:py-0">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <p className="font-mono text-[13px] md:text-[14px] tracking-[0.2em] text-accent uppercase mb-6 font-medium">
            Partnerships
          </p>
          <p className="font-body text-text-muted text-[17px] md:text-[21px] leading-[1.7] max-w-[600px] font-light">
            We partner with ambitious brands that want real impact — from D2C
            startups to global giants.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {partnerships.map((p) => (
            <motion.div
              key={p.brand}
              variants={fadeUp}
              className="partnership-line border-t border-border py-10 md:py-14 cursor-default group hover:bg-bg-elevated/50 transition-all duration-500 px-6 -mx-6 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <h3
                  className="font-heading font-bold text-text group-hover:translate-x-4 transition-transform duration-500 tracking-[-0.02em]"
                  style={{ fontSize: 'clamp(28px, 4vw, 56px)' }}
                >
                  CollabCell Media{' '}
                  <span className="text-text-dim font-body font-light mx-2">
                    ×
                  </span>{' '}
                  <span className="accent-text">{p.brand}</span>
                </h3>
                <p className="font-body text-text-muted text-[14px] md:text-[15px] tracking-wide font-light opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </motion.div>
      </div>
    </section>
  )
}
