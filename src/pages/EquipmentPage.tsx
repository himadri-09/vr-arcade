import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Info, Cpu, Gamepad, Headphones, Monitor, Plus, Minus } from "lucide-react";

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
        description: "Our flagship VR headset with 4K resolution per eye and 120Hz refresh rate. Experience virtual worlds with unprecedented clarity and smoothness.",
        image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$999",
        specs: [
          "Resolution: 4K per eye",
          "Refresh Rate: 120Hz",
          "Field of View: 110°",
          "Tracking: 6DOF",
          "Weight: 470g",
          "Connectivity: Wireless/USB-C",
          "Battery Life: 3 hours",
          "Audio: Integrated spatial audio"
        ]
      },
      {
        id: 2,
        name: "NeoVerse Lite",
        description: "Affordable yet powerful VR headset perfect for beginners. Enjoy a wide range of VR experiences without breaking the bank.",
        image: "https://images.unsplash.com/photo-1626387346567-68d0b1ee4f58?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$499",
        specs: [
          "Resolution: 2K per eye",
          "Refresh Rate: 90Hz",
          "Field of View: 100°",
          "Tracking: 6DOF",
          "Weight: 520g",
          "Connectivity: USB-C",
          "Battery Life: 2.5 hours",
          "Audio: Headphone jack"
        ]
      },
      {
        id: 3,
        name: "ProGamer VR Ultra",
        description: "Designed specifically for competitive VR gaming with ultra-low latency and high refresh rate for the most demanding players.",
        image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$1299",
        specs: [
          "Resolution: 4K per eye",
          "Refresh Rate: 144Hz",
          "Field of View: 120°",
          "Tracking: 6DOF with finger tracking",
          "Weight: 490g",
          "Connectivity: Wireless/USB-C",
          "Battery Life: 2 hours (hot-swappable)",
          "Audio: Premium spatial audio"
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
        description: "Advanced controllers with precise haptic feedback for immersive interactions. Feel every virtual texture and impact with realistic sensations.",
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$199",
        specs: [
          "Haptic Feedback: Advanced",
          "Battery Life: 8 hours",
          "Tracking: Optical",
          "Buttons: 8 + joystick",
          "Weight: 160g each",
          "Connectivity: Bluetooth 5.0",
          "Charging: USB-C",
          "Compatibility: Universal"
        ]
      },
      {
        id: 2,
        name: "Motion Trackers",
        description: "Full-body tracking system for complete immersion in virtual environments. Track your movements with millimeter precision.",
        image: "https://images.unsplash.com/photo-1581672845780-ff5f8cb0d82f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$299",
        specs: [
          "Tracking Points: 6",
          "Battery Life: 10 hours",
          "Latency: <5ms",
          "Range: 5m",
          "Weight: 40g each",
          "Connectivity: Wireless 2.4GHz",
          "Charging: Magnetic dock",
          "Compatibility: Most VR systems"
        ]
      },
      {
        id: 3,
        name: "Precision Gloves",
        description: "Finger tracking gloves that allow for natural hand movements and gestures in virtual reality with individual finger tracking.",
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$349",
        specs: [
          "Tracking: Individual finger",
          "Haptic Feedback: Yes",
          "Battery Life: 6 hours",
          "Latency: <3ms",
          "Weight: 120g per pair",
          "Connectivity: Bluetooth 5.1",
          "Charging: Wireless",
          "Material: Breathable fabric"
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
        description: "3D audio headphones for complete auditory immersion. Hear sounds from all directions with pinpoint accuracy for a truly immersive experience.",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$149",
        specs: [
          "Audio: 3D Spatial",
          "Drivers: 50mm",
          "Frequency Response: 20Hz-20kHz",
          "Impedance: 32 ohms",
          "Weight: 280g",
          "Connectivity: Wireless/3.5mm",
          "Battery Life: 15 hours",
          "Noise Cancellation: Active"
        ]
      },
      {
        id: 2,
        name: "VR Treadmill",
        description: "Omnidirectional treadmill for natural movement in virtual spaces. Walk, run, and explore virtual worlds with your actual legs.",
        image: "https://images.unsplash.com/photo-1578593195423-e9f9656daf97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$1999",
        specs: [
          "Movement: 360°",
          "Platform Size: 120cm diameter",
          "Max User Weight: 120kg",
          "Tracking: Optical + pressure",
          "Power: 110-240V",
          "Connectivity: Bluetooth/USB",
          "Compatibility: Most VR systems",
          "Assembly: Required"
        ]
      },
      {
        id: 3,
        name: "Haptic Vest",
        description: "Full torso haptic feedback system that lets you feel impacts, environmental effects, and even heartbeats in virtual reality.",
        image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$399",
        specs: [
          "Haptic Points: 40",
          "Intensity Levels: 10",
          "Battery Life: 5 hours",
          "Weight: 1.2kg",
          "Connectivity: Wireless",
          "Charging: USB-C",
          "Size: Adjustable (S-XXL)",
          "Washable: Removable electronics"
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
        description: "High-end gaming PC optimized for the most demanding VR experiences. Run any VR title at maximum settings with this powerhouse system.",
        image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$2499",
        specs: [
          "GPU: RTX 3080",
          "CPU: Ryzen 9 5900X",
          "RAM: 32GB DDR4",
          "Storage: 2TB NVMe SSD",
          "Cooling: Liquid",
          "Power Supply: 850W Gold",
          "Case: Mid-tower with RGB",
          "OS: Windows 11 Pro"
        ]
      },
      {
        id: 2,
        name: "VR Station Compact",
        description: "Space-saving yet powerful PC designed specifically for VR gaming. Perfect for smaller spaces without compromising on performance.",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$1899",
        specs: [
          "GPU: RTX 3070",
          "CPU: Intel i7-11700K",
          "RAM: 16GB DDR4",
          "Storage: 1TB NVMe SSD",
          "Form Factor: Mini-ITX",
          "Power Supply: 650W Gold",
          "Cooling: Air cooling",
          "OS: Windows 11 Home"
        ]
      },
      {
        id: 3,
        name: "VR Laptop Pro",
        description: "Portable VR-ready laptop for gaming on the go. Take your virtual reality experiences anywhere with this powerful mobile solution.",
        image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$2199",
        specs: [
          "GPU: RTX 3070 Mobile",
          "CPU: Intel i9-11900H",
          "RAM: 32GB DDR4",
          "Storage: 1TB NVMe SSD",
          "Display: 15.6\" 165Hz QHD",
          "Battery: 99Wh",
          "Weight: 2.3kg",
          "Ports: Thunderbolt 4, HDMI 2.1"
        ]
      }
    ]
  }
];

