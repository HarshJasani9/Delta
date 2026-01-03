import React, { useState } from 'react';
import { Calendar, Plus, Clock, CheckCircle, XCircle } from 'lucide-react';

const LeaveApplication = () => {
  const [leaves] = useState([
    { id: 1, type: 'Sick Leave', from: 'Jan 10, 2024', to: 'Jan 12, 2024', days: 3, status: 'Pending' },
    { id: 2, type: 'Casual Leave', from: 'Dec 25, 2023', to: 'Dec 26, 2023', days: 2, status: 'Approved' },
    { id: 3, type: 'Unpaid Leave', from: 'Nov 10, 2023', to: 'Nov 10, 2023', days: 1, status: 'Rejected' },
  ]);

  return (
    <div className="p-6 space-y-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Leave Management</h1>
          <p className="text-gray-500 dark:text-gray-400">Apply for time off and check status.</p>
        </div>
        <div className="text-right hidden md:block">
           <p className="text-sm text-gray-500 dark:text-gray-400">Available Balance</p>
           <p className="text-2xl font-bold text-primary">12 Days</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left: Application Form */}
        <div className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 h-fit">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
             <Plus size={20} className="text-primary"/> New Request
          </h3>
          <form className="space-y-5">
             <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Leave Type</label>
                <select className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-primary bg-transparent dark:text-white">
                   <option>Sick Leave</option>
                   <option>Casual Leave</option>
                   <option>Unpaid Leave</option>
                </select>
             </div>
             
             <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">From Date</label>
                   <input type="date" className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-primary bg-transparent dark:text-white text-sm" />
                </div>
                <div>
                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">To Date</label>
                   <input type="date" className="w-full px-3 py-2 border border-gray-200 dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-primary bg-transparent dark:text-white text-sm" />
                </div>
             </div>

             <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Reason</label>
                <textarea 
                  rows="3" 
                  className="w-full px-4 py-2 border border-gray-200 dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-primary bg-transparent dark:text-white resize-none"
                  placeholder="Why do you need leave?"
                ></textarea>
             </div>

             <button type="button" className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 dark:shadow-none">
                Submit Request
             </button>
          </form>
        </div>

        {/* Right: History List */}
        <div className="lg:col-span-2 space-y-6">
           <h3 className="text-lg font-bold text-gray-800 dark:text-white">Leave History</h3>
           <div className="space-y-4">
             {leaves.map((leave) => (
               <div key={leave.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4 transition-colors">
                  <div className="flex items-start gap-4">
                     <div className={`p-3 rounded-full 
                        ${leave.type === 'Sick Leave' ? 'bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400' : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'}
                     `}>
                        <Calendar size={20} />
                     </div>
                     <div>
                        <h4 className="font-bold text-gray-800 dark:text-white text-lg">{leave.type}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2 mt-1">
                           <span>{leave.from} - {leave.to}</span>
                           <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                           <span>{leave.days} Days</span>
                        </p>
                     </div>
                  </div>
                  
                  <div className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2
                     ${leave.status === 'Pending' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : ''}
                     ${leave.status === 'Approved' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : ''}
                     ${leave.status === 'Rejected' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : ''}
                  `}>
                     {leave.status === 'Pending' && <Clock size={16} />}
                     {leave.status === 'Approved' && <CheckCircle size={16} />}
                     {leave.status === 'Rejected' && <XCircle size={16} />}
                     {leave.status}
                  </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default LeaveApplication;