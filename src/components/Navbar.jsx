import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Services', path: '/services' },
  { name: 'Work', path: '/work' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 py-5 w-full">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 no-underline">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent via-accent-light to-teal flex items-center justify-center shadow-lg">
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
              <path d="M13 8L1 15V1L13 8Z" fill="white" />
            </svg>
          </div>
          <span className="font-heading text-[18px] md:text-[20px] font-bold tracking-[0.15em] text-text">
            COLLABCELL MEDIA
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-body text-[15px] tracking-wide no-underline transition-colors duration-300 font-medium ${
                location.pathname === link.path
                  ? 'text-accent'
                  : 'text-text hover:text-accent-light'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="gradient-btn px-8 py-3 rounded-full text-[14px] font-body font-bold tracking-wide no-underline shadow-md"
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          className="md:hidden bg-bg-light border-t border-border px-6 py-8 shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-body text-xl font-medium no-underline ${
                  location.pathname === link.path ? 'text-accent' : 'text-text'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="gradient-btn px-6 py-4 rounded-full text-center text-[16px] font-body font-bold no-underline mt-4"
            >
              Let's Talk
            </Link>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
