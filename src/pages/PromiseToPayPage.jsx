import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PromiseToPayPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        
        {/* Hero Section */}
        <div className="relative w-full h-[400px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1554224311-beee460ae6ba?w=1920&q=80"
            alt="Promise to Pay"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide mb-6" style={{ fontFamily: 'Pirulen, sans-serif' }}>
                RESIDENT ACTIONS
              </h1>
              <p className="text-lg md:text-xl font-eurostile text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Quick actions for payments & support
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          
          {/* Intro Text */}
          <div className="text-center mb-16">
            <p className="text-lg font-eurostile text-gray-300 leading-relaxed">
              Use the following form to provide notice of late rent and communicate a payment arrangement request.
            </p>
          </div>

          {/* Promise to Pay Card */}
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10 mb-12">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-eurostile font-bold text-yellow-400 mb-4 uppercase">
                  Promise to Pay (Late Payments)
                </h2>
                <p className="font-eurostile text-gray-300 leading-relaxed mb-6">
                  Late fees are added to your account on the 6th of each month. A formal 5-day "Notice to Vacate" will be processed by the 10th for residents who have not communicated and been approved for a Promise to Pay schedule.
                </p>
                <a
                  href="https://snshnapps.com/promise-to-pay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-10 py-4 rounded-full transition-all duration-300 text-base"
                >
                  Submit Promise to Pay
                </a>
              </div>
            </div>
          </div>

          {/* Important Information Box */}
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-8">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-eurostile font-bold text-yellow-400 text-lg mb-3">Important Information</h3>
                <ul className="font-eurostile text-gray-300 space-y-2 text-sm leading-relaxed">
                  <li>• Links open in a new tab. If nothing happens, check your browser's popup settings.</li>
                  <li>• Communication is key - reach out before the 10th to avoid formal notices.</li>
                  <li>• Payment arrangements must be requested and approved through the Promise to Pay form.</li>
                  <li>• Late fees begin accruing on the 6th of each month.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <h3 className="font-eurostile font-bold text-white text-xl mb-6">Need Assistance?</h3>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="tel:2627355989" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 font-eurostile transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (262) 735-5989
              </a>
              <a href="mailto:team@snshn.co" className="flex items-center gap-2 text-yellow-400 hover:text-yellow-500 font-eurostile transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                team@snshn.co
              </a>
            </div>
            
            <div className="mt-8">
              <p className="font-eurostile text-gray-400 text-sm mb-2">Office Hours</p>
              <p className="font-eurostile text-gray-300 text-sm">
                Mon-Fri: 8am - 6pm • Sat: 10am - 4pm
              </p>
            </div>
          </div>

        </div>

      </div>
      
      <Footer />
    </div>
  );
}