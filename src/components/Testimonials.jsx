import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        quote: "The platform's intuitive interface and powerful features have revolutionized our workflow. Customer support is exceptional.",
        name: "David Johnson",
        role: "Marketing Director",
        avatar: "/avatars/david.jpg",
        rating: 4.9,
    },
    {
        id: 2,
        quote: "Outstanding service and innovative solutions. The team's responsiveness and expertise have been invaluable to our growth.",
        name: "Michael Chen",
        role: "Tech Lead",
        avatar: "/avatars/michael.jpg",
        rating: 5.0,
    },
    {
        id: 3,
        quote: "The automation features have saved us countless hours. A game-changer for our business operations and team productivity.",
        name: "Alex Rodriguez",
        role: "Operations Manager",
        avatar: "/avatars/alex.jpg",
        rating: 4.8,
    },
];

/* ─── Inline styles (avoids Tailwind JIT issues) ─── */
const styles = {
    scene: {
        height: '280px',
        perspective: '1000px',
        cursor: 'pointer',
    },
    flipper: (flipped) => ({
        width: '100%',
        height: '100%',
        position: 'relative',
        transformStyle: 'preserve-3d',
        transition: 'transform 0.65s ease',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
    }),
    face: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        borderRadius: '1rem',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
    },
    front: (isActive) => ({
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid rgba(148,174,207,0.12)',
        backgroundColor: isActive ? 'rgba(34,126,255,0.08)' : 'rgba(255,255,255,0.03)',
    }),
    back: {
        transform: 'rotateY(180deg)',
        backgroundColor: '#11131a',
        border: '1px solid rgba(148,174,207,0.14)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
};

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [hoveredId, setHoveredId] = useState(null);

    useEffect(() => {
        if (hoveredId !== null) return; // pause on hover
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [hoveredId]);

    return (
        <section className="py-20 md:py-28" style={{ backgroundColor: '#0e111a' }}>
            <div className="main-container max-w-6xl">
                <div className="text-center mb-14">
                    <span
                        className="inline-flex items-center gap-x-2 rounded-full px-4 py-1.5 mb-6"
                        style={{ border: '1px solid rgba(34,126,255,0.35)', backgroundColor: 'rgba(34,126,255,0.10)' }}
                    >
                        <span className="size-1.5 rounded-full" style={{ backgroundColor: '#227eff' }}></span>
                        <span className="font-ibm-plex-mono text-tagline-4 font-medium tracking-wide uppercase" style={{ color: '#227eff' }}>
                            Testimonials
                        </span>
                    </span>
                    <h2 className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl text-white/95 leading-tight mb-5">
                        Hear from our customers about their experiences with us
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, index) => {
                        const isActive = index === activeIndex;
                        const isFlipped = hoveredId === t.id;

                        return (
                            <motion.div
                                key={t.id}
                                animate={{
                                    scale: isActive ? 1.05 : 1,
                                    opacity: isActive ? 1 : 0.5,
                                    y: isActive ? -8 : 0,
                                }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                style={styles.scene}
                                onMouseEnter={() => setHoveredId(t.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Pure-CSS flip — Framer Motion only handles scale/opacity on wrapper */}
                                <div style={styles.flipper(isFlipped)}>

                                    {/* ── FRONT ── */}
                                    <div style={{ ...styles.face, ...styles.front(isActive) }}>
                                        <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', fontSize: '0.9rem' }}>
                                            "{t.quote}"
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                            <img
                                                src={t.avatar}
                                                alt={t.name}
                                                style={{
                                                    width: '48px',
                                                    height: '48px',
                                                    borderRadius: '50%',
                                                    objectFit: 'cover',
                                                    border: '2px solid rgba(34,126,255,0.35)',
                                                }}
                                            />
                                            <div>
                                                <p style={{ color: '#fff', fontWeight: 500, fontSize: '0.9rem' }}>{t.name}</p>
                                                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem' }}>{t.role}</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ── BACK ── */}
                                    <div style={{ ...styles.face, ...styles.back }}>
                                        {/* Glowing blob */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '-60px',
                                            left: '-60px',
                                            width: '180px',
                                            height: '180px',
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #FDE047 0%, #D946EF 100%)',
                                            filter: 'blur(55px)',
                                            opacity: 0.55,
                                            pointerEvents: 'none',
                                        }} />

                                        {/* Trustpilot content */}
                                        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                                            <p style={{
                                                fontSize: '5rem',
                                                fontWeight: 300,
                                                lineHeight: 1,
                                                marginBottom: '0.5rem',
                                                color: '#a3ff6e',
                                                letterSpacing: '-2px',
                                            }}>
                                                {t.rating.toFixed(1)}
                                            </p>
                                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', marginBottom: '6px' }}>
                                                <Star size={16} fill="#00b67a" stroke="none" />
                                                <span style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>Trustpilot</span>
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'center', gap: '3px' }}>
                                                {[...Array(5)].map((_, i) => (
                                                    <div key={i} style={{
                                                        backgroundColor: '#00b67a',
                                                        padding: '3px',
                                                        borderRadius: '3px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}>
                                                        <Star size={10} fill="#fff" stroke="none" />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
