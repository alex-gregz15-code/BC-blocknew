import { useState, useEffect, useRef } from "react";
import type { RefObject } from "react";
import { useNavigate } from 'react-router-dom';

// global styles are imported once in src/main.tsx

const features = [
  { icon: "🔬", title: "Project Scoping", desc: "Define research parameters, budgets, and timelines in a structured collaborative workspace." },
  { icon: "🤝", title: "Researcher Matching", desc: "Intelligent matching connects commissioners with verified researchers across disciplines." },
  { icon: "📄", title: "Proposal Engine", desc: "Structured proposal workflows with version history, comments, and approval tracking." },
  { icon: "🔐", title: "IP Protection", desc: "Secure agreements, NDAs, and licensing frameworks embedded into every project." },
  { icon: "📊", title: "Progress Tracking", desc: "Real-time milestones, deliverable timelines, and transparent reporting dashboards." },
  { icon: "💰", title: "Escrow Payments", desc: "Milestone-based escrow ensures researchers get paid and commissioners get results." },
];

const testimonials = [
  {
    text: "CommissionR completely changed how our foundation funds research. We went from months of back-and-forth to a signed agreement in two weeks.",
    name: "Dr. Amara Osei",
    role: "Director of Research, Meridian Foundation",
    initials: "AO",
    badge: "Commissioner",
  },
  {
    text: "The scoping tools helped me structure my proposal in a way that commissioners actually understood. I landed three projects in my first month.",
    name: "Priya Nambiar",
    role: "Independent Climate Researcher",
    initials: "PN",
    badge: "Researcher",
  },
  {
    text: "Having IP terms built into the workflow removed all the awkward negotiation. Both sides know exactly what they're agreeing to before work starts.",
    name: "Lena Hoffmann",
    role: "R&D Lead, Helix Ventures",
    initials: "LH",
    badge: "Commissioner",
  },
];

const marqueeItems = [
  "Peer Review Networks", "IP Agreements", "Milestone Tracking",
  "Research Grants", "Data Sharing", "Academic Partnerships",
  "Industry Collaboration", "Open Science", "Ethical Compliance",
  "Peer Review Networks", "IP Agreements", "Milestone Tracking",
  "Research Grants", "Data Sharing", "Academic Partnerships",
  "Industry Collaboration", "Open Science", "Ethical Compliance",
];

