import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Blog() {
  const blogs = [
    {
      title: "SNSHN",
      description: "Expert tips, industry trends, and best practices for property owners and investors. Learn how to maximize returns and streamline your property management operations.",
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80",
      url: "https://www.snshn.co/blog1" // Replace with your actual blog URL
    },
    {
      title: "Beyond The Hump",
      description: "Everything tenants need to know about renting, maintenance requests, lease agreements, and making the most of their rental experience in Milwaukee.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      url: "https://www.snshn.co/blog2" // Replace with your actual blog URL
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 py-16">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-eurostile font-bold text-white mb-6 uppercase tracking-wide">
              OUR BLOGS
            </h1>
            <p className="text-lg md:text-xl font-eurostile text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Explore insights, tips, and resources for property management and renting in Milwaukee
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-zinc-900/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>

                <div className="p-8">
                  <h2 className="text-2xl md:text-3xl font-eurostile font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                    {blog.title}
                  </h2>
                  <p className="font-eurostile text-gray-300 leading-relaxed mb-6">
                    {blog.description}
                  </p>
                  <div className="flex items-center text-yellow-400 font-eurostile font-semibold uppercase text-sm">
                    <span>Visit Blog</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}