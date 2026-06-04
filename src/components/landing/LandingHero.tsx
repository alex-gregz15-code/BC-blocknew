import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingHero: React.FC = () => {
  const navigate = useNavigate();

  return (
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
  );
};

export default LandingHero;
