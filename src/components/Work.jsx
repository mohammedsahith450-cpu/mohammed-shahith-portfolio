import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, ArrowRight, ArrowUpRight } from 'lucide-react'

function GithubIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

/* ── SVG Mockups ─────────────────────────────────── */

function PizzaMockup() {
  return (
    <svg viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      {/* Background */}
      <rect width="480" height="340" fill="#0d0e10" />
      {/* Nav bar */}
      <rect x="0" y="0" width="480" height="48" fill="#1a0a00" />
      <rect x="20" y="16" width="80" height="16" rx="3" fill="#ff6b1a" opacity="0.9" />
      <rect x="280" y="18" width="40" height="12" rx="2" fill="#555" />
      <rect x="330" y="18" width="40" height="12" rx="2" fill="#555" />
      <rect x="380" y="18" width="40" height="12" rx="2" fill="#555" />
      <rect x="430" y="14" width="36" height="20" rx="10" fill="#ff6b1a" />
      {/* Hero section */}
      <rect x="0" y="48" width="480" height="150" fill="#1a1200" />
      <rect x="20" y="68" width="120" height="10" rx="2" fill="#ff6b1a" opacity="0.7" />
      <rect x="20" y="85" width="200" height="20" rx="3" fill="#fff" opacity="0.9" />
      <rect x="20" y="110" width="160" height="14" rx="3" fill="#fff" opacity="0.6" />
      <rect x="20" y="130" width="130" height="14" rx="3" fill="#fff" opacity="0.5" />
      <rect x="20" y="158" width="80" height="28" rx="14" fill="#ff6b1a" />
      {/* Pizza hero image area */}
      <rect x="280" y="52" width="185" height="140" rx="12" fill="#2a1500" />
      <circle cx="373" cy="122" r="60" fill="#c45000" opacity="0.5" />
      <circle cx="373" cy="122" r="40" fill="#e66000" opacity="0.7" />
      <circle cx="373" cy="122" r="25" fill="#ff8c00" opacity="0.9" />
      <circle cx="365" cy="115" r="5" fill="#cc2200" opacity="0.8" />
      <circle cx="380" cy="128" r="4" fill="#cc2200" opacity="0.8" />
      <circle cx="360" cy="130" r="4" fill="#cc2200" opacity="0.7" />
      <text x="373" y="178" fill="#ff8c00" fontSize="11" textAnchor="middle" fontFamily="sans-serif" opacity="0.8">🍕 Fresh Daily</text>
      {/* Menu section */}
      <rect x="0" y="198" width="480" height="142" fill="#111" />
      <rect x="20" y="210" width="80" height="10" rx="2" fill="#ff6b1a" opacity="0.5" />
      <rect x="20" y="225" width="130" height="16" rx="3" fill="#fff" opacity="0.8" />
      {/* Menu cards */}
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x={20 + i * 112} y="250" width="100" height="78" rx="8" fill="#1e1e1e" stroke="#333" strokeWidth="1" />
          <rect x={28 + i * 112} y="258" width="84" height="44" rx="5" fill={['#2a1500','#0a1a2a','#1a0a0a','#0a1a0a'][i]} />
          <text x={28 + i * 112 + 42} y={258 + 22} fill={['#ff8c00','#00bfff','#ff4444','#44ff88'][i]} fontSize="18" textAnchor="middle" fontFamily="sans-serif">{['🍕','🍔','🍗','🧋'][i]}</text>
          <rect x={28 + i * 112} y="308" width="60" height="8" rx="2" fill="#555" />
          <rect x={28 + i * 112} y="320" width="40" height="6" rx="2" fill="#ff6b1a" opacity="0.7" />
        </g>
      ))}
    </svg>
  )
}

