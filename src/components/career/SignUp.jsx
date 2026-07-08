import React, { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="signup-section">
      <div className="signup-container">
        {/* Left column: Branding / Value Proposition */}
        <div className="signup-left">
          <div className="brand-logo">
            <span className="logo-icon">⚡</span> TradeFlow
          </div>
          <h1>
            Start your trading <br />
            journey with us.
          </h1>
          <p>
            Join over 2.18+ million active institutional and retail traders 
            worldwide maximizing efficiencies everyday.
          </p>
          
          <div className="signup-mini-stats">
            <div className="mini-stat">
              <h4>150+</h4>
              <span>Enterprise Clients</span>
            </div>
            <div className="mini-stat">
              <h4>3 min</h4>
              <span>Avg Support Response</span>
            </div>
          </div>
        </div>

        {/* Right column: Form Card */}
        <div className="signup-right">
          <div className="signup-card">
            <h2>Create Account</h2>
            <p className="subtitle">Sign up in less than 2 minutes.</p>

            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-checkbox">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="agreeTerms">
                  I agree to the <span>Terms of Service</span> and{" "}
                  <span>Privacy Policy</span>.
                </label>
              </div>

              <button type="submit" className="signup-btn">
                Create Account
              </button>
            </form>

            <p className="login-redirect">
              Already have an account? <span>Log in</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;