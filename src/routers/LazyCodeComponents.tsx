import { lazy } from 'react';

export const Hero = lazy(() => import('../components/hook/Hero').then((m) => ({ default: m.Hero })));
export const Workspace = lazy(() => import('../components/Workspace'));
export const DualAudience = lazy(() => import('../components/DualAudience').then((m) => ({ default: m.DualAudience })));
export const ErrorPage = lazy(() => import('../components/errorhandling/ErrorPage'));
export const NotFound = lazy(() => import('../components/errorhandling/NotFound'));
export const Landing = lazy(() => import('../pages/Landing'));
export const ResearcherMarketplace = lazy(() => import('../pages/ResearcherMarketplace'));
export const CommissionerControlCenter = lazy(() => import('../pages/CommissionerControlCenter'));

