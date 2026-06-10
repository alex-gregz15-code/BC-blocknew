// BLOCKNEW/src/hooks/useCampaigns.ts
//
// Reusable hook — handles loading, error, and data state for campaigns.
// Use this in CommissionerControlCenter instead of mock data.

import { useState, useEffect, useCallback } from 'react';
import { campaignsApi, type Campaign, type CreateCampaignPayload } from '../api/Campaign';

interface UseCampaignsReturn {
  campaigns: Campaign[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
  createCampaign: (payload: CreateCampaignPayload) => Promise<void>;
  deleteCampaign: (id: string) => Promise<void>;
}

export const useCampaigns = (): UseCampaignsReturn => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading]     = useState(true);
  const [error, setError]         = useState<string | null>(null);

  const fetchCampaigns = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await campaignsApi.getAll();
      setCampaigns(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load campaigns');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCampaigns();
  }, [fetchCampaigns]);

  const createCampaign = async (payload: CreateCampaignPayload) => {
    const newCampaign = await campaignsApi.create(payload);
    setCampaigns((prev) => [...prev, newCampaign]);
  };

  const deleteCampaign = async (id: string) => {
    await campaignsApi.remove(id);
    setCampaigns((prev) => prev.filter((c) => c.id !== id));
  };

  return {
    campaigns,
    loading,
    error,
    refetch: fetchCampaigns,
    createCampaign,
    deleteCampaign,
  };
};
