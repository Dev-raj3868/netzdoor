
import { ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
}

interface PortfolioCardProps {
  project: Project;
  index: number;
}

const PortfolioCard = ({ project, index }: PortfolioCardProps) => {
  return (
    <Card 
      className="card-3d hover:shadow-xl transition-all duration-300 animate-scale-in border-0 bg-white/80 backdrop-blur-sm overflow-hidden group" 
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="relative overflow-hidden">
        <div className="w-full h-48 bg-gray-100">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-500 p-2"
          />
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-3 text-sm line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <Badge key={idx} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{project.technologies.length - 3}
            </Badge>
          )}
        </div>
        <Button 
          size="sm" 
          className="w-full gradient-blue text-white hover:scale-105 transition-transform duration-200"
          onClick={() => window.open(project.liveUrl, '_blank')}
        >
          <ExternalLink className="h-4 w-4 mr-1" />
          Live Demo
        </Button>
      </CardContent>
    </Card>
  );
};

export default PortfolioCard;
