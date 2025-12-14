import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Leasing() {
  const [filter, setFilter] = useState('all');

  const properties = [
    {
      id: 1,
      title: "Modern Downtown Loft",
      address: "123 Main St, Milwaukee, WI 53202",
      price: 1850,
      beds: 2,
      baths: 2,
      sqft: 1200,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
      available: "Available Now",
      type: "apartment"
    },
    {
      id: 2,
      title: "Spacious Family Home",
      address: "456 Oak Avenue, Wauwatosa, WI 53213",
      price: 2400,
      beds: 4,
      baths: 3,
      sqft: 2100,
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80",
      available: "Available Dec 1",
      type: "house"
    },
    {
      id: 3,
      title: "Bay View Studio",
      address: "789 South Shore Dr, Milwaukee, WI 53207",
      price: 1100,
      beds: 1,
      baths: 1,
      sqft: 650,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
      available: "Available Now",
      type: "studio"
    },
    {
      id: 4,
      title: "East Side Classic",
      address: "321 North Ave, Milwaukee, WI 53202",
      price: 1650,
      beds: 3,
      baths: 2,
      sqft: 1450,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      available: "Available Jan 15",
      type: "apartment"
    },
    {
      id: 5,
      title: "Luxury Penthouse",
      address: "555 Water St, Milwaukee, WI 53202",
      price: 3200,
      beds: 3,
      baths: 2.5,
      sqft: 1800,
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
      available: "Available Now",
      type: "apartment"
    },
    {
      id: 6,
      title: "Shorewood Duplex",
      address: "888 Capitol Dr, Shorewood, WI 53211",
      price: 1950,
      beds: 2,
      baths: 1.5,
      sqft: 1100,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
      available: "Available Feb 1",
      type: "house"
    }
  ];

  const filteredProperties = filter === 'all' 
    ? properties 
    : properties.filter(p => p.type === filter);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        
        <div className="text-center py-16 px-6 bg-gradient-to-b from-zinc-900 to-black">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide mb-6" style={{ fontFamily: 'Pirulen, sans-serif' }}>
            FIND YOUR HOME
          </h1>
          <p className="text-lg md:text-xl font-eurostile text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Browse our collection of premium rental properties in Milwaukee and surrounding areas
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setFilter('all')}
              className={`px-8 py-3 rounded-full font-eurostile font-semibold transition-all duration-300 ${
                filter === 'all' 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-zinc-900 text-white border border-white/10 hover:border-yellow-400/50'
              }`}
            >
              All Properties
            </button>
            <button
              onClick={() => setFilter('apartment')}
              className={`px-8 py-3 rounded-full font-eurostile font-semibold transition-all duration-300 ${
                filter === 'apartment' 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-zinc-900 text-white border border-white/10 hover:border-yellow-400/50'
              }`}
            >
              Apartments
            </button>
            <button
              onClick={() => setFilter('house')}
              className={`px-8 py-3 rounded-full font-eurostile font-semibold transition-all duration-300 ${
                filter === 'house' 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-zinc-900 text-white border border-white/10 hover:border-yellow-400/50'
              }`}
            >
              Houses
            </button>
            <button
              onClick={() => setFilter('studio')}
              className={`px-8 py-3 rounded-full font-eurostile font-semibold transition-all duration-300 ${
                filter === 'studio' 
                  ? 'bg-yellow-400 text-black' 
                  : 'bg-zinc-900 text-white border border-white/10 hover:border-yellow-400/50'
              }`}
            >
              Studios
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-8">
          <div className="text-center">
            <a
              href="/approval-guide"
              className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 font-eurostile font-semibold px-10 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              Learn About Our Application Approval
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-eurostile font-semibold text-sm">
                    ${property.price}/mo
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full font-eurostile text-sm">
                    {property.available}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-eurostile font-bold text-white mb-2">
                    {property.title}
                  </h3>
                  <p className="font-eurostile text-gray-400 text-sm mb-4">
                    {property.address}
                  </p>

                  <div className="flex items-center gap-6 mb-6 text-sm font-eurostile text-gray-300">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>

                  <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold py-3 rounded-full transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <div className="bg-gradient-to-br from-zinc-900/40 to-zinc-950/60 border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white mb-6">
              Cannot Find What You Are Looking For?
            </h2>
            <p className="font-eurostile text-gray-300 mb-8 leading-relaxed">
              Contact our leasing team and we will help you find the perfect property that meets your needs.
            </p>
            <a
              href="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-12 py-4 rounded-full transition-all duration-300"
            >
              Contact Leasing Team
            </a>
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}