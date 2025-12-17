import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ResidentCoordinationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        
        {/* Hero Section */}
        <div className="relative w-full h-[400px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
            alt="Resident Coordination"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide mb-6" style={{ fontFamily: 'Pirulen, sans-serif' }}>
                RESIDENT COORDINATION
              </h1>
              <p className="text-lg md:text-xl font-eurostile text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Quick actions for appointments, keys, forms & support
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          
          {/* Intro Text */}
          <div className="text-center mb-16">
            <p className="text-lg font-eurostile text-gray-300 leading-relaxed max-w-4xl mx-auto">
              For current and future tenants to quickly schedule appointments, coordinate key pick-up, 
              update renter's insurance, complete digital move-in checklists, or submit general requests.
            </p>
          </div>

          {/* Action Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* Schedule Appointment */}
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-yellow-400/50">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-eurostile font-bold text-yellow-400 mb-3 uppercase">
                    Schedule Appointment
                  </h3>
                  <p className="font-eurostile text-gray-300 text-sm leading-relaxed mb-4">
                    Schedule your security deposit drop-off, sign and present documents, rent payments, etc.
                  </p>
                  <a
                    href="https://snshnapps.com/appointments"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-8 py-3 rounded-full transition-all duration-300 text-sm"
                  >
                    Schedule Appointment
                  </a>
                </div>
              </div>
            </div>

            {/* Schedule Key Pick Up */}
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-yellow-400/50">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-eurostile font-bold text-yellow-400 mb-3 uppercase">
                    Schedule Key Pick Up
                  </h3>
                  <p className="font-eurostile text-gray-300 text-sm leading-relaxed mb-4">
                    Schedule your key pick up. Choose contactless or set an appointment. All fees must be paid before pickup.
                  </p>
                  <a
                    href="https://snshnapps.com/key-pickup1.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-8 py-3 rounded-full transition-all duration-300 text-sm"
                  >
                    Schedule Key Pick Up
                  </a>
                </div>
              </div>
            </div>

            {/* Update Renter's Insurance */}
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-yellow-400/50">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-eurostile font-bold text-yellow-400 mb-3 uppercase">
                    Update Renter's Insurance
                  </h3>
                  <p className="font-eurostile text-gray-300 text-sm leading-relaxed mb-4">
                    Provide your renter's insurance information. Quick and easy online form.
                  </p>
                  <a
                    href="https://snshnapps.com/renters-insurance"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-8 py-3 rounded-full transition-all duration-300 text-sm"
                  >
                    Update Insurance
                  </a>
                </div>
              </div>
            </div>

            {/* Digital Check-In Sheet */}
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-yellow-400/50">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-eurostile font-bold text-yellow-400 mb-3 uppercase">
                    Digital Check-In Sheet
                  </h3>
                  <p className="font-eurostile text-gray-300 text-sm leading-relaxed mb-4">
                    Online tenant inspection form at move-in. Must be completed within 7 days of move-in.
                  </p>
                  <a
                    href="https://snshnapps.com/check-in-sheet1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-8 py-3 rounded-full transition-all duration-300 text-sm"
                  >
                    Open Check-In Sheet
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* General Complaint Ticket Section */}
          <div className="mb-16">
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-eurostile font-bold text-yellow-400 mb-4 uppercase">
                    General Complaint Ticket
                  </h2>
                  <p className="font-eurostile text-gray-300 leading-relaxed mb-6">
                    Submit a general concern, complaint, or issue not covered by other forms. Routed directly to management for appropriate follow-up.
                  </p>
                  <a
                    href="https://snshnapps.com/general-request-form"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-10 py-4 rounded-full transition-all duration-300 text-base"
                  >
                    Open Ticket
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Important Information Box */}
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-8 mb-12">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="font-eurostile font-bold text-yellow-400 text-lg mb-3">Important Information</h3>
                <ul className="font-eurostile text-gray-300 space-y-2 text-sm leading-relaxed">
                  <li>• Forms open in-page. If blocked, they will open in a new tab.</li>
                  <li>• Links open in a new tab. Check your browser's popup settings if nothing happens.</li>
                  <li>• All fees must be paid before key pickup can be scheduled.</li>
                  <li>• Digital check-in sheets must be completed within 7 days of move-in.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="text-center">
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