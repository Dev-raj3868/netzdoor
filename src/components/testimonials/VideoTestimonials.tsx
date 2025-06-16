
import { Card, CardContent } from '@/components/ui/card';

const VideoTestimonials = () => {
  const videoTestimonials = [
    {
      id: "KCZYlHG35SI",
      title: "Client Success Story - E-commerce Platform",
      client: "TechStart Inc."
    },
    {
      id: "7NEr7RAqhOo",
      title: "Digital Transformation Journey",
      client: "Digital Solutions"
    },
    {
      id: "nkuxXpMj6uQ",
      title: "Modern Web Development Process",
      client: "Innovation Labs"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Success Stories</h2>
          <p className="text-xl text-gray-600">
            Watch how we've helped transform businesses through innovative web solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {videoTestimonials.map((video, index) => (
            <Card key={index} className="border-0 bg-white/80 backdrop-blur-sm animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="relative rounded-3xl overflow-hidden card-3d mb-4">
                  <div className="aspect-video">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{video.title}</h3>
                  <p className="text-gray-600">{video.client}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
