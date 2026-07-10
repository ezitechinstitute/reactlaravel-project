import './Stats.css'

const stats = [
  { label: 'Response time',      value: '3 minutes', desc: 'Average support response',      featured: true  },
  { label: 'Enterprise clients', value: '150+',      desc: 'Active enterprise customers',   featured: false },
  { label: 'Total users',        value: '2.18+',     desc: 'Million active users',          featured: false },
  { label: 'System uptime',      value: '89.7%',     desc: 'Average system availability',   featured: false },
  { label: 'Global reach',       value: '70+',       desc: 'Countries served worldwide',    featured: false },
]

export default function Stats() {
  const doubled = [...stats, ...stats]

  return (
    <section className="stats-section">
      <div className="stats-track-wrapper">
        <div className="stats-track">
          {doubled.map((s, i) => (
            <div
              key={i}
              className={`stat-card${s.featured && i < stats.length ? ' featured' : ''}`}
            >
              <p className="stat-label">{s.label}</p>
              <p className="stat-value">{s.value}</p>
              <p className="stat-desc">{s.desc}</p>
            </div> 
          ))}
        </div> </div>
    </section>
  )
}

