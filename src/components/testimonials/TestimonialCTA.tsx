
import { Button } from '@/components/ui/button';

const TestimonialCTA = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Join Our Success Stories?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let's create something amazing together and add your testimonial to our collection
        </p>
        <Button className="gradient-blue text-white px-12 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-200 box-shadow-3d">
          Start Your Project Today
        </Button>
      </div>
    </section>
  );
};

export default TestimonialCTA;
