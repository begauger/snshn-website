import { Link } from 'react-router-dom';

export default function Ethos() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
      <style jsx>{`
        @font-face {
          font-family: 'Pirulen';
          src: url('/src/assets/fonts/pirulenrg.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white" style={{ fontFamily: 'Pirulen, sans-serif' }}>
            The SNSHN Ethos
          </h2>
          <p className="text-lg font-eurostile text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We believe in transparency, excellence, and treating every property like it is our own. Our commitment goes beyond management—we build lasting relationships and create value at every step.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:border-yellow-400/50">
            <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-eurostile font-semibold text-white mb-4">Transparency First</h3>
            <p className="font-eurostile text-gray-400 leading-relaxed">
              No hidden fees, no surprises. We believe in clear communication and honest pricing at every stage.
            </p>
          </div>

          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:border-yellow-400/50">
            <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-eurostile font-semibold text-white mb-4">Proactive Solutions</h3>
            <p className="font-eurostile text-gray-400 leading-relaxed">
              We anticipate needs before they become problems, keeping properties in top condition year-round.
            </p>
          </div>

          <div className="bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105 hover:border-yellow-400/50">
            <div className="w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-eurostile font-semibold text-white mb-4">Community Focused</h3>
            <p className="font-eurostile text-gray-400 leading-relaxed">
              We invest in the neighborhoods we serve, creating spaces where people want to live and thrive.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/about"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-semibold px-10 py-4 rounded-full transition-all duration-300 text-center"
          >
            Read Our Story
          </Link>
          <Link
            to="/team"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-block bg-zinc-900 hover:bg-zinc-800 text-white border border-yellow-400 font-eurostile font-semibold px-10 py-4 rounded-full transition-all duration-300 text-center"
          >
            Meet Our Team
          </Link>
          <a
            href="https://www.google.com/search?sca_esv=a0bb12506671175f&rlz=1C1RXQR_enUS1176US1176&sxsrf=AE3TifNYxU3t3mCqDzruhotIVt54ZE_R3A:1765745174149&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E1e3EgCjtcw_xsTMfTotAloZApz1SMFRaGhW-mlQt4zRPvqd8MMjHB4HE73EK_OSSoUw8R0yC_qK5G8WIlk1SeQPFnlmWB27FfWRrajtLAoXCpl1yfT51kdWoeXb6PeFIyvAAPk%3D&q=SNSHN+Management+%26+Realty+-+Milwaukee+Reviews&sa=X&ved=2ahUKEwiHzfmu-b2RAxVwM0QIHU0nBNEQ0bkNegQIJxAE&biw=1920&bih=945&dpr=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-zinc-900 hover:bg-zinc-800 text-white border border-yellow-400 font-eurostile font-semibold px-10 py-4 rounded-full transition-all duration-300 text-center"
          >
            Read Our Reviews
          </a>
        </div>
      </div>
    </section>
  );
}