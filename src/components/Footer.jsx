import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, ArrowUp } from 'lucide-react'

const InstagramIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

const links = [
  { name: 'Services', path: '/services' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

const socials = [
  {
    icon: InstagramIcon,
    href: 'https://instagram.com/collabcellmedia',
    label: 'Instagram',
  },
  {
    icon: WhatsAppIcon,
    href: 'https://wa.me/918506822030',
    label: 'WhatsApp',
  },
  {
    icon: () => <Mail size={16} />,
    href: 'mailto:collabcellmedia@gmail.com',
    label: 'Email',
  },
]

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="scroll-top-btn"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default function Footer() {
  return (
    <>
      <ScrollToTopButton />
      <footer className="border-t border-border bg-bg-light mt-auto pt-8 relative">
        {/* Subtle top glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="/logo.png"
                  alt="CollabCell Media"
                  className="w-10 h-10 object-contain"
                />
                <span className="font-heading text-[17px] font-bold tracking-[0.12em] text-text">
                  COLLABCELL MEDIA
                </span>
              </div>
              <p className="font-body text-text-muted text-[14px] leading-[1.8] max-w-[300px] font-light">
                Empowering Creators. Unleashing Potential. India's leading
                creator-brand marketing agency.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-text-muted font-medium uppercase mb-6">
                Navigate
              </p>
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="link-animated font-body text-[14px] text-text-muted hover:text-accent transition-colors no-underline font-light w-fit"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div>
              <p className="font-mono text-[11px] tracking-[0.2em] text-text-muted font-medium uppercase mb-6">
                Connect
              </p>
              <div className="flex gap-4 mb-6">
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                    className="w-11 h-11 rounded-xl bg-bg-elevated border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 hover:shadow-[0_0_15px_rgba(255,107,53,0.1)] transition-all no-underline"
                  >
                    <Icon />
                  </motion.a>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                <a
                  href="https://wa.me/918506822030"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-animated font-mono text-text-muted text-[13px] hover:text-accent transition-colors no-underline w-fit"
                >
                  +91 8506822030
                </a>
                <a
                  href="mailto:collabcellmedia@gmail.com"
                  className="link-animated font-mono text-text-muted text-[13px] hover:text-accent transition-colors no-underline w-fit"
                >
                  collabcellmedia@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-text-dim text-[12px] font-light">
              © {new Date().getFullYear()} CollabCell Media. All rights
              reserved.
            </p>
            <p className="font-body text-text-dim text-[12px] font-light">
              New Delhi, India
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
