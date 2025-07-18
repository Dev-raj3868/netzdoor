
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
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
    title: "Kundan Kishore - A Complete Course on the Indian Stock Market",
    description: "A complete course on the Indian Stock Market curated by Kundan Kishore for investors and traders of India.",
    image: "/lovable-uploads/db876ce1-a87e-4b7b-b96b-4c015c74792c.png",
    technologies: ["React", "Node.js", "MongoDB", "TradingView"],
    category: "Finance",
    liveUrl: "https://www.kundankishore.in/",
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
    title: "Le Pont Français - Learn French Language",
    description: "Learn French language to excel in your career - Le Pont Francais makes your French language learning experience simple, effortless, and exciting.",
    image: "/lovable-uploads/5aa68927-6e51-476e-8638-e7fdf08b7f80.png",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    category: "Education",
    liveUrl: "https://lepont-francais.com/",
    githubUrl: "#"
  },
  {
    id: 18,
    title: "Strategic Security Solutions",
    description: "Providing Close Protection, Executive Protection, and Training along with Armed and Unarmed, Uniformed and Plainclothes Security Guards.",
    image: "/lovable-uploads/71f251df-1172-4e35-8021-fad4aa06461e.png",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    category: "Security",
    liveUrl: "https://jeffdean4262.ongraphy.com/",
    githubUrl: "#"
  },
  {
    id: 19,
    title: "SPICA E-Learning Platform",
    description: "Expand your access to learning through inclusive & accessible learning experience with comprehensive educational programs.",
    image: "/lovable-uploads/96a9419e-5bae-4f1e-ac5f-6ea22d69dca1.png",
    technologies: ["React", "Express", "MySQL", "Stripe"],
    category: "Education",
    liveUrl: "https://learn.spicacbe.com/",
    githubUrl: "#"
  },
  {
    id: 20,
    title: "Share Funds - Stock Market Courses",
    description: "Take the 1st step for Financial Freedom with comprehensive stock market courses and trading education programs.",
    image: "/lovable-uploads/0cf5ef5c-264c-4e70-b54c-cc0b98a359b3.png",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    category: "Finance",
    liveUrl: "https://www.learnfrenchenligne.com/",
    githubUrl: "#"
  },
  {
    id: 21,
    title: "Get Set Jump",
    description: "How To Talk To Anyone With Confidence - Take this power-packed mini-course and experience the power of communication.",
    image: "/lovable-uploads/ec4cb0c5-fe65-4609-8781-09da00380011.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    category: "Communication",
    liveUrl: "https://www.getsetjump.com/",
    githubUrl: "#"
  },
  {
    id: 22,
    title: "The Financial Ladder",
    description: "We maximize your Financial Growth through personal mentorship programs and comprehensive financial education.",
    image: "/lovable-uploads/80232cc0-6641-45a1-b7d6-298bccdd5864.png",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    category: "Finance",
    liveUrl: "https://learn.thefinancialladder.com/",
    githubUrl: "#"
  },
  {
    id: 23,
    title: "Learn French Enligne",
    description: "A learning platform that helps you to learn French with world-class training and development programs developed by top teachers.",
    image: "/lovable-uploads/d6e1f4a6-96ef-4e1d-8aa2-76cb16eb2088.png",
    technologies: ["React", "Express", "MongoDB", "Stripe"],
    category: "Education",
    liveUrl: "https://www.learnfrenchenligne.com/",
    githubUrl: "#"
  },
  {
    id: 24,
    title: "FnASkills",
    description: "FnASkills is a Premier Finance & Accounting Training & Education Provider for Individuals & Corporates creating true business impact.",
    image: "/lovable-uploads/b29b36d5-e3b6-46ea-8dd7-e61dbf8a3ee0.png",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    category: "Finance",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    id: 25,
    title: "Codingrad - Learn Top Technologies in Regional Languages",
    description: "Learn Top Technologies in Regional Languages - We believe that starting and understanding things in the native language will bring the best from anyone and makes them master in the field without any doubt.",
    image: "/lovable-uploads/996a6e26-cd09-47a3-ab4b-28bac50be083.png",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    category: "Education",
    liveUrl: "https://codingradweb.graphy.com/",
    githubUrl: "#"
  },
  {
    id: 26,
    title: "Breakthrough with Karan Rawat",
    description: "Become a strategic brand & marketing professional. Hack your career growth by improving your mindset, concepts and skillsets in just 21 days.",
    image: "/lovable-uploads/29b1c97d-326c-4caa-b5dc-863bb93bad61.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Marketing",
    liveUrl: "https://www.breakthroughwithkaranrawat.com/",
    githubUrl: "#"
  },
  {
    id: 27,
    title: "Kundan Kishore - Simplifying Investing & Trading for INDIA",
    description: "Simplifying Investing & Trading for INDIA - Complexity is the Biggest Lie. Complete course on the Indian Stock Market for investors and traders.",
    image: "/lovable-uploads/dd8b0018-8c15-476a-82f4-21c4ac531e37.png",
    technologies: ["React", "Node.js", "MongoDB", "TradingView"],
    category: "Finance",
    liveUrl: "https://www.kundankishore.in/s/pages/home101",
    githubUrl: "#"
  },
  {
    id: 28,
    title: "CelestLife - Experience the joy of transformation today!",
    description: "At CelestLife it is our goal to create a community and develop a movement of people who believe in the possibility and ability to live the life of their dreams. We empower people to actualize their limitless potential and to master the art of Life By Design.",
    image: "/lovable-uploads/badc188b-ea88-4e5f-a4f3-3f5807a4e61a.png",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    category: "Lifestyle",
    liveUrl: "https://www.celestlife.com/",
    githubUrl: "#"
  },
  {
    id: 29,
    title: "The School of Bass - Saurabh Suman",
    description: "Get the complete guide to starting up - Bass guitar lessons for beginners in Hindi. Learn step by step bass guitar course with 90+ mins of content.",
    image: "/lovable-uploads/2493d65d-7e60-4aa2-bd3a-c260673edc7f.png",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    category: "Music",
    liveUrl: "https://www.theschoolofbass.in/s/store/courses/description/Bass-guitar-lessons-for-beginners-in-Hindi",
    githubUrl: "#"
  },
  {
    id: 30,
    title: "Coach Nikhil Gambhir",
    description: "Nikhil Gambhir leads the charts in India as a India's No.1 Multi Millionaire Coach Business Strategist, Sales Coach, Motivational Speaker, Transformational Trainer & Digital Entrepreneur.",
    image: "/lovable-uploads/37d0a224-6d86-462b-a6fd-26641ec0a86a.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Coaching",
    liveUrl: "https://www.coachnikhilgambhir.com/lander",
    githubUrl: "#"
  },
  {
    id: 31,
    title: "Neuron Nursing Academy",
    description: "NEURON NURSING ACADEMY - Connecting your dreams. Online nursing officer coaching for various nursing entrance exams. Classes are available in English, Hindi, Malayalam.",
    image: "/lovable-uploads/00dd3e32-6e3b-4357-a070-607beb310c59.png",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    category: "Education",
    liveUrl: "https://www.neuronnursingacademy.com/",
    githubUrl: "#"
  },
  {
    id: 32,
    title: "Louise Hay - InfoWorld Education",
    description: "Through Louise's healing techniques and positive philosophy, millions have learned to create more of what they want in their lives - more wellness in their bodies, minds, and spirits.",
    image: "/lovable-uploads/48c896d5-2661-4d05-a86d-df33d162d0bc.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Wellness",
    liveUrl: "https://www.infoworldeducation.com/",
    githubUrl: "#"
  },
  {
    id: 33,
    title: "Languageveda - Language Matters",
    description: "Get into the world of learning languages with Languageveda: Explore the beauty of Indian Languages and culture. Languageveda is hub of regional Language experts.",
    image: "/lovable-uploads/b2dd456e-4941-4f3a-90c2-5b0eac4da024.png",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    category: "Education",
    liveUrl: "https://jayadeepamaria6883.ongraphy.com/",
    githubUrl: "#"
  },
  {
    id: 34,
    title: "Renu Vijay Artist (artzncolours)",
    description: "With a Vision to spread the richness of Handmade| Homemade art Globally. Explore The Artist Within You - Learn how to create beautiful art and explore your creativity.",
    image: "/lovable-uploads/e5a4d7f2-8a88-4450-95a5-6b660628b2ac.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Art",
    liveUrl: "https://courses.artzncolours.com/",
    githubUrl: "#"
  }
];
