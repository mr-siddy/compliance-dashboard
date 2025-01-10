// src/components/compliance/ComplianceReport.jsx
import React from 'react';
import ComplianceFilters from './ComplianceFilters';
import ComplianceTable from './ComplianceTable';
import ExportOptions from './ExportOptions';
import useComplianceData from '../../hooks/useComplianceData';

const ComplianceReport = () => {
  const { data, loading, filters, updateFilters } = useComplianceData();

  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <div className="text-sm mb-4">
        <span className="text-gray-500">REPORTS</span>
        <span className="mx-2 text-gray-500">{' > '}</span>
        <span className="text-blue-600">COMPLIANCE</span>
      </div>

      <div className="flex justify-between items-center mb-6">
        {/* Tabs */}
        <div className="flex gap-4">
          <button className="px-4 py-2 text-blue-600 bg-blue-50 rounded-lg font-medium">
            Compliance
          </button>
          <button className="px-4 py-2 text-gray-500 hover:bg-gray-50 rounded-lg">
            Financials
          </button>
        </div>

        {/* Export Options */}
        <ExportOptions data={data} />
      </div>

      {/* Filters */}
      <ComplianceFilters filters={filters} onFilterChange={updateFilters} />

      {/* Table */}
      <div className="mt-6">
        <ComplianceTable data={data} loading={loading} />
      </div>
    </div>
  );
};

export default ComplianceReport;