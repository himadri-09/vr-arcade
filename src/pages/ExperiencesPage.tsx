import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Users, Star, Search, ListFilter as Filter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Sample data for VR experiences
const allExperiences = [
{
  id: 1,
  title: "Cyberpunk City",
  description: "Explore a neon-lit futuristic metropolis filled with danger and intrigue. Navigate through crowded streets, hack into corporate systems, and uncover a conspiracy that threatens the entire city.",
  image: "https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  duration: "45 min",
  players: "1-2",
  rating: 4.9,
  category: "Adventure",
  difficulty: "Medium",
  ageRating: "16+"
},
{
  id: 2,
  title: "Space Explorer",
  description: "Journey through the cosmos and visit distant planets and galaxies. Experience zero gravity, pilot a spacecraft through asteroid fields, and discover alien artifacts on mysterious planets.",
  image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  duration: "30 min",
  players: "1",
  rating: 4.7,
  category: "Simulation",
  difficulty: "Easy",
  ageRating: "All Ages"
},
{
  id: 3,
  title: "Zombie Apocalypse",
  description: "Survive a terrifying zombie outbreak in this heart-pounding horror experience. Scavenge for supplies, craft weapons, and defend yourself against hordes of the undead in a post-apocalyptic world.",
  image: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  duration: "40 min",
  players: "1-4",
  rating: 4.8,
  category: "Horror",
  difficulty: "Hard",
  ageRating: "18+"
},
{
  id: 4,
  title: "Fantasy Realm",
  description: "Wield magic and battle mythical creatures in an enchanted world. Cast spells, solve ancient puzzles, and embark on an epic quest to save the realm from dark forces.",
  image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  duration: "50 min",
  players: "1-3",
  rating: 4.6,
  category: "Fantasy",
  difficulty: "Medium",
  ageRating: "12+"
},
{
  id: 5,
  title: "Racing Circuit",
  description: "Experience the thrill of high-speed racing in futuristic vehicles. Compete against AI or other players on gravity-defying tracks with spectacular environments and special power-ups.",
  image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  duration: "25 min",
  players: "1-8",
  rating: 4.5,
  category: "Racing",
  difficulty: "Medium",
  ageRating: "All Ages"
},
{
  id: 6,
  title: "Ocean Explorer",
  description: "Dive into the depths of a virtual ocean teeming with marine life. Swim alongside whales, explore coral reefs, and discover the mysteries of underwater caves and shipwrecks.",
  image: "https://images.unsplash.com/photo-1551244072-5d12893278ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  duration: "35 min",
  players: "1",
  rating: 4.4,
  category: "Simulation",
  difficulty: "Easy",
  ageRating: "All Ages"
},
{
  id: 7,
  title: "Ninja Dojo",
  description: "Master the ancient arts of stealth and combat in this intense ninja training simulation. Learn to use shurikens, swords, and acrobatic moves to overcome challenging obstacles and defeat enemy warriors.",
  image: "https://images.unsplash.com/photo-1590419690008-905895e8fe0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  duration: "40 min",
  players: "1-2",
  rating: 4.6,
  category: "Action",
  difficulty: "Hard",
  ageRating: "12+"
},
{
  id: 8,
  title: "Puzzle Dimension",
  description: "Challenge your mind in a world where physics and reality can be manipulated. Solve increasingly complex puzzles by altering gravity, time, and space to progress through mind-bending environments.",
  image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  duration: "45 min",
  players: "1",
  rating: 4.8,
  category: "Puzzle",
  difficulty: "Medium",
  ageRating: "All Ages"
},
{
  id: 9,
  title: "Haunted Mansion",
  description: "Brave the terrors of a supernatural mansion filled with ghosts and paranormal activity. Investigate the haunting, solve the mystery of the mansion's past, and try to escape before dawn.",
  image: "https://images.unsplash.com/photo-1561566482-5fa7e82d88b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  duration: "50 min",
  players: "1-4",
  rating: 4.7,
  category: "Horror",
  difficulty: "Medium",
  ageRating: "16+"
},
{
  id: 10,
  title: "Music Visualizer",
  description: "Step inside your favorite music in this audio-reactive experience. Create and manipulate visual effects that respond to rhythm, melody, and bass in a psychedelic virtual environment.",
  image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  duration: "30 min",
  players: "1",
  rating: 4.3,
  category: "Creative",
  difficulty: "Easy",
  ageRating: "All Ages"
},
{
  id: 11,
  title: "Medieval Battle",
  description: "Experience the chaos and glory of medieval warfare. Command armies, engage in sword combat, and siege castles in this historically-inspired battlefield simulation.",
  image: "https://images.unsplash.com/photo-1615672969032-45c313ae0a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  duration: "45 min",
  players: "1-6",
  rating: 4.5,
  category: "Action",
  difficulty: "Medium",
  ageRating: "16+"
},
{
  id: 12,
  title: "Neon Rhythm",
  description: "Dance and slash your way through a neon world where every movement syncs with the beat. Cut through flying objects and dodge obstacles in this rhythm-based action game.",
  image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  duration: "30 min",
  players: "1",
  rating: 4.9,
  category: "Rhythm",
  difficulty: "Medium",
  ageRating: "All Ages"
}];


const ExperiencesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [experiences, setExperiences] = useState(allExperiences);

  useEffect(() => {
    document.title = "VR Experiences - VR Arcade";

    // Filter experiences based on search and category
    const filtered = allExperiences.filter((exp) => {
      const matchesSearch = exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory = activeCategory === "all" || exp.category.toLowerCase() === activeCategory.toLowerCase();

      return matchesSearch && matchesCategory;
    });

    setExperiences(filtered);
  }, [searchTerm, activeCategory]);

  const categories = ["all", ...new Set(allExperiences.map((exp) => exp.category.toLowerCase()))];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto">

            <h1 className="text-4xl md:text-5xl font-display text-primary neon-text mb-6">
              VR Experiences
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Discover our collection of immersive virtual reality adventures. From heart-pounding action to mind-bending puzzles, find your perfect digital escape.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/50 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search experiences..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="cyber-input pl-10" />

              </div>
              
              <Button variant="outline" className="border-primary/50 text-primary">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Experiences Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-digital-noise opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full mb-8">

            <div className="overflow-x-auto pb-2">
              <TabsList className="bg-transparent h-auto p-1 inline-flex min-w-max">
                {categories.map((category) =>
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary border border-primary/30 data-[state=active]:border-primary px-4 py-2 capitalize">

                    {category}
                  </TabsTrigger>
                )}
              </TabsList>
            </div>
            
            <TabsContent value={activeCategory} className="mt-6">
              {experiences.length > 0 ?
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {experiences.map((experience) =>
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}>

                      <Card className="overflow-hidden border-primary/20 bg-black/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />

                          <div className="absolute top-2 right-2 bg-black/70 text-xs font-medium text-primary py-1 px-2 rounded backdrop-blur-sm border border-primary/30">
                            {experience.category}
                          </div>
                        </div>
                        
                        <CardContent className="p-6 flex-grow flex flex-col">
                          <h3 className="text-xl font-display text-primary mb-2">{experience.title}</h3>
                          <p className="text-foreground/70 text-sm mb-4 flex-grow">{experience.description.substring(0, 100)}...</p>
                          
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
                          
                          <div className="flex justify-between items-center text-xs text-foreground/60 mb-4">
                            <span>Difficulty: {experience.difficulty}</span>
                            <span>Age: {experience.ageRating}</span>
                          </div>
                          
                          <div className="flex space-x-2 mt-auto">
                            <Button asChild className="w-full cyber-button-secondary">
                              <Link to={`/booking`}>
                                Book Now
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                )}
                </div> :

              <div className="text-center py-12">
                  <h3 className="text-xl font-display text-primary mb-2">No experiences found</h3>
                  <p className="text-foreground/70">Try adjusting your search or filters</p>
                </div>
              }
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>);

};

export default ExperiencesPage;