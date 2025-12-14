export default function PremiumLocation() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-eurostile font-bold text-white mb-6 uppercase tracking-wide">
            PREMIUM LOCATION
          </h2>
          <p className="text-base md:text-lg font-eurostile text-gray-400 max-w-3xl mx-auto leading-relaxed">
            SNSHN operates in Milwaukee's finest neighborhoods, designed to provide exceptional living experiences and quality property management.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          
          <div className="rounded-2xl overflow-hidden mb-8 border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=1200&q=80" 
              alt="Milwaukee Skyline" 
              className="w-full h-[400px] object-cover"
            />
          </div>

          <h3 className="text-3xl md:text-4xl font-eurostile font-bold text-white mb-6 uppercase tracking-wide text-center">
            MILWAUKEE
          </h3>

          <p className="text-base md:text-lg font-eurostile text-gray-300 leading-relaxed mb-10 text-center mx-auto">
            … is a city with woefully underestimated vibrance and soul. Whether it is the underappreciated food scene, or the beautiful architecture of historic neighborhoods, we have a lot to be proud of. With Wisconsin’s most-loved basketball and baseball teams residing within its borders (also previously unsung, until recently), the City is a natural attractant for all Wisconsinites and any American looking to enjoy the finer things of life. The SNSHN team aims to direct energy and investments with purpose in order to provide a strong and reliable investment for partners, while also serving a positively-minded community and historic city. We serve the people of Milwaukee, and the people of Milwaukee empower us to expand our vision and scale of impact. Thank you to all of our residents, investors, clients and partners for your involvement and support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=SNSHN+Milwaukee"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 font-eurostile font-semibold px-10 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 text-base uppercase tracking-wide text-center"
            >
              OUR REVIEWS
            </a>
            <a
              href="https://wa.me/2627355989"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-10 py-4 rounded-full transition-all duration-300 text-base uppercase tracking-wide text-center"
            >
              CONTACT US
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}