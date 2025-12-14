import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-8 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/src/assets/images/snshntransparent.png" 
              alt="SNSHN Logo" 
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-xl font-orbitron font-bold tracking-[0.5em] text-yellow-400">
              SNSHN
            </h1>
          </Link>

          <div className="hidden md:flex items-center space-x-10 ml-auto">
            <a 
              href="#leasing" 
              className="text-base font-eurostile text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Leasing
            </a>
            <a 
              href="#tenants" 
              className="text-base font-eurostile text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Tenants
            </a>
            <a 
              href="#manage" 
              className="text-base font-eurostile text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Manage
            </a>
            <Link 
              to="/contact" 
              className="text-base font-eurostile text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Contact
            </Link>
            <Link 
              to="/blog" 
              className="text-base font-eurostile text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Blog
            </Link>
            
            <Link
              to="/diy-analyzer"
              className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400 hover:bg-yellow-500 text-black rounded-full transition-all duration-300 hover:scale-110 shadow-lg ml-4"
              title="DIY Property Analyzer"
            >
              <svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </Link>
          </div>

          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}