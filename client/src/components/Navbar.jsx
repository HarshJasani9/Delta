import React from 'react';
import { User, LogOut } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
          D
        </div>
        <h1 className="text-xl font-bold text-gray-800">Dayflow</h1>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-gray-600 hover:text-primary cursor-pointer">
          <User size={20} />
          <span className="font-medium">Profile</span>
        </div>
        <button className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;