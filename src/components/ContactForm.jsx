import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Sparkles, Building2, User, Megaphone, ChevronRight } from 'lucide-react'
import { supabase } from '../lib/supabase'

const WHO_OPTIONS = [
  {
    value: 'brand',
    label: "I'm a Brand",
    sub: 'Looking to run a campaign',
    icon: Building2,
    color: 'accent',
  },
  {
    value: 'creator',
    label: "I'm a Creator",
    sub: 'Ready for my next collab',
    icon: User,
    color: 'cyan',
  },
  {
    value: 'other',
    label: 'Something Else',
    sub: 'Partnership, press or other',
    icon: Megaphone,
    color: 'purple',
  },
]

const colorMap = {
  accent: {
    border: 'border-accent/60',
    bg: 'bg-accent/8',
    icon: 'text-accent',
    dot: 'bg-accent',
    ring: 'shadow-[0_0_20px_rgba(255,107,53,0.15)]',
  },
  cyan: {
    border: 'border-cyan/60',
    bg: 'bg-cyan/8',
    icon: 'text-cyan',
    dot: 'bg-cyan',
    ring: 'shadow-[0_0_20px_rgba(6,182,212,0.15)]',
  },
  purple: {
    border: 'border-purple/60',
    bg: 'bg-purple/8',
    icon: 'text-purple-light',
    dot: 'bg-purple',
    ring: 'shadow-[0_0_20px_rgba(168,85,247,0.15)]',
  },
}

export default function ContactForm({ defaultType }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    type: defaultType || 'brand',
    message: '',
  })
  const [status, setStatus] = useState('idle')
  const [focused, setFocused] = useState(null)

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      if (!supabase) {
        console.warn('Supabase not configured. Form data:', form)
        await new Promise((r) => setTimeout(r, 900))
        setStatus('success')
        return
      }
      const tableMap = { brand: 'brand_leads', creator: 'creator_leads', other: 'other_leads' }
      const table = tableMap[form.type] || 'other_leads'
      const { error } = await supabase.from(table).insert([
        { name: form.name, email: form.email, company: form.company || null, message: form.message },
      ])
      if (error) throw error
      setStatus('success')
      setForm({ name: '', email: '', company: '', type: 'brand', message: '' })
    } catch (err) {
      console.error('Supabase error:', err)
      setStatus('error')
    }
  }

  // ── Success state ──────────────────────────────────────────────
  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="flex flex-col items-center justify-center text-center py-20 gap-6"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, delay: 0.15 }}
          className="w-20 h-20 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center"
        >
          <CheckCircle size={36} className="text-accent" />
        </motion.div>
        <div>
          <h3 className="font-heading text-3xl font-bold text-text mb-2">We got it!</h3>
          <p className="font-body text-text-muted text-[16px] font-light leading-relaxed max-w-[280px] mx-auto">
            Expect to hear from us within 24 hours. <Sparkles size={14} className="inline text-accent" />
          </p>
        </div>
      </motion.div>
    )
  }

  // ── Field class helper ─────────────────────────────────────────
  const field = (name) =>
    `w-full bg-transparent border-b-2 ${
      focused === name ? 'border-accent' : 'border-border'
    } pt-2 pb-3 text-[15px] text-text placeholder:text-text-dim focus:outline-none transition-colors duration-200 font-body`

  const selectedWho = WHO_OPTIONS.find((o) => o.value === form.type)
  const c = colorMap[selectedWho?.color || 'accent']

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-10">

      {/* Who are you? */}
      <div>
        <p className="font-mono text-[10px] tracking-[0.25em] text-text-muted uppercase mb-4 font-medium">
          01 — Who are you?
        </p>
        <div className="grid grid-cols-3 gap-3">
          {WHO_OPTIONS.map((opt) => {
            const active = form.type === opt.value
            const cm = colorMap[opt.color]
            return (
              <button
                key={opt.value}
                type="button"
                onClick={() => setForm((p) => ({ ...p, type: opt.value }))}
                className={`relative flex flex-col items-start gap-2 rounded-2xl border p-4 text-left transition-all duration-250 cursor-pointer ${
                  active
                    ? `${cm.border} ${cm.bg} ${cm.ring}`
                    : 'border-border bg-bg-elevated/40 hover:border-border/80'
                }`}
              >
                {active && (
                  <motion.div
                    layoutId="whoActive"
                    className={`absolute inset-0 rounded-2xl ${cm.bg}`}
                    transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                  />
                )}
                <div className="relative z-10 flex flex-col gap-2 w-full">
                  <opt.icon size={18} className={active ? cm.icon : 'text-text-muted'} />
                  <div>
                    <p className={`font-heading text-[13px] font-bold leading-tight ${active ? 'text-text' : 'text-text-muted'}`}>
                      {opt.label}
                    </p>
                    <p className="font-body text-[11px] text-text-muted/70 font-light leading-snug mt-0.5 hidden sm:block">
                      {opt.sub}
                    </p>
                  </div>
                </div>
                {active && <motion.div layoutId="whoDot" className={`absolute top-3 right-3 w-2 h-2 rounded-full ${cm.dot}`} />}
              </button>
            )
          })}
        </div>
      </div>

      {/* Name + Email */}
      <div>
        <p className="font-mono text-[10px] tracking-[0.25em] text-text-muted uppercase mb-6 font-medium">
          02 — Your Details
        </p>
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[10px] tracking-[0.18em] text-text-muted/60 uppercase font-medium">
              Full Name *
            </label>
            <input
              name="name"
              type="text"
              placeholder="Jane Smith"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused(null)}
              className={field('name')}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-mono text-[10px] tracking-[0.18em] text-text-muted/60 uppercase font-medium">
              Email *
            </label>
            <input
              name="email"
              type="email"
              placeholder="jane@brand.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
              className={field('email')}
            />
          </div>
          <div className="flex flex-col gap-1 sm:col-span-2">
            <label className="font-mono text-[10px] tracking-[0.18em] text-text-muted/60 uppercase font-medium">
              Brand / Company
            </label>
            <input
              name="company"
              type="text"
              placeholder="Your brand name (optional)"
              value={form.company}
              onChange={handleChange}
              onFocus={() => setFocused('company')}
              onBlur={() => setFocused(null)}
              className={field('company')}
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <p className="font-mono text-[10px] tracking-[0.25em] text-text-muted uppercase mb-6 font-medium">
          03 — Tell Us More
        </p>
        <div className="flex flex-col gap-1">
          <label className="font-mono text-[10px] tracking-[0.18em] text-text-muted/60 uppercase font-medium">
            Project Details *
          </label>
          <textarea
            name="message"
            placeholder="What are your goals, timeline, and budget range? The more you share, the better we can help."
            required
            rows={4}
            value={form.message}
            onChange={handleChange}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused(null)}
            className={field('message') + ' resize-none'}
          />
        </div>
      </div>

      {/* Error */}
      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="flex items-center gap-2 text-[13px] font-body text-accent/90"
          >
            <AlertCircle size={15} />
            Something went wrong — please try again.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400 }}
        className="gradient-btn self-start px-8 py-4 rounded-full font-body text-[15px] font-bold tracking-wide flex items-center gap-3 disabled:opacity-50 cursor-pointer whitespace-nowrap"
      >
        {status === 'loading' ? (
          <>
            <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1, repeat: Infinity }}>
              Sending…
            </motion.span>
          </>
        ) : (
          <>
            Send Message
            <ChevronRight size={17} strokeWidth={2.5} />
          </>
        )}
      </motion.button>

    </form>
  )
}
