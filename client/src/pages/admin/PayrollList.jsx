import React, { useState } from 'react';
import { DollarSign, Download, Filter, Search, Edit2, CheckCircle, AlertCircle } from 'lucide-react';

const PayrollList = () => {
  // Mock Data based on Section 3.6
  const [payrolls] = useState([
    { id: 1, name: 'John Doe', role: 'Software Engineer', basic: 5000, allowances: 3000, deductions: 1000, net: 7000, status: 'Paid', date: 'Jan 31, 2024' },
    { id: 2, name: 'Sarah Wilson', role: 'HR Manager', basic: 4500, allowances: 2000, deductions: 800, net: 5700, status: 'Processing', date: 'Jan 31, 2024' },
    { id: 3, name: 'Mike Ross', role: 'Product Designer', basic: 4800, allowances: 2200, deductions: 900, net: 6100, status: 'Pending', date: '-' },
  ]);

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Payroll Management</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage employee salaries and view payment history.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-sm">
          <DollarSign size={20} />
          <span>Process All Payroll</span>
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Total Payroll Cost</p>
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mt-2">$18,800</h3>
          <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full mt-2 inline-block">+2.5% from last month</span>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Pending Payments</p>
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mt-2">1</h3>
          <span className="text-xs text-amber-600 bg-amber-100 px-2 py-1 rounded-full mt-2 inline-block">Action Required</span>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Average Salary</p>
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mt-2">$6,266</h3>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search employee..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-primary bg-transparent dark:text-white"
          />
        </div>
        <div className="flex gap-2">
           <select className="px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg bg-transparent dark:text-white outline-none">
             <option>All Departments</option>
             <option>Engineering</option>
             <option>HR</option>
           </select>
           <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">
             <Download size={20} />
             <span>Export</span>
           </button>
        </div>
      </div>

      {/* Payroll Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 text-sm border-b border-gray-100 dark:border-gray-700">
                <th className="p-4 font-medium">Employee</th>
                <th className="p-4 font-medium">Basic</th>
                <th className="p-4 font-medium">Allowances</th>
                <th className="p-4 font-medium">Deductions</th>
                <th className="p-4 font-medium">Net Salary</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {payrolls.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="p-4">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-white">{row.name}</p>
                      <p className="text-xs text-gray-500">{row.role}</p>
                    </div>
                  </td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">${row.basic.toLocaleString()}</td>
                  <td className="p-4 text-green-600 text-xs font-medium bg-green-50 dark:bg-green-900/20 rounded-lg w-fit px-2 py-1">
                     +${row.allowances.toLocaleString()}
                  </td>
                  <td className="p-4 text-red-600 text-xs font-medium bg-red-50 dark:bg-red-900/20 rounded-lg w-fit px-2 py-1">
                     -${row.deductions.toLocaleString()}
                  </td>
                  <td className="p-4 font-bold text-gray-800 dark:text-white">
                    ${row.net.toLocaleString()}
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      {row.status === 'Paid' && <CheckCircle size={16} className="text-green-500" />}
                      {row.status === 'Processing' && <AlertCircle size={16} className="text-blue-500" />}
                      {row.status === 'Pending' && <AlertCircle size={16} className="text-amber-500" />}
                      <span className={`text-sm font-medium
                        ${row.status === 'Paid' ? 'text-green-600' : ''}
                        ${row.status === 'Processing' ? 'text-blue-600' : ''}
                        ${row.status === 'Pending' ? 'text-amber-600' : ''}
                      `}>
                        {row.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      className="p-2 text-gray-500 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                      title="Update Salary Structure"
                    >
                      <Edit2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PayrollList;