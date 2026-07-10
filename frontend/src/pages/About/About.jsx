import SEO from '../../components/SEO/SEO';
import { Link } from 'react-router-dom';
import MissionVision from './Sections/MissionVision/MissionVision.jsx';
import Timeline from './Sections/Timeline/Timeline.jsx';
import './About.css';
import { motion } from 'framer-motion';
import { FaSlack, FaDropbox, FaGoogleDrive, FaRedditAlien, FaSnapchatGhost } from 'react-icons/fa';
import { SiAsana, SiNotion } from 'react-icons/si';
import { TbBulb, TbCode, TbRocket } from 'react-icons/tb';

export default function About() {
  return (
    <>
      <SEO title="About Us" url="/about" />
      <main className="bg-background-5">




        <section className="relative overflow-hidden bg-[#151923] about-hero-section" aria-label="About Ezitech">
          {/* Decorative background glows */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute rounded-full about-glow-1"></div>
            <div className="absolute rounded-full about-glow-2"></div>
          </div>

          <div className="main-container relative z-10">


            <div className="text-center mb-10" data-opai-animate data-delay="0.1" data-instant>
              <span className="inline-flex items-center gap-x-2 rounded-full border border-opai-blue/30 bg-[#13151A] px-5 py-2">
                <span className="font-ibm-plex-mono text-tagline-4 font-medium text-opai-blue tracking-wide uppercase about-tagline">About Ezitech</span>
              </span>
            </div>


            <div className="text-center max-w-4xl mx-auto mb-20">
              <h1 data-opai-animate data-delay="0.2" data-instant
                className="font-instrument-serif font-normal text-white align-center tracking-tight leading-[1.15] about-hero-title">
                Building technology that<br/>
                empowers businesses worldwide
              </h1>
              <p data-opai-animate data-delay="0.3" data-instant
                className="font-normal max-w-2xl mx-auto about-hero-desc">
                For over 15 years, Ezitech has been delivering innovative software solutions, SaaS products,
                and digital experiences that help businesses grow, scale, and succeed.
              </p>
            </div>


            {/* Stats Cards Row Container */}
            <div data-opai-animate data-delay="0.4" data-instant className="about-stats-container">

              {/* Card 1 */}
              <div className="about-stat-card">
                <div className="about-stat-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                </div>
                <div className="about-stat-content">
                  <span className="about-stat-number">15+</span>
                  <span className="about-stat-label">Years Experience</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="about-stat-card">
                <div className="about-stat-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                </div>
                <div className="about-stat-content">
                  <span className="about-stat-number">500+</span>
                  <span className="about-stat-label">Projects Delivered</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="about-stat-card">
                <div className="about-stat-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
                </div>
                <div className="about-stat-content">
                  <span className="about-stat-number">100+</span>
                  <span className="about-stat-label">Happy Clients</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="about-stat-card">
                <div className="about-stat-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8d59ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5M12 2C6 2 2 6 2 12c0 2.5 1 4 1 4s1.5-1 4-1c6 0 10-4 10-10 0-1.5-1-4-1-4zM9 15l3-3M19 5l3-3M20.5 7.5c.75-.75 2-1.5 2-1.5s-.75 1.25-1.5 2M11.5 3c-.75.75-1.5 2-1.5 2s1.25-.75 2-1.5" /></svg>
                </div>
                <div className="about-stat-content">
                  <span className="about-stat-number">50+</span>
                  <span className="about-stat-label">Experts on Team</span>
                </div>
              </div>

            </div>



          </div>

        </section>


      <section>

        {/* Bottom Section: Mission, Vision, Approach, Global Reach */}
        <div data-opai-animate data-delay="0.7" data-instant
          className="bg-[#0b0e14]/95 border border-stroke-1/10 rounded-3xl p-8 md:p-10 mt-10 backdrop-blur-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 mb-20">

          {/* Card 1: Our Mission */}
          <div className="flex flex-col gap-4 px-6 py-7 group transition-all duration-300 hover:bg-white/[0.03] border-l-2 border-l-[#a855f7] sm:border-l-2 sm:border-t-0 rounded-l-3xl">
            <div className="flex items-center gap-3">
              <span className="about-bottom-icon-wrap icon-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /></svg>
              </span>
              <h4 className="text-sm font-semibold tracking-wide text-purple-custom">Our Mission</h4>
            </div>
            <p className="text-sm text-white/60 leading-relaxed font-normal">To empower businesses with innovative technology solutions that drive efficiency, growth, and long-term success.</p>
          </div>

          {/* Card 2: Our Vision */}
          <div className="flex flex-col gap-4 px-6 py-7 group transition-all duration-300 hover:bg-white/[0.03]">
            <div className="flex items-center gap-3">
              <span className="about-bottom-icon-wrap icon-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
              </span>
              <h4 className="text-sm font-semibold tracking-wide text-green-custom">Our Vision</h4>
            </div>
            <p className="text-sm text-white/60 leading-relaxed font-normal">To become a globally trusted technology partner recognized for innovation, quality, and digital transformation.</p>
          </div>

          {/* Card 3: Our Approach */}
          <div className="flex flex-col gap-4 px-6 py-7 group transition-all duration-300 hover:bg-white/[0.03]">
            <div className="flex items-center gap-3">
              <span className="about-bottom-icon-wrap icon-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
              </span>
              <h4 className="text-sm font-semibold tracking-wide text-orange-custom">Our Approach</h4>
            </div>
            <p className="text-sm text-white/60 leading-relaxed font-normal">Agile, collaborative, and customer-first approach to deliver measurable results with speed and precision.</p>
          </div>

          {/* Card 4: Global Reach */}
          <div className="flex flex-col gap-4 px-6 py-7 group transition-all duration-300 hover:bg-white/[0.03] rounded-r-3xl">
            <div className="flex items-center gap-3">
              <span className="about-bottom-icon-wrap icon-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>
              </span>
              <h4 className="text-sm font-semibold tracking-wide text-blue-custom">Global Reach</h4>
            </div>
            <p className="text-sm text-white/60 leading-relaxed font-normal">Proudly serving clients in multiple industries and countries with a global mindset and local understanding.</p>
          </div>
        </div>

    </section >


      <MissionVision />

  <Timeline />

  {/* Why Choose Us Section */}
  <section className="wcu-section">
    <div className="wcu-header">
      <h2 data-opai-animate data-delay="0.1" className="wcu-heading">
        Why Choose Ezitech
      </h2>
      <p data-opai-animate data-delay="0.15" className="wcu-subheading">
        A dynamic digital marketing agency trusted by clients around the globe.
      </p>
      <div data-opai-animate data-delay="0.2" className="wcu-btn-wrapper">
        <a href="#" className="wcu-btn">Read more success stories.</a>
      </div>
    </div>
    
    <div className="wcu-marquee-wrapper" data-opai-animate data-delay="0.3">
      <div className="animate-wcu-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="wcu-marquee-group">
            <div className="wcu-card">
              <div className="wcu-card-content">
                <span className="wcu-top-text">proven track record.</span>
                <span className="wcu-big-text">15+</span>
                <span className="wcu-bottom-text">Years Industry Experience.</span>
              </div>
            </div>
            <div className="wcu-card">
              <div className="wcu-card-content">
                <span className="wcu-top-text">delivered worldwide.</span>
                <span className="wcu-big-text">500+</span>
                <span className="wcu-bottom-text">Successful Projects.</span>
              </div>
            </div>
            <div className="wcu-card">
              <div className="wcu-card-content">
                <span className="wcu-top-text">satisfied partners.</span>
                <span className="wcu-big-text">100+</span>
                <span className="wcu-bottom-text">Happy Clients.</span>
              </div>
            </div>
            <div className="wcu-card">
              <div className="wcu-card-content">
                <span className="wcu-top-text">highly skilled professionals.</span>
                <span className="wcu-big-text">Expert</span>
                <span className="wcu-bottom-text">Development Team.</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
 

  {/* Our Development Process Section */}
  <section className="dev-process-section" style={{ padding: '6rem 0', position: 'relative', zIndex: 10, background: 'linear-gradient(180deg, #0a0c12 0%, #0d1018 100%)' }}>

    {/* Subtle top border glow */}
    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />

    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem', textAlign: 'center' }}>

      {/* Header */}
      <div style={{ marginBottom: '4rem' }}>
        <h2
          data-opai-animate data-delay="0.1"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 600, color: '#ffffff', lineHeight: 1.2, marginBottom: '1.25rem', letterSpacing: '-0.02em' }}
        >
          Our Development Process
        </h2>
        <p
          data-opai-animate data-delay="0.2"
          style={{ color: '#A1A1AA', fontSize: '1.0625rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.7 }}
        >
          We make it easy to get started, simple to scale, and seamless to succeed.
          Our structured approach ensures high-quality delivery at every step.
        </p>
      </div>

      {/* Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', textAlign: 'left' }}
        className="dev-process-grid">

        {/* Step 1 */}
        <div className="dev-anim-card dev-anim-card--1"
          style={{ background: '#141720', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '340px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.8125rem', color: '#6B7280', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>01 Discover</span>
            <div style={{
              width: '48px', height: '48px', borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0.06) 100%)',
              border: '1px solid rgba(99,102,241,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 18px rgba(99,102,241,0.12)'
            }}>
              <TbBulb size={24} color="#818CF8" strokeWidth={1.5} />
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.375rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.625rem', lineHeight: 1.35, letterSpacing: '-0.01em' }}>Requirements Analysis & Strategic Planning</h3>
            <p style={{ fontSize: '0.9375rem', color: '#9CA3AF', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              We understand your business objectives, challenges, and project requirements to build the right solution.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Deep-dive discovery sessions', 'Clear project roadmap', 'Defined scope & milestones'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#9CA3AF' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4B5563', flexShrink: 0, display: 'inline-block' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="dev-anim-card dev-anim-card--2"
          style={{ background: '#141720', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '340px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.8125rem', color: '#6B7280', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>02 Develop</span>
            <div style={{
              width: '48px', height: '48px', borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(20,184,166,0.18) 0%, rgba(20,184,166,0.06) 100%)',
              border: '1px solid rgba(20,184,166,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 18px rgba(20,184,166,0.12)'
            }}>
              <TbCode size={24} color="#2DD4BF" strokeWidth={1.5} />
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.375rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.625rem', lineHeight: 1.35, letterSpacing: '-0.01em' }}>Agile Design & Development</h3>
            <p style={{ fontSize: '0.9375rem', color: '#9CA3AF', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              Our experts design, develop, and continuously improve products through agile development cycles.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Iterative sprint cycles', 'UI/UX design collaboration', 'Continuous integration & testing'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#9CA3AF' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4B5563', flexShrink: 0, display: 'inline-block' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="dev-anim-card dev-anim-card--3"
          style={{ background: '#141720', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '20px', padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '340px' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.8125rem', color: '#6B7280', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>03 Deliver</span>
            <div style={{
              width: '48px', height: '48px', borderRadius: '14px',
              background: 'linear-gradient(135deg, rgba(249,115,22,0.18) 0%, rgba(249,115,22,0.06) 100%)',
              border: '1px solid rgba(249,115,22,0.25)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 18px rgba(249,115,22,0.12)'
            }}>
              <TbRocket size={24} color="#FB923C" strokeWidth={1.5} />
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '1.375rem', fontWeight: 600, color: '#ffffff', marginBottom: '0.625rem', lineHeight: 1.35, letterSpacing: '-0.01em' }}>Testing, Deployment & Optimization</h3>
            <p style={{ fontSize: '0.9375rem', color: '#9CA3AF', lineHeight: 1.65, marginBottom: '1.25rem' }}>
              We ensure quality, security, and performance before deployment while providing ongoing support.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {['Automated QA & testing', 'Smooth production deployment', 'Post-launch support & monitoring'].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: '#9CA3AF' }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#4B5563', flexShrink: 0, display: 'inline-block' }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>

    {/* Scoped styles for animations + responsive */}
    <style>{`
      @keyframes devCardFadeUp {
        from { opacity: 0; transform: translateY(36px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      .dev-anim-card {
        opacity: 0;
        animation: devCardFadeUp 0.65s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
      }
      .dev-anim-card:hover {
        transform: translateY(-6px);
        border-color: rgba(255,255,255,0.14) !important;
        box-shadow: 0 20px 48px rgba(0,0,0,0.45);
      }
      .dev-anim-card--1 { animation-delay: 0.15s; }
      .dev-anim-card--2 { animation-delay: 0.30s; }
      .dev-anim-card--3 { animation-delay: 0.45s; }
      @media (max-width: 768px) {
        .dev-process-grid { grid-template-columns: 1fr !important; }
      }
    `}</style>
  </section>

 <section className="py-20 md:py-25 overflow-hidden">
    <div className="main-container">
      <div className="flex flex-col lg:flex-row gap-x-20 gap-y-20 items-center">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 max-lg:text-center">
          <div data-opai-animate data-delay="0.1" className="mb-6 inline-block">
            <span className="inline-block rounded-full integration-badge px-4 py-1.5 text-sm font-medium">
              Integration
            </span>
          </div>
          <h2 
            data-opai-animate data-delay="0.2" 
            className="mb-6 font-instrument-serif text-white font-normal integration-heading"
          >
            Enhance your productivity with over{' '}
            <span className="integration-text-purple">50 integrations.</span>
          </h2>
          <p 
            data-opai-animate data-delay="0.3"
            className="integration-desc mb-8 text-[1.125rem] lg:max-w-[500px]"
          >
            Until recently, the prevailing view assumed lorem ipsum was born as a nonsense text. It's not Latin though it looks like nothing.
          </p>
          <div data-opai-animate data-delay="0.4">
            <a href="#" className="inline-block integration-btn px-8 py-3.5 rounded-full font-medium transition-colors">
              See it in action
            </a>
          </div>
        </div>

        {/* Right Side - Grid */}
        <div data-opai-animate data-delay="0.5" className="w-full lg:w-1/2 relative">
           <div className="relative w-full max-w-[400px] mx-auto py-10 flex items-center justify-center">
             
             {/* Center Button */}
             <motion.div
               animate={{ scale: [1, 1.05, 1] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="absolute z-20 size-[100px] md:size-[140px] rounded-full flex items-center justify-center integration-center-btn transition-transform"
             >
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="text-white">
                  <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" />
                </svg>
             </motion.div>

             {/* Grid of icons (Marquee) */}
             <div 
               className="w-full space-y-4 sm:space-y-6 flex flex-col relative overflow-hidden py-4 opacity-90 transition-opacity duration-500"
               style={{ WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
             >
                {/* Row 1 */}
                <div className="logos-marquee-container group">
                  <div className="marquee-content-left flex items-center gap-4 sm:gap-6 justify-around pr-4 sm:pr-6">
                    {[
                      { icon: SiNotion, color: '#ffffff' },
                      { icon: FaDropbox, color: '#0061FF' },
                      { icon: FaRedditAlien, color: '#FF4500' },
                      { icon: FaSlack, color: '#E01E5A' },
                      { icon: SiAsana, color: '#F06A6A' },
                    ].map((item, i) => (
                      <div key={i} className="integration-card w-[70px] h-[70px] md:w-20 md:h-20 lg:w-[100px] lg:h-[100px] rounded-2xl flex items-center justify-center shadow-lg transition-colors flex-shrink-0">
                        <item.icon size={56} color={item.color} className="w-10 h-10 md:w-14 md:h-14" />
                      </div>
                    ))}
                  </div>
                  {/* Duplicate for seamless loop */}
                  <div className="marquee-content-left flex items-center gap-4 sm:gap-6 justify-around pr-4 sm:pr-6" aria-hidden="true">
                    {[
                      { icon: SiNotion, color: '#ffffff' },
                      { icon: FaDropbox, color: '#0061FF' },
                      { icon: FaRedditAlien, color: '#FF4500' },
                      { icon: FaSlack, color: '#E01E5A' },
                      { icon: SiAsana, color: '#F06A6A' },
                    ].map((item, i) => (
                      <div key={i} className="integration-card w-[70px] h-[70px] md:w-20 md:h-20 lg:w-[100px] lg:h-[100px] rounded-2xl flex items-center justify-center shadow-lg transition-colors flex-shrink-0">
                        <item.icon size={56} color={item.color} className="w-10 h-10 md:w-14 md:h-14" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 2 (Right Marquee) */}
                <div className="logos-right-marquee-container group">
                  <div className="marquee-content-right flex items-center gap-4 sm:gap-6 justify-around pr-4 sm:pr-6">
                    {[
                      { icon: FaSlack, color: '#E01E5A' },
                      { icon: SiNotion, color: '#ffffff' },
                      { icon: FaRedditAlien, color: '#FF4500' },
                      { icon: FaDropbox, color: '#0061FF' },
                    ].map((item, i) => (
                      <div key={i} className="integration-card w-[70px] h-[70px] md:w-20 md:h-20 lg:w-[100px] lg:h-[100px] rounded-2xl flex items-center justify-center shadow-lg transition-colors flex-shrink-0">
                        <item.icon size={56} color={item.color} className="w-10 h-10 md:w-14 md:h-14" />
                      </div>
                    ))}
                  </div>
                  {/* Duplicate for seamless loop */}
                  <div className="marquee-content-right flex items-center gap-4 sm:gap-6 justify-around pr-4 sm:pr-6" aria-hidden="true">
                    {[
                      { icon: FaSlack, color: '#E01E5A' },
                      { icon: SiNotion, color: '#ffffff' },
                      { icon: FaRedditAlien, color: '#FF4500' },
                      { icon: FaDropbox, color: '#0061FF' },
                    ].map((item, i) => (
                      <div key={i} className="integration-card w-[70px] h-[70px] md:w-20 md:h-20 lg:w-[100px] lg:h-[100px] rounded-2xl flex items-center justify-center shadow-lg transition-colors flex-shrink-0">
                        <item.icon size={56} color={item.color} className="w-10 h-10 md:w-14 md:h-14" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Row 3 */}
                <div className="logos-marquee-container group">
                  <div className="marquee-content-left flex items-center gap-4 sm:gap-6 justify-around pr-4 sm:pr-6">
                    {[
                      { icon: FaSlack, color: '#E01E5A' },
                      { icon: FaGoogleDrive, color: '#00A1F1' },
                      { icon: FaSnapchatGhost, color: '#FFFC00' },
                      { icon: FaDropbox, color: '#0061FF' },
                      { icon: SiNotion, color: '#ffffff' },
                    ].map((item, i) => (
                      <div key={i} className="integration-card w-[70px] h-[70px] md:w-20 md:h-20 lg:w-[100px] lg:h-[100px] rounded-2xl flex items-center justify-center shadow-lg transition-colors flex-shrink-0">
                        <item.icon size={56} color={item.color} className="w-10 h-10 md:w-14 md:h-14" />
                      </div>
                    ))}
                  </div>
                  {/* Duplicate for seamless loop */}
                  <div className="marquee-content-left flex items-center gap-4 sm:gap-6 justify-around pr-4 sm:pr-6" aria-hidden="true">
                    {[
                      { icon: FaSlack, color: '#E01E5A' },
                      { icon: FaGoogleDrive, color: '#00A1F1' },
                      { icon: FaSnapchatGhost, color: '#FFFC00' },
                      { icon: FaDropbox, color: '#0061FF' },
                      { icon: SiNotion, color: '#ffffff' },
                    ].map((item, i) => (
                      <div key={i} className="integration-card w-[70px] h-[70px] md:w-20 md:h-20 lg:w-[100px] lg:h-[100px] rounded-2xl flex items-center justify-center shadow-lg transition-colors flex-shrink-0">
                        <item.icon size={56} color={item.color} className="w-10 h-10 md:w-14 md:h-14" />
                      </div>
                    ))}
                  </div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  </section>

  <section className="team-section">
    <div className="main-container relative z-10 text-center">
      
      <div data-opai-animate data-delay="0.1" className="team-badge">
        <span className="team-badge-text">Our team</span>
      </div>
      
      <h2 data-opai-animate data-delay="0.2" className="team-heading">
        Meet The Experts Behind Ezitech
      </h2>
      
      <p data-opai-animate data-delay="0.3" className="team-subheading">
        Our innovative, dynamic, and talented team is the driving force behind our success. Each member brings a unique blend of expertise
      </p>

      {/* Row 1 — 4 members */}
      <div className="team-row">
        {[
          { name: 'Darrell Steward', role: 'CEO & Founder', img: 'https://i.pravatar.cc/300?u=a042581f4e290267041' },
          { name: 'Wade Warren', role: 'Project Manager', img: 'https://i.pravatar.cc/300?u=a042581f4e290267042' },
          { name: 'Kathryn Murphy', role: 'Lead Software Engineer', img: 'https://i.pravatar.cc/300?u=a042581f4e290267043' },
          { name: 'Brooklyn Simmons', role: 'UI/UX Designer', img: 'https://i.pravatar.cc/300?u=a042581f4e290267044' },
        ].map((member, i) => (
          <div key={i} data-opai-animate data-delay={`${0.1 + i * 0.08}`} className="team-card w-[200px]">
            <div className="team-img-wrapper">
              <img src={member.img} alt={member.name} />
            </div>
            <h4 className="team-name">{member.name}</h4>
            <p className="team-role">{member.role}</p>
            <div className="team-socials">
              <a href="#" className="team-social-btn" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="team-social-btn" aria-label="Dribbble">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </a>
              <a href="#" className="team-social-btn" aria-label="Github">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="team-social-btn" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Row 2 — 2 members, centered */}
      <div className="team-row team-row-2">
        {[
          { name: 'Jane Doe', role: 'AI Engineer', img: 'https://i.pravatar.cc/300?u=a042581f4e290267045' },
          { name: 'John Smith', role: 'QA Engineer', img: 'https://i.pravatar.cc/300?u=a042581f4e290267046' },
        ].map((member, i) => (
          <div key={i} data-opai-animate data-delay={`${0.42 + i * 0.08}`} className="team-card w-[200px]">
            <div className="team-img-wrapper">
              <img src={member.img} alt={member.name} />
            </div>
            <h4 className="team-name">{member.name}</h4>
            <p className="team-role">{member.role}</p>
            <div className="team-socials">
              <a href="#" className="team-social-btn" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="team-social-btn" aria-label="Dribbble">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              </a>
              <a href="#" className="team-social-btn" aria-label="Github">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="#" className="team-social-btn" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  </section>

  
  
  <section style={{ padding: '5rem 0', backgroundColor: '#0a0c12' }}>
    <div className="main-container max-w-6xl">

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <div data-opai-animate data-delay="0.1" style={{ marginBottom: '1rem' }}>
          <span style={{
            display: 'inline-block', padding: '0.35rem 1.1rem', borderRadius: '999px',
            border: '1px solid rgba(34,126,255,0.35)', backgroundColor: 'rgba(34,126,255,0.10)',
            color: '#227eff', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase'
          }}>Reviews</span>
        </div>
        <h2 data-opai-animate data-delay="0.2" style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 600, color: '#fff',
          lineHeight: 1.2, letterSpacing: '-0.02em'
        }}>
          Hear from our customers about<br />their experiences with us
        </h2>
      </div>

      {/* Flip Cards Grid */}
      <style>{`
        .flip-card { perspective: 1000px; height: 260px; cursor: pointer; }
        .flip-card-inner {
          width: 100%; height: 100%; position: relative;
          transform-style: preserve-3d;
          transition: transform 0.65s ease;
        }
        .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
        .flip-card-front, .flip-card-back {
          position: absolute; inset: 0; width: 100%; height: 100%;
          border-radius: 1rem;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-front {
          padding: 1.75rem;
          display: flex; flex-direction: column; justify-content: space-between;
          border: 1px solid rgba(148,174,207,0.12);
          background: rgba(255,255,255,0.03);
        }
        .flip-card-front.active {
          background: rgba(34,126,255,0.08);
          border-color: rgba(34,126,255,0.2);
        }
        .flip-card-back {
          transform: rotateY(180deg);
          background: #11131a;
          border: 1px solid rgba(148,174,207,0.14);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          overflow: hidden;
        }
      `}</style>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }} className="reviews-flip-grid">
        {[
          { quote: "The platform's intuitive interface and powerful features have revolutionized our workflow. Customer support is exceptional.", name: "David Johnson", role: "Marketing Director", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d", rating: 4.9 },
          { quote: "Outstanding service and innovative solutions. The team's responsiveness and expertise have been invaluable to our growth.", name: "Michael Chen", role: "Tech Lead", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704a", rating: 5.0 },
          { quote: "The automation features have saved us countless hours. A game-changer for our business operations and team productivity.", name: "Alex Rodriguez", role: "Operations Manager", avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704b", rating: 4.8 },
        ].map((t, i) => (
          <div key={i} className="flip-card">
            <div className="flip-card-inner">

              {/* FRONT */}
              <div className={`flip-card-front${i === 1 ? ' active' : ''}`}>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  "{t.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <img src={t.avatar} alt={t.name} style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(34,126,255,0.35)' }} />
                  <div>
                    <p style={{ color: '#fff', fontWeight: 600, fontSize: '0.88rem' }}>{t.name}</p>
                    <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.76rem' }}>{t.role}</p>
                  </div>
                </div>
              </div>

              {/* BACK */}
              <div className="flip-card-back">
                {/* Glow blob */}
                <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '160px', height: '160px', borderRadius: '50%', background: 'linear-gradient(135deg,#FDE047,#D946EF)', filter: 'blur(50px)', opacity: 0.5, pointerEvents: 'none' }} />
                <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                  <p style={{ fontSize: '4.5rem', fontWeight: 300, color: '#a3ff6e', lineHeight: 1, marginBottom: '0.4rem', letterSpacing: '-2px' }}>
                    {t.rating.toFixed(1)}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '6px' }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
                    <span style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem' }}>Trustpilot</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', gap: '3px' }}>
                    {[...Array(5)].map((_, j) => (
                      <div key={j} style={{ backgroundColor: '#00b67a', padding: '3px', borderRadius: '3px' }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="#fff"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/></svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .reviews-flip-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </div>
  </section>


</main >
    </>
  )
}
