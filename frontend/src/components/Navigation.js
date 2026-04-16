import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'Apartments', href: '#apartments' },
    { label: 'Amenities', href: '#amenities' },
    { label: 'Location', href: '#location' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Book Now', href: '#booking' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            <span className="text-white">CHRIST A</span>
            <span className="text-[#ff3b3b] ml-2">APARTMENTS</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className={`text-base font-medium transition-colors hover:text-[#ff3b3b] ${
                  item.label === 'Book Now' ? 'text-[#ff3b3b]' : 'text-gray-400'
                }`}
                whileHover={{ y: -2 }}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-6"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`block py-3 text-base font-medium transition-colors hover:text-[#ff3b3b] ${
                  item.label === 'Book Now' ? 'text-[#ff3b3b]' : 'text-gray-400'
                }`}
                onClick={() => setIsOpen(false)}
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
