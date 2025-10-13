import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const Home = () => {
  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description: "Using only the finest aluminium materials and components for lasting durability"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Committed to meeting project deadlines without compromising on quality"
    },
    {
      icon: Award,
      title: "Expert Craftsmanship",
      description: "Decades of experience in precision fabrication and professional installation"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Highland Glaziers?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We combine cutting-edge technology with traditional craftsmanship to deliver exceptional results
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="text-center p-8 rounded-lg bg-card shadow-soft hover:shadow-medium transition-smooth border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 gradient-hero rounded-lg flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="text-primary-foreground" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 gradient-metallic">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive aluminium construction solutions for every need
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {["Windows", "Doors", "Curtain Walls", "Facades"].map((service, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-medium hover:shadow-strong transition-smooth border border-border group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                    Aluminium {service}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Professional {service.toLowerCase()} solutions
                  </p>
                  <ArrowRight className="text-accent group-hover:translate-x-1 transition-transform" size={20} />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/services">
                <Button variant="default" size="lg">
                  View All Services
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-dark text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Transform Your Project?
              </h2>
              <p className="text-lg text-primary-foreground/90">
                Let's discuss how our premium aluminium solutions can bring your architectural vision to life
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="accent" size="lg">
                    Get Free Quote
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" size="lg" className="bg-background/10 hover:bg-background/20 border-primary-foreground/20 text-primary-foreground">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
