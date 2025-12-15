import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DIYAnalyzer() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 py-16">
          
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-pirulen font-bold text-white mb-6 uppercase tracking-wide">
              DIY PROPERTY ANALYZER
            </h1>
            <p className="text-lg md:text-xl font-eurostile text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Upload a photo of any property issue or renovation project, and our AI-powered image analyzer instantly provides cost estimates, repair recommendations, and value impact assessments. Get expert guidance on the best approach to fix problems, understand potential returns on improvements, and receive clear next steps.
            </p>
          </div>

          {/* Two Column Layout - Image and Instructions */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            
            {/* Left Side - Image */}
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 flex items-center justify-center">
              <img 
                src="/analyzer.png"
                alt="Property Damage Assessment AI"
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Right Side - Instructions */}
            <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-10">
              <h2 className="text-2xl md:text-3xl font-eurostile font-bold text-white mb-6 uppercase">
                How to Use
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="font-eurostile font-bold text-black">1</span>
                  </div>
                  <div>
                    <h3 className="font-eurostile font-semibold text-white mb-2">Take a Photo</h3>
                    <p className="font-eurostile text-gray-300 text-sm leading-relaxed">
                      Capture a clear image of the property damage, issue, or area you want to assess. Make sure the photo is well-lit and shows the full extent of the problem.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="font-eurostile font-bold text-black">2</span>
                  </div>
                  <div>
                    <h3 className="font-eurostile font-semibold text-white mb-2">Upload Your Image</h3>
                    <p className="font-eurostile text-gray-300 text-sm leading-relaxed">
                      Click the upload area or drag and drop your photo into the analyzer tool below. The AI will begin processing immediately.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="font-eurostile font-bold text-black">3</span>
                  </div>
                  <div>
                    <h3 className="font-eurostile font-semibold text-white mb-2">Get Instant Analysis</h3>
                    <p className="font-eurostile text-gray-300 text-sm leading-relaxed">
                      Within seconds, receive detailed cost estimates, recommended repair approaches, and value impact assessments from our AI system.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                    <span className="font-eurostile font-bold text-black">4</span>
                  </div>
                  <div>
                    <h3 className="font-eurostile font-semibold text-white mb-2">Review & Take Action</h3>
                    <p className="font-eurostile text-gray-300 text-sm leading-relaxed">
                      Review the analysis results and follow the recommended next steps. Contact us for professional assistance with repairs if needed.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* AI Tool Embed Section - Placeholder for your link */}
          <div className="bg-gradient-to-br from-zinc-900/40 to-zinc-950/60 border border-white/10 rounded-2xl p-12">
            <h2 className="text-2xl md:text-3xl font-eurostile font-bold text-white mb-6 text-center uppercase">
              Try the Analyzer
            </h2>
            
            {/* This is where you'll insert your AI tool link/embed */}
            <div className="bg-black/50 border-2 border-dashed border-white/20 rounded-xl p-16 text-center">
              <p className="font-eurostile text-gray-400 text-lg">
                AI Analyzer Tool Will Be Embedded Here
              </p>
              <p className="font-eurostile text-gray-500 text-sm mt-4">
                Insert your analyzer link or embed code in this section
              </p>
            </div>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}