/**
 * types/landing.types.ts
 * Types for the Landing page section components.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface HowStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  quote: string;
  role: string;
}

export interface MarqueeItem {
  label: string;
}