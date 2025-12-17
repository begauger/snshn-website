import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Manage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  const beforeAfterSlides = [
    {
      before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      title: "Kitchen Renovation"
    },
    {
      before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80",
      after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
      title: "Bathroom Restoration"
    },
    {
      before: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      after: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
      title: "Living Room Refresh"
    },
    {
      before: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=80",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      title: "Exterior Transformation"
    }
  ];

  const handleNext = () => {
    if (showAfter) {
      setShowAfter(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % beforeAfterSlides.length);
      }, 300);
    } else {
      setShowAfter(true);
    }
  };

  const handlePrev = () => {
    if (showAfter) {
      setShowAfter(false);
    } else {
      setShowAfter(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev - 1 + beforeAfterSlides.length) % beforeAfterSlides.length);
      }, 300);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        
        <div className="text-center py-16 px-6 bg-gradient-to-b from-zinc-900 to-black">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide mb-6" style={{ fontFamily: 'Pirulen, sans-serif' }}>
            PROPERTY MANAGEMENT
          </h1>
          <p className="text-lg md:text-xl font-eurostile text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Reach out today for complimentary market analysis of your property and new off-market deals!
          </p>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="relative bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            
            <div className="relative h-[500px] overflow-hidden">
              
              <div className="absolute inset-0">
                <img 
                  src={beforeAfterSlides[currentSlide].before}
                  alt="Before"
                  className="w-full h-full object-cover"
                />
              </div>

              <div 
                className="absolute inset-0 transition-all duration-1500 ease-in-out"
                style={{
                  clipPath: showAfter 
                    ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                    : 'polygon(0 0, 0 0, 0 100%, 0 100%)',
                  transitionDuration: '1500ms'
                }}
              >
                <img 
                  src={beforeAfterSlides[currentSlide].after}
                  alt="After"
                  className="w-full h-full object-cover"
                />
              </div>

              <div 
                className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-full font-eurostile font-semibold text-sm transition-opacity duration-500"
                style={{ opacity: showAfter ? 0 : 1 }}
              >
                BEFORE
              </div>

              <div 
                className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full font-eurostile font-semibold text-sm transition-opacity duration-500"
                style={{ opacity: showAfter ? 1 : 0 }}
              >
                AFTER
              </div>

              <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                  onClick={handlePrev}
                  className="ml-4 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                  onClick={handleNext}
                  className="mr-4 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-lg"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-6 py-3 rounded-full">
                <h3 className="font-eurostile font-bold text-white text-lg">
                  {beforeAfterSlides[currentSlide].title}
                </h3>
              </div>
            </div>

            <div className="flex justify-center gap-2 py-4">
              {beforeAfterSlides.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-yellow-400 w-8' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="font-eurostile text-gray-400 text-sm">
              Click the right arrow to see the transformation →
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="space-y-8">
            
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="font-eurostile font-bold text-yellow-400 text-2xl mb-4">
                Aligned Investment Goals
              </h3>
              <p className="font-eurostile text-gray-300 leading-relaxed">
                The only management company in Milwaukee to align investment goals with management structure. We take responsibility and accountability for our performance placing tenants. No eviction or (re)leasing fees for tenants we lease.
              </p>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="font-eurostile font-bold text-yellow-400 text-2xl mb-4">
                Flexible Partnership
              </h3>
              <p className="font-eurostile text-gray-300 leading-relaxed">
                Month-to-Month management contracts and no onboarding or termination fees. Think partnership - not prison.
              </p>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="font-eurostile font-bold text-yellow-400 text-2xl mb-4">
                End-to-End Service
              </h3>
              <p className="font-eurostile text-gray-300 leading-relaxed">
                We work primarily with out-of-state investors but welcome all. Our trusted, end-to-end service enables investors to buy, rehab, stabilize, refinance, sell, and exchange into larger portfolios year after year with no micro-management.
              </p>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <h3 className="font-eurostile font-bold text-yellow-400 text-2xl mb-4">
                Simply Aligned Structure
              </h3>
              <p className="font-eurostile text-gray-300 leading-relaxed">
                The more income we deliver - the more we both make. Simply aligned and fairly structured.
              </p>
            </div>

          </div>
        </div>

        {/* Why SNSHN Video Section */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white mb-8 text-center" style={{ fontFamily: 'Pirulen, sans-serif' }}>
              WHY SNSHN?
            </h2>
            
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/why-snshn-manage-thumbnail.jpg"
              >
                <source src="/why-snshn-manage-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <p className="font-eurostile text-gray-300 text-center mt-6 leading-relaxed">
              Discover how SNSHN manages investments differently than the rest
            </p>
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}