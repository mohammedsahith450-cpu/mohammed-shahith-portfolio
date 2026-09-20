import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowUpRight, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    num: '01',
    title: 'Business Websites',
    desc: 'Modern, responsive websites for businesses. Fast, SEO-friendly, and conversion-focused.',
    tags: ['React', 'HTML/CSS', 'Netlify'],
  },
  {
    num: '02',
    title: 'Full-Stack Web Applications',
    desc: 'Scalable and secure web applications with authentication, databases, and real-time features.',
    tags: ['React', 'Supabase', 'Node.js'],
  },
  {
    num: '03',
    title: 'Admin Dashboards',
    desc: 'Custom dashboards for business operations — analytics, data management, user control.',
    tags: ['React', 'Data Viz', 'Auth'],
  },
  {
    num: '04',
    title: 'E-commerce Websites',
    desc: 'Online stores with modern features — product listings, payments, and inventory management.',
    tags: ['React', 'Database', 'Storage'],
  },
  {
    num: '05',
    title: 'AI-Powered Applications',
    desc: 'AI integration and data-driven solutions built with Python, ML pipelines, and smart interfaces.',
    tags: ['Python', 'ML', 'APIs'],
  },
  {
    num: '06',
    title: 'Cloud & Deployment',
    desc: 'Deployment, cloud setup and maintenance. CI/CD, hosting, and performance optimization.',
    tags: ['Netlify', 'Supabase', 'Git'],
  },
]

const containerVariant = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const rowVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 })

  return (
    <section id="services" className="services" ref={ref}>
      <div className="container">
        <div className="services-header">
          <div>
            <span className="section-tag">Services</span>
            <h2 className="services-heading">What I can help you with</h2>
          </div>
          <a
            href="#contact"
            className="view-all-link"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View All <ArrowRight size={14} />
          </a>
        </div>

        <motion.div
          variants={containerVariant}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.num}
              className="service-row"
              variants={rowVariant}
              role="article"
            >
              <span className="service-number">{service.num}</span>
              <div className="service-info">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
              <div className="service-tags">
                {service.tags.map((t) => (
                  <span className="service-tag" key={t}>{t}</span>
                ))}
              </div>
              <div className="service-arrow" aria-hidden="true">
                <ArrowUpRight size={16} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
