
import { Star, Quote } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      image: "/lovable-uploads/0a4a5326-e33b-4d21-a1bd-44417f89fd79.png",
      rating: 5,
      text: "Netzdoor transformed our online presence completely. Their attention to detail and modern design approach exceeded our expectations."
    },
    {
      name: "Michael Chen",
      position: "Founder, Digital Solutions",
      image: "/lovable-uploads/91bb677b-258d-479a-8dd7-3e5255b733e5.png",
      rating: 5,
      text: "The team at Netzdoor delivered our e-commerce platform on time and within budget. The results speak for themselves - 300% increase in sales!"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, Creative Hub",
      image: "/lovable-uploads/0a4a5326-e33b-4d21-a1bd-44417f89fd79.png",
      rating: 5,
      text: "Working with Netzdoor was a game-changer for our business. They understood our vision and brought it to life beautifully."
    },
    {
      name: "David Thompson",
      position: "Owner, Local Bistro",
      image: "/lovable-uploads/02353ee8-86fa-45f3-8d05-b7137187f750.png",
      rating: 5,
      text: "Our restaurant's website now perfectly reflects our brand. The online reservation system has streamlined our operations significantly."
    },
    {
      name: "Lisa Park",
      position: "Director, Health & Wellness",
      image: "/lovable-uploads/0a4a5326-e33b-4d21-a1bd-44417f89fd79.png",
      rating: 5,
      text: "The responsive design works flawlessly across all devices. Our clients love the new patient portal and booking system."
    },
    {
      name: "James Wilson",
      position: "CTO, Innovation Labs",
      image: "/lovable-uploads/2d3c803f-0ffc-4ecc-a2f6-b03735e11ca3.png",
      rating: 5,
      text: "Netzdoor's technical expertise is outstanding. They integrated complex APIs seamlessly and delivered a robust platform."
    }
  ];

  const videoTestimonials = [
    {
      id: "KCZYlHG35SI",
      title: "Client Success Story - E-commerce Platform",
      client: "TechStart Inc."
    },
    {
      id: "7NEr7RAqhOo",
      title: "Digital Transformation Journey",
      client: "Digital Solutions"
    },
    {
      id: "nkuxXpMj6uQ",
      title: "Modern Web Development Process",
      client: "Innovation Labs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            Client <span className="gradient-text">Testimonials</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Hear what our satisfied clients have to say about their experience working with Netzdoor
          </p>
        </div>
      </section>

      {/* Video Carousel Section - 3 videos per row */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">
              Watch how we've helped transform businesses through innovative web solutions
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {videoTestimonials.map((video, index) => (
              <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="relative rounded-3xl overflow-hidden card-3d mb-4">
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600">{video.client}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid - 3 testimonials per row */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Real feedback from real businesses we've helped grow
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-3d hover:shadow-xl transition-all duration-300 animate-scale-in border-0 bg-white/80 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-blue-600 mb-4" />
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                  
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mt-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
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

      {/* CTA Section */}
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

      <Footer />
    </div>
  );
};

export default Testimonials;
