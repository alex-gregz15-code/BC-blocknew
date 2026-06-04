import React from 'react';

interface LandingMarqueeProps {
  items: string[];
}

const LandingMarquee: React.FC<LandingMarqueeProps> = ({ items }) => {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="marquee-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default LandingMarquee;
