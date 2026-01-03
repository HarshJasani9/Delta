import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      {/* Removed max-w wrapper to allow Landing Page to be full width */}
      <main className="flex-1 w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;