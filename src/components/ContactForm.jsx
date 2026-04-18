import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'
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
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-16"
      >
        <CheckCircle size={48} className="text-accent mx-auto mb-6" />
        <h3 className="font-heading text-3xl font-bold text-text mb-4">
          Message Sent!
        </h3>
        <p className="font-body text-text-muted text-[16px] font-light">
          We'll be in touch soon. 🎯
        </p>
      </motion.div>
    )
  }

  const inputClasses =
    'w-full bg-[#FAFAFA] border border-border rounded-xl px-5 py-4 text-[15px] text-text placeholder:text-text-muted/60 focus:outline-none focus:border-[rgba(255,90,95,0.4)] focus:bg-white focus:shadow-[0_0_15px_rgba(255,90,95,0.05)] transition-all'

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      <div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-text mb-2">Send us a message</h2>
        <p className="font-body text-text-muted text-[15px] font-light">Fill out the form and we'll get back to you within 24 hours.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block font-heading text-[13px] tracking-[0.1em] text-text uppercase mb-2 font-semibold">Your Name *</label>
          <input
            name="name"
            type="text"
            placeholder="John Doe"
            required
            value={form.name}
            onChange={handleChange}
            className={inputClasses}
            style={{ fontFamily: 'var(--font-body)' }}
          />
        </div>
        <div>
          <label className="block font-heading text-[13px] tracking-[0.1em] text-text uppercase mb-2 font-semibold">Email *</label>
          <input
            name="email"
            type="email"
            placeholder="you@company.com"
            required
            value={form.email}
            onChange={handleChange}
            className={inputClasses}
            style={{ fontFamily: 'var(--font-body)' }}
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block font-heading text-[13px] tracking-[0.1em] text-text uppercase mb-2 font-semibold">Company</label>
          <input
            name="company"
            type="text"
            placeholder="Your Brand (optional)"
            value={form.company}
            onChange={handleChange}
            className={inputClasses}
            style={{ fontFamily: 'var(--font-body)' }}
          />
        </div>
        <div>
          <label className="block font-heading text-[13px] tracking-[0.1em] text-text uppercase mb-2 font-semibold">I am a...</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className={inputClasses + ' appearance-none cursor-pointer'}
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <option value="brand">I'm a Brand</option>
            <option value="creator">I'm a Creator</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block font-heading text-[13px] tracking-[0.1em] text-text uppercase mb-2 font-semibold">Project Details *</label>
        <textarea
          name="message"
          placeholder="Tell us about your project, goals, and timeline..."
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className={inputClasses + ' resize-none'}
          style={{ fontFamily: 'var(--font-body)' }}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-center gap-2 text-accent-dark font-body text-[14px]">
          <AlertCircle size={16} />
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="gradient-btn px-10 py-5 rounded-full font-body text-[16px] font-bold tracking-wide flex items-center justify-center gap-3 disabled:opacity-50 w-full md:w-auto whitespace-nowrap"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
        <Send size={18} />
      </button>
    </form>
  )
}
