// BLOCKNEW/src/hooks/useAuth.ts

import { useState } from 'react';
import { authApi, type RegisterPayload, type LoginPayload, type UserPayload } from '../api/auth';

interface UseAuthReturn {
  user: UserPayload | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  register: (payload: RegisterPayload) => Promise<void>;
  login: (payload: LoginPayload) => Promise<void>;
  logout: () => void;
}

export const useAuth = (): UseAuthReturn => {
  const [user, setUser]       = useState<UserPayload | null>(null);
  const [token, setToken]     = useState<string | null>(
    localStorage.getItem('token')   // persist across page refreshes
  );
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  const register = async (payload: RegisterPayload) => {
    setLoading(true);
    setError(null);
    try {
      const res = await authApi.register(payload);
      setToken(res.access_token);
      setUser(res.user);
      localStorage.setItem('token', res.access_token);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      throw err; // re-throw so the form can handle it too
    } finally {
      setLoading(false);
    }
  };

  const login = async (payload: LoginPayload) => {
    setLoading(true);
    setError(null);
    try {
      const res = await authApi.login(payload);
      setToken(res.access_token);
      setUser(res.user);
      localStorage.setItem('token', res.access_token);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
  };

  return { user, token, loading, error, register, login, logout };
};