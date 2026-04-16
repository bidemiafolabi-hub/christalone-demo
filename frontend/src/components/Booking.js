import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calendar, User, Mail, Phone, Users, Send } from 'lucide-react';

export const Booking = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
    roomType: 'studio',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        checkIn: '',
        checkOut: '',
        guests: '1',
        roomType: 'studio',
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="booking" className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#ff3b3b] text-sm font-medium uppercase tracking-wider mb-4 block" style={{ fontFamily: 'Inter, sans-serif' }}>
            Reserve Now
          </span>
          <h2 className="display-large mb-6">
            Book Your <span className="text-[#ff3b3b]">Stay</span>
          </h2>
          <p className="body-medium text-white/70 max-w-2xl mx-auto">
            Ready to experience luxury living? Fill out the form below and we'll get back to you shortly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 lg:p-12"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-[#ff3b3b]/20 border-2 border-[#ff3b3b] rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="text-[#ff3b3b]" size={40} />
              </div>
              <h3 className="heading-1 mb-4">Booking Request Sent!</h3>
              <p className="body-medium text-white/70">
                Thank you for your interest. We'll contact you within 24 hours to confirm your reservation.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  <User className="inline mr-2" size={16} />
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white focus:border-[#ff3b3b] focus:outline-none transition-colors duration-300"
                  placeholder="Enter your full name"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              {/* Email & Phone */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Mail className="inline mr-2" size={16} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white focus:border-[#ff3b3b] focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Phone className="inline mr-2" size={16} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white focus:border-[#ff3b3b] focus:outline-none transition-colors duration-300"
                    placeholder="+234 xxx xxxx xxx"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
              </div>

              {/* Check-in & Check-out */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Calendar className="inline mr-2" size={16} />
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white focus:border-[#ff3b3b] focus:outline-none transition-colors duration-300"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Calendar className="inline mr-2" size={16} />
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white focus:border-[#ff3b3b] focus:outline-none transition-colors duration-300"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  />
                </div>
              </div>

              {/* Room Type & Guests */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Room Type
                  </label>
                  <select
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white focus:border-[#ff3b3b] focus:outline-none transition-colors duration-300"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    <option value="studio">Studio Apartment</option>
                    <option value="1bedroom">1 Bedroom</option>
                    <option value="2bedroom">2 Bedroom</option>
                    <option value="3bedroom">3 Bedroom</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                    <Users className="inline mr-2" size={16} />
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white focus:border-[#ff3b3b] focus:outline-none transition-colors duration-300"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 text-white focus:border-[#ff3b3b] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Any special requests or questions?"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="btn-primary w-full"
              >
                Submit Booking Request
                <Send size={20} />
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
