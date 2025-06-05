import { ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Bishop Law (Criminal Lawyer)",
      description: "Bishop Law is a boutique law firm in Singapore in Criminal Defense and Commercial Disputes.",
      image: "/lovable-uploads/8af97be9-901f-4fae-900a-d3fc0937fbf8.png",
      technologies: ["React", "Node.js", "TypeScript", "Tailwind CSS"],
      category: "Legal",
      liveUrl: "https://bishoplawcorp.com/",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Skillsiya - Learn In-demand Skills in Hindi",
      description: "We provide in-demand skill-based online courses in Hindi. Our mission is to make Indian youth highly skilled and smart.",
      image: "/lovable-uploads/7599741f-9fdd-42fb-b8cc-29d71ff2d035.png",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      category: "Education",
      liveUrl: "https://www.skillsiya.com/",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Thinking Bridge - Get Skilled, Get Placed",
      description: "Educational platform focused on skill development and job placement assistance for students and professionals.",
      image: "/lovable-uploads/516152f4-548a-44b3-895c-f325cc4d4c6e.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Education",
      liveUrl: "https://www.thinkingbridge.in/",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Jatin Khirbat (Model) - Model Mentorship Program",
      description: "Model Mentorship Program designed to help aspiring models kickstart their modeling career and show them the exact steps to become a successful model.",
      image: "/lovable-uploads/21299469-7e1a-4bee-a73f-a70d0ea25e8a.png",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      category: "Entertainment",
      liveUrl: "https://www.jatinkhirbat.com/courses/OVERVIEW-OF-THE-MODEL-MENTORSHIP-PROGRAM-62d8f69ce4b02ed61b9ab411",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Debjit Patoa - Empowering Your Financial Future",
      description: "Financial education and investment platform focused on empowering individuals to make informed financial decisions and build wealth.",
      image: "/lovable-uploads/9008e768-e1d2-4d17-9f62-baf3448af1d9.png",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      category: "Finance",
      liveUrl: "https://www.infinityclubonline.com/",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Kundan Kishore - Simplifying Investing & Trading for INDIA",
      description: "Investment and trading education platform dedicated to simplifying complex financial concepts for Indian investors and traders.",
      image: "/lovable-uploads/a6451913-9e4e-4732-8bde-f467fbded8f4.png",
      technologies: ["React", "Node.js", "MongoDB", "TradingView"],
      category: "Finance",
      liveUrl: "https://www.kundankishore.in/s/pages/home101",
      githubUrl: "#"
    },
    {
      id: 7,
      title: "Aneri Patel - Fashion Designer & Consultant",
      description: "Fashion Designer | Stylist | Faculty | Merchandiser | Consultant providing professional guidance and mentoring in the fashion industry.",
      image: "/lovable-uploads/d832a1c0-38e3-4aab-bfab-e3ac3cc0a0b5.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Fashion",
      liveUrl: "https://mentoringbyaneri.com/",
      githubUrl: "#"
    },
    {
      id: 8,
      title: "Credentax - Financial Consulting & GST Firm",
      description: "Financial Accounting and Tax Consultancy Firm providing comprehensive accounting, taxation, and business consulting services.",
      image: "/lovable-uploads/44bfab06-f33f-41dc-9cf2-9f3fe90edd75.png",
      technologies: ["React", "Node.js", "MySQL", "Stripe"],
      category: "Finance",
      liveUrl: "https://www.akashnayar.in/credentax/index.php",
      githubUrl: "#"
    },
    {
      id: 9,
      title: "Guinet Technologies",
      description: "Learn NextGen Technologies with GuiNet. Advanced technology education platform providing cutting-edge courses and career counseling.",
      image: "/lovable-uploads/156f0613-d4d4-475c-aafe-f689775c8b30.png",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      category: "Education",
      liveUrl: "https://guinett.com/",
      githubUrl: "#"
    },
    {
      id: 10,
      title: "SSEI Markets - Building Atmanirbhar Traders",
      description: "Building Atmanirbhar Traders through comprehensive trading education and mentorship programs for aspiring traders.",
      image: "/lovable-uploads/36201ccb-a8ca-4084-ab4f-522c9ee10987.png",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      category: "Finance",
      liveUrl: "https://www.sseimarkets.com/",
      githubUrl: "#"
    },
    {
      id: 11,
      title: "Midhafin - Career in Finance Mentorship",
      description: "Boost your career in Finance with mentorship you can bank on! Personalized learning and expertise for finance professionals.",
      image: "/lovable-uploads/e34229a1-3253-412f-887f-091331ff3ed6.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Finance",
      liveUrl: "https://www.midhafin.com/",
      githubUrl: "#"
    },
    {
      id: 12,
      title: "ONVID - eLearning Platform",
      description: "ONVID Solutions Pvt. Ltd. is an eLearning platform providing comprehensive online courses and training programs.",
      image: "/lovable-uploads/a67e83a0-7071-42cb-8818-7ba59d9724f9.png",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      category: "Education",
      liveUrl: "https://www.onvid.in/",
      githubUrl: "#"
    },
    {
      id: 13,
      title: "Hitesh Nanwani - eLearning Platform",
      description: "Hitesh Nanwani Solutions Pvt. Ltd. is an eLearning platform offering price actions and options trading courses.",
      image: "/lovable-uploads/a914d733-abbc-4bd0-99fc-c751c724e1e8.png",
      technologies: ["React", "Node.js", "MongoDB", "TradingView"],
      category: "Education",
      liveUrl: "https://www.hiteshnanwani.com/",
      githubUrl: "#"
    },
    {
      id: 14,
      title: "Sarbart - Art Classes",
      description: "Sarb Art Classes providing comprehensive art education and creative learning experiences for students of all ages.",
      image: "/lovable-uploads/dde3f744-05e3-45ab-991c-cbb125224aca.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Art",
      liveUrl: "https://www.sarbart.com/",
      githubUrl: "#"
    },
    {
      id: 15,
      title: "iGrow Traders - Trading Education",
      description: "Accelerate your profit system with comprehensive trading education and mentorship programs for traders.",
      image: "/lovable-uploads/115ee859-7c83-4e95-a0d6-f91761c51a31.png",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      category: "Finance",
      liveUrl: "https://www.igrowtraders.co.in/",
      githubUrl: "#"
    },
    {
      id: 16,
      title: "Zorba The Zen - EdTech Platform",
      description: "Money-oriented and creative skills EdTech platform offering highly lucrative and creative skills training programs.",
      image: "/lovable-uploads/f56f8629-0b28-4b89-9447-771ee555d0fc.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Education",
      liveUrl: "https://puneetjindal6794.ongraphy.com/",
      githubUrl: "#"
    },
    {
      id: 17,
      title: "Codingrad",
      description: "Comprehensive coding education platform with interactive courses, live sessions, and progress tracking",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      category: "Education",
      liveUrl: "https://codingradweb.graphy.com/",
      githubUrl: "#"
    },
    {
      id: 18,
      title: "YK Technologies",
      description: "Technology solutions and educational platform for digital transformation",
      image: "/lovable-uploads/6a936aae-041d-40c9-9a67-841370823be0.png",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      category: "Education",
      liveUrl: "https://yogeshkumar6203.graphy.com/",
      githubUrl: "#"
    },
    {
      id: 19,
      title: "CelestLife",
      description: "Wellness and lifestyle platform for holistic health solutions",
      image: "/lovable-uploads/bfb63eeb-9369-4fbd-a5c7-219a75316bbf.png",
      technologies: ["React", "Express", "MySQL", "Stripe"],
      category: "Healthcare",
      liveUrl: "https://www.celestlife.com/",
      githubUrl: "#"
    },
    {
      id: 20,
      title: "The School of Bass",
      description: "Online music education platform for bass guitar lessons in Hindi",
      image: "/lovable-uploads/e61abd28-188b-4a2d-bce8-e4f80ee951dd.png",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      category: "Education",
      liveUrl: "https://www.theschoolofbass.in/s/store/courses/description/Bass-guitar-lessons-for-beginners-in-Hindi",
      githubUrl: "#"
    },
    {
      id: 21,
      title: "Coach Nikhil Gambhir",
      description: "Personal coaching and fitness training platform",
      image: "/lovable-uploads/10bc9519-a43c-4267-ac98-5db1743788bf.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      category: "Fitness",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 22,
      title: "Neuron Nursing Academy",
      description: "Comprehensive nursing education and training platform",
      image: "/lovable-uploads/a6d7c263-d2a8-46e6-99a0-98fe2d5bb090.png",
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      category: "Education",
      liveUrl: "https://www.neuronnursingacademy.com/",
      githubUrl: "#"
    },
    {
      id: 23,
      title: "Louise Hay",
      description: "Educational platform for personal development and wellness",
      image: "/lovable-uploads/adb10630-f885-457d-977a-254c3360b614.png",
      technologies: ["React", "Express", "MongoDB", "Stripe"],
      category: "Education",
      liveUrl: "https://www.infoworldeducation.com/",
      githubUrl: "#"
    },
    {
      id: 24,
      title: "Language Veda",
      description: "Language learning platform with comprehensive courses",
      image: "/lovable-uploads/2339b1f5-54aa-47dc-9967-2c4055ced91d.png",
      technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
      category: "Education",
      liveUrl: "https://jayadeepamaria6883.ongraphy.com/",
      githubUrl: "#"
    },
    {
      id: 25,
      title: "Renu Vijay Artist (artzn colours)",
      description: "Art gallery and online art education platform",
      image: "/lovable-uploads/e4ff6cdf-1641-4b1a-ba7f-8a7c84bcab41.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Art",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 26,
      title: "Breakthrough with Karan Rawat",
      description: "Personal development and breakthrough coaching platform",
      image: "/lovable-uploads/f6e4b7ad-d9b2-4af2-a422-39185e60c5ca.png",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Coaching",
      liveUrl: "https://www.breakthroughwithkaranrawat.com/",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Education", "Legal", "Finance", "Entertainment", "Healthcare", "Art", "Fitness", "Coaching", "Fashion"];

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
