import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, ArrowLeft } from 'lucide-react';

const Login = () => {
  const [role, setRole] = useState('employee');
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleLogin = (e) => {
    e.preventDefault();
    // In the future, this is where we will integrate the backend API
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 relative">
      
      {/* Back to Home Button (Top Left) */}
      <button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors font-medium"
      >
        <ArrowLeft size={20} />
        <span className="hidden sm:inline">Back to Home</span>
      </button>

      {/* Theme Toggle Button (Top Right) */}
      <button
        onClick={toggleTheme}
        className="absolute top-6 right-6 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-300"
        aria-label="Toggle Theme"
      >
        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
      </button>

      {/* Login Card */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md transition-colors duration-300 mx-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dayflow</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">HR Management System</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
              placeholder="admin@dayflow.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input 
              type="password" 
              required
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center gap-6 mb-4 text-gray-700 dark:text-gray-300">
             <label className="flex items-center cursor-pointer group">
                <input 
                  type="radio" 
                  name="role" 
                  value="employee" 
                  checked={role === 'employee'}
                  onChange={() => setRole('employee')}
                  className="mr-2 w-4 h-4 text-primary focus:ring-primary border-gray-300 dark:border-gray-500 bg-gray-100 dark:bg-gray-600"
                />
                <span className="group-hover:text-primary transition-colors">Employee</span>
             </label>
             <label className="flex items-center cursor-pointer group">
                <input 
                  type="radio" 
                  name="role" 
                  value="admin" 
                  checked={role === 'admin'}
                  onChange={() => setRole('admin')}
                  className="mr-2 w-4 h-4 text-primary focus:ring-primary border-gray-300 dark:border-gray-500 bg-gray-100 dark:bg-gray-600"
                />
                <span className="group-hover:text-primary transition-colors">Admin</span>
             </label>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md shadow-indigo-500/20"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;