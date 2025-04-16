
import { Link } from 'react-router-dom';
import { 
  Facebook, Instagram, Twitter, Mail, Phone, MapPin, Heart,
  HeartPulse 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-medrush-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center mb-4">
              <HeartPulse size={24} className="text-medrush-blue mr-2" />
              <h3 className="text-xl font-bold">MedRush</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Your trusted partner for quick medicine delivery and healthcare products. We connect you with the nearest pharmacy for fast and reliable service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/medicines" className="text-gray-300 hover:text-white transition-colors">
                  Medicines
                </Link>
              </li>
              <li>
                <Link to="/healthcare" className="text-gray-300 hover:text-white transition-colors">
                  Healthcare Products
                </Link>
              </li>
              <li>
                <Link to="/upload" className="text-gray-300 hover:text-white transition-colors">
                  Upload Prescription
                </Link>
              </li>
              <li>
                <Link to="/emergency" className="text-gray-300 hover:text-white transition-colors">
                  Emergency Services
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/consult" className="text-gray-300 hover:text-white transition-colors">
                  Doctor Consultation
                </Link>
              </li>
              <li>
                <Link to="/lab-tests" className="text-gray-300 hover:text-white transition-colors">
                  Lab Tests
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-gray-300 hover:text-white transition-colors">
                  Order Tracking
                </Link>
              </li>
              <li>
                <Link to="/pharmacy" className="text-gray-300 hover:text-white transition-colors">
                  Partner Pharmacy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white transition-colors">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Healthcare Avenue, Medical District, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">+1 (888) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span className="text-gray-300">support@medrush.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Line */}
        <div className="border-t border-gray-700 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} MedRush. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/faq" className="text-gray-400 hover:text-white text-sm transition-colors">
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
