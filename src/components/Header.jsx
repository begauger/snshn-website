export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/src/assets/images/snshntransparent.png" 
              alt="SNSHN Logo" 
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-xl font-orbitron font-bold tracking-[0.5em] text-yellow-400">
              SNSHN
            </h1>
          </div>

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