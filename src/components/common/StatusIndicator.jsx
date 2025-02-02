// src/components/common/StatusIndicator.jsx
import React from 'react';

const StatusIndicator = ({ daysToExpiry }) => {
  const getStatusColor = () => {
    if (daysToExpiry <= 0) return 'bg-black text-red-500'; // Expired - black bg, red text
    if (daysToExpiry <= 30) return 'bg-red-500 text-black'; // Immediate - red bg, black text
    if (daysToExpiry <= 60) return 'bg-yellow-400 text-black'; // Warning - yellow bg, black text
    return 'bg-green-500 text-black'; // Valid - green bg, black text
  };

  const getDotColor = () => {
    if (daysToExpiry <= 0) return 'bg-red-500'; // Expired - red dot
    if (daysToExpiry <= 30) return 'bg-black'; // Immediate - black dot
    if (daysToExpiry <= 60) return 'bg-black'; // Warning - black dot
    return 'bg-black'; // Valid - black dot
  };

  const getStatusText = () => {
    if (daysToExpiry <= 0) return 'Expired';
    if (daysToExpiry <= 30) return `${daysToExpiry} days`;
    if (daysToExpiry <= 60) return `${daysToExpiry} days`;
    return `${daysToExpiry} days`;
  };

  return (
    <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${getStatusColor()}`}>
      <div className={`w-2 h-2 rounded-full mr-2 ${getDotColor()}`} />
      {getStatusText()}
    </div>
  );
};

export default StatusIndicator;