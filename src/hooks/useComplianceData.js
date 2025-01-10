// src/hooks/useComplianceData.js
import { useState, useEffect } from 'react';
import { fetchComplianceData } from '../services/complianceService';

const useComplianceData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    department: '',
    categories: [],
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetchComplianceData(filters);
        setData(response);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [filters]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  return {
    data,
    loading,
    error,
    filters,
    updateFilters
  };
};

export default useComplianceData;