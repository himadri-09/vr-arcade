import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Circle as Home, Triangle as AlertTriangle } from "lucide-react";
import { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "Page Not Found - VR Arcade";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center pt-16 pb-16 px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80 z-0"></div>
      <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center relative z-10 max-w-lg">

        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-error/20 flex items-center justify-center">
            <AlertTriangle className="h-10 w-10 text-error" />
          </div>
        </div>
        
        <h1 className="text-6xl font-display text-error neon-text mb-4 glitch-text">404</h1>
        <h2 className="text-2xl font-heading text-primary mb-4">Reality Not Found</h2>
        <p className="text-foreground/80 mb-8">
          The virtual experience you're looking for seems to have glitched out of existence. 
          Let's get you back to a stable dimension.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="cyber-button">
            <Link to="/">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-primary/50 text-primary">
            <Link to="/experiences">
              Explore Experiences
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>);

};

export default NotFoundPage;