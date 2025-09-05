import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check as CheckCircle, Circle as XCircle, Cpu, Monitor, MemoryStick as Memory, HardDrive, AlertCircle } from "lucide-react";

const CompatibilityChecker = () => {
  const [isChecking, setIsChecking] = useState(false);
  const [results, setResults] = useState<null | {
    compatible: boolean;
    specs: {
      cpu: {value: string;meets: boolean;};
      gpu: {value: string;meets: boolean;};
      ram: {value: string;meets: boolean;};
      storage: {value: string;meets: boolean;};
    };
    overallScore: number;
  }>(null);

  const checkCompatibility = () => {
    setIsChecking(true);

    // Simulate system check
    setTimeout(() => {
      // This would normally be actual system detection
      // For demo purposes, we'll simulate a mostly compatible system
      setResults({
        compatible: true,
        specs: {
          cpu: {
            value: "Intel Core i7-10700K",
            meets: true
          },
          gpu: {
            value: "NVIDIA GeForce RTX 3070",
            meets: true
          },
          ram: {
            value: "16GB DDR4",
            meets: true
          },
          storage: {
            value: "512GB SSD",
            meets: true
          }
        },
        overallScore: 87
      });

      setIsChecking(false);
    }, 2000);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black to-black/90"></div>
      <div className="absolute inset-0 bg-digital-noise opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-display text-accent neon-text mb-4">
            VR Compatibility Checker
          </h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Not sure if your system can handle VR? Use our compatibility tool to check if your computer meets the requirements for our VR experiences.
          </p>
        </motion.div>
        
        <Card className="max-w-3xl mx-auto border-accent/30 bg-black/60 backdrop-blur-md">
          <CardContent className="p-6 md:p-8">
            {!results ?
            <div className="text-center">
                <div className="mb-8">
                  <h3 className="text-xl font-heading text-accent mb-4">System Requirements</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <div className="flex items-start">
                      <Cpu className="h-5 w-5 text-accent mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-mono text-foreground">CPU</h4>
                        <p className="text-sm text-foreground/70">Intel i5/Ryzen 5 or better</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Monitor className="h-5 w-5 text-accent mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-mono text-foreground">GPU</h4>
                        <p className="text-sm text-foreground/70">NVIDIA GTX 1060/AMD RX 580 or better</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Memory className="h-5 w-5 text-accent mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-mono text-foreground">RAM</h4>
                        <p className="text-sm text-foreground/70">8GB minimum, 16GB recommended</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <HardDrive className="h-5 w-5 text-accent mr-3 mt-0.5" />
                      <div>
                        <h4 className="font-mono text-foreground">Storage</h4>
                        <p className="text-sm text-foreground/70">10GB free space minimum</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Button
                onClick={checkCompatibility}
                className="cyber-button-accent"
                disabled={isChecking}>

                  {isChecking ? "Checking System..." : "Check Compatibility"}
                </Button>
              </div> :

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}>

                <div className="text-center mb-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                results.compatible ?
                "bg-accent/20 text-accent" :
                "bg-error/20 text-error"}`
                }>
                    {results.compatible ?
                  <CheckCircle className="h-8 w-8" /> :

                  <XCircle className="h-8 w-8" />
                  }
                  </div>
                  
                  <h3 className="text-xl font-heading mb-2">
                    {results.compatible ?
                  "Your System is VR Ready!" :
                  "Your System Needs Upgrades"
                  }
                  </h3>
                  <p className="text-foreground/70">
                    {results.compatible ?
                  "Your computer meets the requirements for our VR experiences." :
                  "Your computer needs some upgrades to run VR smoothly."
                  }
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-mono text-accent mb-4">System Specifications</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border border-accent/20 rounded-md bg-black/40">
                      <div className="flex items-center">
                        <Cpu className="h-5 w-5 text-accent mr-3" />
                        <div>
                          <p className="font-mono">CPU</p>
                          <p className="text-sm text-foreground/70">{results.specs.cpu.value}</p>
                        </div>
                      </div>
                      {results.specs.cpu.meets ?
                    <CheckCircle className="h-5 w-5 text-accent" /> :

                    <AlertCircle className="h-5 w-5 text-warning" />
                    }
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-accent/20 rounded-md bg-black/40">
                      <div className="flex items-center">
                        <Monitor className="h-5 w-5 text-accent mr-3" />
                        <div>
                          <p className="font-mono">GPU</p>
                          <p className="text-sm text-foreground/70">{results.specs.gpu.value}</p>
                        </div>
                      </div>
                      {results.specs.gpu.meets ?
                    <CheckCircle className="h-5 w-5 text-accent" /> :

                    <XCircle className="h-5 w-5 text-error" />
                    }
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-accent/20 rounded-md bg-black/40">
                      <div className="flex items-center">
                        <Memory className="h-5 w-5 text-accent mr-3" />
                        <div>
                          <p className="font-mono">RAM</p>
                          <p className="text-sm text-foreground/70">{results.specs.ram.value}</p>
                        </div>
                      </div>
                      {results.specs.ram.meets ?
                    <CheckCircle className="h-5 w-5 text-accent" /> :

                    <AlertCircle className="h-5 w-5 text-warning" />
                    }
                    </div>
                    
                    <div className="flex items-center justify-between p-3 border border-accent/20 rounded-md bg-black/40">
                      <div className="flex items-center">
                        <HardDrive className="h-5 w-5 text-accent mr-3" />
                        <div>
                          <p className="font-mono">Storage</p>
                          <p className="text-sm text-foreground/70">{results.specs.storage.value}</p>
                        </div>
                      </div>
                      {results.specs.storage.meets ?
                    <CheckCircle className="h-5 w-5 text-accent" /> :

                    <CheckCircle className="h-5 w-5 text-accent" />
                    }
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-mono text-accent mb-4">Performance Score</h4>
                  <div className="relative h-4 bg-black/40 rounded-full overflow-hidden border border-accent/20">
                    <div
                    className="h-full bg-accent"
                    style={{ width: `${results.overallScore}%` }}>
                  </div>
                  </div>
                  <div className="flex justify-between mt-2 text-sm">
                    <span className="text-foreground/70">0</span>
                    <span className="text-accent font-mono">{results.overallScore}%</span>
                    <span className="text-foreground/70">100</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <Button
                  onClick={() => setResults(null)}
                  className="cyber-button">

                    Check Again
                  </Button>
                </div>
              </motion.div>
            }
          </CardContent>
        </Card>
      </div>
    </section>);

};

export default CompatibilityChecker;