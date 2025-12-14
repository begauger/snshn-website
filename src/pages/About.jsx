import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        
        {/* Hero Banner with Logo and About Us Text */}
        <div className="relative w-full h-64 mb-24">
          <img 
            src="/src/assets/images/snshnlogo4.png"
            alt="SNSHN"
            className="w-full h-full object-contain px-6"
          />
          <div className="absolute inset-0 flex items-center px-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-eurostile font-bold text-yellow-400 uppercase tracking-wide">
              ABOUT US
            </h1>
          </div>
        </div>

        {/* Philosophy Section with Logo */}
        <div className="max-w-5xl mx-auto px-6 mb-24">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img 
                src="/src/assets/images/snshnlogo2.jpg"
                alt="SNSHN Logo"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            
            <div>
              <p className="font-eurostile text-yellow-400 uppercase text-sm tracking-wider mb-2">OUR PHILOSOPHY</p>
              <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white mb-6">
                Where Modern Technology Meets Property Excellence
              </h2>
              <div className="space-y-4 text-gray-300 font-eurostile leading-relaxed">
                <p>
                  At SNSHN, we believe property management is a system of measurable outcomes that can be optimized and improved with the right approach. Our philosophy blends data-driven decision making, cutting-edge technology, and proven management protocols to help your properties perform at their best financially and operationally.
                </p>
                <p>
                  We do not chase trends. We focus on what works: from industry-leading property management practices to the real-time data we collect from our portfolio. Every insight, every detail, and every strategy serves a single purpose: to help you maximize returns and maintain exceptional properties in the process.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="max-w-6xl mx-auto px-6 mb-24">
          <div className="text-center mb-16">
            <p className="font-eurostile text-yellow-400 uppercase text-sm tracking-wider mb-2">OUR CORE VALUES</p>
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white">
              What Makes SNSHN Stand Out
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            
            <div className="text-center">
              <div className="mb-6 overflow-hidden rounded-xl h-48 relative">
                <img 
                  src="/src/assets/images/snshnhouse1.webp"
                  alt="Measure"
                  className="w-full h-full object-cover"
                  style={{
                    transform: `translateY(${scrollY * 0.1}px)`
                  }}
                />
              </div>
              <h3 className="font-eurostile font-bold text-xl text-white mb-4 uppercase">MEASURE</h3>
              <p className="font-eurostile text-gray-300 text-sm leading-relaxed">
                What gets measured improves. We begin with data: occupancy rates, maintenance costs, and tenant satisfaction. Every decision starts from evidence, not guesswork.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="/src/assets/images/snshnhouse2.webp"
                  alt="Optimize"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <h3 className="font-eurostile font-bold text-xl text-white mb-4 uppercase">OPTIMIZE</h3>
              <p className="font-eurostile text-gray-300 text-sm leading-relaxed">
                Small changes create compounding results. We fine-tune the systems that drive profitability, efficiency, and tenant retention until your properties perform at their highest potential.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80"
                  alt="Be Consistent"
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
              <h3 className="font-eurostile font-bold text-xl text-white mb-4 uppercase">BE CONSISTENT</h3>
              <p className="font-eurostile text-gray-300 text-sm leading-relaxed">
                Real success is built on repetition. We help you create systems, structure, and accountability so your improvements do not fade they become your new standard.
              </p>
            </div>

          </div>
        </div>

        {/* Origin Story Section with Background Image */}
        <div className="relative w-full py-32 mb-24">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
              alt="Milwaukee"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <p className="font-eurostile text-yellow-400 uppercase text-sm tracking-wider mb-2">ORIGIN OF SNSHN</p>
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white mb-8">
              BUILT FOR THOSE WHO REFUSE TO SETTLE
            </h2>
            
            <div className="space-y-4 text-gray-200 font-eurostile leading-relaxed">
              <p>
                SNSHN was born from a simple observation: property owners invest heavily in acquisitions and renovations but rarely in the systems that govern long-term returns. We set out to change that.
              </p>
              <p>
                From Milwaukee community of investors, landlords, and real estate professionals, we built a company dedicated to measurable improvement combining technology, transparent communication, and proven management strategies in one seamless experience.
              </p>
              <p>
                The goal was never to be another property management company. It was to become the definitive choice for those serious about maximizing value, minimizing hassle, and building lasting wealth through real estate.
              </p>
            </div>
          </div>
        </div>

        {/* Future Section */}
        <div className="max-w-6xl mx-auto px-6 mb-24">
          <div className="text-center mb-16">
            <p className="font-eurostile text-yellow-400 uppercase text-sm tracking-wider mb-2">OUR FUTURE</p>
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white">
              ELEVATING THE STANDARD OF PROPERTY MANAGEMENT
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80"
                alt="Expansion"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="font-eurostile text-gray-300 text-sm leading-relaxed">
                  We are growing throughout Wisconsin designing services where precision management meets exceptional tenant experiences. Each new property brings the same commitment: advanced systems, transparent communication, and measurable results.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
                alt="Technology"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="font-eurostile text-gray-300 text-sm leading-relaxed">
                  From real-time maintenance tracking to AI-powered property assessments, our vision is to integrate smart technology into every aspect of management giving you personalized insights that compound over time.
                </p>
              </div>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                alt="Community"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="font-eurostile text-gray-300 text-sm leading-relaxed">
                  We are creating a network of property owners who share a common goal to invest better, manage smarter, and build stronger portfolios. Through education, collaboration, and innovation, we are elevating an entire community.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}