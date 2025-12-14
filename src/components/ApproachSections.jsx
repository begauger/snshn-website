import { Link } from 'react-router-dom';

export default function ApproachSections() {
  return (
    <>
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80" 
            alt="Modern Property Management" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-pirulen font-bold text-white mb-6 uppercase tracking-wide">
              MODERN AND SCIENTIFIC APPROACH
            </h2>
            <p className="text-base md:text-lg font-eurostile text-gray-200 leading-relaxed mb-4">
              Our philosophy is rooted in data-driven decision making and cutting-edge property management technology from automated tenant screening to predictive maintenance analytics.
            </p>
            <p className="text-base md:text-lg font-eurostile text-gray-200 leading-relaxed">
              We translate industry insights into practical, measurable systems designed for one goal: helping you maximize returns and minimize hassle, every day, for many years to come.
            </p>
          </div>
        </div>
      </section>

      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80" 
            alt="AI Property Analysis" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-3xl mx-auto px-6 md:px-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-pirulen font-bold text-white mb-6 uppercase tracking-wide">
              DIY PROPERTY ANALYZER
            </h2>
            <p className="text-base md:text-lg font-eurostile text-gray-200 leading-relaxed mb-4">
              Upload a photo of any property issue or renovation project, and our AI-powered image analyzer instantly provides cost estimates, repair recommendations, and value impact assessments.
            </p>
            <p className="text-base md:text-lg font-eurostile text-gray-200 leading-relaxed mb-6">
              Get expert guidance on the best approach to fix problems, understand potential returns on improvements, and receive clear next steps all in seconds.
            </p>
            
            <Link
              to="/diy-analyzer"
              className="inline-flex items-center justify-center w-20 h-20 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              title="Try AI Analyzer"
            >
              <svg 
                className="w-10 h-10" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}