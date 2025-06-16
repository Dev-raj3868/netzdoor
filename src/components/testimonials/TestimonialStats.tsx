
const TestimonialStats = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="animate-slide-up">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-blue-200">Happy Clients</div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-blue-200">Satisfaction Rate</div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-blue-200">Projects Completed</div>
          </div>
          <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-white mb-2">24/7</div>
            <div className="text-blue-200">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialStats;
