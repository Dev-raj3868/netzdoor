import { Link } from 'react-router-dom';
import { Code, Palette, Smartphone, ShoppingCart, Search, Settings } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development Services",
      description: "Build scalable, high-performance web applications tailored to your business needs using cutting-edge technologies and best practices.",
      features: ["React & Next.js Development", "Full-Stack Solutions", "API Development & Integration", "Database Design & Optimization"],
      price: "Starting from $2,999",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Smartphone,
      title: "App Development Services",
      description: "Create powerful mobile applications for iOS and Android platforms with seamless user experiences and robust functionality.",
      features: ["Cross-Platform Development", "Native App Development", "App Store Optimization", "Backend Integration"],
      price: "Starting from $4,999",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create stunning, user-centered designs that drive engagement and conversions through intuitive interfaces and exceptional user experiences.",
      features: ["User Research & Analysis", "Wireframing & Prototyping", "Visual Design Systems", "Usability Testing"],
      price: "Starting from $1,499",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Search,
      title: "Digital Marketing Services",
      description: "Boost your online presence and drive targeted traffic with comprehensive digital marketing strategies and campaigns.",
      features: ["Social Media Marketing", "Content Marketing", "PPC Advertising", "Email Marketing Campaigns"],
      price: "Starting from $1,299",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Improve your search engine rankings and drive organic traffic with comprehensive SEO strategies and technical optimizations.",
      features: ["Technical SEO Audits", "Content Strategy & Optimization", "Local SEO Implementation", "Performance Monitoring"],
      price: "Starting from $799",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Build powerful online stores with secure payment processing, inventory management, and analytics to boost your sales.",
      features: ["Custom E-commerce Platforms", "Payment Gateway Integration", "Inventory Management Systems", "Sales Analytics & Reporting"],
      price: "Starting from $3,999",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Settings,
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and performing optimally with our comprehensive maintenance and support services.",
      features: ["Security Updates & Monitoring", "Content Management", "Performance Optimization", "24/7 Technical Support"],
      price: "Starting from $299/month",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We conduct thorough research to understand your business goals, target audience, and technical requirements to create a detailed project roadmap."
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Our design team creates wireframes, mockups, and interactive prototypes that align with your brand identity and user experience goals."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "We build your solution using modern technologies and best practices, followed by comprehensive testing to ensure quality and performance."
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "After successful deployment, we provide ongoing support, maintenance, and optimization to ensure your continued success."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Comprehensive web development solutions designed to transform your digital presence and drive business growth
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-3d hover:shadow-xl transition-all duration-300 animate-scale-in border-0 bg-white/80 backdrop-blur-sm overflow-hidden group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4 group-hover:scale-110 transition-transform duration-200 mx-auto">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 text-center">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">{service.description}</p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-2xl font-bold gradient-text mb-4">{service.price}</div>
                    <Link to="/contact">
                      <Button className="w-full gradient-blue text-white hover:scale-105 transition-transform duration-200">
                        Get Quote
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">Our Development Process</h2>
            <p className="text-xl text-blue-200 animate-fade-in">
              A proven methodology that ensures project success and client satisfaction
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-white/30"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-blue-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-up">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 animate-fade-in">
              We deliver exceptional results through expertise, innovation, and dedication
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Development Team</h3>
              <p className="text-gray-600">Our skilled developers use the latest technologies and best practices to deliver high-quality solutions.</p>
            </div>
            
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Agile Methodology</h3>
              <p className="text-gray-600">We follow agile development practices to ensure flexibility, transparency, and timely delivery.</p>
            </div>
            
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">We provide round-the-clock support to ensure your website runs smoothly and efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your requirements and create something amazing together
          </p>
          <Link to="/contact">
            <Button className="gradient-blue text-white px-12 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-200 box-shadow-3d">
              Get Free Consultation
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
