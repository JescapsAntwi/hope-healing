
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <span className="font-heading font-bold text-xl">Hope & Healing</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              A comprehensive support network dedicated to helping survivors of gender-based violence 
              find safety, healing, and empowerment through community and resources.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-warm">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">24/7 Crisis Hotline: 1-800-HELP-NOW</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/emergency" className="text-gray-400 hover:text-primary transition-colors">Emergency Help</Link></li>
              <li><Link to="/get-help" className="text-gray-400 hover:text-primary transition-colors">Find Support</Link></li>
              <li><Link to="/understand" className="text-gray-400 hover:text-primary transition-colors">Learn About GBV</Link></li>
              <li><Link to="/prevent" className="text-gray-400 hover:text-primary transition-colors">Prevention</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-primary transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/safety" className="text-gray-400 hover:text-primary transition-colors">Safety & Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2024 Hope & Healing Network. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-gray-500 text-sm">Emergency:</span>
              <span className="text-warm font-medium">1-800-HELP-NOW</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
