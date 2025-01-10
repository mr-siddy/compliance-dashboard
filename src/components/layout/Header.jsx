// src/components/layout/Header.jsx
import React from 'react';

const Header = () => {
  console.log('Header rendering'); // Debug log
  return (
    <header className="bg-white shadow-sm">
      <div className="p-4">
        <h1 className="text-lg font-semibold">Reports</h1>
      </div>
    </header>
  );
};

export default Header;