import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const isAuthenticated = true; // replace with your actual auth logic

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};
