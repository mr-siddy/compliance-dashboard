// src/components/compliance/ExportOptions.jsx
import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { exportToPDF, exportToCSV } from '../../utils/exportUtils';

const ExportOptions = ({ data }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleExport = async (type) => {
    if (!data || data.length === 0) {
      alert('No data available to export');
      return;
    }

    setIsExporting(true);
    try {
      if (type === 'pdf') {
        await exportToPDF(data);
      } else if (type === 'csv') {
        exportToCSV(data);
      }
    } catch (error) {
      console.error('Export error:', error);
      alert('Error exporting data. Please try again.');
    } finally {
      setIsExporting(false);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        className={`flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border rounded-lg hover:bg-gray-50 ${
          isExporting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
        disabled={isExporting}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={(e) => {
          // Prevent closing if clicking inside the dropdown
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsOpen(false);
          }
        }}
      >
        <Download size={20} />
        <span>Download</span>
      </button>
      
      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-10"
          onMouseDown={(e) => e.preventDefault()} // Prevent onBlur from firing immediately
        >
          <button
            className="w-full px-4 py-2 text-left hover:bg-gray-50 rounded-t-lg disabled:opacity-50"
            onClick={() => handleExport('pdf')}
            disabled={isExporting}
          >
            PDF
          </button>
          <button
            className="w-full px-4 py-2 text-left hover:bg-gray-50 rounded-b-lg border-t disabled:opacity-50"
            onClick={() => handleExport('csv')}
            disabled={isExporting}
          >
            CSV
          </button>
        </div>
      )}
    </div>
  );
};

export default ExportOptions;