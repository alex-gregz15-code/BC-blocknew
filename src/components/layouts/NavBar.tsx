// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Layers } from 'lucide-react';
import styles from '../styles/Navbar.module.css';

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Layers size={22} color="var(--primary)" />
          <span>CoLabs<span className={styles.dot}>.</span></span>
        </Link>
        <div className={styles.actions}>
          <Link to="/researcher" className={styles.btnSecondary}>Researcher</Link>
          <Link to="/commissioner" className={styles.btnPrimary}>Commissioner</Link>
        </div>
      </div>
    </nav>
  );
};