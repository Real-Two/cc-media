import { motion } from 'framer-motion'
import { Film, Video, Target, Clapperboard, LayoutDashboard, Handshake } from 'lucide-react'

const services = [
  {
    icon: Film,
    num: '01',
    name: 'Instagram Reels',
    desc: 'Scroll-stopping short-form video that captures attention in the first frame and holds it till the last. We handle concept, scripting, filming direction, and editing.',
    includes: ['Creative concept development', 'Script & storyboard', 'Creator casting & management', 'Post-production & delivery', 'Performance analytics'],
  },
  {
    icon: Video,
    num: '02',
    name: 'YouTube Shorts',
    desc: 'Quick, impactful storytelling that scales your brand presence across the world\'s largest video platform. Optimised for discovery and engagement.',
    includes: ['Channel strategy', 'Content calendar planning', 'Shorts production', 'SEO & thumbnail optimization', 'Audience growth tracking'],
  },
  {
    icon: Target,
    num: '03',
    name: 'Meta Ad Campaigns',
    desc: 'Targeted growth that scales — precision advertising backed by data, creativity, and real-time optimisation across Facebook and Instagram.',
    includes: ['Audience research & targeting', 'Ad creative production', 'A/B testing frameworks', 'Budget optimization', 'Conversion tracking & reporting'],
  },
  {
    icon: Clapperboard,
    num: '04',
    name: 'Storytelling Ad Campaigns',
    desc: 'Cinematic content that converts. We craft narratives that make audiences feel, remember, and act — from concept to final cut.',
    includes: ['Brand narrative development', 'Cinematic production', 'Multi-platform adaptation', 'Emotional engagement strategy', 'Campaign launch & management'],
  },
  {
    icon: LayoutDashboard,
    num: '05',
    name: 'Full Influencer Strategy',
    desc: 'End-to-end partnerships and execution — from discovery to deployment to performance tracking. We manage the entire influencer lifecycle.',
    includes: ['Influencer discovery & vetting', 'Campaign strategy & briefs', 'Contract & negotiations', 'Content approval workflows', 'ROI measurement & reporting'],
  },
  {
    icon: Handshake,
    num: '06',
    name: 'Creator-Brand Matchmaking',
    desc: 'Connecting the right talent to the right brand. Every match is intentional, every result is measurable. Our network spans 500+ creators.',
    includes: ['Creator database access', 'Brand alignment scoring', 'Collaboration proposals', 'Relationship management', 'Long-term partnership building'],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Services() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="bg-bg relative"
    >
      {/* Hero */}
      <section className="pt-48 pb-24 md:pt-56 md:pb-32 flex flex-col items-center text-center">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block px-5 py-2 rounded-full border border-border bg-white shadow-sm mb-8"
          >
            <span className="font-body text-[13px] md:text-[14px] tracking-[0.2em] text-accent uppercase font-semibold">
              Our Services
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-text mb-8 leading-[1]"
            style={{ fontSize: 'clamp(48px, 10vw, 120px)' }}
          >
            Everything your
            <br />
            <span className="accent-text">brand needs.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body text-text-muted text-[18px] md:text-[22px] leading-[1.6] max-w-[700px] mx-auto font-light"
          >
            From scroll-stopping Reels to full-scale influencer campaigns — we handle every layer of your digital story with precision and flair.
          </motion.p>
        </div>
      </section>

      {/* Sticky Cards Scroll Section */}
      <section className="pb-48 md:pb-64 px-6 md:px-12 max-w-[1400px] mx-auto relative">
        <div className="flex flex-col gap-0 pb-[10vh]">
          {services.map((service, i) => (
            <div
              key={service.num}
              className="sticky top-[120px] pt-[20px] h-auto min-h-[60vh] w-full flex justify-center"
              style={{ zIndex: i + 1 }}
            >
              <div className="w-full bg-white border border-border rounded-3xl p-8 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col md:flex-row gap-12 md:gap-20 items-center transform transition-transform duration-500 hover:-translate-y-2">
                {/* Text */}
                <div className="flex-1">
                  <span className="font-heading text-[60px] md:text-[80px] font-bold text-bg-bg opacity-10 drop-shadow-sm -ml-2">
                    {service.num}
                  </span>
                  <div className="flex items-center gap-4 mb-6 -mt-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-[rgba(255,90,95,0.1)] flex items-center justify-center border border-[rgba(255,90,95,0.2)]">
                      <service.icon size={28} className="text-accent" />
                    </div>
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-text">{service.name}</h2>
                  </div>
                  <p className="font-body text-text-muted text-[16px] md:text-[18px] leading-[1.7] mb-10 font-light max-w-[500px]">
                    {service.desc}
                  </p>
                  <div>
                    <p className="font-body text-[13px] tracking-[0.2em] text-text uppercase mb-5 font-semibold">What's Included</p>
                    <ul className="space-y-4">
                      {service.includes.map((item) => (
                        <li key={item} className="font-body text-[15px] text-text-muted flex items-center gap-4 font-light">
                          <span className="w-2 h-2 rounded-full bg-accent shrink-0 shadow-[0_0_8px_rgba(255,90,95,0.6)]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Visual Placeholder */}
                <div className="flex-1 w-full h-full min-h-[300px] md:min-h-[500px] relative rounded-2xl overflow-hidden bg-[#FAFAFA] border border-border flex items-center justify-center group">
                  <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,90,95,0.05)] to-[rgba(78,205,196,0.05)] group-hover:scale-105 transition-transform duration-700" />
                  <service.icon size={120} className="text-border opacity-20 group-hover:text-accent group-hover:opacity-40 transition-all duration-500 transform group-hover:scale-110" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.main>
  )
}
