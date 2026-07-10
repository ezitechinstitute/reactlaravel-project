import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const timelineData = [
  {
    year: '2022',
    title: 'The Inception',
    description: 'We started our journey with a small team of passionate developers and a vision to transform the digital landscape. Our focus was on building robust foundations and establishing our core values.',
  },
  {
    year: '2023',
    title: 'Rapid Expansion',
    description: 'Secured major enterprise clients and expanded our service offerings. We grew our team significantly and moved to our new headquarters, cementing our presence in the tech industry.',
  },
  {
    year: '2024',
    title: 'Innovation & Growth',
    description: 'Launched our flagship AI-driven products and received industry recognition for our innovative solutions. We expanded our global reach by opening two new international offices.',
  },
  {
    year: '2025',
    title: 'Market Leadership',
    description: 'Achieved market leadership in our primary sector. We continued to push the boundaries of technology, focusing on sustainable and scalable solutions for enterprise customers.',
  },
  {
    year: '2026',
    title: 'The Future Ahead',
    description: 'Looking forward, we are poised to introduce next-generation technologies that will redefine how businesses operate. Our commitment to excellence remains stronger than ever.',
  }
];

function TimelineCard({ item, index }) {
  const isEven = index % 2 === 0;
  const dotRef = useRef(null);
  const isInView = useInView(dotRef, {
    once: true,
    margin: "0px 0px -50% 0px" // Triggers when the dot reaches the exact center of the screen
  });

  return (
    <div className={`relative flex items-center w-full timeline-item ${isEven ? 'even-item' : 'odd-item'}`} style={{ marginTop: index !== 0 ? 'auto' : 0 }}>
      
      {/* Center Dot (Hollow Ring that fills up) */}
      <div 
        ref={dotRef}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-1/2 flex items-center justify-center rounded-full z-20 timeline-center-dot"
        style={{ width: '22px', height: '22px' }}
      >
        {/* Base Gradient Layer (The Border) */}
        <div className="absolute inset-0 rounded-full" style={{ background: 'linear-gradient(180deg, #64D9FD 0%, #7E57FD 35%, #ffffff 70%, #B04BFD 100%)' }}></div>
        
        {/* Dark Inner Circle (Creates the "Hollow" effect) */}
        <div className="absolute rounded-full" style={{ width: '18px', height: '18px', backgroundColor: '#05070c' }}></div>
        
        {/* Animated Inner Fill (Fills up when scrolled to) */}
        <motion.div 
          className="absolute rounded-full"
          style={{ width: '18px', height: '18px', background: 'linear-gradient(180deg, #64D9FD 0%, #7E57FD 35%, #ffffff 70%, #B04BFD 100%)' }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: isInView ? 1 : 0, opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>

      {/* Content Box */}
      <div className="w-full md:w-1/2 flex flex-col timeline-content-box space-y-3">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-3 text-left timeline-card-content"
        >
          <p className="text-sm font-bold tracking-widest uppercase" style={{ color: '#7E57FD' }}>{item.year}</p>
          <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight whitespace-pre-line">{item.title}</h3>
          <p className="story-desc text-sm leading-relaxed timeline-desc-text mt-3">{item.description}</p>
        </motion.div>
      </div>

      {/* Spacer for the other half */}
      <div className="hidden md:block w-1/2"></div>
    </div>
  );
}

export default function OurStoryTimeline() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="story-section py-24 md:py-32 relative overflow-hidden">
      <div className="main-container max-w-5xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32 space-y-6">
          <span className="inline-flex items-center gap-x-2 rounded-full story-badge px-4 py-1.5 mb-2" style={{ backgroundColor: '#1c2029', borderColor: 'rgba(255,255,255,0.1)', borderWidth: '1px' }}>
            <span className="text-xs font-medium tracking-wide" style={{ color: '#E8F371' }}>Our Story</span>
          </span>
          <h2 data-opai-animate data-delay="0.1" className="text-4xl md:text-5xl font-normal text-white tracking-tight" style={{ fontSize: '3.5rem' }}>
            How we've evolved
          </h2>
          <div data-opai-animate data-delay="0.2" className="story-subtitle text-sm md:text-base font-normal max-w-3xl mx-auto leading-relaxed space-y-4">
            <p>
              Ezitech Solutions is a technology-driven software company committed to helping businesses accelerate growth through innovative digital solutions.
            </p>
            <p>
              Our mission is to bridge the gap between business challenges and technology by delivering reliable, scalable, and future-ready products that create measurable impact.
            </p>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative" ref={timelineRef}>
          
          {/* Background Line (Dim) */}
          <div className="absolute top-0 bottom-0 story-line-bg rounded-full timeline-center-line md:-translate-x-1/2" style={{ width: '2px' }}></div>
          
          {/* Animated Glow Line (Progress) */}
          <motion.div 
            className="absolute top-0 rounded-full timeline-center-line md:-translate-x-1/2"
            style={{ 
              width: '4px',
              height: lineHeight,
              background: 'linear-gradient(180deg, #64D9FD 0%, #7E57FD 25%, #ffffff 50%, #B04BFD 100%)',
              boxShadow: '0 0 20px rgba(126, 87, 253, 0.6)'
            }}
          />

          {/* Timeline Items */}
          <div className="py-10 md:py-20 flex flex-col" style={{ gap: '4rem' }}>
            {timelineData.map((item, index) => (
              <TimelineCard key={index} item={item} index={index} />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
