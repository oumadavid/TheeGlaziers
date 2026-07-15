import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/logo-master.png"
                alt="Highland Glaziers logo"
                className="w-10 h-10 rounded-md object-contain"
              />
              <span className="text-2xl font-bold">Highland Glaziers</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Leading aluminium construction specialists delivering premium solutions for residential and commercial projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Aluminium Windows</li>
              <li>Aluminium Doors</li>
              <li>Curtain Walls</li>
              <li>Facades</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+254712020924" className="hover:text-primary transition-smooth">
                  +254 712020924
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:highlandglaziers@gmail.com" className="hover:text-primary transition-smooth">
                  highlandglaziers@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="https://maps.app.goo.gl/C717pBDfNY1mkCRK9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-smooth"
                >
                  Kibos road, Kisumu, Kenya
                </a>
              </li>
            </ul>
            
            {/* Social Links */}
          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.facebook.com/profile.php?id=100063927225209"
              aria-label="Visit our Facebook page"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/samson-owage-1968642b6?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              aria-label="Visit our LinkedIn page"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://www.instagram.com/owage?igsh=MWM4eXB4OXR4ZHBiZQ=="
              aria-label="Visit our Instagram page"
              className="text-muted-foreground hover:text-primary transition-smooth"
            >
              <Instagram size={20} />
            </a>
          </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Highland Glaziers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;