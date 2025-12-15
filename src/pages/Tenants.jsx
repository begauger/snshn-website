import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Tenants() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        
        <div className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/images/snshnhouse1.webp" 
              alt="SNSHN Property" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide mb-6" style={{ fontFamily: 'Pirulen, sans-serif' }}>
              TENANT PORTAL
            </h1>
            <p className="text-lg md:text-xl font-eurostile text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Access your account, pay rent, and submit maintenance requests all in one place
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 py-16">
          
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-yellow-400 mb-6">AppFolio Resident Portal</h2>
            <p className="font-eurostile text-gray-300 leading-relaxed mb-8 max-w-2xl mx-auto">
              Manage your tenancy with ease through our secure online portal. Pay rent, view your lease, submit maintenance requests, and communicate with our team 24/7.
            </p>
            <a
              href="https://sunshinemgmt.appfolio.com/connect/users/sign_in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-12 py-4 rounded-full transition-all duration-300"
            >
              Login to Portal
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:border-yellow-400/50">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-eurostile font-semibold text-white mb-4">Pay Rent Online</h3>
              <p className="font-eurostile text-gray-400">
                Submit rent payments securely through the portal with multiple payment options available.
              </p>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:border-yellow-400/50">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-eurostile font-semibold text-white mb-4">Submit Requests</h3>
              <p className="font-eurostile text-gray-400">
                Easily submit and track maintenance requests with photo uploads and real-time status updates.
              </p>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:border-yellow-400/50">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-eurostile font-semibold text-white mb-4">View Documents</h3>
              <p className="font-eurostile text-gray-400">
                Access your lease, payment history, and important documents anytime from your secure portal.
              </p>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-br from-zinc-900/40 to-zinc-950/60 border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-eurostile font-bold text-white mb-6 text-center">Need Help?</h2>
            <p className="font-eurostile text-gray-300 leading-relaxed mb-6 text-center max-w-2xl mx-auto">
              Our team is here to assist you with any questions or concerns. Reach out anytime through the portal or contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:team@snshn.co"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a
                href="tel:2627355989"
                className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-yellow-400 text-white font-eurostile font-semibold px-8 py-3 rounded-full transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us
              </a>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}