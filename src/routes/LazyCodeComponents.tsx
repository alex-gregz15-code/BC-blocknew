import { lazy } from 'react';

export const Hero = lazy(() => import('../hooks/useHero'));
export const Workspace = lazy(() => import('../components/Workspace'));
export const DualAudience = lazy(() => import('../components/DualAudience'));
export const ErrorPage = lazy(() => import('../components/errorhandling/ErrorPage'));
export const NotFound = lazy(() => import('../components/errorhandling/NotFound'));
export const LandingCTA = lazy(() => import('../components/landing/LandingCTA'));
export const LandingFeatures = lazy(() => import('../components/landing/LandingFeatures'));
export const LandingHow = lazy(() => import('../components/landing/LandingHow'));
export const LandingMarquee = lazy(() => import('../components/landing/LandingMarquee'));
export const LandingNav = lazy(() => import('../components/landing/LandingNav'));
export const LandingStats = lazy(() => import('../components/landing/LandingStats'));
export const LandingTestimonials = lazy(() => import('../components/landing/LandingTestimonials'));
export const Landing = lazy(() => import('../pages/Landing'));
export const AuthPage = lazy(() => import('../pages/AuthPage'));
export const ResearcherMarketplace = lazy(() => import('../pages/ResearcherMarketplace'));
export const CommissionerControlCenter = lazy(() => import('../pages/CommissionerControlCenter'));
