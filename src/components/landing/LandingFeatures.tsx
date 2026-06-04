import React from 'react';

interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
}

interface LandingFeaturesProps {
  items: FeatureItem[];
}

const LandingFeatures: React.FC<LandingFeaturesProps> = ({ items }) => {
  return (
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
        {items.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandingFeatures;
