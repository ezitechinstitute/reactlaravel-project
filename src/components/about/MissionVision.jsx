import '../../pages/About.css'

export default function MissionVision() {
  return (
    <section className="mv-section">

      {/* Ambient background glow */}
      <div className="mv-section__ambient"></div>

      <div className="mv-container">

        {/* Section Header */}
        <div className="mv-header">
          <h2 className="mv-title" data-opai-animate data-delay="0.1">
            Shaping the future of<br />
            AI in business
          </h2>
          <p className="mv-subtitle" data-opai-animate data-delay="0.2">
            At our company, we are not just dedicated to fostering a culture of innovation; we
            also strive to create a lasting and meaningful impact in the community.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mv-grid">

          {/* Vision Card */}
          <div className="mv-card" data-opai-animate data-delay="0.3">
            {/* Top purple glow */}
            <div className="mv-card__glow"></div>

            {/* Icon — Stacked 3D box with floating plate, matching reference */}
            <div className="mv-card__icon-wrap">
              <svg
                className="mv-icon"
                viewBox="0 0 64 64"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Top face of cube */}
                <polygon points="32,8 50,18 32,28 14,18" opacity="0.9"/>
                {/* Left face */}
                <polygon points="14,18 32,28 32,44 14,34" opacity="0.6"/>
                {/* Right face */}
                <polygon points="50,18 32,28 32,44 50,34" opacity="0.75"/>
                {/* Floating shelf/plate below */}
                <line x1="14" y1="38" x2="14" y2="42"/>
                <line x1="50" y1="38" x2="50" y2="42"/>
                <line x1="32" y1="48" x2="32" y2="52"/>
                <line x1="14" y1="42" x2="32" y2="52"/>
                <line x1="50" y1="42" x2="32" y2="52"/>
                <line x1="14" y1="42" x2="32" y2="32"/>
                <line x1="50" y1="42" x2="32" y2="32"/>
              </svg>
            </div>

            <h3 className="mv-card__title" data-opai-animate data-delay="0.35">Vision</h3>
            <p className="mv-card__desc" data-opai-animate data-delay="0.4">
              Our mission is to empower every business by providing innovative AI tools that
              enable them to reach their full potential. We believe that with the right technology,
              companies can achieve remarkable results and drive growth like never before.
            </p>
          </div>

          {/* Mission Card */}
          <div className="mv-card" data-opai-animate data-delay="0.45">
            {/* Top purple glow */}
            <div className="mv-card__glow"></div>

            {/* Icon — Faceted diamond gem, matching reference */}
            <div className="mv-card__icon-wrap">
              <svg
                className="mv-icon"
                viewBox="0 0 64 64"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Top crown of gem */}
                <polygon points="32,6 46,22 32,20 18,22" opacity="0.9"/>
                {/* Left upper facet */}
                <polygon points="18,22 32,20 32,6 10,26" opacity="0.7"/>
                {/* Right upper facet */}
                <polygon points="46,22 32,20 32,6 54,26" opacity="0.8"/>
                {/* Centre top-to-belt line */}
                <line x1="32" y1="20" x2="32" y2="6" opacity="0.5"/>
                {/* Belt (widest ring) */}
                <polygon points="10,26 18,22 46,22 54,26 32,58" opacity="0.85"/>
                {/* Internal facet lines from belt to tip */}
                <line x1="18" y1="22" x2="32" y2="58" opacity="0.4"/>
                <line x1="46" y1="22" x2="32" y2="58" opacity="0.4"/>
                <line x1="32" y1="26" x2="32" y2="58" opacity="0.3"/>
                {/* Horizontal belt line */}
                <line x1="10" y1="26" x2="54" y2="26" opacity="0.5"/>
              </svg>
            </div>

            <h3 className="mv-card__title" data-opai-animate data-delay="0.5">Mission</h3>
            <p className="mv-card__desc" data-opai-animate data-delay="0.55">
              Our goal is to develop artificial intelligence solutions that are not only intuitive
              and powerful but also specifically designed to address real-world challenges. We aim
              to harness the latest advancements in technology to create tools.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
