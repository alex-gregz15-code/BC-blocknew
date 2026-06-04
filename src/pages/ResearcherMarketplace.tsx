/**
 * pages/ResearcherMarketplace.tsx
 *
 * Redesigned with improved UI/UX:
 * - Card-based listing with filters and search
 * - Proper TypeScript interfaces
 * - Accessible, semantic HTML
 * - CSS Module styles (see styles/ResearcherMarketplace.module.css)
 */

import { useState } from "react";
import { Layout } from "../components/layouts/Layout";
import styles from "../styles/ResearcherMarketplace.module.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Researcher {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  skills: string[];
  rating: number;
  completedJobs: number;
  hourlyRate: number;
  availability: "available" | "busy" | "unavailable";
  verified: boolean;
  specialization: string;
}

type SortOption = "rating" | "jobs" | "rate_asc" | "rate_desc";
type AvailabilityFilter = "all" | Researcher["availability"];

// ─── Mock Data ─────────────────────────────────────────────────────────────────

const MOCK_RESEARCHERS: Researcher[] = [
  {
    id: "r1",
    name: "Elena Vasquez",
    handle: "@0xelena",
    avatar: "EV",
    bio: "Smart contract auditor with 5+ years in DeFi security. Specializes in Solidity and Rust.",
    skills: ["Solidity", "Rust", "DeFi", "EVM", "Formal Verification"],
    rating: 4.9,
    completedJobs: 47,
    hourlyRate: 180,
    availability: "available",
    verified: true,
    specialization: "Smart Contracts",
  },
  {
    id: "r2",
    name: "Marcus Chen",
    handle: "@m_chain",
    avatar: "MC",
    bio: "Web3 penetration tester. Found critical bugs in 3 top-10 DeFi protocols.",
    skills: ["Penetration Testing", "Web3", "Ethereum", "MEV", "Flash Loans"],
    rating: 4.8,
    completedJobs: 31,
    hourlyRate: 150,
    availability: "busy",
    verified: true,
    specialization: "Security",
  },
  {
    id: "r3",
    name: "Aisha Okonkwo",
    handle: "@aisha_blocks",
    avatar: "AO",
    bio: "Layer 2 and bridge security researcher. Contributor to OpenZeppelin.",
    skills: ["L2", "Bridges", "ZK Proofs", "Cairo", "Rollups"],
    rating: 4.7,
    completedJobs: 19,
    hourlyRate: 200,
    availability: "available",
    verified: true,
    specialization: "Infrastructure",
  },
  {
    id: "r4",
    name: "Dev Patel",
    handle: "@devpatel_eth",
    avatar: "DP",
    bio: "NFT and gaming protocol researcher. 3 critical vulnerabilities disclosed responsibly.",
    skills: ["NFT", "ERC-721", "Gaming", "Marketplace", "Tokenomics"],
    rating: 4.5,
    completedJobs: 12,
    hourlyRate: 120,
    availability: "available",
    verified: false,
    specialization: "NFT & Gaming",
  },
  {
    id: "r5",
    name: "Sophia Müller",
    handle: "@sophia_zk",
    avatar: "SM",
    bio: "Zero-knowledge proof researcher. PhD in cryptography. Published 8 papers.",
    skills: ["ZK Proofs", "Cryptography", "STARKs", "SNARKs", "Circom"],
    rating: 5.0,
    completedJobs: 9,
    hourlyRate: 250,
    availability: "unavailable",
    verified: true,
    specialization: "Cryptography",
  },
  {
    id: "r6",
    name: "James Tran",
    handle: "@james_defi",
    avatar: "JT",
    bio: "DeFi protocol researcher. MEV expert. Previously at a top-tier audit firm.",
    skills: ["DeFi", "MEV", "Uniswap", "AAVE", "Compound"],
    rating: 4.6,
    completedJobs: 24,
    hourlyRate: 160,
    availability: "busy",
    verified: true,
    specialization: "DeFi",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

const StarRating = ({ rating }: { rating: number }) => (
  <span className={styles.stars} aria-label={`Rating: ${rating} out of 5`}>
    {"★".repeat(Math.floor(rating))}
    {rating % 1 >= 0.5 ? "½" : ""}
    <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
  </span>
);

const AvailabilityDot = ({ status }: { status: Researcher["availability"] }) => (
  <span
    className={`${styles.availDot} ${styles[`avail_${status}`]}`}
    aria-label={`Status: ${status}`}
    title={status.charAt(0).toUpperCase() + status.slice(1)}
  />
);

const ResearcherCard = ({ researcher }: { researcher: Researcher }) => (
  <article className={styles.card} aria-label={`Researcher: ${researcher.name}`}>
    <div className={styles.cardHeader}>
      <div className={styles.avatarWrapper}>
        <div className={styles.avatar}>{researcher.avatar}</div>
        <AvailabilityDot status={researcher.availability} />
      </div>
      <div className={styles.researcherMeta}>
        <div className={styles.nameRow}>
          <h3 className={styles.researcherName}>{researcher.name}</h3>
          {researcher.verified && (
            <span className={styles.verifiedBadge} title="Verified Researcher">
              ✓ Verified
            </span>
          )}
        </div>
        <span className={styles.handle}>{researcher.handle}</span>
        <span className={styles.specialization}>{researcher.specialization}</span>
      </div>
    </div>

    <p className={styles.bio}>{researcher.bio}</p>

    <div className={styles.skills} aria-label="Skills">
      {researcher.skills.slice(0, 4).map((skill) => (
        <span key={skill} className={styles.skillTag}>
          {skill}
        </span>
      ))}
      {researcher.skills.length > 4 && (
        <span className={styles.skillTagMore}>+{researcher.skills.length - 4}</span>
      )}
    </div>

    <div className={styles.cardFooter}>
      <div className={styles.cardStats}>
        <StarRating rating={researcher.rating} />
        <span className={styles.jobs}>{researcher.completedJobs} jobs</span>
      </div>
      <div className={styles.cardActions}>
        <span className={styles.rate}>${researcher.hourlyRate}/hr</span>
        <button
          className={`${styles.hireBtn} ${
            researcher.availability !== "available" ? styles.hireBtnDisabled : ""
          }`}
          disabled={researcher.availability !== "available"}
          aria-label={`Hire ${researcher.name}`}
        >
          {researcher.availability === "available" ? "Hire" : "Unavailable"}
        </button>
      </div>
    </div>
  </article>
);

// ─── Main Component ────────────────────────────────────────────────────────────

const ResearcherMarketplace = () => {
  const [search, setSearch] = useState("");
  const [availability, setAvailability] = useState<AvailabilityFilter>("all");
  const [sort, setSort] = useState<SortOption>("rating");

  const processed = MOCK_RESEARCHERS.filter((r) => {
    const matchesAvailability = availability === "all" || r.availability === availability;
    const matchesSearch =
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.specialization.toLowerCase().includes(search.toLowerCase()) ||
      r.skills.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    return matchesAvailability && matchesSearch;
  }).sort((a, b) => {
    switch (sort) {
      case "rating":      return b.rating - a.rating;
      case "jobs":        return b.completedJobs - a.completedJobs;
      case "rate_asc":    return a.hourlyRate - b.hourlyRate;
      case "rate_desc":   return b.hourlyRate - a.hourlyRate;
      default:            return 0;
    }
  });

  return (
    <Layout>
      <div className={styles.page}>
        {/* ── Header ── */}
        <header className={styles.pageHeader}>
          <div>
            <h1 className={styles.pageTitle}>Researcher Marketplace</h1>
            <p className={styles.pageSubtitle}>
              Discover and hire verified blockchain security researchers for your campaigns.
            </p>
          </div>
          <div className={styles.headerMeta}>
            <span className={styles.totalCount}>{processed.length} researchers found</span>
          </div>
        </header>

        {/* ── Filters ── */}
        <div className={styles.filtersBar}>
          <input
            type="search"
            placeholder="Search by name, skill, or specialization..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
            aria-label="Search researchers"
          />

          <div className={styles.filterGroup} role="group" aria-label="Filter by availability">
            {(["all", "available", "busy", "unavailable"] as AvailabilityFilter[]).map((a) => (
              <button
                key={a}
                className={`${styles.filterBtn} ${availability === a ? styles.filterBtnActive : ""}`}
                onClick={() => setAvailability(a)}
              >
                {a.charAt(0).toUpperCase() + a.slice(1)}
              </button>
            ))}
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className={styles.sortSelect}
            aria-label="Sort researchers"
          >
            <option value="rating">Top Rated</option>
            <option value="jobs">Most Jobs</option>
            <option value="rate_asc">Lowest Rate</option>
            <option value="rate_desc">Highest Rate</option>
          </select>
        </div>

        {/* ── Grid ── */}
        {processed.length === 0 ? (
          <div className={styles.emptyState}>
            <p>No researchers match your filters.</p>
            <button onClick={() => { setSearch(""); setAvailability("all"); }} className={styles.resetBtn}>
              Clear filters
            </button>
          </div>
        ) : (
          <div className={styles.grid} role="list" aria-label="Researcher listings">
            {processed.map((r) => (
              <ResearcherCard key={r.id} researcher={r} />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default ResearcherMarketplace;