import { useState, useEffect } from 'react';

export default function AvailableServices() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const services = [
    {
      title: "Property Management",
      description: "Full-service property management designed to maximize returns, minimize stress, and keep tenants satisfied.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80"
    },
    {
      title: "Rehab & Remodel",
      description: "Restore, rehab, and rebuild properties to maximize value and market appeal with our comprehensive renovation services.",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
    },
    {
      title: "Real Estate Sales",
      description: "Expert brokerage services to help you buy, sell, and invest in properties with confidence and strategic insight.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80"
    },
    {
      title: "Leasing Services",
      description: "Premium rental listings with streamlined application processes and responsive tenant support.",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
    },
    {
      title: "Investment Advisory",
      description: "Data-driven investment strategies to help you build and grow a profitable real estate portfolio.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80"
    },
    {
      title: "Tenant Screening",
      description: "Thorough background checks and credit verification to ensure reliable, quality tenants for your properties.",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
    }
  ];

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [services.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-full mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-pirulen font-bold text-white mb-6">
            Available Services
          </h2>
          <p className="text-lg md:text-xl font-eurostile text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions engineered to help you invest smarter,<br />manage better, and build wealth faster
          </p>
        </div>

        {/* Extra Wide Centered Card Display with Navigation */}
        <div className="relative w-full mb-10 flex justify-center px-4">
          
          {/* Left Arrow */}
          <button
            onClick={goToPrevious}
            className="absolute left-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full backdrop-blur-sm transition-all"
            aria-label="Previous service"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Card Container - Extra Wide */}
          <div className="w-full" style={{ maxWidth: '85vw' }}>
            <div className="relative">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    index === currentIndex
                      ? 'opacity-100 scale-100 relative z-10'
                      : 'opacity-0 scale-95 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    
                    {/* Service Image - Extra Wide & Horizontal */}
                    <div className="relative w-full h-[450px] overflow-hidden">
                      <img 
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                      
                      {/* Text Overlay on Image */}
                      <div className="absolute bottom-0 left-0 right-0 p-12 md:p-16">
                        <h3 className="text-4xl md:text-6xl font-eurostile font-bold text-white mb-4 drop-shadow-2xl">
                          {service.title}
                        </h3>
                        <p className="text-lg md:text-2xl font-eurostile text-gray-200 leading-relaxed font-light max-w-4xl drop-shadow-xl">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            className="absolute right-8 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 text-white p-4 rounded-full backdrop-blur-sm transition-all"
            aria-label="Next service"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-2 mb-10">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-yellow-400 w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <a
            href="https://www.snshn.co/property-management-investment"
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-10 py-4 rounded-full transition-all duration-300 text-base uppercase tracking-wide"
          >
            View All Services
          </a>
        </div>

      </div>
    </section>
  );
}