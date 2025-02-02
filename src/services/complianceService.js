// src/services/complianceService.js
import { api } from './api';
import { mockEmployees } from './mockData';
import { calculateDaysToExpiry } from '../utils/dateUtils';

const USE_MOCK_DATA = true; // Toggle this to switch between mock and real API

// Category mapping between dropdown values and data properties
const categoryMapping = {
  'regulation21': 'regulation21',
  'fitness': 'fitnessEval',
  'firstaid': 'firstAid',
  'saps': 'sapsCompetency',
  'drivers': 'driversLicense',
  'prdp': 'prdp',
  'advanced': 'advancedDriving',
  'psira': 'psira',
  'uniform': 'uniform'
};

export const fetchComplianceData = async (filters = {}) => {
  if (USE_MOCK_DATA) {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    let filteredData = [...mockEmployees];

    // Apply department filter
    if (filters.department) {
      filteredData = filteredData.filter(
        employee => employee.department === filters.department
      );
    }

    // Apply category filter
    if (filters.category) {
      const dataProperty = categoryMapping[filters.category.toLowerCase()];
      if (!dataProperty) {
        console.warn(`No mapping found for category: ${filters.category}`);
        return [];
      }

      filteredData = filteredData.map(employee => {
        if (employee[dataProperty]) {
          const filteredEmployee = {
            ...employee,
            // Reset all category fields to undefined first
            regulation21: undefined,
            fitnessEval: undefined,
            firstAid: undefined,
            sapsCompetency: undefined,
            driversLicense: undefined,
            prdp: undefined,
            advancedDriving: undefined,
            psira: undefined,
            uniform: undefined,
          };
          // Set only the selected category
          filteredEmployee[dataProperty] = employee[dataProperty];
          return filteredEmployee;
        }
        return null;
      }).filter(Boolean); // Remove null entries
    }

    // Apply search filter
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