import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [role, setRole] = useState('employee');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md transition-colors duration-300">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dayflow</h1>
          <p className="text-gray-500 dark:text-gray-400">HR Management System</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
            <input 
              type="email" 
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="admin@dayflow.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Password</label>
            <input 
              type="password" 
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center gap-4 mb-4 text-gray-700 dark:text-gray-300">
             <label className="flex items-center cursor-pointer">
                <input 
                  type="radio" 
                  name="role" 
                  value="employee" 
                  checked={role === 'employee'}
                  onChange={() => setRole('employee')}
                  className="mr-2 accent-primary"
                />
                Employee
             </label>
             <label className="flex items-center cursor-pointer">
                <input 
                  type="radio" 
                  name="role" 
                  value="admin" 
                  checked={role === 'admin'}
                  onChange={() => setRole('admin')}
                  className="mr-2 accent-primary"
                />
                Admin
             </label>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors"
          >
            Sign In
          </button>
          
          <button 
            type="button"
            onClick={() => navigate('/')}
            className="w-full mt-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm"
          >
            Back to Home
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;