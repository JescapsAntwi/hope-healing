
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Phone, Menu, LogOut, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-gray-900 text-white shadow-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-heading font-bold text-xl text-primary">
              Hope & Healing
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/')
                  ? 'text-white'
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              Home
            </Link>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                <span>Get Help</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700">
                <DropdownMenuItem>
                  <Link to="/emergency" className="text-white hover:text-primary">Emergency Help</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/get-help" className="text-white hover:text-primary">Find Support</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                <span>Resources</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700">
                <DropdownMenuItem>
                  <Link to="/understand" className="text-white hover:text-primary">Learn About GBV</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/prevent" className="text-white hover:text-primary">Prevention</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                <span>Community</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700">
                <DropdownMenuItem>
                  <Link to="/community" className="text-white hover:text-primary">Support Groups</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/stories" className="text-white hover:text-primary">Survivor Stories</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                <span>About Us</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700">
                <DropdownMenuItem>
                  <Link to="/about" className="text-white hover:text-primary">Our Mission</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/contact" className="text-white hover:text-primary">Contact</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Emergency Button & Quick Exit */}
          <div className="flex items-center space-x-4">
            <Button
              asChild
              className="bg-warm hover:bg-warm/90 text-white font-medium"
            >
              <Link to="/emergency" className="flex items-center space-x-2">
                <span className="hidden sm:inline">Get Emergency Help</span>
                <span className="sm:hidden">Help</span>
              </Link>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:flex items-center space-x-2 text-gray-300 hover:text-white hover:bg-gray-800"
            >
              <LogOut className="h-4 w-4" />
              <span>Quick Exit</span>
            </Button>

            {/* Mobile menu trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden text-white">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64 bg-gray-900 border-gray-800">
                <div className="flex flex-col space-y-4 mt-8">
                  <Link
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium py-2 px-3 rounded-md text-white hover:bg-gray-800"
                  >
                    Home
                  </Link>
                  <Link
                    to="/get-help"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium py-2 px-3 rounded-md text-white hover:bg-gray-800"
                  >
                    Get Help
                  </Link>
                  <Link
                    to="/understand"
                    onClick={() => setIsOpen(false)}
                    className="text-base font-medium py-2 px-3 rounded-md text-white hover:bg-gray-800"
                  >
                    Resources
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
