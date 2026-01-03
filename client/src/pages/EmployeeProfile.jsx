import React, { useState } from 'react';
import { User, Briefcase, DollarSign, FileText, Mail, Phone, MapPin, Calendar, Download } from 'lucide-react';

const EmployeeProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');

  const tabs = [
    { id: 'personal', label: 'Personal Details', icon: <User size={18} /> },
    { id: 'job', label: 'Job Details', icon: <Briefcase size={18} /> },
    { id: 'salary', label: 'Salary Structure', icon: <DollarSign size={18} /> },
    { id: 'documents', label: 'Documents', icon: <FileText size={18} /> },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      
      {/* Profile Header [Section 3.3.1] */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center gap-8">
        <div className="relative">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-4xl font-bold text-gray-800 dark:text-white">
               JD
            </div>
          </div>
          <button className="absolute bottom-0 right-0 p-2 bg-primary text-white rounded-full hover:bg-indigo-700 shadow-lg" title="Edit Picture">
             <User size={16} />
          </button>
        </div>
        
        <div className="text-center md:text-left space-y-2 flex-1">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">John Doe</h1>
          <p className="text-lg text-primary font-medium">Senior Software Engineer</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-500 dark:text-gray-400 mt-2">
            <span className="flex items-center gap-1 text-sm"><Mail size={16} /> john.doe@dayflow.com</span>
            <span className="flex items-center gap-1 text-sm"><Phone size={16} /> +1 234 567 890</span>
            <span className="flex items-center gap-1 text-sm"><MapPin size={16} /> New York, USA</span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex overflow-x-auto gap-4 border-b border-gray-200 dark:border-gray-700 pb-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 font-medium text-sm whitespace-nowrap transition-colors relative
              ${activeTab === tab.id ? 'text-primary' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}
            `}
          >
            {tab.icon}
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-[-5px] left-0 w-full h-1 bg-primary rounded-t-full"></span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content Areas */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 min-h-[400px]">
        
        {/* PERSONAL DETAILS [Section 3.3.1: Personal Details] */}
        {activeTab === 'personal' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
             <InfoGroup label="Full Name" value="Johnathon Doe" />
             <InfoGroup label="Date of Birth" value="15 Aug, 1990" />
             <InfoGroup label="Gender" value="Male" />
             <InfoGroup label="Nationality" value="American" />
             <InfoGroup label="Marital Status" value="Single" />
             <InfoGroup label="Blood Group" value="O+" />
             <InfoGroup label="Current Address" value="1234 Broadway St, NY" fullWidth />
          </div>
        )}

        {/* JOB DETAILS [Section 3.3.1: Job Details] */}
        {activeTab === 'job' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
             <InfoGroup label="Employee ID" value="EMP-2023-001" />
             <InfoGroup label="Department" value="Engineering" />
             <InfoGroup label="Designation" value="Senior Developer" />
             <InfoGroup label="Date of Joining" value="12 Jan, 2022" />
             <InfoGroup label="Employment Status" value="Full-Time (Permanent)" />
             <InfoGroup label="Work Location" value="New York Office (HQ)" />
             <InfoGroup label="Reporting Manager" value="Sarah Connor" />
          </div>
        )}

        {/* SALARY STRUCTURE [Section 3.3.1: Salary Structure] */}
        {activeTab === 'salary' && (
          <div className="animate-fade-in space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-600">
                   <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Earnings</h3>
                   <div className="space-y-3">
                      <div className="flex justify-between text-gray-800 dark:text-white"><span>Basic Salary</span> <span>$5,000</span></div>
                      <div className="flex justify-between text-gray-800 dark:text-white"><span>HRA</span> <span>$2,000</span></div>
                      <div className="flex justify-between text-gray-800 dark:text-white"><span>Allowances</span> <span>$1,000</span></div>
                   </div>
                </div>
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-600">
                   <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Deductions</h3>
                   <div className="space-y-3">
                      <div className="flex justify-between text-gray-800 dark:text-white"><span>Tax</span> <span>$800</span></div>
                      <div className="flex justify-between text-gray-800 dark:text-white"><span>Insurance</span> <span>$200</span></div>
                   </div>
                </div>
             </div>
             <div className="flex justify-between items-center p-4 bg-primary/10 rounded-xl">
                <span className="font-bold text-primary text-lg">Net Salary</span>
                <span className="font-bold text-primary text-2xl">$7,000</span>
             </div>
          </div>
        )}

        {/* DOCUMENTS [Section 3.3.1: Documents] */}
        {activeTab === 'documents' && (
          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-4">
             <DocumentCard title="Employment Contract" date="12 Jan, 2022" size="2.4 MB" />
             <DocumentCard title="Offer Letter" date="10 Jan, 2022" size="1.2 MB" />
             <DocumentCard title="Tax Documents (W2)" date="01 Jan, 2023" size="3.1 MB" />
             <DocumentCard title="ID Proof (Passport)" date="Verified" size="4.5 MB" />
          </div>
        )}
      </div>
    </div>
  );
};

// Helper Components
const InfoGroup = ({ label, value, fullWidth }) => (
  <div className={`${fullWidth ? 'col-span-1 md:col-span-2' : ''}`}>
    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{label}</label>
    <p className="text-lg font-medium text-gray-900 dark:text-white">{value}</p>
  </div>
);

const DocumentCard = ({ title, date, size }) => (
  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer group">
     <div className="flex items-center gap-3">
        <div className="p-2 bg-red-100 text-red-600 rounded-lg">
           <FileText size={20} />
        </div>
        <div>
           <p className="font-medium text-gray-800 dark:text-white group-hover:text-primary transition-colors">{title}</p>
           <p className="text-xs text-gray-500">{date} • {size}</p>
        </div>
     </div>
     <button className="text-gray-400 hover:text-primary">
        <Download size={20} />
     </button>
  </div>
);

export default EmployeeProfile;