import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';

import Layout from '../components/layouts/Layout';

import {
  Workspace,
  ErrorPage,
  NotFound,
  Landing,
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
        <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
          <Route index element={<HomePage />} />
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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
