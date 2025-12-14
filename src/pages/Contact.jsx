import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 py-16">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-pirulen font-bold text-white mb-6 uppercase tracking-wide">
              GET IN TOUCH
            </h1>
            <p className="text-lg md:text-xl font-eurostile text-gray-300 leading-relaxed">
              We love speaking with new and curious people
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-yellow-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-eurostile font-semibold text-white mb-2 uppercase text-sm">Email</h3>
              <a href="mailto:team@snshn.co" className="font-eurostile text-yellow-400 hover:text-yellow-500 transition-colors">
                team@snshn.co
              </a>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-yellow-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-eurostile font-semibold text-white mb-2 uppercase text-sm">Call</h3>
              <a href="tel:2627355989" className="font-eurostile text-yellow-400 hover:text-yellow-500 transition-colors">
                (262) 735-5989
              </a>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center hover:border-yellow-400/30 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="font-eurostile font-semibold text-white mb-2 uppercase text-sm">Text</h3>
              <a href="sms:5082527999" className="font-eurostile text-yellow-400 hover:text-yellow-500 transition-colors">
                (508) 252-7999
              </a>
            </div>

          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
              <h3 className="font-eurostile font-semibold text-white mb-4 uppercase text-sm tracking-wide">
                Office Information
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-eurostile text-gray-400 text-xs uppercase mb-2">Mailing Address</h4>
                  <p className="font-eurostile text-gray-300 leading-relaxed">
                    SNSHN CO<br />
                    PO Box 1136<br />
                    Milwaukee, WI 53201-1136
                  </p>
                </div>
                <div>
                  <h4 className="font-eurostile text-gray-400 text-xs uppercase mb-2">Hours</h4>
                  <div className="font-eurostile text-gray-300 space-y-1 text-sm">
                    <p>Monday - Friday: 8am - 6pm</p>
                    <p>Saturday: 10am - 4pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
              <h3 className="font-eurostile font-semibold text-white mb-4 uppercase text-sm tracking-wide">
                When Calling
              </h3>
              <div className="space-y-3 text-lg">
                <div className="font-eurostile text-gray-300">
                  <span className="text-yellow-400 font-semibold">Press 1:</span> Maintenance and Work Orders
                </div>
                <div className="font-eurostile text-gray-300">
                  <span className="text-yellow-400 font-semibold">Press 2:</span> Resident Operations
                </div>
                <div className="font-eurostile text-gray-300">
                  <span className="text-yellow-400 font-semibold">Press 3:</span> Leasing
                </div>
                <div className="font-eurostile text-gray-300">
                  <span className="text-yellow-400 font-semibold">Press 4:</span> Buying/Selling/Investing
                </div>
              </div>
            </div>

          </div>

          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
            <h3 className="font-eurostile font-semibold text-white mb-8 uppercase text-sm tracking-wide text-center">
              Send Us a Message
            </h3>
            
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-eurostile text-gray-300 text-sm mb-2">
                    First Name <span className="text-yellow-400">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="firstName"
                    required
                    className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 font-eurostile text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-eurostile text-gray-300 text-sm mb-2">
                    Last Name <span className="text-yellow-400">*</span>
                  </label>
                  <input 
                    type="text" 
                    name="lastName"
                    required
                    className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 font-eurostile text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-eurostile text-gray-300 text-sm mb-2">
                  Email Address <span className="text-yellow-400">*</span>
                </label>
                <input 
                  type="email" 
                  name="email"
                  required
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 font-eurostile text-white focus:border-yellow-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-4 gap-6">
                <div className="md:col-span-1">
                  <label className="block font-eurostile text-gray-300 text-sm mb-2">
                    Country
                  </label>
                  <select 
                    name="country"
                    className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 font-eurostile text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="MX">Mexico</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="md:col-span-3">
                  <label className="block font-eurostile text-gray-300 text-sm mb-2">
                    Phone Number <span className="text-yellow-400">*</span>
                  </label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="+1"
                    required
                    className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 font-eurostile text-white focus:border-yellow-400 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-eurostile text-gray-300 text-sm mb-2">
                  Message <span className="text-yellow-400">*</span>
                </label>
                <textarea 
                  name="message"
                  rows="5"
                  required
                  className="w-full bg-black border border-white/20 rounded-lg px-4 py-3 font-eurostile text-white focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-16 py-4 rounded-lg transition-all duration-300 text-base uppercase tracking-wide"
                >
                  SUBMIT
                </button>
              </div>

              <p className="text-xs font-eurostile text-gray-400 leading-relaxed mt-6">
                By clicking Submit, I agree to receive recurring informational SMS, MMS, or Email messages from SNSHN. I authorize you to send me text messages on my mobile phone or landline. I understand that consenting to receive SMS messages is not a condition of purchase or service. This is a standard rate subscription service available on most carriers, Msg and Data Rates May Apply. Service will continue until customer cancels. Messaging frequency may vary. Subscriptions may be cancelled by texting STOP. You may request additional information by texting HELP or emailing team@snshn.co
              </p>

            </form>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}