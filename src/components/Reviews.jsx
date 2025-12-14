import { useState, useEffect } from 'react';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      screenshot: "/src/assets/images/review1.png",
      rating: 4.9,
      yearsWithSNSHN: 3
    },
    {
      screenshot: "/src/assets/images/review2.png",
      rating: 5.0,
      yearsWithSNSHN: 2
    },
    {
      screenshot: "/src/assets/images/review3.png",
      rating: 4.8,
      yearsWithSNSHN: 4
    },
    {
      screenshot: "/src/assets/images/review4.png",
      rating: 4.7,
      yearsWithSNSHN: 1
    },
    {
      screenshot: "/src/assets/images/review5.png",
      rating: 4.9,
      yearsWithSNSHN: 5
    }
  ];

  // Auto-rotate reviews every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const currentReview = reviews[currentIndex];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Review Card */}
        <div className="bg-zinc-900 border border-white/10 rounded-2xl p-8 overflow-hidden">
          
          {/* Screenshot Image */}
          <div className="mb-8 bg-white rounded-lg overflow-hidden">
            <img 
              src={currentReview.screenshot} 
              alt="Customer Review"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Metrics Section */}
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Property Quality Rating */}
            <div>
              <div className="text-center mb-4">
                <p className="font-eurostile text-sm text-gray-400 uppercase tracking-wider mb-2">
                  Property Quality
                </p>
                <p className="font-eurostile text-4xl font-bold text-yellow-400">
                  {currentReview.rating.toFixed(1)}
                </p>
              </div>

              {/* Rating Bar */}
              <div className="relative">
                <div className="flex justify-between text-xs font-eurostile text-gray-500 mb-2">
                  <span>POOR</span>
                  <span>EXCELLENT</span>
                </div>
                
                {/* Background bar */}
                <div className="relative h-3 bg-zinc-800 rounded-full overflow-hidden">
                  {/* Fill bar */}
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1000"
                    style={{ width: `${(currentReview.rating / 5) * 100}%` }}
                  ></div>
                </div>

                {/* Scale markers */}
                <div className="flex justify-between text-xs font-eurostile text-gray-600 mt-1">
                  <span>0</span>
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                  <span>4</span>
                  <span>5</span>
                </div>
              </div>
            </div>

            {/* Time with SNSHN */}
            <div>
              <div className="text-center mb-4">
                <p className="font-eurostile text-sm text-gray-400 uppercase tracking-wider mb-2">
                  Time with SNSHN
                </p>
                <p className="font-eurostile text-4xl font-bold text-yellow-400">
                  {currentReview.yearsWithSNSHN} {currentReview.yearsWithSNSHN === 1 ? 'Year' : 'Years'}
                </p>
              </div>

              {/* Timeline Bar */}
              <div className="relative">
                <div className="flex justify-between text-xs font-eurostile text-gray-500 mb-2">
                  <span>NEW</span>
                  <span>LONG-TERM</span>
                </div>
                
                {/* Background bar */}
                <div className="relative h-3 bg-zinc-800 rounded-full overflow-hidden">
                  {/* Fill bar - max out at 5 years */}
                  <div 
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-1000"
                    style={{ width: `${Math.min((currentReview.yearsWithSNSHN / 5) * 100, 100)}%` }}
                  ></div>
                </div>

                {/* Scale markers */}
                <div className="flex justify-between text-xs font-eurostile text-gray-600 mt-1">
                  <span>0yr</span>
                  <span>1yr</span>
                  <span>2yr</span>
                  <span>3yr</span>
                  <span>4yr</span>
                  <span>5yr+</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-yellow-400 w-8' 
                  : 'bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}