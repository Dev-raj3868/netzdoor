
import { Code, Palette, Smartphone, Search, ShoppingCart, Zap, Globe, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Custom Web Development",
      description: "Bespoke websites built from scratch using modern frameworks like React, Vue, and Angular",
      features: ["React & Next.js", "Vue.js", "Node.js Backend", "API Integration"],
      price: "Starting from $2,999"
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that provide exceptional user experiences",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting from $1,499"
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Responsive Design",
      description: "Mobile-first designs that work perfectly on all devices and screen sizes",
      features: ["Mobile Optimization", "Cross-browser Testing", "Performance Optimization", "PWA Development"],
      price: "Starting from $999"
    },
    {
      icon: <ShoppingCart className="h-12 w-12" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment integration and inventory management",
      features: ["Shopify & WooCommerce", "Payment Gateway", "Inventory Management", "Analytics"],
      price: "Starting from $3,999"
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "SEO Optimization",
      description: "Improve your search rankings and drive more organic traffic to your website",
      features: ["Technical SEO", "Content Optimization", "Performance Audit", "Local SEO"],
      price: "Starting from $799"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Website Maintenance",
      description: "Keep your website secure, updated, and performing at its best",
      features: ["Security Updates", "Content Updates", "Performance Monitoring", "Backup Management"],
      price: "Starting from $299/month"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project roadmap"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and visual designs that align with your brand"
    },
    {
      step: "03",
      title: "Development",
      description: "Building your website using the latest technologies and best practices"
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing followed by deployment and ongoing support"
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
            Comprehensive web development solutions to help your business thrive in the digital world
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
                  <div className="gradient-blue rounded-full w-20 h-20 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-200">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">{service.title}</CardTitle>
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
            <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">Our Process</h2>
            <p className="text-xl text-blue-200 animate-fade-in">
              A proven methodology that ensures project success
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
    </div>
  );
};

export default Services;
