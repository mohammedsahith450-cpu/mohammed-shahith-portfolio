import { motion } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'

function GithubIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

export default function CaseStudyModal({ project, onClose }) {
  if (!project) return null

  const isPizza = project.id === 'pizza'

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Case study: ${project.title}`}
    >
      <motion.div
        className="modal-content"
        initial={{ scale: 0.92, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close case study"
        >
          <X size={18} />
        </button>

        <div className="modal-body">
          {/* Hero */}
          <div className="case-study-hero">
            <div className="case-study-project-num">{project.label || project.num + ' / Case Study'}</div>
            <h2 className="case-study-title">{project.title}</h2>
            <div className="case-study-subtitle">{project.subtitle}</div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 32 }}>
              {project.tags?.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: 12, fontWeight: 600, padding: '5px 12px',
                    borderRadius: 999, border: '1px solid rgba(59,130,246,0.3)',
                    color: '#60a5fa', background: 'rgba(59,130,246,0.08)',
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="case-study-section">
            <div className="case-study-section-heading">Overview</div>
            <p className="case-study-text">{project.desc}</p>
          </div>

          {isPizza && (
            <>
              <div className="case-study-section">
                <div className="case-study-section-heading">Challenge</div>
                <p className="case-study-text">
                  The client needed a complete restaurant digital presence — a customer-facing
                  website with the full menu, gallery, and an easy ordering mechanism (WhatsApp),
                  plus an admin interface for managing menu items, images, categories, and restaurant
                  settings without requiring technical knowledge.
                </p>
              </div>

              <div className="case-study-section">
                <div className="case-study-section-heading">Solution</div>
                <p className="case-study-text">
                  Built a full-stack React application with Supabase as the backend — handling
                  authentication, database, and image storage in one platform. Customers browse
                  the menu with categories and gallery, and place orders via WhatsApp integration.
                  Admins log in securely to manage all content without touching code.
                </p>
              </div>

              <div className="case-study-section">
                <div className="case-study-section-heading">Key Features</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {[
                    'Responsive restaurant website',
                    'Full menu with categories',
                    'Gallery management',
                    'Admin authentication',
                    'Supabase database',
                    'Image storage',
                    'WhatsApp ordering',
                    'Restaurant settings',
                    'Production deployment',
                  ].map((f) => (
                    <span
                      key={f}
                      style={{
                        fontSize: 13, fontWeight: 500, padding: '6px 14px',
                        borderRadius: 999, border: '1px solid rgba(255,255,255,0.1)',
                        color: 'rgba(240,244,255,0.7)', background: 'rgba(255,255,255,0.04)',
                      }}
                    >
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="case-study-section">
                <div className="case-study-section-heading">Architecture</div>
                <div className="arch-diagram">
                  <div className="arch-node">
                    <div className="arch-box primary">👤 Customer</div>
                  </div>
                  <div className="arch-arrow">↓</div>
                  <div className="arch-node">
                    <div className="arch-box primary">⚛ React Website</div>
                  </div>
                  <div className="arch-arrow">↓</div>
                  <div className="arch-node">
                    <div className="arch-box primary">⚡ Supabase Backend</div>
                  </div>
                  <div className="arch-arrow">↓</div>
                  <div className="arch-branch">
                    <div className="arch-branch-line">
                      <div className="arch-box">🗄️ Database</div>
                    </div>
                    <div className="arch-branch-line">
                      <div className="arch-box">🔐 Authentication</div>
                    </div>
                    <div className="arch-branch-line">
                      <div className="arch-box">🖼️ Storage</div>
                    </div>
                  </div>
                  <div className="arch-arrow">↓</div>
                  <div className="arch-node">
                    <div className="arch-box primary">🛠️ Admin Dashboard</div>
                  </div>
                </div>
              </div>

              <div className="case-study-section">
                <div className="case-study-section-heading">Deployment</div>
                <p className="case-study-text">
                  Deployed on Netlify for continuous deployment from GitHub. Supabase provides
                  the hosted database, authentication, and file storage.
                </p>
              </div>
            </>
          )}

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 32 }}>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="btn-project-live"
                target="_blank"
                rel="noopener noreferrer"
                id={`case-live-${project.id}`}
              >
                <ExternalLink size={14} />
                View Live Website
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                className="btn-project-ghost"
                target="_blank"
                rel="noopener noreferrer"
                id={`case-github-${project.id}`}
              >
                <GithubIcon size={14} />
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
