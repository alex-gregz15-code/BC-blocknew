// src/pages/Landing.tsx

import { useState, useEffect } from 'react';
import {
  LandingNav,
  LandingHero,
  LandingMarquee,
  LandingHow,
  LandingStats,
  LandingFeatures,
  LandingTestimonials,
  LandingCTA,
  LandingFooter,
} from '../components/landing';

const marqueeItems = [
  'Peer Review Networks',
  'IP Agreements',
  'Milestone Tracking',
  'Research Grants',
  'Data Sharing',
  'Academic Partnerships',
  'Industry Collaboration',
  'Open Science',
  'Ethical Compliance',
  'Peer Review Networks',
  'IP Agreements',
  'Milestone Tracking',
  'Research Grants',
  'Data Sharing',
  'Academic Partnerships',
  'Industry Collaboration',
  'Open Science',
  'Ethical Compliance',
];

const featureItems = [
  { icon: '🔬', title: 'Project Scoping', desc: 'Define research parameters, budgets, and timelines in a structured collaborative workspace.' },
  { icon: '🤝', title: 'Researcher Matching', desc: 'Intelligent matching connects commissioners with verified researchers across disciplines.' },
  { icon: '📄', title: 'Proposal Engine', desc: 'Structured proposal workflows with version history, comments, and approval tracking.' },
  { icon: '🔐', title: 'IP Protection', desc: 'Secure agreements, NDAs, and licensing frameworks embedded into every project.' },
  { icon: '📊', title: 'Progress Tracking', desc: 'Real-time milestones, deliverable timelines, and transparent reporting dashboards.' },
  { icon: '💰', title: 'Escrow Payments', desc: 'Milestone-based escrow ensures researchers get paid and commissioners get results.' },
];

const testimonialItems = [
  {
    text: 'CommissionR completely changed how our foundation funds research. We went from months of back-and-forth to a signed agreement in two weeks.',
    name: 'Dr. Amara Osei',
    role: 'Director of Research, Meridian Foundation',
    initials: 'AO',
    badge: 'Commissioner',
  },
  {
    text: 'The scoping tools helped me structure my proposal in a way that commissioners actually understood. I landed three projects in my first month.',
    name: 'Priya Nambiar',
    role: 'Independent Climate Researcher',
    initials: 'PN',
    badge: 'Researcher',
  },
  {
    text: 'Having IP terms built into the workflow removed all the awkward negotiation. Both sides know exactly what they\'re agreeing to before work starts.',
    name: 'Lena Hoffmann',
    role: 'R&D Lead, Helix Ventures',
    initials: 'LH',
    badge: 'Commissioner',
  },
];

const howSteps = [
  { num: '01', title: 'Build your profile', desc: 'Showcase your credentials, past work, and research specializations to attract relevant briefs.', delay: 0 },
  { num: '02', title: 'Discover & respond to briefs', desc: 'Browse open commissions that match your expertise and submit structured proposals.', delay: 100 },
  { num: '03', title: 'Negotiate terms', desc: 'Use our agreement builder to align on scope, deliverables, timeline, and IP rights.', delay: 200 },
  { num: '04', title: 'Deliver & get paid', desc: 'Submit work through milestone gates and receive payment automatically on approval.', delay: 300 },
  { num: '01', title: 'Post a research brief', desc: 'Define your question, budget, preferred methodology, and required timeline.', delay: 50 },
  { num: '02', title: 'Review proposals', desc: 'Receive ranked proposals with researcher profiles, past work samples, and estimated costs.', delay: 150 },
  { num: '03', title: 'Manage progress', desc: 'Track milestones, review deliverables, and communicate directly within the platform.', delay: 250 },
  { num: '04', title: 'Own your outcomes', desc: 'Receive final reports, datasets, and IP assets — fully documented and legally protected.', delay: 350 },
];

function Landing() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app">
      <LandingNav scrolled={scrolled} />

      <section id="hero">
        <LandingHero />
      </section>

      <LandingMarquee items={marqueeItems} />

      <section id="how">
        <LandingHow steps={howSteps} />
      </section>

      <section id="stats">
        <LandingStats />
      </section>

      <section id="features">
        <LandingFeatures items={featureItems} />
      </section>

      <section id="stories">
        <LandingTestimonials testimonials={testimonialItems} />
      </section>

      <section id="pricing">
        <LandingCTA />
      </section>

      <LandingFooter />
    </div>
  );
}

export default Landing;
