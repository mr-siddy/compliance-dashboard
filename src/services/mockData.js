// src/services/mockData.js
const generateExpiryDate = (daysFromNow) => {
    const date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    return date.toISOString();
  };
  
  const generateDocument = (daysToExpiry) => ({
    issueDate: generateExpiryDate(-365), // Issued 1 year ago
    expiryDate: generateExpiryDate(daysToExpiry),
    daysToExpiry: daysToExpiry,
    status: daysToExpiry <= 0 ? 'expired' : 
            daysToExpiry <= 15 ? 'critical' :
            daysToExpiry <= 60 ? 'warning' : 'valid'
  });
  
  export const mockEmployees = [
    {
      id: '1',
      name: 'John',
      lastName: 'Snow',
      idNumber: '8412225',
      jobType: 'NGS',
      department: 'NGS',
      regulation21: generateDocument(10),
      fitnessEval: generateDocument(45),
      firstAid: generateDocument(180),
      sapsCompetency: generateDocument(90),
      driversLicense: generateDocument(365),
      prdp: generateDocument(5),
      advancedDriving: generateDocument(200),
      psira: generateDocument(300),
      uniform: generateDocument(-5)
    },
    {
      id: '2',
      name: 'Sarah',
      lastName: 'Connor',
      idNumber: '8909155',
      jobType: 'ABSA',
      department: 'ABSA',
      regulation21: generateDocument(30),
      fitnessEval: generateDocument(15),
      firstAid: generateDocument(400),
      sapsCompetency: generateDocument(500),
      driversLicense: generateDocument(700),
      prdp: generateDocument(25),
      advancedDriving: generateDocument(150),
      psira: generateDocument(45),
      uniform: generateDocument(20)
    },
    {
      id: '3',
      name: 'Michael',
      lastName: 'Scott',
      idNumber: '7856321',
      jobType: 'CPO',
      department: 'CPO',
      regulation21: generateDocument(5),
      fitnessEval: generateDocument(60),
      firstAid: generateDocument(-10),
      sapsCompetency: generateDocument(120),
      driversLicense: generateDocument(450),
      prdp: generateDocument(55),
      advancedDriving: generateDocument(80),
      psira: generateDocument(15),
      uniform: generateDocument(40)
    },
    {
      id: '4',
      name: 'David',
      lastName: 'Martinez',
      idNumber: '9012345',
      jobType: 'NGS',
      department: 'NGS',
      regulation21: generateDocument(45),
      fitnessEval: generateDocument(25),
      firstAid: generateDocument(300),
      sapsCompetency: generateDocument(250),
      driversLicense: generateDocument(180),
      prdp: generateDocument(90),
      advancedDriving: generateDocument(270),
      psira: generateDocument(60),
      uniform: generateDocument(30)
    },
    {
      id: '5',
      name: 'Lucy',
      lastName: 'Chen',
      idNumber: '8811223',
      jobType: 'ABSA',
      department: 'ABSA',
      regulation21: generateDocument(15),
      fitnessEval: generateDocument(-5),
      firstAid: generateDocument(150),
      sapsCompetency: generateDocument(400),
      driversLicense: generateDocument(600),
      prdp: generateDocument(35),
      advancedDriving: generateDocument(190),
      psira: generateDocument(75),
      uniform: generateDocument(50)
    }
  ];