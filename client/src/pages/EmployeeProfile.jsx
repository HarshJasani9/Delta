import React, { useState, useEffect } from 'react';
import { 
  User, Briefcase, DollarSign, FileText, Mail, Phone, MapPin, 
  Camera, Save, X, Edit3, UploadCloud, CheckCircle 
} from 'lucide-react';

const EmployeeProfile = () => {
  const [activeTab, setActiveTab] = useState('personal');
  const [isEditing, setIsEditing] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '' });
  
  // ROLE SETTING: Defaulted to 'employee' to test Section 3.3.2 requirements
  // Change to 'admin' to see full edit access
  const currentUserRole = 'employee'; 

  // State for Form Data
  const [profile, setProfile] = useState({
    firstName: 'Johnathon',
    lastName: 'Doe',
    email: 'john.doe@dayflow.com',
    phone: '+1 234 567 890',
    address: '1234 Broadway St, New York, NY',
    dob: '1990-08-15',
    gender: 'Male',
    nationality: 'American',
    maritalStatus: 'Single',
    bloodGroup: 'O+',
    employeeId: 'EMP-2023-001',
    department: 'Engineering',
    designation: 'Senior Developer',
    joiningDate: '2022-01-12',
    status: 'Full-Time',
    location: 'New York HQ',
    manager: 'Sarah Connor',
  });

  // Helper: Auto-hide notification after 3 seconds
  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ ...notification, show: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // 1. Close Edit Mode
    setIsEditing(false);
    
    // 2. Show UI Notification (No Popup)
    setNotification({ 
      show: true, 
      message: 'Profile changes saved successfully!' 
    });

    // In a real app: axios.put('/api/profile', profile)...
  };

  // STRICT REQUIREMENT CHECK [Section 3.3.2]
  // Employees can ONLY edit: Address, Phone, Profile Picture
  const isFieldEditable = (fieldName) => {
    if (currentUserRole === 'admin') return true; // Admin edits everything
    
    const allowedFieldsForEmployee = ['phone', 'address', 'profilePic'];
    return allowedFieldsForEmployee.includes(fieldName);
  };

  const tabs = [
    { id: 'personal', label: 'Personal Details', icon: <User size={18} /> },
    { id: 'job', label: 'Job Details', icon: <Briefcase size={18} /> },
    { id: 'salary', label: 'Salary Structure', icon: <DollarSign size={18} /> },
    { id: 'documents', label: 'Documents', icon: <FileText size={18} /> },
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 relative">
      
      {/* =======================
          UI NOTIFICATION TOAST 
         ======================= */}
      {notification.show && (
        <div className="fixed top-24 right-6 z-50 animate-bounce-in">
          <div className="bg-gray-800 dark:bg-white text-white dark:text-gray-900 px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-[300px]">
            <div className="bg-green-500 rounded-full p-1">
              <CheckCircle size={16} className="text-white" />
            </div>
            <div>
              <h4 className="font-bold text-sm">Success</h4>
              <p className="text-sm opacity-90">{notification.message}</p>
            </div>
            <button 
              onClick={() => setNotification({ ...notification, show: false })}
              className="ml-auto text-gray-400 hover:text-white dark:hover:text-gray-600"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Header & Profile Picture */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row items-center gap-8 relative transition-colors">
        
        {/* Edit Action Buttons */}
        {!isEditing ? (
          <button 
            onClick={() => setIsEditing(true)}
            className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/40 rounded-lg transition-colors"
          >
            <Edit3 size={16} />
            Edit Profile
          </button>
        ) : (
          <div className="absolute top-6 right-6 flex items-center gap-3">
            <button 
              onClick={() => setIsEditing(false)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <X size={16} /> Cancel
            </button>
            <button 
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-indigo-700 rounded-lg transition-colors shadow-lg shadow-indigo-200 dark:shadow-none"
            >
              <Save size={16} /> Save Changes
            </button>
          </div>
        )}

        {/* Profile Image - Editable Rule Applied */}
        <div className="relative group">
          <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center overflow-hidden">
               <span className="text-4xl font-bold text-gray-800 dark:text-white">
                 {profile.firstName.charAt(0)}{profile.lastName.charAt(0)}
               </span>
            </div>
          </div>
          
          {/* Camera Overlay: Only visible if editing AND profilePic is editable */}
          {isEditing && isFieldEditable('profilePic') && (
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
              <Camera className="text-white" size={24} />
              <span className="sr-only">Change Picture</span>
            </div>
          )}
        </div>
        
        <div className="text-center md:text-left space-y-2 flex-1">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{profile.firstName} {profile.lastName}</h1>
          <p className="text-lg text-primary font-medium">{profile.designation}</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-500 dark:text-gray-400 mt-2">
            <span className="flex items-center gap-1 text-sm"><Mail size={16} /> {profile.email}</span>
            <span className="flex items-center gap-1 text-sm"><Phone size={16} /> {profile.phone}</span>
            <span className="flex items-center gap-1 text-sm"><MapPin size={16} /> {profile.location}</span>
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

      {/* Content Area */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 min-h-[400px]">
        
        {/* TAB 1: PERSONAL DETAILS */}
        {activeTab === 'personal' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 animate-fade-in">
             <FormField 
                label="First Name" name="firstName" value={profile.firstName} 
                isEditing={isEditing} editable={isFieldEditable('firstName')} onChange={handleChange} 
             />
             <FormField 
                label="Last Name" name="lastName" value={profile.lastName} 
                isEditing={isEditing} editable={isFieldEditable('lastName')} onChange={handleChange} 
             />
             <FormField 
                label="Date of Birth" name="dob" value={profile.dob} type="date"
                isEditing={isEditing} editable={isFieldEditable('dob')} onChange={handleChange} 
             />
             <FormField 
                label="Gender" name="gender" value={profile.gender} 
                isEditing={isEditing} editable={isFieldEditable('gender')} onChange={handleChange} 
             />
             <FormField 
                label="Nationality" name="nationality" value={profile.nationality} 
                isEditing={isEditing} editable={isFieldEditable('nationality')} onChange={handleChange} 
             />
             <FormField 
                label="Marital Status" name="maritalStatus" value={profile.maritalStatus} 
                isEditing={isEditing} editable={isFieldEditable('maritalStatus')} onChange={handleChange} 
             />
             {/* Editable for Employee */}
             <FormField 
                label="Phone Number" name="phone" value={profile.phone} 
                isEditing={isEditing} editable={isFieldEditable('phone')} onChange={handleChange} 
                highlight={isEditing && isFieldEditable('phone')} // Visual clue
             />
             {/* Editable for Employee */}
             <FormField 
                label="Current Address" name="address" value={profile.address} fullWidth
                isEditing={isEditing} editable={isFieldEditable('address')} onChange={handleChange}
                highlight={isEditing && isFieldEditable('address')} // Visual clue
             />
          </div>
        )}

        {/* TAB 2: JOB DETAILS */}
        {activeTab === 'job' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 animate-fade-in">
             <FormField label="Employee ID" value={profile.employeeId} />
             <FormField label="Department" value={profile.department} />
             <FormField label="Designation" value={profile.designation} />
             <FormField label="Date of Joining" value={profile.joiningDate} />
             <FormField label="Employment Status" value={profile.status} />
             <FormField label="Work Location" value={profile.location} />
             <FormField label="Reporting Manager" value={profile.manager} />
          </div>
        )}

        {/* TAB 3: SALARY */}
        {activeTab === 'salary' && (
          <div className="animate-fade-in space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-600">
                   <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4 tracking-wider">Earnings</h3>
                   <div className="space-y-3">
                      <div className="flex justify-between text-gray-800 dark:text-white font-medium"><span>Basic Salary</span> <span>$5,000</span></div>
                      <div className="flex justify-between text-gray-600 dark:text-gray-300"><span>HRA</span> <span>$2,000</span></div>
                      <div className="flex justify-between text-gray-600 dark:text-gray-300"><span>Special Allowance</span> <span>$1,000</span></div>
                   </div>
                </div>
                <div className="p-5 bg-gray-50 dark:bg-gray-700/50 rounded-xl border border-gray-100 dark:border-gray-600">
                   <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4 tracking-wider">Deductions</h3>
                   <div className="space-y-3">
                      <div className="flex justify-between text-gray-600 dark:text-gray-300"><span>Tax (TDS)</span> <span>$800</span></div>
                      <div className="flex justify-between text-gray-600 dark:text-gray-300"><span>Provident Fund</span> <span>$200</span></div>
                   </div>
                </div>
             </div>
             <div className="flex justify-between items-center p-6 bg-primary/10 border border-primary/20 rounded-xl">
                <span className="font-bold text-primary text-lg">Net Salary (Monthly)</span>
                <span className="font-bold text-primary text-2xl">$7,000</span>
             </div>
          </div>
        )}

        {/* TAB 4: DOCUMENTS */}
        {activeTab === 'documents' && (
          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-4">
             <DocumentCard title="Employment Contract.pdf" date="Jan 12, 2022" size="2.4 MB" />
             <DocumentCard title="Offer Letter.pdf" date="Jan 10, 2022" size="1.2 MB" />
             <DocumentCard title="Tax Form W2.pdf" date="Jan 01, 2023" size="3.1 MB" />
             <DocumentCard title="ID Proof (Passport).jpg" date="Verified" size="4.5 MB" />
             
             <div className="border-2 border-dashed border-gray-200 dark:border-gray-600 rounded-xl p-4 flex flex-col items-center justify-center text-gray-400 hover:text-primary hover:border-primary cursor-pointer transition-colors h-24">
               <UploadCloud size={24} />
               <span className="text-xs font-medium mt-1">Upload New Document</span>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};

// --- Reusable Components ---

const FormField = ({ label, name, value, type = "text", isEditing, editable, onChange, fullWidth, highlight }) => (
  <div className={`${fullWidth ? 'col-span-1 md:col-span-2' : ''}`}>
    <label className="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-1.5">{label}</label>
    
    {isEditing && editable ? (
      <div className="relative">
        <input 
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-2.5 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all shadow-sm
            ${highlight ? 'border-primary ring-1 ring-primary/20' : 'border-gray-300 dark:border-gray-600'}
          `}
        />
        {highlight && (
           <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary opacity-50"><Edit3 size={14}/></span>
        )}
      </div>
    ) : (
      <p className={`text-lg font-medium text-gray-800 dark:text-white py-2 ${isEditing ? 'opacity-40 select-none' : ''}`}>
        {value}
      </p>
    )}
  </div>
);

const DocumentCard = ({ title, date, size }) => (
  <div className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer group">
     <div className="flex items-center gap-4">
        <div className="p-2.5 bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 rounded-lg">
           <FileText size={20} />
        </div>
        <div>
           <p className="font-medium text-gray-800 dark:text-white group-hover:text-primary transition-colors">{title}</p>
           <p className="text-xs text-gray-500 dark:text-gray-400">{date} • {size}</p>
        </div>
     </div>
  </div>
);

export default EmployeeProfile;