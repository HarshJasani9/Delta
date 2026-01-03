import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const Attendance = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [attendanceHistory] = useState([
    { date: 'Jan 31, 2024', status: 'Present', checkIn: '09:00 AM', checkOut: '06:00 PM', hours: '9h' },
    { date: 'Jan 30, 2024', status: 'Present', checkIn: '09:15 AM', checkOut: '06:15 PM', hours: '9h' },
    { date: 'Jan 29, 2024', status: 'Late', checkIn: '10:30 AM', checkOut: '06:30 PM', hours: '8h' },
    { date: 'Jan 28, 2024', status: 'Absent', checkIn: '-', checkOut: '-', hours: '0h' },
  ]);

  const handleCheckInOut = () => {
    setIsCheckedIn(!isCheckedIn);
    // In real app: API call to server
  };

  return (
    <div className="p-6 space-y-8 max-w-5xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">My Attendance</h1>
        <p className="text-gray-500 dark:text-gray-400">Track your daily work hours and status.</p>
      </div>

      {/* Check-In/Out Section */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {isCheckedIn ? "You are currently Checked In" : "You are currently Checked Out"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 flex items-center gap-2 justify-center md:justify-start">
            <Clock size={18} /> {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
           <div className="text-4xl font-mono font-bold text-gray-800 dark:text-white tracking-widest">
              09:41:00 AM
           </div>
           <button 
             onClick={handleCheckInOut}
             className={`px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2
               ${isCheckedIn 
                 ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-rose-200 dark:shadow-none' 
                 : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-200 dark:shadow-none'
               }`}
           >
             {isCheckedIn ? 'Check Out' : 'Check In'}
           </button>
           <p className="text-xs text-gray-400 flex items-center gap-1">
             <MapPin size={12} /> IP: 192.168.1.1 (Office Network)
           </p>
        </div>
      </div>

      {/* Attendance History List */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
        <div className="p-6 border-b border-gray-100 dark:border-gray-700">
           <h3 className="font-bold text-gray-800 dark:text-white">Recent History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700/50 text-gray-500 dark:text-gray-400 text-sm">
                <th className="p-4 font-medium">Date</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Check In</th>
                <th className="p-4 font-medium">Check Out</th>
                <th className="p-4 font-medium">Total Hours</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
              {attendanceHistory.map((record, index) => (
                <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors">
                  <td className="p-4 font-medium text-gray-800 dark:text-white flex items-center gap-2">
                    <Calendar size={16} className="text-gray-400"/>
                    {record.date}
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold inline-flex items-center gap-1
                      ${record.status === 'Present' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : ''}
                      ${record.status === 'Late' ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400' : ''}
                      ${record.status === 'Absent' ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' : ''}
                    `}>
                      {record.status === 'Present' && <CheckCircle size={12} />}
                      {record.status === 'Late' && <AlertCircle size={12} />}
                      {record.status === 'Absent' && <XCircle size={12} />}
                      {record.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">{record.checkIn}</td>
                  <td className="p-4 text-gray-600 dark:text-gray-300">{record.checkOut}</td>
                  <td className="p-4 text-gray-800 dark:text-white font-medium">{record.hours}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;