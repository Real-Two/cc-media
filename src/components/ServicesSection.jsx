import { motion } from 'framer-motion'
import {
  Film,
  Video,
  Target,
  Clapperboard,
  LayoutDashboard,
  Handshake,
} from 'lucide-react'

const services = [
  {
    icon: Film,
    name: 'Instagram Reels',
    desc: "Scroll-stopping short-form video that captures attention in the first frame and holds it till the last.",
    color: 'accent',
  },
  {
    icon: Video,
    name: 'YouTube Shorts',
    desc: "Quick, impactful storytelling that scales your brand presence across the world's largest video platform.",
    color: 'purple',
  },
  {
    icon: Target,
    name: 'Meta Ad Campaigns',
    desc: 'Targeted growth that scales — precision advertising backed by data, creativity, and results.',
    color: 'cyan',
  },
  {
    icon: Clapperboard,
    name: 'Storytelling Ad Campaigns',
    desc: 'Cinematic content that converts. We craft narratives that make audiences feel, remember, and act.',
    color: 'accent',
  },
  {
    icon: LayoutDashboard,
    name: 'Full Influencer Strategy',
    desc: 'End-to-end partnerships and execution — from discovery to deployment to performance tracking.',
    color: 'purple',
  },
  {
    icon: Handshake,
    name: 'Creator-Brand Matchmaking',
    desc: 'Connecting the right talent to the right brand. Every match is intentional, every result is measurable.',
    color: 'cyan',
  },
]

const colorMap = {
  accent: {
    hover: 'group-hover:text-accent',
    bg: 'group-hover:bg-accent/10',
    border: 'group-hover:border-accent/30',
    glow: 'group-hover:shadow-[0_0_20px_rgba(255,107,53,0.1)]',
  },
  purple: {
    hover: 'group-hover:text-purple-light',
    bg: 'group-hover:bg-purple/10',
    border: 'group-hover:border-purple/30',
    glow: 'group-hover:shadow-[0_0_20px_rgba(124,58,237,0.1)]',
  },
  cyan: {
    hover: 'group-hover:text-cyan-light',
    bg: 'group-hover:bg-cyan/10',
    border: 'group-hover:border-cyan/30',
    glow: 'group-hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]',
  },
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
          <p className="font-mono text-[13px] md:text-[14px] tracking-[0.2em] text-accent uppercase mb-6 font-medium">
            Core Capabilities
          </p>
          <h2
            className="font-heading font-bold text-text mb-6 leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
          >
            Not just reels.
            <br />
            <span className="accent-text">Real results.</span>
          </h2>
          <p className="font-body text-text-muted text-[17px] md:text-[21px] leading-[1.7] max-w-[650px] font-light">
            We build digital experiences and campaigns that resonate and
            convert.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="flex flex-col border-t border-border"
        >
          {services.map((service, i) => {
            const colors = colorMap[service.color]
            return (
              <motion.div
                key={service.name}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: 'easeOut' },
                  },
                }}
                className={`group border-b border-border py-8 md:py-12 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-bg-elevated/50 transition-all duration-500 cursor-default px-6 -mx-6 rounded-xl ${colors.glow}`}
              >
                <div className="flex items-center gap-6 md:gap-10">
                  <motion.span
                    className={`font-mono text-[18px] md:text-[22px] text-text-dim font-bold ${colors.hover} transition-colors duration-300`}
                  >
                    0{i + 1}
                  </motion.span>
                  <h3
                    className={`font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-text group-hover:translate-x-4 transition-transform duration-500 tracking-[-0.02em]`}
                  >
                    {service.name}
                  </h3>
                </div>
                <div className="md:max-w-[350px] lg:max-w-[450px]">
                  <p className="font-body text-text-muted text-[15px] md:text-[17px] leading-[1.7] font-light group-hover:text-text transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
