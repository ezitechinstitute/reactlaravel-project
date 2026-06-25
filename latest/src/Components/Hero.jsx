import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-glow"></div>

      <div className="hero-container">
        {/* Left Side */}
        <div className="hero-left">
          <div className="hero-badge">
            Keep an eye on your finances
          </div>

          <h1>
            Cloud solutions for
            <br />
            business success
          </h1>

          <p>
            Empower your business with Nexsas—your all-in-one cloud-based
            software designed for performance, automation, and growth.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              Get started
            </button>

            <button className="secondary-btn">
              14-days free trial
            </button>
          </div>

          <div className="hero-users">
            <div className="avatars">
              <img
                src="https://i.pravatar.cc/50?img=1"
                alt=""
              />
              <img
                src="https://i.pravatar.cc/50?img=2"
                alt=""
              />
              <img
                src="https://i.pravatar.cc/50?img=3"
                alt=""
              />
              <span>99+</span>
            </div>

            <div className="trust-text">
              <h4>Trusted by 20k+</h4>
              <p>Customers Across the Globe</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="hero-right">
          <div className="upload-card">
            <div className="upload-inner">
              <div className="upload-icon">⬆</div>

              <p>
                Drag & drop or click to
                <br />
                choose files
              </p>

              <span className="file-tag">
                final_design.fig
              </span>
            </div>
          </div>

          <div className="white-card">
            <h3>How ai assist your file?</h3>

            <button>
              Learn more
            </button>
          </div>

          <div className="purple-card"></div>

          <div className="photo-card">
            <h4>📷 Photo</h4>

            <p>266 file</p>

            <div className="modified">
              Last modified: 16 Sep
            </div>
          </div>
        </div>
      </div>

      {/* Trusted Logos */}
      <div className="trusted-section">
        <p>Trusted by Industry Leaders</p>

        <div className="logos">
          <span>Logoipsum</span>
          <span>Logoipsum</span>
          <span>Logoipsum</span>
          <span>Logoipsum</span>
          <span>Logoipsum</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;