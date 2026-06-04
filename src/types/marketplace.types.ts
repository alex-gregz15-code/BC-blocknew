/**
 * types/marketplace.types.ts
 * Types for the ResearcherMarketplace page.
 */

export interface Researcher {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  bio: string;
  skills: string[];
  rating: number;
  completedJobs: number;
  hourlyRate: number;
  availability: "available" | "busy" | "unavailable";
  verified: boolean;
  specialization: string;
}

export interface Campaign {
  id: string;
  title: string;
  status: "active" | "pending" | "completed" | "draft";
  budget: number;
  spent: number;
  applicants: number;
  deadline: string;
  category: string;
}

export type SortOption = "rating" | "jobs" | "rate_asc" | "rate_desc";
export type AvailabilityFilter = "all" | Researcher["availability"];
export type FilterStatus = "all" | Campaign["status"];