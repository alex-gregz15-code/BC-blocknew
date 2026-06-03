// src/components/Contact.tsx
import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import styles from './Contact.module.css';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.infoSide}>
          <h2>Initiate Custom Governance Frameworks</h2>
          <p>Need custom multi-institution IP isolation, escrow milestones over $1M, or tailored legal clearance schemas? Connect directly with our institutional operations division.</p>
          <div className={styles.mailLink}>
            <Mail size={16} />
            <span>ops@colabs-protocol.org</span>
          </div>
        </div>

        <div className={styles.formSide}>
          {submitted ? (
            <div className={styles.success}>
              <h4>Transmission Confirmed</h4>
              <p>Our academic registry team will coordinate with your lab coordinator within 24 business hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <input type="text" placeholder="Your Name / Institution" required className={styles.input} />
              <input type="email" placeholder="Institutional Email Address" required className={styles.input} />
              <textarea placeholder="Outline your scope of inquiry briefly..." rows={4} required className={styles.input} />
              <button type="submit" className={styles.submitBtn}>
                Send Inquiry <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};