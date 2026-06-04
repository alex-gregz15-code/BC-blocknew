import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingCTA: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="cta-section" id="cta">
      <div className="section-label">Join the Platform</div>
      <h2 className="section-title">Research without<br /><em>the friction.</em></h2>
      <p className="section-desc">Whether you fund research or do it — CommissionR gives you the infrastructure to collaborate with confidence.</p>
      <div className="cta-buttons">
        <button
          type="button"
          className="hero-btn primary"
          style={{ opacity: 1, animation: 'none' }}
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
          style={{ opacity: 1, animation: 'none' }}
          onClick={() => navigate('/workspace/commissioner')}
        >
          Post a Brief
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default LandingCTA;
