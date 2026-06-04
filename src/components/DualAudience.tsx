// src/components/DualAudience.tsx
import React, { useState } from 'react';
import { ShieldCheck, Users, Zap, Terminal } from 'lucide-react';
import styles from '../styles/DualAudience.module.css';

const DualAudience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'commissioner' | 'researcher'>('commissioner');

  return (
    <section className={styles.section}>
      <div className={styles.centerText}>
        <h2>One unified architecture. Two spaces.</h2>
        <p>Whether sourcing breakthrough analytical answers or funding project lifecycles.</p>
      </div>

      <div className={styles.tabWrapper}>
        <div className={styles.tabContainer}>
          <button 
            onClick={() => setActiveTab('commissioner')}
            className={`${styles.tabButton} ${activeTab === 'commissioner' ? styles.activeTab : ''}`}
          >
            For Commissioners
          </button>
          <button 
            onClick={() => setActiveTab('researcher')}
            className={`${styles.tabButton} ${activeTab === 'researcher' ? styles.activeTab : ''}`}
          >
            For Researchers
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.contentPane}>
          {activeTab === 'commissioner' ? (
            <div>
              <h3>Deploy capital. Secure innovations.</h3>
              <p>Turn corporate roadmaps into structured, milestone-based academic commissions with automatic escrow distribution.</p>
              <ul className={styles.list}>
                <li className={styles.listItem}><ShieldCheck size={18} color="var(--primary)" /> Pre-negotiated institutional NDA architectures.</li>
                <li className={styles.listItem}><Users size={18} color="var(--primary)" /> Real-time peer assessment tracking.</li>
              </ul>
            </div>
          ) : (
            <div>
              <h3>Fund your lab without the bureaucracy.</h3>
              <p>Skip multi-month grant writing cycles. Get matched directly to industry operations seeking specialized research execution.</p>
              <ul className={styles.list}>
                <li className={styles.listItem}><Zap size={18} color="#7c3aed" /> Instant industrial telemetry access.</li>
                <li className={styles.listItem}><Terminal size={18} color="#7c3aed" /> Cryptographic authorship validation.</li>
              </ul>
            </div>
          )}
        </div>
        
        {/* Code Monitor Mock Interface */}
        <div className={styles.console}>
          <div className={styles.consoleHeader}>
            <div className={`${styles.dot} styles.dotRed`} />
            <div className={`${styles.dot} styles.dotYellow`} />
            <div className={`${styles.dot} styles.dotGreen`} />
            <span style={{marginLeft: '0.5rem'}}>colabs_protocol_{activeTab}.json</span>
          </div>
          <div className={styles.codeBlock}>
            <p className={styles.comment}>// Active peer network synchronized</p>
            <p>{"{"}</p>
            <p style={{paddingLeft: '1rem'}}>"role": <span className={styles.string}>"{activeTab}"</span>,</p>
            <p style={{paddingLeft: '1rem'}}>"layer_encryption": <span className={styles.string}>"TLS_1.3"</span>,</p>
            <p style={{paddingLeft: '1rem'}}>"status": <span className={styles.string}>"active_handshake"</span></p>
            <p>{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualAudience;