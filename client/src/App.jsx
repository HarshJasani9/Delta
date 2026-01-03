import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import EmployeeProfile from './pages/EmployeeProfile';
import EmployeeList from './pages/admin/EmployeeList';
import LeaveRequests from './pages/admin/LeaveRequests';
import PayrollList from './pages/admin/PayrollList'; // Import new page
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><LandingPage /></Layout>} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="/profile" element={<Layout><EmployeeProfile /></Layout>} />
      
      {/* Admin Routes */}
      <Route path="/admin/employees" element={<Layout><EmployeeList /></Layout>} />
      <Route path="/admin/leaves" element={<Layout><LeaveRequests /></Layout>} />
      <Route path="/admin/payroll" element={<Layout><PayrollList /></Layout>} /> {/* New Route */}
    </Routes>
  );
}

export default App;