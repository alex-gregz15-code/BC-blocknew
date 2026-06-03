// Layout.tsx
import { Outlet } from 'react-router-dom';
import { Navbar } from './NavBar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;