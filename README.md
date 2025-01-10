# Compliance Dashboard

A React-based dashboard for managing and monitoring compliance data. The application allows users to view, filter, and export compliance-related information for employees.

## Features

- 📊 Interactive compliance data table
- 🔍 Advanced filtering capabilities (by department, category)
- 📅 Status indicators for expiration dates
- 📤 Export functionality (PDF & CSV)
- 🎨 Responsive design with Tailwind CSS
- 📱 Mobile-friendly interface

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Lucide React (for icons)
- jsPDF & jsPDF-AutoTable (for PDF export)

## Project Structure

```
compliance-dashboard/
├── src/
│   ├── components/
│   │   ├── common/              # Reusable components
│   │   │   ├── LoadingSpinner
│   │   │   └── StatusIndicator
│   │   ├── compliance/          # Compliance-specific components
│   │   │   ├── ComplianceFilters
│   │   │   ├── ComplianceReport
│   │   │   ├── ComplianceTable
│   │   │   └── ExportOptions
│   │   └── layout/             # Layout components
│   │       ├── Header
│   │       ├── Layout
│   │       └── Sidebar
│   ├── hooks/                  # Custom React hooks
│   ├── services/              # API and data services
│   ├── utils/                 # Utility functions
│   └── styles/                # Style configurations
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/compliance-dashboard.git
   cd compliance-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Development Notes

### Component Organization
- `components/common/`: Houses reusable components used across the application
- `components/compliance/`: Contains compliance-specific components
- `components/layout/`: Contains layout-related components

### Key Features Implementation
- **Filtering**: Implemented in ComplianceFilters.jsx with multiple filter options
- **Status Tracking**: Uses StatusIndicator.jsx for visual status representation
- **Data Export**: Handled by ExportOptions.jsx with PDF and CSV options
- **Data Management**: Centralized in useComplianceData.js hook

### Styling
- Utilizes Tailwind CSS for responsive design
- Custom theme configuration in tailwind.config.cjs
- Common styles defined in theme.js

## Available Scripts

- `npm run dev`: Starts development server
- `npm run build`: Builds the project for production
- `npm run preview`: Preview production build locally
- `npm run lint`: Run ESLint for code quality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.