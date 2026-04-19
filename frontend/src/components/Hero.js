import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { AnimatedHero3D } from './AnimatedHero3D';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-overlay opacity-20"></div>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-[#ff3b3b]/10 border border-[#ff3b3b]/30 mb-4"
          >
            <span className="text-[#ff3b3b] text-sm font-medium uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
              Premium Living Experience
            </span>
          </motion.div>

          <h1 className="display-huge neon-glow">
            Where Comfort Meets <span className="text-[#ff3b3b]">Intelligent Living</span>
          </h1>

          <p className="body-large text-white/80 max-w-lg">
            Experience the future of luxury living at CHRIST ALONE APARTMENTS. Located in the heart of Ibadan, 
            we redefine modern comfort with state-of-the-art amenities and intelligent design.
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
              onClick={() => document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })}
            >
              Book Your Stay
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary"
              onClick={() => document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' })}
            >
              <Play size={20} />
              View Gallery
            </motion.button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10"
          >
            <div>
              <div className="text-3xl font-bold text-[#ff3b3b]" style={{ fontFamily: 'Orbitron, sans-serif' }}>50+</div>
              <div className="text-sm text-white/60 mt-1">Apartments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ff3b3b]" style={{ fontFamily: 'Orbitron, sans-serif' }}>24/7</div>
              <div className="text-sm text-white/60 mt-1">Security</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#ff3b3b]" style={{ fontFamily: 'Orbitron, sans-serif' }}>5★</div>
              <div className="text-sm text-white/60 mt-1">Rated</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right - Custom 3D Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative h-[500px] lg:h-[700px] w-full"
        >
          <div className="absolute inset-0 bg-[#ff3b3b]/10 blur-3xl rounded-full"></div>
          <div className="relative h-full w-full overflow-hidden">
            <AnimatedHero3D />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-[#ff3b3b] flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-[#ff3b3b]"></motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
