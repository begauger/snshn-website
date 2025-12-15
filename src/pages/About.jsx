import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        
        <div className="relative min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/images/snshnlogo4.png" 
              alt="SNSHN Background" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-black/70"></div>
          </div>
          <div className="relative z-10 text-center px-6">
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide mb-6" 
              style={{ 
                fontFamily: 'Pirulen, sans-serif',
                textShadow: '0 10px 30px rgba(0,0,0,0.9), 0 0 60px rgba(0,0,0,0.8)'
              }}
            >
              ABOUT US
            </h1>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16">
          
          <div className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-yellow-400 mb-6">Our Philosophy</h2>
                <p className="font-eurostile text-gray-300 leading-relaxed mb-4">
                  At SNSHN, we believe in creating more than just rental properties—we build communities and lasting relationships. Our approach combines transparency, innovation, and a deep commitment to excellence in every aspect of property management.
                </p>
                <p className="font-eurostile text-gray-300 leading-relaxed">
                  We understand that managing property is about more than collecting rent. It's about maintaining value, fostering trust, and creating spaces where people feel at home.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-white/10">
                <img 
                  src="/images/snshnreallogo.png" 
                  alt="SNSHN Real Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white text-center mb-12">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center h-48">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-eurostile font-semibold text-white mb-3">INTEGRITY</h3>
              </div>

              <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center h-48">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-eurostile font-semibold text-white mb-3">INNOVATION</h3>
              </div>

              <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center h-48">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-eurostile font-semibold text-white mb-3">MEASURE</h3>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white text-center mb-8">Our Origin</h2>
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              <p className="font-eurostile text-gray-300 leading-relaxed mb-6">
                SNSHN was founded with a simple vision: to revolutionize property management in Milwaukee by putting people first. What started as a passion project has grown into a trusted name in real estate management, known for our innovative approach and unwavering commitment to quality.
              </p>
              <p className="font-eurostile text-gray-300 leading-relaxed">
                Today, we manage a diverse portfolio of properties across Milwaukee, each one maintained to the highest standards. Our team brings together decades of combined experience in real estate, property management, and customer service.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white text-center mb-8">Looking Forward</h2>
            <div className="bg-gradient-to-br from-zinc-900/40 to-zinc-950/60 border border-white/10 rounded-2xl p-8 md:p-12 text-center">
              <p className="font-eurostile text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                As we continue to grow, our commitment remains unchanged: to provide exceptional service, maintain the highest standards, and create value for property owners and tenants alike. We're not just managing properties—we're building the future of Milwaukee real estate.
              </p>
              <a
                href="/contact"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-10 py-4 rounded-full transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}