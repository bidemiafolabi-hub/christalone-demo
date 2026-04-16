import { motion } from 'framer-motion';
import { useState } from 'react';
import { apartmentImages } from '../data/mockData';
import { X, ZoomIn } from 'lucide-react';

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="relative py-32 bg-[#121212] overflow-hidden">
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
            Visual Experience
          </span>
          <h2 className="display-large mb-6">
            Explore Our <span className="text-[#ff3b3b]">Gallery</span>
          </h2>
          <p className="body-medium text-white/70 max-w-2xl mx-auto">
            Take a virtual tour through our stunning spaces and facilities.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apartmentImages.gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -8 }}
              className="relative h-80 overflow-hidden cursor-pointer group glass-card"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Zoom Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-[#ff3b3b]/20 backdrop-blur-md border border-[#ff3b3b] flex items-center justify-center">
                  <ZoomIn className="text-white" size={32} />
                </div>
              </div>

              {/* Index number */}
              <div className="absolute top-4 left-4 w-10 h-10 bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                {index + 1}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 border border-white/20 hover:bg-[#ff3b3b] hover:border-[#ff3b3b] flex items-center justify-center transition-all duration-300"
              onClick={() => setSelectedImage(null)}
            >
              <X className="text-white" size={24} />
            </button>

            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};
