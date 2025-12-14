import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      title: "Rehab",
      description: "Restore, rehab, and rebuild properties to maximize value and market appeal with our comprehensive renovation services.",
      link: "#rehab"
    },
    {
      title: "Manage",
      description: "Full-service property management and investment services designed to optimize returns and minimize headaches.",
      link: "#manage"
    },
    {
      title: "Realty",
      description: "Expert brokerage services to help you buy, sell, and invest in properties with confidence and clarity.",
      link: "#realty"
    }
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions for property owners, investors, and tenants—backed by data, driven by results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}