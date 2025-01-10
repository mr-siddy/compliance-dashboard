// src/components/layout/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  console.log('Sidebar rendering'); // Debug log
  return (
    <div className="w-64 bg-white shadow-sm h-full">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">UpScale</h1>
      </div>
      <nav className="p-4">
        <ul>
          <li className="mb-2">
            <a href="#" className="text-blue-600">
              Reports
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;