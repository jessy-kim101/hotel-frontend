import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import HeroImg from '../assets/img/hotel-image.jpeg';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-green-800">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left Section */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
              PANAROMA HOTEL RESORT <br />
              <span className="text-yellow-400">QUALITY LUXURY EXPERIENCE</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-md mx-auto lg:mx-0">
              Book with us today and enjoy exclusive discounts during your stay.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <NavLink
                to="/more info"
                className="group inline-flex items-center px-6 py-3 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-300 shadow-md"
              >
                More Information
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </NavLink>
              <NavLink
                to="/help"
                className="inline-flex items-center px-6 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition duration-300 shadow-md"
              >
                Help
              </NavLink>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10">
              {[
                { title: 'Hotel Info', desc: 'Support' },
                { title: 'Grabs', desc: 'Contact Us' },
                { title: 'Other Services', desc: 'Delivery' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-5 rounded-xl bg-white/10 backdrop-blur-md shadow-xl text-white text-center hover:bg-white/20 transition duration-300"
                >
                  <h3 className="text-lg font-semibold mb-1 text-yellow-300">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="relative w-full h-full">
            {/* Full Height Image */}
            <img
              src={HeroImg}
              alt="hero-image"
              className="rounded-xl w-full h-full object-cover lg:min-h-[500px] shadow-lg"
            />

            {/* Glow Circle */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-72 h-72 bg-yellow-400 opacity-20 blur-3xl rounded-full -z-10"></div>
            </div>

            {/* Floating Badge - moved to bottom right */}
            <div className="absolute bottom-4 right-4 bg-white/10 border border-white/30 px-5 py-3 rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105">
              <p className="text-white font-bold text-sm tracking-wide">Booking Tickets</p>
              <p className="text-white/70 text-xs mt-1">Booking Information</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
