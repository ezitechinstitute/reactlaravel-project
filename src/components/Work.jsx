import "./Work.css";

const steps = [
  {
    number: "1",
    title: "Sign up",
    description: "Get started for free in just a few seconds!",
    active: false,
  },
  {
    number: "2",
    title: "Import or start fresh",
    description: "Upload your resume or paste your LinkedIn profile.",
    active: true,
  },
  {
    number: "3",
    title: "Paste the job details",
    description: "Let AI help you jazz up your resume!",
    active: false,
  },
  {
    number: "4",
    title: "Apply & track",
    description:
      "Submit applications and track your progress all in one place.",
    active: true,
  },
];

const Work = () => {
  return (
    <section className="work-section">
      <div className="container">
        <h2 className="work-title">How it works</h2>
        <p className="work-subtitle">Step-by-step Flow</p>

        <div className="steps-wrapper">
          {steps.map((step, index) => (
            <div key={index} className="step-card-wrapper">
              <div
                className={`step-card ${
                  step.active ? "active-card" : ""
                }`}
              >
                <span className="step-number">{step.number}</span>

                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>

              {index !== steps.length - 1 && (
                <div className="connector">
                  <span>›</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="cta-btn">
          Get started now
          <span className="arrow">✦</span>
        </button>
      </div>
    </section>
  );
};

export default Work;