
const PortfolioStats = () => {
  const stats = [
    { value: "34+", label: "Projects Completed" },
    { value: "15+", label: "Industries Served" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioStats;
