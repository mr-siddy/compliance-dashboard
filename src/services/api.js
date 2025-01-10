const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

class ApiError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
    this.name = 'ApiError';
  }
}

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new ApiError(
      error.message || 'An error occurred while fetching data',
      response.status
    );
  }
  return response.json();
};

export const api = {
  get: async (endpoint, params = {}) => {
    const queryString = new URLSearchParams(params).toString();
    const url = `${API_BASE_URL}${endpoint}${queryString ? `?${queryString}` : ''}`;
    
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add any authentication headers here
          // 'Authorization': `Bearer ${getToken()}`
        },
      });
      return handleResponse(response);
    } catch (error) {
      throw new ApiError(
        'Network error occurred. Please check your connection.',
        0
      );
    }
  },

  post: async (endpoint, data) => {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any authentication headers here
        },
        body: JSON.stringify(data),
      });
      return handleResponse(response);
    } catch (error) {
      throw new ApiError(
        'Network error occurred. Please check your connection.',
        0
      );
    }
  },
};

