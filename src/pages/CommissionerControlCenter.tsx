import { useState } from "react";
import { Layout } from "../components/layouts/Layout";
import { useCampaigns } from "../hooks/useCampaigns";
import styles from "../styles/CommissionerControlCenter.module.css";

// ─── Types ────────────────────────────────────────────────────────────────────

interface CampaignView {
  id: string;
  title: string;
  status: "active" | "pending" | "completed" | "draft";
  budget: number;
  spent: number;
  applicants: number;
  deadline: string;
  category: string;
}

interface StatCard {
  label: string;
  value: string | number;
  delta?: string;
  positive?: boolean;
}

// ─── Mock Data ─────────────────────────────────────────────────────────────────

const STATS: StatCard[] = [
  { label: "Active Campaigns", value: 4, delta: "+2 this month", positive: true },
  { label: "Total Budget Allocated", value: "$33,500", delta: "+$8k vs last quarter", positive: true },
  { label: "Researchers Engaged", value: 23, delta: "+5 new", positive: true },
  { label: "Avg. Resolution Time", value: "12 days", delta: "-3 days", positive: true },
];

type FilterStatus = "all" | CampaignView["status"];

// ─── Sub-components ────────────────────────────────────────────────────────────

const StatusBadge = ({ status }: { status: CampaignView["status"] }) => (
  <span className={`${styles.badge} ${styles[`badge_${status}`]}`}>
    {status.charAt(0).toUpperCase() + status.slice(1)}
  </span>
);

const BudgetBar = ({ spent, budget }: { spent: number; budget: number }) => {
  const pct = Math.min(100, Math.round((spent / budget) * 100));
  return (
    <div className={styles.budgetBar}>
      <div className={styles.budgetBarFill} style={{ width: `${pct}%` }} />
      <span className={styles.budgetBarLabel}>{pct}% used</span>
    </div>
  );
};

// ─── Main Component ────────────────────────────────────────────────────────────

const CommissionerControlCenter = () => {
  const { campaigns, loading, error, refetch } = useCampaigns();
  const [filter, setFilter] = useState<FilterStatus>("all");
  const [search, setSearch] = useState("");

  const campaignRows: CampaignView[] = campaigns.map((campaign) => ({
    id: campaign.id,
    title: campaign.title,
    status: campaign.status,
    budget: campaign.budget,
    spent: campaign.spent ?? 0,
    applicants: campaign.applicants ?? 0,
    deadline: campaign.deadline ?? "",
    category: campaign.category,
  }));

  const filtered = campaignRows.filter((c) => {
    const matchesFilter = filter === "all" || c.status === filter;
    const matchesSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <Layout>
      <div className={styles.page}>
        {/* ── Header ── */}
        <header className={styles.pageHeader}>
          <div>
            <h1 className={styles.pageTitle}>Commissioner Control Center</h1>
            <p className={styles.pageSubtitle}>
              Manage your research campaigns, track budgets, and review applicants.
            </p>
          </div>
          <button className={styles.btnPrimary}>+ New Campaign</button>
        </header>

        {/* ── Stats Row ── */}
        <section className={styles.statsGrid} aria-label="Overview statistics">
          {STATS.map((stat) => (
            <div key={stat.label} className={styles.statCard}>
              <span className={styles.statLabel}>{stat.label}</span>
              <span className={styles.statValue}>{stat.value}</span>
              {stat.delta && (
                <span
                  className={`${styles.statDelta} ${
                    stat.positive ? styles.positive : styles.negative
                  }`}
                >
                  {stat.positive ? "▲" : "▼"} {stat.delta}
                </span>
              )}
            </div>
          ))}
        </section>

        {/* ── Campaigns Table ── */}
        <section className={styles.tableSection}>
          <div className={styles.tableControls}>
            <input
              type="search"
              placeholder="Search campaigns..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
              aria-label="Search campaigns"
            />
            <div className={styles.filterGroup} role="group" aria-label="Filter by status">
              {(["all", "active", "pending", "completed", "draft"] as FilterStatus[]).map(
                (f) => (
                  <button
                    key={f}
                    className={`${styles.filterBtn} ${filter === f ? styles.filterBtnActive : ""}`}
                    onClick={() => setFilter(f)}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                )
              )}
            </div>
          </div>

          {loading ? (
            <div className={styles.emptyState}>
              <p>Loading campaigns...</p>
            </div>
          ) : error ? (
            <div className={styles.emptyState}>
              <p>{error}</p>
              <button onClick={refetch} className={styles.btnSecondary}>
                Retry
              </button>
            </div>
          ) : filtered.length === 0 ? (
            <div className={styles.emptyState}>
              <p>No campaigns match your search.</p>
            </div>
          ) : (
            <div className={styles.tableWrapper} role="table" aria-label="Campaigns list">
              <div className={styles.tableHead} role="row">
                <span role="columnheader">Campaign</span>
                <span role="columnheader">Category</span>
                <span role="columnheader">Status</span>
                <span role="columnheader">Budget</span>
                <span role="columnheader">Applicants</span>
                <span role="columnheader">Deadline</span>
                <span role="columnheader">Actions</span>
              </div>
              {filtered.map((campaign) => (
                <div key={campaign.id} className={styles.tableRow} role="row">
                  <div className={styles.campaignTitle} role="cell">
                    <span>{campaign.title}</span>
                  </div>
                  <span className={styles.category} role="cell">
                    {campaign.category}
                  </span>
                  <span role="cell">
                    <StatusBadge status={campaign.status} />
                  </span>
                  <div className={styles.budgetCell} role="cell">
                    <span>
                      ${campaign.spent.toLocaleString()} / ${campaign.budget.toLocaleString()}
                    </span>
                    <BudgetBar spent={campaign.spent} budget={campaign.budget} />
                  </div>
                  <span className={styles.centered} role="cell">
                    {campaign.applicants}
                  </span>
                  <span role="cell">
                    {campaign.deadline
                      ? new Date(campaign.deadline).toLocaleDateString()
                      : "No deadline"}
                  </span>
                  <div className={styles.actions} role="cell">
                    <button className={styles.btnSecondary} aria-label={`View ${campaign.title}`}>
                      View
                    </button>
                    <button className={styles.btnGhost} aria-label={`Edit ${campaign.title}`}>
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default CommissionerControlCenter;
