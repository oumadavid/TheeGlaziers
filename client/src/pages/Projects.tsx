import { useState } from "react";
import { ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [filter, setFilter] = useState<string>("all");

  const categories = ["all", "residential", "commercial", "industrial"];

  const projects = [
    {
      id: 1,
      title: "Skyline Tower Facade",
      category: "commercial",
      description: "Complete curtain wall installation for 25-story commercial building",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      year: "2024"
    },
    {
      id: 2,
      title: "Luxury Villa Windows",
      category: "residential",
      description: "Custom aluminium windows and sliding doors for modern villa",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      year: "2023"
    },
    {
      id: 3,
      title: "Corporate HQ Entrance",
      category: "commercial",
      description: "Architectural entrance system with automatic sliding doors",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      year: "2024"
    },
    {
      id: 4,
      title: "Industrial Warehouse",
      category: "industrial",
      description: "Large-scale industrial doors and window systems",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&h=600&fit=crop",
      year: "2023"
    },
    {
      id: 5,
      title: "Beachfront Residence",
      category: "residential",
      description: "Weather-resistant aluminium systems for coastal property",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
      year: "2024"
    },
    {
      id: 6,
      title: "Shopping Mall Atrium",
      category: "commercial",
      description: "Structural glazing and skylight systems",
      image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800&h=600&fit=crop",
      year: "2023"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="gradient-dark text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Our Projects</h1>
              <p className="text-lg md:text-xl text-primary-foreground/90">
                Showcasing excellence in aluminium construction across diverse project types
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="group bg-card rounded-lg overflow-hidden shadow-medium hover:shadow-strong transition-smooth animate-fade-in border border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth">
                      <Button variant="accent" size="sm" className="w-full">
                        View Details
                        <ExternalLink size={16} />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                        {project.category}
                      </span>
                      <span className="text-xs text-muted-foreground">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
