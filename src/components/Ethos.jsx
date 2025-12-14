import { Link } from 'react-router-dom';

export default function Ethos() {
  return (
    <section className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="relative bg-gradient-to-br from-zinc-800/40 to-zinc-900/60 backdrop-blur-sm rounded-2xl p-12 md:p-16 shadow-2xl">
          
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-eurostile font-bold text-white mb-8 text-center">
              The SNSHN Ethos
            </h2>

            <div className="max-w-5xl mx-auto mb-10">
              <p className="text-lg md:text-xl font-eurostile text-gray-300 leading-relaxed font-light text-center">
                At SNSHN, we believe property management should be transparent, efficient, and built for the modern world. We combine technology, data, and genuine care to help tenants find homes they love and investors maximize their returns with confidence. Our system is built for those who seek clarity, quality, and measurable results. This is not about cutting corners or empty promises. It is about delivering excellence that endures.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/about"
                className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 font-eurostile font-semibold px-12 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 text-base"
              >
                Read Our Story
              </Link>
              <Link
                to="/contact"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-12 py-4 rounded-full transition-all duration-300 text-base"
              >
                Contact Us
              </Link>
              <Link
                to="/blog"
                className="inline-block bg-transparent border-2 border-yellow-400 text-yellow-400 font-eurostile font-semibold px-12 py-4 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 text-base"
              >
                Visit Our Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}