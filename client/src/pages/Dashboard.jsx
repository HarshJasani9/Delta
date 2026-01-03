import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Calendar, Clock, FileText, 
  CheckCircle, XCircle, AlertCircle, DollarSign, Briefcase 
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  // Mock Role State - In the future, this comes from the database/auth
  const [userRole, setUserRole] = useState('admin'); // Toggle this to 'employee' to see the other view

  return (
    <div className="p-6 space-y-8 min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            {userRole === 'admin' ? 'Admin Dashboard' : 'Employee Dashboard'}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">Welcome back, John Doe</p>
        </div>
        
        {/* TEMPORARY: Role Switcher for Testing */}
        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700">
          <span className="text-xs font-bold text-gray-500 uppercase px-2">Test View:</span>
          <button 
            onClick={() => setUserRole('employee')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${userRole === 'employee' ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300'}`}
          >
            Employee
          </button>
          <button 
            onClick={() => setUserRole('admin')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${userRole === 'admin' ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300'}`}
          >
            Admin
          </button>
        </div>
      </div>

      {/* ADMIN VIEW [Section 3.2.2] */}
      {userRole === 'admin' && (
        <>
          {/* Admin Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard icon={<Users />} title="Total Employees" value="124" color="bg-blue-500" />
            <StatsCard icon={<Briefcase />} title="Departments" value="8" color="bg-purple-500" />
            <StatsCard icon={<Clock />} title="On Leave Today" value="12" color="bg-amber-500" />
            <StatsCard icon={<AlertCircle />} title="Pending Requests" value="5" color="bg-rose-500" />
          </div>

          {/* Admin Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Leave Requests */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800 dark:text-white">Recent Leave Requests</h3>
                <button className="text-sm text-primary hover:underline">View All</button>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'Sarah Wilson', type: 'Sick Leave', date: 'Jan 10 - Jan 12', status: 'Pending' },
                  { name: 'Mike Ross', type: 'Casual Leave', date: 'Jan 15', status: 'Pending' },
                  { name: 'Rachel Green', type: 'Unpaid Leave', date: 'Jan 20 - Jan 25', status: 'Approved' },
                ].map((req, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-primary font-bold">
                        {req.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 dark:text-white">{req.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{req.type} • {req.date}</p>
                      </div>
                    </div>
                    {req.status === 'Pending' ? (
                      <div className="flex gap-2">
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-full" title="Approve"><CheckCircle size={18} /></button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-full" title="Reject"><XCircle size={18} /></button>
                      </div>
                    ) : (
                      <span className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Approved</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Attendance Overview */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white mb-6">Today's Attendance</h3>
              <div className="space-y-6">
                 <div className="flex justify-between text-sm mb-2 text-gray-600 dark:text-gray-400">
                    <span>Present (112)</span>
                    <span>90%</span>
                 </div>
                 <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                 </div>

                 <div className="flex justify-between text-sm mb-2 text-gray-600 dark:text-gray-400">
                    <span>Late (8)</span>
                    <span>6%</span>
                 </div>
                 <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-amber-400 h-2.5 rounded-full" style={{ width: '6%' }}></div>
                 </div>

                 <div className="flex justify-between text-sm mb-2 text-gray-600 dark:text-gray-400">
                    <span>Absent (4)</span>
                    <span>4%</span>
                 </div>
                 <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '4%' }}></div>
                 </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* EMPLOYEE VIEW [Section 3.2.1] */}
      {userRole === 'employee' && (
        <>
          {/* Employee Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatsCard icon={<Calendar />} title="Attendance" value="95%" subtext="This Month" color="bg-emerald-500" />
            <StatsCard icon={<Clock />} title="Leave Balance" value="12 Days" subtext="Available" color="bg-blue-500" />
            <StatsCard icon={<DollarSign />} title="Next Payroll" value="Jan 31" subtext="Processing" color="bg-purple-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Quick Actions */}
             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-gray-800 dark:text-white mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button 
                    onClick={() => navigate('/profile')}
                    className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors flex flex-col items-center gap-2"
                  >
                    <Users size={24} />
                    <span className="font-medium">My Profile</span>
                  </button>
                  <button className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors flex flex-col items-center gap-2">
                    <Calendar size={24} />
                    <span className="font-medium">Mark Attendance</span>
                  </button>
                  <button className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors flex flex-col items-center gap-2">
                    <FileText size={24} />
                    <span className="font-medium">Apply Leave</span>
                  </button>
                  <button className="p-4 rounded-xl bg-rose-50 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-900/40 transition-colors flex flex-col items-center gap-2">
                    <DollarSign size={24} />
                    <span className="font-medium">Payslips</span>
                  </button>
                </div>
             </div>

             {/* Recent Activity */}
             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-gray-800 dark:text-white mb-4">Recent Activity</h3>
                <ul className="space-y-4">
                  <li className="flex gap-4">
                    <div className="mt-1 min-w-[4px] h-full bg-gray-200 dark:bg-gray-700 rounded-full relative">
                      <div className="absolute top-0 w-4 h-4 -left-[6px] rounded-full bg-green-500"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">Logged in successfully</p>
                      <p className="text-xs text-gray-500">Today, 09:00 AM</p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="mt-1 min-w-[4px] h-full bg-gray-200 dark:bg-gray-700 rounded-full relative">
                       <div className="absolute top-0 w-4 h-4 -left-[6px] rounded-full bg-blue-500"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">Applied for Sick Leave</p>
                      <p className="text-xs text-gray-500">Yesterday</p>
                    </div>
                  </li>
                </ul>
             </div>
          </div>
        </>
      )}
    </div>
  );
};

// Helper Component for Stats
const StatsCard = ({ icon, title, value, subtext, color }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4">
    <div className={`p-4 rounded-lg text-white ${color} shadow-lg shadow-${color.replace('bg-', '')}/30`}>
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{value}</h3>
      {subtext && <p className="text-xs text-gray-400 mt-1">{subtext}</p>}
    </div>
  </div>
);

export default Dashboard;