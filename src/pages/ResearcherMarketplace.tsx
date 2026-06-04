import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Briefcase, ArrowRight, Layers } from 'lucide-react';

interface ProjectCard {
  id: string;
  title: string;
  focus: string;
  budget: string;
  duration: string;
  location: string;
  category: string;
  difficulty: string;
  summary: string;
}

const OPPORTUNITIES: ProjectCard[] = [
  {
    id: 'op1',
    title: 'LLM Inference Bottlenecks',
    focus: 'Biology + AI',
    budget: '$90,000',
    duration: '6 Months',
    location: 'Remote',
    category: 'AI Systems',
    difficulty: 'Advanced',
    summary: 'Optimize large model inference across genomics pipelines with low-latency constraints.',
  },
  {
    id: 'op2',
    title: 'Solid-State Battery Thermal Degradation',
    focus: 'Energy Systems',
    budget: '$145,000',
    duration: '12 Months',
    location: 'Hybrid',
    category: 'Materials Science',
    difficulty: 'Expert',
    summary: 'Characterize long-term thermal stresses in solid-state battery cells under rapid cycling.',
  },
  {
    id: 'op3',
    title: 'Decentralized Zero-Knowledge Medical Registry',
    focus: 'Privacy + Security',
    budget: '$78,000',
    duration: '4 Months',
    location: 'Remote',
    category: 'Cryptography',
    difficulty: 'Intermediate',
    summary: 'Design an interoperable zk-proof architecture for cross-border medical records.',
  },
  {
    id: 'op4',
    title: 'Synthetic Biology Agent Profiling',
    focus: 'Lab Automation',
    budget: '$110,000',
    duration: '8 Months',
    location: 'On-site',
    category: 'Bioengineering',
    difficulty: 'Expert',
    summary: 'Develop reproducible assay protocols for engineered microbial performance screening.',
  },
];

const STATS = [
  { label: 'Active Funding', value: '$2.4M' },
  { label: 'Open Commissions', value: '128' },
  { label: 'Institutions', value: '42' },
  { label: 'Researchers Online', value: '94' },
];

const CATEGORIES = ['AI Systems', 'Materials Science', 'Cryptography', 'Bioengineering'];
const DIFFICULTY = ['Intermediate', 'Advanced', 'Expert'];
const BUDGETS = ['<$100k', '$100k-$150k', '$150k+'];

