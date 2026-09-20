import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function CertModal({ onClose }) {
  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content"
        style={{ maxWidth: 560 }}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close certificate modal">✕</button>
        <div className="modal-body">
          <div className="case-study-project-num">CERTIFICATION</div>
          <h2 className="case-study-title">Introduction to Data Analytics</h2>
          <div className="case-study-subtitle" style={{ marginBottom: 28 }}>VDart Academy · 2026</div>

          {/* Certificate card visual */}
          <div style={{
            background: 'linear-gradient(135deg, #0f1824, #1a2540)',
            border: '1px solid rgba(59,130,246,0.3)',
            borderRadius: 16,
            padding: '40px 36px',
            textAlign: 'center',
            marginBottom: 24,
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Corner decorations */}
            <div style={{ position:'absolute', top:12, left:12, width:28, height:28, borderTop:'2px solid #3b82f6', borderLeft:'2px solid #3b82f6', borderRadius:4 }} />
            <div style={{ position:'absolute', top:12, right:12, width:28, height:28, borderTop:'2px solid #3b82f6', borderRight:'2px solid #3b82f6', borderRadius:4 }} />
            <div style={{ position:'absolute', bottom:12, left:12, width:28, height:28, borderBottom:'2px solid #3b82f6', borderLeft:'2px solid #3b82f6', borderRadius:4 }} />
            <div style={{ position:'absolute', bottom:12, right:12, width:28, height:28, borderBottom:'2px solid #3b82f6', borderRight:'2px solid #3b82f6', borderRadius:4 }} />

            <div style={{ fontSize:48, marginBottom:16 }}>🎓</div>
            <div style={{ fontSize:12, letterSpacing:'0.15em', textTransform:'uppercase', color:'#3b82f6', marginBottom:12 }}>Certificate of Completion</div>
            <div style={{ fontSize:22, fontWeight:800, color:'#f0f4ff', marginBottom:6, letterSpacing:'-0.02em' }}>Introduction to Data Analytics</div>
            <div style={{ fontSize:14, color:'rgba(240,244,255,0.6)', marginBottom:20 }}>Presented to Mohammed Shahith.S</div>
            <div style={{ fontSize:13, color:'rgba(240,244,255,0.5)', marginBottom:8 }}>1 September 2026</div>
            <div style={{ fontSize:11, color:'rgba(240,244,255,0.35)', fontFamily:'monospace' }}>Certificate Code: 10680407</div>
          </div>

          <div style={{ fontSize:13, color:'rgba(240,244,255,0.5)', textAlign:'center' }}>
            Issued by VDart Academy · Tiruchirapalli
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

const EXPERIENCE = [
  {
    date: '12/2025 – 01/2026',
    role: 'E-commerce Support',
    org: 'Mayilathurai, Tamil Nadu',
    tasks: [
      'Product listings management',
      'Product descriptions & pricing',
      'Stock & category optimization',
      'Image standardization',
      'Listing corrections & support',
    ],
  },
  {
    date: '09/2025 – 02/2026',
    role: 'Data Analytics Intern',
    org: 'VDart Academy, Tiruchirapalli',
    tasks: [
      'Data analytics training',
      'Data processing & analysis',
      'Data interpretation',
      'Real-world datasets',
      'Team collaboration',
    ],
  },
]

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Experience() {
  const [certOpen, setCertOpen] = useState(false)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <>
      <section id="experience" className="experience" ref={ref}>
        <div className="container">
          <span className="section-tag">Experience & Education</span>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            color: 'var(--color-text-primary)',
            marginTop: 8,
            marginBottom: 0,
          }}>
            My professional journey
          </h2>

          <motion.div
            className="exp-grid"
            variants={containerVariant}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {/* Experience column */}
            <motion.div variants={itemVariant}>
              <div className="exp-col-heading">My professional journey</div>
              <div className="exp-timeline">
                {EXPERIENCE.map((exp) => (
                  <div className="exp-item" key={exp.role}>
                    <div className="exp-dot" />
                    <div className="exp-date">{exp.date}</div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-org">{exp.org}</div>
                    <div className="exp-tasks">
                      {exp.tasks.map((task) => (
                        <div className="exp-task" key={task}>{task}</div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education column */}
            <motion.div variants={itemVariant}>
              <div className="exp-col-heading">Academic background</div>
              <div className="edu-item" style={{ marginBottom: 16 }}>
                <div className="edu-degree">B.Tech CSE (AI & DS)</div>
                <div className="edu-university">Dhanalakshmi Srinivasan University</div>
                <div className="edu-years">2023 – 2027</div>
              </div>
              <div className="edu-item">
                <div className="edu-degree">Higher Secondary</div>
                <div className="edu-university">Dhanalakshmi Higher Secondary School</div>
                <div className="edu-years">2022 – 2023</div>
              </div>
            </motion.div>

            {/* Certification column */}
            <motion.div variants={itemVariant}>
              <div className="exp-col-heading">Certification</div>
              <button
                className="cert-card"
                onClick={() => setCertOpen(true)}
                id="cert-card-btn"
                aria-label="View certification details"
                style={{ width: '100%', text: 'left' }}
              >
                <div className="cert-icon-wrap" aria-hidden="true">🎓</div>
                <div className="cert-name">Introduction to Data Analytics</div>
                <div className="cert-meta">1 September 2026</div>
                <div className="cert-meta">VDart Academy</div>
                <div className="cert-code">Code: 10680407</div>
                <div className="cert-view-btn">
                  View Certificate →
                </div>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {certOpen && <CertModal onClose={() => setCertOpen(false)} />}
    </>
  )
}
