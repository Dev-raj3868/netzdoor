
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import PortfolioCard from '../components/portfolio/PortfolioCard';
import PortfolioStats from '../components/portfolio/PortfolioStats';
import PortfolioCTA from '../components/portfolio/PortfolioCTA';
import { projects } from '../data/portfolioData';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      <PortfolioHero />

      {/* Portfolio Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <PortfolioCard 
                key={project.id} 
                project={project} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>

      <PortfolioStats />
      <PortfolioCTA />
      <Footer />
    </div>
  );
};

export default Portfolio;
