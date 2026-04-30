import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
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
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled
          ? 'rgba(10, 10, 10, 0.85)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.06)'
          : '1px solid transparent',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-12 py-5 w-full">
        {/* Logo — animated on scroll */}
        <Link to="/" className="flex items-center gap-3 no-underline group">
          <motion.img
            src="/logo.png"
            alt="CollabCell Media"
            className="w-10 h-10 object-contain"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
          <span className="font-heading text-[17px] md:text-[19px] font-bold tracking-[0.12em] text-text group-hover:text-accent transition-colors duration-300">
            COLLABCELL MEDIA
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`link-animated font-body text-[14px] tracking-wide no-underline transition-colors duration-300 font-medium relative ${
                location.pathname === link.path
                  ? 'text-accent'
                  : 'text-text-muted hover:text-text'
              }`}
            >
              {link.name}
              {/* Active indicator dot */}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="navIndicator"
                  className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="gradient-btn px-7 py-3 rounded-full text-[13px] font-body font-bold tracking-wide no-underline"
          >
            <span>Let's Talk</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-text bg-transparent border-none cursor-pointer p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden glass border-t border-border px-6 py-8"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={`font-body text-xl font-medium no-underline min-h-[44px] flex items-center ${
                      location.pathname === link.path
                        ? 'text-accent'
                        : 'text-text'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                className="gradient-btn px-6 py-4 rounded-full text-center text-[16px] font-body font-bold no-underline mt-4 min-h-[52px] flex items-center justify-center"
              >
                <span>Let's Talk</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
