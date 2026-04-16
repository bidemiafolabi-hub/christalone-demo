import { motion } from 'framer-motion';
import { apartmentData } from '../data/mockData';
import { Wifi, Car, Wine, ShoppingCart } from 'lucide-react';

export const Amenities = () => {
  const iconMap = {
    Wifi: Wifi,
    Car: Car,
    Wine: Wine,
    ShoppingCart: ShoppingCart
  };

  return (
    <section id="amenities" className="relative py-32 bg-[#121212] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ff3b3b 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#ff3b3b] text-sm font-medium uppercase tracking-wider mb-4 block" style={{ fontFamily: 'Inter, sans-serif' }}>
            Premium Amenities
          </span>
          <h2 className="display-large mb-6">
            Everything You <span className="text-[#ff3b3b]">Need & More</span>
          </h2>
          <p className="body-medium text-white/70 max-w-2xl mx-auto">
            Enjoy world-class facilities and services designed to enhance your living experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {apartmentData.amenities.map((amenity, index) => {
            const IconComponent = iconMap[amenity.icon];
            
            return (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card p-6 group cursor-pointer"
              >
                <div className="relative h-48 mb-6 overflow-hidden">
                  <img
                    src={amenity.image}
                    alt={amenity.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  
                  {/* Icon overlay */}
                  <div className="absolute top-4 right-4 w-12 h-12 bg-[#ff3b3b]/20 backdrop-blur-md border border-[#ff3b3b]/30 flex items-center justify-center group-hover:bg-[#ff3b3b] transition-all duration-300">
                    <IconComponent className="text-white" size={24} />
                  </div>
                </div>

                <h3 className="heading-2 mb-3 group-hover:text-[#ff3b3b] transition-colors duration-300">
                  {amenity.title}
                </h3>
                <p className="body-small text-white/70">
                  {amenity.description}
                </p>

                <div className="mt-4 h-1 w-0 bg-[#ff3b3b] group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            'Gym & Fitness',
            'Swimming Pool',
            'Rooftop Garden',
            'Smart Locks'
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/5 border border-white/10 hover:border-[#ff3b3b] transition-all duration-300"
            >
              <div className="text-base font-medium text-white/80">{feature}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