function ResearcherMarketplace() {
  const navigate = useNavigate();
  const [selectedOpportunity, setSelectedOpportunity] = useState<ProjectCard>(OPPORTUNITIES[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [budget, setBudget] = useState('');

  const filtered = useMemo(() => {
    return OPPORTUNITIES.filter((opportunity) => {
      const searchMatch = [opportunity.title, opportunity.focus, opportunity.category, opportunity.summary]
        .join(' ')
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const categoryMatch = category ? opportunity.category === category : true;
      const difficultyMatch = difficulty ? opportunity.difficulty === difficulty : true;
      const budgetMatch = budget
        ? budget === '<$100k'
          ? opportunity.budget.startsWith('$7')
          : budget === '$100k-$150k'
          ? opportunity.budget.startsWith('$1')
          : true
        : true;
      return searchMatch && categoryMatch && difficultyMatch && budgetMatch;
    });
  }, [searchTerm, category, difficulty, budget]);

  return (
    <div className="app" style={{ padding: '2rem 2rem 4rem' }}>
      <section className="page-hero marketplace-hero">
        <div>
          <div className="section-label">Research Marketplace</div>
          <h1 className="section-title">Research Marketplace</h1>
          <p className="section-desc" style={{ maxWidth: '600px' }}>
            Browse active research commissions from institutions, startups, and organizations seeking expert contributors.
          </p>
          <div className="hero-buttons">
            <button className="hero-btn primary" onClick={() => navigate('/workspace/researcher')}>
              Select a Project
n              <ArrowRight size={16} />
            </button>
            <button className="hero-btn secondary" onClick={() => navigate('/workspace/researcher')}>
              View My Workspace
            </button>
          </div>
        </div>
        <div className="hero-aside">
          <div className="hero-card">
            <div className="hero-card-title">Why this marketplace?</div>
            <p>Curated opportunities with streamlined manifests, funding clarity, and matching support for expert collaborators.</p>
            <div className="hero-card-pill"><Layers size={14} /> Verified research calls</div>
          </div>
        </div>
      </section>

      <section className="stats-row">
        {STATS.map((stat) => (
          <div key={stat.label} className="stats-card">
            <span className="stat-num">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="section-block">
        <div className="section-label">Featured Opportunities</div>
        <div className="cards-grid">
          {OPPORTUNITIES.slice(0, 3).map((opportunity) => (
            <article key={opportunity.id} className="marketplace-card">
              <div className="card-top">
                <span className="card-title">{opportunity.title}</span>
                <span className="card-chip">{opportunity.focus}</span>
              </div>
              <p>{opportunity.summary}</p>
              <div className="card-meta">
                <span>{opportunity.budget}</span>
                <span>{opportunity.duration}</span>
                <span>{opportunity.location}</span>
              </div>
              <button className="hero-btn secondary" onClick={() => setSelectedOpportunity(opportunity)}>
                View Manifest
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="workspace-panel">
          <div>
            <div className="section-label">Repository View</div>
            <h2 className="section-title">Active Research Calls</h2>
            <div className="filter-row">
              <label className="filter-group">
                <Search size={14} />
                <input
                  placeholder="Search calls"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </label>
              <label className="filter-group">
                <span>Category</span>
                <select value={category} onChange={(event) => setCategory(event.target.value)}>
                  <option value="">All</option>
                  {CATEGORIES.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="filter-group">
                <span>Difficulty</span>
                <select value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
                  <option value="">All</option>
                  {DIFFICULTY.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label className="filter-group">
                <span>Budget</span>
                <select value={budget} onChange={(event) => setBudget(event.target.value)}>
                  <option value="">Any</option>
                  {BUDGETS.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
            </div>
            <div className="table-scroll">
              <table className="table">
                <thead>
                  <tr>
                    <th>Opportunity</th>
                    <th>Category</th>
                    <th>Budget</th>
                    <th>Timeline</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((opportunity) => (
                    <tr
                      key={opportunity.id}
                      onClick={() => setSelectedOpportunity(opportunity)}
                      className={selectedOpportunity.id === opportunity.id ? 'rowSelected' : ''}
                    >
                      <td>{opportunity.title}</td>
                      <td>{opportunity.category}</td>
                      <td>{opportunity.budget}</td>
                      <td>{opportunity.duration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <aside className="manifest-card">
            <div className="manifest-header">
              <Briefcase size={18} />
              <h3>Research Manifest</h3>
            </div>
            <h4>{selectedOpportunity.title}</h4>
            <p>{selectedOpportunity.summary}</p>
            <ul>
              <li><strong>Project Summary:</strong> {selectedOpportunity.focus} research with clear system-level goals.</li>
              <li><strong>Expected Deliverables:</strong> Proposal document, analysis plan, progress checkpoints, final report.</li>
              <li><strong>Required Expertise:</strong> {selectedOpportunity.difficulty} research in {selectedOpportunity.category}.</li>
              <li><strong>Funding Schedule:</strong> Milestone-based disbursements.</li>
              <li><strong>Timeline:</strong> {selectedOpportunity.duration}</li>
              <li><strong>Proposal Deadline:</strong> 14 days from assignment.</li>
            </ul>
            <button className="hero-btn primary" onClick={() => navigate('/workspace/researcher')}>
              Submit Proposal
            </button>
          </aside>
        </div>
      </section>
    </div>
  );
}

export default ResearcherMarketplace;
