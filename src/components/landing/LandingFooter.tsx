import React from 'react';
import { Link } from 'react-router-dom';

const LandingFooter: React.FC = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="footer-brand">
          <Link className="nav-logo" to="/">
            <span className="nav-dot" />
            Commission<span>R</span>
          </Link>
          <p>The shared infrastructure for research commissioning — connecting expertise with the organizations that need it.</p>
        </div>
        <div className="footer-links">
          <div className="footer-col">
            <h5>Platform</h5>
            <Link to="/marketplace">For Researchers</Link>
            <Link to="/commissioner">For Commissioners</Link>
            <Link to="/#cta">Pricing</Link>
            <Link to="/#cta">Enterprise</Link>
          </div>
          <div className="footer-col">
            <h5>Resources</h5>
            <Link to="/#how">Documentation</Link>
            <Link to="/#features">API</Link>
            <Link to="/marketplace">Research Hub</Link>
            <Link to="/#testimonials">Blog</Link>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <Link to="/#features">About</Link>
            <Link to="/#cta">Careers</Link>
            <Link to="/#cta">Privacy</Link>
            <Link to="/#cta">Terms</Link>
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
  );
};

export default LandingFooter;
