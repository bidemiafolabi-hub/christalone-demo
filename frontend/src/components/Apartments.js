import { motion } from 'framer-motion';
import { apartmentData } from '../data/mockData';

export const Apartments = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="apartments" className="relative py-32 bg-black overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#ff3b3b] text-sm font-medium uppercase tracking-wider mb-4 block" style={{ fontFamily: 'Inter, sans-serif' }}>
            Our Spaces
          </span>
          <h2 className="display-large mb-6">
            Experience <span className="text-[#ff3b3b]">Luxury Living</span>
          </h2>
          <p className="body-medium text-white/70 max-w-2xl mx-auto">
            Each apartment is meticulously designed with premium finishes and modern amenities 
            to provide the ultimate comfort and sophistication.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {apartmentData.rooms.map((room, index) => (
            <motion.div
              key={room.id}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`glass-card overflow-hidden cursor-pointer group ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#ff3b3b]/0 group-hover:bg-[#ff3b3b]/20 transition-all duration-500"></div>
              </div>

              <div className="p-6">
                <h3 className="heading-2 mb-2">{room.title}</h3>
                <p className="body-small text-white/70">{room.description}</p>
                
                <div className="mt-4 flex items-center text-[#ff3b3b] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>View Details</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="ml-2"
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-white/10"
        >
          {[
            { label: 'Smart Home', value: 'Enabled' },
            { label: 'Size', value: '1200 sq ft' },
            { label: 'Bedrooms', value: '2-3' },
            { label: 'Furnished', value: 'Fully' }
          ].map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-xl font-bold text-[#ff3b3b] mb-1" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {feature.value}
              </div>
              <div className="text-sm text-white/60">{feature.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
