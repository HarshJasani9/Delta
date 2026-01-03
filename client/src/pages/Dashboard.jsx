import React from 'react';

const Dashboard = () => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-full transition-colors duration-300">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Dashboard Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Employees</h3>
          <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">124</p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">On Leave Today</h3>
          <p className="text-3xl font-bold text-gray-800 dark:text-white mt-2">8</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
          <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium">Pending Approvals</h3>
          <p className="text-3xl font-bold text-amber-500 mt-2">12</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;