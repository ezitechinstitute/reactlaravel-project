import SEO from '../../components/SEO'
import './About.css'

import {
  SPARKLE_ICON_PATH,
  STATS_OVERVIEW,
  VALUES,
  OVERVIEW_CARDS,
  TIMELINE_STATS,
  PROCESS_STEPS,
  SOCIAL_ICONS,
  TEAM_MEMBERS,
  TESTIMONIALS,
} from './AboutData.js'

// Renders the varying shapes (rect/circle/line/polyline/path) inside an
// otherwise-shared <svg> wrapper, so icons that differ in structure can
// still be driven from a plain data array.
function IconShapes({ shapes }) {
  return shapes.map((s, i) => {
    switch (s.type) {
      case 'rect':
        return <rect key={i} x={s.x} y={s.y} width={s.width} height={s.height} rx={s.rx} ry={s.ry} />
      case 'circle':
        return <circle key={i} cx={s.cx} cy={s.cy} r={s.r} />
      case 'line':
        return <line key={i} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} />
      case 'polyline':
        return <polyline key={i} points={s.points} />
      case 'path':
      default:
        return <path key={i} d={s.d} />
    }
  })
}

// Stroke-style icon (opai-blue) shared by the stats bar, values list,
// overview cards, and process steps — only size/strokeWidth/shapes vary.
function StrokeIcon({ size = 20, strokeWidth = 1.8, shapes }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <IconShapes shapes={shapes} />
    </svg>
  )
}

// Social icon used on team member cards — fill-style (LinkedIn/GitHub) or
// stroke-style (Twitter/Instagram) depending on the icon definition.
function SocialIcon({ icon }) {
  const { fill, shapes } = SOCIAL_ICONS[icon]
  return fill ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <IconShapes shapes={shapes} />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <IconShapes shapes={shapes} />
    </svg>
  )
}

// Section eyebrow ("Our Story" / "Process" / "Our Team") — identical
// sparkle icon + wrapper markup repeated 3x in the original, only the
// label text (and none of the delay/animation attrs) varied.
function SectionEyebrow({ label }) {
  return (
    <div data-opai-animate data-delay="0.1">
      <span className="inline-flex items-center justify-center gap-x-1.5">
        <span className="fill-opai-blue flex size-4 items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d={SPARKLE_ICON_PATH} fill="#8d59ff" /></svg>
        </span>
        <span className="font-inter-tight text-tagline-4 text-white/50 font-normal">{label}</span>
      </span>
    </div>
  )
}

export default function About() {
  return (
    <>
      <SEO title="About Us" url="/about" />
<main className="bg-background-5">




  <section className="bg-background-5 pt-39 pb-20 md:pb-30" aria-label="About Ezitech">
    <div className="main-container">


      <div className="text-center mb-10" data-opai-animate data-delay="0.1" data-instant>
        <span className="inline-flex items-center gap-x-2 rounded-full border border-opai-blue/30 bg-opai-blue/10 px-4 py-1.5">
          <span className="size-1.5 rounded-full bg-opai-blue"></span>
          <span className="font-ibm-plex-mono text-tagline-4 font-medium text-opai-blue tracking-wide uppercase">About Ezitech</span>
        </span>
      </div>


      <div className="text-center max-w-4xl mx-auto space-y-5 mb-16">
        <h1 data-opai-animate data-delay="0.2" data-instant
            className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90 leading-tight">
          Building technology that<br className="hidden sm:block" />
          empowers businesses worldwide
        </h1>
        <p data-opai-animate data-delay="0.3" data-instant
           className="text-tagline-2 font-normal text-white/60 max-w-2xl mx-auto">
          For over 15 years, Ezitech has been delivering innovative software solutions, SaaS products, and digital experiences that help businesses grow, scale, and succeed.
        </p>
      </div>


      <div data-opai-animate data-delay="0.4" data-instant className="about-stats-grid">
        {STATS_OVERVIEW.map((stat, i) => (
          <div key={stat.label} className={i < STATS_OVERVIEW.length - 1 ? "flex flex-col items-center gap-2 border-r border-stroke-1/10 last:border-r-0 md:border-r" : "flex flex-col items-center gap-2"}>
            <div className="flex items-center gap-2">
              <StrokeIcon size={20} strokeWidth={1.8} shapes={stat.shapes} />
              <span className="text-3xl font-instrument-serif font-normal text-white/90">{stat.value}</span>
            </div>
            <p className="text-tagline-3 text-white/50 text-center">{stat.label}</p>
          </div>
        ))}
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

        <div data-opai-animate data-delay="0.5" data-instant
             className="bg-background-7 rounded-2xl p-8 space-y-4 border border-stroke-1/10">
          <div className="flex items-center gap-2 mb-2">
            <span className="size-1.5 rounded-full bg-opai-blue"></span>
            <span className="font-ibm-plex-mono text-tagline-4 text-opai-blue uppercase tracking-wide">Our Story</span>
          </div>
          <h2 className="font-instrument-serif text-is-heading-5 md:text-is-heading-4 font-normal text-white/90 leading-snug">
            Driven by innovation.<br />Focused on impact.
          </h2>
          <p className="text-tagline-3 text-white/60 leading-relaxed">
            Ezitech was founded with a single mission — to transform ideas into beautiful digital products. From startups to enterprises, we partner with businesses across the globe to solve complex problems with technology.
          </p>
          <p className="text-tagline-3 text-white/60 leading-relaxed">
            We combine strategy, design, and engineering to build solutions that are scalable, secure, and performance-driven.
          </p>
          <a href="/contact"
             className="inline-flex items-center gap-2 text-opai-blue text-tagline-3 font-medium mt-2 hover:gap-3 transition-all duration-300">
            Learn more
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>


        <div data-opai-animate data-delay="0.6" data-instant
             className="bg-background-7 rounded-2xl p-8 border border-stroke-1/10 space-y-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="size-1.5 rounded-full bg-opai-blue"></span>
            <span className="font-ibm-plex-mono text-tagline-4 text-opai-blue uppercase tracking-wide">Our Values</span>
          </div>
          <ul className="space-y-4">
            {VALUES.map((value) => (
              <li key={value.title} className="flex items-start gap-3">
                <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-opai-blue/15">
                  <StrokeIcon size={14} strokeWidth={2} shapes={value.shapes} />
                </span>
                <div>
                  <p className="text-tagline-2 font-medium text-white/90">{value.title}</p>
                  <p className="text-tagline-3 text-white/55">{value.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>


      <div data-opai-animate data-delay="0.7" data-instant
           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {OVERVIEW_CARDS.map((card) => (
          <div key={card.title} className="bg-background-7 rounded-xl p-6 border border-stroke-1/10 space-y-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-opai-blue/15">
              <StrokeIcon size={18} strokeWidth={1.8} shapes={card.shapes} />
            </span>
            <h4 className="text-tagline-2 font-medium text-white/90">{card.title}</h4>
            <p className="text-tagline-3 text-white/55">{card.description}</p>
          </div>
        ))}
      </div>

    </div>
  </section>




  <section className="bg-background-5 py-20 md:py-25">
    <div className="main-container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div data-opai-animate data-delay="0.1"
             className="bg-background-7 rounded-2xl p-8 flex flex-col md:flex-row items-start gap-6 border border-stroke-1/10 hover:border-opai-blue/40 transition-all duration-300 group">
          <div className="flex-shrink-0 size-14 rounded-full bg-opai-blue/15 flex items-center justify-center group-hover:bg-opai-blue/25 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
              <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
            </svg>
          </div>
          <div className="flex-1 space-y-3">
            <h3 className="font-instrument-serif text-is-heading-5 font-normal text-white/90">Our Mission</h3>
            <p className="text-tagline-2 text-white/60 leading-relaxed">To empower businesses with innovative technology solutions that drive efficiency, growth, and long-term success.</p>
            <div className="pt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
          <div className="hidden md:flex flex-shrink-0 w-20 h-20 items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-40 about-decorative-icon">
              <polygon points="50,15 85,80 15,80" fill="none" stroke="currentColor" strokeWidth="2.5"/>
              <polygon points="35,60 50,38 65,60" fill="none" stroke="currentColor" strokeWidth="2"/>
              <line x1="50" y1="15" x2="50" y2="5" stroke="currentColor" strokeWidth="2"/>
              <circle cx="50" cy="5" r="2" fill="currentColor"/>
            </svg>
          </div>
        </div>


        <div data-opai-animate data-delay="0.2"
             className="bg-background-7 rounded-2xl p-8 flex flex-col md:flex-row items-start gap-6 border border-stroke-1/10 hover:border-opai-blue/40 transition-all duration-300 group">
          <div className="flex-shrink-0 size-14 rounded-full bg-opai-blue/15 flex items-center justify-center group-hover:bg-opai-blue/25 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
            </svg>
          </div>
          <div className="flex-1 space-y-3">
            <h3 className="font-instrument-serif text-is-heading-5 font-normal text-white/90">Our Vision</h3>
            <p className="text-tagline-2 text-white/60 leading-relaxed">To become a globally trusted technology partner recognized for innovation, quality, and digital transformation.</p>
            <div className="pt-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </div>
          </div>
          <div className="hidden md:flex flex-shrink-0 w-20 h-20 items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-40 about-decorative-icon">
              <line x1="25" y1="75" x2="75" y2="25" stroke="currentColor" strokeWidth="2.5"/>
              <circle cx="75" cy="25" r="8" fill="none" stroke="currentColor" strokeWidth="2"/>
              <circle cx="75" cy="25" r="3" fill="currentColor"/>
              <line x1="40" y1="88" x2="25" y2="75" stroke="currentColor" strokeWidth="2.5"/>
              <line x1="55" y1="88" x2="40" y2="88" stroke="currentColor" strokeWidth="2"/>
              <path d="M60,25 Q75,10 90,25" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,2"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>




  <section className="bg-background-7 py-20 md:py-25">
    <div className="main-container space-y-16">


      <div className="max-w-4xl mx-auto text-center space-y-5">
        <SectionEyebrow label="Our Story" />
        <h2 data-opai-animate data-delay="0.2"
            className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90">
          The Journey of Ezitech Solutions
        </h2>
        <p data-opai-animate data-delay="0.3"
           className="text-tagline-2 text-white/60 font-inter-tight font-normal max-w-3xl mx-auto leading-relaxed">
          Ezitech Solutions is a technology-driven software company committed to helping businesses accelerate growth through innovative digital solutions. Backed by years of industry experience, we specialize in custom software development, web applications, mobile apps, SaaS platforms, and AI-powered solutions.
        </p>
        <p data-opai-animate data-delay="0.35"
           className="text-tagline-2 text-white/60 font-inter-tight font-normal max-w-3xl mx-auto leading-relaxed">
          Our mission is to bridge the gap between business challenges and technology by delivering reliable, scalable, and future-ready products that create measurable impact.
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {TIMELINE_STATS.map((stat, i) => (
          <div key={stat.label} data-opai-animate data-delay={`0.${i + 1}`}
               className="bg-background-5 p-8 rounded-xl text-center border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 space-y-2">
            <div className="font-instrument-serif text-5xl font-normal text-opai-blue">{stat.value}</div>
            <p className="text-tagline-2 text-white/70 font-medium">{stat.label}</p>
            <p className="text-tagline-3 text-white/40">{stat.sublabel}</p>
            <span className="inline-block font-ibm-plex-mono text-tagline-4 text-opai-blue/70 border border-opai-blue/20 rounded-full px-3 py-0.5 mt-1">{stat.year}</span>
          </div>
        ))}
      </div>

    </div>
  </section>




  <section className="bg-background-5 py-20 md:py-25">
    <div className="main-container space-y-16">

      <div className="text-center space-y-4">
        <SectionEyebrow label="Process" />
        <h2 data-opai-animate data-delay="0.2"
            className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90">
          Our Development Process
        </h2>
        <p data-opai-animate data-delay="0.3"
           className="text-tagline-2 text-white/60 font-inter-tight font-normal max-w-xl mx-auto">
          From discovery to delivery — we build with precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PROCESS_STEPS.map((step, i) => (
          <div key={step.number} data-opai-animate data-delay={`0.${i + 1}`}
               className="bg-background-7 p-8 rounded-xl border border-stroke-1/10 hover:border-opai-blue/40 transition-all duration-300 space-y-4 group">
            <div className="flex items-center justify-between">
              <span className="font-instrument-serif text-6xl font-normal text-opai-blue/30 group-hover:text-opai-blue/50 transition-colors duration-300">{step.number}</span>
              <span className="flex size-10 items-center justify-center rounded-full bg-opai-blue/15">
                <StrokeIcon size={18} strokeWidth={2} shapes={step.shapes} />
              </span>
            </div>
            <div>
              <h3 className="font-instrument-serif text-is-heading-5 font-normal text-white/90 mb-1">{step.title}</h3>
              <p className="text-tagline-3 font-medium about-process-step-subtitle">{step.subtitle}</p>
            </div>
            <p className="text-tagline-3 text-white/60 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  </section>




  <section className="bg-background-7 py-20 md:py-25">
    <div className="main-container space-y-16">

      <div className="text-center space-y-4">
        <SectionEyebrow label="Our Team" />
        <h2 data-opai-animate data-delay="0.2"
            className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90">
          Our innovative, dynamic,<br className="hidden sm:block" /> and talented team
        </h2>
        <p data-opai-animate data-delay="0.3"
           className="text-tagline-2 text-white/60 font-inter-tight font-normal max-w-xl mx-auto">
          Our innovative, dynamic, and talented team is the driving force behind our success. Each member brings a unique blend of expertise.
        </p>
      </div>


      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">

        {TEAM_MEMBERS.map((member, i) => (
          <div key={member.initials} data-opai-animate data-delay={`0.${i + 1}`}
               className="bg-background-5 rounded-2xl p-5 text-center border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 group space-y-3">
            <div className="relative mx-auto size-20 rounded-full overflow-hidden border-2 border-stroke-1/20 group-hover:border-opai-blue/40 transition-all duration-300">
              <div className={member.gradientClass + " flex items-center justify-center"}>
                <span className="font-instrument-serif text-xl font-bold text-white">{member.initials}</span>
              </div>
            </div>
            <div>
              <h4 className="text-tagline-2 font-medium text-white/90 leading-tight">{member.role}</h4>
              <p className="text-tagline-4 text-white/50 mt-0.5">{member.tagline}</p>
            </div>
            <div className="flex items-center justify-center gap-2 pt-1">
              {member.socials.map((icon) => (
                <a key={icon} href="#" className="text-white/30 hover:text-opai-blue transition-colors duration-200">
                  <SocialIcon icon={icon} />
                </a>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  </section>




  <section className="bg-background-5 py-20 md:py-25 border-t border-stroke-1/10">
    <div className="main-container space-y-16">

      <div className="text-center space-y-4">
        <div data-opai-animate data-delay="0.1">
          <span className="inline-block bg-opai-blue/10 text-opai-blue px-4 py-1.5 rounded-full font-ibm-plex-mono text-tagline-4 font-medium">Reviews</span>
        </div>
        <h2 data-opai-animate data-delay="0.2"
            className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90 max-w-3xl mx-auto">
          Hear from our customers about their experiences with us
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {TESTIMONIALS.map((t, i) => (
          <div key={t.name} data-opai-animate data-delay={`0.${i + 1}`}
               className="bg-background-7 p-6 rounded-xl border border-stroke-1/10 hover:border-opai-blue/30 transition-all duration-300 flex flex-col justify-between space-y-6">
            <p className="text-tagline-2 text-white/70 italic leading-relaxed">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-stroke-1/10">
              <div className={t.gradientClass}>
                <span className="text-tagline-4 font-bold text-white">{t.initials}</span>
              </div>
              <div>
                <div className="text-tagline-3 font-medium text-white/90">{t.name}</div>
                <div className="text-tagline-4 text-white/50">{t.role}</div>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  </section>

</main>
    </>
  )
}
