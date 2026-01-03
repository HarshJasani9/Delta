import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Users, Calendar, Clock, FileText, 
  CheckCircle, XCircle, AlertCircle, DollarSign, LogOut, Search, ChevronRight
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  // Mock Role State - Toggle using top right buttons
  const [userRole, setUserRole] = useState('admin'); 

  const handleLogout = () => {
    // Logic for logout would go here (clearing tokens, etc.)
    navigate('/login');
  };

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
        
        {/* Role Switcher for Testing (Keep this for Hackathon Demo) */}
        <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-2 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm">
          <span className="text-xs font-bold text-gray-500 uppercase px-2">Test View:</span>
          <button 
            onClick={() => setUserRole('employee')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${userRole === 'employee' ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            Employee
          </button>
          <button 
            onClick={() => setUserRole('admin')}
            className={`px-3 py-1 rounded text-sm font-medium transition-colors ${userRole === 'admin' ? 'bg-primary text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
          >
            Admin
          </button>
        </div>
      </div>

      {/* =========================================
          ADMIN DASHBOARD VIEW [Requirement 3.2.2]
         ========================================= */}
      {userRole === 'admin' && (
        <>
          {/* Main functional displays: Employee List, Attendance Records, Leave Approvals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 1. Employee List (Ability to switch between employees) */}
            <div 
              onClick={() => navigate('/admin/employees')} 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-start">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                  <Users size={24} />
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded text-xs font-bold text-blue-600">
                  Manage
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-4">Employee List</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">View profiles & switch employees</p>
              <div className="mt-4 flex items-center text-primary text-sm font-medium group-hover:gap-2 transition-all">
                View All Employees <ChevronRight size={16} />
              </div>
            </div>

            {/* 2. Attendance Records */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg">
                  <Calendar size={24} />
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gray-800 dark:text-white">90%</span>
                  <p className="text-xs text-gray-500">Present Today</p>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-4">Attendance Records</h3>
              <div className="mt-4 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                 <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
              <p className="text-xs text-gray-500 mt-2">112 Present • 8 Late • 4 Absent</p>
            </div>

            {/* 3. Leave Approvals */}
            <div 
              onClick={() => navigate('/admin/leaves')}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 cursor-pointer hover:shadow-md transition-all group"
            >
               <div className="flex justify-between items-start">
                <div className="p-3 bg-rose-100 dark:bg-rose-900/30 text-rose-600 rounded-lg">
                  <AlertCircle size={24} />
                </div>
                <div className="bg-rose-50 dark:bg-rose-900/20 px-2 py-1 rounded text-xs font-bold text-rose-600 animate-pulse">
                  5 Pending
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mt-4">Leave Approvals</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Review pending requests</p>
              <div className="mt-4 flex items-center text-rose-600 text-sm font-medium group-hover:gap-2 transition-all">
                Go to Approvals <ChevronRight size={16} />
              </div>
            </div>
          </div>

          {/* Quick Stats / Switch Employees Placeholder */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="font-bold text-gray-800 dark:text-white mb-4">Quick Search (Switch Employee)</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="Search employee by name or ID to view details..." 
                className="w-full pl-10 pr-4 py-3 border border-gray-200 dark:border-gray-600 rounded-lg outline-none focus:ring-2 focus:ring-primary bg-gray-50 dark:bg-gray-700/50 dark:text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            {/* Recent Leave Requests List */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-6 border border-gray-100 dark:border-gray-700">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-800 dark:text-white">Recent Leave Requests</h3>
                <button 
                  onClick={() => navigate('/admin/leaves')} 
                  className="text-sm text-primary hover:underline font-medium"
                >
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {[
                  { name: 'Sarah Wilson', type: 'Sick Leave', date: 'Jan 10 - Jan 12', status: 'Pending' },
                  { name: 'Mike Ross', type: 'Casual Leave', date: 'Jan 15', status: 'Pending' },
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
                    <div className="flex gap-2">
                       <button className="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/50 rounded-full transition-colors" title="Approve"><CheckCircle size={18} /></button>
                       <button className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/50 rounded-full transition-colors" title="Reject"><XCircle size={18} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

      {/* =========================================
          EMPLOYEE DASHBOARD VIEW [Requirement 3.2.1]
         ========================================= */}
      {userRole === 'employee' && (
        <>
          {/* Employee Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <StatsCard icon={<Calendar />} title="Attendance" value="95%" subtext="This Month" color="bg-emerald-500" />
            <StatsCard icon={<Clock />} title="Leave Balance" value="12 Days" subtext="Available" color="bg-blue-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {/* Quick Actions (Strictly following: Profile, Attendance, Leave Requests, Logout) */}
             <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-gray-800 dark:text-white mb-4">Quick Access</h3>
                <div className="grid grid-cols-2 gap-4">
                  
                  {/* 1. Profile */}
                  <button 
                    onClick={() => navigate('/profile')}
                    className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors flex flex-col items-center gap-2"
                  >
                    <Users size={24} />
                    <span className="font-medium">Profile</span>
                  </button>

                  {/* 2. Attendance */}
                  <button 
                    onClick={() => navigate('/employee/attendance')}
                    className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors flex flex-col items-center gap-2"
                  >
                    <Calendar size={24} />
                    <span className="font-medium">Attendance</span>
                  </button>

                  {/* 3. Leave Requests */}
                  <button 
                    onClick={() => navigate('/employee/leaves')}
                    className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/40 transition-colors flex flex-col items-center gap-2"
                  >
                    <FileText size={24} />
                    <span className="font-medium">Leave Requests</span>
                  </button>

                  {/* 4. Logout (Strict Requirement) */}
                  <button 
                    onClick={handleLogout}
                    className="p-4 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors flex flex-col items-center gap-2"
                  >
                    <LogOut size={24} />
                    <span className="font-medium">Logout</span>
                  </button>
                </div>
             </div>

             {/* Recent Activity or Alerts [Requirement 3.2.1] */}
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
                  <li className="flex gap-4">
                    <div className="mt-1 min-w-[4px] h-full bg-gray-200 dark:bg-gray-700 rounded-full relative">
                       <div className="absolute top-0 w-4 h-4 -left-[6px] rounded-full bg-amber-500"></div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-white">Profile Updated</p>
                      <p className="text-xs text-gray-500">2 days ago</p>
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
  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex items-center gap-4 transition-colors">
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