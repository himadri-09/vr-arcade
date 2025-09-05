import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-primary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-display text-primary mb-4 neon-text">VR Arcade</h3>
            <p className="text-foreground/80 mb-4">
              Step into a new dimension of gaming with our state-of-the-art virtual reality experiences.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-heading text-secondary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-foreground/80 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-foreground/80 hover:text-primary transition-colors">
                  VR Experiences
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-foreground/80 hover:text-primary transition-colors">
                  Book a Session
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-foreground/80 hover:text-primary transition-colors">
                  Equipment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading text-secondary mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="text-foreground/80">Monday - Friday: 10AM - 10PM</li>
              <li className="text-foreground/80">Saturday: 9AM - 11PM</li>
              <li className="text-foreground/80">Sunday: 9AM - 8PM</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-heading text-secondary mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-2 mt-0.5" />
                <span className="text-foreground/80">123 Cyber Street, Digital City, DC 10101</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-2" />
                <span className="text-foreground/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-2" />
                <span className="text-foreground/80">info@vrarcade.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 mt-8 pt-8 text-center">
          <p className="text-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} VR Arcade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;