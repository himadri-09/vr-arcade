import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gamepad } from "lucide-react";
import { Link } from "react-router-dom";
import VRHeadsetModel from "./VRHeadsetModel";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)] z-0"></div>
      
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 text-primary neon-text">
              Enter The Next <br />
              <span className="text-secondary">Dimension</span>
            </h1>
            <p className="text-xl mb-8 text-foreground/90 max-w-lg">
              Experience immersive virtual reality like never before. Step into new worlds and push the boundaries of reality at VR Arcade.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="cyber-button-accent group">
                <Link to="/booking">
                  Book Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="cyber-button">
                <Link to="/experiences">
                  <Gamepad className="mr-2 h-5 w-5" />
                  Explore Experiences
                </Link>
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center">
                <h3 className="text-3xl font-mono text-primary">50+</h3>
                <p className="text-sm text-foreground/70">VR Games</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-mono text-primary">4K</h3>
                <p className="text-sm text-foreground/70">Resolution</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-mono text-primary">120Hz</h3>
                <p className="text-sm text-foreground/70">Refresh Rate</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative"
          >
            <div className="relative h-[400px] w-full flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,255,0.15)_0%,transparent_70%)]"></div>
              <VRHeadsetModel />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;