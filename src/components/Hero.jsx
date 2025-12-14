export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/mke.png" 
          alt="Milwaukee Background" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6 pt-20">
        <h1 className="text-5xl md:text-7xl font-eurostile font-bold mb-6 leading-tight">
          Welcome to SNSHN
        </h1>
        
        <p className="text-xl md:text-2xl font-eurostile text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          We're modernizing property management: better tenant engagement, better operational efficiency, and better returns for investors—without the noise.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#tenants"
            className="bg-white text-black font-eurostile font-semibold px-8 py-4 rounded-full hover:bg-gray-200 transition-all transform hover:scale-105"
          >
            Existing Tenants
          </a>
          <a
            href="#investors"
            className="bg-transparent border-2 border-white text-white font-eurostile font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all transform hover:scale-105"
          >
            For Investors
          </a>
          <a
            href="#brokerage"
            className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-eurostile font-semibold px-8 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition-all transform hover:scale-105"
          >
            Brokerage
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}