function MashaMockup() {
  return (
    <svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="420" height="240" fill="#1a120a" />
      {/* Nav */}
      <rect x="0" y="0" width="420" height="44" fill="#0f0a05" />
      <rect x="16" y="14" width="70" height="16" rx="3" fill="#d4a853" opacity="0.9" />
      <rect x="240" y="16" width="35" height="12" rx="2" fill="#555" />
      <rect x="285" y="16" width="35" height="12" rx="2" fill="#555" />
      <rect x="335" y="12" width="68" height="20" rx="10" fill="#d4a853" />
      {/* Hero */}
      <rect x="0" y="44" width="420" height="120" fill="#1f1508" />
      <rect x="20" y="60" width="90" height="9" rx="2" fill="#d4a853" opacity="0.6" />
      <rect x="20" y="74" width="160" height="18" rx="3" fill="#fff" opacity="0.85" />
      <rect x="20" y="98" width="130" height="12" rx="3" fill="#fff" opacity="0.5" />
      <rect x="20" y="118" width="100" height="12" rx="3" fill="#fff" opacity="0.4" />
      <rect x="20" y="140" width="70" height="26" rx="13" fill="#d4a853" />
      {/* Food image */}
      <rect x="250" y="48" width="155" height="110" rx="10" fill="#2a1d0a" />
      <text x="327" y="108" fill="#d4a853" fontSize="40" textAnchor="middle" fontFamily="sans-serif">🍛</text>
      <rect x="258" y="142" width="139" height="8" rx="2" fill="#d4a853" opacity="0.3" />
      {/* Services */}
      <rect x="0" y="164" width="420" height="76" fill="#150f07" />
      <rect x="20" y="174" width="60" height="8" rx="2" fill="#d4a853" opacity="0.5" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={20 + i * 132} y="188" width="120" height="44" rx="6" fill="#1e1508" stroke="#3a2a12" strokeWidth="1" />
          <text x={20 + i * 132 + 18} y={215} fill="#d4a853" fontSize="16" fontFamily="sans-serif">{['🎂','🍽️','📦'][i]}</text>
          <rect x={20 + i * 132 + 40} y="202" width="60" height="8" rx="2" fill="#aaa" opacity="0.5" />
          <rect x={20 + i * 132 + 40} y="214" width="40" height="6" rx="2" fill="#888" opacity="0.4" />
        </g>
      ))}
    </svg>
  )
}

function DashboardMockup() {
  return (
    <svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="420" height="240" fill="#080c14" />
      {/* Sidebar */}
      <rect x="0" y="0" width="70" height="240" fill="#0d1420" />
      <rect x="10" y="16" width="50" height="14" rx="3" fill="#3b82f6" opacity="0.8" />
      {[0,1,2,3,4,5].map(i => (
        <rect key={i} x="10" y={46 + i*28} width="50" height="10" rx="2" fill="#fff" opacity={i===0?0.6:0.2} />
      ))}
      {/* Main area */}
      {/* KPI cards */}
      {[
        { x: 80, color: '#3b82f6', val: '$128K', label: 'Revenue' },
        { x: 194, color: '#22c55e', val: '2,847', label: 'Orders' },
        { x: 308, color: '#f59e0b', val: '94.2%', label: 'Satisfaction' },
      ].map((c) => (
        <g key={c.x}>
          <rect x={c.x} y="10" width="106" height="60" rx="8" fill="#111827" stroke="#1e293b" strokeWidth="1" />
          <rect x={c.x+10} y="20" width="30" height="8" rx="2" fill={c.color} opacity="0.7" />
          <text x={c.x+10} y="52" fill="#fff" fontSize="18" fontWeight="bold" fontFamily="sans-serif">{c.val}</text>
          <rect x={c.x+10} y="58" width="50" height="6" rx="2" fill="#555" />
        </g>
      ))}
      {/* Bar chart */}
      <rect x="80" y="80" width="200" height="130" rx="8" fill="#111827" stroke="#1e293b" strokeWidth="1" />
      <rect x="94" y="88" width="80" height="8" rx="2" fill="#fff" opacity="0.6" />
      {[0,1,2,3,4,5,6].map(i => {
        const h = [60,40,75,55,85,45,70][i]
        return (
          <rect key={i} x={98+i*24} y={188-h} width="18" height={h} rx="3" fill="#3b82f6" opacity={0.5+i*0.05} />
        )
      })}
      {/* Pie chart */}
      <rect x="290" y="80" width="124" height="130" rx="8" fill="#111827" stroke="#1e293b" strokeWidth="1" />
      <rect x="300" y="88" width="70" height="8" rx="2" fill="#fff" opacity="0.6" />
      <circle cx="352" cy="155" r="38" fill="none" stroke="#3b82f6" strokeWidth="12" strokeDasharray="100 138" />
      <circle cx="352" cy="155" r="38" fill="none" stroke="#22c55e" strokeWidth="12" strokeDasharray="60 178" strokeDashoffset="-100" />
      <circle cx="352" cy="155" r="38" fill="none" stroke="#f59e0b" strokeWidth="12" strokeDasharray="38 200" strokeDashoffset="-160" />
      <text x="352" y="160" fill="#fff" fontSize="12" textAnchor="middle" fontFamily="sans-serif">Sales</text>
    </svg>
  )
}

