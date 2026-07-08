import React from "react";
import "./Flow.css";

const Flow = () => {
  return (
    <section className="flow-section">
      <div className="flow-tabs">
        <button>For beginners</button>
        <button>For active traders</button>
        <button className="active">For institutions</button>
      </div>

      <div className="flow-container">
        {/* Left Side Elements */}
        <div className="flow-left">
          <h2>
            Custom Solutions
            <br />
            Designed for Institutional
            <br />
            Traders
          </h2>

          <p className="description">
            No matter if you're just starting out or overseeing vast
            portfolios, our tailored solutions for institutional traders are
            here to support you.
          </p>

          <div className="flow-features">
            <div className="feature">
              <div className="feature-icon icon-cylinder"></div>
              <div>
                <h4>Practice mode</h4>
                <span>Understand the needs of novice traders.</span>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon icon-sphere"></div>
              <div>
                <h4>Interactive guides</h4>
                <span>Track your trading performance indicators.</span>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon icon-split"></div>
              <div>
                <h4>Step-by-step trade setup</h4>
                <span>Reveal overlooked patterns in trading data.</span>
              </div>
            </div>
          </div>

          <button className="flow-btn">Start learning</button>
        </div>

        {/* Right Side Cards and Illustration */}
        <div className="flow-right">
          {/* Abstract background loops */}
          <div className="shape-lines">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="person-card">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000"
              alt="Trader Profile"
            />
          </div>

          {/* Assigned Card */}
          <div className="assigned-card">
            <div className="assigned-header">
              <div className="avatar-group">
                <span className="avatar"></span>
                <span className="avatar"></span>
                <span className="avatar"></span>
                <span className="avatar-arrow">↗</span>
              </div>
              <div className="assigned-meta">
                <small>Assigned</small>
                <h3>32</h3>
              </div>
            </div>
            <div className="stars">★★★★★</div>
            <div className="card-actions">
              <button className="btn-follow">+ Follow</button>
              <button className="btn-msg">Message</button>
            </div>
          </div>

          {/* Earnings / Savings Card */}
          <div className="earning-card">
            <small>Total saving</small>
            <h4>$56,324</h4>

            <div className="bar">
              <div className="fill"></div>
            </div>

            <div className="bar-footer">
              <span>May</span>
              <span>$53,224</span>
              <span className="percentage">88%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flow;