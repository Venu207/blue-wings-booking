import { Button } from "@/components/ui/button";
import { Plane, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Blue Wings</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-white/90 hover:text-white transition-colors">
                Flights
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">
                Hotels
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">
                Car Rentals
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">
                Deals
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="hero" size="sm">
              Sign In
            </Button>
            <Button variant="hero" size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="hero"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a href="#" className="block text-white/90 hover:text-white py-2 transition-colors">
              Flights
            </a>
            <a href="#" className="block text-white/90 hover:text-white py-2 transition-colors">
              Hotels
            </a>
            <a href="#" className="block text-white/90 hover:text-white py-2 transition-colors">
              Car Rentals
            </a>
            <a href="#" className="block text-white/90 hover:text-white py-2 transition-colors">
              Deals
            </a>
            <a href="#" className="block text-white/90 hover:text-white py-2 transition-colors">
              Support
            </a>
            <div className="pt-4 space-y-2">
              <Button variant="hero" size="sm" className="w-full">
                Sign In
              </Button>
              <Button variant="hero" size="sm" className="w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;