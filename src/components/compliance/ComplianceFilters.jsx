// src/components/compliance/ComplianceFilters.jsx
import React from 'react';
import { Search, ChevronDown } from 'lucide-react';

const ComplianceFilters = ({ filters, onFilterChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search Compliance"
            className="w-full pl-10 pr-4 py-2 border rounded-lg"
            value={filters?.search || ''}
            onChange={(e) => onFilterChange({ search: e.target.value })}
          />
        </div>

        <div className="relative">
          <select
            className="appearance-none bg-white border rounded-lg px-4 py-2 pr-10 w-[200px]"
            value={filters?.category || ''}
            onChange={(e) => onFilterChange({ category: e.target.value })}
          >
            <option value="">Select Category</option>
            <option value="regulation21">Regulation 21</option>
            <option value="fitness">Fitness Evaluation</option>
            <option value="firstaid">First Aid</option>
            <option value="saps">SAPS Competency</option>
            <option value="drivers">Drivers License</option>
            <option value="prdp">PrDP</option>
            <option value="advanced">Advanced Driving</option>
            <option value="psira">PSIRA</option>
            <option value="uniform">Uniform</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>

        <div className="relative">
          <select
            className="appearance-none bg-white border rounded-lg px-4 py-2 pr-10 w-[200px]"
            value={filters?.department || ''}
            onChange={(e) => onFilterChange({ department: e.target.value })}
          >
            <option value="">Department</option>
            <option value="NGS">NGS</option>
            <option value="ABSA">ABSA</option>
            <option value="CPO">CPO</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex gap-2 flex-wrap">
        <span className="text-sm text-gray-500">Categories:</span>
        {['Regulation 21', 'Fitness Evaluation', 'First Aid', 'SAPS Competency', 
          'Drivers License', 'PrDP', 'Advanced Driving', 'PSIRA', 'Uniform'].map((category) => (
          <button
            key={category}
            className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ComplianceFilters;