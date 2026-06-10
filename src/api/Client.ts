// BLOCKNEW/src/api/client.ts
//
// Central HTTP client. All API calls go through here.
// Set VITE_API_URL in .env to point to your backend.
// During dev, leave VITE_API_URL empty — vite.config.ts proxy handles it.

const BASE_URL = import.meta.env.VITE_API_URL ?? '';

// ── Types ─────────────────────────────────────────────────────────────────────

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export class ApiError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

// ── Core fetcher ──────────────────────────────────────────────────────────────

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new ApiError(res.status, body?.error ?? `HTTP ${res.status}`);
  }

  // 204 No Content — return undefined
  if (res.status === 204) return undefined as T;

  const json: ApiResponse<T> | T = await res.json();

  // Handle both wrapped { success, data } and plain JSON responses
  if (
    typeof json === 'object' &&
    json !== null &&
    'success' in json
  ) {
    const wrapped = json as ApiResponse<T>;
    if (!wrapped.success || wrapped.data === undefined) {
      throw new ApiError(res.status, wrapped.error ?? 'Unknown error');
    }
    return wrapped.data;
  }

  return json as T;
}

// ── Convenience methods ───────────────────────────────────────────────────────

export const api = {
  get: <T>(path: string) =>
    request<T>(path, { method: 'GET' }),

  post: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(body) }),

  put: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'PUT', body: JSON.stringify(body) }),

  delete: <T>(path: string) =>
    request<T>(path, { method: 'DELETE' }),
};