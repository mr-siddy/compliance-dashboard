// src/utils/exportUtils.js
import { formatDate } from './dateUtils';

export const exportToCSV = (data) => {
  if (!data || data.length === 0) {
    console.warn('No data to export');
    return;
  }

  // Define headers
  const headers = [
    'Name',
    'Last Name',
    'ID Number',
    'Job Type',
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

  // Format data rows
  const rows = data.map(row => [
    row.name,
    row.lastName,
    row.idNumber,
    row.jobType,
    row.regulation21?.daysToExpiry || 'N/A',
    row.fitnessEval?.daysToExpiry || 'N/A',
    row.firstAid?.daysToExpiry || 'N/A',
    row.sapsCompetency?.daysToExpiry || 'N/A',
    row.driversLicense?.daysToExpiry || 'N/A',
    row.prdp?.daysToExpiry || 'N/A',
    row.advancedDriving?.daysToExpiry || 'N/A',
    row.psira?.daysToExpiry || 'N/A',
    row.uniform?.daysToExpiry || 'N/A'
  ]);

  // Create CSV content
  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  // Create and download file
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', `compliance_report_${formatDate(new Date())}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportToPDF = async (data) => {
  if (!data || data.length === 0) {
    console.warn('No data to export');
    return;
  }

  try {
    // Dynamic import of jspdf and jspdf-autotable
    const jsPDF = (await import('jspdf')).default;
    const autoTable = (await import('jspdf-autotable')).default;

    const doc = new jsPDF();

    // Add title
    doc.setFontSize(16);
    doc.text('Compliance Report', 14, 15);
    doc.setFontSize(10);
    doc.text(`Generated on ${formatDate(new Date())}`, 14, 25);

    // Define table columns
    const columns = [
      'Name',
      'Last Name',
      'ID Number',
      'Job Type',
      'Reg.21',
      'Fitness',
      'First Aid',
      'SAPS',
      'License',
      'PrDP',
      'Adv.Driv',
      'PSIRA',
      'Uniform'
    ];

    // Prepare table rows
    const rows = data.map(row => [
      row.name,
      row.lastName,
      row.idNumber,
      row.jobType,
      row.regulation21?.daysToExpiry || 'N/A',
      row.fitnessEval?.daysToExpiry || 'N/A',
      row.firstAid?.daysToExpiry || 'N/A',
      row.sapsCompetency?.daysToExpiry || 'N/A',
      row.driversLicense?.daysToExpiry || 'N/A',
      row.prdp?.daysToExpiry || 'N/A',
      row.advancedDriving?.daysToExpiry || 'N/A',
      row.psira?.daysToExpiry || 'N/A',
      row.uniform?.daysToExpiry || 'N/A'
    ]);

    // Generate table
    autoTable(doc, {
      head: [columns],
      body: rows,
      startY: 35,
      styles: {
        fontSize: 8,
        cellPadding: 2
      },
      headStyles: {
        fillColor: [59, 130, 246],
        textColor: 255
      }
    });

    // Save PDF
    doc.save(`compliance_report_${formatDate(new Date())}.pdf`);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Error generating PDF. Please try again.');
  }
};