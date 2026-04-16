import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#121212] border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-5"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              <span className="text-white">CHRIST A</span>
              <br />
              <span className="text-[#ff3b3b]">APARTMENTS</span>
            </h3>
            <p className="text-white/60 text-sm mb-6" style={{ fontFamily: 'Inter, sans-serif' }}>
              Where comfort meets intelligent living. Experience the future of luxury apartments in Ibadan.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/5 border border-white/20 hover:border-[#ff3b3b] hover:bg-[#ff3b3b]/20 flex items-center justify-center transition-all duration-300"
                >
                  <Icon size={18} className="text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'Apartments', 'Amenities', 'Location', 'Gallery', 'Book Now'].map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '')}`}
                    className="text-white/60 hover:text-[#ff3b3b] transition-colors duration-300 text-sm"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                <MapPin size={16} className="text-[#ff3b3b] mt-1 flex-shrink-0" />
                <span>Olororo Rd, behind first bank, Ibadan 200132, Oyo, Nigeria</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                <Phone size={16} className="text-[#ff3b3b] flex-shrink-0" />
                <span>+234 xxx xxxx xxx</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                <Mail size={16} className="text-[#ff3b3b] flex-shrink-0" />
                <span>info@christaapartments.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              Stay Updated
            </h4>
            <p className="text-white/60 text-sm mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-white/5 border border-white/20 text-white text-sm focus:border-[#ff3b3b] focus:outline-none transition-colors duration-300"
                style={{ fontFamily: 'Inter, sans-serif' }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-[#ff3b3b] hover:bg-[#ff3b3b]/80 text-white transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
            © {currentYear} CHRIST A APARTMENTS. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-[#ff3b3b] text-sm transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              Privacy Policy
            </a>
            <a href="#" className="text-white/40 hover:text-[#ff3b3b] text-sm transition-colors duration-300" style={{ fontFamily: 'Inter, sans-serif' }}>
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
