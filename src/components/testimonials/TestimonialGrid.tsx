
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialGrid = () => {
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

  return (
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
  );
};

export default TestimonialGrid;
