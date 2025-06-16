
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonialHero from '../components/testimonials/TestimonialHero';
import VideoTestimonials from '../components/testimonials/VideoTestimonials';
import TestimonialGrid from '../components/testimonials/TestimonialGrid';
import TestimonialStats from '../components/testimonials/TestimonialStats';
import TestimonialCTA from '../components/testimonials/TestimonialCTA';

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <TestimonialHero />
      <VideoTestimonials />
      <TestimonialGrid />
      <TestimonialStats />
      <TestimonialCTA />
      <Footer />
    </div>
  );
};

export default Testimonials;
