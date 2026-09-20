import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'

const SKILL_CATEGORIES = [
  {
    label: 'Full-Stack',
    heading: 'Development',
    skills: ['React', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Supabase', 'Git', 'GitHub', 'Netlify'],
  },
  {
    label: 'Database',
    heading: 'Data Management',
    skills: ['SQL', 'Supabase', 'Database Design', 'Database Management'],
  },
  {
    label: 'Data & AI',
    heading: 'Analytics & ML',
    skills: ['Python', 'Data Analytics', 'Data Visualization', 'EDA', 'Machine Learning', 'Pandas', 'Matplotlib'],
  },
]

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="skills" ref={ref}>
      <div className="container">
        <div className="skills-header">
          <div>
            <span className="section-tag">Skills</span>
            <h2 className="skills-heading">Technologies I work with</h2>
          </div>
          <a
            href="#contact"
            className="view-all-link"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View All Skills <ArrowRight size={14} />
          </a>
        </div>

        <motion.div
          className="skills-grid"
          variants={containerVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {SKILL_CATEGORIES.map((cat) => (
            <motion.div key={cat.label} className="skill-category" variants={cardVariant}>
              <div className="skill-cat-label">{cat.label}</div>
              <h3 className="skill-cat-heading">{cat.heading}</h3>
              <div className="skill-items">
                {cat.skills.map((skill) => (
                  <div className="skill-item" key={skill}>
                    <div className="skill-item-dot" aria-hidden="true" />
                    <span className="skill-item-name">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