function MLMockup() {
  return (
    <svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="420" height="240" fill="#080c14" />
      {/* Header */}
      <rect x="0" y="0" width="420" height="44" fill="#0d1420" />
      <rect x="16" y="14" width="120" height="16" rx="3" fill="#6366f1" opacity="0.9" />
      <rect x="316" y="12" width="88" height="20" rx="10" fill="#6366f1" opacity="0.7" />
      {/* Model cards */}
      {[
        { x: 10, domain: 'Finance', color: '#3b82f6', acc: '94.1%' },
        { x: 148, domain: 'Retail', color: '#22c55e', acc: '96.2%' },
        { x: 286, domain: 'Health', color: '#f43f5e', acc: '91.8%' },
      ].map((d) => (
        <g key={d.domain}>
          <rect x={d.x} y="54" width="128" height="90" rx="8" fill="#111827" stroke="#1e293b" strokeWidth="1" />
          <rect x={d.x+10} y="62" width="60" height="8" rx="2" fill={d.color} opacity="0.8" />
          <text x={d.x+64} y="118" fill={d.color} fontSize="22" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">{d.acc}</text>
          <rect x={d.x+10} y="132" width="80" height="6" rx="3" fill="#1e293b" />
          <rect x={d.x+10} y="132" width={80*parseFloat(d.acc)/100} height="6" rx="3" fill={d.color} opacity="0.8" />
        </g>
      ))}
      {/* Line chart area */}
      <rect x="10" y="154" width="400" height="76" rx="8" fill="#111827" stroke="#1e293b" strokeWidth="1" />
      <rect x="20" y="162" width="100" height="8" rx="2" fill="#fff" opacity="0.5" />
      <polyline
        points="30,210 80,195 130,200 180,185 230,175 280,168 330,162 380,155"
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="30,218 80,210 130,215 180,205 230,198 280,195 330,188 380,178"
        fill="none"
        stroke="#22c55e"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
      {/* Text labels */}
      <rect x="20" y="200" width="8" height="8" rx="2" fill="#3b82f6" />
      <rect x="20" y="213" width="8" height="8" rx="2" fill="#22c55e" />
      <rect x="34" y="201" width="50" height="6" rx="2" fill="#555" />
      <rect x="34" y="214" width="50" height="6" rx="2" fill="#555" />
    </svg>
  )
}

