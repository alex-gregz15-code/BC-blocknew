import React from 'react';

const LandingStats: React.FC = () => {
  return (
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
  );
};

export default LandingStats;
