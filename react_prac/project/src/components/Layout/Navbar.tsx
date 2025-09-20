import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../stores/authStore';
import { 
  Shield, 
  Users, 
  Swords, 
  BarChart3, 
  Settings, 
  LogOut,
  Menu,
  X,
  Crown
} from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const navigationItems = [
    { path: '/', icon: Shield, label: 'Dashboard' },
    { path: '/player', icon: Crown, label: 'Player Stats' },
    { path: '/clan', icon: Users, label: 'Clan' },
    { path: '/wars', icon: Swords, label: 'Wars' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics' },
  ];

  if (user?.role === 'admin') {
    navigationItems.push({ path: '/admin', icon: Settings, label: 'Admin' });
  }

  return (
    <nav className="bg-dark-900 border-b border-dark-700 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold text-white">
                CoC Analytics
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === path
                    ? 'text-primary-400 bg-primary-500/10'
                    : 'text-gray-300 hover:text-primary-400 hover:bg-dark-800'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="text-sm text-gray-300">
              Welcome, <span className="text-primary-400 font-medium">{user?.username}</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-red-400 hover:bg-dark-800 transition-colors"
            >
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-primary-400 p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-800 border-t border-dark-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigationItems.map(({ path, icon: Icon, label }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  location.pathname === path
                    ? 'text-primary-400 bg-primary-500/10'
                    : 'text-gray-300 hover:text-primary-400 hover:bg-dark-700'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{label}</span>
              </Link>
            ))}
            <button
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-red-400 hover:bg-dark-700 transition-colors w-full text-left"
            >
              <LogOut className="h-5 w-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;