import { useState } from 'react'
import './Rank.css'

const tabContent = {
  job: {
    title: "Career Opportunities Designed for Professionals",
    description: "Whether you're looking for your next big challenge or stepping up into a senior role, our tailored career paths are here to support your growth.",
    features: [
      { icon: "cylinder", title: "Advanced Roles",       desc: "Explore senior and specialized positions." },
      { icon: "sphere",   title: "Competitive Benefits", desc: "Comprehensive health, wellness, and financial packages." },
      { icon: "split",    title: "Continuous Growth",    desc: "Access to leadership training and professional development." },
    ],
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80",
    buttonText: "View jobs",
    stats: { assigned: "24", metricTitle: "Avg. Hiring Time", metricValue: "14 Days", progress: "85%" },
  },
  intern: {
    title: "Kickstart Your Career with Our Internships",
    description: "Gain hands-on experience, mentorship from industry experts, and work on real-world projects that impact millions of users.",
    features: [
      { icon: "cylinder", title: "Real-world Projects",  desc: "Contribute to live products and services." },
      { icon: "sphere",   title: "Dedicated Mentorship", desc: "Learn directly from senior engineers and designers." },
      { icon: "split",    title: "Path to Full-time",    desc: "High conversion rate to full-time roles post-internship." },
    ],
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=80",
    buttonText: "View internships",
    stats: { assigned: "120+", metricTitle: "Interns Hired", metricValue: "85%", progress: "85%" },
  },
  beginner: {
    title: "Perfect Launchpad for Junior Developers",
    description: "Start your journey in tech with a supportive team, comprehensive onboarding, and a culture that encourages learning.",
    features: [
      { icon: "cylinder", title: "Structured Onboarding", desc: "A clear 90-day plan to get you up to speed." },
      { icon: "sphere",   title: "Buddy System",          desc: "Pair programming and guidance from experienced peers." },
      { icon: "split",    title: "Skill Development",     desc: "Dedicated time for learning new technologies." },
    ],
    image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=800&auto=format&fit=crop&q=80",
    buttonText: "View courses",
    stats: { assigned: "15", metricTitle: "Mentorship Hours", metricValue: "500+", progress: "95%" },
  },
}

export default function Rank() {
  const [activeTab, setActiveTab] = useState('job')
  const content = tabContent[activeTab]

  return (
    <section id="open-positions" className="rank-section">
      <div className="rank-tabs" data-opai-animate data-delay="0.1">
        <button className={activeTab === 'job'      ? 'active' : ''} onClick={() => setActiveTab('job')}>Job Seeker</button>
        <button className={activeTab === 'intern'   ? 'active' : ''} onClick={() => setActiveTab('intern')}>For Internships</button>
        <button className={activeTab === 'beginner' ? 'active' : ''} onClick={() => setActiveTab('beginner')}>For Beginners</button>
      </div>

      <div className="rank-container">
        {/* Left */}
        <div key={`left-${activeTab}`} className="rank-left rank-animated-content" data-opai-animate data-delay="0.2">
          <h2>{content.title}</h2>
          <p className="description">{content.description}</p>

          <div className="rank-features">
            {content.features.map((f, idx) => (
              <div key={idx} className="feature">
                <div className={`feature-icon icon-${f.icon}`}></div>
                <div>
                  <h4>{f.title}</h4>
                  <span>{f.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <button className="rank-btn">{content.buttonText}</button>
        </div>

        {/* Right */}
        <div key={`right-${activeTab}`} className="rank-right rank-animated-content" data-opai-animate data-delay="0.4">
          <div className="shape-lines">
            <span></span><span></span><span></span>
          </div>

          <div className="person-card">
            <img src={content.image} alt={activeTab} />
          </div>

          {/* Floating Card 1 – Assigned */}
          <div className="assigned-card">
            <div className="assigned-header">
              <div className="avatar-group">
                <img className="avatar" src="https://randomuser.me/api/portraits/men/32.jpg"  alt="u1" />
                <img className="avatar" src="https://randomuser.me/api/portraits/women/44.jpg" alt="u2" />
                <img className="avatar" src="https://randomuser.me/api/portraits/men/46.jpg"  alt="u3" />
                <div className="avatar-arrow">↗</div>
              </div>
              <div className="assigned-meta">
                <small>Assigned</small>
                <h3>{content.stats.assigned}</h3>
              </div>
            </div>
            <div className="stars">★★★★★</div>
            <div className="card-actions">
              <button className="btn-follow">+ Follow</button>
              <button className="btn-msg">Message</button>
            </div>
          </div>

          {/* Floating Card 2 – Metrics */}
          <div className="earning-card">
            <small>{content.stats.metricTitle}</small>
            <h4>{content.stats.metricValue}</h4>
            <div className="bar">
              <div className="fill" style={{ width: content.stats.progress }}></div>
            </div>
            <div className="bar-footer">
              <span>May</span>
              <span>{content.stats.metricValue} <span className="percentage">{content.stats.progress}</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
