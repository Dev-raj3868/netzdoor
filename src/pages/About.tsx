
import { Users, Award, Target, Heart, Code, Palette, Zap, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=400&q=80",
      bio: "10+ years in web development with expertise in React and Node.js"
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      bio: "Full-stack developer specializing in modern JavaScript frameworks"
    },
    {
      name: "Emily Rodriguez",
      role: "UI/UX Designer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80",
      bio: "Creative designer focused on user-centered design and accessibility"
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Infrastructure expert ensuring scalable and secure deployments"
    }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: "Quality First",
      description: "We never compromise on quality and always deliver excellence"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Client-Focused",
      description: "Your success is our success. We're committed to your goals"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Innovation",
      description: "We stay ahead with the latest technologies and best practices"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Passion",
      description: "We love what we do and it shows in every project we deliver"
    }
  ];

  const skills = [
    { name: "Frontend Development", percentage: 95 },
    { name: "Backend Development", percentage: 90 },
    { name: "UI/UX Design", percentage: 88 },
    { name: "Mobile Development", percentage: 85 },
    { name: "DevOps & Cloud", percentage: 82 },
    { name: "SEO & Marketing", percentage: 78 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                About <span className="gradient-text">Netzdoor</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We are a passionate team of developers, designers, and digital strategists 
                dedicated to creating exceptional web experiences that drive business growth.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 gradient-blue rounded-3xl transform -rotate-6 animate-pulse-slow"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80" 
                  alt="Team collaboration"
                  className="relative rounded-3xl shadow-2xl card-3d"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg card-3d">
                  <div className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-blue-600" />
                    <span className="font-semibold text-gray-900">Award Winning</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-3d hover:shadow-xl transition-all duration-300 animate-scale-in border-0 bg-white/80 backdrop-blur-sm text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="gradient-blue rounded-full w-16 h-16 flex items-center justify-center text-white mx-auto mb-4 hover:scale-110 transition-transform duration-200">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-white mb-6">Our Expertise</h2>
              <p className="text-xl text-blue-200 mb-8">
                We combine technical excellence with creative innovation to deliver 
                outstanding results across multiple domains.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Code className="h-6 w-6 text-blue-300" />
                  <span className="text-white">Clean Code</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Palette className="h-6 w-6 text-blue-300" />
                  <span className="text-white">Modern Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-blue-300" />
                  <span className="text-white">Fast Performance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-blue-300" />
                  <span className="text-white">Global Reach</span>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-blue-200">{skill.percentage}%</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-2">
                      <div 
                        className="bg-white rounded-full h-2 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented professionals who bring your vision to life
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-3d hover:shadow-xl transition-all duration-300 animate-scale-in border-0 bg-white/80 backdrop-blur-sm text-center overflow-hidden group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            To empower businesses with cutting-edge web solutions that not only look stunning 
            but also drive real results. We believe in the power of technology to transform 
            businesses and create meaningful connections between brands and their audiences.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
