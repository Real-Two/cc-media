import { motion } from 'framer-motion'
import { Film, Video, Target, Clapperboard, LayoutDashboard, Handshake } from 'lucide-react'

const services = [
  {
    icon: Film,
    name: 'Instagram Reels',
    desc: 'Scroll-stopping short-form video that captures attention in the first frame and holds it till the last.',
  },
  {
    icon: Video,
    name: 'YouTube Shorts',
    desc: 'Quick, impactful storytelling that scales your brand presence across the world\'s largest video platform.',
  },
  {
    icon: Target,
    name: 'Meta Ad Campaigns',
    desc: 'Targeted growth that scales — precision advertising backed by data, creativity, and results.',
  },
  {
    icon: Clapperboard,
    name: 'Storytelling Ad Campaigns',
    desc: 'Cinematic content that converts. We craft narratives that make audiences feel, remember, and act.',
  },
  {
    icon: LayoutDashboard,
    name: 'Full Influencer Strategy',
    desc: 'End-to-end partnerships and execution — from discovery to deployment to performance tracking.',
  },
  {
    icon: Handshake,
    name: 'Creator-Brand Matchmaking',
    desc: 'Connecting the right talent to the right brand. Every match is intentional, every result is measurable.',
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

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-8 md:py-0">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-24 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <p className="font-body text-[14px] md:text-[16px] tracking-[0.2em] text-accent uppercase mb-6 font-semibold">
            Core Capabilities
          </p>
          <h2
            className="font-heading font-bold text-text mb-6 leading-[1.1]"
            style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
          >
            Not just reels.
            <br />
            <span className="accent-text">Real results.</span>
          </h2>
          <p className="font-body text-text-muted text-[18px] md:text-[22px] leading-[1.6] max-w-[650px] font-light">
            We build digital experiences and campaigns that resonate and convert.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col border-t border-border"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.name}
              variants={fadeUp}
              className="group border-b border-border py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[rgba(255,90,95,0.02)] transition-colors duration-500 cursor-default px-4 -mx-4 rounded-xl"
            >
              <div className="flex items-center gap-6 md:gap-10">
                <span className="font-heading text-[20px] md:text-[24px] text-accent font-bold opacity-30 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </span>
                <h3 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-text group-hover:translate-x-4 transition-transform duration-500">
                  {service.name}
                </h3>
              </div>
              <div className="md:max-w-[350px] lg:max-w-[450px]">
                <p className="font-body text-text-muted text-[16px] md:text-[18px] leading-[1.6] font-light group-hover:text-text transition-colors">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
