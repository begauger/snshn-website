import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleFAQClick = (e) => {
    e.preventDefault();
    navigate('/tenant-resources');
    // Small delay to ensure page loads before scrolling
    setTimeout(() => {
      const faqSection = document.getElementById('faq-section');
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <footer className="bg-zinc-950 border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          
          <div>
            <h3 className="text-xl font-eurostile font-semibold text-white mb-4">SNSHN</h3>
            <p className="font-eurostile text-gray-400 text-sm leading-relaxed">
              Elevating property management in Milwaukee through transparency, innovation, and unwavering commitment to excellence.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-eurostile font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="/tenant-resources#faq-section"
                onClick={handleFAQClick}
                className="block font-eurostile text-gray-400 hover:text-yellow-400 text-sm transition-colors"
              >
                FAQ
              </a>
              <Link
                to="/tenant-resources"
                onClick={() => window.scrollTo(0, 0)}
                className="block font-eurostile text-gray-400 hover:text-yellow-400 text-sm transition-colors"
              >
                Tenant Resources
              </Link>
              <Link
                to="/blog"
                onClick={() => window.scrollTo(0, 0)}
                className="block font-eurostile text-gray-400 hover:text-yellow-400 text-sm transition-colors"
              >
                Blog
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-eurostile font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <p className="font-eurostile text-gray-400 text-sm">
                PO BOX 1136<br />
                Milwaukee, WI
              </p>
              <a 
                href="tel:2627355989" 
                className="block font-eurostile text-yellow-400 hover:text-yellow-500 text-sm transition-colors"
              >
                (262) 735-5989
              </a>
              <a 
                href="mailto:team@snshn.co" 
                className="block font-eurostile text-yellow-400 hover:text-yellow-500 text-sm transition-colors"
              >
                team@snshn.co
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-eurostile font-semibold text-white mb-4">Hours</h3>
            <div className="space-y-2 font-eurostile text-gray-400 text-sm">
              <p>Mon - Fri: 8am - 6pm</p>
              <p>Sat: 10am - 4pm</p>
              <p>Sun: Closed</p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-eurostile text-gray-500 text-sm">
              © {new Date().getFullYear()} SNSHN Management & Realty. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link 
                to="/terms-of-service" 
                onClick={() => window.scrollTo(0, 0)}
                className="font-eurostile text-gray-500 hover:text-yellow-400 text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                to="/privacy-policy"
                onClick={() => window.scrollTo(0, 0)}
                className="font-eurostile text-gray-500 hover:text-yellow-400 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}