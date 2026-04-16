# CHRIST A APARTMENTS - Product Requirements Document

## Project Overview
Futuristic, high-tech luxury apartment landing page for CHRIST A APARTMENTS, featuring Tesla/Apple-inspired design with dark premium theme and neon red accents (#ff3b3b).

---

## Original Problem Statement
Build a futuristic, high-tech landing page for a luxury apartment residence called CHRIST A APARTMENTS with:
- Futuristic luxury living aesthetic
- Tesla / Apple product presentation style
- Dark premium theme with neon red accents (#ff3b3b)
- Cyberpunk-inspired UI but elegant and professional
- Spline 3D integration
- Framer Motion animations
- Responsive mobile-first design

---

## User Personas
1. **University Students**: Looking for modern, comfortable accommodation near University of Ibadan
2. **Young Professionals**: Seeking luxury apartments with smart amenities and premium facilities
3. **Families**: Interested in spacious apartments with comprehensive facilities
4. **Corporate Clients**: Looking for furnished apartments for employees or business guests

---

## Tech Stack
- **Frontend**: React with Tailwind CSS
- **Animations**: Framer Motion
- **3D Integration**: Spline (@splinetool/react-spline)
- **Typography**: Orbitron (headings), Inter (body)
- **Backend**: FastAPI (ready for integration)
- **Database**: MongoDB (ready for integration)

---

## What's Been Implemented (December 16, 2024)

### ✅ Phase 1: Frontend with Mock Data (COMPLETED)

#### Components Created:
1. **Navigation Component** (`/app/frontend/src/components/Navigation.js`)
   - Fixed navigation bar with smooth scroll
   - Mobile responsive hamburger menu
   - Animated logo and nav links
   - Red accent on "Book Now" CTA

2. **Hero Section** (`/app/frontend/src/components/Hero.js`)
   - Full-screen cinematic hero with neon glow effect
   - 3D Spline integration (scene: https://prod.spline.design/nuSoA2Ne4AJ4p4cP/scene.splinecode)
   - Dual CTA buttons: "Book Your Stay" and "View Gallery"
   - Stats display: 50+ Apartments, 24/7 Security, 5★ Rated
   - Animated scroll indicator
   - Grid overlay pattern

3. **Apartments Section** (`/app/frontend/src/components/Apartments.js`)
   - Bento-style grid layout
   - 4 room types showcased: Master Bedroom, Guest Bedroom, Modern Kitchen, Living Room
   - Hover animations with image zoom effect
   - Feature highlights: Smart Home, Size, Bedrooms, Furnished
   - Real luxury apartment images from Unsplash

4. **Amenities Section** (`/app/frontend/src/components/Amenities.js`)
   - 4 glassmorphism cards with hover effects
   - Featured amenities: Free WiFi, Secure Parking, Lounge & Bar, Mini Supermarket
   - Additional features grid: Gym & Fitness, Swimming Pool, Rooftop Garden, Smart Locks
   - Lucide React icons integration
   - Real facility images

5. **Location Section** (`/app/frontend/src/components/Location.js`)
   - Google Maps embed integration
   - Address details: Olororo Rd, behind first bank, Ibadan 200132, Oyo, Nigeria
   - Proximity information to University of Ibadan
   - "Get Directions" CTA with Google Maps link
   - Travel time indicators

6. **Gallery Section** (`/app/frontend/src/components/Gallery.js`)
   - 3-column responsive grid
   - 5 high-quality building exterior images
   - Lightbox modal for image preview
   - Hover zoom effects
   - Numbered image indicators

7. **Booking Section** (`/app/frontend/src/components/Booking.js`)
   - Futuristic terminal-style form
   - Fields: Full Name, Email, Phone, Check-in, Check-out, Room Type, Guests, Message
   - Form validation
   - Success animation after submission
   - Frontend-only functionality (mock submission)

8. **Footer Component** (`/app/frontend/src/components/Footer.js`)
   - 4-column layout: Brand, Quick Links, Contact Info, Newsletter
   - Social media links (Facebook, Twitter, Instagram, LinkedIn)
   - Newsletter subscription form
   - Copyright and legal links

#### Design System Implemented:
- **Colors**: 
  - Primary: #ff3b3b (neon red)
  - Background: #000000 (pure black)
  - Secondary Background: #121212 (dark gray)
  - Text: White with opacity variations
  
- **Typography**:
  - Headings: Orbitron font (imported from Google Fonts)
  - Body: Inter font
  - Technical UI: System fonts
  
- **Effects**:
  - Glassmorphism cards with backdrop blur
  - Neon glow text effects
  - Grid overlay patterns
  - Smooth transitions and hover animations
  - Framer Motion stagger animations

#### Mock Data Structure (`/app/frontend/src/data/mockData.js`):
```javascript
- apartmentImages: bedrooms, kitchens, livingSpaces, amenities, gallery
- apartmentData: 
  - rooms: 4 room types with details
  - amenities: 4 amenities with icons and images
  - location: Full address and coordinates
```

---

## Prioritized Backlog

### P0 Features (Essential for MVP)
- [ ] Backend API integration for booking form
- [ ] Email notification system for booking requests
- [ ] Admin dashboard to manage bookings
- [ ] Room availability calendar

### P1 Features (High Priority)
- [ ] Virtual tour integration (360° views)
- [ ] Price calculator based on dates and room type
- [ ] User authentication for returning guests
- [ ] Booking history and management
- [ ] Payment gateway integration (Paystack/Flutterwave)
- [ ] SMS notifications for booking confirmations

### P2 Features (Nice to Have)
- [ ] Multi-language support (English, Yoruba)
- [ ] Chat support integration
- [ ] Testimonials and reviews section
- [ ] Blog section for property news
- [ ] Comparison tool for different apartment types
- [ ] Mobile app version

---

## Next Action Items

### Immediate Next Steps:
1. **Test Interactive Elements**: Verify all navigation, buttons, forms, and hover effects work correctly
2. **Mobile Responsiveness Check**: Test on various screen sizes
3. **Performance Optimization**: Check page load times and Spline 3D loading
4. **Cross-browser Testing**: Ensure compatibility across browsers

### Backend Development (Next Phase):
1. Create booking API endpoint (`POST /api/bookings`)
2. Set up email service integration (SendGrid/Nodemailer)
3. Create MongoDB schemas for bookings, rooms, and availability
4. Implement booking validation logic
5. Build admin API for managing bookings
6. Connect frontend forms to backend APIs

### Future Enhancements:
1. Add room availability checker
2. Implement real-time pricing
3. Create admin dashboard UI
4. Add analytics tracking (Google Analytics)
5. SEO optimization

---

## API Contracts (To Be Implemented)

### Booking Endpoints
```
POST /api/bookings
Request Body:
{
  "fullName": string,
  "email": string,
  "phone": string,
  "checkIn": date,
  "checkOut": date,
  "roomType": string,
  "guests": number,
  "message": string (optional)
}

Response:
{
  "success": boolean,
  "bookingId": string,
  "message": string
}

GET /api/bookings/:id
Response:
{
  "bookingId": string,
  "status": string,
  "details": {...}
}

GET /api/rooms
Response:
{
  "rooms": [
    {
      "id": string,
      "type": string,
      "price": number,
      "available": boolean,
      "images": []
    }
  ]
}

POST /api/newsletter
Request Body:
{
  "email": string
}
```

---

## Success Metrics
- Page load time < 3 seconds
- Mobile responsive on all screen sizes
- Form submission success rate > 95%
- User engagement time > 2 minutes
- Booking conversion rate > 5%

---

## Notes
- All images are currently sourced from Unsplash and can be replaced with actual property photos
- Spline 3D scene is already integrated but may need optimization for mobile devices
- Form currently uses frontend validation only; backend validation needed
- Location coordinates are approximate and should be verified
