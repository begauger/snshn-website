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

        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10 mb-16">
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white mb-6">
              Rental Application Criteria
            </h2>
            
            <p className="font-eurostile text-gray-300 mb-8 leading-relaxed">
              Once you have a home picked out and are ready to apply, please watch the video below to help explain our approval criteria. The process usually takes 1-3 days on average, however, can take longer if we are unable to verify income or rental history.
            </p>

            <div className="mb-8 bg-black/50 border border-white/20 rounded-xl aspect-video flex items-center justify-center">
              <p className="font-eurostile text-gray-400">
                [Rental Application Video Placeholder]
              </p>
            </div>

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

        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white mb-6">
              Preparing for Move-In
            </h2>
            
            <p className="font-eurostile text-gray-300 mb-8 leading-relaxed">
              Congratulations, you have been approved! Please watch the video below to outline the required tasks in your Pre-Move-In Checklist. We encourage you to sign your lease as soon as possible and submit your security deposit so we can remove your new home from our available listings.
            </p>

            <div className="mb-10 bg-black/50 border border-white/20 rounded-xl aspect-video flex items-center justify-center">
              <p className="font-eurostile text-gray-400">
                [Pre-Move-In Video Placeholder]
              </p>
            </div>

            <h3 className="font-eurostile font-semibold text-yellow-400 text-lg mb-6">
              Here is what comes next before we can officially welcome you home:
            </h3>

            <div className="space-y-8">
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="font-eurostile font-bold text-black text-xl">1</span>
                </div>
                <div>
                  <h4 className="font-eurostile font-bold text-white text-xl mb-2">Sign Your Lease</h4>
                  <p className="font-eurostile text-gray-300">
                    Check your email for a link to AppFolio, where you can review and sign your lease anytime.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="font-eurostile font-bold text-black text-xl">2</span>
                </div>
                <div>
                  <h4 className="font-eurostile font-bold text-white text-xl mb-2">Explore the App</h4>
                  <p className="font-eurostile text-gray-300">
                    Use your tenant portal to pay rent, view charges, and submit maintenance requests.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="font-eurostile font-bold text-black text-xl">3</span>
                </div>
                <div>
                  <h4 className="font-eurostile font-bold text-white text-xl mb-2">Pay Deposits & Fees</h4>
                  <p className="font-eurostile text-gray-300 mb-3">
                    Security deposits must be paid via <strong>money order</strong> made out to <strong>SNSHN</strong>. Rent and other fees can be paid through the app. Pet deposits apply if you are bringing a furry friend.
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

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="font-eurostile font-bold text-black text-xl">4</span>
                </div>
                <div>
                  <h4 className="font-eurostile font-bold text-white text-xl mb-2">Submit Renters Insurance</h4>
                  <p className="font-eurostile text-gray-300 mb-3">
                    Provide proof of your own policy before move-in, or we will auto-enroll you in our $15/month liability plan.
                  </p>
                  <a
                    href="https://snshnapps.com/renters-insurance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 font-eurostile font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 text-sm"
                  >
                    Update Renters Insurance
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="font-eurostile font-bold text-black text-xl">5</span>
                </div>
                <div>
                  <h4 className="font-eurostile font-bold text-white text-xl mb-2">Coordinate Key Pick-Up</h4>
                  <p className="font-eurostile text-gray-300 mb-3">
                    Keys are placed in a lockbox outside our office on your move-in day. We will text you the code! If needed, we will reach out to coordinate another method.
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

            <div className="mt-10 p-6 bg-black/30 border border-yellow-400/30 rounded-xl">
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