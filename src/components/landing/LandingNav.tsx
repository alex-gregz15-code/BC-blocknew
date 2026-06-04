import React from 'react';

interface LandingNavProps {
  scrolled: boolean;
}

const LandingNav: React.FC<LandingNavProps> = ({ scrolled }) => {
  return (
    <nav style={scrolled ? { background: 'rgba(13,17,23,0.95)' } : {}}>
      <div className="nav-logo">
        <span className="nav-dot" />
        Commission<span>R</span>
      </div>
      <ul className="nav-links">
        <li><a href="#how">How it works</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#stories">Stories</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
      <button className="nav-cta">Get Early Access</button>
    </nav>
  );
};

export default LandingNav;
