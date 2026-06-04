import React from 'react';

const LandingFooter: React.FC = () => {
  return (
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
  );
};

export default LandingFooter;
