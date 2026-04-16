import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import { apartmentData } from '../data/mockData';

export const Location = () => {
  const { location } = apartmentData;

  return (
    <section id="location" className="relative py-32 bg-black overflow-hidden">
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
            Prime Location
          </span>
          <h2 className="display-large mb-6">
            Right Where You <span className="text-[#ff3b3b]">Need To Be</span>
          </h2>
          <p className="body-medium text-white/70 max-w-2xl mx-auto">
            Strategically located near the University of Ibadan with easy access to major landmarks and facilities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card overflow-hidden h-[400px] lg:h-[500px]"
          >
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.7!2d${location.coordinates.lng}!3d${location.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMjYnNDkuNiJOIDPCsDU0JzMyLjQiRQ!5e0!3m2!1sen!2sng!4v1234567890`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CHRIST A APARTMENTS Location"
            ></iframe>
          </motion.div>

          {/* Location Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="glass-card p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-[#ff3b3b]/20 border border-[#ff3b3b]/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-[#ff3b3b]" size={24} />
                </div>
                <div>
                  <h3 className="heading-2 mb-2">Address</h3>
                  <p className="body-medium text-white/70">
                    {location.address}<br />
                    {location.city} {location.zip}<br />
                    {location.state}, {location.country}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#ff3b3b]/20 border border-[#ff3b3b]/30 flex items-center justify-center flex-shrink-0">
                  <Navigation className="text-[#ff3b3b]" size={24} />
                </div>
                <div>
                  <h3 className="heading-2 mb-2">Nearby</h3>
                  <p className="body-medium text-white/70">
                    Close to {location.nearbyLandmark}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center">
                <div className="text-2xl font-bold text-[#ff3b3b] mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  5 min
                </div>
                <div className="text-sm text-white/60">To University</div>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-2xl font-bold text-[#ff3b3b] mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  10 min
                </div>
                <div className="text-sm text-white/60">To City Center</div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full"
              onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}`, '_blank')}
            >
              Get Directions
              <Navigation size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
