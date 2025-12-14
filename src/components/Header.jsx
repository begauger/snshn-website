export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <img 
              src="/src/assets/images/snshntransparent.png" 
              alt="SNSHN Logo" 
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-3xl font-orbitron font-bold tracking-[0.3em] text-yellow-400">
              SNSHN
            </h1>
          </div>

          {/* Desktop Navigation - pushed right with more spacing */}
          <div className="hidden md:flex items-center space-x-12 ml-auto mr-8">
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
            <a 
              href="#contact" 
              className="text-base font-eurostile text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Contact
            </a>
            <a 
              href="#blog" 
              className="text-base font-eurostile text-white hover:text-yellow-400 transition-colors duration-200"
            >
              Blog
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="https://lease.snshn.co"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-eurostile font-medium px-7 py-3 rounded transition-all duration-200 text-sm"
            >
              BOOK ONLINE
            </a>
          </div>

          {/* Mobile Menu Button */}
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