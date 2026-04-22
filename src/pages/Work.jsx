import { motion } from 'framer-motion'

const projects = [
  {
    brand: 'Himalaya',
    type: 'Instagram Reels Series',
    stat: '1.8M+ Views',
    image: '/brands/himalaya.jpg',
  },
  {
    brand: 'WishCare',
    type: 'Creator-Brand Partnership',
    stat: '3.2x ROI',
    image: '/brands/wishcare.jpg',
  },
  {
    brand: 'BlaBliBlü',
    type: 'Meta Ad Campaign',
    stat: '500K+ Impressions',
    image: '/brands/blabliblu.jpg',
  },
  {
    brand: 'Himalaya',
    type: 'Storytelling Campaign',
    stat: '4.1x ROI',
    image: '/brands/himalaya.jpg',
  },
  {
    brand: 'WishCare',
    type: 'YouTube Shorts',
    stat: '1.2M+ Views',
    image: '/brands/wishcare.jpg',
  },
  {
    brand: 'BlaBliBlü',
    type: 'Influencer Campaign',
    stat: '2.5M+ Reach',
    image: '/brands/blabliblu.jpg',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Work() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="bg-bg relative min-h-[80vh] flex flex-col"
    >
      <section className="pt-48 pb-24 md:pt-56 md:pb-32 flex flex-col items-center text-center">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block px-5 py-2 rounded-full border border-border bg-white shadow-sm mb-8"
          >
            <span className="font-body text-[13px] md:text-[14px] tracking-[0.2em] text-accent uppercase font-semibold">
              Our Work
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-text mb-6 leading-[1]"
            style={{ fontSize: 'clamp(48px, 10vw, 120px)' }}
          >
            Campaigns that
            <br />
            <span className="accent-text">get results.</span>
          </motion.h1>
        </div>
      </section>

      <section className="pb-48 md:pb-64 flex-1">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group bg-white rounded-3xl border border-border overflow-hidden cursor-default hover:border-[rgba(255,90,95,0.3)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 shadow-sm"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`CollabCell Media x ${project.brand}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <p className="font-heading text-[12px] tracking-[0.15em] text-accent uppercase mb-3 font-semibold">{project.type}</p>
                  <h3 className="font-heading text-2xl font-bold text-text mb-4">{project.brand}</h3>
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal shadow-[0_0_8px_rgba(78,205,196,0.6)]" />
                    <span className="font-body text-text-muted text-[15px] font-medium">{project.stat}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.main>
  )
}
