import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { User, LogIn, Menu, X } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  // Mock authentication state - In a real app, this comes from Context or Redux
  // For now, we assume user is NOT logged in on the landing page
  const isLoggedIn = false; 

  const handleNavigation = (path) => {
    if (path === '/dashboard' && !isLoggedIn) {
      alert("Please Log In to access the Dashboard.");
      navigate('/login');
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
              D
            </div>
            <h1 className="text-xl font-bold text-gray-800">Dayflow</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => navigate('/')}
              className={`text-sm font-medium transition-colors hover:text-primary ${location.pathname === '/' ? 'text-primary' : 'text-gray-600'}`}
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/dashboard')}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Dashboard
            </button>
            <button 
              onClick={() => handleNavigation('/dashboard')}
              className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
            >
              Employees
            </button>
            
            <div className="h-4 w-px bg-gray-300 mx-2"></div>

            {isLoggedIn ? (
              <div className="flex items-center gap-2 text-gray-700 cursor-pointer hover:text-primary">
                <User size={20} />
                <span className="font-medium text-sm">My Profile</span>
              </div>
            ) : (
              <button 
                onClick={() => navigate('/login')}
                className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium shadow-sm shadow-indigo-200"
              >
                <LogIn size={18} />
                <span>Sign In</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button 
              onClick={() => handleNavigation('/')}
              className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation('/dashboard')}
              className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              Dashboard
            </button>
            <button 
              onClick={() => navigate('/login')}
              className="block w-full text-left px-3 py-3 rounded-md text-base font-medium text-primary hover:bg-gray-50"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;