import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        quote: "The platform's intuitive interface and powerful features have revolutionized our workflow. Customer support is exceptional.",
        name: "David Johnson",
        role: "Marketing Director",
        avatar: "/avatars/david.jpg", // apni image ka path
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

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(1); // beech wala start me active

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 3000); // 3s me rotate
        return () => clearInterval(interval);
    }, []);

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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative min-h-[320px]">
                    {testimonials.map((t, index) => {
                        const isActive = index === activeIndex;
                        return (
                            <motion.div
                                key={t.id}
                                className="rounded-2xl p-8 relative overflow-hidden"
                                animate={{
                                    scale: isActive ? 1.05 : 1,
                                    opacity: isActive ? 1 : 0.4,
                                    y: isActive ? -8 : 0,
                                }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                style={{
                                    border: '1px solid rgba(148,174,207,0.12)',
                                    backgroundColor: isActive
                                        ? 'rgba(34,126,255,0.08)'
                                        : 'rgba(255,255,255,0.02)',
                                }}
                            >
                                {/* Rating Badge - sirf active card pe */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            exit={{ scale: 0, rotate: 180 }}
                                            transition={{ duration: 0.4 }}
                                            className="absolute -top-3 -right-3 rounded-xl px-4 py-3 z-10"
                                            style={{
                                                background: 'linear-gradient(135deg, #227eff, #8d59ff)',
                                            }}
                                        >
                                            <div className="text-center">
                                                <p className="text-2xl font-bold text-white">{t.rating}</p>
                                                <div className="flex gap-0.5 justify-center">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} size={12} fill="#fff" stroke="none" />
                                                    ))}
                                                </div>
                                                <p className="text-[10px] text-white/80 mt-0.5">Trustpilot</p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <p className="text-white/70 mb-8 text-tagline-2 leading-relaxed">
                                    "{t.quote}"
                                </p>

                                <div className="flex items-center gap-4">
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="size-12 rounded-full object-cover"
                                        style={{ border: '2px solid rgba(34,126,255,0.3)' }}
                                    />
                                    <div>
                                        <p className="text-white font-medium text-tagline-2">{t.name}</p>
                                        <p className="text-white/50 text-tagline-4">{t.role}</p>
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
