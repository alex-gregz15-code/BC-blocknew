// src/components/Workspace.tsx
import { useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Briefcase, ArrowLeft, Calendar, DollarSign, ShieldCheck, Search } from 'lucide-react';
import styles from '../styles/Workspace.module.css';

interface ResearchProject {
  id: string;
  title: string;
  budget: string;
  status: string;
  timeline: string;
  institution?: string;
  summary: string;
  category: string;
  difficulty: string;
}

const MOCK_PROJECTS: ResearchProject[] = [
  {
    id: 'p1',
    title: 'LLM Inference Bottlenecks in Biology',
    budget: '$90,000',
    status: 'Open to Apply',
    timeline: '6 Months',
    institution: 'Pending Match',
    summary: 'Seeking optimization protocols for processing genomic sequence window lookups within attention heads without suffering dramatic context degradation.',
    category: 'AI Systems',
    difficulty: 'Advanced',
  },
  {
    id: 'p2',
    title: 'Solid-State Battery Thermal Degradation',
    budget: '$145,000',
    status: 'Active Research',
    timeline: '12 Months',
    institution: 'Tokyo Advanced Lab',
    summary: 'Analyzing structural grid decay patterns across lithium metal interface lines under rapid voltage shifts.',
    category: 'Materials Science',
    difficulty: 'Expert',
  },
  {
    id: 'p3',
    title: 'Decentralized Zero-Knowledge Medical Registry',
    budget: '$78,000',
    status: 'Reviewing Proposals',
    timeline: '4 Months',
    institution: 'Stanford BioHub Affiliate',
    summary: 'Verifying cross-border schema compatibility models under deep zero-knowledge prover bounds.',
    category: 'Cryptography',
    difficulty: 'Intermediate',
  }
];

export default function Workspace() {
  const { role } = useParams<{ role: string }>();
  const isCommissioner = role === 'commissioner';
  
  const [selectedProject, setSelectedProject] = useState<ResearchProject>(MOCK_PROJECTS[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [budgetFilter, setBudgetFilter] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState('');

  const filteredProjects = useMemo(() => {
    return MOCK_PROJECTS.filter((project) => {
      const searchMatch = [project.title, project.institution, project.summary]
        .join(' ')
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      const categoryMatch = categoryFilter ? project.category === categoryFilter : true;
      const budgetMatch = budgetFilter
        ? budgetFilter === '<$100k'
          ? parseInt(project.budget.replace(/[$,]/g, ''), 10) < 100000
          : budgetFilter === '$100k-$150k'
          ? parseInt(project.budget.replace(/[$,]/g, ''), 10) <= 150000
          : parseInt(project.budget.replace(/[$,]/g, ''), 10) > 150000
        : true;
      const difficultyMatch = difficultyFilter ? project.difficulty === difficultyFilter : true;
      return searchMatch && categoryMatch && budgetMatch && difficultyMatch;
    });
  }, [searchTerm, categoryFilter, budgetFilter, difficultyFilter]);

  return (
    <div className={styles.wrapper}>
      <div style={{ marginBottom: '1.5rem' }}>
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
          <ArrowLeft size={14} /> Back to Landing Page
        </Link>
      </div>

      <div className={styles.header}>
        <span className={styles.roleBadge}>{role} Control Center</span>
        <h2>{isCommissioner ? "Manage Assigned Commissions" : "Explore Academic Callouts"}</h2>
      </div>

      <div className={styles.splitView}>
        {/* Left Column: Interactive Table */}
        <div className={styles.panelCard}>
          <div style={{ marginBottom: '1rem' }}>
            <h3>Active Research Calls</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Search, filter, and select the opportunity you want to build a proposal for.</p>
          </div>
          <div className="filter-row" style={{ marginBottom: '1rem' }}>
            <label className="filter-group">
              <Search size={14} />
              <input
                placeholder="Search opportunities"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </label>
            <label className="filter-group">
              <span>Category</span>
              <select value={categoryFilter} onChange={(event) => setCategoryFilter(event.target.value)}>
                <option value="">All Categories</option>
                <option value="AI Systems">AI Systems</option>
                <option value="Materials Science">Materials Science</option>
                <option value="Cryptography">Cryptography</option>
              </select>
            </label>
            <label className="filter-group">
              <span>Budget</span>
              <select value={budgetFilter} onChange={(event) => setBudgetFilter(event.target.value)}>
                <option value="">All Budgets</option>
                <option value="<$100k">&lt;$100k</option>
                <option value="$100k-$150k">$100k-$150k</option>
                <option value="$150k+">$150k+</option>
              </select>
            </label>
            <label className="filter-group">
              <span>Difficulty</span>
              <select value={difficultyFilter} onChange={(event) => setDifficultyFilter(event.target.value)}>
                <option value="">Any Difficulty</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </label>
          </div>
          <div className="table-scroll">
            <table className={styles.table}>
            <thead>
              <tr>
                <th>Project Specification</th>
                <th>Pool</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((project) => (
                <tr 
                  key={project.id} 
                  onClick={() => setSelectedProject(project)}
                  className={`${styles.rowInteractive} ${selectedProject.id === project.id ? styles.rowSelected : ''}`}
                >
                  <td>
                    <strong>{project.title}</strong>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                      {project.institution}
                    </div>
                  </td>
                  <td>{project.budget}</td>
                  <td>
                    <span className={project.status === 'Open to Apply' ? styles.statusBadgeActive : styles.statusBadgePending}>
                      {project.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

        {/* Right Column: Dynamic Inspector Card */}
        <div className={styles.inspectorColumn}>
          <div className={styles.panelCard} style={{ borderTop: '4px solid var(--primary)' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '1rem' }}>
              <Briefcase size={18} color="var(--primary)" />
              <h4>Research Manifest</h4>
            </div>
            
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>{selectedProject.title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              {selectedProject.summary}
            </p>

            <div className={styles.metaGrid}>
              <div className={styles.metaItem}>
                <DollarSign size={14} />
                <span><strong>Budget:</strong> {selectedProject.budget}</span>
              </div>
              <div className={styles.metaItem}>
                <Calendar size={14} />
                <span><strong>Timeline:</strong> {selectedProject.timeline}</span>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button className={styles.actionBtn}>
                {isCommissioner ? "Audit Milestone Escrow" : "Submit Proposal"}
              </button>
            </div>
          </div>

          <div className={styles.panelCard} style={{ background: '#f8fafc', borderStyle: 'dashed' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', marginBottom: '0.5rem' }}>
              <ShieldCheck size={16} color="var(--text-muted)" />
              <h5 style={{ fontSize: '0.85rem' }}>Compliance Protocol</h5>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>
              Cryptographic tokens secure all laboratory telemetry uploads matching this sequence index.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}