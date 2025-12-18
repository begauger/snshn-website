import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PropertyAnalyzer from '../components/PropertyAnalyzer';

export default function DIYAnalyzer() {
  const [activeTab, setActiveTab] = useState('property-analyzer');

  const tools = {
    'property-analyzer': {
      title: 'Property Analyzer',
      image: '/analyzer.png',
      description: 'Upload a photo of any property issue or renovation project, and our AI-powered image analyzer instantly provides cost estimates, repair recommendations, and value impact assessments. Get expert guidance on the best approach to fix problems, understand potential returns on improvements, and receive clear next steps.',
      steps: [
        {
          number: 1,
          title: 'Take a Photo',
          description: 'Capture a clear image of the property damage, issue, or area you want to assess. Make sure the photo is well-lit and shows the full extent of the problem.'
        },
        {
          number: 2,
          title: 'Upload Your Image',
          description: 'Click the upload area or drag and drop your photo into the analyzer tool below. The AI will begin processing immediately.'
        },
        {
          number: 3,
          title: 'Get Instant Analysis',
          description: 'Within seconds, receive detailed cost estimates, recommended repair approaches, and value impact assessments from our AI system.'
        },
        {
          number: 4,
          title: 'Review & Take Action',
          description: 'Review the analysis results and follow the recommended next steps. Contact us for professional assistance with repairs if needed.'
        }
      ],
      embedPlaceholder: 'Property Analyzer Tool Will Be Embedded Here'
    },
    'investment-calculator': {
      title: 'Investment Calculator',
      image: '/calculator.png',
      description: 'Calculate potential returns on investment properties with our comprehensive financial analysis tool. Input property details, purchase price, expected rental income, and expenses to get detailed ROI projections, cash flow analysis, and cap rate calculations.',
      steps: [
        {
          number: 1,
          title: 'Enter Property Details',
          description: 'Input the purchase price, location, property type, and size to establish baseline metrics for your investment.'
        },
        {
          number: 2,
          title: 'Add Financial Data',
          description: 'Enter expected rental income, mortgage details, property taxes, insurance, and maintenance costs for accurate projections.'
        },
        {
          number: 3,
          title: 'Review Projections',
          description: 'Analyze detailed ROI calculations, cash flow forecasts, and break-even timelines to make informed decisions.'
        },
        {
          number: 4,
          title: 'Compare Scenarios',
          description: 'Adjust variables to see how different financing options or rental rates impact your investment returns.'
        }
      ],
      embedPlaceholder: 'Investment Calculator Tool Will Be Embedded Here'
    },
    'rent-estimator': {
      title: 'Rent Estimator',
      image: '/rent-estimate.png',
      description: 'Get accurate rental price estimates for any property in the Milwaukee area. Our AI analyzes comparable properties, neighborhood trends, and market conditions to provide data-driven rent recommendations that maximize your income while staying competitive.',
      steps: [
        {
          number: 1,
          title: 'Enter Property Address',
          description: 'Input the full address of your property to begin the analysis and access local market data.'
        },
        {
          number: 2,
          title: 'Add Property Features',
          description: 'Specify bedrooms, bathrooms, square footage, amenities, and recent upgrades to refine the estimate.'
        },
        {
          number: 3,
          title: 'Get Rent Estimate',
          description: 'Receive a detailed rent range based on current market conditions and comparable properties in your area.'
        },
        {
          number: 4,
          title: 'Optimize Your Listing',
          description: 'Use the insights to set competitive rental rates and understand what features tenants value most.'
        }
      ],
      embedPlaceholder: 'Rent Estimator Tool Will Be Embedded Here'
    }
  };

  const activeTool = tools[activeTab];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        {/* Full-Width Title Section Banner */}
        <div className="w-full bg-white/10 backdrop-blur-md border-b border-white/20 py-16 -mt-24 pt-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-pirulen font-bold text-white mb-6 uppercase tracking-wide">
                DIY TOOLS
              </h1>
              <p className="text-lg md:text-xl font-eurostile text-gray-300 leading-relaxed max-w-4xl mx-auto">
                Powerful AI-driven tools to help you analyze properties, calculate investments, and make data-informed decisions
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">

          {/* Tool Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(tools).map(([key, tool]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 rounded-full font-eurostile font-semibold transition-all duration-300 ${
                  activeTab === key
                    ? 'bg-yellow-400 text-black'
                    : 'bg-zinc-900 text-white border border-white/10 hover:border-yellow-400/50'
                }`}
              >
                {tool.title}
              </button>
            ))}
          </div>

          {/* Active Tool Display */}
          <div className="transition-all duration-500">
            
            {/* Tool Title & Description */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-pirulen font-bold text-white mb-4 uppercase">
                {activeTool.title}
              </h2>
              <p className="text-lg font-eurostile text-gray-300 leading-relaxed max-w-4xl mx-auto">
                {activeTool.description}
              </p>
            </div>

            {/* Two Column Layout - Image and Instructions */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              
              {/* Left Side - Image */}
              <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex items-center justify-center">
                <img 
                  src={activeTool.image}
                  alt={activeTool.title}
                  className="w-full h-auto rounded-lg"
                />
              </div>

              {/* Right Side - Instructions */}
              <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
                <h3 className="text-2xl md:text-3xl font-eurostile font-bold text-white mb-6 uppercase">
                  How to Use
                </h3>
                
                <div className="space-y-6">
                  {activeTool.steps.map((step) => (
                    <div key={step.number} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="font-eurostile font-bold text-black">{step.number}</span>
                      </div>
                      <div>
                        <h4 className="font-eurostile font-semibold text-white mb-2">{step.title}</h4>
                        <p className="font-eurostile text-gray-300 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Tool Embed Section */}
            <div className="bg-gradient-to-br from-zinc-900/40 to-zinc-950/60 border border-white/10 rounded-2xl p-12">
              <h3 className="text-2xl md:text-3xl font-eurostile font-bold text-white mb-6 text-center uppercase">
                Try the {activeTool.title}
              </h3>
              
              {/* Conditional Rendering - Only show PropertyAnalyzer for property-analyzer tab */}
              {activeTab === 'property-analyzer' ? (
                <PropertyAnalyzer />
              ) : (
                <div className="bg-black/50 border-2 border-dashed border-white/20 rounded-xl p-16 text-center">
                  <p className="font-eurostile text-gray-400 text-lg">
                    {activeTool.embedPlaceholder}
                  </p>
                  <p className="font-eurostile text-gray-500 text-sm mt-4">
                    Tool coming soon
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}