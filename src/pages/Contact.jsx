import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Mail } from 'lucide-react'
import ContactForm from '../components/ContactForm'

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

export default function Contact() {
  const [searchParams] = useSearchParams()
  const defaultType = searchParams.get('type') || 'brand'

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="relative flex flex-col flex-1 pb-32">
      <section className="pb-[400px] md:pb-[500px] flex flex-col" style={{ paddingTop: '200px' }}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24 items-start">
            {/* Left — Info */}
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:sticky lg:top-40">
              <div className="inline-block px-5 py-2.5 rounded-full border border-border bg-bg-elevated/50 backdrop-blur-sm mb-8">
                <span className="font-mono text-[12px] md:text-[13px] tracking-[0.2em] text-accent uppercase font-medium">Get In Touch</span>
              </div>
              <h1 className="font-heading font-bold text-text mb-8 leading-[1.05] tracking-[-0.02em]" style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>
                Let's build<br /><span className="accent-text">something great.</span>
              </h1>
              <p className="font-body text-text-muted text-[17px] leading-[1.7] max-w-[450px] mb-16 font-light">
                Whether you're a brand looking for the perfect creator match or a creator ready for your next big campaign — drop us a line.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-bg-card border border-border flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-heading text-text text-[14px] font-semibold">Location</p>
                    <p className="font-body text-text-muted text-[13px] font-light">New Delhi, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-bg-card border border-border flex items-center justify-center shrink-0">
                    <Mail size={22} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-heading text-text text-[14px] font-semibold">Email</p>
                    <p className="font-body text-text-muted text-[13px] font-light">collabcellmedia@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-bg-card border border-border flex items-center justify-center shrink-0">
                    <div className="text-accent"><InstagramIcon /></div>
                  </div>
                  <div>
                    <p className="font-heading text-text text-[14px] font-semibold">Instagram</p>
                    <p className="font-body text-text-muted text-[13px] font-light">@collabcellmedia</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="bg-bg-card border border-border rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
              <ContactForm defaultType={defaultType} />
            </motion.div>
          </div>
        </div>
      </section>
    </motion.main>
  )
}
