// src/components/compliance/ComplianceTable.jsx
import React from 'react';
import StatusIndicator from '../common/StatusIndicator';
import LoadingSpinner from '../common/LoadingSpinner';

const ComplianceTable = ({ data, loading }) => {
  if (loading) return <LoadingSpinner />;

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'lastName', label: 'Last Name' },
    { key: 'idNumber', label: 'ID Number' },
    { key: 'jobType', label: 'Job Type' },
    { key: 'regulation21', label: 'Regulation 21' },
    { key: 'fitnessEval', label: 'Fitness Evaluation' },
    { key: 'firstAid', label: 'First Aid' },
    { key: 'sapsCompetency', label: 'SAPS Competency' },
    { key: 'driversLicense', label: 'Drivers License' },
    { key: 'prdp', label: 'PrDP' },
    { key: 'advancedDriving', label: 'Advanced Driving' },
    { key: 'psira', label: 'PSIRA' },
    { key: 'uniform', label: 'Uniform' }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr className="text-left">
            {columns.map((column) => (
              <th key={column.key} className="py-3 px-4 border-b font-medium text-gray-600">
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="border-b hover:bg-gray-50">
              <td className="py-3 px-4">
                <a href={`/profile/${row.id}`} className="text-blue-600 hover:underline">
                  {row.name}
                </a>
              </td>
              <td className="py-3 px-4">{row.lastName}</td>
              <td className="py-3 px-4">{row.idNumber}</td>
              <td className="py-3 px-4">{row.jobType}</td>
              {columns.slice(4).map((column) => (
                <td key={column.key} className="py-3 px-4">
                  {row[column.key] && (
                    <StatusIndicator
                      daysToExpiry={row[column.key].daysToExpiry}
                      expiryDate={row[column.key].expiryDate}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplianceTable;