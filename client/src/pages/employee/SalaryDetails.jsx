import React from 'react';
import { DollarSign, Download, FileText, TrendingUp } from 'lucide-react';

const SalaryDetails = () => {
  return (
    <div className="p-6 space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">My Payroll</h1>
        <p className="text-gray-500 dark:text-gray-400">View your salary structure and download payslips.</p>
      </div>

      {/* Salary Overview Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="col-span-2 bg-gradient-to-br from-primary to-indigo-700 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10">
               <p className="text-indigo-100 font-medium mb-1">Net Monthly Salary</p>
               <h2 className="text-4xl font-bold mb-6">$7,000.00</h2>
               
               <div className="grid grid-cols-2 gap-8">
                  <div>
                     <p className="text-indigo-200 text-sm mb-1">Basic Pay</p>
                     <p className="font-bold text-lg">$5,000</p>
                  </div>
                  <div>
                     <p className="text-indigo-200 text-sm mb-1">Allowances</p>
                     <p className="font-bold text-lg">$3,000</p>
                  </div>
                  <div>
                     <p className="text-indigo-200 text-sm mb-1">Deductions</p>
                     <p className="font-bold text-lg text-rose-300">-$1,000</p>
                  </div>
               </div>
            </div>
            {/* Background Decor */}
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
               <DollarSign size={300} />
            </div>
         </div>

         {/* Stats */}
         <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                     <TrendingUp size={20} />
                  </div>
                  <h3 className="font-bold text-gray-800 dark:text-white">Next Payout</h3>
               </div>
               <p className="text-2xl font-bold text-gray-800 dark:text-white">Jan 31, 2024</p>
               <p className="text-xs text-gray-500 mt-1">Scheduled via Bank Transfer</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
               <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Total Paid (YTD)</p>
               <p className="text-2xl font-bold text-gray-800 dark:text-white">$84,000</p>
            </div>
         </div>
      </div>

      {/* Payslip History */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
         <div className="p-6 border-b border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-gray-800 dark:text-white">Payslip History</h3>
         </div>
         <div className="divide-y divide-gray-100 dark:divide-gray-700">
            {[
               { month: 'December 2023', paidOn: 'Jan 01, 2024', id: '#PAY-1223' },
               { month: 'November 2023', paidOn: 'Dec 01, 2023', id: '#PAY-1123' },
               { month: 'October 2023', paidOn: 'Nov 01, 2023', id: '#PAY-1023' },
            ].map((slip, idx) => (
               <div key={idx} className="p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                  <div className="flex items-center gap-4">
                     <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-300">
                        <FileText size={24} />
                     </div>
                     <div>
                        <p className="font-bold text-gray-800 dark:text-white">{slip.month}</p>
                        <p className="text-sm text-gray-500">Paid on {slip.paidOn} • ID: {slip.id}</p>
                     </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 text-primary hover:bg-indigo-50 dark:hover:bg-indigo-900/30 rounded-lg transition-colors font-medium text-sm">
                     <Download size={16} />
                     Download PDF
                  </button>
               </div>
            ))}
         </div>
      </div>
    </div>
  );
};

export default SalaryDetails;