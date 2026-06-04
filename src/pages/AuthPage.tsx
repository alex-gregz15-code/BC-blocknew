import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

type AuthMode = 'signup' | 'login';
type Role = 'researcher' | 'commissioner';

const AuthPage = () => {
  const navigate = useNavigate();
  const { role } = useParams<{ role: string }>();
  const [mode, setMode] = useState<AuthMode>('signup');

  const selectedRole: Role = role === 'commissioner' ? 'commissioner' : 'researcher';
  const roleLabel = selectedRole === 'commissioner' ? 'Commissioner' : 'Researcher';

  const copy = useMemo(() => {
    if (selectedRole === 'commissioner') {
      return {
        title: 'Verify your commissioner identity',
        body: 'Create or access your account before posting research briefs, funding milestones, and managing proposals.',
      };
    }

    return {
      title: 'Verify your researcher identity',
      body: 'Create or access your account before applying to briefs, submitting proposals, and entering the workspace.',
    };
  }, [selectedRole]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('commissionr-authenticated', 'true');
    localStorage.setItem('commissionr-role', selectedRole);
    navigate(`/workspace/${selectedRole}`);
  };

  return (
    <main className="auth-page">
      <Link className="auth-brand" to="/">
        <span className="nav-dot" />
        Commission<span>R</span>
      </Link>

      <section className="auth-panel">
        <div className="section-label">{roleLabel} Access</div>
        <h1 className="section-title">{copy.title}</h1>
        <p className="section-desc">{copy.body}</p>

        <div className="auth-tabs" role="tablist" aria-label="Authentication mode">
          <button
            type="button"
            className={mode === 'signup' ? 'active' : ''}
            onClick={() => setMode('signup')}
          >
            Sign up
          </button>
          <button
            type="button"
            className={mode === 'login' ? 'active' : ''}
            onClick={() => setMode('login')}
          >
            Log in
          </button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <label>
              Name
              <input type="text" name="name" placeholder="Your full name" required />
            </label>
          )}
          <label>
            Email
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
          <label>
            Password
            <input type="password" name="password" placeholder="At least 8 characters" minLength={8} required />
          </label>

          <button className="hero-btn primary" type="submit" style={{ opacity: 1, animation: 'none' }}>
            {mode === 'signup' ? 'Create account' : 'Log in'} as {roleLabel}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </section>
    </main>
  );
};

export default AuthPage;
