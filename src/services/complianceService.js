// src/services/complianceService.js
import { api } from './api';
import { mockEmployees } from './mockData';
import { calculateDaysToExpiry } from '../utils/dateUtils';

const USE_MOCK_DATA = true; // Toggle this to switch between mock and real API

export const fetchComplianceData = async (filters = {}) => {
  if (USE_MOCK_DATA) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    let filteredData = [...mockEmployees];

    // Apply filters
    if (filters.department) {
      filteredData = filteredData.filter(
        employee => employee.department === filters.department
      );
    }

    if (filters.categories?.length > 0) {
      filteredData = filteredData.filter(employee =>
        filters.categories.some(category => {
          const field = category.toLowerCase().replace(/\s+/g, '');
          return employee[field]?.daysToExpiry > 0;
        })
      );
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filteredData = filteredData.filter(
        employee =>
          employee.name.toLowerCase().includes(searchLower) ||
          employee.lastName.toLowerCase().includes(searchLower) ||
          employee.idNumber.includes(filters.search)
      );
    }

    return filteredData;
  }

  try {
    const response = await api.get('/compliance', filters);
    return response.data;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch compliance data');
  }
};

export const fetchDepartments = async () => {
  if (USE_MOCK_DATA) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return ['NGS', 'ABSA', 'CPO'];
  }

  try {
    const response = await api.get('/departments');
    return response.data;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch departments');
  }
};

export const fetchCategories = async () => {
  if (USE_MOCK_DATA) {
    await new Promise(resolve => setTimeout(resolve, 300));
    return [
      'Regulation 21',
      'Fitness Evaluation',
      'First Aid',
      'SAPS Competency',
      'Drivers License',
      'PrDP',
      'Advanced Driving',
      'PSIRA',
      'Uniform'
    ];
  }

  try {
    const response = await api.get('/compliance/categories');
    return response.data;
  } catch (error) {
    throw new Error(error.message || 'Failed to fetch categories');
  }
};