import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error('Route error:', error);

  if (isRouteErrorResponse(error)) {
    return (
      <div style={{ padding: 20 }}>
        <h1>{error.status} {error.statusText}</h1>
        <p>{error.data || 'The requested resource could not be found.'}</p>
        <p><Link to="/">Go home</Link></p>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Unexpected Application Error</h1>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{String(error)}</pre>
      <p><Link to="/">Go home</Link></p>
    </div>
  );
}
