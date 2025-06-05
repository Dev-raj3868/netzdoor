
import { Button } from '@/components/ui/button';

const PortfolioCTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Have a Project in Mind?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's create something amazing together. Get in touch to discuss your project
        </p>
        <Button className="gradient-blue text-white px-12 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-200 box-shadow-3d">
          Start Your Project
        </Button>
      </div>
    </section>
  );
};

export default PortfolioCTA;
