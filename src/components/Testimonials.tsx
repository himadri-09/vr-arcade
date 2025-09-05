import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=1",
    role: "Gaming Enthusiast",
    content: "Mind-blowing experience! The Cyberpunk City was so immersive I forgot I was in a VR arcade. The staff was incredibly helpful in getting me set up.",
    rating: 5
  },
  {
    id: 2,
    name: "Samantha Lee",
    avatar: "https://i.pravatar.cc/150?img=5",
    role: "First-time VR User",
    content: "As someone who had never tried VR before, I was blown away. The equipment was top-notch and the Space Explorer experience made me feel like I was actually floating through space!",
    rating: 5
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    avatar: "https://i.pravatar.cc/150?img=3",
    role: "Tech Blogger",
    content: "I've been to many VR arcades, but this one stands out. The haptic feedback in the controllers adds a whole new dimension to the experience. Highly recommended!",
    rating: 4
  },
  {
    id: 4,
    name: "Emily Chen",
    avatar: "https://i.pravatar.cc/150?img=9",
    role: "Regular Customer",
    content: "I come here every weekend with friends. The multiplayer experiences are fantastic and the staff remembers us by name. It's become our favorite hangout spot!",
    rating: 5
  },
  {
    id: 5,
    name: "David Wilson",
    avatar: "https://i.pravatar.cc/150?img=4",
    role: "VR Developer",
    content: "As someone who works in VR development, I'm impressed by the quality of equipment and experiences offered here. The Fantasy Realm experience has incredible detail.",
    rating: 4
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,255,0.1)_0%,transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display text-secondary neon-text mb-4">
            What Our Visitors Say
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from people who have experienced our virtual reality adventures firsthand.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <motion.div
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="hologram-panel p-8 relative"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                <Avatar className="w-20 h-20 border-2 border-hologram shadow-hologram">
                  <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} />
                  <AvatarFallback className="bg-secondary/20 text-secondary">
                    {testimonials[currentIndex].name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonials[currentIndex].rating
                            ? "text-accent fill-accent"
                            : "text-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg italic text-hologram mb-4">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  
                  <div>
                    <h4 className="font-display text-hologram-glow">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-foreground/60">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Holographic scan effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-md">
                <div className="absolute inset-0 bg-gradient-to-b from-hologram/5 to-transparent animate-hologram-flicker"></div>
                <div className="absolute top-0 left-0 right-0 h-px bg-hologram/30 animate-[hologram-scan_3s_linear_infinite]"></div>
              </div>
            </motion.div>
            
            <div className="flex justify-center mt-8 gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={prevTestimonial}
                className="border-secondary text-secondary hover:bg-secondary/20"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentIndex === index 
                        ? "bg-secondary w-6" 
                        : "bg-secondary/30"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={nextTestimonial}
                className="border-secondary text-secondary hover:bg-secondary/20"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;