function EDAmockup() {
  return (
    <svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <rect width="420" height="240" fill="#080c14" />
      <rect x="0" y="0" width="420" height="44" fill="#0d1420" />
      <rect x="16" y="12" width="140" height="20" rx="4" fill="#8b5cf6" opacity="0.9" />
      <rect x="300" y="16" width="104" height="12" rx="3" fill="#555" />
      {/* Scatter plot */}
      <rect x="10" y="54" width="195" height="130" rx="8" fill="#111827" stroke="#1e293b" strokeWidth="1" />
      <rect x="20" y="62" width="100" height="8" rx="2" fill="#fff" opacity="0.5" />
      {/* Scatter dots */}
      {[
        [40,155],[55,148],[70,160],[85,140],[100,130],[115,125],[130,118],[145,110],
        [55,165],[90,145],[110,135],[135,120],[150,115],[160,108],[175,100],
        [45,170],[70,155],[95,142],[120,128],[145,116],[170,106],[185,98],
      ].map(([x,y],i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#8b5cf6" opacity={0.5+Math.random()*0.5} />
      ))}
      <line x1="30" y1="172" x2="185" y2="88" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4,3" opacity="0.6" />
      <text x="107" y="182" fill="#aaa" fontSize="9" textAnchor="middle" fontFamily="sans-serif">r = 0.82</text>
      {/* Bar chart */}
      <rect x="215" y="54" width="195" height="130" rx="8" fill="#111827" stroke="#1e293b" strokeWidth="1" />
      <rect x="225" y="62" width="100" height="8" rx="2" fill="#fff" opacity="0.5" />
      {[
        {label:'Math', val:68, color:'#3b82f6'},
        {label:'Read', val:69, color:'#22c55e'},
        {label:'Write', val:67, color:'#f59e0b'},
      ].map((d,i) => (
        <g key={d.label}>
          <rect x={235+i*54} y={174-d.val} width="36" height={d.val} rx="4" fill={d.color} opacity="0.75" />
          <text x={253+i*54} y="182" fill="#aaa" fontSize="8" textAnchor="middle" fontFamily="sans-serif">{d.label}</text>
        </g>
      ))}
      {/* Stats row */}
      <rect x="10" y="194" width="400" height="38" rx="6" fill="#111827" stroke="#1e293b" strokeWidth="1" />
      {[
        { label: 'Records', val: '395' },
        { label: 'Variables', val: '5' },
        { label: 'Correlation', val: '0.82' },
        { label: 'Domain', val: 'Education' },
      ].map((s,i) => (
        <g key={s.label}>
          <text x={30+i*96} y={208} fill="#8b5cf6" fontSize="13" fontWeight="bold" fontFamily="sans-serif">{s.val}</text>
          <rect x={30+i*96} y={213} width="52" height="6" rx="2" fill="#333" />
        </g>
      ))}
    </svg>
  )
}

/* ── Projects Data ───────────────────────────────── */
const PROJECTS = [
  {
    id: 'pizza',
    num: '01',
    featured: true,
    label: '01 / Featured Project',
    title: 'Call N Pizza Cafe',
    subtitle: 'Restaurant Website + Admin Platform',
    desc: 'A complete restaurant website with menu management, gallery, admin authentication, WhatsApp ordering, and cloud database built using Supabase. Deployed on Netlify.',
    tags: ['React', 'Supabase', 'JavaScript', 'Netlify'],
    liveUrl: 'https://playful-palmier-4b1c10.netlify.app',
    githubUrl: 'https://github.com/mohammedsahith450-cpu/call-n-pizza-cafe',
    hasCaseStudy: true,
    Mockup: PizzaMockup,
  },
  {
    id: 'masha',
    num: '02',
    title: 'Masha Catering',
    subtitle: 'Catering Service Website',
    desc: 'Professional catering service website for traditional biryani and event catering in Kambur, Tamil Nadu. Responsive design with service showcase.',
    tags: ['React', 'Vite', 'CSS', 'Netlify'],
    liveUrl: 'https://clinquant-faloodeh-822e9c.netlify.app/',
    Mockup: MashaMockup,
  },
  {
    id: 'dashboard',
    num: '03',
    title: 'Sales Analytics Dashboard',
    subtitle: 'Interactive Analytics Dashboard',
    desc: 'Interactive sales analytics dashboard with real-time KPIs, bar charts, pie charts, and data visualizations for business intelligence.',
    tags: ['React', 'Charts', 'Data Viz', 'Analytics'],
    liveUrl: 'https://mohammedsahith450-cpu.github.io/sales-analytics-dashboard/dashboard.html',
    Mockup: DashboardMockup,
  },
  {
    id: 'ml',
    num: '04',
    title: 'Real-World Domain Analysis',
    subtitle: 'Finance · Retail · Health',
    desc: '15K+ synthetic records across Finance, Retail, and Health domains. 9 ML models with best reported accuracy of 96.2%. Covers trend analysis, RFM segmentation, and readmission risk.',
    tags: ['Python', 'Machine Learning', 'EDA', '9 ML Models'],
    liveUrl: 'https://mohammedsahith450-cpu.github.io/real-world-data-science/',
    Mockup: MLMockup,
  },
  {
    id: 'eda',
    num: '05',
    title: 'EDA Mission Control',
    subtitle: 'Student Performance Analysis',
    desc: '395 records, 5 variables. Score distribution, subject comparison, correlation and scatter analysis. Math vs Reading correlation: r = 0.82.',
    tags: ['Python', 'EDA', 'Pandas', 'Matplotlib'],
    liveUrl: 'https://mohammedsahith450-cpu.github.io/eda-student-performance/',
    Mockup: EDAmockup,
  },
]

