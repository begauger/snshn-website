export default function OurResults() {
  const results = [
    {
      stat: "<5%",
      description: "Vacancy"
    },
    {
      stat: "4.8",
      icon: "★",
      description: "Over 600 Public Reviews"
    },
    {
      stat: "<3%",
      description: "Delinquincy"
    },
    {
      stat: "~9M ",
      description: "in collected rent a year"
    }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Side - Header */}
          <div>
            <h2 className="text-5xl md:text-6xl font-pirulen font-bold text-white uppercase tracking-wider">
              OUR RESULTS
            </h2>
          </div>

          {/* Right Side - Description */}
          <div>
            <p className="text-base md:text-lg font-eurostile text-gray-300 leading-relaxed">
              We measure everything that matters — tenant satisfaction, property performance, and investment returns. 
              Our clients consistently report better occupancy rates, higher tenant quality, and measurable improvements in property value.
            </p>
          </div>

        </div>

        {/* 2x2 Stats Grid - Full Width Below */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {results.map((result, index) => (
            <div 
              key={index} 
              className="border border-white/20 rounded-xl p-10 md:p-12 bg-gradient-to-br from-zinc-900/40 to-zinc-950/60 hover:from-zinc-900/60 hover:to-zinc-950/80 hover:border-white/40 transition-all duration-300 flex items-center gap-8"
            >
              {/* Large Stat Number on Left */}
              <h3 className="text-6xl md:text-7xl lg:text-8xl font-eurostile font-light text-yellow-400 whitespace-nowrap">
                {result.stat}{result.icon && <span className="ml-2">{result.icon}</span>}
              </h3>
              
              {/* Description on Right */}
              <p className="text-white font-eurostile text-sm md:text-base leading-relaxed uppercase tracking-wide font-light">
                {result.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}