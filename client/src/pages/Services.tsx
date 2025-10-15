import { DoorOpen, FrameIcon, Building2, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      icon: FrameIcon,
      title: "Aluminium Windows",
      description: "Custom-designed aluminium windows that combine energy efficiency with modern aesthetics. Perfect for residential and commercial applications.",
      features: [
        "Energy-efficient glazing options",
        "Custom sizes and configurations",
        "Powder-coated finishes",
        "Sound insulation",
        "Low maintenance"
      ]
    },
    {
      icon: DoorOpen,
      title: "Aluminium Doors",
      description: "Durable and stylish aluminium door systems including sliding, folding, and hinged options for any architectural style.",
      features: [
        "Security-enhanced locking systems",
        "Thermal break technology",
        "Wide range of styles",
        "Weather-resistant seals",
        "Smooth operation"
      ]
    },
    {
      icon: Building2,
      title: "Curtain Walls",
      description: "Sophisticated curtain wall systems that create stunning building facades while providing structural integrity and weather protection.",
      features: [
        "Structural glazing systems",
        "High wind load resistance",
        "Thermal performance",
        "Water and air tightness",
        "Custom engineering"
      ]
    },
    {
      icon: Layers,
      title: "Facades",
      description: "Innovative facade solutions that transform building exteriors with premium aluminium cladding and architectural features.",
      features: [
        "Ventilated facade systems",
        "Rainscreen cladding",
        "Architectural detailing",
        "Fire-rated options",
        "Sustainable materials"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="gradient-dark text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Our Services</h1>
              <p className="text-lg md:text-xl text-primary-foreground/90">
                Comprehensive aluminium construction solutions tailored to your project requirements
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-lg shadow-medium hover:shadow-strong transition-smooth border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 gradient-hero rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="text-primary-foreground" size={32} />
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold text-sm uppercase tracking-wide text-primary">Key Features:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
                          <span className="text-accent mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-metallic">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Project?</h2>
              <p className="text-lg text-muted-foreground">
                Our expert team is ready to bring your vision to life with premium aluminium construction solutions
              </p>
              <Link to="/contact">
                <Button variant="accent" size="lg" className="mt-4">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