function ProjectCard({ project, onOpenCaseStudy }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="project-card-visual">
        <div className="project-card-mockup">
          <project.Mockup />
        </div>
      </div>
      <div className="project-card-content">
        <div className="project-card-num">{project.num}</div>
        <h3 className="project-card-title">{project.title}</h3>
        <div className="project-card-type">{project.subtitle}</div>
        <p className="project-card-desc">{project.desc}</p>
        <div className="project-card-footer">
          <div className="project-card-tags">
            {project.tags.slice(0, 3).map((t) => (
              <span className="project-card-tag" key={t}>{t}</span>
            ))}
          </div>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} live`}
            >
              View Live <ArrowUpRight size={13} />
            </a>
          )}
          {!project.liveUrl && (
            <a className="project-card-link" href="#work">
              View Details <ArrowRight size={13} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Work({ onOpenCaseStudy }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 })
  const featured = PROJECTS[0]
  const secondary = PROJECTS.slice(1, 3)
  const tertiary = PROJECTS.slice(3)

  return (
    <section id="work" className="work" ref={ref}>
      <div className="container">
        <div className="work-header">
          <div>
            <span className="section-tag">Selected Work</span>
            <h2 className="work-heading">Real projects. Thoughtful solutions.</h2>
          </div>
          <span className="view-all-link">
            View All Projects <ArrowRight size={14} />
          </span>
        </div>
        <p className="work-subheading">&ldquo;Real projects. Thoughtful solutions.&rdquo;</p>

        {/* Featured Project */}
        <motion.div
          className="project-featured"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <div className="project-featured-label">
              <span>★</span>
              {featured.label}
            </div>
            <h2 className="project-title">{featured.title}</h2>
            <div className="project-subtitle">{featured.subtitle}</div>
            <p className="project-desc">{featured.desc}</p>
            <div className="project-tech-tags">
              {featured.tags.map((t) => (
                <span className="project-tech-tag" key={t}>{t}</span>
              ))}
            </div>
            <div className="project-cta-row">
              <a
                href={featured.liveUrl}
                className="btn-project-live"
                target="_blank"
                rel="noopener noreferrer"
                id="pizza-view-live"
              >
                <ExternalLink size={14} />
                View Live
              </a>
              <button
                className="btn-project-ghost"
                onClick={() => onOpenCaseStudy(featured)}
                id="pizza-case-study"
              >
                Case Study
              </button>
              <a
                href={featured.githubUrl}
                className="btn-project-ghost"
                target="_blank"
                rel="noopener noreferrer"
                id="pizza-github"
              >
                <GithubIcon size={14} />
                GitHub
              </a>
            </div>
          </div>

          <motion.div
            className="project-visual"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <div className="project-mockup">
              <featured.Mockup />
            </div>
          </motion.div>
        </motion.div>

        {/* Secondary projects */}
        <div className="projects-grid">
          {secondary.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenCaseStudy={onOpenCaseStudy} />
          ))}
        </div>

        {/* Tertiary projects */}
        <div className="projects-grid">
          {tertiary.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenCaseStudy={onOpenCaseStudy} />
          ))}
        </div>
      </div>
    </section>
  )
}
