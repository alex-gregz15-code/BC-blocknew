
import { Link } from "react-router-dom";
import { Building2, GraduationCap, ArrowRight } from "lucide-react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <span className={styles.badge}>Decentralized Commissioning Platform</span>
      <h1 className={styles.title}>
        Connecting enterprise capital with{" "}
        <span className={styles.gradientText}>global intelligence.</span>
      </h1>
      <p className={styles.subtitle}>
        A secure environment for cross-border institutional research, transparent
        milestones, and vetted validation.
      </p>

      <div className={styles.grid}>
        <div className={styles.card}>
          <Building2 size={32} color="var(--primary)" />
          <h3>I want to Commission Research</h3>
          <p>
            Post structured briefs, fund milestones using secure escrows, and
            connect with peer-reviewed labs.
          </p>
          <Link to="/workspace/commissioner" className={styles.linkButton}>
            Open Briefing Hub <ArrowRight size={16} />
          </Link>
        </div>

        <div className={styles.card}>
          <GraduationCap size={32} color="#7c3aed" />
          <h3>I am an Academic Researcher</h3>
          <p>
            Browse active institutional challenges, apply with blind proposals,
            and secure direct corporate grants.
          </p>
          <Link to="/workspace/researcher" className={styles.linkButton}>
            Browse Active Openings <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;