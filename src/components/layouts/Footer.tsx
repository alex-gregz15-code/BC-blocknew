// src/components/layouts/Footer.tsx
import React from 'react';
import { Layers } from 'lucide-react';
import styles from '../../styles/Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div>
          <div className={styles.brand}>
            <Layers size={18} color="var(--primary)" />
            <span>CoLabs.</span>
          </div>
          <p className={styles.desc}>Providing friction-free structural pipelines for industrial commission networks and vetted global academia.</p>
        </div>
        
        <div>
          <h4>System Directory</h4>
          <ul className={styles.links}>
            <li><a href="#features">Platform Verification</a></li>
            <li><a href="/workspace/commissioner">Sponsor Portals</a></li>
            <li><a href="/workspace/researcher">Research Guilds</a></li>
          </ul>
        </div>

        <div>
          <h4>Framework Legal</h4>
          <ul className={styles.links}>
            <li><a href="#">Escrow Protocols</a></li>
            <li><a href="#">Arbitration Bylaws</a></li>
            <li><a href="#">NDA Template v4.1</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.bottomBar}>
        <p>&copy; {new Date().getFullYear()} CoLabs Network Inc. Secure Cryptographic Science Infrastructures.</p>
      </div>
    </footer>
  );
};