import SEO from '../components/SEO'
import { Link } from 'react-router-dom'
import Testimonials from '../components/Testimonials'
export default function About() {

  const whyChoose = [
    '15+ Years Industry Experience',
    '500+ Successful Projects',
    '100+ Happy Clients',
    'Expert Development Team',
  ]

  const process = [
    {
      num: '01',
      title: 'Discover',
      sub: 'Requirements Analysis & Strategic Planning',
      desc: 'We understand your business objectives, challenges, and project requirements to build the right solution.',
    },
    {
      num: '02',
      title: 'Develop',
      sub: 'Agile Design & Development',
      desc: 'Our experts design, develop, and continuously improve products through agile development cycles.',
    },
    {
      num: '03',
      title: 'Deliver',
      sub: 'Testing, Deployment & Optimization',
      desc: 'We ensure quality, security, and performance before deployment while providing ongoing support and optimization.',
    },
  ]

  const technologies = [
    'React', 'Next.js', 'Node.js', 'Python', 'TypeScript', 'AWS',
    'Docker', 'PostgreSQL', 'MongoDB', 'Flutter', 'Tailwind', 'GraphQL',
  ]

  const leadership = [
    {
      name: 'Alexander Hayes',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years scaling product and engineering organisations across fintech and SaaS.',
    },
    {
      name: 'Priya Natarajan',
      role: 'Chief Technology Officer',
      bio: 'Architect of resilient cloud platforms; previously led infrastructure teams at two unicorn startups.',
    },
    {
      name: 'Marcus Lindqvist',
      role: 'Chief Operating Officer',
      bio: 'Operations strategist focused on delivery excellence, client success, and global team enablement.',
    },
  ]

  const team = [
    { role: 'Project Manager', name: 'Delivery' },
    { role: 'Lead Software Engineer', name: 'Engineering' },
    { role: 'UI/UX Designer', name: 'Design' },
    { role: 'AI Engineer', name: 'AI / ML' },
    { role: 'QA Engineer', name: 'Quality' },
    { role: 'DevOps Engineer', name: 'Platform' },
  ]

  // Purane const leadership aur const team dono hata do
  // Naya combined data:
  const teamandleadership = [
    {
      name: 'Darrel Steward',
      role: 'Marketing, Web of Code',
      image: '/path/to/darrel.jpg', // baad mein change kar dena
      socials: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: 'Wade Warren',
      role: 'Founder',
      image: '/path/to/wade.jpg',
      socials: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: 'Kathryn Murphy',
      role: 'President, Web of Code',
      image: '/path/to/kathryn.jpg',
      socials: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    },
    {
      name: 'Brooklyn Simmons',
      role: 'President, Web of Code',
      image: '/path/to/brooklyn.jpg',
      socials: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
      }
    }
  ];

  return (
    <>
      <SEO title="About Us" url="/about" />
      <main className="bg-background-5 text-white/90">

        {/* ============== HERO ============== */}
        <section className="bg-background-5 pt-33  md:pb-30" aria-label="About Ezitech">
          <div className="main-container px-6 sm:px-8 lg:px-12">
            {/* Badge */}
            <div className="text-center mb-10">
              <span
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-1.5"
                style={{ border: '1px solid rgba(34,126,255,0.35)', backgroundColor: 'rgba(34,126,255,0.10)' }}
              >
                <span className="size-1.5 rounded-full" style={{ backgroundColor: '#227eff' }}></span>
                <span
                  className="font-ibm-plex-mono text-tagline-4 font-medium tracking-wide uppercase"
                  style={{ color: '#227eff' }}
                >
                  About Ezitech
                </span>
              </span>
            </div>

            {/* Heading */}
            <div className="text-center max-w-4xl mx-auto space-y-5 mb-16">
              <h1
                className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90 leading-tight tracking-wider"
                style={{ letterSpacing: '0.02em' }}
              >
                Building technology that <br className="hidden sm:block" />
                empowers businesses world wide
              </h1>
              <p className="text-tagline-2 font-normal text-white/60 max-w-2xl mx-auto">
                For over 15 years, Ezitech has been delivering innovative software solutions,
                SaaS products, and digital experiences that help businesses grow, scale, and succeed.
              </p>
            </div>

            {/* Stats grid */}
            <div data-opai-animate data-delay="0.4" data-instant
              style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "24px", marginTop: "20px" }}>
              <div className="flex flex-col items-center gap-2 border-r border-stroke-1/10 last:border-r-0 md:border-r">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                  <span className="text-3xl font-instrument-serif font-normal text-white/90">15+</span>
                </div>
                <p className="text-tagline-3 text-white/50 text-center">Years Experience</p>
              </div>
              <div className="flex flex-col items-center gap-2 border-r border-stroke-1/10 last:border-r-0 md:border-r">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 4.5v9L12 22 3 17.5v-9L12 2z" /></svg>
                  <span className="text-3xl font-instrument-serif font-normal text-white/90">500+</span>
                </div>
                <p className="text-tagline-3 text-white/50 text-center">Projects Delivered</p>
              </div>
              <div className="flex flex-col items-center gap-2 border-r border-stroke-1/10 last:border-r-0 md:border-r">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
                  <span className="text-3xl font-instrument-serif font-normal text-white/90">100+</span>
                </div>
                <p className="text-tagline-3 text-white/50 text-center">Happy Clients</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /><circle cx="12" cy="12" r="3" /></svg>
                  <span className="text-3xl font-instrument-serif font-normal text-white/90">50+</span>
                </div>
                <p className="text-tagline-3 text-white/50 text-center">Experts on Team</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============== OUR STORY ============== */}
        <section className="py-20 md:py-28" style={{ backgroundColor: '#0A0D14' }}>
          <div className="main-container max-w-6xl px-6 sm:px-8">
            {/* Badge */}
            <div className="text-center mb-6">
              <span
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-1.5"
                style={{ border: '1px solid rgba(141,89,255,0.35)', backgroundColor: 'rgba(141,89,255,0.10)' }}
              >
                <span className="size-1.5 rounded-full" style={{ backgroundColor: '#8d59ff' }}></span>
                <span
                  className="font-ibm-plex-mono text-tagline-4 font-medium tracking-wide uppercase"
                  style={{ color: '#8d59ff' }}
                >
                  Process
                </span>
              </span>
            </div>

            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h1
                className="font-instrument-serif text-is-heading-4 md:text-is-heading-3 lg:text-is-heading-2 font-normal text-white/90 leading-tight tracking-wider"
                style={{ letterSpacing: '0.02em' }}
              >
                How well work together
              </h1>
              <p className="text-tagline-2 text-white/60 leading-relaxed">
                I follow a process that's transparent, collaborative, and results-driven—built around clear
                communication and creative problem-solving.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative max-w-5xl mx-auto">
              {/* Center line with gradient */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block">
                <div
                  className="w-full h-full"
                  style={{
                    background: 'linear-gradient(180deg, #227eff 0%, #8d59ff 50%, #227eff 100%)',
                    opacity: 0.6
                  }}
                ></div>
              </div>

              {/* Step 1 - Left */}
              <div className="relative mb-20 md:mb-32">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
                  <div className="md:text-right md:pr-8">
                    <span className="font-ibm-plex-mono text-tagline-4 uppercase tracking-wider text-[#227eff] mb-3 block">
                      STEP 1
                    </span>
                    <h3 className="font-instrument-serif text-2xl md:text-3xl text-white/90 mb-4">
                      Kickoff call & brand discovery
                    </h3>
                    <p className="text-tagline-3 text-white/60 leading-relaxed">
                      We begin by understanding your vision and goals through a detailed discovery call to align on the project's direction.
                    </p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:block absolute left-1/2 top-2 -translate-x-1/2">
                    <div className="size-3 rounded-full bg-[#227eff] ring-4 ring-[#227eff]/20"></div>
                  </div>

                  <div className="hidden md:block"></div>
                </div>
              </div>

              {/* Step 2 - Right */}
              <div className="relative">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
                  <div className="hidden md:block"></div>

                  {/* Center dot */}
                  <div className="hidden md:block absolute left-1/2 top-2 -translate-x-1/2">
                    <div className="size-3 rounded-full bg-[#8d59ff] ring-4 ring-[#8d59ff]/20"></div>
                  </div>

                  <div className="md:pl-8">
                    <span className="font-ibm-plex-mono text-tagline-4 uppercase tracking-wider text-[#8d59ff] mb-3 block">
                      STEP 2
                    </span>
                    <h3 className="font-instrument-serif text-2xl md:text-3xl text-white/90 mb-4">
                      Strategy, wireframes & creative direction
                    </h3>
                    <p className="text-tagline-3 text-white/60 leading-relaxed">
                      We begin by understanding your vision and goals through a detailed discovery call to align on the project's direction.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile line */}
              <div className="absolute left-4 top-0 bottom-0 w-px md:hidden">
                <div
                  className="w-full h-full"
                  style={{
                    background: 'linear-gradient(180deg, #227eff 0%, #8d59ff 50%, #227eff 100%)',
                    opacity: 0.6
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>



        {/* ============== MISSION & VISION ============== */}
        <section className="py-20 md:py-28" style={{ backgroundColor: '#0A0D14' }}>
          <div className="main-container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-5">
                Shaping the future of<br className="hidden sm:block" />
                AI in business
              </h2>
              <p className="text-tagline-2 text-white/50 max-w-[620px] mx-auto leading-relaxed">
                At our company, we are not just dedicated to fostering a culture of innovation; we
                also strive to create a lasting and meaningful impact in the community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: 'Vision',
                  desc: 'Our mission is to empower every business by providing innovative AI tools that enable them to reach their full potential. We believe that with the right technology, companies can achieve remarkable results and drive growth like never before.',
                  icon: (
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 7h-3V4a1 1 0 0-1-1h-3" />
                      <path d="M4 17h3v3a1 1 0 0 0 1 1h3" />
                      <path d="M7 4v3H4" />
                      <path d="M17 20v-3h3" />
                      <path d="M12 12L7 7" />
                      <path d="m12 12 5-5" />
                    </svg>
                  ),
                },
                {
                  title: 'Mission',
                  desc: 'Our goal is to develop artificial intelligence solutions that are not only intuitive and powerful but also specifically designed to address real-world challenges. We aim to harness the latest advancements in technology to create tools.',
                  icon: (
                    <svg width="32" height="32" viewBox="0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                      <line x1="12" y1="22" x2="12" y2="12" />
                      <line x1="22" y1="8.5" x2="12" y2="12" />
                      <line x1="2" y1="8.5" x2="12" y2="12" />
                    </svg>
                  ),
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="relative overflow-hidden rounded-3xl p-10 md:p-12 text-center"
                  style={{
                    border: '1px solid rgba(255,255,0.08)',
                    backgroundColor: 'rgba(19,23,30,0.6)',
                  }}
                >
                  {/* Top glow */}
                  <div
                    aria-hidden
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 blur-3xl opacity-50"
                    style={{
                      background: 'radial-gradient(ellipse at top, #8d59ff 0%, transparent 70%)',
                    }}
                  />

                  <div className="relative flex flex-col items-center gap-6">
                    {/* Icon */}
                    <div className="grid place-items-center">
                      {card.icon}
                    </div>

                    {/* Title */}
                    <h3 className="font-instrument-serif text-2xl md:text-3xl text-white">{card.title}</h3>

                    {/* Description */}
                    <p className="text-tagline-3 text-white/50 max-w-md leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ============== WHY CHOOSE EZITECH - SLIDER ============== */}
        <section className="py-20 md:py-28 overflow-hidden" style={{ backgroundColor: '#0e111a' }}>
          <div className="main-container max-w-6xl mx-auto px-6 sm:px-8 mb-16">
            <div className="text-center">
              <span
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-1.5 mb-6"
                style={{ border: '1px solid rgba(34,126,255,0.35)', backgroundColor: 'rgba(34,126,255,0.10)' }}
              >
                <span className="size-1.5 rounded-full" style={{ backgroundColor: '#227eff' }}></span>
                <span className="font-ibm-plex-mono text-tagline-4 font-medium tracking-wide uppercase" style={{ color: '#227eff' }}>
                  Why Choose Us
                </span>
              </span>
              <h2 className="font-instrument-serif text-is-heading-2 font-normal text-white/95 leading-tight">
                Why choose Ezitech
              </h2>
            </div>
          </div>

          {/* Marquee Slider - Right to Left */}
          <div className="relative">
            <div className="flex items-center gap-6 animate-marquee-right">
              {[
                {
                  top: 'Years Industry Experience',
                  value: '15+',
                  bottom: 'Delivering excellence since 2009'
                },
                {
                  top: 'Successful Projects',
                  value: '500+',
                  bottom: 'Delivered across the globe'
                },
                {
                  top: 'Happy Clients',
                  value: '100+',
                  bottom: 'Trusted by businesses worldwide'
                },
                {
                  top: 'Expert Development Team',
                  value: '50+',
                  bottom: 'Skilled engineers & designers'
                },
                // Duplicate for seamless loop
                {
                  top: 'Years Industry Experience',
                  value: '15+',
                  bottom: 'Delivering excellence since 2009'
                },
                {
                  top: 'Successful Projects',
                  value: '500+',
                  bottom: 'Delivered across the globe'
                },
                {
                  top: 'Happy Clients',
                  value: '100+',
                  bottom: 'Trusted by businesses worldwide'
                },
                {
                  top: 'Expert Development Team',
                  value: '50+',
                  bottom: 'Skilled engineers & designers'
                },
              ].map((card, idx) => (
                <div
                  key={`${card.value}-${idx}`}
                  className="min-w-[340px] md:min-w-[380px] rounded-2xl p-8 flex flex-col justify-between h-[220px] shrink-0 group relative overflow-hidden transition-all duration-500 hover:scale-[1.02]"
                  style={{
                    border: '1px solid rgba(148,174,207,0.08)',
                    backgroundColor: '#121622',
                  }}
                >
                  {/* Subtle glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: 'radial-gradient(circle at 50% 0%, rgba(34,126,255,0.15) 0%, transparent 60%)'
                    }}
                  />

                  <span className="text-[11px] uppercase tracking-[0.15em] text-white/40 font-medium relative z-10">
                    {card.top}
                  </span>
                  <h3 className="text-5xl md:text-6xl font-normal text-white/95 my-auto tracking-tight font-sans relative z-10">
                    {card.value}
                  </h3>
                  <p className="text-[11px] text-white/40 relative z-10">
                    {card.bottom}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <style jsx>{`
    @keyframes marquee-right {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
  .animate-marquee-right {
      animation: marquee-right 25s linear infinite;
      width: max-content;
      display: flex;
    }
  .animate-marquee-right:hover {
      animation-play-state: paused;
    }
  `}</style>
        </section>


        {/* ============== OUR DEVELOPMENT PROCESS ============== */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: "#0A0D14" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            {/* Heading */}
            <div className="text-center mb-16">
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
                style={{
                  border: "1px solid rgba(141,89,255,.35)",
                  background: "rgba(141,89,255,.10)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "#8d59ff" }}
                ></span>

                <span
                  className="uppercase tracking-[0.18em] text-xs font-medium"
                  style={{ color: "#8d59ff" }}
                >
                  Process
                </span>
              </span>

              <h2 className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-5">
                Our Development Process
              </h2>

              <p className="max-w-3xl mx-auto text-white/60 text-sm md:text-base leading-7">
                We follow a structured development process to transform your ideas into
                secure, scalable, and high-quality digital solutions.
              </p>
            </div>

            {/* Cards */}
            <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">

              {[
                {
                  step: "01",
                  title: "Discover",
                  desc: "Requirements Analysis & Strategic Planning",
                  points: [
                    "Understand your business objectives",
                    "Analyze project requirements",
                    "Create a strategic roadmap",
                  ],
                  icon: (
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="M12 6a6 6 0 1 0 0 12 6 6 0 0 0 0-12z" />
                      <path d="M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                    </svg>
                  ),
                },
                {
                  step: "02",
                  title: "Develop",
                  desc: "Agile Design & Development",
                  points: [
                    "Modern UI/UX design",
                    "Agile development cycles",
                    "Continuous product improvements",
                  ],
                  icon: (
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                      <path d="M12 22V12" />
                    </svg>
                  ),
                },
                {
                  step: "03",
                  title: "Deliver",
                  desc: "Testing, Deployment & Optimization",
                  points: [
                    "Comprehensive quality testing",
                    "Secure deployment process",
                    "Ongoing support & optimization",
                  ],
                  icon: (
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    >
                      <circle cx="12" cy="5" r="2" />
                      <circle cx="5" cy="12" r="2" />
                      <circle cx="19" cy="12" r="2" />
                      <circle cx="12" cy="19" r="2" />
                      <line x1="12" y1="7" x2="12" y2="17" />
                      <line x1="7" y1="12" x2="17" y2="12" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="w-full md:w-[350px] lg:w-[370px] rounded-2xl px-10 py-12 lg:px-12 lg:py-14 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-white/10"
                  style={{
                    backgroundColor: "#11141d",
                    border: "1px solid rgba(255,255,255,.06)",
                  }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-10">
                    <span className="text-sm font-semibold text-[#8d59ff]">
                      {item.step}
                    </span>

                    <div className="text-white/60">
                      {item.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-instrument-serif text-3xl text-white mb-4">
                    {item.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-white/80 font-medium leading-7 mb-8">
                    {item.desc}
                  </p>

                  {/* Bullet Points */}
                  <div className="border-t border-white/5 pt-7 mt-auto">
                    <ul className="space-y-4">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-3 text-sm text-white/60"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                            style={{ backgroundColor: "#8d59ff" }}
                          ></span>

                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>


        {/* ============== TECHNOLOGIES ============== */}

        {/* ============== INTEGRATION SECTION ============== */}
        <section className="pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px] pb-24 md:pb-24 lg:pb-[140px] xl:pb-[200px]" style={{ backgroundColor: '#0A0D14' }}>
          <div className="main-container">
            <article className="flex flex-col lg:flex-row gap-x-20 gap-y-20 items-center">
              {/* Left Content */}
              <div className="w-full lg:w-1/2 max-lg:text-center">
                <span
                  data-ns-animate
                  data-delay="0.1"
                  className="inline-flex items-center gap-x-2 rounded-full px-4 py-1.5 mb-5"
                  style={{ border: '1px solid rgba(34,126,255,0.35)', backgroundColor: 'rgba(34,126,255,0.10)' }}
                >
                  <span className="size-1.5 rounded-full" style={{ backgroundColor: '#227eff' }}></span>
                  <span className="font-ibm-plex-mono text-tagline-4 font-medium tracking-wide uppercase" style={{ color: '#227eff' }}>
                    Integration
                  </span>
                </span>

                <h2 data-ns-animate data-delay="0.2" className="font-instrument-serif text-is-heading-2 font-normal text-white/95 leading-tight mb-3">
                  Enhance your productivity with over
                  <span className="text-[#227eff] lg:block"> 50 integrations.</span>
                </h2>

                <p data-ns-animate data-delay="0.3" className="text-tagline-2 text-white/60 mb-8 lg:max-w-[596px]">
                  Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's
                  not Latin though it looks like nothing.
                </p>

                <div data-ns-animate data-delay="0.4">
                  <Link
                    to="/integrations"
                    className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-tagline-3 font-medium text-white transition-all hover:scale-[1.02] w-[90%] md:w-auto"
                    style={{
                      background: 'linear-gradient(135deg, #227eff, #8d59ff)',
                    }}
                  >
                    <span>See it in action</span>
                  </Link>
                </div>
              </div>

              {/* Right - Logo Marquee */}
              <div
                data-ns-animate
                data-delay="0.5"
                className="w-full space-y-6 flex flex-col items-center lg:w-1/2 relative"
              >
                {/* Center Arrow Button */}
                <Link to="/integrations" aria-label="View integrations page">
                  <span className="sr-only">View integrations page</span>
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#227eff] size-[100px] md:size-[140px] rounded-full flex items-center justify-center z-10 hover:scale-[1.03] hover:shadow-[0_0_40px_rgba(34,126,255,0.3)] transition-transform duration-200 ease-in cursor-pointer"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </Link>

                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-r from-[#0A0D14] to-transparent z-40 pointer-events-none"></div>
                <div className="absolute right-0 top-0 h-full w-[15%] md:w-[20%] bg-gradient-to-l from-[#0A0D14] to-transparent z-40 pointer-events-none"></div>

                {/* Row 1 - Left to Right */}
                <div className="logos-marquee-container overflow-hidden w-full">
                  <div className="flex items-center gap-x-6 animate-marquee-left">
                    {['notion', 'dropbox', 'svelte', 'slack', 'asana', 'notion', 'dropbox', 'svelte', 'slack', 'asana'].map((icon, idx) => (
                      <figure
                        key={`row1-${idx}`}
                        className="rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center shrink-0 p-3 transition-transform hover:scale-105"
                        style={{
                          backgroundColor: '#1A1F2E',
                          border: '1px solid rgba(148,174,207,0.08)',
                        }}
                      >
                        <div className="size-8 md:size-10 bg-white/10 rounded-lg"></div>
                      </figure>
                    ))}
                  </div>
                </div>

                {/* Row 2 - Right to Left */}
                <div className="logos-right-marquee-container overflow-hidden w-full">
                  <div className="flex items-center gap-x-6 animate-marquee-right">
                    {['svelte', 'notion', 'reddit', 'dropbox', 'svelte', 'notion', 'reddit', 'dropbox'].map((icon, idx) => (
                      <figure
                        key={`row2-${idx}`}
                        className="rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center shrink-0 p-3 transition-transform hover:scale-105"
                        style={{
                          backgroundColor: '#1A1F2E',
                          border: '1px solid rgba(148,174,207,0.08)',
                        }}
                      >
                        <div className="size-8 md:size-10 bg-white/10 rounded-lg"></div>
                      </figure>
                    ))}
                  </div>
                </div>

                {/* Row 3 - Left to Right */}
                <div className="logos-marquee-container overflow-hidden w-full">
                  <div className="flex items-center gap-x-6 animate-marquee-left">
                    {['slack', 'drive-google', 'spanchat-v2', 'dropbox', 'svelte', 'slack', 'drive-google', 'spanchat-v2', 'dropbox', 'svelte'].map((icon, idx) => (
                      <figure
                        key={`row3-${idx}`}
                        className="rounded-2xl size-12 md:size-20 lg:size-24 flex items-center justify-center shrink-0 p-3 transition-transform hover:scale-105"
                        style={{
                          backgroundColor: '#1A1F2E',
                          border: '1px solid rgba(148,174,207,0.08)',
                        }}
                      >
                        <div className="size-8 md:size-10 bg-white/10 rounded-lg"></div>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </div>

          <style jsx>{`
    @keyframes marquee-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes marquee-right {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
  .animate-marquee-left {
      animation: marquee-left 30s linear infinite;
      width: max-content;
      display: flex;
    }
  .animate-marquee-right {
      animation: marquee-right 30s linear infinite;
      width: max-content;
      display: flex;
    }
  .animate-marquee-left:hover,
  .animate-marquee-right:hover {
      animation-play-state: paused;
    }
  `}</style>
        </section>


        {/* ============== TEAM & LEADERSHIP ============== */}
        <section className="py-20 md:py-28" style={{ backgroundColor: '#0A0A0F' }}>
          <div className="main-container max-w-6xl">
            <div className="text-center mb-16">
              <span
                className="inline-flex items-center gap-x-2 rounded-full px-4 py-1.5 mb-6"
                style={{
                  border: '1px solid rgba(204, 255, 0, 0.3)',
                  backgroundColor: 'rgba(204, 255, 0, 0.08)'
                }}
              >
                <span className="font-ibm-plex-mono text-xs font-medium tracking-wide uppercase" style={{ color: '#CCFF00' }}>
                  Our Team
                </span>
              </span>

              <h2 className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-5">
                Our innovative, dynamic<br />and talented team
              </h2>

              <p className="text-base text-white/60 max-w-2xl mx-auto leading-relaxed">
                Our innovative, dynamic, and talented team is the driving force behind our success.
                Each member brings a unique blend of expertise.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
              {teamandleadership.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                  <div className="size-36 md:size-40 rounded-full mb-6 overflow-hidden bg-gradient-to-br from-[#1A1A25] to-[#0F0F18] border border-white/10">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="font-instrument-serif text-xl text-white mb-1.5">
                    {member.name}
                  </h3>

                  <p className="text-sm text-white/50 mb-5">
                    {member.role}
                  </p>

                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={member.socials.facebook}
                      className="size-8 rounded-full grid place-items-center hover:bg-white/5 transition-colors"
                      style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                      <svg width="14" height="14" fill="rgba(255,255,255,0.6)" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a
                      href={member.socials.twitter}
                      className="size-8 rounded-full grid place-items-center hover:bg-white/5 transition-colors"
                      style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                      <svg width="14" height="14" fill="rgba(255,255,255,0.6)" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 0 0 0-7.86 3v1A10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                      </svg>
                    </a>
                    <a
                      href={member.socials.linkedin}
                      className="size-8 rounded-full grid place-items-center hover:bg-white/5 transition-colors"
                      style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                      <svg width="14" height="14" fill="rgba(255,255,255,0.6)" viewBox="0 0 24 24">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                    <a
                      href={member.socials.instagram}
                      className="size-8 rounded-full grid place-items-center hover:bg-white/5 transition-colors"
                      style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                    >
                      <svg width="14" height="14" fill="rgba(255,255,255,0.6)" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ============== CLIENT SUCCESS ============== */}
        <section className="py-20 md:py-28" style={{ backgroundColor: '#0e111a' }}>
         <Testimonials />
        </section>



      </main>
    </>
  )
}
