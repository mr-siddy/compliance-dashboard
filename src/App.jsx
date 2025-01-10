// src/App.jsx
import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import ComplianceReport from './components/compliance/ComplianceReport';

function App() {
  console.log('App rendering'); // Debug log
  return (
    <div className="h-screen">
      <Layout>
        <ComplianceReport />
      </Layout>
    </div>
  );
}

export default App;