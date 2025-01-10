// src/components/common/StatusIndicator.jsx
import React from 'react';

const StatusIndicator = ({ daysToExpiry }) => {
  const getStatusColor = () => {
    if (daysToExpiry <= 0) return 'bg-red-100 text-red-800';
    if (daysToExpiry <= 15) return 'bg-red-100 text-red-800';
    if (daysToExpiry <= 30) return 'bg-yellow-100 text-yellow-800';
    if (daysToExpiry <= 60) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  const getDotColor = () => {
    if (daysToExpiry <= 0) return 'bg-red-500';
    if (daysToExpiry <= 15) return 'bg-red-500';
    if (daysToExpiry <= 30) return 'bg-yellow-500';
    if (daysToExpiry <= 60) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm ${getStatusColor()}`}>
      <div className={`w-2 h-2 rounded-full mr-2 ${getDotColor()}`} />
      {daysToExpiry}
    </div>
  );
};

export default StatusIndicator;