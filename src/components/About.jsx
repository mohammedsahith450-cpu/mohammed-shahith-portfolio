import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

const traits = [
  { icon: '🌐', label: 'Web Development', sub: 'Modern & responsive' },
  { icon: '📊', label: 'Data & Analytics', sub: 'Insights from data' },
  { icon: '🧩', label: 'Problem Solving', sub: 'Clean architecture' },
  { icon: '📚', label: 'Always Learning', sub: 'Latest technologies' },
]

const metaItems = [
  { icon: '👤', label: 'Name', value: 'Mohammed Shahith.S' },
  { icon: '📍', label: 'Location', value: 'Kumbakonam, Tamil Nadu, India' },
  { icon: '🎓', label: 'Education', value: 'B.Tech CSE (AI & DS)' },
  { icon: '📅', label: 'Year', value: '2023 – 2027' },
]

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section id="about" className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-inner"
          variants={containerVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Left */}
          <div className="about-left">
            <motion.span className="section-tag" variants={itemVariant}>About Me</motion.span>

            <motion.h2 className="about-heading" variants={itemVariant}>
              Building with code,
              <br />
              thinking with{' '}
              <span className="about-heading-accent">data.</span>
            </motion.h2>

            <motion.p className="about-desc" variants={itemVariant}>
              I&rsquo;m Mohammed Shahith, a Full-Stack Developer with a background in
              AI &amp; Data Science. I build modern websites, full-stack applications,
              dashboards, and data-driven solutions that help businesses grow.
            </motion.p>

            <motion.p className="about-desc" variants={itemVariant}>
              I enjoy turning ideas into real products that people can use &mdash;
              combining clean frontend experiences with solid backend architecture
              and data-aware thinking.
            </motion.p>

            <motion.a
              href="#work"
              className="about-more-btn"
              variants={itemVariant}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View My Work
              <span className="btn-arrow"><ArrowRight size={16} /></span>
            </motion.a>
          </div>

          {/* Right */}
          <div className="about-right">
            <motion.div className="about-meta-card" variants={itemVariant}>
              {metaItems.map((item) => (
                <div className="about-meta-item" key={item.label}>
                  <div className="about-meta-icon" aria-hidden="true">{item.icon}</div>
                  <div className="about-meta-content">
                    <div className="about-meta-label">{item.label}</div>
                    <div className="about-meta-value">{item.value}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div className="about-traits" variants={itemVariant}>
              {traits.map((t) => (
                <div className="trait-card" key={t.label}>
                  <div className="trait-icon" aria-hidden="true">{t.icon}</div>
                  <div>
                    <div className="trait-label">{t.label}</div>
                    <div className="trait-sub">{t.sub}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
