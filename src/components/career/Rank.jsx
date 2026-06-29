import React from "react";
import "./Rank.css";

const Rank = () => {
  const metrics = [
    {
      label: "Response time",
      value: "3 minutes",
      description: "Average support response",
      isHighlighted: true, // Adds the unique gradient glow effect
    },
    {
      label: "Enterprise clients",
      value: "150+",
      description: "Active enterprise customers",
    },
    {
      label: "Total users",
      value: "2.18+",
      description: "Million active users",
    },
    {
      label: "System uptime",
      value: "89.7%",
      description: "Average system availability",
    },
    {
      label: "Global reach",
      value: "70+",
      description: "Countries served worldwide",
    },
  ];

  return (
    <section className="rank-section">
      <div className="rank-container">
        {/* Partially cut-off card on the far left for a continuous slider look */}
        <div className="rank-card cut-off-left">
          <span className="description">wide</span>
        </div>

        {/* Core Metric Cards */}
        {metrics.map((item, index) => (
          <div
            key={index}
            className={`rank-card ${item.isHighlighted ? "glow-card" : ""}`}
          >
            <span className="metric-label">{item.label}</span>
            <h2 className="metric-value">{item.value}</h2>
            <span className="metric-description">{item.description}</span>
          </div>
        ))}
      </div>

      {/* Floating Action Badge on the Right */}
      <div className="floating-badge">
        <div className="badge-content">
          <span className="badge-icon">✏️</span>
          <span className="badge-text">46+ Pre built demos</span>
        </div>
      </div>
    </section>
  );
};

export default Rank;