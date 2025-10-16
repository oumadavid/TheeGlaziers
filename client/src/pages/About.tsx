import { Award, Users, Target, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the highest quality aluminium construction solutions with precision and care."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our skilled professionals bring decades of combined experience in aluminium fabrication and installation."
    },
    {
      icon: Target,
      title: "Client Focus",
      description: "Your vision drives our mission. We work closely with clients to exceed expectations every time."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Trusted partner for projects of all scales, ensuring timely delivery and lasting quality."
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
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">About Highland Glaziers</h1>
              <p className="text-lg md:text-xl text-primary-foreground/90">
                Leading the industry in premium aluminium construction with over two decades of excellence
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Story</h2>
              
              <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
                <p className="text-lg">
                  Founded in 2003, Highland Glaziers has grown from a small local fabrication shop to one of the 
                  region's most trusted names in aluminium construction. Our journey began with a simple 
                  mission: to provide superior quality aluminium products and installations that stand the test of time.
                </p>
                
                <p className="text-lg">
                  Today, we serve both residential and commercial clients, bringing architectural visions to 
                  life with precision-engineered aluminium windows, doors, curtain walls, and facades. Our 
                  commitment to innovation, quality, and customer satisfaction has made us the preferred 
                  choice for architects, builders, and property owners alike.
                </p>
                
                <p className="text-lg">
                  With a team of highly skilled craftsmen and state-of-the-art fabrication facilities, we 
                  handle projects of all sizes—from custom residential installations to large-scale commercial 
                  developments. Every project receives the same attention to detail and commitment to excellence 
                  that has defined our reputation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 gradient-metallic">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-medium hover:shadow-strong transition-smooth animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="text-primary-foreground" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "20+", label: "Years in Business" },
                { value: "500+", label: "Projects Completed" },
                { value: "10+", label: "Expert Team Members" },
                { value: "98%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center space-y-2 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
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

export default About;
