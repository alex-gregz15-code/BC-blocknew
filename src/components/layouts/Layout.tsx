// Layout.tsx
import type { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './NavBar';

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <main>
        {children ?? <Outlet />}
      </main>
    </>
  );
};

export default Layout;
