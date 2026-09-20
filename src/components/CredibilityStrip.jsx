const STRIP_ITEMS = [
  { icon: '⚡', text: 'Full-Stack Development' },
  { icon: '🧠', text: 'AI & Data Science' },
  { icon: '🏗️', text: 'Real-World Projects' },
  { icon: '🚀', text: 'Production Deployment' },
  { icon: '💼', text: 'Business Applications' },
  { icon: '📊', text: 'Data Analytics' },
]

export default function CredibilityStrip() {
  const doubled = [...STRIP_ITEMS, ...STRIP_ITEMS]

  return (
    <div className="credibility-strip" aria-label="Areas of expertise">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <div className="strip-item" key={i}>
            <span className="strip-item-dot" aria-hidden="true" />
            <span className="strip-item-text">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