const EquipmentPage = () => {
  const [activeTab, setActiveTab] = useState("headsets");
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  
  useEffect(() => {
    document.title = "VR Equipment - VR Arcade";
  }, []);
  
  const toggleExpanded = (itemId: number) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black/80 z-0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.1)_0%,transparent_70%)] z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-display text-primary neon-text mb-6">
              Cutting-Edge Equipment
            </h1>
            <p className="text-xl text-foreground/80 mb-8">
              Explore our state-of-the-art VR hardware. From high-resolution headsets to haptic controllers, we use only the best technology for the ultimate immersive experience.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Equipment Section */}
      <section className="py-12 relative">
        <div className="absolute inset-0 bg-digital-noise opacity-5"></div>
        
        <div className="container mx-auto px-4 relative z-10">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="overflow-hidden border-primary/20 bg-black/60 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          />
                          <div className="absolute top-2 right-2 bg-black/70 text-lg font-mono text-primary py-1 px-3 rounded backdrop-blur-sm border border-primary/30">
                            {item.price}
                          </div>
                        </div>
                        
                        <CardContent className="p-6 flex-grow flex flex-col">
                          <h3 className="text-xl font-display text-primary mb-2">{item.name}</h3>
                          <p className="text-foreground/70 text-sm mb-4">{item.description}</p>
                          
                          <div className="mt-auto">
                            <Button 
                              variant="outline" 
                              onClick={() => toggleExpanded(item.id)}
                              className="w-full border-primary/50 text-primary flex items-center justify-center"
                            >
                              <Info className="mr-2 h-4 w-4" />
                              {expandedItems[item.id] ? "Hide Specifications" : "View Specifications"}
                              {expandedItems[item.id] ? (
                                <Minus className="ml-2 h-4 w-4" />
                              ) : (
                                <Plus className="ml-2 h-4 w-4" />
                              )}
                            </Button>
                            
                            {expandedItems[item.id] && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 bg-black/40 border border-primary/20 rounded-md p-4"
                              >
                                <h4 className="text-sm font-mono text-primary mb-2">Technical Specifications</h4>
                                <ul className="space-y-1 text-sm text-foreground/70">
                                  {item.specs.map((spec, index) => (
                                    <li key={index} className="flex items-center">
                                      <span className="text-primary mr-2">•</span>
                                      {spec}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Equipment Rental Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black to-black/90"></div>
        <div className="absolute inset-0 bg-cyber-grid bg-[length:30px_30px] opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display text-secondary neon-text mb-4">
              Equipment Rental
            </h2>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Want to try VR at home? Rent our professional equipment for your personal use or special events.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-secondary/30 bg-black/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-display text-secondary mb-4">Daily Rental</h3>
                <div className="text-3xl font-mono text-secondary mb-4">$99</div>
                <ul className="space-y-2 text-sm text-foreground/70 mb-6">
                  <li>VR Headset + Controllers</li>
                  <li>24-hour rental period</li>
                  <li>Basic game package</li>
                  <li>Technical support</li>
                </ul>
                <Button className="cyber-button-secondary w-full">
                  Reserve Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/30 bg-black/60 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-secondary text-black text-xs font-bold py-1 px-3 transform rotate-45 translate-x-[30%] translate-y-[50%]">
                POPULAR
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-display text-secondary mb-4">Weekend Package</h3>
                <div className="text-3xl font-mono text-secondary mb-4">$199</div>
                <ul className="space-y-2 text-sm text-foreground/70 mb-6">
                  <li>VR Headset + Controllers</li>
                  <li>Friday to Monday rental</li>
                  <li>Premium game package</li>
                  <li>Technical support</li>
                  <li>Carrying case included</li>
                </ul>
                <Button className="cyber-button-secondary w-full">
                  Reserve Now
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-secondary/30 bg-black/60 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-display text-secondary mb-4">Event Rental</h3>
                <div className="text-3xl font-mono text-secondary mb-4">$499</div>
                <ul className="space-y-2 text-sm text-foreground/70 mb-6">
                  <li>Multiple VR Stations</li>
                  <li>Custom rental period</li>
                  <li>On-site technical staff</li>
                  <li>Custom game selection</li>
                  <li>Setup and teardown included</li>
                </ul>
                <Button className="cyber-button-secondary w-full">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipmentPage;