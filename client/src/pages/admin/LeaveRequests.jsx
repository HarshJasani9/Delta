import React, { useState } from 'react';
import { CheckCircle, XCircle, Clock, Calendar } from 'lucide-react';

const LeaveRequests = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: 'Sarah Wilson', type: 'Sick Leave', from: '2024-01-10', to: '2024-01-12', days: 3, reason: 'Viral fever, doctor advised rest.', status: 'Pending' },
    { id: 2, name: 'Mike Ross', type: 'Casual Leave', from: '2024-01-15', to: '2024-01-15', days: 1, reason: 'Personal errands.', status: 'Pending' },
    { id: 3, name: 'Rachel Green', type: 'Unpaid Leave', from: '2024-01-20', to: '2024-01-25', days: 6, reason: 'Family vacation.', status: 'Pending' },
  ]);

  const handleAction = (id, action) => {
    // In a real app, this would send an API request
    setRequests(requests.map(req => 
      req.id === id ? { ...req, status: action === 'approve' ? 'Approved' : 'Rejected' } : req
    ));
  };

  return (
    <div className="p-6 space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Leave Requests</h1>
        <p className="text-gray-500 dark:text-gray-400">Review and manage employee time-off requests.</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {requests.length === 0 ? (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
             <p className="text-gray-500">No pending requests.</p>
          </div>
        ) : requests.map((req) => (
          <div key={req.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row gap-6 animate-fade-in">
            {/* User Info */}
            <div className="flex items-start gap-4 min-w-[200px]">
               <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-primary font-bold text-lg">
                  {req.name.charAt(0)}
               </div>
               <div>
                  <h3 className="font-bold text-gray-800 dark:text-white">{req.name}</h3>
                  <p className="text-sm text-gray-500">{req.type}</p>
               </div>
            </div>

            {/* Leave Details */}
            <div className="flex-1 space-y-2">
               <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                  <span className="flex items-center gap-1"><Calendar size={16} className="text-primary"/> {req.from} to {req.to}</span>
                  <span className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded text-xs font-medium"><Clock size={14}/> {req.days} Days</span>
               </div>
               <p className="text-gray-600 dark:text-gray-400 text-sm bg-gray-50 dark:bg-gray-700/30 p-3 rounded-lg border border-gray-100 dark:border-gray-700">
                  "{req.reason}"
               </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 md:border-l md:pl-6 border-gray-100 dark:border-gray-700">
               {req.status === 'Pending' ? (
                 <>
                   <button 
                     onClick={() => handleAction(req.id, 'approve')}
                     className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 rounded-lg font-medium hover:bg-green-200 dark:hover:bg-green-900/50 transition-colors"
                   >
                     <CheckCircle size={18} />
                     Approve
                   </button>
                   <button 
                     onClick={() => handleAction(req.id, 'reject')}
                     className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-lg font-medium hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
                   >
                     <XCircle size={18} />
                     Reject
                   </button>
                 </>
               ) : (
                 <span className={`px-4 py-2 rounded-lg font-bold text-sm
                    ${req.status === 'Approved' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}
                 `}>
                    {req.status}
                 </span>
               )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaveRequests;