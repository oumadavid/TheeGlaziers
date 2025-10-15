import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern aluminium construction facade" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block">
              <span className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold border border-accent/20">
                Premium Aluminium Solutions
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building The Future With{" "}
              <span className="gradient-hero bg-clip-text text-transparent">
                Aluminium Excellence
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Transforming architectural visions into reality with precision-engineered aluminium 
              windows, doors, curtain walls, and facades for residential and commercial projects.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "20+ Years Experience",
                "500+ Projects Completed",
                "Premium Quality Materials",
                "Expert Installation Team"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="text-accent flex-shrink-0" size={20} />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="group w-full sm:w-auto">
                  Get Free Quote
                  <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
