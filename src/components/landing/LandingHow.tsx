import React, { useEffect, useRef, useState } from 'react';

type HowStepProps = {
  num: string;
  title: string;
  desc: string;
  delay: number;
};

function useIntersection(ref: React.RefObject<HTMLElement | null>, threshold = 0.15) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return visible;
}

const HowStep: React.FC<HowStepProps> = ({ num, title, desc, delay }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const visible = useIntersection(ref);

  return (
    <div
      ref={ref}
      className={`how-step${visible ? ' visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="step-num">{num}</div>
      <div className="step-content">
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

interface LandingHowProps {
  steps: Array<{ num: string; title: string; desc: string; delay: number }>;
}

const LandingHow: React.FC<LandingHowProps> = ({ steps }) => {
  return (
    <section className="how" id="how" style={{ padding: '100px 80px' }}>
      <div className="section-label">Process</div>
      <div className="section-title">Built for both<br /><em>sides</em> of the table.</div>
      <div className="how-grid">
        <div>
          <div className="how-col-label">// Researcher Journey</div>
          {steps.filter((_, index) => index < 4).map((step) => (
            <HowStep key={step.num} {...step} />
          ))}
        </div>
        <div>
          <div className="how-col-label">// Commissioner Journey</div>
          {steps.filter((_, index) => index >= 4).map((step) => (
            <HowStep key={step.num} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingHow;
