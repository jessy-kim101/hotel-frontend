import React from 'react';
import { Calendar, MapPin, Star, Wifi, Car, Coffee, Phone } from 'lucide-react';

const HotelPage = () => {
  const hotels = [
    {
      id: 1,
      name: "Grand Luxury Resort",
      price: 299,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      rating: 4.8,
      location: "Downtown District",
      amenities: ["Free WiFi", "Parking", "Restaurant", "Pool"]
    },
    {
      id: 2,
      name: "Ocean View Paradise",
      price: 189,
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      rating: 4.6,
      location: "Beachfront",
      amenities: ["Ocean View", "WiFi", "Spa", "Beach Access"]
    },
    {
      id: 3,
      name: "Mountain Peak Lodge",
      price: 159,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      rating: 4.7,
      location: "Mountain View",
      amenities: ["Mountain View", "Hiking", "WiFi", "Restaurant"]
    },
    {
      id: 4,
      name: "City Central Hotel",
      price: 129,
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
      rating: 4.4,
      location: "City Center",
      amenities: ["WiFi", "Business Center", "Gym", "Parking"]
    },
    {
      id: 5,
      name: "Boutique Garden Inn",
      price: 99,
      image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop",
      rating: 4.5,
      location: "Garden District",
      amenities: ["Garden View", "WiFi", "Breakfast", "Pet Friendly"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white text-center py-16 px-5">
        <h1 className="text-5xl font-bold mb-4">Discover Hotels</h1>
        <p className="text-xl opacity-90">Find the perfect stay for your next adventure</p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto py-12 px-5">
        {/* Featured Hotels Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Hotels</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Hotel Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-semibold">{hotel.rating}</span>
                  </div>
                </div>

                {/* Hotel Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{hotel.location}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{hotel.name}</h3>
                  
                  {/* Amenities */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hotel.amenities.slice(0, 3).map((amenity, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>

                  {/* Price and Booking */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">${hotel.price}</span>
                      <span className="text-gray-600 text-sm ml-1">per night</span>
                    </div>
                    
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <a href="/bookings" className="cta-button">
                      
                      Book Now
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Our Hotels */}
        <section className="bg-white rounded-xl p-8 shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why Choose Our Hotels?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wifi className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Free WiFi</h3>
              <p className="text-gray-600 text-sm">High-speed internet in all rooms</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Free Parking</h3>
              <p className="text-gray-600 text-sm">Complimentary parking available</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Room Service</h3>
              <p className="text-gray-600 text-sm">24/7 room service available</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock customer service</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Perfect Stay?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of satisfied guests who chose our hotels</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200">
              View All Hotels
            </button>
            
        <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors duration-200">
            <a href="/contact" className="cta-button">
           
              Contact Us
            </a>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};
export default HotelPage;

