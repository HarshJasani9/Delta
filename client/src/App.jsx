import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/login';
import Dashboard from './pages/Dashboard';
import EmployeeProfile from './pages/EmployeeProfile';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Layout>
            <LandingPage />
          </Layout>
        } 
      />
      
      <Route path="/login" element={<Login />} />
      
      <Route 
        path="/dashboard" 
        element={
          <Layout>
            <Dashboard />
          </Layout>
        } 
      />

      <Route 
        path="/profile" 
        element={
          <Layout>
            <EmployeeProfile />
          </Layout>
        } 
      />
    </Routes>
  );
}

export default App;