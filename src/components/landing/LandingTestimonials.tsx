import React from 'react';

type Testimonial = {
  text: string;
  name: string;
  role: string;
  initials: string;
  badge: string;
};

interface LandingTestimonialsProps {
  testimonials: Testimonial[];
}

const LandingTestimonials: React.FC<LandingTestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-header">
        <div className="section-label">Stories</div>
        <div className="section-title">From both <em>sides.</em></div>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <p className="testimonial-text">{item.text}</p>
            <div className="testimonial-author">
              <div className="author-avatar">{item.initials}</div>
              <div className="author-info">
                <div className="author-name">{item.name}</div>
                <div className="author-role">{item.role}</div>
              </div>
              <div className="author-badge">{item.badge}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LandingTestimonials;
