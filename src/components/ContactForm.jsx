import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, CheckCircle, AlertCircle, Sparkles } from 'lucide-react'
import { supabase } from '../lib/supabase'

export default function ContactForm({ defaultType }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    type: defaultType || 'brand',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [focusedField, setFocusedField] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    try {
      if (!supabase) {
        // Supabase not configured — simulate success for development
        console.warn('Supabase not configured. Form data:', form)
        setStatus('success')
        setForm({ name: '', email: '', company: '', type: 'brand', message: '' })
        return
      }

      const { error } = await supabase.from('leads').insert([
        {
          name: form.name,
          email: form.email,
          company: form.company || null,
          type: form.type,
          message: form.message,
        },
      ])

      if (error) throw error
      setStatus('success')
      setForm({ name: '', email: '', company: '', type: 'brand', message: '' })
    } catch (err) {
      console.error('Supabase error:', err)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="text-center py-16"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 400, delay: 0.2 }}
        >
          <CheckCircle size={48} className="text-accent mx-auto mb-6" />
        </motion.div>
        <h3 className="font-heading text-3xl font-bold text-text mb-4">
          Message Sent!
        </h3>
        <p className="font-body text-text-muted text-[16px] font-light flex items-center justify-center gap-2">
          We'll be in touch soon. <Sparkles size={16} className="text-accent" />
        </p>
      </motion.div>
    )
  }

  const inputClasses =
    'w-full bg-bg-elevated border border-border rounded-xl px-5 py-4 text-[15px] text-text placeholder:text-text-dim focus:outline-none focus:border-accent/40 focus:bg-bg-card focus:shadow-[0_0_20px_rgba(255,107,53,0.05)] transition-all duration-300 font-body'

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-text mb-2">
          Send us a message
        </h2>
        <p className="font-body text-text-muted text-[14px] font-light">
          Fill out the form and we'll get back to you within 24 hours.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="input-focus-line relative">
          <label className="block font-mono text-[11px] tracking-[0.15em] text-text-muted uppercase mb-2 font-medium">
            Your Name *
          </label>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            required
            value={form.name}
            onChange={handleChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            className={inputClasses}
          />
        </div>
        <div className="input-focus-line relative">
          <label className="block font-mono text-[11px] tracking-[0.15em] text-text-muted uppercase mb-2 font-medium">
            Email *
          </label>
          <input
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            value={form.email}
            onChange={handleChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-5">
        <div className="input-focus-line relative">
          <label className="block font-mono text-[11px] tracking-[0.15em] text-text-muted uppercase mb-2 font-medium">
            Company
          </label>
          <input
            name="company"
            type="text"
            placeholder="Your Brand (optional)"
            value={form.company}
            onChange={handleChange}
            onFocus={() => setFocusedField('company')}
            onBlur={() => setFocusedField(null)}
            className={inputClasses}
          />
        </div>
        <div className="input-focus-line relative">
          <label className="block font-mono text-[11px] tracking-[0.15em] text-text-muted uppercase mb-2 font-medium">
            I am a...
          </label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className={inputClasses + ' appearance-none cursor-pointer'}
          >
            <option value="brand">I'm a Brand</option>
            <option value="creator">I'm a Creator</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="input-focus-line relative">
        <label className="block font-mono text-[11px] tracking-[0.15em] text-text-muted uppercase mb-2 font-medium">
          Project Details *
        </label>
        <textarea
          name="message"
          placeholder="Tell us about your project, goals, and timeline..."
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          className={inputClasses + ' resize-none'}
        />
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center gap-2 text-accent font-body text-[14px]"
          >
            <AlertCircle size={16} />
            Something went wrong. Please try again.
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={status === 'loading'}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 400 }}
        className="gradient-btn px-10 py-5 rounded-full font-body text-[16px] font-bold tracking-wide flex items-center justify-center gap-3 disabled:opacity-50 w-full md:w-auto whitespace-nowrap cursor-pointer"
      >
        <span className="flex items-center gap-3">
          {status === 'loading' ? 'Sending...' : 'Send Message'}
          <Send size={18} />
        </span>
      </motion.button>
    </form>
  )
}
