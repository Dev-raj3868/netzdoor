import { ExternalLink, Github, Eye } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Codingrad",
      description: "Comprehensive coding education platform with interactive courses, live sessions, and progress tracking",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      category: "Education",
      liveUrl: "https://codingradweb.graphy.com/",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "YK Technologies",
      description: "Technology solutions and educational platform for digital transformation",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      category: "Education",
      liveUrl: "https://yogeshkumar6203.graphy.com/",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "CelestLife",
      description: "Wellness and lifestyle platform for holistic health solutions",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Express", "MySQL", "Stripe"],
      category: "Healthcare",
      liveUrl: "https://www.celestlife.com/",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "The School of Bass",
      description: "Online music education platform for bass guitar lessons in Hindi",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      category: "Education",
      liveUrl: "https://www.theschoolofbass.in/s/store/courses/description/Bass-guitar-lessons-for-beginners-in-Hindi",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Coach Nikhil Gambhir",
      description: "Personal coaching and fitness training platform",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "Fitness",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Neuron Nursing Academy",
      description: "Comprehensive nursing education and training platform",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      category: "Education",
      liveUrl: "https://www.neuronnursingacademy.com/",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "Louise Hay",
      description: "Educational platform for personal development and wellness",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Express", "MongoDB", "Stripe"],
      category: "Education",
      liveUrl: "https://www.infoworldeducation.com/",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "Language Veda",
      description: "Language learning platform with comprehensive courses",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      category: "Education",
      liveUrl: "https://jayadeepamaria6883.ongraphy.com/",
      githubUrl: "#"
    },
    {
      id: 9,
      title: "Renu Vijay Artist (artzn colours)",
      description: "Art gallery and online art education platform",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Art",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 10,
      title: "Breakthrough with Karan Rawat",
      description: "Personal development and breakthrough coaching platform",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Coaching",
      liveUrl: "https://www.breakthroughwithkaranrawat.com/",
      githubUrl: "#"
    },
    {
      id: 11,
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with advanced filtering, payment integration, and admin dashboard",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "E-commerce",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 12,
      title: "Real Estate Platform",
      description: "Property listing platform with advanced search, virtual tours, and agent management",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
      technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
      category: "Real Estate",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 13,
      title: "Financial Dashboard",
      description: "Interactive dashboard for financial data visualization and portfolio management",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      category: "Finance",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 14,
      title: "Social Media App",
      description: "Modern social platform with real-time messaging, media sharing, and community features",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Firebase", "Redux", "WebRTC"],
      category: "Social Media",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Education", "E-commerce", "Healthcare", "Real Estate", "Finance", "Social Media", "Art", "Fitness", "Coaching"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-slide-up">
            Our <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Explore our latest projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className={`rounded-full px-6 py-2 transition-all duration-200 hover:scale-105 ${
                  index === 0 
                    ? "gradient-blue text-white" 
                    : "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={project.id} className="card-3d hover:shadow-xl transition-all duration-300 animate-scale-in border-0 bg-white/80 backdrop-blur-sm overflow-hidden group" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                      <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                        <Github className="h-4 w-4 mr-1" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <Badge className="absolute top-4 right-4 gradient-blue text-white">
                    {project.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 gradient-blue text-white hover:scale-105 transition-transform duration-200"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </Button>
                    <Button size="sm" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      <Github className="h-4 w-4" />
                    </Button>
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
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-blue-200">Projects Completed</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-200">Industries Served</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-blue-200">Client Satisfaction</div>
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Have a Project in Mind?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's create something amazing together. Get in touch to discuss your project
          </p>
          <Button className="gradient-blue text-white px-12 py-4 text-lg font-semibold rounded-full hover:scale-105 transition-transform duration-200 box-shadow-3d">
            Start Your Project
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
