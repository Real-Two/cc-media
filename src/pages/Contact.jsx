import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Mail, ArrowUpRight } from 'lucide-react'
import ContactForm from '../components/ContactForm'

const RESPONSE_STATS = [
  { num: '< 24h', label: 'Response Time' },
  { num: '50+',   label: 'Brands Worked With' },
  { num: '100%',  label: 'Transparency' },
]

export default function Contact() {
  const [searchParams] = useSearchParams()
  const defaultType = searchParams.get('type') || 'brand'

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="relative min-h-screen flex flex-col"
    >
      {/* Hero gradient */}
      <div className="absolute inset-0 hero-gradient-bg opacity-30 pointer-events-none" />

      <section className="flex-1 flex flex-col justify-center pt-36 pb-32 px-5 sm:px-8 md:px-12 relative z-10">
        <div className="max-w-[1200px] mx-auto w-full">
          <div className="grid lg:grid-cols-[1fr_1.25fr] gap-20 lg:gap-32 items-start">

            {/* ── LEFT ── */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65 }}
              className="flex flex-col gap-10 lg:sticky lg:top-36"
            >
              {/* Badge */}
              <div className="inline-flex items-center self-start px-5 py-2.5 rounded-full border border-border bg-bg-elevated/50 backdrop-blur-sm">
                <span className="font-mono text-[11px] md:text-[12px] tracking-[0.22em] text-accent uppercase font-medium">
                  Get In Touch
                </span>
              </div>

              {/* Headline */}
              <div className="flex flex-col gap-5">
                <h1
                  className="font-heading font-extrabold text-text leading-[1.04] tracking-[-0.03em]"
                  style={{ fontSize: 'clamp(40px, 5.5vw, 72px)' }}
                >
                  Let's build<br />
                  <span className="accent-text">something great.</span>
                </h1>
                <p className="font-body text-text-muted text-[16px] md:text-[17px] leading-[1.8] font-light max-w-[420px]">
                  Whether you're a brand looking for the perfect creator match, or a creator ready for your next big campaign — we want to hear from you.
                </p>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-4">
                {RESPONSE_STATS.map(({ num, label }) => (
                  <div key={label} className="flex flex-col gap-1 border-l-2 border-border pl-4">
                    <span className="font-heading font-bold text-text" style={{ fontSize: 'clamp(18px, 2vw, 26px)' }}>
                      {num}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.12em] text-text-muted uppercase leading-snug">
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-border w-full" />

              {/* Contact links */}
              <div className="flex flex-col gap-5">
                <a
                  href="mailto:collabcellmedia@gmail.com"
                  className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="w-11 h-11 rounded-xl bg-bg-card border border-border flex items-center justify-center shrink-0 group-hover:border-accent/40 transition-colors">
                    <Mail size={18} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.18em] text-text-muted uppercase mb-0.5">Email</p>
                    <p className="font-body text-text text-[14px] font-medium group-hover:text-accent transition-colors flex items-center gap-1.5">
                      collabcellmedia@gmail.com
                      <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/collabcellmedia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 hover:opacity-80 transition-opacity"
                >
                  <div className="w-11 h-11 rounded-xl bg-bg-card border border-border flex items-center justify-center shrink-0 group-hover:border-cyan/40 transition-colors">
                    <InstagramIcon className="text-cyan" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.18em] text-text-muted uppercase mb-0.5">Instagram</p>
                    <p className="font-body text-text text-[14px] font-medium group-hover:text-cyan transition-colors flex items-center gap-1.5">
                      @collabcellmedia
                      <ArrowUpRight size={13} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </p>
                  </div>
                </a>
              </div>

            </motion.div>

            {/* ── RIGHT — Form card ── */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="bg-bg-card border border-border rounded-3xl p-8 md:p-12 shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            >
              <ContactForm defaultType={defaultType} />
            </motion.div>

          </div>
        </div>
      </section>
    </motion.main>
  )
}

function InstagramIcon({ className = '' }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
