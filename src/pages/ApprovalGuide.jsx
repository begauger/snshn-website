import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ApprovalGuide() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        
        <div className="text-center py-16 px-6 bg-gradient-to-b from-zinc-900 to-black">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide mb-6" style={{ fontFamily: 'Pirulen, sans-serif' }}>
            APPROVAL GUIDE
          </h1>
          <p className="text-lg md:text-xl font-eurostile text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about our application process
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 space-y-12">
            
            <div>
              <h2 className="text-3xl font-eurostile font-bold text-yellow-400 mb-6">Application Requirements</h2>
              <div className="space-y-6">
                <div className="bg-black/30 rounded-xl p-6 border border-white/5">
                  <h3 className="text-xl font-eurostile font-semibold text-white mb-3">Income Verification</h3>
                  <p className="font-eurostile text-gray-300 leading-relaxed mb-3">
                    Household income should be at least 3 times the monthly rent.
                  </p>
                  <ul className="list-disc list-inside space-y-2 font-eurostile text-gray-400">
                    <li>Recent pay stubs (last 2 months)</li>
                    <li>Tax returns or W-2 forms</li>
                    <li>Bank statements</li>
                    <li>Employment verification letter</li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-xl p-6 border border-white/5">
                  <h3 className="text-xl font-eurostile font-semibold text-white mb-3">Credit & Background</h3>
                  <p className="font-eurostile text-gray-300 leading-relaxed mb-3">
                    We conduct thorough screening to ensure quality tenancy.
                  </p>
                  <ul className="list-disc list-inside space-y-2 font-eurostile text-gray-400">
                    <li>Credit check (minimum score varies by property)</li>
                    <li>Criminal background check</li>
                    <li>Eviction history review</li>
                    <li>Rental history verification</li>
                  </ul>
                </div>

                <div className="bg-black/30 rounded-xl p-6 border border-white/5">
                  <h3 className="text-xl font-eurostile font-semibold text-white mb-3">References</h3>
                  <p className="font-eurostile text-gray-300 leading-relaxed">
                    Please provide contact information for previous landlords and personal or professional references.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-3xl font-eurostile font-bold text-yellow-400 mb-6">Move-In Costs</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-black/30 rounded-xl border border-white/5">
                  <span className="font-eurostile text-white font-semibold">First Month's Rent</span>
                  <span className="font-eurostile text-yellow-400">Due at signing</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-black/30 rounded-xl border border-white/5">
                  <span className="font-eurostile text-white font-semibold">Security Deposit</span>
                  <span className="font-eurostile text-yellow-400">Equal to one month's rent</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-black/30 rounded-xl border border-white/5">
                  <span className="font-eurostile text-white font-semibold">Application Fee</span>
                  <span className="font-eurostile text-yellow-400">Non-refundable</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8">
              <h2 className="text-3xl font-eurostile font-bold text-yellow-400 mb-6">Application Process</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yellow-400 font-eurostile font-bold text-2xl">1</span>
                  </div>
                  <h3 className="font-eurostile font-semibold text-white mb-2">Submit Application</h3>
                  <p className="font-eurostile text-gray-400 text-sm">Complete online application with required documents</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yellow-400 font-eurostile font-bold text-2xl">2</span>
                  </div>
                  <h3 className="font-eurostile font-semibold text-white mb-2">Screening Review</h3>
                  <p className="font-eurostile text-gray-400 text-sm">We review your application within 24-48 hours</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yellow-400 font-eurostile font-bold text-2xl">3</span>
                  </div>
                  <h3 className="font-eurostile font-semibold text-white mb-2">Move In</h3>
                  <p className="font-eurostile text-gray-400 text-sm">Sign lease and receive keys to your new home</p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/10 pt-8 text-center">
              <h2 className="text-2xl font-eurostile font-bold text-white mb-4">Ready to Apply?</h2>
              <p className="font-eurostile text-gray-300 mb-6">
                View our available properties and start your application today
              </p>
              <a
                href="/leasing"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-10 py-4 rounded-full transition-all duration-300"
              >
                View Available Properties
              </a>
            </div>

          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}