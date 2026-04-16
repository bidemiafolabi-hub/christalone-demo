export const apartmentImages = {
  bedrooms: [
    'https://images.unsplash.com/photo-1588796460666-590f1d712a2e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBiZWRyb29tfGVufDB8fHx8MTc3NjMzMTg2M3ww&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1640109478916-f445f8f19b11?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBtb2Rlcm4lMjBiZWRyb29tfGVufDB8fHx8MTc3NjMzMTg2M3ww&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1668089677938-b52086753f77?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBtb2Rlcm4lMjBiZWRyb29tfGVufDB8fHx8MTc3NjMzMTg2M3ww&ixlib=rb-4.1.0&q=85'
  ],
  kitchens: [
    'https://images.unsplash.com/photo-1639751787355-bbc3ed1fd639?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBsdXh1cnklMjBraXRjaGVufGVufDB8fHx8MTc3NjMzMTg3N3ww&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBraXRjaGVufGVufDB8fHx8MTc3NjMzMTg3N3ww&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1643034738686-d69e7bc047e1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBsdXh1cnklMjBraXRjaGVufGVufDB8fHx8MTc3NjMzMTg3N3ww&ixlib=rb-4.1.0&q=85'
  ],
  livingSpaces: [
    'https://images.unsplash.com/photo-1638885930125-85350348d266?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc3NjMzMTg4Mnww&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc3NjMzMTg4Mnww&ixlib=rb-4.1.0&q=85',
    'https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBsaXZpbmclMjByb29tfGVufDB8fHx8MTc3NjMzMTg4Mnww&ixlib=rb-4.1.0&q=85'
  ],
  amenities: {
    parking: 'https://images.unsplash.com/photo-1619335680796-54f13b88c6ba',
    lounge: 'https://images.unsplash.com/photo-1775883377648-76677df00875',
    supermarket: 'https://images.unsplash.com/photo-1577374559080-cb697b79d8f0',
    wifi: 'https://images.unsplash.com/photo-1758598306174-78795a972fe1'
  },
  gallery: [
    'https://images.unsplash.com/photo-1758448511648-d7d8e1993c3f',
    'https://images.unsplash.com/photo-1758193431355-54df41421657',
    'https://images.unsplash.com/photo-1664813953310-ea2953c0ec99',
    'https://images.unsplash.com/photo-1766270596305-d0cfb9efaa52',
    'https://images.unsplash.com/photo-1664813953897-ada06817c48c'
  ]
};

export const apartmentData = {
  rooms: [
    {
      id: 1,
      type: 'bedroom',
      title: 'Master Bedroom',
      description: 'Spacious bedroom with modern amenities and city views',
      image: apartmentImages.bedrooms[0]
    },
    {
      id: 2,
      type: 'bedroom',
      title: 'Guest Bedroom',
      description: 'Comfortable guest rooms with premium finishes',
      image: apartmentImages.bedrooms[1]
    },
    {
      id: 3,
      type: 'kitchen',
      title: 'Modern Kitchen',
      description: 'State-of-the-art kitchen with premium appliances',
      image: apartmentImages.kitchens[0]
    },
    {
      id: 4,
      type: 'living',
      title: 'Living Room',
      description: 'Open concept living space with natural light',
      image: apartmentImages.livingSpaces[0]
    }
  ],
  amenities: [
    {
      id: 1,
      title: 'Free WiFi',
      description: 'High-speed internet throughout the property',
      icon: 'Wifi',
      image: apartmentImages.amenities.wifi
    },
    {
      id: 2,
      title: 'Secure Parking',
      description: '24/7 monitored parking facilities',
      icon: 'Car',
      image: apartmentImages.amenities.parking
    },
    {
      id: 3,
      title: 'Lounge & Bar',
      description: 'Premium lounge and bar area for residents',
      icon: 'Wine',
      image: apartmentImages.amenities.lounge
    },
    {
      id: 4,
      title: 'Mini Supermarket',
      description: 'Convenience store with daily essentials',
      icon: 'ShoppingCart',
      image: apartmentImages.amenities.supermarket
    }
  ],
  location: {
    address: 'Olororo Rd, behind first bank',
    city: 'Ibadan',
    state: 'Oyo',
    zip: '200132',
    country: 'Nigeria',
    nearbyLandmark: 'University of Ibadan',
    coordinates: {
      lat: 7.4471,
      lng: 3.9090
    }
  }
};
