import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <style jsx>{`
        @font-face {
          font-family: 'Pirulen';
          src: url('/src/assets/fonts/pirulenrg.woff') format('woff');
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
      
      <nav className="max-w-7xl mx-auto px-8 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            
            <h1 className="text-xl font-bold tracking-[0.5em] text-yellow-400" style={{ fontFamily: 'Pirulen, sans-serif' }}>
              SNSHN
            </h1>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 ml-auto">
            
            <div 
              className="relative group"
            >
              <button className="text-base font-eurostile text-white hover:text-yellow-400 transition-colors duration-200 flex items-center gap-1">
                Services
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link 
                  to="/leasing"
                  className="block px-6 py-3 font-eurostile text-white hover:bg-yellow-400 hover:text-black transition-all duration-200"
                >
                  Leasing
                </Link>
                <Link 
                  to="/tenants"
                  className="block px-6 py-3 font-eurostile text-white hover:bg-yellow-400 hover:text-black transition-all duration-200"
                >
                  Tenants
                </Link>
                <Link 
                  to="/manage"
                  className="block px-6 py-3 font-eurostile text-white hover:bg-yellow-400 hover:text-black transition-all duration-200"
                >
                  Manage
                </Link>
                <Link 
                  to="/rehab"
                  className="block px-6 py-3 font-eurostile text-white hover:bg-yellow-400 hover:text-black transition-all duration-200"
                >
                  Rehab
                </Link>
              </div>
            </div>

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
              className="relative inline-flex items-center justify-center w-16 h-12 bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg transition-all duration-300 hover:scale-105 shadow-lg ml-4 group overflow-visible"
              title="DIY Property Analyzer"
            >
              {/* Toolbox Icon */}
              <svg 
                className="w-7 h-7 relative z-10" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M20 8h-3V6c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v10h20V10c0-1.1-.9-2-2-2zM9 6h6v2H9V6zm11 12H4v-3h2v1h2v-1h8v1h2v-1h2v3zm-2-5v-1h-2v1H8v-1H6v1H4v-3h16v3h-2z"/>
              </svg>
              
              {/* Sparkle 1 - Top Right */}
              <svg 
                className="absolute -top-1 -right-1 w-3 h-3 text-yellow-300 animate-pulse"
                style={{ animationDuration: '1.5s' }}
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/>
              </svg>
              
              {/* Sparkle 2 - Top Left */}
              <svg 
                className="absolute -top-0.5 -left-1 w-2.5 h-2.5 text-yellow-200 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ animationDuration: '2s', animationDelay: '0.3s' }}
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/>
              </svg>
              
              {/* Sparkle 3 - Bottom Right */}
              <svg 
                className="absolute -bottom-0.5 -right-0.5 w-2 h-2 text-yellow-300 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ animationDuration: '1.8s', animationDelay: '0.6s' }}
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.4 7.2L22 12l-7.6 2.8L12 22l-2.4-7.2L2 12l7.6-2.8z"/>
              </svg>
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden text-white z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <div className="space-y-2">
              <p className="text-sm font-eurostile text-yellow-400 px-4">Services</p>
              <Link 
                to="/leasing"
                className="block px-4 py-2 font-eurostile text-white hover:bg-yellow-400 hover:text-black transition-all duration-200 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Leasing
              </Link>
              <Link 
                to="/tenants"
                className="block px-4 py-2 font-eurostile text-white hover:bg-yellow-400 hover:text-black transition-all duration-200 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tenants
              </Link>
              <Link 
                to="/manage"
                className="block px-4 py-2 font-eurostile text-white hover:bg-yellow-400 hover:text-black transition-all duration-200 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Manage
              </Link>
              <Link 
                to="/rehab"
                className="block px-4 py-2 font-eurostile text-white hover:bg-yellow-400 hover:text-black transition-all duration-200 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Rehab
              </Link>
            </div>
            
            <Link 
              to="/contact" 
              className="block px-4 py-2 font-eurostile text-white hover:bg-yellow-400 hover:text-black transition-all duration-200 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/blog" 
              className="block px-4 py-2 font-eurostile text-white hover:bg-yellow-400 hover:text-black transition-all duration-200 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            
            <Link
              to="/diy-analyzer"
              className="flex items-center px-4 py-2 font-eurostile text-white hover:bg-yellow-400 hover:text-black transition-all duration-200 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
              DIY Analyzer
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}