import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Users, FileText, ShieldCheck, Percent } from 'lucide-react';

interface BriefItem {
  id: string;
  title: string;
  budget: string;
  progress: string;
  status: string;
  timeline: string;
}

const QUICK_ACTIONS = [
  { title: 'Create Brief', icon: FileText },
  { title: 'Active Jobs', icon: Briefcase },
  { title: 'Researchers', icon: Users },
  { title: 'Escrow Pool', icon: ShieldCheck },
];

const WIZARD_STEPS = [
  'Research Topic',
  'Objectives',
  'Budget Allocation',
  'Timeline',
  'Required Expertise',
  'Publish Commission',
];

const SAMPLE_BRIEFS: BriefItem[] = [
  { id: 'b1', title: 'Biology LLM Protocol Evaluation', budget: '$90k', progress: '14 Open', status: 'Reviewing', timeline: '6 Months' },
  { id: 'b2', title: 'Battery Material Degradation Study', budget: '$145k', progress: '7 Review', status: 'Reviewing', timeline: '12 Months' },
  { id: 'b3', title: 'Secure Medical Data Mesh', budget: '$120k', progress: '9 Active', status: 'Live', timeline: '8 Months' },
];

function CommissionerControlCenter() {
  const navigate = useNavigate();
  const [published, setPublished] = useState(false);
  const [selectedBrief, setSelectedBrief] = useState<BriefItem>(SAMPLE_BRIEFS[0]);

  return (
    <div className="app" style={{ padding: '2rem 2rem 4rem' }}>
      <section className="page-hero commissioner-hero">
        <div>
          <div className="section-label">Research Control Center</div>
          <h1 className="section-title">Commission Research at Scale</h1>
          <p className="section-desc" style={{ maxWidth: '600px' }}>
            Create, fund, and monitor academic or industry research initiatives with a single, accountable command center.
          </p>
          <div className="hero-buttons">
            <button className="hero-btn primary" onClick={() => setPublished(true)}>
              Start a New Brief
            </button>
            <button className="hero-btn secondary" onClick={() => navigate('/workspace/commissioner')}>
              Open Dashboard
            </button>
          </div>
        </div>
        <div className="hero-aside">
          <div className="hero-card">
            <div className="hero-card-title">Quick actions</div>
            <p>Fast access to commissioning workflows, research talent, and escrow oversight.</p>
            <div className="hero-card-pill"><Percent size={14} /> Milestone budget model</div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-label">Quick Actions</div>
        <div className="quick-actions-grid">
          {QUICK_ACTIONS.map((action) => {
            const Icon = action.icon;
            return (
              <button key={action.title} className="action-card" type="button">
                <Icon size={20} />
                <span>{action.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="section-block">
        <div className="section-label">Create Brief Wizard</div>
        <div className="wizard-grid">
          {WIZARD_STEPS.map((step, index) => (
            <div key={step} className={published ? 'wizard-step published' : 'wizard-step'}>
              <span className="wizard-step-number">{index + 1}</span>
              <strong>{step}</strong>
              <p>Capture the essential details for this commissioning workflow.</p>
            </div>
          ))}
        </div>
        {!published ? (
          <button className="hero-btn primary" onClick={() => setPublished(true)}>
            Publish Commission
          </button>
        ) : (
          <div className="published-banner">
            <strong>Brief published.</strong> Your commission is live and ready for proposals.
          </div>
        )}
      </section>

      {published && (
        <section className="section-block">
          <div className="section-title">Research Briefs</div>
          <div className="workspace-panel">
            <div>
              <div className="table-scroll">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Budget</th>
                      <th>Status</th>
                      <th>Timeline</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SAMPLE_BRIEFS.map((brief) => (
                      <tr
                        key={brief.id}
                        onClick={() => setSelectedBrief(brief)}
                        className={selectedBrief.id === brief.id ? 'rowSelected' : ''}
                      >
                        <td>{brief.title}</td>
                        <td>{brief.budget}</td>
                        <td>{brief.status}</td>
                        <td>{brief.timeline}</td>
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
              <h4>{selectedBrief.title}</h4>
              <p>Structured plan for funding, delivery, and review with the research team you select.</p>
              <ul>
                <li><strong>Project Summary:</strong> A deep investigation into advanced research systems.</li>
                <li><strong>Expected Deliverables:</strong> Draft proposal, milestone plan, final report.</li>
                <li><strong>Required Expertise:</strong> Cross-disciplinary research teams with technical depth.</li>
                <li><strong>Funding Schedule:</strong> Milestone-based escrow disbursements.</li>
                <li><strong>Timeline:</strong> {selectedBrief.timeline}</li>
                <li><strong>Proposal Deadline:</strong> 10 days from publication.</li>
              </ul>
              <button className="hero-btn secondary" onClick={() => navigate('/workspace/commissioner')}>
                Review Dashboard
              </button>
            </aside>
          </div>
        </section>
      )}
    </div>
  );
}

export default CommissionerControlCenter;
