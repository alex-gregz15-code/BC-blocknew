import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

import Layout from '../components/layouts/Layout';

import {
  Workspace,
  ErrorPage,
  NotFound,
  Landing,
  AuthPage,
  ResearcherMarketplace,
  CommissionerControlCenter,
} from './LazyCodeComponents';
import { ProtectedRoute } from './ProtectedRoute';

const Loading = () => <div>Loading...</div>;

const HomePage = () => <Landing />;

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} errorElement={<ErrorPage />} />
        <Route path="/auth/:role" element={<AuthPage />} errorElement={<ErrorPage />} />
        <Route element={<Layout />} errorElement={<ErrorPage />}>
          <Route path="researcher" element={<ResearcherMarketplace />} />
          <Route path="commissioner" element={<CommissionerControlCenter />} />
          <Route
            path="workspace/:role"
            element={
              <ProtectedRoute>
                <Workspace />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
