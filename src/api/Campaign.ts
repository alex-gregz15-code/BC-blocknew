// BLOCKNEW/src/api/campaigns.ts
//
// All campaign-related API calls. Import and use these in your components/hooks.

import { api } from './Client';

// ── Types (mirror your Rust structs) ─────────────────────────────────────────

export interface Campaign {
  id: string;
  title: string;
  status: 'active' | 'pending' | 'completed' | 'draft';
  budget: number;
  spent?: number;
  applicants?: number;
  deadline?: string;
  category: string;
}

export interface CreateCampaignPayload {
  title: string;
  budget: number;
  category: string;
}

// ── API calls ─────────────────────────────────────────────────────────────────

export const campaignsApi = {
  /** GET /api/campaigns */
  getAll: () =>
    api.get<Campaign[]>('/api/campaigns'),

  /** GET /api/campaigns/:id */
  getById: (id: string) =>
    api.get<Campaign>(`/api/campaigns/${id}`),

  /** POST /api/campaigns */
  create: (payload: CreateCampaignPayload) =>
    api.post<Campaign>('/api/campaigns', payload),

  /** DELETE /api/campaigns/:id */
  remove: (id: string) =>
    api.delete<void>(`/api/campaigns/${id}`),
};
