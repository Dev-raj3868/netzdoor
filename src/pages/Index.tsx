
import { ArrowRight, Code, Palette, Smartphone, Zap, Star, Users, Award, CheckCircle, Globe, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Index = () => {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Development",
      description: "Tailored web solutions built with cutting-edge technologies"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Modern Design",
      description: "Beautiful, user-friendly interfaces that convert visitors"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Responsive Design",
      description: "Perfect performance across all devices and screen sizes"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Fast Performance",
      description: "Lightning-fast websites optimized for speed and SEO"
    }
  ];

  const stats = [
    { icon: <Users className="h-6 w-6" />, value: "500+", label: "Happy Clients" },
    { icon: <Code className="h-6 w-6" />, value: "1000+", label: "Projects Completed" },
    { icon: <Award className="h-6 w-6" />, value: "5+", label: "Years Experience" },
    { icon: <Star className="h-6 w-6" />, value: "98%", label: "Client Satisfaction" }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Proven Track Record",
      description: "Over 500 successful projects delivered across various industries"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support and communication"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security and 99.9% uptime guarantee"
    }
  ];

  const industries = [
    { name: "Education", count: "40%" },
    { name: "Healthcare", count: "25%" },
    { name: "E-commerce", count: "20%" },
    { name: "Technology", count: "15%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 text-shadow">
                Web Development
                <span className="block gradient-text">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your digital presence with our cutting-edge web development services. 
                We create stunning, high-performance websites that drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button className="gradient-blue text-white px-8 py-3 text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-200 box-shadow-3d">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" className="px-8 py-3 text-lg font-semibold rounded-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 gradient-blue rounded-3xl transform rotate-6 animate-pulse-slow"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden box-shadow-3d card-3d">
                  <img 
                    src="/lovable-uploads/2d3c803f-0ffc-4ecc-a2f6-b03735e11ca3.png" 
                    alt="Professional web development team member working on laptop"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-medium text-gray-700">Live Development</span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full bg-blue-600 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                        </div>
                        <p className="text-xs text-gray-600">Building your next amazing project...</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Netzdoor?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine creativity with technical expertise to deliver exceptional web solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-3d hover:shadow-xl transition-all duration-300 animate-scale-in border-0 bg-white/80 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="gradient-blue rounded-full w-16 h-16 flex items-center justify-center text-white mx-auto mb-4 hover:scale-110 transition-transform duration-200">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Businesses Trust Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence and innovation sets us apart in the industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-3d hover:shadow-xl transition-all duration-300 animate-scale-in border-0 bg-white/80 backdrop-blur-sm" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="gradient-blue rounded-full w-12 h-12 flex items-center justify-center text-white mr-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Industries We Serve</h2>
              <p className="text-xl text-gray-600 mb-8">
                From startups to enterprises, we've helped businesses across various industries 
                achieve their digital transformation goals.
              </p>
              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-lg font-medium text-gray-900">{industry.name}</span>
                    <div className="flex items-center space-x-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="gradient-blue h-2 rounded-full transition-all duration-1000"
                          style={{ width: industry.count }}
                        ></div>
                      </div>
                      <span className="text-sm text-gray-600 w-10">{industry.count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80" 
                  alt="Education Industry"
                  className="rounded-lg shadow-lg card-3d"
                />
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=400&q=80" 
                  alt="Healthcare Industry"
                  className="rounded-lg shadow-lg card-3d mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=400&q=80" 
                  alt="E-commerce Industry"
                  className="rounded-lg shadow-lg card-3d"
                />
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" 
                  alt="Technology Industry"
                  className="rounded-lg shadow-lg card-3d mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-white/80 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's bring your vision to life with a stunning website that delivers results
          </p>
          <Link to="/contact">
            <Button className="gradient-blue text-white px-12 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-200 box-shadow-3d">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
