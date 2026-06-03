import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './components/layouts/NavBar';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;