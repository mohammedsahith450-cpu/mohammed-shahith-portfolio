import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
})

const photoVariant = {
  initial: { opacity: 0, x: 40, scale: 0.94 },
  animate: { opacity: 1, x: 0, scale: 1 },
  transition: { delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
}

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      {/* Background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid" />
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div className="hero-noise" />
      </div>

      <div className="hero-inner">
        {/* Left content */}
        <div className="hero-content">
          <motion.div className="hero-eyebrow" {...fadeUp(0.1)}>
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            Full-Stack Developer
          </motion.div>

          <motion.h1 className="hero-headline" {...fadeUp(0.22)}>
            Building digital products
            <br />
            that{' '}
            <span className="hero-headline-accent">businesses</span>
            <br />
            can rely on.
          </motion.h1>

          <motion.p className="hero-description" {...fadeUp(0.36)}>
            I design and develop modern websites, full-stack applications,
            dashboards and digital experiences for businesses.
          </motion.p>

          <motion.div className="hero-cta-row" {...fadeUp(0.48)}>
            <button className="btn-primary" onClick={scrollToWork} id="hero-view-projects">
              View Projects <ArrowRight size={16} />
            </button>
            <button className="btn-secondary" onClick={scrollToContact} id="hero-start-project">
              Start a Project
            </button>
          </motion.div>

          <motion.div className="hero-availability" {...fadeUp(0.58)}>
            <span className="availability-dot" aria-hidden="true" />
            Available for selected freelance projects
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div className="hero-photo-wrap" {...photoVariant}>
          <motion.div
            className="hero-photo-frame"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop' }}
          >
            <div className="hero-photo-bg" />
            <img
              src="/profile.jpg"
              alt="Mohammed Shahith — Full-Stack Developer"
              className="hero-photo-img"
              loading="eager"
            />
            {/* Corner accents */}
            <div className="photo-corner tl" aria-hidden="true" />
            <div className="photo-corner tr" aria-hidden="true" />
            <div className="photo-corner bl" aria-hidden="true" />
            <div className="photo-corner br" aria-hidden="true" />

            {/* Tech labels */}
            <motion.div
              className="tech-label label-react"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              <span className="tech-label-icon">⚛</span>
              React
            </motion.div>

            <motion.div
              className="tech-label label-supabase"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.15, duration: 0.5 }}
            >
              <span className="tech-label-icon">⚡</span>
              Supabase
            </motion.div>

            <motion.div
              className="tech-label label-fullstack"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
            >
              <span className="tech-label-icon">🔧</span>
              Full-Stack
            </motion.div>

            <motion.div
              className="tech-label label-ai"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.45, duration: 0.5 }}
            >
              <span className="tech-label-icon">🧠</span>
              AI & Data
            </motion.div>
          </motion.div>

          <div className="hero-signature">
            Mohammed Shahith · Full-Stack Developer
          </div>
        </motion.div>
      </div>
    </section>
  )
}
