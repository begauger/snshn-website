export default function MinimalWebsite() {
  const handleClick = () => {
    alert('Hello!');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome</h1>
          <p className="text-gray-600">A minimal website template</p>
        </div>
      </header>
      
      <main className="max-w-3xl mx-auto my-12 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Simple & Clean</h2>
        <p className="text-gray-700 mb-4">
          This is a minimal website with clean styling. You can customize this to fit your needs.
        </p>
        <p className="text-gray-700 mb-6">
          It includes basic React structure with Tailwind CSS styling for a professional look.
        </p>
        <button 
          onClick={handleClick}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Click Me
        </button>
      </main>
      
      <footer className="text-center py-8 text-gray-600">
        <p>&copy; 2025 Your Name</p>
      </footer>
    </div>
  );
}