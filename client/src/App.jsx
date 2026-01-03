import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      {/* Default route is the Landing Page with the Navbar */}
      <Route 
        path="/" 
        element={
          <Layout>
            <LandingPage />
          </Layout>
        } 
      />
      
      {/* Login page (standalone) */}
      <Route path="/login" element={<Login />} />
      
      {/* Dashboard Protected Route */}
      <Route 
        path="/dashboard" 
        element={
          <Layout>
            <Dashboard />
          </Layout>
        } 
      />
    </Routes>
  );
}

export default App;