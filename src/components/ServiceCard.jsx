export default function ServiceCard({ title, description, link }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-zinc-900 border border-white/10 hover:border-green-500/50 transition-all duration-300">
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-4 group-hover:text-green-400 transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 mb-6 leading-relaxed">
          {description}
        </p>
        <a
          href={link}
          className="inline-flex items-center text-sm font-semibold text-green-500 hover:text-green-400 transition-colors"
        >
          Learn More
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
}