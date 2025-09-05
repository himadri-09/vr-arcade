import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Info, ChevronRight, Cpu, Gamepad, Headphones, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

// Sample equipment data
const equipment = [
  {
    id: "headsets",
    name: "VR Headsets",
    icon: <Monitor className="h-5 w-5" />,
    items: [
      {
        id: 1,
        name: "Quantum Vision Pro",
        description: "Our flagship VR headset with 4K resolution per eye and 120Hz refresh rate.",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        specs: [
          "Resolution: 4K per eye",
          "Refresh Rate: 120Hz",
          "Field of View: 110°",
          "Tracking: 6DOF",
          "Weight: 470g"
        ]
      },
      {
        id: 2,
        name: "NeoVerse Lite",
        description: "Affordable yet powerful VR headset perfect for beginners.",
        image: "https://images.unsplash.com/photo-1626387346567-68d0b1ee4f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        specs: [
          "Resolution: 2K per eye",
          "Refresh Rate: 90Hz",
          "Field of View: 100°",
          "Tracking: 6DOF",
          "Weight: 520g"
        ]
      }
    ]
  },
  {
    id: "controllers",
    name: "Controllers",
    icon: <Gamepad className="h-5 w-5" />,
    items: [
      {
        id: 1,
        name: "Haptic Touch Controllers",
        description: "Advanced controllers with precise haptic feedback for immersive interactions.",
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        specs: [
          "Haptic Feedback: Advanced",
          "Battery Life: 8 hours",
          "Tracking: Optical",
          "Buttons: 8 + joystick",
          "Weight: 160g each"
        ]
      },
      {
        id: 2,
        name: "Motion Trackers",
        description: "Full-body tracking system for complete immersion in virtual environments.",
        image: "https://images.unsplash.com/photo-1581672845780-ff5f8cb0d82f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        specs: [
          "Tracking Points: 6",
          "Battery Life: 10 hours",
          "Latency: <5ms",
          "Range: 5m",
          "Weight: 40g each"
        ]
      }
    ]
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: <Headphones className="h-5 w-5" />,
    items: [
      {
        id: 1,
        name: "Spatial Audio Headphones",
        description: "3D audio headphones for complete auditory immersion.",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        specs: [
          "Audio: 3D Spatial",
          "Drivers: 50mm",
          "Frequency Response: 20Hz-20kHz",
          "Impedance: 32 ohms",
          "Weight: 280g"
        ]
      },
      {
        id: 2,
        name: "VR Treadmill",
        description: "Omnidirectional treadmill for natural movement in virtual spaces.",
        image: "https://images.unsplash.com/photo-1578593195423-e9f9656daf97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        specs: [
          "Movement: 360°",
          "Platform Size: 120cm diameter",
          "Max User Weight: 120kg",
          "Tracking: Optical + pressure",
          "Power: 110-240V"
        ]
      }
    ]
  },
  {
    id: "computers",
    name: "VR-Ready PCs",
    icon: <Cpu className="h-5 w-5" />,
    items: [
      {
        id: 1,
        name: "Quantum Rig 3080",
        description: "High-end gaming PC optimized for the most demanding VR experiences.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        specs: [
          "GPU: RTX 3080",
          "CPU: Ryzen 9 5900X",
          "RAM: 32GB DDR4",
          "Storage: 2TB NVMe SSD",
          "Cooling: Liquid"
        ]
      },
      {
        id: 2,
        name: "VR Station Compact",
        description: "Space-saving yet powerful PC designed specifically for VR gaming.",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        specs: [
          "GPU: RTX 3070",
          "CPU: Intel i7-11700K",
          "RAM: 16GB DDR4",
          "Storage: 1TB NVMe SSD",
          "Form Factor: Mini-ITX"
        ]
      }
    ]
  }
];

const EquipmentShowcase = () => {
  const [activeTab, setActiveTab] = useState("headsets");
  const [activeItem, setActiveItem] = useState(0);
  const [showSpecs, setShowSpecs] = useState(false);
  
  const currentCategory = equipment.find(cat => cat.id === activeTab);
  const currentItem = currentCategory?.items[activeItem];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black to-black/80"></div>
      <div className="absolute inset-0 bg-digital-noise opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display text-primary neon-text mb-4">
            Cutting-Edge Equipment
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Experience virtual reality with our state-of-the-art equipment. From high-resolution headsets to haptic controllers, we use only the best technology.
          </p>
        </motion.div>
        
        <Tabs 
          defaultValue="headsets" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent mb-8">
            {equipment.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary border border-primary/30 data-[state=active]:border-primary"
              >
                <div className="flex items-center">
                  {category.icon}
                  <span className="ml-2">{category.name}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {equipment.map((category) => (
            <TabsContent 
              key={category.id} 
              value={category.id}
              className="mt-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="order-2 lg:order-1">
                  <div className="mb-6">
                    <div className="flex gap-2 mb-4">
                      {category.items.map((item, index) => (
                        <button
                          key={item.id}
                          onClick={() => {
                            setActiveItem(index);
                            setShowSpecs(false);
                          }}
                          className={`w-3 h-3 rounded-full transition-all ${
                            activeItem === index 
                              ? "bg-primary shadow-neon-cyan" 
                              : "bg-primary/30"
                          }`}
                          aria-label={`Select ${item.name}`}
                        />
                      ))}
                    </div>
                    
                    <motion.div
                      key={currentItem?.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-display text-primary mb-2">
                        {currentItem?.name}
                      </h3>
                      <p className="text-foreground/80 mb-6">
                        {currentItem?.description}
                      </p>
                      
                      <div className="mb-6">
                        <Button 
                          variant="outline" 
                          onClick={() => setShowSpecs(!showSpecs)}
                          className="border-primary/50 text-primary"
                        >
                          <Info className="mr-2 h-4 w-4" />
                          {showSpecs ? "Hide Specifications" : "View Specifications"}
                        </Button>
                        
                        {showSpecs && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 bg-black/40 border border-primary/20 rounded-md p-4"
                          >
                            <h4 className="text-sm font-mono text-primary mb-2">Technical Specifications</h4>
                            <ul className="space-y-1 text-sm text-foreground/70">
                              {currentItem?.specs.map((spec, index) => (
                                <li key={index} className="flex items-center">
                                  <span className="text-primary mr-2">•</span>
                                  {spec}
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  </div>
                  
                  <Button asChild className="cyber-button">
                    <Link to="/equipment">
                      View All {category.name}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="order-1 lg:order-2">
                  <motion.div
                    key={currentItem?.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative rounded-lg overflow-hidden border border-primary/30 shadow-lg h-[300px]"
                  >
                    <img 
                      src={currentItem?.image} 
                      alt={currentItem?.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h4 className="text-lg font-display text-primary">
                        {currentItem?.name}
                      </h4>
                    </div>
                    
                    {/* Holographic effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent opacity-50 pointer-events-none"></div>
                  </motion.div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default EquipmentShowcase;