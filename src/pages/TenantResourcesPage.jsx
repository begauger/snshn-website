import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TenantResourcesPage() {
  const leaseDocuments = [
    {
      title: "Residential Lease Template",
      description: "Complete residential lease agreement covering all terms and conditions",
      file: "/3_2_23_Residential_Lease_Template_Revised__Current___4_.pdf",
      icon: "📄"
    },
    {
      title: "Lead-Based Paint, Mold & Detectors",
      description: "Disclosure and information about lead-based paint, mold prevention, and smoke/CO detectors",
      file: "/LBPD__MOLD___amp__DETECTORS__2_.pdf",
      icon: "🏠"
    },
    {
      title: "Nonstandard Rental Provisions",
      description: "Additional rental terms including parking, garbage removal, and other policies",
      file: "/NONSTANDARD_RENTAL_PROVISIONS__10_.pdf",
      icon: "📋"
    },
    {
      title: "Required Insurance Addendum",
      description: "Information about required renter's insurance and liability coverage",
      file: "/REQUIRED_INSURANCE_ADDENDUM_TO_LEASE_AGREEMENT__3_.pdf",
      icon: "🛡️"
    },
    {
      title: "Bed Bug Addendum",
      description: "Bed bug prevention policies and tenant responsibilities",
      file: "/BED_BUG_ADDENDUM__3_.pdf",
      icon: "🐛"
    }
  ];

  const faqs = [
    {
      question: "When is rent due?",
      answer: "Rent is due on or before the 1st day of each month with a 4-day grace period. Late fees apply on the 6th day of the month."
    },
    {
      question: "How do I submit a maintenance request?",
      answer: "You can submit maintenance requests through your AppFolio tenant portal, or contact us directly at team@snshn.co or (262) 735-5989."
    },
    {
      question: "What utilities am I responsible for?",
      answer: "Utility responsibilities vary by property. Please refer to your lease agreement or the Nonstandard Rental Provisions addendum for specific details."
    },
    {
      question: "Do I need renter's insurance?",
      answer: "Yes, renter's insurance is required. You must provide proof of $100,000 liability coverage or we will automatically enroll you in our $15/month plan."
    },
    {
      question: "How much notice do I need to give before moving out?",
      answer: "You must provide 60 days written notice before the end of your lease term. Please include your forwarding address in the notice."
    },
    {
      question: "Are pets allowed?",
      answer: "Pets are allowed with written approval from SNSHN. Monthly pet fees are $25 for cats and $50 for dogs, plus a $250 additional security deposit."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        
        {/* Hero Section */}
        <div className="relative w-full h-[400px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1920&q=80"
            alt="Tenant Resources"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-wide mb-6" style={{ fontFamily: 'Pirulen, sans-serif' }}>
                TENANT RESOURCES
              </h1>
              <p className="text-lg md:text-xl font-eurostile text-gray-200 leading-relaxed max-w-3xl mx-auto">
                Everything you need to know about your lease, policies, and living with SNSHN
              </p>
            </div>
          </div>
        </div>

        {/* Lease Agreements Section */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white mb-4" style={{ fontFamily: 'Pirulen, sans-serif' }}>
              LEASE AGREEMENTS & DOCUMENTS
            </h2>
            <p className="text-lg font-eurostile text-gray-300">
              Download and review your lease documents and addendums
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {leaseDocuments.map((doc, index) => (
              <div
                key={index}
                className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:border-yellow-400/50"
              >
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{doc.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-eurostile font-bold text-yellow-400 mb-2">
                      {doc.title}
                    </h3>
                    <p className="font-eurostile text-gray-300 text-sm mb-4 leading-relaxed">
                      {doc.description}
                    </p>
                    <a
                      href={doc.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-transparent border-2 border-yellow-400 text-yellow-400 font-eurostile font-semibold px-6 py-2 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 text-sm"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      View Document
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white mb-4" style={{ fontFamily: 'Pirulen, sans-serif' }}>
              FREQUENTLY ASKED QUESTIONS
            </h2>
            <p className="text-lg font-eurostile text-gray-300">
              Quick answers to common tenant questions
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-yellow-400/50"
              >
                <h3 className="text-xl font-eurostile font-bold text-yellow-400 mb-3">
                  {faq.question}
                </h3>
                <p className="font-eurostile text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Important Contacts Section */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-gradient-to-br from-zinc-900/40 to-zinc-950/60 border border-white/10 rounded-2xl p-12">
            <h2 className="text-3xl font-eurostile font-bold text-white mb-8 text-center">
              Need More Help?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-eurostile font-bold text-white text-lg mb-2">Call Us</h3>
                <a href="tel:2627355989" className="font-eurostile text-yellow-400 hover:text-yellow-500 transition-colors">
                  (262) 735-5989
                </a>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-eurostile font-bold text-white text-lg mb-2">Email Us</h3>
                <a href="mailto:team@snshn.co" className="font-eurostile text-yellow-400 hover:text-yellow-500 transition-colors">
                  team@snshn.co
                </a>
              </div>
            </div>

            <div className="text-center">
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