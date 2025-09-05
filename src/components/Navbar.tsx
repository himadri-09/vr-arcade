import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Gamepad, Calendar1 as Calendar, Cpu, Phone, Circle as Home } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
  { name: "Home", path: "/", icon: <Home className="h-5 w-5" /> },
  { name: "Experiences", path: "/experiences", icon: <Gamepad className="h-5 w-5" /> },
  { name: "Book Now", path: "/booking", icon: <Calendar className="h-5 w-5" /> },
  { name: "Equipment", path: "/equipment", icon: <Cpu className="h-5 w-5" /> },
  { name: "Contact", path: "/contact", icon: <Phone className="h-5 w-5" /> }];


  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`
      }>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}>

              <h1 className="text-2xl md:text-3xl font-display text-primary neon-text">
                VR Arcade
              </h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary ${
              location.pathname === link.path ?
              "text-primary text-glow" :
              "text-foreground"}`
              }>

                {link.name}
              </Link>
            )}
            <Button className="cyber-button">
              Sign In
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-foreground hover:text-primary">

              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen &&
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
        className="md:hidden bg-black/95 backdrop-blur-lg border-t border-primary/30">

          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center gap-2 py-2 font-heading text-sm uppercase tracking-wider transition-colors hover:text-primary ${
              location.pathname === link.path ?
              "text-primary text-glow" :
              "text-foreground"}`
              }
              onClick={() => setIsOpen(false)}>

                  {link.icon}
                  {link.name}
                </Link>
            )}
              <Button className="cyber-button w-full">
                Sign In
              </Button>
            </nav>
          </div>
        </motion.div>
      }
    </header>);

};

export default Navbar;