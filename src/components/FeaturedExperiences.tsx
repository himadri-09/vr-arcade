import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

// Sample data for VR experiences
const experiences = [
  {
    id: 1,
    title: "Cyberpunk City",
    description: "Explore a neon-lit futuristic metropolis filled with danger and intrigue.",
    image: "https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    duration: "45 min",
    players: "1-2",
    rating: 4.9,
    category: "Adventure"
  },
  {
    id: 2,
    title: "Space Explorer",
    description: "Journey through the cosmos and visit distant planets and galaxies.",
    image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    duration: "30 min",
    players: "1",
    rating: 4.7,
    category: "Simulation"
  },
  {
    id: 3,
    title: "Zombie Apocalypse",
    description: "Survive a terrifying zombie outbreak in this heart-pounding horror experience.",
    image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    duration: "40 min",
    players: "1-4",
    rating: 4.8,
    category: "Horror"
  },
  {
    id: 4,
    title: "Fantasy Realm",
    description: "Wield magic and battle mythical creatures in an enchanted world.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    duration: "50 min",
    players: "1-3",
    rating: 4.6,
    category: "Fantasy"
  },
  {
    id: 5,
    title: "Racing Circuit",
    description: "Experience the thrill of high-speed racing in futuristic vehicles.",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    duration: "25 min",
    players: "1-8",
    rating: 4.5,
    category: "Racing"
  }
];

const FeaturedExperiences = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === experiences.length - 3 ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? experiences.length - 3 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display text-primary neon-text mb-4">
              Featured Experiences
            </h2>
            <p className="text-foreground/80 max-w-2xl">
              Step into immersive virtual worlds with our cutting-edge VR experiences. 
              From heart-pounding adventures to mind-bending puzzles, we have something for everyone.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide}
              className="border-primary text-primary hover:bg-primary/20"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide}
              className="border-primary text-primary hover:bg-primary/20"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {experiences.map((experience) => (
              <motion.div 
                key={experience.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="min-w-[calc(100%-2rem)] md:min-w-[calc(50%-1.5rem)] lg:min-w-[calc(33.333%-1.5rem)]"
              >
                <Card className="overflow-hidden border-primary/20 bg-black/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={experience.image} 
                      alt={experience.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 bg-black/70 text-xs font-medium text-primary py-1 px-2 rounded backdrop-blur-sm border border-primary/30">
                      {experience.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-display text-primary mb-2">{experience.title}</h3>
                    <p className="text-foreground/70 text-sm mb-4">{experience.description}</p>
                    
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center text-sm text-foreground/60">
                        <Clock className="h-4 w-4 mr-1 text-secondary" />
                        {experience.duration}
                      </div>
                      <div className="flex items-center text-sm text-foreground/60">
                        <Users className="h-4 w-4 mr-1 text-secondary" />
                        {experience.players}
                      </div>
                      <div className="flex items-center text-sm text-foreground/60">
                        <Star className="h-4 w-4 mr-1 text-accent" />
                        {experience.rating}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button asChild className="w-full cyber-button-secondary">
                        <Link to={`/experiences`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <Button asChild className="cyber-button">
            <Link to="/experiences">
              View All Experiences
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedExperiences;