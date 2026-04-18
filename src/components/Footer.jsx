import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  { icon: InstagramIcon, href: 'https://instagram.com/collabcellmedia', label: 'Instagram' },
  { icon: WhatsAppIcon, href: 'https://wa.me/919999999999', label: 'WhatsApp' },
  { icon: () => <Mail size={16} />, href: 'mailto:hello@collabcellmedia.com', label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white mt-auto pt-8">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent via-accent-light to-teal flex items-center justify-center shadow-md">
                <svg width="12" height="14" viewBox="0 0 14 16" fill="none">
                  <path d="M13 8L1 15V1L13 8Z" fill="white" />
                </svg>
              </div>
              <span className="font-heading text-[18px] font-bold tracking-[0.15em] text-text">
                COLLABCELL MEDIA
              </span>
            </div>
            <p className="font-body text-text-muted text-[15px] leading-[1.7] max-w-[300px] font-light">
              Empowering Creators. Unleashing Potential. India's leading creator-brand marketing agency.
            </p>
          </div>
          <div>
            <p className="font-heading text-[13px] tracking-[0.2em] text-text font-semibold uppercase mb-6">Navigate</p>
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link key={link.name} to={link.path} className="font-body text-[15px] text-text-muted hover:text-accent transition-colors no-underline font-light">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-heading text-[13px] tracking-[0.2em] text-text font-semibold uppercase mb-6">Connect</p>
            <div className="flex gap-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-12 h-12 rounded-xl bg-bg border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-[rgba(255,90,95,0.3)] hover:shadow-md transition-all no-underline bg-white shadow-sm">
                  <Icon />
                </a>
              ))}
            </div>
            <p className="font-body text-text-muted text-[14px] mt-6 font-light">@collabcellmedia</p>
          </div>
        </div>
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-text-muted text-[13px] font-light">© {new Date().getFullYear()} CollabCell Media. All rights reserved.</p>
          <p className="font-body text-text-muted text-[13px] font-light">New Delhi, India</p>
        </div>
      </div>
    </footer>
  )
}
