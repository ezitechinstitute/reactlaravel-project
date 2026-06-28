import { useEffect } from "react";
// import SEO from "../components/SEO";

/* ─────────────────────────────────────────
   INLINE STYLES (all 5 sections combined)
───────────────────────────────────────── */
const ALL_STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500&family=Inter+Tight:wght@300;400;500&display=swap');

/* ── ABOUT ── */
.ab{background:#12141c;padding:80px 0;font-family:'Inter Tight',sans-serif;overflow:hidden}
.ab-wrap{max-width:1200px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:1fr 440px;gap:56px;align-items:start}
@media(max-width:1100px){.ab-wrap{grid-template-columns:1fr 360px;gap:40px}}
@media(max-width:900px){.ab-wrap{grid-template-columns:1fr;padding:0 24px;gap:40px}}
@media(max-width:480px){.ab-wrap{padding:0 16px}}
.ab-h{font-family:'Sora',sans-serif;font-size:clamp(1.6rem,3vw,3rem);font-weight:400;color:#fff;margin-bottom:14px;line-height:1.15}
.ab-h span{color:rgba(255,255,255,0.28)}
.ab-p{font-size:0.9rem;color:rgba(255,255,255,0.45);line-height:1.8;margin-bottom:40px;max-width:480px}
.ab-grid{display:grid;grid-template-columns:1fr 1fr;border:1px solid rgba(255,255,255,0.1);border-radius:12px;overflow:hidden}
@media(max-width:480px){.ab-grid{grid-template-columns:1fr}}
.ab-card{padding:28px 24px;border:1px solid rgba(255,255,255,0.07);background:#1a1c26;transition:background 0.25s}
.ab-card:hover{background:#1f2133}
.ab-num{font-family:'Sora',sans-serif;font-size:2.8rem;font-weight:400;color:#fff;letter-spacing:-2px;line-height:1;margin-bottom:8px}
.ab-nl{font-size:0.78rem;color:rgba(255,255,255,0.38);letter-spacing:0.2px}
.ab-ct{font-family:'Sora',sans-serif;font-size:1.05rem;color:#fff;margin-bottom:10px;font-weight:400}
.ab-cx{font-size:0.8rem;color:rgba(255,255,255,0.42);line-height:1.7}
.ab-card.pur{background:linear-gradient(140deg,#2e1770 0%,#1a0e45 60%,#130b38 100%)}
.ab-card.pur:hover{background:linear-gradient(140deg,#3a1f88 0%,#22115a 60%,#180e44 100%)}
.avs{display:flex;align-items:center;margin-bottom:12px}
.av-i{width:36px;height:36px;border-radius:50%;border:2.5px solid #1a1c26;margin-left:-10px;overflow:hidden;flex-shrink:0;object-fit:cover}
.av-i:first-child{margin-left:0}
.av-n{width:36px;height:36px;border-radius:50%;border:2.5px solid #1a1c26;margin-left:-10px;background:#555e7a;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#fff;flex-shrink:0}
.av-tx{font-size:0.82rem;color:rgba(255,255,255,0.5);line-height:1.55}
.ab-img{border-radius:14px;overflow:hidden;height:100%;min-height:420px}
@media(max-width:900px){.ab-img{min-height:280px}}
.ab-img img{width:100%;height:100%;object-fit:cover;display:block;filter:grayscale(25%) brightness(0.9)}
.ab-reveal{opacity:0;transform:translateY(40px);transition:opacity 0.8s cubic-bezier(0.4,0,0.2,1),transform 0.8s cubic-bezier(0.4,0,0.2,1)}
.ab-reveal.from-right{transform:translateX(50px)}
.ab-reveal.ab-in{opacity:1;transform:translate(0,0)}
.ab-reveal.sd1{transition-delay:0.05s}
.ab-reveal.sd2{transition-delay:0.15s}
.ab-reveal.sd3{transition-delay:0.25s}
.ab-reveal.sd4{transition-delay:0.35s}
.ab-reveal.sd5{transition-delay:0.45s}

/* ── STATS ── */
.st-sec{background:#f5f0eb;padding:80px 0;font-family:'Inter Tight',sans-serif}
.st-grid{max-width:1100px;margin:0 auto;padding:0 32px;display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
@media(max-width:900px){.st-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:500px){.st-grid{grid-template-columns:1fr;padding:0 20px}}
.st-card{background:#ede8e2;border-radius:20px;padding:28px 24px 24px;display:flex;flex-direction:column;justify-content:space-between;min-height:200px;opacity:0;transform:translateY(40px);transition:opacity 0.7s cubic-bezier(0.4,0,0.2,1),transform 0.7s cubic-bezier(0.4,0,0.2,1)}
.st-card.st-in{opacity:1;transform:translateY(0)}
.st-card:nth-child(1){transition-delay:0.05s}
.st-card:nth-child(2){transition-delay:0.15s}
.st-card:nth-child(3){transition-delay:0.25s}
.st-card:nth-child(4){transition-delay:0.35s}
.st-top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:24px}
.st-title{font-family:'Inter Tight',sans-serif;font-size:0.95rem;font-weight:400;color:#1a1a1a;line-height:1.5;max-width:160px}
.st-icon{width:40px;height:40px;border:1.5px solid rgba(0,0,0,0.15);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;color:rgba(0,0,0,0.5);flex-shrink:0}
.st-num-wrap{display:flex;align-items:baseline;gap:2px;margin-bottom:6px}
.count-num{font-family:'Sora',sans-serif;font-size:3rem;font-weight:300;color:#1a1a1a;letter-spacing:-2px;line-height:1}
.st-suffix{font-family:'Sora',sans-serif;font-size:2.2rem;font-weight:300;color:#1a1a1a;letter-spacing:-1px}
.st-label{font-size:0.78rem;color:rgba(0,0,0,0.4);letter-spacing:0.2px}

/* ── STEPS ── */
.sp-sec{background:#0f1117;padding:100px 0;font-family:'Inter Tight',sans-serif;overflow:hidden}
.sp-top{text-align:center;margin-bottom:64px}
.sp-tag{display:inline-block;font-size:12px;color:rgba(255,255,255,0.6);border:1px solid rgba(255,255,255,0.15);border-radius:100px;padding:5px 16px;margin-bottom:24px;letter-spacing:0.3px}
.sp-title{font-family:'Sora',sans-serif;font-size:clamp(1.8rem,3vw,2.8rem);font-weight:400;color:#fff;line-height:1.2}
.sp-grid{max-width:1000px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:repeat(3,1fr);gap:40px;position:relative}
@media(max-width:768px){.sp-grid{grid-template-columns:1fr;gap:48px;padding:0 24px}}
.sp-grid::before{content:'';position:absolute;top:22px;left:calc(16.66% + 20px);right:calc(16.66% + 20px);height:1px;background:rgba(255,255,255,0.1)}
@media(max-width:768px){.sp-grid::before{display:none}}
.sp-item{text-align:center;opacity:0;transform:translateY(40px);transition:opacity 0.8s cubic-bezier(0.4,0,0.2,1),transform 0.8s cubic-bezier(0.4,0,0.2,1)}
.sp-item.sp-in{opacity:1;transform:translateY(0)}
.sp-item:nth-child(1){transition-delay:0.05s}
.sp-item:nth-child(2){transition-delay:0.2s}
.sp-item:nth-child(3){transition-delay:0.35s}
.sp-num{width:48px;height:48px;border-radius:100px;border:1px solid rgba(255,255,255,0.2);background:rgba(255,255,255,0.05);display:flex;align-items:center;justify-content:center;font-family:'Sora',sans-serif;font-size:1rem;color:#fff;font-weight:400;margin:0 auto 20px}
.sp-name{font-family:'Sora',sans-serif;font-size:1.05rem;color:#fff;font-weight:400;margin-bottom:10px}
.sp-desc{font-size:0.82rem;color:rgba(255,255,255,0.38);line-height:1.7;max-width:240px;margin:0 auto}

/* ── TEAM ── */
.t-sec{background:#0a0b10;padding:100px 0;font-family:'Inter Tight',sans-serif;overflow:hidden}
.t-top{text-align:center;margin-bottom:60px;padding:0 20px}
.t-tag{font-size:11px;color:#e05555;letter-spacing:2px;text-transform:uppercase;margin-bottom:16px;display:block}
.t-title{font-family:'Sora',sans-serif;font-size:clamp(1.6rem,3vw,2.6rem);font-weight:400;color:#fff;margin-bottom:14px;line-height:1.25}
.t-sub{font-size:0.88rem;color:rgba(255,255,255,0.42);max-width:440px;margin:0 auto;line-height:1.7}
.t-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:960px;margin:0 auto;padding:0 32px}
@media(max-width:768px){.t-grid{grid-template-columns:repeat(2,1fr);padding:0 20px;gap:10px}}
@media(max-width:400px){.t-grid{grid-template-columns:repeat(2,1fr);padding:0 12px;gap:8px}}
.t-card{position:relative;overflow:hidden;border-radius:16px;cursor:pointer;opacity:0;transform:translateY(60px) scale(0.95);transition:opacity 0.8s cubic-bezier(0.4,0,0.2,1),transform 0.8s cubic-bezier(0.4,0,0.2,1);aspect-ratio:3/4}
.t-card.t-in{opacity:1;transform:translateY(0) scale(1)}
.t-card:nth-child(1){transition-delay:0.05s}
.t-card:nth-child(2){transition-delay:0.15s}
.t-card:nth-child(3){transition-delay:0.25s}
.t-card:nth-child(4){transition-delay:0.35s}
.t-card:nth-child(5){transition-delay:0.45s}
.t-card:nth-child(6){transition-delay:0.55s}
.t-card img{width:100%;height:100%;object-fit:cover;object-position:top;display:block;filter:grayscale(100%) brightness(0.7);transition:filter 0.4s ease,transform 0.5s ease}
.t-card:hover img{filter:grayscale(50%) brightness(0.85);transform:scale(1.05)}
.t-card.featured img{filter:grayscale(20%) brightness(0.88)}
.t-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.92) 0%,rgba(0,0,0,0.35) 45%,transparent 100%);opacity:0;transition:opacity 0.4s ease}
.t-card.featured .t-overlay{opacity:1}
.t-card:hover .t-overlay{opacity:1}
.t-info{position:absolute;bottom:0;left:0;right:0;padding:18px 16px}
.t-card:not(.featured) .t-info{transform:translateY(100%);transition:transform 0.45s cubic-bezier(0.4,0,0.2,1)}
.t-card:not(.featured):hover .t-info{transform:translateY(0)}
.t-card.featured .t-info{transform:translateY(100%);transition:transform 0.7s cubic-bezier(0.4,0,0.2,1)}
.t-card.featured.t-in .t-info{transform:translateY(0);transition-delay:0.6s}
.t-card.featured .t-bar{width:0px;height:2px;background:white;margin-bottom:10px;border-radius:2px;transition:width 0.5s cubic-bezier(0.4,0,0.2,1)}
.t-card.featured.t-in .t-bar{width:40px;transition-delay:1.1s}
.t-card:not(.featured) .t-bar{display:none}
.t-name{font-family:'Sora',sans-serif;font-size:0.95rem;color:#fff;font-weight:400;margin-bottom:4px}
.t-role{font-size:0.72rem;color:rgba(255,255,255,0.55);letter-spacing:0.3px}

/* ── WHO ── */
.w-sec{background:#0d0f1a;padding:100px 0;font-family:'Inter Tight',sans-serif;overflow:hidden}
.w-top{text-align:center;margin-bottom:60px}
.w-tag{font-size:11px;color:#e05555;letter-spacing:2px;text-transform:uppercase;margin-bottom:16px;display:block}
.w-title{font-family:'Sora',sans-serif;font-size:clamp(2rem,3.5vw,2.8rem);font-weight:400;color:#fff;margin-bottom:16px}
.w-sub{font-size:0.9rem;color:rgba(255,255,255,0.45);max-width:500px;margin:0 auto;line-height:1.7}
.w-grid{display:flex;gap:16px;max-width:1200px;margin:0 auto;padding:0 32px;overflow-x:auto;scrollbar-width:none}
.w-grid::-webkit-scrollbar{display:none}
.w-card{flex:0 0 220px;height:320px;border-radius:16px;overflow:hidden;position:relative;cursor:pointer;opacity:0;transform:translateY(50px);transition:opacity 0.7s cubic-bezier(0.4,0,0.2,1),transform 0.7s cubic-bezier(0.4,0,0.2,1)}
.w-card.w-in{opacity:1;transform:translateY(0)}
.w-card:nth-child(1){transition-delay:0.05s}
.w-card:nth-child(2){transition-delay:0.15s}
.w-card:nth-child(3){transition-delay:0.25s}
.w-card:nth-child(4){transition-delay:0.35s}
.w-card:nth-child(5){transition-delay:0.45s}
@media(min-width:1000px){.w-grid{justify-content:center}.w-card{flex:0 0 calc(20% - 14px)}}
.w-card img{width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.5s ease}
.w-card:hover img{transform:scale(1.06)}
.w-overlay{position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.85) 0%,rgba(0,0,0,0.2) 50%,transparent 100%);opacity:0;transition:opacity 0.4s ease}
.w-card:hover .w-overlay{opacity:1}
.w-info{position:absolute;bottom:0;left:0;right:0;padding:20px 16px;transform:translateY(100%);transition:transform 0.4s cubic-bezier(0.4,0,0.2,1)}
.w-card:hover .w-info{transform:translateY(0)}
.w-name{font-family:'Sora',sans-serif;font-size:0.95rem;color:#fff;font-weight:400;margin-bottom:4px}
.w-role{font-size:0.75rem;color:rgba(255,255,255,0.6)}
`;

export default function OurTeam() {
    /* ── ABOUT: counter + reveal ── */
    useEffect(() => {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const numEl = entry.target.querySelector(".ab-num");
                    if (numEl && !numEl.classList.contains("counted")) {
                        numEl.classList.add("counted");
                        let current = 0;
                        numEl.textContent = "0%";
                        const timer = setInterval(() => {
                            current += 95 / (1500 / 16);
                            if (current >= 95) { current = 95; clearInterval(timer); }
                            numEl.textContent = Math.floor(current) + "%";
                        }, 16);
                    }
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const card1 = document.querySelector(".ab-card-1");
        if (card1) counterObserver.observe(card1);

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("ab-in");
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".ab-reveal").forEach((el) => revealObserver.observe(el));

        return () => { counterObserver.disconnect(); revealObserver.disconnect(); };
    }, []);

    /* ── STATS: count-up + card reveal ── */
    useEffect(() => {
        const counters = document.querySelectorAll(".count-num");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.getAttribute("data-target"));
                    const step = target / (2000 / 16);
                    let current = 0;
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= target) { current = target; clearInterval(timer); }
                        el.textContent = Math.floor(current);
                    }, 16);
                    observer.unobserve(el);
                }
            });
        }, { threshold: 0.5 });
        counters.forEach((el) => observer.observe(el));

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("st-in");
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".st-card").forEach((el) => cardObserver.observe(el));

        return () => { observer.disconnect(); cardObserver.disconnect(); };
    }, []);

    /* ── STEPS: reveal ── */
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("sp-in");
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".sp-item").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    /* ── TEAM: reveal ── */
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("t-in");
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".t-card").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    /* ── WHO: reveal ── */
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("w-in");
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".w-card").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    /* ── DATA ── */
    const stats = [
        { icon: "✦", title: "Relied upon by businesses", num: 20, suffix: "+", label: "Experts" },
        { icon: "◎", title: "The team at NexSaaS bank", num: 15, suffix: "+", label: "Years Experience" },
        { icon: "⬡", title: "Projects delivered globally", num: 500, suffix: "+", label: "Projects" },
        { icon: "◈", title: "Clients who trust NexSaaS", num: 100, suffix: "+", label: "Clients" },
    ];

    const steps = [
        { num: "1", title: "Sign up for free", desc: "Try our services commitment-free! Explore all we offer without a credit card—it's a risk-free" },
        { num: "2", title: "Customize your setup", desc: "Customize Nexsas to perfectly align with the unique requirements of your business." },
        { num: "3", title: "Start scaling", desc: "Streamline your processes, enhance efficiency, and expand your business horizons." },
    ];

    const team = [
        { img: "https://i.pravatar.cc/400?img=11", name: "James Park", role: "AI Engineer", featured: false },
        { img: "https://i.pravatar.cc/400?img=12", name: "Sophia Lee", role: "Chief Technology Officer", featured: true },
        { img: "https://i.pravatar.cc/400?img=13", name: "Aryan Mehta", role: "Product Designer", featured: false },
        { img: "https://i.pravatar.cc/400?img=14", name: "Carlos Rivera", role: "ML Specialist", featured: false },
        { img: "https://i.pravatar.cc/400?img=15", name: "David Osei", role: "Backend Developer", featured: false },
        { img: "https://i.pravatar.cc/400?img=16", name: "Kevin Yoon", role: "Growth Lead", featured: false },
    ];

    const whoCards = [
        { img: "https://i.pravatar.cc/400?img=47", name: "Sarah Johnson", role: "Content Creator" },
        { img: "https://i.pravatar.cc/400?img=48", name: "Emily Chen", role: "SEO Specialist" },
        { img: "https://i.pravatar.cc/400?img=49", name: "Mia Tanaka", role: "Landing Page Expert" },
        { img: "https://i.pravatar.cc/400?img=50", name: "Sophia Lee", role: "Blog Strategist" },
        { img: "https://i.pravatar.cc/400?img=44", name: "Aisha Khan", role: "Digital Marketer" },
    ];

    return (
        <>
            <SEO title="Our Team" url="/our-team" />
            <style>{ALL_STYLES}</style>

            <main>

                {/* ── ABOUT ── */}
                <section className="ab">
                    <div className="ab-wrap">
                        {/* Left */}
                        <div>
                            <h2 className="ab-h ab-reveal sd1">How NexSas <span>was born</span></h2>
                            <p className="ab-p ab-reveal sd2">
                                NexSas was founded to make AI accessible for businesses. our tools are trusted
                                globally for their simplicity, power, and real-world impact.
                            </p>
                            <div className="ab-grid">
                                {/* Card 1 — counter */}
                                <div className="ab-card ab-card-1 ab-reveal sd3">
                                    <div className="ab-num">0%</div>
                                    <div className="ab-nl">Customer satisfaction rate</div>
                                </div>
                                {/* Card 2 */}
                                <div className="ab-card ab-reveal sd4">
                                    <div className="ab-ct">Website design</div>
                                    <div className="ab-cx">Lorem ipsum dolor sit amet consectetur porta vel tempus molestie justo.</div>
                                </div>
                                {/* Card 3 — purple */}
                                <div className="ab-card pur ab-reveal sd5">
                                    <div className="ab-ct">Branding &amp; identity</div>
                                    <div className="ab-cx">Lorem ipsum dolor sit amet consectetur porta vel tempus molestie justo.</div>
                                </div>
                                {/* Card 4 — avatars */}
                                <div className="ab-card ab-reveal sd5">
                                    <div className="avs">
                                        <img className="av-i" src="https://i.pravatar.cc/40?img=1" alt="a1" />
                                        <img className="av-i" src="https://i.pravatar.cc/40?img=5" alt="a2" />
                                        <img className="av-i" src="https://i.pravatar.cc/40?img=9" alt="a3" />
                                        <img className="av-i" src="https://i.pravatar.cc/40?img=12" alt="a4" />
                                        <div className="av-n">99+</div>
                                    </div>
                                    <div className="av-tx">Timeless,<br />sustainable<br />creativity.</div>
                                </div>
                            </div>
                        </div>
                        {/* Right — image */}
                        <div className="ab-img ab-reveal from-right sd2">
                            <img src="/circuit.png" alt="circuit" />
                        </div>
                    </div>
                </section>

                {/* ── STATS ── */}
                <section className="st-sec">
                    <div className="st-grid">
                        {stats.map((s, i) => (
                            <div className="st-card" key={i}>
                                <div className="st-top">
                                    <div className="st-title">{s.title}</div>
                                    <div className="st-icon">{s.icon}</div>
                                </div>
                                <div>
                                    <div className="st-num-wrap">
                                        <span className="count-num" data-target={s.num}>0</span>
                                        <span className="st-suffix">{s.suffix}</span>
                                    </div>
                                    <div className="st-label">{s.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── STEPS ── */}
                <section className="sp-sec">
                    <div className="sp-top">
                        <span className="sp-tag">Steps</span>
                        <h2 className="sp-title">Get started in 3 simple steps</h2>
                    </div>
                    <div className="sp-grid">
                        {steps.map((s, i) => (
                            <div className="sp-item" key={i}>
                                <div className="sp-num">{s.num}</div>
                                <div className="sp-name">{s.title}</div>
                                <p className="sp-desc">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── TEAM ── */}
                <section className="t-sec">
                    <div className="t-top">
                        <span className="t-tag">Our expert</span>
                        <h2 className="t-title">Driven by expertise.<br />United by purpose.</h2>
                        <p className="t-sub">
                            Our team of AI specialists and strategists is committed to delivering intelligent,
                            customized solutions that fuel your growth.
                        </p>
                    </div>
                    <div className="t-grid">
                        {team.map((member, i) => (
                            <div className={`t-card ${member.featured ? "featured" : ""}`} key={i}>
                                <img src={member.img} alt={member.name} />
                                <div className="t-overlay" />
                                <div className="t-info">
                                    <div className="t-bar" />
                                    <div className="t-name">{member.name}</div>
                                    <div className="t-role">{member.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── WHO ── */}
                <section className="w-sec">
                    <div className="w-top">
                        <span className="w-tag">Use cases</span>
                        <h2 className="w-title">Who It's For</h2>
                        <p className="w-sub">
                            Whether you're optimizing blog content or building landing pages,
                            Nexsas makes it easier to rank.
                        </p>
                    </div>
                    <div className="w-grid">
                        {whoCards.map((c, i) => (
                            <div className="w-card" key={i}>
                                <img src={c.img} alt={c.name} />
                                <div className="w-overlay" />
                                <div className="w-info">
                                    <div className="w-name">{c.name}</div>
                                    <div className="w-role">{c.role}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
        </>
    );
}