function useIntersection(ref: RefObject<HTMLElement | null>, threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

function HowStep({ num, title, desc, delay }: { num: string; title: string; desc: string; delay: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useIntersection(ref);
  return (
    <div
      ref={ref}
      className={`how-step${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="step-num">{num}</div>
      <div className="step-content">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default function Landing() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="app">

        {/* NAV */}
        <nav style={scrolled ? { background: "rgba(13,17,23,0.95)" } : {}}>
          <div className="nav-logo">
            <span className="nav-dot" />
            Commission<span>R</span>
          </div>
          <ul className="nav-links">
            <li><a href="#how">How it works</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#testimonials">Stories</a></li>
            <li><a href="#cta">Pricing</a></li>
          </ul>
          <button className="nav-cta">Get Early Access</button>
        </nav>

        {/* HERO */}
        <section className="hero" style={{ padding: 0 }}>
          <div className="hero-divider" />

          <div className="hero-side left">
            <div className="hero-tag">For Researchers</div>
            <h1 className="hero-headline">
              Turn your expertise into<br /><em>commissioned work.</em>
            </h1>
            <p className="hero-sub">
              Connect with organizations that fund research aligned with your field. Propose, negotiate, and deliver — all in one place.
            </p>
            <button
              type="button"
              className="hero-btn primary"
              onClick={() => navigate('/researcher')}
            >
              Apply as Researcher
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="hero-floater">2,400+ Active Researchers</div>
          </div>

          <div className="hero-side right">
            <div className="hero-tag">For Commissioners</div>
            <h1 className="hero-headline">
              Fund research that<br /><em>actually delivers.</em>
            </h1>
            <p className="hero-sub">
              Post briefs, browse vetted researchers, and manage projects with full transparency — from scoping to final report.
            </p>
            <button
              type="button"
              className="hero-btn secondary"
              onClick={() => navigate('/commissioner')}
            >
              Post a Research Brief
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="hero-floater">340+ Projects Funded</div>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="marquee-wrap">
          <div className="marquee-track">
            {marqueeItems.map((item, i) => (
              <span key={i} className="marquee-item">{item}</span>
            ))}
          </div>
        </div>

        {/* HOW IT WORKS */}
        <section className="how" id="how" style={{ padding: "100px 80px" }}>
          <div className="section-label">Process</div>
          <div className="section-title">Built for both<br /><em>sides</em> of the table.</div>
          <div className="how-grid">
            <div>
              <div className="how-col-label">// Researcher Journey</div>
              <HowStep num="01" title="Build your profile" desc="Showcase your credentials, past work, and research specializations to attract relevant briefs." delay={0} />
              <HowStep num="02" title="Discover & respond to briefs" desc="Browse open commissions that match your expertise and submit structured proposals." delay={100} />
              <HowStep num="03" title="Negotiate terms" desc="Use our agreement builder to align on scope, deliverables, timeline, and IP rights." delay={200} />
              <HowStep num="04" title="Deliver & get paid" desc="Submit work through milestone gates and receive payment automatically on approval." delay={300} />
            </div>
            <div>
              <div className="how-col-label">// Commissioner Journey</div>
              <HowStep num="01" title="Post a research brief" desc="Define your question, budget, preferred methodology, and required timeline." delay={50} />
              <HowStep num="02" title="Review proposals" desc="Receive ranked proposals with researcher profiles, past work samples, and estimated costs." delay={150} />
              <HowStep num="03" title="Manage progress" desc="Track milestones, review deliverables, and communicate directly within the platform." delay={250} />
              <HowStep num="04" title="Own your outcomes" desc="Receive final reports, datasets, and IP assets — fully documented and legally protected." delay={350} />
            </div>
          </div>
        </section>

        {/* STATS */}
        <div className="stats">
          <div className="stat-item">
            <span className="stat-num">2,400+</span>
            <span className="stat-label">Verified Researchers</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">$4.2M</span>
            <span className="stat-label">Research Funded</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">340+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-num">98%</span>
            <span className="stat-label">Satisfaction Rate</span>
          </div>
        </div>

        {/* FEATURES */}
        <section className="features" id="features">
          <div className="features-header">
            <div>
              <div className="section-label">Platform</div>
              <div className="section-title">Everything the collaboration<br /><em>needs.</em></div>
            </div>
            <p className="section-desc">
              CommissionR removes the friction from every stage — from initial scoping through final delivery — so both sides can focus on the work that matters.
            </p>
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonials" id="testimonials">
          <div className="testimonials-header">
            <div className="section-label">Stories</div>
            <div className="section-title">From both <em>sides.</em></div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div className="author-info">
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                  <div className="author-badge">{t.badge}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section" id="cta">
          <div className="section-label">Join the Platform</div>
          <h2 className="section-title">Research without<br /><em>the friction.</em></h2>
          <p className="section-desc">Whether you fund research or do it — CommissionR gives you the infrastructure to collaborate with confidence.</p>
          <div className="cta-buttons">
            <button
              type="button"
              className="hero-btn primary"
              style={{ opacity: 1, animation: "none" }}
              onClick={() => navigate('/workspace/researcher')}
            >
              Join as Researcher
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="hero-btn secondary"
              style={{ opacity: 1, animation: "none" }}
              onClick={() => navigate('/workspace/commissioner')}
            >
              Post a Brief
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </section>

        {/* FOOTER */}
        <footer>
          <div className="footer-top">
            <div className="footer-brand">
              <div className="nav-logo">
                <span className="nav-dot" />
                Commission<span>R</span>
              </div>
              <p>The shared infrastructure for research commissioning — connecting expertise with the organizations that need it.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h5>Platform</h5>
                <a href="#">For Researchers</a>
                <a href="#">For Commissioners</a>
                <a href="#">Pricing</a>
                <a href="#">Enterprise</a>
              </div>
              <div className="footer-col">
                <h5>Resources</h5>
                <a href="#">Documentation</a>
                <a href="#">API</a>
                <a href="#">Research Hub</a>
                <a href="#">Blog</a>
              </div>
              <div className="footer-col">
                <h5>Company</h5>
                <a href="#">About</a>
                <a href="#">Careers</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="footer-copy">© 2025 CommissionR. All rights reserved.</span>
            <div className="footer-status">
              <span className="status-dot" />
              All systems operational
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}
