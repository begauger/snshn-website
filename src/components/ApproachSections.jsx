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
              DIY Tools
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
              title="Try DIY Tools"
            >
              <svg 
                className="w-10 h-10" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10h20V10c0-1.1-.9-2-2-2zM9 6h6v2H9V6zm11 12H4v-3h2v1h2v-1h8v1h2v-1h2v3zm-2-5v-1h-2v1H8v-1H6v1H4v-3h16v3h-2z"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}