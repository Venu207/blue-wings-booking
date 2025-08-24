import { Plane, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Plane className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">Blue Wings</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Your trusted partner for affordable flights worldwide. We make travel accessible to everyone with the best prices and exceptional service.
            </p>
            <div className="space-y-2 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@bluewings.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>New York, NY 10001</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Flight Search</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manage Booking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Check-in Online</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Flight Status</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Travel Insurance</a></li>
            </ul>
          </div>

          {/* Destinations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Popular Destinations</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">New York</a></li>
              <li><a href="#" className="hover:text-white transition-colors">London</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Paris</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tokyo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Dubai</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-white/80">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
          <p>&copy; 2024 Blue Wings Booking. All rights reserved. | Designed for the best flight deals worldwide.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;