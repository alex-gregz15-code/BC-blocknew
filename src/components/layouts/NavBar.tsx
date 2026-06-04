import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Layers } from 'lucide-react';
import styles from '../../styles/Navbar.module.css';

export const Navbar: React.FC = () => {
  const location = useLocation();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const isLanding = location.pathname === '/';

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          <Layers size={22} color="var(--primary)" />
          <span>
            CoLabs<span className={styles.dot}>.</span>
          </span>
        </Link>

        {isLanding && (
          <ul className={styles.navLinks}>
            <li>
              <button onClick={() => scrollToSection('how')}>
                How It Works
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection('features')}>
                Features
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection('stories')}>
                Stories
              </button>
            </li>

            <li>
              <button onClick={() => scrollToSection('pricing')}>
                Pricing
              </button>
            </li>
          </ul>
        )}

        <div className={styles.actions}>
          <Link to="/researcher" className={styles.btnSecondary}>
            Researcher
          </Link>

          <Link to="/commissioner" className={styles.btnPrimary}>
            Commissioner
          </Link>
        </div>
      </div>
    </nav>
  );
};