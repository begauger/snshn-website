import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const scrollContainerRef = useRef(null);

  const reviews = [
    {
      name: "Sarah M.",
      age: 32,
      location: "Milwaukee, WI",
      quote: "The property quality exceeded all my expectations. SNSHN made the entire process seamless and stress-free.",
      rating: 4.9,
      yearsWithSNSHN: 3
    },
    {
      name: "James T.",
      age: 28,
      location: "Wauwatosa, WI",
      quote: "Best rental experience I've had. The team is responsive and the properties are top-notch.",
      rating: 5.0,
      yearsWithSNSHN: 2
    },
    {
      name: "Maria G.",
      age: 35,
      location: "Shorewood, WI",
      quote: "Professional service and beautiful properties. I found my dream apartment in just two weeks.",
      rating: 4.8,
      yearsWithSNSHN: 4
    },
    {
      name: "David K.",
      age: 41,
      location: "Bay View, WI",
      quote: "SNSHN transformed how I think about property management. Highly recommend to anyone looking.",
      rating: 4.7,
      yearsWithSNSHN: 1
    },
    {
      name: "Lisa R.",
      age: 29,
      location: "East Side, WI",
      quote: "The attention to detail and quality of service is unmatched. So glad I chose SNSHN for my rental.",
      rating: 4.9,
      yearsWithSNSHN: 5
    },
    {
      name: "Michael P.",
      age: 38,
      location: "Downtown Milwaukee",
      quote: "Incredible experience from start to finish. The properties are modern and the service is outstanding.",
      rating: 5.0,
      yearsWithSNSHN: 2
    }
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = 388;
    const originalSetWidth = cardWidth * reviews.length;
    let currentScroll = 0;

    const scrollInterval = setInterval(() => {
      currentScroll += cardWidth;

      if (currentScroll >= originalSetWidth) {
        container.scrollLeft = 0;
        currentScroll = cardWidth;
        setTimeout(() => {
          container.scrollTo({
            left: cardWidth,
            behavior: 'smooth'
          });
        }, 50);
      } else {
        container.scrollTo({
          left: currentScroll,
          behavior: 'smooth'
        });
      }
    }, 5000);

    return () => clearInterval(scrollInterval);
  }, [reviews.length]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pb-16">
      <style jsx>{`
        @font-face {
          font-family: 'Pirulen';
          src: url('/src/assets/fonts/pirulenrg.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>

      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/mke2.png" 
          alt="Milwaukee Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-24 mb-32">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight text-white drop-shadow-2xl" style={{ fontFamily: 'Pirulen, sans-serif' }}>
          UPGRADE YOUR<br />LIVING
        </h1>
        
        <p className="text-base md:text-lg font-eurostile text-white mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-lg">
          The most comprehensive, effective, and enjoyable way to elevate your property<br />experience in Milwaukee
        </p>
        
        <Link
          to="/leasing"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-10 py-4 rounded-full transition-all duration-300 text-base tracking-wide"
        >
          VIEW RENTALS
        </Link>
      </div>

      <div className="relative z-10 w-full overflow-hidden mt-8">
        <div 
          ref={scrollContainerRef}
          className="flex gap-8 overflow-x-hidden"
          style={{ 
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {[...reviews, ...reviews, ...reviews].map((review, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-[380px]"
            >
              <div className="bg-zinc-900/90 backdrop-blur-sm border border-white/10 rounded-xl p-8 shadow-xl flex items-center gap-6 transition-all duration-300 hover:scale-105 hover:border-yellow-400/30 min-h-[220px]">
                
                <div className="flex flex-col items-center justify-center flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-yellow-400/20 border-2 border-yellow-400 flex items-center justify-center mb-3">
                    <span className="text-yellow-400 font-eurostile font-bold text-3xl">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-eurostile font-semibold text-white text-sm text-center whitespace-nowrap">
                    {review.name}, {review.age}
                  </h4>
                  <p className="font-eurostile text-gray-400 text-xs text-center">
                    {review.location}
                  </p>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <p className="font-eurostile text-gray-300 text-sm mb-5 leading-relaxed italic">
                    "{review.quote}"
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    
                    <div>
                      <p className="font-eurostile text-xs text-gray-400 uppercase tracking-wider mb-1 text-center">
                        Quality
                      </p>
                      <p className="font-eurostile text-xl font-bold text-yellow-400 text-center mb-2">
                        {review.rating.toFixed(1)}
                      </p>
                      <div className="relative h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full transition-all duration-300"
                          style={{ width: `${(review.rating / 5) * 100}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs font-eurostile text-gray-600 mt-1">
                        <span>0</span>
                        <span>5</span>
                      </div>
                    </div>

                    <div>
                      <p className="font-eurostile text-xs text-gray-400 uppercase tracking-wider mb-1 text-center">
                        Tenure
                      </p>
                      <p className="font-eurostile text-xl font-bold text-yellow-400 text-center mb-2">
                        {review.yearsWithSNSHN}yr
                      </p>
                      <div className="relative h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                          className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full transition-all duration-300"
                          style={{ width: `${Math.min((review.yearsWithSNSHN / 5) * 100, 100)}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs font-eurostile text-gray-600 mt-1">
                        <span>0yr</span>
                        <span>5yr+</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}