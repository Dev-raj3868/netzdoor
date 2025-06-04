
import { Users, Award, Target, Heart, Code, Palette, Zap, Globe, Calendar, TrendingUp, Clock, Shield } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const team = [
    {
      name: "Alex Johnson",
      role: "Lead Developer",
      image: "/lovable-uploads/d770ee38-0f3f-469e-89cb-84d2a82bed8e.png",
      bio: "Expert in React, Node.js, and modern web technologies"
    },
    {
      name: "Michael Chen",
      role: "Business Analyst",
      image: "/lovable-uploads/da92dc77-f35e-4e84-b141-0a14b78b7658.png",
      bio: "Data-driven insights and strategic planning specialist"
    },
    {
      name: "Sarah Wilson",
      role: "UI/UX Designer",
      image: "/lovable-uploads/90aaf4cb-d550-4baa-9e9c-fd480a1b0724.png",
      bio: "Creative designer focused on user-centered design and accessibility"
    },
    {
      name: "David Rodriguez",
      role: "Senior Consultant",
      image: "/lovable-uploads/f941d4af-0c75-489c-997f-5bd80a9c9097.png",
      bio: "Strategic advisor with 15+ years of industry experience"
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

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to transform digital experiences"
    },
    {
      year: "2020",
      title: "50+ Projects",
      description: "Reached our first major milestone of completed projects"
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew our team to include specialized experts"
    },
    {
      year: "2022",
      title: "100+ Clients",
      description: "Served over 100 satisfied clients globally"
    },
    {
      year: "2023",
      title: "Award Recognition",
      description: "Received industry awards for excellence in web development"
    },
    {
      year: "2024",
      title: "500+ Projects",
      description: "Celebrating over 500 successful project deliveries"
    }
  ];

  const achievements = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "5+ Years",
      subtitle: "In Business",
      description: "Consistently delivering quality solutions since 2019"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "98%",
      subtitle: "Success Rate",
      description: "Nearly perfect project completion and client satisfaction"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7",
      subtitle: "Support",
      description: "Round-the-clock assistance for all our clients"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "100%",
      subtitle: "Secure",
      description: "Enterprise-grade security for all projects"
    }
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

      {/* Company Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to industry recognition, here's how we've grown
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="card-3d hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold gradient-text mb-2">{milestone.year}</div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that speak to our commitment and success
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-3d hover:shadow-xl transition-all duration-300 animate-scale-in border-0 bg-white/80 backdrop-blur-sm text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6">
                  <div className="gradient-blue rounded-full w-16 h-16 flex items-center justify-center text-white mx-auto mb-4">
                    {achievement.icon}
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-1">{achievement.title}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-2">{achievement.subtitle}</div>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
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

      <Footer />
    </div>
  );
};

export default About;
