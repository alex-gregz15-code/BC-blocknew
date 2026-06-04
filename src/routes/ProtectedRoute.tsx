import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { role } = useParams<{ role: string }>();
  const isAuthenticated = localStorage.getItem('commissionr-authenticated') === 'true';

  if (!isAuthenticated) {
    return <Navigate to={`/auth/${role ?? 'researcher'}`} replace />;
  }

  return <>{children}</>;
};
