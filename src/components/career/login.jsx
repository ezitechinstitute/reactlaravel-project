import React from 'react';
import './login.css';

const Login = () => {
  return (
    <section className="login-hero-wrapper">
      
      {/* Pure CSS 3D Graphics (Left & Right) */}
      <div className="left-graphic-wrapper">
        <div className="glass-shard s1"></div>
        <div className="glass-shard s2"></div>
        <div className="glass-shard s3"></div>
      </div>
      
      <div className="right-graphic-wrapper">
        <div className="glass-torus-outer"></div>
        <div className="glass-torus-inner"></div>
      </div>

      <div className="login-container">
        
        {/* Top Badge */}
        <div className="login-badge">
          Subscribe
        </div>

        {/* Main Heading */}
        <h1 className="login-title">
          Transform your finances from stress to success.
        </h1>

        {/* Subheading */}
        <p className="login-desc">
          Take the first step toward a stronger financial future, start managing, saving,
          and growing your money with tools designed to make success simple.
        </p>

        {/* Form Row */}
        <div className="login-form-row">
          <div className="login-input-wrapper">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="login-input" 
            />
          </div>
          <button className="login-btn-primary">Get started</button>
        </div>

        {/* Checkmarks */}
        <div className="login-checkmarks">
          <div className="check-item">
            <span className="check-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <span>Grow savings faster</span>
          </div>
          <div className="check-item">
            <span className="check-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </span>
            <span>Track spending easily</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Login;