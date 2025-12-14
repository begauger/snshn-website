export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-eurostile font-bold mb-4">SNSHN</h3>
            <p className="text-gray-400 font-eurostile text-sm leading-relaxed">
              Modernizing property management with better engagement, efficiency, and returns.
            </p>
          </div>

          {/* Navigate Column */}
          <div>
            <h4 className="font-eurostile font-semibold mb-4 text-sm uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 font-eurostile hover:text-white transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#leasing" className="text-gray-400 font-eurostile hover:text-white transition-colors text-sm">
                  Leasing
                </a>
              </li>
              <li>
                <a href="#tenants" className="text-gray-400 font-eurostile hover:text-white transition-colors text-sm">
                  Tenants
                </a>
              </li>
              <li>
                <a href="#manage" className="text-gray-400 font-eurostile hover:text-white transition-colors text-sm">
                  Management
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-eurostile font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400 font-eurostile">
                PO BOX 1136<br />
                Milwaukee, WI<br />
                United States
              </li>
              <li>
                <a href="tel:2627355989" className="text-gray-400 font-eurostile hover:text-white transition-colors">
                  (262) 735-5989
                </a>
              </li>
              <li>
                <a href="mailto:team@snshn.co" className="text-gray-400 font-eurostile hover:text-white transition-colors">
                  team@snshn.co
                </a>
              </li>
            </ul>
          </div>

          {/* Hours Column */}
          <div>
            <h4 className="font-eurostile font-semibold mb-4 text-sm uppercase tracking-wider">Hours</h4>
            <ul className="space-y-2 text-sm text-gray-400 font-eurostile">
              <li>Mon - Fri: 8am - 6pm</li>
              <li>Saturday: 10am - 4pm</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-eurostile text-sm">
            © 2025 SNSHN. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-gray-500 font-eurostile hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-500 font-eurostile hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}