import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Tenants() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        
        <div className="relative w-full h-[500px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
            alt="Tenant Resources"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide mb-6" style={{ fontFamily: 'Pirulen, sans-serif' }}>
                EXISTING TENANTS
              </h1>
              <p className="text-lg md:text-xl font-eurostile text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Quick actions for coordination, appeals, resources & login. Coordinate or schedule appointments with staff, notify us of late payments, and find answers to frequently asked questions.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16">
          
          <div className="mb-12 text-center">
            <a
              href="https://sunshinemgmt.appfolio.com/connect/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-12 py-4 rounded-full transition-all duration-300 text-lg"
            >
              AppFolio Login
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            <a
              href="/resident-coordination"
              className="group bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-eurostile font-bold text-white text-xl mb-4 uppercase group-hover:text-yellow-400 transition-colors">
                Resident Coordination
              </h3>
              <p className="font-eurostile text-gray-300 text-sm leading-relaxed">
                Schedule appointments and coordinate with our staff for any needs
              </p>
            </a>

            <a
              href="/promise-to-pay"
              className="group bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-eurostile font-bold text-white text-xl mb-4 uppercase group-hover:text-yellow-400 transition-colors">
                Late Payments
              </h3>
              <p className="font-eurostile text-gray-300 text-sm leading-relaxed">
                Notify us of payment delays and request payment arrangements
              </p>
            </a>

            <a
              href="/tenant-resources"
              className="group bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
            >
              <div className="w-20 h-20 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-eurostile font-bold text-white text-xl mb-4 uppercase group-hover:text-yellow-400 transition-colors">
                Tenant Resources
              </h3>
              <p className="font-eurostile text-gray-300 text-sm leading-relaxed">
                Find answers to frequently asked questions and helpful resources
              </p>
            </a>

          </div>
        </div>

        {/* Why SNSHN Section */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white mb-8 text-center" style={{ fontFamily: 'Pirulen, sans-serif' }}>
              WHY SNSHN?
            </h2>
            
            <div className="aspect-video bg-black rounded-xl overflow-hidden">
              <video 
                className="w-full h-full object-cover"
                controls
                poster="/why-snshn-thumbnail.jpg"
              >
                <source src="/why-snshn-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <p className="font-eurostile text-gray-300 text-center mt-6 leading-relaxed">
              Discover what makes SNSHN the best choice for your rental experience
            </p>
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}