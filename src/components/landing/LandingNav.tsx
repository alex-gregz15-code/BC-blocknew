import React from 'react';
import { Link } from 'react-router-dom';

interface LandingNavProps {
  scrolled?: boolean;
}

const LandingNav: React.FC<LandingNavProps> = ({ scrolled }) => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <nav style={scrolled ? { background: 'rgba(13,17,23,0.95)' } : {}}>
      <Link className="nav-logo" to="/">
        <span className="nav-dot" />
        Commission<span>R</span>
      </Link>
      <ul className="nav-links">
        <li><button type="button" onClick={() => scrollToSection('how')}>How it works</button></li>
        <li><button type="button" onClick={() => scrollToSection('features')}>Features</button></li>
        <li><button type="button" onClick={() => scrollToSection('stories')}>Stories</button></li>
        <li><button type="button" onClick={() => scrollToSection('pricing')}>Pricing</button></li>
      </ul>
      <button className="nav-cta" type="button" onClick={() => scrollToSection('pricing')}>
        Get Early Access
      </button>
    </nav>
  );
};

export default LandingNav;
