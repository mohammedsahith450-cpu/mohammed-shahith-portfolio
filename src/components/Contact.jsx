import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown, Send, Mail, Phone } from 'lucide-react'

function LinkedinIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function GithubIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

/* ── Data ─────────────────────────────────────────── */
const COUNTRIES = [
  { code: 'IN', name: 'India', dialCode: '+91' },
  { code: 'US', name: 'United States', dialCode: '+1' },
  { code: 'GB', name: 'United Kingdom', dialCode: '+44' },
  { code: 'CA', name: 'Canada', dialCode: '+1' },
  { code: 'AU', name: 'Australia', dialCode: '+61' },
  { code: 'AE', name: 'United Arab Emirates', dialCode: '+971' },
  { code: 'SA', name: 'Saudi Arabia', dialCode: '+966' },
  { code: 'SG', name: 'Singapore', dialCode: '+65' },
  { code: 'DE', name: 'Germany', dialCode: '+49' },
  { code: 'FR', name: 'France', dialCode: '+33' },
  { code: 'NL', name: 'Netherlands', dialCode: '+31' },
  { code: 'IE', name: 'Ireland', dialCode: '+353' },
  { code: 'NZ', name: 'New Zealand', dialCode: '+64' },
  { code: 'JP', name: 'Japan', dialCode: '+81' },
  { code: 'MY', name: 'Malaysia', dialCode: '+60' },
  { code: 'QA', name: 'Qatar', dialCode: '+974' },
  { code: 'KW', name: 'Kuwait', dialCode: '+965' },
  { code: 'BH', name: 'Bahrain', dialCode: '+973' },
  { code: 'OM', name: 'Oman', dialCode: '+968' },
  { code: 'ZA', name: 'South Africa', dialCode: '+27' },
  { code: 'NG', name: 'Nigeria', dialCode: '+234' },
  { code: 'KE', name: 'Kenya', dialCode: '+254' },
  { code: 'PK', name: 'Pakistan', dialCode: '+92' },
  { code: 'BD', name: 'Bangladesh', dialCode: '+880' },
  { code: 'LK', name: 'Sri Lanka', dialCode: '+94' },
  { code: 'PH', name: 'Philippines', dialCode: '+63' },
  { code: 'ID', name: 'Indonesia', dialCode: '+62' },
  { code: 'TH', name: 'Thailand', dialCode: '+66' },
  { code: 'VN', name: 'Vietnam', dialCode: '+84' },
  { code: 'IT', name: 'Italy', dialCode: '+39' },
  { code: 'ES', name: 'Spain', dialCode: '+34' },
  { code: 'PT', name: 'Portugal', dialCode: '+351' },
  { code: 'CH', name: 'Switzerland', dialCode: '+41' },
  { code: 'SE', name: 'Sweden', dialCode: '+46' },
  { code: 'NO', name: 'Norway', dialCode: '+47' },
  { code: 'DK', name: 'Denmark', dialCode: '+45' },
  { code: 'FI', name: 'Finland', dialCode: '+358' },
  { code: 'AT', name: 'Austria', dialCode: '+43' },
  { code: 'BE', name: 'Belgium', dialCode: '+32' },
  { code: 'CN', name: 'China', dialCode: '+86' },
  { code: 'KR', name: 'South Korea', dialCode: '+82' },
  { code: 'BR', name: 'Brazil', dialCode: '+55' },
  { code: 'MX', name: 'Mexico', dialCode: '+52' },
  { code: 'AR', name: 'Argentina', dialCode: '+54' },
]

