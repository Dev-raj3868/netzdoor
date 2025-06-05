import { Link } from 'react-router-dom';
import { Code, Smartphone, Search, ArrowRight, Check, Sparkles, Target, Users, Clock, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development Services",
      subtitle: "Build Future-Ready Websites",
      description: "Transform your digital presence with cutting-edge web applications built using the latest technologies and best practices.",
      features: [
        "React & Next.js Development",
        "Full-Stack Solutions",
        "API Development & Integration",
        "Database Design & Optimization",
        "Performance Optimization",
        "SEO-Friendly Development"
      ],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      image: "/lovable-uploads/21e08520-f156-475b-8bd9-c29b5fb08535.png"
    },
    {
      icon: Smartphone,
      title: "App Development Services", 
      subtitle: "Mobile-First Solutions",
      description: "Create powerful mobile applications that deliver exceptional user experiences across iOS and Android platforms.",
      features: [
        "Cross-Platform Development",
        "Native App Development", 
        "App Store Optimization",
        "Backend Integration",
        "Real-time Features",
        "Push Notifications"
      ],
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      image: "/lovable-uploads/4c72861c-238d-40ed-a121-084865730dc2.png"
    },
    {
      icon: Search,
      title: "Digital Marketing Services",
      subtitle: "Grow Your Online Presence",
      description: "Boost your brand visibility and drive targeted traffic with comprehensive digital marketing strategies and campaigns.",
      features: [
        "Social Media Marketing",
        "Content Marketing Strategy",
        "PPC Advertising Campaigns",
        "Email Marketing Automation",
        "SEO & Local SEO",
        "Analytics & Reporting"
      ],
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      image: "/lovable-uploads/8e51d388-9313-416a-8d73-195ae692139a.png"
    }
  ];

  const stats = [
    { number: "150+", label: "Projects Completed", icon: Target },
    { number: "98%", label: "Client Satisfaction", icon: Heart },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "50+", label: "Happy Clients", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="max-w-7xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 animate-bounce">
            <Sparkles className="h-4 w-4" />
            Premium Digital Solutions
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-6 animate-slide-up">
            Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in leading-relaxed">
            Transform your business with our comprehensive digital solutions designed to drive growth and success
          </p>
        </div>
      </section>
      
      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`relative overflow-hidden border-0 bg-gradient-to-br ${service.bgGradient} hover:shadow-2xl transition-all duration-500 group animate-scale-in transform hover:scale-105 hover:rotate-1`} style={{ animationDelay: `${index * 0.2}s` }}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 transform hover:rotate-2"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-lg animate-pulse`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-6 relative">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">{service.title}</CardTitle>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.subtitle}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6 relative">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-700 transform hover:translate-x-2 transition-transform duration-200">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center flex-shrink-0 animate-pulse`}>
                          <Check className="h-3 w-3 text-white" />
                        </div>
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-gray-200">
                    <Link to="/contact">
                      <Button className={`w-full bg-gradient-to-r ${service.gradient} text-white hover:scale-110 transition-all duration-300 group-hover:shadow-xl h-12 text-lg font-semibold transform hover:rotate-1`}>
                        Get Started
                        <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 animate-slide-up">Why Choose Us?</h2>
            <p className="text-xl text-gray-300 animate-fade-in">
              Trusted by businesses worldwide for exceptional results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up group transform hover:scale-110 transition-all duration-300" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="mb-4 flex justify-center">
                  <stat.icon className="h-12 w-12 text-blue-400 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions
          </p>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 text-xl font-semibold rounded-full hover:scale-110 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:rotate-1">
              Start Your Project Today
              <ArrowRight className="h-6 w-6 ml-3" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
