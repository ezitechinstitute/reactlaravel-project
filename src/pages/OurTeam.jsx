import { useEffect } from "react";
import SEO from "../components/SEO";

export default function OurTeam() {

    /* ── HERO ── */
    useEffect(() => {
        const els = document.querySelectorAll(".anim");
        els.forEach((el) => {
            const delay = parseFloat(el.getAttribute("data-delay") || 0);
            setTimeout(() => {
                el.style.opacity = "1";
                el.style.transform = "translateY(0) scale(1)";
            }, delay * 1000);
        });

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("in-view");
            });
        }, { threshold: 0.15 });
        document.querySelectorAll(".scroll-up").forEach((el) => scrollObserver.observe(el));

        const devObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const effNum = entry.target.querySelector(".eff-n");
                    if (effNum && !effNum.classList.contains("counted")) {
                        effNum.classList.add("counted");
                        let current = 0;
                        effNum.textContent = "0%";
                        const timer = setInterval(() => {
                            current += 87 / (1500 / 16);
                            if (current >= 87) { current = 87; clearInterval(timer); }
                            effNum.textContent = Math.floor(current) + "%";
                        }, 16);
                    }
                    devObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        const devCard = document.querySelector(".card-dev");
        if (devCard) devObserver.observe(devCard);

        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const mainNum = entry.target.querySelector(".dash-main-num");
                    const subNum = entry.target.querySelector(".dash-sub-num");
                    if (mainNum && !mainNum.classList.contains("counted")) {
                        mainNum.classList.add("counted");
                        let start = 0;
                        const end = 8458;
                        const step = end / (1500 / 16);
                        const timer = setInterval(() => {
                            start += step;
                            if (start >= end) { start = end; clearInterval(timer); }
                            mainNum.textContent = Math.floor(start).toLocaleString();
                        }, 16);
                    }
                    if (subNum && !subNum.classList.contains("counted")) {
                        subNum.classList.add("counted");
                        let s = 0;
                        const timer2 = setInterval(() => {
                            s += 0.05;
                            if (s >= 1.124) { s = 1.124; clearInterval(timer2); }
                            subNum.textContent = s.toFixed(3);
                        }, 16);
                    }
                    const bars = entry.target.querySelectorAll(".dbar");
                    bars.forEach((bar, i) => {
                        setTimeout(() => { bar.style.transform = "scaleY(1)"; }, 500 + i * 150);
                    });
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        const dashCard = document.querySelector(".card-dash");
        if (dashCard) counterObserver.observe(dashCard);

        document.querySelectorAll(".hero-btn").forEach((btn) => {
            const icon = btn.querySelector(".b-icon");
            const text = btn.querySelector(".b-text");
            if (!icon || !text) return;
            btn.addEventListener("mouseenter", () => {
                const bR = btn.getBoundingClientRect();
                const iR = icon.getBoundingClientRect();
                const tR = text.getBoundingClientRect();
                icon.style.transform = `translateX(${bR.width - (iR.left - bR.left) - icon.offsetWidth - 4}px)`;
                text.style.transform = `translateX(-${tR.left - bR.left - 4}px)`;
            });
            btn.addEventListener("mouseleave", () => {
                icon.style.transform = "translateX(0)";
                text.style.transform = "translateX(0)";
            });
        });

        return () => { scrollObserver.disconnect(); counterObserver.disconnect(); devObserver.disconnect(); };
    }, []);

    /* ── ABOUT ── */
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

    /* ── STATS ── */
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

    /* ── STEPS ── */
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("sp-in");
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".sp-item").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    /* ── TEAM ── */
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("t-in");
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".t-card").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    /* ── WHO ── */
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("w-in");
            });
        }, { threshold: 0.1 });
        document.querySelectorAll(".w-card").forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

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

            {/* ── HERO ── */}
            <section className="hero-section">
                <div className="hero-container">
                    <div className="anim" data-delay="0.1">
                        <h1 className="hero-title">AI that transforms businesses, drives growth</h1>
                        <p className="hero-sub">Harness the power of intelligent solutions to simplify workflows, boost efficiency, and stay ahead of the competition.</p>
                    </div>
                    <div className="btn-wrap anim" data-delay="0.3">
                        <a href="#" className="hero-btn">
                            <div className="b-icon">
                                <svg viewBox="0 0 14 14" width="14" height="14" fill="rgba(255,255,255,0.85)">
                                    <path d="M6 0H8V2H6V0Z" /><path d="M0 0H2V2H0V0Z" />
                                    <path d="M9 3H11V5H9V3Z" /><path d="M3 3H5V5H3V3Z" />
                                    <path d="M12 6H14V8H12V6Z" /><path d="M6 6H8V8H6V6Z" />
                                    <path d="M9 9H11V11H9V9Z" /><path d="M3 9H5V11H3V9Z" />
                                    <path d="M6 12H8V14H6V12Z" /><path d="M0 12H2V14H0V12Z" />
                                </svg>
                            </div>
                            <span className="b-text">Request a demo</span>
                        </a>
                    </div>
                    <div className="img-wrap hero-float anim" data-delay="0.4">
                        <img src="/brain.png" alt="AI Brain" />
                    </div>
                    <div className="card-wade scroll-up d1">
                        <div className="wade-outer">
                            <div className="wade-chip">
                                <img src="/avatar1.png" alt="Wade" style={{ width: '30%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                                <div>
                                    <p className="wade-name">wade warren</p>
                                    <p className="wade-role">Marketing coordinator</p>
                                </div>
                            </div>
                            <div className="wade-s1"></div>
                            <div className="wade-s2"></div>
                        </div>
                    </div>
                    <div className="card-dash scroll-up d2">
                        <div className="dash-outer">
                            <div className="dash-tabs">
                                <span className="dtab on">Overview</span>
                                <span className="dtab">Sales</span>
                                <span className="dtab">Order</span>
                            </div>
                            <div className="dash-bottom">
                                <div className="dash-left">
                                    <div className="dash-num">
                                        <span className="dash-main-num">0</span>
                                        <span className="dash-sub-num">0.000</span>
                                    </div>
                                    <p className="dash-desc">Your sales increased this month by around 58%</p>
                                </div>
                                <div className="dash-right">
                                    <div className="dash-chart">
                                        <div className="dbar" style={{ height: "28px" }}></div>
                                        <div className="dbar p" style={{ height: "42px" }}></div>
                                        <div className="dbar" style={{ height: "22px" }}></div>
                                        <div className="dbar p" style={{ height: "36px" }}></div>
                                    </div>
                                    <div className="dash-months">
                                        <span className="dmo">Apr</span>
                                        <span className="dmo">May</span>
                                        <span className="dmo">Jun</span>
                                        <span className="dmo">Jul</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-dev scroll-up d1">
                        <div className="dev-outer">
                            <p className="dev-title">Dev team</p>
                            <div className="avs-row">
                                <div className="av"><img src="/avatar1.png" alt="A" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                                <div className="av"><img src="/avatar2.png" alt="B" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                                <div className="av"><img src="/avatar3.png" alt="C" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                                <div className="av-plus">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <path d="M3.75 12H20.25" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M12 3.75V20.25" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                            <div className="stats-row">
                                <div>
                                    <p className="eff-l">Efficiency</p>
                                    <p className="eff-n">87%</p>
                                </div>
                                <div className="badge">
                                    <span>4</span>
                                    <svg width="15" height="17" viewBox="0 0 17 19" fill="none">
                                        <path d="M16.5 8.26C16.5 12.55 13.05 15.5 8.5 15.5V17.5C4 17 0.5 12.43 0.5 8.26C0.5 3.97 3.96 0.5 8.51 0.5C13.06 0.5 16.5 3.97 16.5 8.26Z" stroke="white" strokeWidth="1" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── ABOUT ── */}
            <section className="ab">
                <div className="ab-wrap">
                    <div>
                        <h2 className="ab-h ab-reveal sd1">How NexSas <span>was born</span></h2>
                        <p className="ab-p ab-reveal sd2">NexSas was founded to make AI accessible for businesses. our tools are trusted globally for their simplicity, power, and real-world impact.</p>
                        <div className="ab-grid">
                            <div className="ab-card ab-card-1 ab-reveal sd3">
                                <div className="ab-num">0%</div>
                                <div className="ab-nl">Customer satisfaction rate</div>
                            </div>
                            <div className="ab-card ab-reveal sd4">
                                <div className="ab-ct">Website design</div>
                                <div className="ab-cx">Lorem ipsum dolor sit amet consectetur porta vel tempus molestie justo.</div>
                            </div>
                            <div className="ab-card pur ab-reveal sd5">
                                <div className="ab-ct">Branding &amp; identity</div>
                                <div className="ab-cx">Lorem ipsum dolor sit amet consectetur porta vel tempus molestie justo.</div>
                            </div>
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
                            <div className="st-bottom">
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
                    <p className="t-sub">Our team of AI specialists and strategists is committed to delivering intelligent, customized solutions that fuel your growth.</p>
                </div>
                <div className="t-grid">
                    {team.map((member, i) => (
                        <div className={`t-card ${member.featured ? "featured" : ""}`} key={i}>
                            <img src={member.img} alt={member.name} />
                            <div className="t-overlay"></div>
                            <div className="t-info">
                                <div className="t-bar"></div>
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
                    <p className="w-sub">Whether you're optimizing blog content or building landing pages, Nexsas makes it easier to rank.</p>
                </div>
                <div className="w-grid">
                    {whoCards.map((c, i) => (
                        <div className="w-card" key={i}>
                            <img src={c.img} alt={c.name} />
                            <div className="w-overlay"></div>
                            <div className="w-info">
                                <div className="w-name">{c.name}</div>
                                <div className="w-role">{c.role}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}