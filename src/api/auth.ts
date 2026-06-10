// BLOCKNEW/src/api/auth.ts

import { api } from './Client';

// ── Types — mirror Rust structs exactly ──────────────────────────────────────

export interface RegisterPayload {
  email: string;
  password: string;
  role: 'researcher' | 'commissioner';
  full_name?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface UserPayload {
  id: string;
  email: string;
  role: 'researcher' | 'commissioner';
  full_name?: string;
}

export interface AuthResponse {
  access_token: string;
  message: string;
  user: UserPayload;
}

// ── API calls ─────────────────────────────────────────────────────────────────

export const authApi = {
  /** POST /api/auth/register — saves new user to Supabase via Rust */
  register: (payload: RegisterPayload) =>
    api.post<AuthResponse>('/api/auth/register', payload),

  /** POST /api/auth/login */
  login: (payload: LoginPayload) =>
    api.post<AuthResponse>('/api/auth/login', payload),
};