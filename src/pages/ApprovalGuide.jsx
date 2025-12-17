import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ApprovalGuide() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        
        <div className="text-center py-16 px-6 bg-gradient-to-b from-zinc-900 to-black">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide mb-6" style={{ fontFamily: 'Pirulen, sans-serif' }}>
            APPLICATION GUIDE
          </h1>
          <p className="text-lg md:text-xl font-eurostile text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Everything you need to know about applying and moving into your new home
          </p>
        </div>

        {/* Application Criteria Section */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10 mb-16">
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white mb-6">
              Rental Application Criteria
            </h2>
            
            <p className="font-eurostile text-gray-300 mb-8 leading-relaxed">
              Once you have a home picked out and are ready to apply, review our approval criteria below. The process usually takes 1-3 days on average, however, can take longer if we are unable to verify income or rental history.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="font-eurostile font-semibold text-yellow-400 text-lg mb-4">
                Application Criteria and Considerations:
              </h3>
              
              <div className="space-y-3">
                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-eurostile text-gray-300">
                    Net income should be greater than 3x rental amount (4x rental amount for group applications)
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-eurostile text-gray-300">
                    Income documents should be clear to read and understand
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-eurostile text-gray-300">
                    Credit score should be greater than 600 (average credit greater than 600 for group applications)
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-eurostile text-gray-300">
                    Bankruptcy within the past 5 years or unpaid judgements greater than $5k will be denied
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-eurostile text-gray-300">
                    Rental history should be verifiable; no outstanding balances or evictions in the last 5 years
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-eurostile text-gray-300">
                    All adult occupants must apply
                  </p>
                </div>

                <div className="flex gap-3">
                  <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-eurostile text-gray-300">
                    Deceptive, missing, or unverifiable information are common reasons for denial or cancelation. Please use accurate and complete information.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/leasing"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-12 py-4 rounded-full transition-all duration-300"
              >
                Find Your Home Now!
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="border-t border-white/10"></div>
        </div>

        {/* Pre-Move-In Checklist Section */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white mb-6">
              Pre-Move-In Checklist
            </h2>
            
            <p className="font-eurostile text-gray-300 mb-8 leading-relaxed">
              Congratulations, you've been approved! Here's what comes next before we can officially welcome you home. We encourage you to sign your lease as soon as possible and submit your security deposit so we can remove your new home from our available listings.
            </p>

            <div className="space-y-6">
              
              {/* Checklist Item 1 */}
              <div className="bg-black/30 border border-white/10 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="font-eurostile font-bold text-black text-lg">1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-eurostile font-bold text-white text-xl mb-2">Sign Your Lease</h4>
                    <p className="font-eurostile text-gray-300 text-sm">
                      Check your email for a link to AppFolio, where you can review and sign your lease anytime.
                    </p>
                  </div>
                </div>
              </div>

              {/* Checklist Item 2 */}
              <div className="bg-black/30 border border-white/10 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="font-eurostile font-bold text-black text-lg">2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-eurostile font-bold text-white text-xl mb-2">Explore the App</h4>
                    <p className="font-eurostile text-gray-300 text-sm">
                      Use your tenant portal to pay rent, view charges, and submit maintenance requests.
                    </p>
                  </div>
                </div>
              </div>

              {/* Checklist Item 3 */}
              <div className="bg-black/30 border border-white/10 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="font-eurostile font-bold text-black text-lg">3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-eurostile font-bold text-white text-xl mb-3">Pay Deposits & Fees</h4>
                    <p className="font-eurostile text-gray-300 text-sm mb-4">
                      Security deposits must be paid via <strong className="text-yellow-400">money order</strong> made out to <strong className="text-yellow-400">SNSHN</strong>. Rent and other fees can be paid through the app. Pet deposits apply if you're bringing a furry friend.
                    </p>
                    <a
                      href="https://snshnapps.com/appointments"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 font-eurostile font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 text-sm"
                    >
                      Schedule Deposit Dropoff
                    </a>
                  </div>
                </div>
              </div>

              {/* Checklist Item 4 */}
              <div className="bg-black/30 border border-white/10 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="font-eurostile font-bold text-black text-lg">4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-eurostile font-bold text-white text-xl mb-3">Submit Renter's Insurance</h4>
                    <p className="font-eurostile text-gray-300 text-sm mb-4">
                      Provide proof of your own policy before move-in, or we'll auto-enroll you in our $15/month liability plan.
                    </p>
                    <a
                      href="https://snshnapps.com/renters-insurance"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 font-eurostile font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 text-sm"
                    >
                      Update Renter's Insurance
                    </a>
                  </div>
                </div>
              </div>

              {/* Checklist Item 5 */}
              <div className="bg-black/30 border border-white/10 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="font-eurostile font-bold text-black text-lg">5</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-eurostile font-bold text-white text-xl mb-3">Coordinate Key Pick-Up</h4>
                    <p className="font-eurostile text-gray-300 text-sm mb-4">
                      Keys are placed in a lockbox outside our office on your move-in day. We'll text you the code! If needed, we'll reach out to coordinate another method.
                    </p>
                    <a
                      href="https://snshnapps.com/key-pickup"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 font-eurostile font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 text-sm"
                    >
                      Schedule Key Pick Up
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-10 p-6 bg-yellow-400/10 border border-yellow-400/30 rounded-xl">
              <p className="font-eurostile text-gray-300 text-center">
                Questions? Reach out to your leasing agent or message our virtual assistant.
              </p>
            </div>
          </div>
        </div>

      </div>
      
      <Footer />
    </div>
  );
}