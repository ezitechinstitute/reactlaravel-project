import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-glow"></div>

        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-left">
            <div className="hero-badge" data-opai-animate data-delay="0.1">Keep an eye on your finances</div>

            <h1 className="hero-title" data-opai-animate data-delay="0.2">
              Cloud solutions for<br />business success
            </h1>

            <p className="hero-desc" data-opai-animate data-delay="0.3">
              Empower your business with Nexsas—your all-in-one cloud-based software designed for performance, automation, and growth.
            </p>

            <div className="hero-btns" data-opai-animate data-delay="0.4">
              <a href="#get-started" className="btn-primary">Get started</a>
              <a href="#trial" className="btn-outline">14-days free trial</a>
            </div>

            <div className="hero-trust" data-opai-animate data-delay="0.5">
              <div className="avatar-group">
                <img className="avatar" src="https://randomuser.me/api/portraits/men/32.jpg" alt="team" />
                <img className="avatar" src="https://randomuser.me/api/portraits/women/44.jpg" alt="team" />
                <img className="avatar" src="https://randomuser.me/api/portraits/men/46.jpg" alt="team" />
                <div className="avatar-count">+</div>
              </div>
              <div className="trust-text">
                <span className="trust-bold">Trusted by 20k+</span>
                <span className="trust-light">Customers Across the Globe</span>
              </div>
            </div>
          </div>

          {/* Right Dashboard */}
          <div className="hero-right" data-opai-animate data-delay="0.4">
            <div className="dashboard-wrapper">
              
              {/* Card 1: Upload Box */}
              <div className="dash-card card-upload">
                <div className="upload-inner">
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.5 19C19.985 19 22 16.985 22 14.5C22 12.185 20.25 10.28 18 10.05C17.3 7.2 14.85 5 12 5C8.685 5 6 7.685 6 11C6 11.08 6 11.16 6.01 11.24C3.765 11.59 2 13.565 2 16C2 18.76 4.24 21 7 21H17.5Z" fill="#ffffff"/>
                    <path d="M12 10L9 13H11.5V17H12.5V13H15L12 10Z" fill="#0f172a"/>
                  </svg>
                  <p>Drag & drop or click to<br />choose files</p>
                </div>
                <div className="file-pill">
                  final_design.fig
                  <svg className="cursor-icon" viewBox="0 0 24 24" fill="#fff" stroke="#000" strokeWidth="1.5">
                    <path d="M4 2l6.5 19.5 2.5-8.5 8.5-2.5L4 2z"/>
                  </svg>
                </div>
              </div>

              {/* Card 2: Folder Stack */}
              <div className="dash-card folder-stack">
                <div className="folder-card f3"></div>
                <div className="folder-card f2">
                  <div className="f-header-mock">
                    <div className="f-icon-mock"></div>
                    <div className="f-lines"><span></span><span></span></div>
                  </div>
                </div>
                <div className="folder-card f1">
                  <div className="f-content">
                    <div className="f-header">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="23 7 16 12 23 17 23 7"></polygon>
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                      </svg>
                      <div>
                        <h4>Photo</h4>
                        <span>266 file</span>
                      </div>
                    </div>
                    <div className="f-footer">
                      Last modified: 16 Sep
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: White AI Card */}
              <div className="dash-card card-ai-assist">
                <div className="ai-content">
                  <h3>How ai assist your file?</h3>
                  <button>Learn more</button>
                </div>
                <div className="crystal-shards">
                  <div className="shard sh1"></div>
                  <div className="shard sh2"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Partners */}
        <div className="hero-partners" data-opai-animate data-delay="0.6">
          <h4 className="partners-title">Trusted by Industry leaders</h4>
          <div className="partners-logos-container">
            <div className="partners-logos">
              {[...Array(2)].map((_, arrayIndex) => (
                <React.Fragment key={arrayIndex}>
                  <div className="partner-logo">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/>
                      <path d="M12 2L12 22M2 12L22 12"/>
                    </svg>
                    Logoipsum
                  </div>
                  <div className="partner-logo">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
                    </svg>
                    Logoipsum
                  </div>
                  <div className="partner-logo">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <path d="M12 8L16 12L12 16L8 12L12 8Z" fill="currentColor"/>
                    </svg>
                    Logoipsum
                  </div>
                  <div className="partner-logo">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="7" cy="7" r="3"/><circle cx="17" cy="7" r="3"/>
                      <circle cx="7" cy="17" r="3"/><circle cx="17" cy="17" r="3"/>
                    </svg>
                    Logoipsum
                  </div>
                  <div className="partner-logo">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 3v18M6 12l8-9m-8 9l8 9"/>
                    </svg>
                    Logoipsum
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