const CURRENCIES = [
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  { code: 'AED', symbol: 'AED', name: 'UAE Dirham' },
  { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar' },
  { code: 'SAR', symbol: 'SAR', name: 'Saudi Riyal' },
  { code: 'JPY', symbol: '¥', name: 'Japanese Yen' },
  { code: 'MYR', symbol: 'RM', name: 'Malaysian Ringgit' },
  { code: 'QAR', symbol: 'QAR', name: 'Qatari Riyal' },
]

const BUDGET_RANGES = {
  INR: ['₹10,000 – ₹25,000','₹25,000 – ₹50,000','₹50,000 – ₹1,00,000','₹1,00,000 – ₹2,50,000','₹2,50,000+','Not sure'],
  USD: ['$250 – $500','$500 – $1,000','$1,000 – $2,500','$2,500 – $5,000','$5,000+','Not sure'],
  EUR: ['€250 – €500','€500 – €1,000','€1,000 – €2,500','€2,500 – €5,000','€5,000+','Not sure'],
  GBP: ['£200 – £400','£400 – £800','£800 – £2,000','£2,000 – £4,000','£4,000+','Not sure'],
  AUD: ['A$400 – A$800','A$800 – A$1,500','A$1,500 – A$4,000','A$4,000 – A$8,000','A$8,000+','Not sure'],
  CAD: ['C$350 – C$700','C$700 – C$1,500','C$1,500 – C$3,500','C$3,500 – C$7,000','C$7,000+','Not sure'],
  AED: ['AED 1,000 – 2,000','AED 2,000 – 5,000','AED 5,000 – 10,000','AED 10,000 – 20,000','AED 20,000+','Not sure'],
  SGD: ['S$350 – S$700','S$700 – S$1,500','S$1,500 – S$3,500','S$3,500 – S$7,000','S$7,000+','Not sure'],
  SAR: ['SAR 1,000 – 2,000','SAR 2,000 – 4,000','SAR 4,000 – 10,000','SAR 10,000 – 20,000','SAR 20,000+','Not sure'],
  JPY: ['¥30,000 – ¥80,000','¥80,000 – ¥150,000','¥150,000 – ¥350,000','¥350,000 – ¥700,000','¥700,000+','Not sure'],
  MYR: ['RM 1,000 – 2,500','RM 2,500 – 5,000','RM 5,000 – 10,000','RM 10,000 – 25,000','RM 25,000+','Not sure'],
  QAR: ['QAR 1,000 – 2,000','QAR 2,000 – 5,000','QAR 5,000 – 10,000','QAR 10,000 – 20,000','QAR 20,000+','Not sure'],
}

const PROJECT_TYPES = [
  'Business Website',
  'Full-Stack Web Application',
  'Admin Dashboard',
  'E-commerce Website',
  'AI-Powered Application',
  'Cloud & Deployment',
  'Data Analytics',
  'Other',
]

/* ── Custom Select Component ───────────────────────── */
function CustomSelect({ id, placeholder, value, onChange, options, searchable = false }) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const handleEscape = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const filteredOptions = searchable
    ? options.filter((opt) =>
        opt.label.toLowerCase().includes(search.toLowerCase())
      )
    : options

  const selectedLabel = options.find((opt) => opt.value === value)?.label

  return (
    <div className="custom-select" ref={ref}>
      <button
        type="button"
        id={id}
        className={`custom-select-trigger${open ? ' open' : ''}${!value ? ' placeholder' : ''}`}
        onClick={() => setOpen(!open)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{selectedLabel || placeholder}</span>
        <ChevronDown size={16} className="select-chevron" />
      </button>

      {open && (
        <div className="custom-select-dropdown" role="listbox">
          {searchable && (
            <div className="custom-select-search">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                autoFocus
                aria-label="Search options"
              />
            </div>
          )}
          {filteredOptions.map((opt) => (
            <div
              key={opt.value}
              className={`custom-select-option${opt.value === value ? ' selected' : ''}`}
              role="option"
              aria-selected={opt.value === value}
              onClick={() => {
                onChange(opt.value)
                setOpen(false)
                setSearch('')
              }}
            >
              {opt.label}
            </div>
          ))}
          {filteredOptions.length === 0 && (
            <div className="custom-select-option" style={{ opacity: 0.5, cursor: 'default' }}>
              No results found
            </div>
          )}
        </div>
      )}
    </div>
  )
}

/* ── Main Contact Component ─────────────────────── */
export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })
  const [submitted, setSubmitted] = useState(false)

  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    dialCode: '+91',
    phone: '',
    company: '',
    projectType: '',
    currency: 'INR',
    budget: '',
    message: '',
  })

  const setField = (field) => (val) => setForm((prev) => ({ ...prev, [field]: val }))
  const setInput = (field) => (e) => setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleCurrencyChange = (val) => {
    setForm((prev) => ({ ...prev, currency: val, budget: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const countryOptions = COUNTRIES.map((c) => ({ value: c.code, label: `${c.name}` }))
  const dialOptions = COUNTRIES.map((c) => ({ value: c.dialCode + '_' + c.code, label: `${c.dialCode} ${c.name.substring(0,14)}` }))
  const currencyOptions = CURRENCIES.map((c) => ({ value: c.code, label: `${c.symbol} ${c.name}` }))
  const budgetOptions = (BUDGET_RANGES[form.currency] || BUDGET_RANGES.INR).map((b) => ({ value: b, label: b }))
  const projectOptions = PROJECT_TYPES.map((p) => ({ value: p, label: p }))

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  }
  const itemVariant = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-bg-glow" aria-hidden="true" />
      <div className="container">
        <motion.div
          className="contact-inner"
          variants={containerVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left */}
          <motion.div className="contact-left" variants={itemVariant}>
            <span className="section-tag">Contact</span>
            <h2 className="contact-heading">
              Have an idea?
              <br />
              Let&rsquo;s build it.
            </h2>
            <p className="contact-desc">
              Tell me what you&rsquo;re building and let&rsquo;s turn it into a
              polished digital product.
            </p>

            <div className="contact-info-list">
              <a
                href="mailto:mohammedsahith450@gmail.com"
                className="contact-info-item"
                id="contact-email"
              >
                <div className="contact-info-icon"><Mail size={16} /></div>
                mohammedsahith450@gmail.com
              </a>
              <a
                href="tel:+917845227057"
                className="contact-info-item"
                id="contact-phone"
              >
                <div className="contact-info-icon"><Phone size={16} /></div>
                +91 7845227057
              </a>
            </div>

            <div className="contact-socials">
              <a
                href="https://www.linkedin.com/in/mohamed-sahith-4719792a6"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                id="contact-linkedin"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="https://github.com/mohammedsahith450-cpu"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                id="contact-github"
                aria-label="GitHub profile"
              >
                <GithubIcon size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div className="contact-form-wrap" variants={itemVariant}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
                <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--color-text-primary)', marginBottom: 8 }}>
                  Message Sent!
                </div>
                <div style={{ fontSize: 15, color: 'var(--color-text-secondary)' }}>
                  Thank you for reaching out. I&rsquo;ll get back to you soon.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-name">Name *</label>
                    <input
                      id="f-name"
                      className="form-input"
                      type="text"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={setInput('name')}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-email">Email *</label>
                    <input
                      id="f-email"
                      className="form-input"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={setInput('email')}
                      required
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-country">Country</label>
                    <CustomSelect
                      id="f-country"
                      placeholder="Select country"
                      value={form.country}
                      onChange={setField('country')}
                      options={countryOptions}
                      searchable
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-company">Company / Business</label>
                    <input
                      id="f-company"
                      className="form-input"
                      type="text"
                      placeholder="Your company name"
                      value={form.company}
                      onChange={setInput('company')}
                      autoComplete="organization"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="f-phone">Phone Number</label>
                  <div className="phone-row">
                    <CustomSelect
                      id="f-dial"
                      placeholder="+91"
                      value={form.dialCode + '_IN'}
                      onChange={(val) => setForm((prev) => ({ ...prev, dialCode: val.split('_')[0] }))}
                      options={dialOptions}
                      searchable
                    />
                    <input
                      id="f-phone"
                      className="form-input"
                      type="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={setInput('phone')}
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="f-project-type">Project Type</label>
                  <CustomSelect
                    id="f-project-type"
                    placeholder="What do you need?"
                    value={form.projectType}
                    onChange={setField('projectType')}
                    options={projectOptions}
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-currency">Currency</label>
                    <CustomSelect
                      id="f-currency"
                      placeholder="INR"
                      value={form.currency}
                      onChange={handleCurrencyChange}
                      options={currencyOptions}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="f-budget">Budget Range</label>
                    <CustomSelect
                      id="f-budget"
                      placeholder="Select budget"
                      value={form.budget}
                      onChange={setField('budget')}
                      options={budgetOptions}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="f-message">Message *</label>
                  <textarea
                    id="f-message"
                    className="form-textarea"
                    placeholder="Tell me about your project, goals, timeline..."
                    value={form.message}
                    onChange={setInput('message')}
                    required
                    rows={4}
                  />
                </div>

                <button type="submit" className="btn-submit" id="form-submit">
                  <Send size={16} />
                  Start a Project
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
