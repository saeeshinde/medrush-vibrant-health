
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ShoppingCart, User, Menu, X, Bell, Heart, 
  Upload, Phone, HeartPulse 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 border-b">
          <Link to="/" className="flex items-center space-x-2">
            <HeartPulse size={28} className="text-medrush-blue" />
            <span className="text-xl font-bold text-medrush-dark">MedRush</span>
          </Link>
          
          {/* Search bar - hide on mobile */}
          <div className="hidden md:flex relative flex-1 mx-10 max-w-lg">
            <Input
              type="text"
              placeholder="Search for medicines, health products..."
              className="pr-10 bg-muted rounded-full"
            />
            <Search 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
              size={18} 
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/upload" className="hidden sm:flex items-center text-sm nav-link">
              <Upload size={18} className="mr-1" />
              <span className="hidden lg:inline">Upload Prescription</span>
            </Link>
            
            <Link to="/cart" className="relative">
              <ShoppingCart size={22} className="text-medrush-dark hover:text-medrush-blue transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-medrush-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            <Link to="/account">
              <User size={22} className="text-medrush-dark hover:text-medrush-blue transition-colors" />
            </Link>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center justify-between py-3">
          <div className="flex items-center space-x-8">
            <Link to="/medicines" className="nav-link font-medium">Medicines</Link>
            <Link to="/healthcare" className="nav-link font-medium">Healthcare</Link>
            <Link to="/consult" className="nav-link font-medium">Consult Doctor</Link>
            <Link to="/lab-tests" className="nav-link font-medium">Lab Tests</Link>
          </div>
          
          <Link to="/emergency" className="flex items-center">
            <Button variant="destructive" size="sm" className="rounded-full">
              <Phone size={16} className="mr-2" />
              Emergency 24x7
            </Button>
          </Link>
        </nav>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 bg-white animate-fade-in">
            <div className="relative mb-4">
              <Input 
                type="text" 
                placeholder="Search medicines..." 
                className="pr-10 bg-muted rounded-full w-full"
              />
              <Search 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
                size={18} 
              />
            </div>
            
            <div className="space-y-3">
              <Link 
                to="/medicines" 
                className="flex items-center py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Medicines
              </Link>
              <Link 
                to="/healthcare" 
                className="flex items-center py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Healthcare
              </Link>
              <Link 
                to="/consult" 
                className="flex items-center py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Consult Doctor
              </Link>
              <Link 
                to="/lab-tests" 
                className="flex items-center py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Lab Tests
              </Link>
              <Link 
                to="/upload" 
                className="flex items-center py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <Upload size={18} className="mr-2" />
                Upload Prescription
              </Link>
              <Link 
                to="/emergency" 
                className="flex items-center py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="destructive" size="sm" className="rounded-full w-full">
                  <Phone size={16} className="mr-2" />
                  Emergency 24x7
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
