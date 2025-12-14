import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Rehab() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  const beforeAfterSlides = [
    {
      before: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      title: "Complete Kitchen Remodel"
    },
    {
      before: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&q=80",
      after: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80",
      title: "Bathroom Restoration"
    },
    {
      before: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&q=80",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      title: "Exterior Siding & Paint"
    },
    {
      before: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80",
      after: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80",
      title: "Living Space Renovation"
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
            RESTORE REHAB REBUILD
          </h1>
          <p className="text-lg md:text-xl font-eurostile text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We have seen it all! Rental on a budget or high-end luxury restoration. It is all about being creative.
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
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="font-eurostile text-gray-300 text-lg">
              From budget-friendly repairs to luxury restorations, we handle it all
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-eurostile font-bold text-yellow-400 text-xl mb-3">Roofing</h3>
                  <p className="font-eurostile text-gray-300 leading-relaxed">
                    We perform creative solutions for asphalt, metal and rubber that have saved owners THOUSANDS! Expert repairs and replacements that last.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-eurostile font-bold text-yellow-400 text-xl mb-3">Siding</h3>
                  <p className="font-eurostile text-gray-300 leading-relaxed">
                    Everything from new vinyl to restoration of historically relevant natural material. Quality craftsmanship that enhances curb appeal and protects your investment.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-eurostile font-bold text-yellow-400 text-xl mb-3">Interior Rehab</h3>
                  <p className="font-eurostile text-gray-300 leading-relaxed">
                    We do it all. Kitchens, bathrooms, flooring, painting, and complete renovations. Transform any space into something special.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-eurostile font-bold text-yellow-400 text-xl mb-3">HVAC, Electrical & Plumbing</h3>
                  <p className="font-eurostile text-gray-300 leading-relaxed">
                    We work for you to get the best price and service from our network of skilled professionals. Licensed, insured, and trusted contractors.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-br from-zinc-900/40 to-zinc-950/60 border border-white/10 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white mb-6">
              Need Help With Remodel, Rehab, or Repair?
            </h2>
            <p className="font-eurostile text-gray-300 mb-4 leading-relaxed">
              Whether you need a quick fix or a complete transformation, we are here to help. Our team brings creativity, expertise, and value to every project.
            </p>
            <p className="font-eurostile text-gray-400 mb-8 text-sm">
              Email us at <a href="mailto:team@snshn.co" className="text-yellow-400 hover:underline">team@snshn.co</a> or reach out below!
            </p>
            <a
              href="/contact"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-12 py-4 rounded-full transition-all duration-300"
            >
              Contact Us Today
            </a>
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}