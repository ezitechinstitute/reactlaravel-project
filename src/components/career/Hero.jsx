import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Ambient Glows - Exact Match */}
      <div className="glow-gold"></div>
      <div className="glow-green"></div>

      <div className="hero-container">
        
        {/* Left Content - Width allowed to breathe for 2 lines */}
        <div className="hero-left">
          <div className="hero-badge">
            Keep an eye on your finances
          </div>
          
          <h1 className="hero-title">
            Cloud solutions for business success
          </h1>
          
          <p className="hero-desc">
            Empower your business with Nexsas—your all-in-one cloud-based software designed for performance, automation, and growth.
          </p>
          
          <div className="hero-btns">
            <button className="btn-primary">Get started</button>
            <button className="btn-outline">14-days free trial</button>
          </div>
          
          {/* ✅ PERFECTLY MATCHED TRUST BADGE */}
          <div className="hero-trust">
            <div className="avatar-group">
              <img src="https://i.pravatar.cc/150?img=12" alt="User 1" className="avatar" />
              <img src="https://i.pravatar.cc/150?img=33" alt="User 2" className="avatar" />
              <img src="https://i.pravatar.cc/150?img=47" alt="User 3" className="avatar" />
              <div className="avatar-count">99+</div>
            </div>
            <div className="trust-text">
              <span className="trust-bold">Trusted by 20k+</span>
              <span className="trust-light">Customers Across the Globe</span>
            </div>
          </div>
          {/* ------------------------------------- */}

        </div>

        {/* Right Dashboard Visuals - Proportionately Increased */}
        <div className="hero-right">
          <div className="dashboard-wrapper">
            
            {/* Layer 1: Dark Drop Zone (Back) */}
            <div className="dash-card card-dark drop-zone">
              <div className="cloud-icon">
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                  <path d="M6.5 17.5C4.5 17.5 3 16 3 14C3 12 4.5 10.5 6.5 10.5C7 10.5 7.5 10.6 8 10.8C8.3 9.5 9.5 8.5 11 8.5C12.7 8.5 14 9.8 14 11.5V12C14 12.6 14.4 13 15 13C15.6 13 16 12.6 16 12V11.5C16 8.7 13.8 6.5 11 6.5C9.1 6.5 7.4 7.8 6.8 9.5C6.5 9.4 6.2 9.3 5.9 9.3C3.5 9.3 1.5 11.3 1.5 13.8C1.5 16.3 3.5 18.3 6 18.3H16C17.7 18.3 19 17 19 15.3C19 13.6 17.7 12.3 16 12.3H15.5C14.4 12.3 13.5 11.4 13.5 10.3C13.5 9.2 14.4 8.3 15.5 8.3H16C18.2 8.3 20 10.1 20 12.3V13.5C20 14.1 19.6 14.5 19 14.5H18.5C17.9 14.5 17.5 14.1 17.5 13.5V12.3C17.5 11.2 16.6 10.3 15.5 10.3H15C14.4 10.3 14 10.7 14 11.3C14 11.9 14.4 12.3 15 12.3H15.5C16.4 12.3 17 12.9 17 13.8V14.5C17 15.1 17.4 15.5 18 15.5C18.6 15.5 19 15.1 19 14.5V13.8C19 11.3 17 9.3 14.5 9.3H14C12.3 9.3 11 10.6 11 12.3V12.8C11 13.4 11.4 13.8 12 13.8H13.5C14.1 13.8 14.5 14.2 14.5 14.8C14.5 15.4 14.1 15.8 13.5 15.8H12C11.4 15.8 11 15.4 11 14.8V12.3C11 11.2 10.1 10.3 9 10.3H8C6.9 10.3 6 11.2 6 12.3V15.5C6 16.1 6.4 16.5 7 16.5H7.5C8.1 16.5 8.5 16.1 8.5 15.5V14C8.5 13.4 8.9 13 9.5 13H10C10.6 13 11 13.4 11 14V15.5C11 17.2 9.7 18.5 8 18.5H7C5.3 18.5 4 17.2 4 15.5V12.3C4 10.1 5.8 8.3 8 8.3H8.5C10.7 8.3 12.5 10.1 12.5 12.3V12.8C12.5 13.4 12.9 13.8 13.5 13.8H13.8C14.4 13.8 14.8 14.2 14.8 14.8C14.8 15.4 14.4 15.8 13.8 15.8H13.5C12.9 15.8 12.5 15.4 12.5 14.8V12.3C12.5 11.2 11.6 10.3 10.5 10.3H10C8.9 10.3 8 11.2 8 12.3V12.8C8 13.4 8.4 13.8 9 13.8H9.5C10.1 13.8 10.5 14.2 10.5 14.8C10.5 15.4 10.1 15.8 9.5 15.8H9C7.3 15.8 6 14.5 6 12.8V12.3C6 10.1 7.8 8.3 10 8.3C12.2 8.3 14 10.1 14 12.3V12.8C14 14.5 12.7 15.8 11 15.8H10.5C8.8 15.8 7.5 14.5 7.5 12.8V12.3C7.5 10.1 9.3 8.3 11.5 8.3C13.7 8.3 15.5 10.1 15.5 12.3V12.8C15.5 13.4 15.9 13.8 16.5 13.8H17C17.6 13.8 18 14.2 18 14.8C18 15.4 17.6 15.8 17 15.8H16.5C15.9 15.8 15.5 15.4 15.5 14.8V12.3C15.5 10.1 13.7 8.3 11.5 8.3" fill="#e2e8f0"/>
                </svg>
              </div>
              <p className="drop-text">Drag & drop or click to<br />choose files</p>
              <div className="yellow-tag">final_design.fig</div>
              <div className="cursor-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <path d="M14.5 10.5V5C14.5 3.34315 13.1569 2 11.5 2C9.84315 2 8.5 3.34315 8.5 5V10.5C8.5 10.5 7.25 9.75 6.5 10C5.75 10.25 5.5 11 5.5 11.5L7.5 16C7.5 16 6.5 15.5 5.5 17C4.5 18.5 5.5 20 6.5 21C7.5 22 9.5 22 11.5 22C13.5 22 15.5 21.5 16.5 20C17.5 18.5 18 16 18 14.5V11.5C18 11.5 17.75 10.75 17.5 10.5C17.25 10.25 16.5 10 16.5 10L14.5 10.5Z" fill="white"/>
                </svg>
              </div>
            </div>

            {/* Layer 2: White AI Card (Middle) */}
            <div className="dash-card card-white">
              <h3 className="ai-title">How ai assist your file?</h3>
              <button className="ai-btn">Learn more</button>
              
              {/* Purple 3D Glass Shards - Increased Size */}
              <div className="purple-shard s1"></div>
              <div className="purple-shard s2"></div>
              <div className="purple-shard s3"></div>
            </div>

            {/* Layer 3: Purple Tag (Background of Black Card) */}
            <div className="dash-card card-purple-tag">
              <span className="tag-text">☑</span>
            </div>

            {/* Layer 4: Black Photo Card (Front Right) */}
            <div className="dash-card card-black">
              <div className="photo-header">
                <div className="photo-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeWidth="2"/>
                    <circle cx="8.5" cy="8.5" r="2" stroke="white" strokeWidth="2"/>
                    <path d="M21 15L16 10L5 21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="photo-info">
                  <span className="photo-name">Photo</span>
                  <span className="photo-count">266 file</span>
                </div>
                <div className="photo-dots">•••</div>
              </div>
              <div className="photo-footer">
                <span>Last modified: 16 Sep</span>
              </div>
            </div>

            {/* Layer 5: Red Sidebar (Far Right) */}
            <div className="dash-card card-red">
              <span>46+ Pre-built demos</span>
              <span className="red-dots">•••</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;